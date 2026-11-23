# Sonho de Mel — Confeitaria Online

Landing page de divulgação com catálogo de produtos gerenciável para confeiteiras/os autônomas/os.
Projeto Integrador SENAC, 2ª etapa (Grupo 37): *Desenvolvimento da Aplicação Web utilizando Boas Práticas de Desenvolvimento de Software*.

A aplicação é 100% client-side (HTML, CSS e JavaScript), sem backend e sem banco de dados externo. Os produtos ficam no `localStorage` do navegador.

## Como executar

Abra `site/index.html` no navegador, ou, para usar um servidor local, rode dentro da pasta `site`:

```
python -m http.server 8000
```

e acesse `http://localhost:8000`.

Na primeira abertura, o catálogo vem com 8 produtos de exemplo. Para voltar a esse estado, limpe os dados do site no navegador (`localStorage`).

## Estrutura

```
site/
├── index.html   # Landing page + formulário e catálogo de produtos
├── style.css    # Estilos (responsivo: 4, 2 ou 1 colunas)
├── script.js    # CRUD do catálogo em localStorage
└── img/         # Imagens dos produtos
docs/            # Requisitos, planejamento, cronograma e registro de andamento
```

## Requisitos atendidos

### Landing page

| ID | Requisito | Onde está |
| --- | --- | --- |
| RL01 | Apresentação da confeiteira (nome, descrição, proposta e diferenciais) | Seção **Sobre** |
| RL02 | Catálogo com nome, descrição, imagem e preço | Seção **Catálogo de Produtos** |
| RL03 | Galeria de trabalhos | Seção **Galeria de Produtos** (veja a nota abaixo) |
| RL04 | Informações para encomenda (prazo, tipos de produto, como pedir) | Seção **Como Encomendar** |
| RL05 | Página responsiva que facilita o contato | Seção **Contato**, botão de WhatsApp e layout responsivo |

> **Sobre a galeria (RL03):** o requisito pede imagens de trabalhos realizados. Para uma confeitaria, os trabalhos realizados são os próprios produtos prontos. Por isso a galeria foi apresentada como **Galeria de Produtos**: ela exibe as fotos dos bolos, doces e kits já produzidos, sem preço nem ações, o que a diferencia do catálogo.

### Gerenciamento do catálogo

| ID | Requisito | Situação |
| --- | --- | --- |
| RF01 | Cadastrar produto (nome, descrição, preço e imagem) | Feito |
| RF02 | Listar produtos, com estado vazio | Feito |
| RF03 | Persistir no `localStorage` (`produtos_confeitaria`) | Feito |
| RF04 | Validar campos, preço maior que zero e `trim` | Feito |
| RF05 | Feedback visual (mensagens de sucesso/erro) e confirmação de exclusão | Feito |
| RO01 | Editar produto | Feito |
| RO02 | Excluir produto | Feito |
| RO03 | Pesquisar/filtrar produtos | Não implementado (opcional) |

## Boas práticas aplicadas

- **Segurança:** textos digitados são inseridos com `textContent` (nunca `innerHTML`), evitando XSS. As imagens aceitas vêm de uma lista fechada.
- **Dados:** leitura e escrita do `localStorage` com `try/catch`; cada produto tem `id` próprio; dados no formato antigo são normalizados.
- **Separação de responsabilidades:** HTML (estrutura), CSS (apresentação) e JS (comportamento), com delegação de eventos em vez de `onclick` no HTML.
- **Acessibilidade:** `<label>` em todos os campos, mensagens de erro associadas aos campos, foco visível, `alt` nas imagens e navegação por teclado.
- **Responsividade:** grades de 4, 2 e 1 colunas conforme a largura da tela.
- **Git:** branches por tipo de mudança (`fix/*`, `feat/*`) e commits semânticos em português.

## Dados fictícios

O nome da confeitaria, os textos, os preços, o telefone, o e-mail e o endereço são de exemplo, criados para fins acadêmicos. As imagens com a legenda "foto em breve" são provisórias.

## Documentação

Requisitos, pendências, cronograma de tarefas e o registro de andamento estão em [`docs/`](docs/README.md).
