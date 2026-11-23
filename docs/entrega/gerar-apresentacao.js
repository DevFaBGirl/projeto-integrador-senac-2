/*
  Gera a apresentação em PDF (docs/entrega/apresentacao.pdf).

  Como usar (precisa do Node.js e do Microsoft Edge instalados):
    node docs/entrega/gerar-apresentacao.js

  Os prints são lidos de docs/entrega/img/ (ou docs/evidencias/prints/), pelo início do nome (ex.: 07-edicao...).
  Onde o print ainda não existe, o slide mostra um quadro tracejado com o nome do arquivo.
*/
const fs = require("fs");
const os = require("os");
const path = require("path");
const { execFileSync } = require("child_process");

const SAIDA_HTML = path.join(__dirname, "apresentacao.html");
const SAIDA_PDF = path.join(__dirname, "apresentacao.pdf");

// Pastas onde os prints podem estar, com o caminho relativo a este arquivo
const PASTAS = [
  { dir: path.join(__dirname, "img"), rel: "img" },
  { dir: path.join(__dirname, "..", "evidencias", "prints"), rel: "../evidencias/prints" },
];
const EXTENSOES = /\.(png|jpe?g|webp)$/i;

// Acha o arquivo cujo nome começa com o prefixo (ex.: "07-edicao" encontra "07-edicao de um produto.jpg")
function achaPrint(prefixo) {
  for (const { dir, rel } of PASTAS) {
    if (!fs.existsSync(dir)) continue;
    const arquivo = fs.readdirSync(dir).find((f) => EXTENSOES.test(f) && f.toLowerCase().startsWith(prefixo.toLowerCase()));
    if (arquivo) return `${rel}/${encodeURIComponent(arquivo)}`;
  }
  return null;
}

function figura(base, legenda) {
  const src = achaPrint(base);
  const miolo = src
    ? `<img src="${src}" alt="${legenda}">`
    : `<div class="vazio">Print pendente<br><code>${base}.png</code></div>`;
  return `<figure>${miolo}<figcaption>${legenda}</figcaption></figure>`;
}

const slidesTelas = [
  ["Telas: página inicial", [["01-landing-desktop", "Página inicial no computador"], ["02-landing-celular", "Página inicial no celular"]]],
  ["Telas: catálogo e pesquisa", [["03-catalogo", "Catálogo de produtos"], ["08-pesquisa", "Pesquisa por nome"]]],
  ["Telas: validação e feedback", [["05-erro-validacao", "Mensagens de erro junto aos campos"], ["06-cadastro-sucesso", "Aviso de sucesso ao cadastrar"]]],
  ["Telas: edição e galeria", [["07-edicao", "Edição de um produto"], ["09-galeria", "Galeria de trabalhos"]]],
  ["Telas: cadastro e encomenda", [["04-formulario-cadastro", "Formulário de cadastro de produto"], ["10-encomenda", "Como encomendar e pedido de orçamento"]]],
  ["Teste manual: orçamento pelo WhatsApp", [["11-whatsapp", "Ao clicar em Enviar pelo WhatsApp, abre a conversa com a mensagem pronta"]]],
];

const slides = [];

slides.push(`
<section class="slide capa">
  <p class="etq">Projeto Integrador SENAC · 2ª etapa</p>
  <h1>Minha Confeitaria Online</h1>
  <p class="sub">Landing page com catálogo de produtos gerenciável</p>
  <p class="meta">Grupo 37 · 2026<br>Desenvolvimento da Aplicação Web utilizando Boas Práticas de Desenvolvimento de Software</p>
</section>`);

slides.push(`
<section class="slide">
  <h2>O problema</h2>
  <ul class="grande">
    <li>Confeiteiras e confeiteiros autônomos têm <strong>produtos, contato e encomendas espalhados</strong> em redes sociais e aplicativos de mensagem.</li>
    <li>Falta um lugar <strong>profissional e organizado</strong> para se apresentar e mostrar o trabalho.</li>
    <li>Clientes têm dúvidas sobre prazo, tipos de produto e como pedir orçamento.</li>
  </ul>
</section>`);

slides.push(`
<section class="slide">
  <h2>A solução</h2>
  <div class="duas">
    <div class="caixa"><h3>Vitrine pública</h3><p>Landing page responsiva que apresenta a confeiteira, o catálogo, a galeria de trabalhos e as informações para encomenda, com orçamento direto pelo WhatsApp.</p></div>
    <div class="caixa"><h3>Catálogo gerenciável</h3><p>A própria confeiteira cadastra, lista, edita, exclui e pesquisa os produtos, sem login e sem banco de dados externo.</p></div>
  </div>
  <p class="nota">Público: confeiteiras autônomas e pessoas que querem encomendar bolos, doces e kits para festas.</p>
</section>`);

slides.push(`
<section class="slide">
  <h2>Funcionalidades</h2>
  <table>
    <tr><th>Landing page</th><th>Gerenciamento do catálogo</th></tr>
    <tr><td>Apresentação da confeiteira</td><td>Cadastrar produto (nome, descrição, preço e imagem)</td></tr>
    <tr><td>Catálogo com imagem e preço</td><td>Listar produtos, com estado vazio</td></tr>
    <tr><td>Galeria de trabalhos</td><td>Editar e excluir (com confirmação)</td></tr>
    <tr><td>Informações para encomenda</td><td>Pesquisar por nome</td></tr>
    <tr><td>Contato e orçamento pelo WhatsApp</td><td>Validação e avisos de sucesso/erro</td></tr>
  </table>
  <p class="nota">Dados salvos no <code>localStorage</code> do navegador.</p>
</section>`);

slides.push(`
<section class="slide">
  <h2>Tecnologias e estrutura</h2>
  <div class="duas">
    <div class="caixa"><h3>Tecnologias</h3><ul><li>HTML, CSS e JavaScript puros</li><li><code>localStorage</code> para os dados</li><li>Git e GitHub para versionamento</li></ul></div>
    <div class="caixa"><h3>Arquivos</h3><ul><li><code>index.html</code>: estrutura</li><li><code>style.css</code>: aparência</li><li><code>script.js</code>: comportamento</li><li><code>img/</code>: ilustrações</li><li><code>docs/</code>: documentação</li></ul></div>
  </div>
</section>`);

slidesTelas.forEach(([titulo, itens]) => {
  slides.push(`
<section class="slide">
  <h2>${titulo}</h2>
  <div class="telas${itens.length === 1 ? " um" : ""}">${itens.map(([b, l]) => figura(b, l)).join("")}</div>
</section>`);
});

slides.push(`
<section class="slide">
  <h2>Boas práticas aplicadas</h2>
  <div class="trio">
    <div class="caixa"><h3>Código</h3><p>Separação entre HTML, CSS e JS; eventos por delegação, sem <code>onclick</code> no HTML.</p></div>
    <div class="caixa"><h3>Segurança e dados</h3><p>Textos inseridos com <code>textContent</code> (contra XSS); <code>try/catch</code> no <code>localStorage</code>; cada produto com <code>id</code>.</p></div>
    <div class="caixa"><h3>Validação</h3><p>Campos obrigatórios, <code>trim</code>, preço maior que zero e mensagens junto ao campo.</p></div>
    <div class="caixa"><h3>Acessibilidade</h3><p><code>label</code> em todos os campos, <code>alt</code> nas imagens, foco visível e avisos com <code>aria-live</code>.</p></div>
    <div class="caixa"><h3>Responsividade</h3><p>Layout adaptado para computador e celular, conferido em 1366 px e 390 px.</p></div>
    <div class="caixa"><h3>Git</h3><p>Branches por tipo de mudança, commits semânticos em português e registro de andamento no cronograma.</p></div>
  </div>
</section>`);

slides.push(`
<section class="slide">
  <h2>Testes</h2>
  <div class="duas">
    <div class="caixa"><h3>30 testes automatizados</h3><p><strong>30 aprovados.</strong> Cadastro, validação, edição, exclusão, pesquisa, persistência, segurança (XSS), orçamento, acessibilidade e links.</p></div>
    <div class="caixa"><h3>Navegador real e capturas</h3><p>Upload de imagem, abas, teclado e abertura direta do arquivo testados no Edge, mais o envio pelo WhatsApp verificado à mão (5 aprovados) e capturas em 1366 px e 390 px. Tabela completa em <code>docs/entrega/tabela-de-testes.md</code>.</p></div>
  </div>
  <p class="nota"><strong>Bugs encontrados e corrigidos:</strong> imagens recortadas nos cards, produtos antigos sem imagem no navegador, inserção de texto com <code>innerHTML</code> (XSS) e plural errado no contador da pesquisa.</p>
</section>`);

// ---------- Tabela de testes (resumo, com a evidência de cada caso) ----------
const linhaTeste = ([id, caso, esperado, obtido, status, print]) => {
  const src = achaPrint(print);
  const miniatura = src ? `<img src="${src}" alt="Print ${print}">` : `<span class="sem">sem print</span>`;
  return `<tr><td class="id">${id}</td><td>${caso}</td><td>${esperado}</td><td>${obtido}</td><td class="st">${status}</td><td class="ev">${miniatura}</td></tr>`;
};
const testesA = [
  ["CT01", "Abrir a página pela primeira vez", "4 produtos de exemplo, com imagem", "4 cards; contador \"4 produtos\"", "✅ Passou", "03-catalogo"],
  ["CT02", "Cadastrar um produto válido", "Novo card e aviso de sucesso", "5 cards; aviso \"Produto cadastrado!\"", "✅ Passou", "06-cadastro-sucesso"],
  ["CT04", "Enviar com o nome vazio", "Não cadastra; erro junto ao campo", "Erro exibido e nenhum card novo", "✅ Passou", "05-erro-validacao"],
  ["CT06", "Informar preço zero", "Rejeita com mensagem", "\"Informe um preço maior que zero.\"", "✅ Passou", "05-erro-validacao"],
  ["CM01", "Cadastrar escolhendo uma imagem do computador", "Foto reduzida e salva", "480×439 px; continua após recarregar", "✅ Passou", "06-cadastro-sucesso"],
  ["CT11", "Editar o preço e salvar", "Atualiza sem duplicar", "4 cards; preço novo; \"Produto atualizado!\"", "✅ Passou", "07-edicao"],
];
const testesB = [
  ["CT16", "Pesquisar \"torta\"", "Filtra e atualiza o contador", "1 card; \"1 produto encontrado\"", "✅ Passou", "08-pesquisa"],
  ["CM04", "Clicar em Enviar pelo WhatsApp (verificado à mão)", "Abre o WhatsApp com a mensagem pronta", "Nova aba com a mensagem do pedido", "✅ Passou", "11-whatsapp"],
  ["CV01", "Abrir em 1366 px (computador)", "Seções completas e legíveis", "Todas as seções e imagens inteiras", "✅ Passou", "01-landing-desktop"],
  ["CV02", "Abrir em 390 px (celular)", "Uma coluna, sem rolagem lateral", "Layout em uma coluna", "✅ Passou", "02-landing-celular"],
  ["CT25", "Pedir orçamento pelo formulário", "Abre o WhatsApp com a mensagem pronta", "Link com nome, produto, data e detalhes", "✅ Passou", "10-encomenda"],
  ["CT28", "Imagens da página", "Todas com texto alternativo (alt)", "Nenhuma imagem sem alt", "✅ Passou", "09-galeria"],
];
[["Tabela de testes (1 de 2)", testesA], ["Tabela de testes (2 de 2)", testesB]].forEach(([titulo, linhas], k) => {
  slides.push(`
<section class="slide tabela">
  <h2>${titulo}</h2>
  <table class="tt">
    <tr><th>ID</th><th>Caso de teste</th><th>Esperado</th><th>Obtido</th><th>Status</th><th>Evidência</th></tr>
    ${linhas.map(linhaTeste).join("\n    ")}
  </table>
  ${k === 1 ? '<p class="nota">Tabela completa: 30 testes automatizados, 2 visuais e 5 em navegador real ou à mão, todos aprovados. Detalhes em <code>docs/entrega/tabela-de-testes.md</code>.</p>' : ""}
</section>`);
});

slides.push(`
<section class="slide">
  <h2>Limitações e próximos passos</h2>
  <ul class="grande">
    <li>Os dados ficam só no navegador de quem usa; não há login nem sincronização entre aparelhos.</li>
    <li>Próximo passo: cadastro e listagem de <strong>clientes e encomendas</strong>.</li>
    <li>Publicação (hospedagem) ainda não definida nesta etapa.</li>
    <li>Textos, preços e contatos são de exemplo, para fins acadêmicos.</li>
  </ul>
</section>`);

slides.push(`
<section class="slide">
  <h2>Equipe</h2>
  <p class="grande">Grupo 37</p>
  <ul class="grande">
    <li>Camila Alves da Silva</li>
    <li>Fabiana Balduína Freitas Silva · Tech Lead</li>
    <li>Jonatas Sales dos Santos Vieira</li>
    <li>Vitória Rodrigues</li>
  </ul>
  <p class="nota">Código: github.com/DevFaBGirl/projeto-integrador-senac-2</p>
</section>`);

slides.push(`
<section class="slide capa acesso">
  <p class="etq">Acesse e teste</p>
  <h1>Minha Confeitaria Online</h1>
  <p class="sub">Aplicação publicada para uso e avaliação</p>
  <p class="link"><a href="https://projeto-integrador-senac-2.vercel.app/">https://projeto-integrador-senac-2.vercel.app/</a></p>
  <p class="meta">Código-fonte: <a href="https://github.com/DevFaBGirl/projeto-integrador-senac-2">github.com/DevFaBGirl/projeto-integrador-senac-2</a><br>
  Os produtos cadastrados ficam salvos no navegador de quem usa (localStorage).</p>
</section>`);

const html = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>Minha Confeitaria Online - Apresentação</title>
<style>
@page { size: 1280px 720px; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: "Segoe UI", Arial, sans-serif; color: #2b2326; }
.slide { width: 1280px; height: 720px; padding: 56px 72px; page-break-after: always; background: #fff; position: relative; overflow: hidden; border-top: 14px solid #d6356a; }
.slide:last-child { page-break-after: auto; }
h1 { font-size: 66px; line-height: 1.05; margin: 10px 0 18px; }
h2 { font-size: 44px; margin-bottom: 30px; color: #2b2326; }
h3 { font-size: 24px; margin-bottom: 10px; color: #b02454; }
p, li { font-size: 24px; line-height: 1.45; }
ul { padding-left: 28px; }
ul.grande li, p.grande { font-size: 30px; margin-bottom: 16px; }
.capa { background: linear-gradient(135deg, #fff5f8, #f3eefb); display: flex; flex-direction: column; justify-content: center; }
.etq { font-size: 22px; letter-spacing: 2px; text-transform: uppercase; color: #d6356a; font-weight: 700; }
.sub { font-size: 34px; margin-bottom: 36px; }
.meta { font-size: 22px; color: #5d5156; }
.duas { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
.trio { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 22px; }
.caixa { background: #f7f3fb; border-radius: 14px; padding: 24px 26px; }
.trio .caixa p { font-size: 20px; }
.nota { margin-top: 28px; font-size: 22px; color: #5d5156; }
code { background: #efe9f7; padding: 1px 6px; border-radius: 5px; font-size: .88em; }
table { width: 100%; border-collapse: collapse; font-size: 23px; }
th { text-align: left; background: #2b2326; color: #fff; padding: 12px 16px; }
td { padding: 12px 16px; border-bottom: 1px solid #e6dfe9; }
.telas { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
figure { background: #f7f3fb; border-radius: 12px; padding: 12px; }
figure img { max-width: 100%; max-height: 430px; width: auto; height: auto; margin: 0 auto; background: #fff; border-radius: 8px; display: block; }
.telas { align-items: center; }
.telas.um { grid-template-columns: 1fr; width: 72%; margin: 0 auto; }
figure .vazio { height: 430px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; border: 3px dashed #c9bfd3; border-radius: 8px; color: #7a6f80; font-size: 24px; line-height: 1.6; }
figcaption { text-align: center; font-size: 22px; font-weight: 600; margin-top: 10px; }
table.tt { font-size: 18px; }
table.tt th { padding: 10px 12px; }
table.tt td { padding: 5px 12px; vertical-align: middle; line-height: 1.25; }
table.tt td.id { font-weight: 700; white-space: nowrap; }
table.tt td.st { white-space: nowrap; font-weight: 600; }
table.tt td.ev { width: 130px; }
table.tt td.ev img { display: block; width: 112px; height: 62px; object-fit: cover; object-position: top left; border-radius: 5px; border: 1px solid #d8cfe0; }
.tabela { padding-top: 30px; }
.tabela h2 { font-size: 38px; margin-bottom: 14px; }
.tabela .nota { margin-top: 12px; font-size: 18px; }
table.tt .sem { color: #7a6f80; font-size: 16px; }
.acesso .link { font-size: 40px; font-weight: 700; margin: 6px 0 34px; }
.acesso a { color: #b02454; text-decoration: none; border-bottom: 3px solid #d6356a; }
</style></head><body>
${slides.join("\n")}
</body></html>`;

fs.writeFileSync(SAIDA_HTML, html);

const candidatos = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
];
const navegador = candidatos.find((c) => fs.existsSync(c));
if (!navegador) {
  console.log("HTML gerado em " + SAIDA_HTML + ". Abra no navegador e use Imprimir > Salvar como PDF (paisagem, sem margens).");
  process.exit(0);
}

// O navegador não sobrescreve um PDF que já existe. Por isso o PDF é gerado numa pasta temporária
// e depois copiado por cima do antigo.
const perfil = fs.mkdtempSync(path.join(os.tmpdir(), "apresentacao-"));
const pdfTemporario = path.join(perfil, "saida.pdf");
execFileSync(navegador, [
  "--headless=new", "--disable-gpu", "--no-first-run", "--no-pdf-header-footer",
  `--user-data-dir=${perfil}`, `--print-to-pdf=${pdfTemporario}`,
  "file:///" + SAIDA_HTML.replace(/\\/g, "/"),
], { stdio: "ignore" });

if (!fs.existsSync(pdfTemporario) || fs.statSync(pdfTemporario).size === 0) {
  console.error("ERRO: o PDF não foi criado. Abra apresentacao.html no navegador e use Imprimir > Salvar como PDF.");
  process.exit(1);
}

let pdfFinal = SAIDA_PDF;
try {
  fs.copyFileSync(pdfTemporario, SAIDA_PDF);
} catch (e) {
  // Acontece quando o PDF antigo está aberto em outro programa (leitor de PDF, OneDrive...)
  pdfFinal = SAIDA_PDF.replace(/\.pdf$/, "-novo.pdf");
  fs.copyFileSync(pdfTemporario, pdfFinal);
  console.error("ATENÇÃO: apresentacao.pdf está aberto em outro programa e não pôde ser substituído.");
  console.error("O PDF atualizado foi salvo como " + pdfFinal + ". Feche o leitor de PDF e rode de novo.");
}

const semPrint = slidesTelas.flatMap(([, it]) => it).filter(([b]) => !achaPrint(b)).map(([b]) => b);
console.log("PDF gerado em " + pdfFinal);
console.log(semPrint.length ? "Prints ainda faltando: " + semPrint.join(", ") : "Todos os prints foram incluídos.");
