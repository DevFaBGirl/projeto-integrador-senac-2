/* ==========================================================
   Minha Confeitaria Online — comportamento da página
   - Catálogo de produtos (cadastrar, listar, editar, excluir, pesquisar)
   - Dados salvos no localStorage (sem banco de dados externo)
   - Pedido de orçamento pelo WhatsApp
   - Abas do "navegador" acompanham a rolagem
   ========================================================== */

"use strict";

/* ----- Configurações (troque pelos dados reais) ----- */
const WHATSAPP = "5511999999999"; // DDI + DDD + número, só dígitos
const CHAVE = "produtos_confeitaria";
const CHAVE_INICIAL = "produtos_confeitaria_iniciado";
const IMAGEM_PADRAO = "img/utensilios.webp";

/* ----- Atalhos para elementos ----- */
const $ = (id) => document.getElementById(id);
const lista = $("catalogo-lista");
const vazio = $("estado-vazio");
const contador = $("contador");
const busca = $("busca");
const form = $("form-produto");
const toastEl = $("toast");

/* ==========================================================
   1. Armazenamento
   ========================================================== */

const EXEMPLOS = [
  { nome: "Bolo de morango com chantilly", descricao: "Massa branca, recheio de creme e morangos frescos, coberto com chantilly.", preco: 120, imagem: "img/bolo-morango.jpg" },
  { nome: "Caixa de brigadeiros gourmet", descricao: "12 unidades em sabores variados: tradicional, beijinho, ninho e pistache.", preco: 48, imagem: "img/brigadeiros.jpg" },
  { nome: "Kit festa personalizado", descricao: "Bolo pequeno, 50 docinhos e 12 cupcakes decorados no tema da sua festa.", preco: 260, imagem: "img/kit-festa.jpg" },
  { nome: "Torta doce de cereja", descricao: "Massa amanteigada com recheio de cerejas e cobertura em treliça.", preco: 85, imagem: "img/torta-doce.jpg" },
];

/* Lê os produtos com segurança: se o dado estiver quebrado, volta lista vazia */
function lerProdutos() {
  try {
    const bruto = JSON.parse(localStorage.getItem(CHAVE) || "[]");
    if (!Array.isArray(bruto)) return [];
    return bruto
      .filter((p) => p && typeof p.nome === "string")
      .map((p, i) => ({
        id: p.id || Date.now() + i,
        nome: String(p.nome),
        descricao: String(p.descricao || ""),
        preco: Number(p.preco) || 0,
        imagem: typeof p.imagem === "string" ? p.imagem : "",
      }));
  } catch (e) {
    return [];
  }
}

/* Grava e devolve true/false (o armazenamento pode estar cheio ou bloqueado) */
function salvarProdutos(produtos) {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(produtos));
    return true;
  } catch (e) {
    avisar("Não foi possível salvar. O armazenamento do navegador está cheio ou bloqueado.", true);
    return false;
  }
}

/* Na primeira visita, mostra alguns produtos de exemplo */
const VERSAO_EXEMPLOS = "3";

/* Um produto tem imagem válida se for uma foto enviada pelo usuário (data:) ou uma das fotos dos exemplos */
const temImagemValida = (p) =>
  Boolean(p.imagem) && (p.imagem.startsWith("data:") || EXEMPLOS.some((e) => e.imagem === p.imagem));

function iniciarExemplos() {
  try {
    const anterior = localStorage.getItem(CHAVE_INICIAL);
    if (anterior === VERSAO_EXEMPLOS) return;

    let produtos = lerProdutos();
    // Primeira visita: só inclui os exemplos se o catálogo estiver vazio.
    // Visita anterior (versão antiga): completa os exemplos que faltam e as fotos
    // e remove os produtos antigos que ficaram sem imagem válida.
    const podeIncluir = anterior === null ? produtos.length === 0 : true;
    let mudou = false;

    EXEMPLOS.forEach((ex, i) => {
      const existente = produtos.find((p) => p.nome === ex.nome);
      if (!existente) {
        if (podeIncluir) { produtos.push({ ...ex, id: Date.now() + i }); mudou = true; }
      } else if (!existente.imagem) {
        existente.imagem = ex.imagem;
        mudou = true;
      }
    });

    if (anterior !== null) {
      const validos = produtos.filter(temImagemValida);
      if (validos.length !== produtos.length) { produtos = validos; mudou = true; }
    }

    if (mudou) salvarProdutos(produtos);
    localStorage.setItem(CHAVE_INICIAL, VERSAO_EXEMPLOS);
  } catch (e) { /* sem localStorage: segue sem exemplos */ }
}

/* ==========================================================
   2. Utilitários
   ========================================================== */

const moeda = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

/* Remove acentos e maiúsculas para a pesquisa */
const normalizar = (t) => t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

let timerAviso;
function avisar(texto, erro = false) {
  toastEl.textContent = texto;
  toastEl.className = "toast" + (erro ? " toast--error" : "");
  toastEl.hidden = false;
  clearTimeout(timerAviso);
  timerAviso = setTimeout(() => { toastEl.hidden = true; }, 3500);
}

/* Cria um elemento só com textContent (nunca innerHTML: evita XSS) */
function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

/* Reduz a imagem escolhida para caber no localStorage */
function reduzirImagem(arquivo, maxLado = 480) {
  return new Promise((resolve, reject) => {
    const leitor = new FileReader();
    leitor.onerror = () => reject(new Error("leitura"));
    leitor.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("imagem"));
      img.onload = () => {
        const escala = Math.min(1, maxLado / Math.max(img.width, img.height));
        const c = document.createElement("canvas");
        c.width = Math.round(img.width * escala);
        c.height = Math.round(img.height * escala);
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        resolve(c.toDataURL("image/jpeg", 0.8));
      };
      img.src = leitor.result;
    };
    leitor.readAsDataURL(arquivo);
  });
}

/* ==========================================================
   3. Listagem do catálogo
   ========================================================== */

function criarCartao(p) {
  const card = el("article", "product");
  card.dataset.id = p.id;

  const img = el("img", "product__img" + (p.imagem ? "" : " product__img--default"));
  img.src = p.imagem || IMAGEM_PADRAO;
  img.alt = p.imagem ? "Foto de " + p.nome : "Ilustração padrão de confeitaria";
  img.loading = "lazy";

  const corpo = el("div", "product__body");
  corpo.append(el("h3", "product__name", p.nome), el("p", "product__desc", p.descricao));

  const preco = el("p", "product__price");
  preco.append(el("small", "", "a partir de "), document.createTextNode(moeda(p.preco)));

  const acoes = el("div", "product__actions");
  const editar = el("button", "btn btn--ghost btn--small", "Editar");
  editar.type = "button"; editar.dataset.acao = "editar";
  editar.setAttribute("aria-label", "Editar " + p.nome);
  const excluir = el("button", "btn btn--ghost btn--small btn--danger", "Excluir");
  excluir.type = "button"; excluir.dataset.acao = "excluir";
  excluir.setAttribute("aria-label", "Excluir " + p.nome);
  acoes.append(editar, excluir);

  corpo.append(preco, acoes);
  card.append(img, corpo);
  return card;
}

function renderizar() {
  const todos = lerProdutos();
  const termo = normalizar(busca.value.trim());
  const filtrados = termo ? todos.filter((p) => normalizar(p.nome).includes(termo)) : todos;

  lista.replaceChildren(...filtrados.map(criarCartao));

  if (filtrados.length === 0) {
    vazio.textContent = todos.length === 0
      ? "Nenhum produto cadastrado ainda. Use a Área da confeiteira abaixo para cadastrar o primeiro."
      : "Nenhum produto encontrado para “" + busca.value.trim() + "”.";
    vazio.hidden = false;
  } else {
    vazio.hidden = true;
  }

  contador.textContent = todos.length === 0 ? "" :
    filtrados.length + (filtrados.length === 1 ? " produto" : " produtos") +
    (termo ? (filtrados.length === 1 ? " encontrado" : " encontrados") : "");

  preencherSelectOrcamento(todos);
}

/* ==========================================================
   4. Cadastro, edição e exclusão
   ========================================================== */

const campos = { nome: $("nome"), preco: $("preco"), descricao: $("descricao") };

function mostrarErro(campo, msg) {
  $("erro-" + campo).textContent = msg;
  campos[campo].classList.toggle("is-invalid", Boolean(msg));
  campos[campo].setAttribute("aria-invalid", msg ? "true" : "false");
}

function validar() {
  const nome = campos.nome.value.trim();
  const descricao = campos.descricao.value.trim();
  const preco = parseFloat(campos.preco.value);
  let ok = true;

  mostrarErro("nome", nome.length < 2 ? "Informe o nome do produto (mínimo 2 letras)." : "");
  mostrarErro("descricao", descricao.length < 5 ? "Escreva uma descrição (mínimo 5 letras)." : "");
  mostrarErro("preco", !(preco > 0) ? "Informe um preço maior que zero." : "");
  if (nome.length < 2 || descricao.length < 5 || !(preco > 0)) ok = false;

  return ok ? { nome, descricao, preco: Math.round(preco * 100) / 100 } : null;
}

function limparFormulario() {
  form.reset();
  $("produto-id").value = "";
  $("btn-salvar").textContent = "Cadastrar produto";
  $("btn-cancelar").hidden = true;
  $("dica-imagem").textContent = "Sem imagem, o produto usa uma ilustração padrão.";
  Object.keys(campos).forEach((c) => mostrarErro(c, ""));
}

form.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const dados = validar();
  if (!dados) return;

  const produtos = lerProdutos();
  const id = $("produto-id").value;
  const arquivo = $("imagem").files[0];

  let imagem;
  if (arquivo) {
    if (!arquivo.type.startsWith("image/")) {
      avisar("Escolha um arquivo de imagem.", true);
      return;
    }
    try { imagem = await reduzirImagem(arquivo); }
    catch (e) { avisar("Não foi possível ler essa imagem.", true); return; }
  }

  if (id) {
    const p = produtos.find((x) => String(x.id) === id);
    if (!p) { limparFormulario(); return; }
    Object.assign(p, dados);
    if (imagem) p.imagem = imagem;
  } else {
    produtos.push({ id: Date.now(), ...dados, imagem: imagem || "" });
  }

  if (!salvarProdutos(produtos)) return;
  avisar(id ? "Produto atualizado!" : "Produto cadastrado!");
  limparFormulario();
  renderizar();
});

$("btn-cancelar").addEventListener("click", limparFormulario);

/* Botões Editar/Excluir (um único ouvinte para toda a lista) */
lista.addEventListener("click", (ev) => {
  const botao = ev.target.closest("button[data-acao]");
  if (!botao) return;
  const id = botao.closest(".product").dataset.id;
  const produtos = lerProdutos();
  const p = produtos.find((x) => String(x.id) === id);
  if (!p) return;

  if (botao.dataset.acao === "editar") {
    $("produto-id").value = p.id;
    campos.nome.value = p.nome;
    campos.descricao.value = p.descricao;
    campos.preco.value = p.preco;
    $("imagem").value = "";
    $("dica-imagem").textContent = p.imagem
      ? "Deixe em branco para manter a imagem atual."
      : "Sem imagem, o produto usa uma ilustração padrão.";
    $("btn-salvar").textContent = "Salvar alterações";
    $("btn-cancelar").hidden = false;
    $("cadastro").scrollIntoView({ behavior: "smooth", block: "start" });
    campos.nome.focus({ preventScroll: true });
  } else if (confirm("Excluir “" + p.nome + "”? Esta ação não pode ser desfeita.")) {
    if (salvarProdutos(produtos.filter((x) => x !== p))) {
      if ($("produto-id").value === id) limparFormulario();
      avisar("Produto excluído.");
      renderizar();
    }
  }
});

busca.addEventListener("input", renderizar);

/* ==========================================================
   5. Pedido de orçamento pelo WhatsApp
   ========================================================== */

const selectProduto = $("o-produto");

function preencherSelectOrcamento(produtos) {
  const atual = selectProduto.value;
  const opcoes = [new Option("Ainda não sei / outro", "")];
  produtos.forEach((p) => opcoes.push(new Option(p.nome, p.nome)));
  selectProduto.replaceChildren(...opcoes);
  selectProduto.value = [...selectProduto.options].some((o) => o.value === atual) ? atual : "";
}

$("form-orcamento").addEventListener("submit", (ev) => {
  ev.preventDefault();
  const nome = $("o-nome").value.trim();
  const erro = $("erro-o-nome");
  erro.textContent = nome ? "" : "Informe seu nome.";
  $("o-nome").classList.toggle("is-invalid", !nome);
  if (!nome) return;

  const produto = selectProduto.value;
  const data = $("o-data").value; // aaaa-mm-dd
  const detalhes = $("o-msg").value.trim();

  const linhas = ["Olá! Meu nome é " + nome + " e gostaria de um orçamento."];
  if (produto) linhas.push("Produto: " + produto);
  if (data) linhas.push("Data do evento: " + data.split("-").reverse().join("/"));
  if (detalhes) linhas.push("Detalhes: " + detalhes);

  const url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(linhas.join("\n"));
  window.open(url, "_blank", "noopener");
});

/* ==========================================================
   6. Abas do "navegador" acompanham a rolagem
   ========================================================== */

const abas = [...document.querySelectorAll(".tab")];
const alvos = abas.map((a) => document.querySelector(a.getAttribute("href")));
const coresBolinha = ["#2fb5a5", "#d6356a", "#4a74d9", "#f2b13a", "#d6356a", "#2fb5a5"];
let abaAtiva = -1;

function atualizarAbas() {
  let indice = 0;
  alvos.forEach((s, i) => { if (s.getBoundingClientRect().top <= 140) indice = i; });
  // No fim da página, destaca a última aba (Contato)
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) indice = alvos.length - 1;
  if (indice === abaAtiva) return;

  abaAtiva = indice;
  abas.forEach((a, i) => {
    a.classList.toggle("is-active", i === indice);
    if (i === indice) { a.setAttribute("aria-current", "true"); a.scrollIntoView({ inline: "nearest", block: "nearest" }); }
    else a.removeAttribute("aria-current");
  });
  $("tabDot").style.background = coresBolinha[indice];
}

let aguardando = false;
window.addEventListener("scroll", () => {
  if (aguardando) return;
  aguardando = true;
  requestAnimationFrame(() => { atualizarAbas(); aguardando = false; });
}, { passive: true });

/* ==========================================================
   Início
   ========================================================== */
iniciarExemplos();
renderizar();
atualizarAbas();
