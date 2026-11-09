# Estado do Código Inicial (`site/`)

> Análise estática de 09/11/2026 dos commits `246ea04` e `2a71e8a` (Jonatas, 07/11/2026). O código **não foi executado** nesta análise.

## 1. O que existe

| Arquivo | Linhas | Conteúdo |
| --- | --- | --- |
| [site/index.html](../../site/index.html) | 34 | Cabeçalho "Minha Confeitaria Online", formulário de produto (nome, descrição, preço) e contêiner do catálogo. |
| [site/script.js](../../site/script.js) | 81 | CRUD de produtos em `localStorage` (`produtos_confeitaria`): cadastrar, listar em cartões, editar e excluir com confirmação. |
| [site/style.css](../../site/style.css) | 93 | Estilo rosado, grade responsiva (`auto-fit`, `minmax(250px, 1fr)`) e botões de ação. |

O que funciona: cadastrar, listar, editar, excluir, persistir e mostrar estado vazio. É uma base útil, e o mínimo do enunciado (cadastro e listagem) mais os opcionais de editar e excluir já aparecem nela.

## 2. Cobertura dos requisitos

A situação de cada requisito está nas tabelas de [02-escopo-e-requisitos.md](02-escopo-e-requisitos.md). Resumo: o gerenciamento do catálogo está bem adiantado; a vitrine pública ainda não tem galeria, informações de encomenda, contato, imagens nem diferenciais.

## 3. Problemas encontrados

| ID | Gravidade | Problema | Local | Correção sugerida | Tarefa |
| --- | --- | --- | --- | --- | --- |
| C01 | Baixa (visível) | Texto `[cite: 5]` aparece no subtítulo da página, resquício de uma citação colada. | [site/index.html:12](../../site/index.html:12) | Remover o trecho. | T39 |
| C02 | **Alta** | **XSS:** nome e descrição são inseridos com `innerHTML` sem escapar. Um produto com HTML no nome executa script na página. | [site/script.js:28](../../site/script.js:28) | Criar os elementos com `textContent`, ou escapar com uma função `escapeHtml`. | T39 |
| C03 | Média | `JSON.parse` sem `try/catch`: dado inválido no `localStorage` interrompe o script e a página fica vazia. | [site/script.js:9](../../site/script.js:9) | Envolver em `try/catch` e voltar a lista vazia. | T08 |
| C04 | Média | Campos usam só `placeholder`, sem `<label>` associado (leitores de tela e RNF03). | [site/index.html:19](../../site/index.html:19) | Adicionar `<label for>` a cada campo. | T15 |
| C05 | Média | Editar e excluir usam o **índice do array** como identificador, o que é frágil quando a lista muda. | [site/script.js:33](../../site/script.js:33), [site/script.js:54](../../site/script.js:54) | Guardar um `id` por produto. | T16 |
| C06 | Média | Validação só com `required`: aceita preço negativo, nome só com espaços etc. | [site/script.js:44](../../site/script.js:44) | `trim`, preço maior que zero, mensagens junto ao campo. | T21 |
| C07 | Média (decisão) | O formulário de gerenciamento fica visível a qualquer visitante da landing page. | [site/index.html:16](../../site/index.html:16) | Decidir onde ele fica (pendência L8): seção protegida, página separada ou aviso de que é demonstração. | T01 |
| C08 | Média | O catálogo não tem imagem, que o RL02 exige. | [site/index.html:18](../../site/index.html:18) | Campo de imagem e pasta `site/img/`. | T12, T15 |
| C09 | Baixa | `onclick` embutido e funções em `window`, misturando HTML com JS (RNF04). | [site/script.js:33](../../site/script.js:33), [site/script.js:64](../../site/script.js:64) | Delegação de eventos no contêiner. | T18 |
| C10 | Baixa | Preço guardado como texto. | [site/script.js:51](../../site/script.js:51) | Converter para número ao salvar e tolerar o formato antigo. | T16 |

## 4. Processo de versionamento

Os dois commits foram direto na `main` e com mensagens fora do padrão combinado (`feat:`, `fix:`, `docs:`). Daqui para frente, vale seguir o RNF06: branch `feat/*`, commit semântico em português e PR com revisão (ver [raci-e-combinados-de-trabalho.md](../planejamento/raci-e-combinados-de-trabalho.md)).
