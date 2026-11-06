# Cronograma e Lista de Tarefas

> **Proposta para a equipe validar e preencher.** Cobre a landing page e o sistema de cadastro/listagem, de **06/11/2026** até a entrega em **23/11/2026**.
> Escopo: [01-visao-geral.md](../foundation/01-visao-geral.md) · Requisitos: [02-escopo-e-requisitos.md](../foundation/02-escopo-e-requisitos.md) · Pendências: [03-pendencias-e-decisoes.md](../foundation/03-pendencias-e-decisoes.md)

## Como preencher

1. Leia a lista de tarefas (seção 2) e escreva seu nome na coluna **Responsável** das tarefas que vai assumir. Pode haver mais de uma pessoa na mesma tarefa, separadas por vírgula.
2. Se quiser, repita suas escolhas no seu quadro pessoal (seção 3).
3. Troque o **Status** conforme avançar: ⬜ a fazer · 🟨 em andamento · ✅ feito · ⛔ bloqueado.
4. Toda tarefa precisa de pelo menos um responsável. Se algo ficar sem dono até **08/11**, a equipe distribui na reunião de alinhamento.
5. Os prazos são uma proposta. Se algum não couber, avise o grupo e ajuste a linha aqui.

> **Ponto de partida desconhecido:** o plano de 22/10 previa cadastro e listagem prontos até 05/11, mas o repositório não tem código. Se alguma parte já existe fora do repositório, marque a tarefa como ✅ e informe o grupo.

---

## 1. Cronograma

| Fase | Período | Objetivo | Marco de saída |
| --- | --- | --- | --- |
| **0. Alinhamento** | 06/11 a 08/11 | Decidir estrutura e relação landing page × cadastro, distribuir tarefas, reunir conteúdo. | Tarefas com responsável e decisões D/L7–L10 fechadas |
| **1. Construção** | 09/11 a 12/11 | Construir a landing page, o cadastro, a listagem e o módulo de armazenamento. | Cada parte funcionando isoladamente |
| **2. Integração e polimento** | 13/11 a 15/11 | Ligar as telas, fechar validações, responsividade e feedback visual. | Aplicação completa e navegável |
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

Legenda de área: **GES** gestão · **LP** landing page · **CAD** cadastro · **LST** listagem · **INT** integração · **QA** testes · **DOC** documentação.

### Fase 0 — Alinhamento (06/11 a 08/11)

| ID | Área | Tarefa | Prazo | Depende de | Responsável | Status |
| --- | --- | --- | --- | --- | --- | --- |
| T01 | GES | Decidir a relação entre landing page e cadastro: a landing page leva ao formulário (ex.: pedido de orçamento) ou o cadastro/listagem é área interna da confeiteira? (pendência L8) | 07/11 | — |  | ⬜ |
| T02 | GES | Definir a estrutura de arquivos e qual é o `index.html` (pendência L7) e atualizar o doc de escopo | 08/11 | T01 |  | ⬜ |
| T03 | GES | Criar o repositório de código, convidar a equipe, definir branches (`main` protegida, `feat/*`) e regras de PR | 07/11 | — |  | ⬜ |
| T04 | GES | Confirmar o que já existe de código e atualizar o status das tarefas (pendência L2) | 07/11 | — |  | ⬜ |
| T05 | GES | Reunir o conteúdo da landing page: textos, nome da confeiteira, diferenciais, produtos, preços iniciais, contato, localização, horários — ou decidir que será fictício (pendência L10) | 08/11 | — |  | ⬜ |
| T06 | GES | Definir as regras de validação: campos obrigatórios, formato de telefone, regra de "data futura" (pendências L3 e L4) | 08/11 | — |  | ⬜ |
| T07 | DOC | Definir a estrutura do PDF de apresentação (capa, problema, solução, telas, testes, boas práticas, equipe) e o roteiro do vídeo | 08/11 | T01 |  | ⬜ |

### Fase 1 — Construção (09/11 a 12/11)

| ID | Área | Tarefa | Prazo | Depende de | Responsável | Status |
| --- | --- | --- | --- | --- | --- | --- |
| T08 | GES | Criar `app.js`: leitura e gravação no `localStorage` (com `try/catch`), `gerarId()`, `toast()` e utilitários de sanitização | 10/11 | T03 |  | ⬜ |
| T09 | GES | Criar `style.css` base: variáveis CSS, reset, tipografia e identidade visual, mobile-first | 10/11 | T02 |  | ⬜ |
| T10 | LP | Estruturar o HTML da landing page (cabeçalho/menu, seções, rodapé) com marcação semântica e acessível | 10/11 | T02, T05 |  | ⬜ |
| T11 | LP | Seção **Apresentação da confeiteira** (nome, descrição, proposta, diferenciais) — RL01 | 11/11 | T10 |  | ⬜ |
| T12 | LP | Seção **Catálogo de produtos** (nome, descrição, imagem, preço inicial) — RL02 | 11/11 | T10 |  | ⬜ |
| T13 | LP | Seção **Galeria de trabalhos** — RL03 | 12/11 | T10 |  | ⬜ |
| T14 | LP | Seção **Informações para encomenda** (prazo mínimo, tipos de produto, como pedir orçamento) e contato — RL04 | 12/11 | T10 |  | ⬜ |
| T15 | CAD | Estruturar o formulário de cadastro (Nome, Telefone, Email, Produto, Data de Entrega, Observações) com labels associados | 10/11 | T02 |  | ⬜ |
| T16 | CAD | Implementar a lógica do cadastro: validação, `salvarCliente()`, mensagens de erro junto ao campo | 12/11 | T06, T08, T15 |  | ⬜ |
| T17 | LST | Estruturar a página de listagem com tabela semântica e estado vazio ("Nenhum cadastro") | 11/11 | T02 |  | ⬜ |
| T18 | LST | Implementar a lógica da listagem: ler o storage, renderizar a tabela, ordenar por data (mais recente primeiro), escapar HTML | 12/11 | T08, T17 |  | ⬜ |
| T19 | QA | Escrever os casos de teste CT01 a CT10 (do plano) e acrescentar os da landing page (seções, links, imagens, responsividade) | 12/11 | T06 |  | ⬜ |

### Fase 2 — Integração e polimento (13/11 a 15/11)

| ID | Área | Tarefa | Prazo | Depende de | Responsável | Status |
| --- | --- | --- | --- | --- | --- | --- |
| T20 | INT | Navegação entre landing page, cadastro e listagem (menu e links) e redirecionamento após salvar | 13/11 | T11 a T18 |  | ⬜ |
| T21 | CAD | Validações completas: email, telefone, data futura, campos obrigatórios, sanitização (`trim`) | 14/11 | T16 |  | ⬜ |
| T22 | GES | Feedback visual: toast de sucesso/erro, loading no botão, estados vazios | 14/11 | T08 |  | ⬜ |
| T23 | LP | Responsividade da landing page (mobile, tablet, desktop) e otimização das imagens | 14/11 | T11 a T14 |  | ⬜ |
| T24 | LST | Responsividade da tabela (rolagem horizontal no mobile ou layout em cartões) | 14/11 | T18 |  | ⬜ |
| T25 | GES | Acessibilidade: contraste WCAG AA, foco visível, navegação por teclado, `alt` nas imagens | 15/11 | T20 |  | ⬜ |
| T26 | GES | Code review dos PRs e merge na `main`; primeira versão integrada | 15/11 | T20 |  | ⬜ |

### Fase 3 — Testes e correções (16/11 a 18/11)

| ID | Área | Tarefa | Prazo | Depende de | Responsável | Status |
| --- | --- | --- | --- | --- | --- | --- |
| T27 | QA | Executar os casos de teste e preencher a tabela (resultado obtido, status, evidência) | 17/11 | T19, T26 |  | ⬜ |
| T28 | QA | Registrar bugs encontrados (passos para reproduzir, print) e repassar a quem desenvolveu | 17/11 | T27 |  | ⬜ |
| T29 | GES | Corrigir bugs e fazer refatoração leve | 18/11 | T28 |  | ⬜ |
| T30 | QA | Reteste dos bugs corrigidos e teste de regressão (CT10: persistência após recarregar) | 18/11 | T29 |  | ⬜ |

### Fase 4 — Documentação e evidências (19/11 a 21/11)

| ID | Área | Tarefa | Prazo | Depende de | Responsável | Status |
| --- | --- | --- | --- | --- | --- | --- |
| T31 | DOC | Tirar os prints (mínimo 6): landing page (desktop e mobile), cadastro, listagem, erro de validação, toast de sucesso | 19/11 | T30 |  | ⬜ |
| T32 | DOC | Escrever a seção de **boas práticas aplicadas** (código, Git, dados, UX, responsividade, acessibilidade) | 19/11 | T26 |  | ⬜ |
| T33 | DOC | Montar o PDF da apresentação | 20/11 | T31, T32, T27 |  | ⬜ |
| T34 | DOC | Gravar o vídeo de demonstração de 1 a 2 min (opcional, sugerido) | 20/11 | T30 |  | ⬜ |
| T35 | GES | Escrever o `README.md` do repositório com instruções de uso | 20/11 | T26 |  | ⬜ |
| T36 | GES | Revisão geral (aplicação e documentos) e ajustes finais | 21/11 | T33 a T35 |  | ⬜ |
| T37 | GES | Montar e conferir o pacote de entrega (PDF, prints, tabela de testes, vídeo ou link) | 22/11 | T36 |  | ⬜ |
| T38 | GES | **Entregar** | **23/11** | T37 |  | ⬜ |

### Opcionais — só se sobrar tempo (a partir de 13/11)

Se não forem feitas, entram no PDF como "funcionalidades futuras".

| ID | Área | Tarefa | Prazo | Depende de | Responsável | Status |
| --- | --- | --- | --- | --- | --- | --- |
| O01 | LST | Editar registro | 18/11 | T18 |  | ⬜ |
| O02 | LST | Excluir registro (com confirmação) | 18/11 | T18 |  | ⬜ |
| O03 | LST | Pesquisar/filtrar por nome, produto ou data | 18/11 | T18 |  | ⬜ |

---

## 3. Quadro por integrante

Cada pessoa lista aqui as tarefas que assumiu, pelo ID.

> Papel já definido no plano de ação: **Tech Lead — Fabiana Balduína Freitas Silva**. Os demais papéis (Frontend Cadastro, Frontend Listagem, QA/Testes, Documentação) estão em aberto e podem ser combinados com a escolha das tarefas. A proposta de funções, de RACI por entrega e de combinados de trabalho está em [raci-e-combinados-de-trabalho.md](raci-e-combinados-de-trabalho.md); anote também a **reserva** de cada tarefa.

| Integrante | Papel | Tarefas que vou fazer (IDs) | Tarefas em que posso apoiar | Disponibilidade / observações |
| --- | --- | --- | --- | --- |
| Aram Juliano Soares Zap |  |  |  |  |
| Camila Alves da Silva |  |  |  |  |
| Fabiana Balduína Freitas Silva | Tech Lead |  |  |  |
| Jonatas Sales dos Santos Vieira |  |  |  |  |
| Vitória Rodrigues |  |  |  |  |

### Conferência de cobertura (preencher depois da distribuição)

- [ ] Toda tarefa T01–T38 tem pelo menos um responsável.
- [ ] Todo integrante tem pelo menos uma tarefa em cada fase em que houver trabalho para o seu perfil.
- [ ] As tarefas de QA e Documentação (T07, T19, T27–T28, T30–T34) têm dono, inclusive para quem não programa.
- [ ] Nenhuma pessoa concentra todas as tarefas de uma mesma fase com prazo no mesmo dia.
