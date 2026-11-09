# Cronograma e Lista de Tarefas

> **Proposta para a equipe validar e preencher.** Atualizada em **09/11/2026** com o código inicial de `site/` (enviado por Jonatas em 07/11). Cobre a landing page e o catálogo de produtos gerenciável até a entrega em **23/11/2026**.
> Escopo: [01-visao-geral.md](../foundation/01-visao-geral.md) · Requisitos: [02-escopo-e-requisitos.md](../foundation/02-escopo-e-requisitos.md) · Pendências: [03-pendencias-e-decisoes.md](../foundation/03-pendencias-e-decisoes.md) · Código: [04-estado-do-codigo.md](../foundation/04-estado-do-codigo.md)

## Como preencher

1. Leia a lista de tarefas (seção 2) e escreva seu nome na coluna **Responsável** das tarefas que vai assumir. Pode haver mais de uma pessoa na mesma tarefa, separadas por vírgula.
2. Se quiser, repita suas escolhas no seu quadro pessoal (seção 3).
3. Troque o **Status** conforme avançar: ⬜ a fazer · 🟨 em andamento ou parcial · ✅ feito · ⛔ bloqueado.
4. Toda tarefa precisa de pelo menos um responsável. Se algo ficar sem dono até **10/11**, a equipe distribui na reunião de alinhamento.
5. Os prazos são uma proposta. Se algum não couber, avise o grupo e ajuste a linha aqui.

> **O que já existe:** o código inicial em `site/` já tem cadastro, listagem, edição e exclusão de produtos. As tarefas abaixo estão marcadas ✅ ou 🟨 onde isso se aplica. Esta versão assume a **DEC4** (o catálogo de produtos substitui o cadastro de clientes/encomendas); se a equipe decidir de outra forma, a lista muda.

---

## 1. Cronograma

| Fase | Período | Objetivo | Marco de saída |
| --- | --- | --- | --- |
| **0. Alinhamento** | 09/11 a 10/11 | Confirmar a DEC4, decidir onde fica o gerenciamento, distribuir tarefas e reunir conteúdo. | Tarefas com responsável e decisões D4/L8/L10 fechadas |
| **1. Construção** | 10/11 a 12/11 | Corrigir o código inicial e construir as seções da landing page, imagens e validações. | Vitrine e catálogo completos em `site/` |
| **2. Integração e polimento** | 13/11 a 15/11 | Fechar validações, responsividade, acessibilidade e feedback visual. | Aplicação completa e navegável |
| **3. Testes e correções** | 16/11 a 18/11 | Executar os casos de teste, registrar bugs e corrigir. | Tabela de testes preenchida |
| **4. Documentação e evidências** | 19/11 a 21/11 | Prints, PDF da apresentação, vídeo, boas práticas, revisão geral. | Pacote de entrega pronto |
| **Buffer** | 22/11 | Margem para imprevistos. | — |
| **ENTREGA FINAL** | **23/11** | Enviar o pacote completo. | Entregue |

### Rituais (do plano PI2)

| Ritual | Frequência | Formato |
| --- | --- | --- |
| Daily | Dias úteis, 15 min | O que fez, o que fará, bloqueios (WhatsApp/Discord) |
| Revisão de código | A cada PR | Tech Lead + autor, no GitHub |
| Demo | Sextas-feiras (13/11 e 20/11) | Compartilhar tela e testar juntos |
| Retrospectiva | Fim de cada fase | O que funcionou, o que melhorar |

---

## 2. Lista de tarefas

Legenda de área: **GES** gestão · **LP** landing page · **CAT** catálogo e gerenciamento de produtos · **INT** integração · **QA** testes · **DOC** documentação.

### Fase 0 — Alinhamento (09/11 a 10/11)

| ID | Área | Tarefa | Prazo | Depende de | Responsável | Status |
| --- | --- | --- | --- | --- | --- | --- |
| T01 | GES | Confirmar a **DEC4** (catálogo no lugar do cadastro de clientes) e decidir **onde fica o gerenciamento** do catálogo: seção separada, página separada ou demonstração sem login (L8, C07) | 10/11 | — |  | ⬜ |
| T02 | GES | Confirmar a estrutura de arquivos em `site/` e a pasta `site/img/` (L7) | 10/11 | T01 |  | 🟨 |
| T03 | GES | Repositório criado no GitHub. Falta definir regras de PR e branches (`main` protegida, `feat/*`) | 10/11 | — |  | 🟨 |
| T04 | GES | Confirmar se existe trabalho fora do repositório e atualizar o status das tarefas (L2) | 10/11 | — |  | ⬜ |
| T05 | GES | Reunir o conteúdo da landing page: textos, nome da confeiteira, diferenciais, produtos, preços iniciais, contato, localização, horários — ou decidir que será fictício (L10) | 10/11 | — |  | ⬜ |
| T06 | GES | Definir as regras de validação do produto: tamanhos, preço, formato e origem da imagem (L3, L4) | 10/11 | — |  | ⬜ |
| T07 | DOC | Definir a estrutura do PDF de apresentação (capa, problema, solução, telas, testes, boas práticas, equipe) e o roteiro do vídeo | 10/11 | T01 |  | ⬜ |

### Fase 1 — Construção (10/11 a 12/11)

| ID | Área | Tarefa | Prazo | Depende de | Responsável | Status |
| --- | --- | --- | --- | --- | --- | --- |
| T08 | GES | Extrair utilitários: leitura/escrita seguras do `localStorage` com `try/catch` (C03), `escapeHtml`, `gerarId()` e `toast()` | 11/11 | T03 |  | ⬜ |
| T09 | GES | Evoluir `style.css`: variáveis CSS, tipografia e identidade visual, mobile-first (o estilo base já existe) | 11/11 | T02 |  | 🟨 |
| T10 | LP | Completar o HTML da landing page: menu, seções e rodapé, com marcação semântica (já há cabeçalho e catálogo) | 11/11 | T02, T05 |  | 🟨 |
| T11 | LP | Seção **Apresentação da confeiteira**: descrição, proposta e diferenciais (já há título e uma frase) — RL01 | 11/11 | T10 |  | 🟨 |
| T12 | CAT | **Catálogo de produtos** com imagem (hoje mostra nome, descrição e preço) — RL02, C08 | 12/11 | T06, T15 |  | 🟨 |
| T13 | LP | Seção **Galeria de trabalhos** — RL03 | 12/11 | T10 |  | ⬜ |
| T14 | LP | Seção **Informações para encomenda** (prazo mínimo, tipos de produto, como pedir orçamento) e contato — RL04 | 12/11 | T10 |  | ⬜ |
| T15 | CAT | Formulário de produto: acrescentar campo de imagem e `<label>` em todos os campos (C04, C08) | 11/11 | T02, T06 |  | 🟨 |
| T16 | CAT | Lógica do cadastro e da edição: `id` estável no lugar do índice, preço numérico, tolerar o formato antigo dos dados (C05, C10) | 12/11 | T06, T08, T15 |  | 🟨 |
| T17 | CAT | Estrutura do catálogo em cartões com estado vazio | — | — |  | ✅ |
| T18 | CAT | Lógica da listagem: escapar HTML (C02), trocar `onclick` por delegação de eventos (C09), ordenar | 12/11 | T08, T17 |  | 🟨 |
| T19 | QA | Escrever os casos de teste para o catálogo (cadastrar, editar, excluir, validação, persistência, estado vazio) e para a landing page (seções, links, imagens, responsividade) | 12/11 | T06 |  | ⬜ |
| T39 | GES | Corrigir os achados rápidos do código inicial: remover `[cite: 5]` (C01) e o XSS do `innerHTML` (C02) | 10/11 | — |  | ⬜ |

### Fase 2 — Integração e polimento (13/11 a 15/11)

| ID | Área | Tarefa | Prazo | Depende de | Responsável | Status |
| --- | --- | --- | --- | --- | --- | --- |
| T20 | INT | Navegação interna (menu e âncoras entre as seções) e acesso ao gerenciamento conforme a decisão do T01 | 13/11 | T11 a T18 |  | ⬜ |
| T21 | CAT | Validações completas: obrigatórios, `trim`, preço maior que zero, mensagens junto ao campo (C06) | 14/11 | T16 |  | ⬜ |
| T22 | GES | Feedback visual: toast de sucesso/erro, estados vazios e confirmação de exclusão (esta já existe) | 14/11 | T08 |  | 🟨 |
| T23 | LP | Responsividade da landing page (mobile, tablet, desktop) e otimização das imagens | 14/11 | T11 a T14 |  | ⬜ |
| T24 | CAT | Responsividade do catálogo e do formulário no mobile (a grade já é fluida) | 14/11 | T18 |  | 🟨 |
| T25 | GES | Acessibilidade: contraste WCAG AA, foco visível, navegação por teclado, `alt` nas imagens | 15/11 | T20 |  | ⬜ |
| T26 | GES | Code review dos PRs e merge na `main`; primeira versão integrada | 15/11 | T20 |  | ⬜ |

### Fase 3 — Testes e correções (16/11 a 18/11)

| ID | Área | Tarefa | Prazo | Depende de | Responsável | Status |
| --- | --- | --- | --- | --- | --- | --- |
| T27 | QA | Executar os casos de teste e preencher a tabela (resultado obtido, status, evidência) | 17/11 | T19, T26 |  | ⬜ |
| T28 | QA | Registrar bugs encontrados (passos para reproduzir, print) e repassar a quem desenvolveu | 17/11 | T27 |  | ⬜ |
| T29 | GES | Corrigir bugs e fazer refatoração leve | 18/11 | T28 |  | ⬜ |
| T30 | QA | Reteste dos bugs corrigidos e teste de regressão (os dados continuam ao recarregar a página) | 18/11 | T29 |  | ⬜ |

### Fase 4 — Documentação e evidências (19/11 a 21/11)

| ID | Área | Tarefa | Prazo | Depende de | Responsável | Status |
| --- | --- | --- | --- | --- | --- | --- |
| T31 | DOC | Tirar os prints (mínimo 6): landing page (desktop e mobile), formulário de produto, catálogo, erro de validação, edição, toast de sucesso | 19/11 | T30 |  | ⬜ |
| T32 | DOC | Escrever a seção de **boas práticas aplicadas** (código, Git, dados, segurança, UX, responsividade, acessibilidade) | 19/11 | T26 |  | ⬜ |
| T33 | DOC | Montar o PDF da apresentação | 20/11 | T31, T32, T27 |  | ⬜ |
| T34 | DOC | Gravar o vídeo de demonstração de 1 a 2 min: cadastrar e editar um produto (opcional, sugerido) | 20/11 | T30 |  | ⬜ |
| T35 | GES | Escrever o `README.md` do repositório com instruções de uso | 20/11 | T26 |  | ⬜ |
| T36 | GES | Revisão geral (aplicação e documentos) e ajustes finais | 21/11 | T33 a T35 |  | ⬜ |
| T37 | GES | Montar e conferir o pacote de entrega (PDF, prints, tabela de testes, vídeo ou link) | 22/11 | T36 |  | ⬜ |
| T38 | GES | **Entregar** | **23/11** | T37 |  | ⬜ |

### Opcionais — só se sobrar tempo

Se não forem feitas, entram no PDF como "funcionalidades futuras".

| ID | Área | Tarefa | Prazo | Depende de | Responsável | Status |
| --- | --- | --- | --- | --- | --- | --- |
| O01 | CAT | Editar produto | — | — |  | ✅ |
| O02 | CAT | Excluir produto (com confirmação) | — | — |  | ✅ |
| O03 | CAT | Pesquisar/filtrar produtos por nome | 18/11 | T18 |  | ⬜ |
| O04 | CAT | Cadastro e listagem de clientes/encomendas (RX01, funcionalidade futura da DEC4) | — | T01 |  | ⬜ |

---

## 3. Quadro por integrante

Cada pessoa lista aqui as tarefas que assumiu, pelo ID. Anote também a **reserva** de cada tarefa (quem cobre se o responsável não conseguir).

> Papel indicado no plano de ação: **Tech Lead — Fabiana Balduína Freitas Silva**. As demais funções estão em aberto e podem ser combinadas com a escolha das tarefas. A proposta de funções, RACI por entrega e combinados de trabalho está em [raci-e-combinados-de-trabalho.md](raci-e-combinados-de-trabalho.md).
> O código inicial de `site/` foi enviado por **Jonatas** (tarefas marcadas ✅ ou 🟨 acima).

| Integrante | Papel | Tarefas que vou fazer (IDs) | Tarefas em que posso apoiar | Disponibilidade / observações |
| --- | --- | --- | --- | --- |
| Aram Juliano Soares Zap |  |  |  |  |
| Camila Alves da Silva |  |  |  |  |
| Fabiana Balduína Freitas Silva | Tech Lead |  |  |  |
| Jonatas Sales dos Santos Vieira |  |  |  |  |
| Vitória Rodrigues |  |  |  |  |

### Conferência de cobertura (preencher depois da distribuição)

- [ ] Toda tarefa pendente (⬜ ou 🟨) tem pelo menos um responsável e uma reserva.
- [ ] Todo integrante tem pelo menos uma tarefa em cada fase em que houver trabalho para o seu perfil.
- [ ] As tarefas de QA e Documentação (T07, T19, T27–T28, T30–T34) têm dono, inclusive para quem não programa.
- [ ] Nenhuma pessoa concentra todas as tarefas de uma mesma fase com prazo no mesmo dia.
