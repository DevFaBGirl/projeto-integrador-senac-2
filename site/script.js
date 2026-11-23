(() => {
    "use strict";

    const CHAVE = "produtos_confeitaria";

    // Lista fechada de imagens: só estes caminhos são aceitos (evita injeção via localStorage)
    const IMAGENS = [
        { valor: "", rotulo: "Sem imagem" },
        { valor: "img/bolo.png", rotulo: "Bolo" },
        { valor: "img/cupcake.png", rotulo: "Cupcake" },
        { valor: "img/brigadeiro.png", rotulo: "Brigadeiro" },
        { valor: "img/kit-festa.png", rotulo: "Kit festa" },
        { valor: "img/torta.png", rotulo: "Torta" },
        { valor: "img/biscoito.png", rotulo: "Biscoito" },
        { valor: "img/pao-de-mel.png", rotulo: "Pão de mel" },
        { valor: "img/bolo-de-pote.png", rotulo: "Bolo de pote" },
    ];

    // Produtos de exemplo, usados só na primeira abertura
    const PRODUTOS_PADRAO = [
        { nome: "Bolo de aniversário", descricao: "Massa branca com recheio cremoso e confeitos coloridos.", preco: 90, imagem: "img/bolo.png" },
        { nome: "Cupcake decorado", descricao: "Massa fofinha com cobertura de baunilha e confeitos.", preco: 8, imagem: "img/cupcake.png" },
        { nome: "Brigadeiros gourmet (cento)", descricao: "Brigadeiros de chocolate belga enrolados à mão.", preco: 120, imagem: "img/brigadeiro.png" },
        { nome: "Kit festa", descricao: "Seleção de doces finos para festas e eventos.", preco: 150, imagem: "img/kit-festa.png" },
        { nome: "Torta doce", descricao: "Torta artesanal, sabores variados sob consulta.", preco: 70, imagem: "img/torta.png" },
        { nome: "Biscoitos personalizados (dúzia)", descricao: "Biscoitos amanteigados recheados e decorados.", preco: 60, imagem: "img/biscoito.png" },
        { nome: "Pão de mel", descricao: "Pão de mel recheado com doce de leite e coberto com chocolate.", preco: 9, imagem: "img/pao-de-mel.png" },
        { nome: "Bolo de pote", descricao: "Camadas de bolo e recheio cremoso, ótimo para presentear.", preco: 14, imagem: "img/bolo-de-pote.png" },
    ];

    const form = document.getElementById("produto-form");
    const inputId = document.getElementById("produto-id");
    const inputNome = document.getElementById("nome");
    const inputDescricao = document.getElementById("descricao");
    const inputPreco = document.getElementById("preco");
    const selectImagem = document.getElementById("imagem");
    const btnSalvar = document.getElementById("salvar-btn");
    const btnCancelar = document.getElementById("cancelar-btn");
    const container = document.getElementById("produtos-container");
    const toastEl = document.getElementById("toast");

    let produtos = carregarProdutos();

    /* ---------- Utilitários ---------- */

    function gerarId() {
        if (window.crypto && typeof crypto.randomUUID === "function") return crypto.randomUUID();
        return "p-" + Date.now() + "-" + Math.random().toString(16).slice(2);
    }

    function imagemValida(valor) {
        return IMAGENS.some((img) => img.valor === valor) ? valor : "";
    }

    // Aceita também o formato antigo (sem id e com preço em texto)
    function normalizar(item) {
        if (!item || typeof item !== "object") return null;
        const nome = String(item.nome ?? "").trim();
        const preco = Number(item.preco);
        if (!nome || !Number.isFinite(preco) || preco <= 0) return null;
        return {
            id: item.id ? String(item.id) : gerarId(),
            nome,
            descricao: String(item.descricao ?? "").trim(),
            preco,
            imagem: imagemValida(item.imagem),
        };
    }

    function carregarProdutos() {
        try {
            const bruto = localStorage.getItem(CHAVE);
            if (bruto === null) {
                const iniciais = PRODUTOS_PADRAO.map(normalizar);
                salvar(iniciais);
                return iniciais;
            }
            const dados = JSON.parse(bruto);
            if (!Array.isArray(dados)) return [];
            return dados.map(normalizar).filter(Boolean);
        } catch (erro) {
            // Dado corrompido ou localStorage indisponível: segue com a lista vazia
            return [];
        }
    }

    function salvar(lista) {
        try {
            localStorage.setItem(CHAVE, JSON.stringify(lista));
            return true;
        } catch (erro) {
            toast("Não foi possível salvar neste navegador.", true);
            return false;
        }
    }

    let toastTimer;
    function toast(mensagem, erro = false) {
        toastEl.textContent = mensagem;
        toastEl.classList.toggle("erro-toast", erro);
        toastEl.hidden = false;
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => { toastEl.hidden = true; }, 3000);
    }

    function formatarPreco(valor) {
        return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }

    /* ---------- Renderização ---------- */

    function renderizar() {
        container.replaceChildren();

        if (produtos.length === 0) {
            const vazio = document.createElement("p");
            vazio.className = "vazio";
            vazio.textContent = "Nenhum produto cadastrado ainda.";
            container.appendChild(vazio);
            return;
        }

        produtos.forEach((produto) => {
            const card = document.createElement("article");
            card.className = "card";

            const areaImagem = document.createElement("div");
            areaImagem.className = "card-imagem";
            if (produto.imagem) {
                const img = document.createElement("img");
                img.src = produto.imagem;
                img.alt = produto.nome;
                img.loading = "lazy";
                areaImagem.appendChild(img);
            } else {
                areaImagem.textContent = "🍰";
                areaImagem.setAttribute("aria-hidden", "true");
            }

            const corpo = document.createElement("div");
            corpo.className = "card-corpo";

            const titulo = document.createElement("h3");
            titulo.textContent = produto.nome;

            const descricao = document.createElement("p");
            descricao.className = "descricao";
            descricao.textContent = produto.descricao;

            const preco = document.createElement("p");
            preco.className = "preco";
            preco.textContent = formatarPreco(produto.preco);

            const acoes = document.createElement("div");
            acoes.className = "acoes";
            acoes.append(criarBotao("Editar", "btn-editar", "editar", produto.id),
                         criarBotao("Excluir", "btn-excluir", "excluir", produto.id));

            corpo.append(titulo, descricao, preco, acoes);
            card.append(areaImagem, corpo);
            container.appendChild(card);
        });
    }

    function criarBotao(texto, classe, acao, id) {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = classe;
        botao.textContent = texto;
        botao.dataset.acao = acao;
        botao.dataset.id = id;
        return botao;
    }

    /* ---------- Formulário ---------- */

    IMAGENS.forEach((img) => {
        const opcao = document.createElement("option");
        opcao.value = img.valor;
        opcao.textContent = img.rotulo;
        selectImagem.appendChild(opcao);
    });

    function mostrarErro(campo, mensagem) {
        document.getElementById("erro-" + campo.id).textContent = mensagem;
        campo.setAttribute("aria-invalid", mensagem ? "true" : "false");
    }

    function validar() {
        const nome = inputNome.value.trim();
        const descricao = inputDescricao.value.trim();
        const preco = Number(inputPreco.value);
        let primeiroInvalido = null;

        const regras = [
            [inputNome, nome.length < 2 ? "Informe o nome do produto (mínimo 2 letras)." : ""],
            [inputDescricao, descricao.length < 3 ? "Informe uma descrição (mínimo 3 letras)." : ""],
            [inputPreco, !inputPreco.value || !Number.isFinite(preco) || preco <= 0 ? "Informe um preço maior que zero." : ""],
        ];

        regras.forEach(([campo, mensagem]) => {
            mostrarErro(campo, mensagem);
            if (mensagem && !primeiroInvalido) primeiroInvalido = campo;
        });

        if (primeiroInvalido) {
            primeiroInvalido.focus();
            return null;
        }
        return { nome, descricao, preco: Math.round(preco * 100) / 100, imagem: imagemValida(selectImagem.value) };
    }

    function sairDoModoEdicao() {
        inputId.value = "";
        btnSalvar.textContent = "Cadastrar Produto";
        btnCancelar.hidden = true;
        form.reset();
        [inputNome, inputDescricao, inputPreco].forEach((c) => mostrarErro(c, ""));
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const dados = validar();
        if (!dados) return;

        const editando = inputId.value !== "";
        if (editando) {
            produtos = produtos.map((p) => (p.id === inputId.value ? { ...p, ...dados } : p));
        } else {
            produtos = [...produtos, { id: gerarId(), ...dados }];
        }

        if (salvar(produtos)) {
            toast(editando ? "Produto atualizado com sucesso!" : "Produto cadastrado com sucesso!");
        }
        sairDoModoEdicao();
        renderizar();
    });

    btnCancelar.addEventListener("click", () => {
        sairDoModoEdicao();
        toast("Edição cancelada.");
    });

    container.addEventListener("click", (e) => {
        const botao = e.target.closest("button[data-acao]");
        if (!botao) return;
        const produto = produtos.find((p) => p.id === botao.dataset.id);
        if (!produto) return;

        if (botao.dataset.acao === "editar") {
            inputId.value = produto.id;
            inputNome.value = produto.nome;
            inputDescricao.value = produto.descricao;
            inputPreco.value = produto.preco;
            selectImagem.value = produto.imagem;
            btnSalvar.textContent = "Atualizar Produto";
            btnCancelar.hidden = false;
            document.getElementById("admin-section").scrollIntoView({ behavior: "smooth" });
            inputNome.focus({ preventScroll: true });
        } else if (botao.dataset.acao === "excluir") {
            if (confirm(`Deseja realmente excluir "${produto.nome}"?`)) {
                produtos = produtos.filter((p) => p.id !== produto.id);
                if (salvar(produtos)) toast("Produto excluído.");
                if (inputId.value === produto.id) sairDoModoEdicao();
                renderizar();
            }
        }
    });

    renderizar();
})();
