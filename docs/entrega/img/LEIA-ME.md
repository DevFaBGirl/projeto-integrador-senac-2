# Prints das telas

Os prints da apresentação ficam nesta pasta. O gerador do PDF (`docs/entrega/gerar-apresentacao.js`) acha cada print pelo **início do nome**, então o resto do nome pode variar (por exemplo, `07-edicao de um produto.jpg` serve para o `07-edicao`).

| Início do nome | O que mostra | Situação |
| --- | --- | --- |
| `01-landing-desktop` | Topo da página no computador | Pronto |
| `02-landing-celular` | Topo da página no modo celular | Pronto |
| `03-catalogo` | Catálogo com os 4 produtos | Pronto |
| `04-formulario-cadastro` | Formulário de orçamento (WhatsApp) | Pronto |
| `05-erro-validacao` | Área da confeiteira com as mensagens de erro em vermelho | Pronto |
| `06-cadastro-sucesso` | Aviso "Produto cadastrado!" com o novo produto | Pronto |
| `07-edicao` | Formulário em modo edição | Pronto |
| `08-pesquisa` | Catálogo filtrado (por exemplo, pesquisando "torta") | Pronto |
| `09-galeria` | Seção Galeria de trabalhos | Pronto |
| `10-encomenda` | Seção Como encomendar | Pronto |

Depois de adicionar ou trocar um print, rode `node docs/entrega/gerar-apresentacao.js` para atualizar o PDF.

A pasta `Originals/` guarda versões antigas dos prints e não vai para o Git.
