document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("produto-form");
    const inputId = document.getElementById("produto-id");
    const inputNome = document.getElementById("nome");
    const inputDescricao = document.getElementById("descricao");
    const inputPreco = document.getElementById("preco");
    const containerProdutos = document.getElementById("produtos-container");

    let produtos = JSON.parse(localStorage.getItem("produtos_confeitaria")) || [];

    function salvarProdutos() {
        localStorage.setItem("produtos_confeitaria", JSON.stringify(produtos));
    }

    function renderizarProdutos() {
        containerProdutos.innerHTML = "";
        
        if (produtos.length === 0) {
            containerProdutos.innerHTML = "<p>Nenhum produto cadastrado ainda.</p>";
            return;
        }

        produtos.forEach((produto, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <div>
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                    <p><strong>R$ ${Number(produto.preco).toFixed(2)}</strong></p>
                </div>
                <div class="acoes">
                    <button class="btn-editar" onclick="editarProduto(${index})">Editar</button>
                    <button class="btn-excluir" onclick="excluirProduto(${index})">Excluir</button>
                </div>
            `;
            containerProdutos.appendChild(card);
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const nome = inputNome.value;
        const descricao = inputDescricao.value;
        const preco = inputPreco.value;
        const id = inputId.value;

        if (id === "") {
            // Cadastrar
            produtos.push({ nome, descricao, preco });
        } else {
            // Editar
            produtos[id] = { nome, descricao, preco };
            inputId.value = "";
            document.getElementById("salvar-btn").innerText = "Cadastrar Produto";
        }

        salvarProdutos();
        form.reset();
        renderizarProdutos();
    });

    window.editarProduto = function(index) {
        const produto = produtos[index];
        inputId.value = index;
        inputNome.value = produto.nome;
        inputDescricao.value = produto.descricao;
        inputPreco.value = produto.preco;
        document.getElementById("salvar-btn").innerText = "Atualizar Produto";
    }

    window.excluirProduto = function(index) {
        if (confirm("Deseja realmente excluir este produto?")) {
            produtos.splice(index, 1);
            salvarProdutos();
            renderizarProdutos();
        }
    }

    renderizarProdutos();
});