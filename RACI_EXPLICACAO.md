# Entendendo a Matriz RACI

## O que é RACI?

**RACI** é uma matriz de responsabilidades que define claramente **quem faz o quê** em cada tarefa de um projeto. O nome vem das iniciais dos quatro papéis:

| Letra | Termo em Inglês | Tradução | Significado |
|-------|-----------------|----------|-------------|
| **R** | **Responsible** | Responsável | Quem **executa** a tarefa (mão na massa) |
| **A** | **Accountable** | Aprovador / Dono | Quem **aprova** o resultado e responde por ele (apenas 1 por tarefa) |
| **C** | **Consulted** | Consultado | Quem dá **input/opinião** antes da execução (comunicação bilateral) |
| **I** | **Informed** | Informado | Quem só precisa **saber** do andamento/decisão (comunicação unilateral) |

---

## Para que serve em projetos?

- **Evita lacunas**: Garante que toda tarefa tem alguém executando (R)
- **Evita duplicação**: Define claramente quem aprova (A) — só um por tarefa
- **Clareia comunicação**: Diferencia quem opina (C) de quem só fica sabendo (I)
- **Facilita onboarding**: Novos membros entendem rápido seu papel
- **Base para cobrança**: "Combinado não sai caro" — está documentado

---

## Exemplo Prático: Projeto Integrador 2

### Tabela RACI do Plano de Ação

| Papel | Perfil | Responsabilidades (R) | Apoia (A) | Consultado (C) | Informado (I) | Nome |
|-------|--------|----------------------|-----------|----------------|---------------|------|
| **Tech Lead** | Sabe HTML/JS | Arquitetura JS, localStorage, integração, code review, Git, merge | Cadastro, Listagem | QA, Docs | Todos | Fabiana Balduína Freitas Silva |
| **Frontend Cadastro** | Sabe HTML/JS | `index.html`, `style.css`, validação formulário, `salvarCliente()` | Tech Lead | Listagem | QA, Docs | *[a definir]* |
| **Frontend Listagem** | Sabe HTML/JS | `listagem.html`, renderização tabela, `listarClientes()`, ordenação | Tech Lead | Cadastro | QA, Docs | *[a definir]* |
| **QA / Testes** | Não programa | Casos de teste, execução, bugs, prints, tabela de testes | Tech Lead | Devs | Docs | *[a definir]* |
| **Documentação** | Não programa | Prints organizados, PDF apresentação, vídeo, boas práticas | Tech Lead | QA | Devs | *[a definir]* |

### Leitura da tabela (exemplo: Tech Lead)

- **R** (executa): Arquitetura JS, localStorage, integração, code review, Git
- **A** (aprova/apoia): Valida entregas de Cadastro e Listagem
- **C** (opina): É consultado por QA e Docs
- **I** (sabe): Informa todos sobre decisões técnicas

---

## Como Preencher/Atualizar

1. **Liste todas as tarefas/entregas** do projeto
2. **Para cada tarefa**, atribua:
   - **1 único R** (quem faz) — pode ter mais de um se trabalharem juntos
   - **1 único A** (quem aprova) — **regra crítica**: nunca mais de um
   - **C** (quem opina) — stakeholders técnicos, especialistas
   - **I** (quem sabe) — equipe, gestores, cliente
3. **Revise com a equipe** — todos devem concordar
4. **Atualize** quando papéis mudarem ou tarefas novas surgirem

---

## Regras de Ouro

| Regra | Por que importa |
|-------|-----------------|
| **1 único "A" por tarefa** | Evita "achava que fulano aprovava" — dono claro da entrega |
| **Todo mundo tem ≥1 "R"** | Ninguém fica sem dono de nada; evita "passa a bola" |
| **"C" ≠ "A"** | Quem opina não aprova; quem aprova não precisa opinar em tudo |
| **"I" é passivo** | Não precisa responder, só receber a informação |
| **RACI vive** | Não é documento estático — atualize a cada sprint/fase |

---

## Aplicação no Dia a Dia

### Em reuniões (Daily/Weekly)
- "Quem é o **R** dessa tarefa?" → fala o andamento
- "Quem é o **A**?" → valida se está pronto para entregar
- "Preciso de **C** de alguém?" → chama o especialista
- "**I** para o time" → avisa decisão tomada

### Em Pull Requests
- **R** = autor do PR
- **A** = Tech Lead (aprova merge)
- **C** = outro dev da área (review técnico)
- **I** = time todo (via notificação GitHub)

### Em bloqueios
- **R** identifica o problema
- **C** ajuda a resolver (pair programming, discussão)
- **A** decide se muda escopo/prazo
- **I** é comunicado da mudança

---

## Benefícios para o PI2

1. **Professores avaliam organização** — RACI documentado mostra maturidade
2. **Equipe mista (devs + não-devs)** — papéis claros evitam "o que eu faço?"
3. **Prazo curto (4 semanas)** — decisões rápidas, dono claro por entrega
4. **Entregáveis obrigatórios** — RACI garante que PDF, vídeo, testes têm dono

---

## Referências Rápidas

- **R** = "Eu faço"
- **A** = "Eu respondo/assino embaixo"
- **C** = "Me pergunta antes"
- **I** = "Me avisa depois"

> **Dica:** Imprima ou fixe no Notion/GitHub Projects a tabela RACI do projeto. Consulte sempre que houver dúvida de "quem faz o quê".