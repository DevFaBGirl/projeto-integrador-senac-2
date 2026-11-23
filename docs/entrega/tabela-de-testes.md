# Tabela de Testes

> Projeto: **Minha Confeitaria Online** · Grupo 37 · Execução em **23/11/2026**.
> Escopo: landing page e catálogo de produtos gerenciável (`index.html`, `script.js`, `style.css`).

## 1. Como os testes foram feitos

| Tipo | Como foi executado | Quantidade |
| --- | --- | --- |
| **Automatizado** (CT01 a CT30) | A página real (`index.html` + `script.js`) foi carregada num simulador de navegador (jsdom, no Node.js). Os testes preenchem formulários, clicam nos botões, pesquisam e conferem o resultado na tela e no `localStorage`. O resultado abaixo é o que o código realmente devolveu. | 30 |
| **Visual** (CV01 a CV02) | Capturas de tela feitas com o Edge, em 1366 px (desktop) e 390 px (celular). | 2 |
| **Navegador real** (CM01, CM02, CM03, CM05) | Executados no Edge controlado por automação (protocolo DevTools): escolha de arquivo de imagem, cliques nas abas, teclas Tab e Enter, e abertura direta do arquivo. | 4 |
| **Manual** (CM04) | Abrir o WhatsApp de verdade, que depende do aplicativo ou do site no computador. | 1 |

**Resumo dos automatizados: 30 de 30 passaram.**

Um teste foi validado de forma contrária: ao trocar `textContent` por `innerHTML` numa cópia do código, o CT21 (XSS) falhou, o que confirma que ele detecta o problema.

**Limite deste método:** o simulador (jsdom) não desenha a página nem processa imagens. Por isso o envio de imagem, a rolagem das abas, o teclado e a abertura direta do arquivo foram testados em um navegador real (Edge), e a aparência, pelas capturas de tela.

## 2. Testes automatizados

| ID | Área | Caso de teste (passos) | Resultado esperado | Resultado obtido | Status | Evidência |
| --- | --- | --- | --- | --- | --- | --- |
| CT01 | Catálogo | Abrir a página pela primeira vez (sem dados salvos). | Na primeira visita o catálogo mostra os 4 produtos de exemplo, todos com imagem, e o contador indica 4 produtos. | 4 cards; contador: "4 produtos"; imagens: img/bolo-morango.jpg, img/brigadeiros.jpg, img/kit-festa.jpg, img/torta-doce.jpg | ✅ Passou | [print 03](img/03-catalogo.jpg) |
| CT02 | Cadastro | Preencher nome, preço e descrição válidos e clicar em Cadastrar produto. | Cadastrar um produto válido adiciona um card, mostra o aviso "Produto cadastrado!" e limpa o formulário. | 5 cards; aviso: "Produto cadastrado!"; campo nome após salvar: "" | ✅ Passou | [print 06](img/06-cadastro-sucesso.jpg) |
| CT03 | Cadastro | Cadastrar "  Pudim  " com preço 9,9 e descrição com espaços; conferir o localStorage. | O produto cadastrado é salvo no localStorage com id, preço numérico e sem espaços sobrando. | id=1795468828386; preco=9.9 (number); descricao="Pudim de leite condensado." | ✅ Passou | Execução automática (sem print) |
| CT04 | Validação | Deixar o nome vazio e enviar. | Nome vazio: não cadastra e mostra erro junto ao campo. | 4 cards; erro: "Informe o nome do produto (mínimo 2 letras)." | ✅ Passou | [print 05](img/05-erro-validacao.png) |
| CT05 | Validação | Digitar só espaços no nome e enviar. | Nome só com espaços é rejeitado (trim). | 4 cards; erro: "Informe o nome do produto (mínimo 2 letras)." | ✅ Passou | [print 05](img/05-erro-validacao.png) |
| CT06 | Validação | Informar preço 0 e enviar. | Preço zero é rejeitado com mensagem junto ao campo. | 4 cards; erro: "Informe um preço maior que zero." | ✅ Passou | [print 05](img/05-erro-validacao.png) |
| CT07 | Validação | Informar preço -5 e enviar. | Preço negativo é rejeitado. | 4 cards; erro: "Informe um preço maior que zero." | ✅ Passou | [print 05](img/05-erro-validacao.png) |
| CT08 | Validação | Deixar o preço em branco e enviar. | Preço em branco é rejeitado. | 4 cards; erro: "Informe um preço maior que zero." | ✅ Passou | [print 05](img/05-erro-validacao.png) |
| CT09 | Validação | Informar descrição "abc" e enviar. | Descrição com menos de 5 letras é rejeitada. | 4 cards; erro: "Escreva uma descrição (mínimo 5 letras)." | ✅ Passou | [print 05](img/05-erro-validacao.png) |
| CT10 | Edição | Clicar em Editar no primeiro produto. | Editar: o botão Editar preenche o formulário e muda o botão para "Salvar alterações". | nome="Bolo de morango com chantilly"; botão="Salvar alterações"; cancelar visível=true | ✅ Passou | [print 07](img/07-edicao%20de%20um%20produto.jpg) |
| CT11 | Edição | Editar, mudar o preço para 135 e clicar em Salvar alterações. | Editar: salvar altera o produto (sem criar duplicado), mantém a imagem e mostra "Produto atualizado!". | 4 cards; preço salvo=135; imagem="img/bolo-morango.jpg"; aviso="Produto atualizado!" | ✅ Passou | [print 07](img/07-edicao%20de%20um%20produto.jpg) |
| CT12 | Edição | Clicar em Editar e depois em Cancelar edição. | Cancelar edição limpa o formulário e volta o botão para "Cadastrar produto". | nome=""; botão="Cadastrar produto" | ✅ Passou | [print 07](img/07-edicao%20de%20um%20produto.jpg) |
| CT13 | Exclusão | Clicar em Excluir no 3º produto e confirmar. | Excluir confirmando remove o produto e mostra "Produto excluído.". | 3 cards; restantes: Bolo de morango com chantilly \| Caixa de brigadeiros gourmet \| Torta doce de cereja; aviso="Produto excluído." | ✅ Passou | Execução automática (sem print) |
| CT14 | Exclusão | Clicar em Excluir no 3º produto e cancelar a confirmação. | Excluir cancelando a confirmação mantém o produto. | 4 cards; 4 salvos | ✅ Passou | Execução automática (sem print) |
| CT15 | Exclusão | Excluir os 4 produtos e recarregar a página. | Excluir todos os produtos mostra o estado vazio, sem recarregar os exemplos. | cards: 0; mensagem: "Nenhum produto cadastrado ainda. Use a Área da confeiteira abaixo para cadastrar o primeiro."; após reabrir a página: 0 cards | ✅ Passou | Execução automática (sem print) |
| CT16 | Pesquisa | Digitar "torta" na pesquisa. | Pesquisa por parte do nome filtra os produtos e atualiza o contador. | 1 card(s): Torta doce de cereja; contador: "1 produto encontrado" | ✅ Passou | [print 08](img/08-pesquisa.png) |
| CT17 | Pesquisa | Digitar "CEREJÁ" e depois "BOLO". | A pesquisa ignora maiúsculas e acentos ("CEREJÁ" e "bolo"). | "CEREJÁ" → 1 resultado(s); "BOLO" → 1 resultado(s) | ✅ Passou | [print 08](img/08-pesquisa.png) |
| CT18 | Pesquisa | Digitar "pizza". | Pesquisa sem resultado mostra mensagem e nenhum card. | mensagem: "Nenhum produto encontrado para “pizza”." | ✅ Passou | Execução automática (sem print) |
| CT19 | Pesquisa | Pesquisar "torta" e depois apagar o texto. | Limpar a pesquisa volta a mostrar todos os produtos. | 4 cards | ✅ Passou | [print 03](img/03-catalogo.jpg) |
| CT20 | Persistência | Cadastrar um produto e recarregar a página. | Persistência: os produtos continuam ao recarregar a página. | após recarregar: 5 cards, incluindo "Brownie de nozes"=true | ✅ Passou | [print 06](img/06-cadastro-sucesso.jpg) |
| CT21 | Segurança | Cadastrar um produto com HTML no nome e na descrição. | Segurança (XSS): HTML digitado no nome aparece como texto e não é executado. | nome exibido como texto: "<img src=x onerror="window.invadido=1">"; tags criadas dentro do card: 0; script executado: false | ✅ Passou | Execução automática (sem print) |
| CT22 | Robustez | Gravar um valor inválido no localStorage e abrir a página. | Dados corrompidos no localStorage não quebram a página. | página carregou normalmente; 4 cards exibidos | ✅ Passou | Execução automática (sem print) |
| CT23 | Persistência | Abrir a página com dados de uma versão antiga (produtos sem imagem válida). | Produtos antigos sem imagem válida são removidos uma única vez, e os exemplos recebem a imagem. | 4 cards: Bolo de morango com chantilly \| Caixa de brigadeiros gourmet \| Kit festa personalizado \| Torta doce de cereja | ✅ Passou | Execução automática (sem print) |
| CT24 | Orçamento | Enviar o formulário de orçamento sem nome. | Orçamento: sem nome não abre o WhatsApp e mostra erro. | janelas abertas: 0; erro: "Informe seu nome." | ✅ Passou | Execução automática (sem print) |
| CT25 | Orçamento | Preencher nome, produto, data e detalhes e enviar. | Orçamento: com nome, produto, data e detalhes abre o WhatsApp com a mensagem pronta. | link abre wa.me; mensagem: "Olá! Meu nome é Maria e gostaria de um orçamento. / Produto: Torta doce de cereja / Data do evento: 24/12/2026 / Detalhes: 20 fatias" | ✅ Passou | [print 10](img/10-encomenda.jpg) |
| CT26 | Orçamento | Abrir a lista Produto de interesse. | A lista "Produto de interesse" do orçamento reflete os produtos do catálogo. | 5 opções: Ainda não sei / outro \| Bolo de morango com chantilly \| Caixa de brigadeiros gourmet \| Kit festa personalizado \| Torta doce de cereja | ✅ Passou | [print 10](img/10-encomenda.jpg) |
| CT27 | Acessibilidade | Verificar todos os campos de formulário. | Todos os campos de formulário têm <label> associado (acessibilidade). | 9 campos verificados; sem label: nenhum | ✅ Passou | [print 04](img/04-formulario-cadastro_encomenda.jpg) |
| CT28 | Acessibilidade | Verificar as imagens da página. | Todas as imagens do conteúdo têm texto alternativo (alt). | 11 imagens; sem alt: 0 | ✅ Passou | [print 09](img/09-galeria%20de%20trabalhos.jpg) |
| CT29 | Navegação | Verificar os links das abas do menu. | Os links do menu apontam para seções que existem na página. | 6 links (#inicio, #sobre, #catalogo, #galeria, #encomenda, #contato); seções inexistentes: nenhuma | ✅ Passou | [print 01](img/01-landing-desktop.jpg) |
| CT30 | Conteúdo | Verificar os arquivos de imagem referenciados. | As imagens usadas pela página existem na pasta img/. | 7 arquivos referenciados; ausentes: nenhum | ✅ Passou | [print 09](img/09-galeria%20de%20trabalhos.jpg) |

## 3. Testes visuais (capturas de tela)

| ID | Área | Caso de teste (passos) | Resultado esperado | Resultado obtido | Status | Evidência |
| --- | --- | --- | --- | --- | --- | --- |
| CV01 | Responsividade | Abrir a página em 1366 px de largura e rolar do topo ao rodapé. | Seções Início, Sobre, Catálogo (4 cards em linha), Galeria, Encomenda e Contato legíveis, sem corte de texto nem de imagem. | Todas as seções aparecem completas. Após o ajuste de `object-fit: contain` no CSS, as 4 ilustrações do catálogo aparecem inteiras. | ✅ Passou | [print 01](img/01-landing-desktop.jpg) |
| CV02 | Responsividade | Abrir a página em 390 px de largura (celular) e rolar. | Conteúdo em uma coluna, sem rolagem horizontal, botões e imagens visíveis. | Layout em uma coluna, texto quebrando corretamente e cards com imagem inteira. | ✅ Passou | [print 02](img/02-landing-celular.jpg) |

## 4. Testes em navegador real e manual

| ID | Área | Caso de teste (passos) | Resultado esperado | Resultado obtido | Status | Evidência |
| --- | --- | --- | --- | --- | --- | --- |
| CM01 | Cadastro | Cadastrar um produto escolhendo uma imagem do computador e recarregar a página. | O card aparece com a foto escolhida, reduzida para no máximo 480 px, e continua após recarregar. | aviso: "Produto cadastrado!"; 5 cards; imagem salva como data:image/jpeg;base64… (480x439 px, ~59 KB); após recarregar o produto continua: true | ✅ Passou | [print 06](img/06-cadastro-sucesso.jpg) |
| CM02 | Navegação | Clicar em cada aba do menu (Sobre, Catálogo, Galeria, Encomenda, Contato e Início). | A página rola até a seção e a aba da seção fica destacada. | sobre: aba #sobre, seção a 96px do topo; catalogo: aba #catalogo, seção a 96px do topo; galeria: aba #galeria, seção a 96px do topo; encomenda: aba #encomenda, seção a 96px do topo; contato: aba #contato, seção a 623px do topo; inicio: aba #inicio, seção a 96px do topo | ✅ Passou | [print 01](img/01-landing-desktop.jpg) |
| CM03 | Acessibilidade | Navegar só com o teclado (Tab) até o botão Editar e apertar Enter. | Cada elemento recebe foco visível e o botão funciona com Enter. | 10 Tabs até chegar no botão Editar; 10 de 10 elementos com foco visível (contorno ou sombra); Enter no botão Editar abriu a edição: true | ✅ Passou | [print 07](img/07-edicao%20de%20um%20produto.jpg) |
| CM04 | Orçamento | Preencher o formulário de orçamento e clicar em Enviar pelo WhatsApp. | Abre o WhatsApp numa nova aba com a mensagem pronta. A montagem da mensagem e do link já foi verificada no CT25. | _Preencher após testar no navegador._ | ⬜ A executar | Print após testar |
| CM05 | Compatibilidade | Abrir `index.html` direto do arquivo (endereço `file://`), sem servidor, e rolar a página. | A página abre com os 4 produtos e todas as imagens carregadas. | aberta por file:; 4 produtos; imagens que não carregaram: 0 | ✅ Passou | Execução automática (sem print) |

## 5. Bugs encontrados e corrigidos durante os testes

| # | Onde | Problema | Correção | Reteste |
| --- | --- | --- | --- | --- |
| B01 | Catálogo (CSS) | As ilustrações dos cards eram recortadas no topo (`object-fit: cover` em proporção 4:3), cortando os morangos do bolo e o laço da caixa de brigadeiros. | `object-fit: contain` com margem interna no `.product__img`. | CV01 e CV02 |
| B02 | Dados | Produtos de versões antigas ficavam salvos no navegador sem imagem válida e apareciam no catálogo. | Limpeza única na abertura (`iniciarExemplos`). | CT23 |
| B03 | Segurança | Na versão inicial do código, nome e descrição eram inseridos com `innerHTML` (XSS). | Troca por `textContent`. | CT21 |
| B04 | Pesquisa | O contador mostrava "1 produto encontrados" (plural errado) quando a pesquisa tinha um só resultado. | Concordância: "1 produto encontrado" / "N produtos encontrados". | CT16 |
