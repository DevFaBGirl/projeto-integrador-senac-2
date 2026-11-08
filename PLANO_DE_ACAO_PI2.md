# Plano de Ação - Projeto Integrador 2 (Etapa 2)

**Projeto:** Sistema de Cadastro de Clientes/Encomendas - Confeitaria  
**Equipe:** Aram Juliano Soares Zap, Camila Alves da Silva, Fabiana Balduína Freitas Silva, Jonatas Sales dos Santos Vieira, Vitória Rodrigue  
**Prazo final:** 23/11/2026  
**Data de criação:** 22/10/2026

---

## 1. Escopo do Projeto

### 1.1 Funcionalidades Obrigatórias (Mínimo Viável)

| Funcionalidade              | Descrição                                                                    |
| --------------------------- | ---------------------------------------------------------------------------- |
| **Cadastro de Informações** | Formulário com: Nome, Telefone, Email, Produto, Data de Entrega, Observações |
| **Listagem/Consulta**       | Tabela com todos os registros, ordenados por data (mais recente primeiro)    |
| **Armazenamento**           | localStorage do navegador (chave: `clientesConfeitaria`)                     |
| **Validação**               | Campos obrigatórios + formato email/telefone/data                            |

### 1.2 Funcionalidades Opcionais (Documentadas, não priorizadas)

- ✏️ Editar registro
- 🗑️ Excluir registro
- 🔍 Filtrar por nome/produto/data

> **Nota:** As opcionais serão implementadas apenas se houver tempo nas semanas 3-4. Devem constar no relatório como "funcionalidades futuras".

---

## 2. Divisão de Papéis (RACI)

### 2.1 Atribuição de Papéis (preencher com nomes da equipe)

| Papel                 | Perfil       | Responsabilidades (R)                                               | Apoia (A)          | Consultado (C) | Informado (I) | Nome do Integrante |
| --------------------- | ------------ | ------------------------------------------------------------------- | ------------------ | -------------- | ------------- | ------------------ |
| **Tech Lead**         | Sabe HTML/JS | Arquitetura JS, localStorage, integração, code review, Git, merge   | Cadastro, Listagem | QA, Docs       | Todos         | Fabiana Balduína Freitas Silva |
| **Frontend Cadastro** | Sabe HTML/JS | `index.html`, `style.css`, validação formulário, `salvarCliente()`  | Tech Lead          | Listagem       | QA, Docs      |                    |
| **Frontend Listagem** | Sabe HTML/JS | `listagem.html`, renderização tabela, `listarClientes()`, ordenação | Tech Lead          | Cadastro       | QA, Docs      |                    |
| **QA / Testes**       | Não programa | Casos de teste, execução, bugs, prints, tabela de testes            | Tech Lead          | Devs           | Docs          |                    |
| **Documentação**      | Não programa | Prints organizados, PDF apresentação, vídeo, boas práticas          | Tech Lead          | QA             | Devs          |                    |

**Legenda:** R = Responsável (executa), A = Apoia (ajuda), C = Consultado (opina), I = Informado (sabe do andamento)

> **Definição de hoje (22/10):** Fabiana assume Tech Lead. Demais papéis a combinar com a equipe.

---

## 3. Cronograma Detalhado (4 Semanas)

### Semana 1: 23/10 a 29/10 — Setup + Cadastro

| Dia      | Atividade                                                    | Responsável       | Entrega                 |
| -------- | ------------------------------------------------------------ | ----------------- | ----------------------- |
| 23/10    | Criar repo GitHub, adicionar colaboradores, definir branches | Tech Lead         | Repo pronto             |
| 23-24/10 | Estruturar `index.html` (formulário semântico, acessível)    | Frontend Cadastro | HTML válido             |
| 24-25/10 | Criar `style.css` mobile-first, variáveis CSS, reset         | Frontend Cadastro | CSS base                |
| 25-26/10 | Implementar `app.js` (storage, utils, gerarId)               | Tech Lead         | Módulo base             |
| 26-27/10 | Implementar `cadastro.js` (validação, save, toast)           | Frontend Cadastro | Cadastro funcional      |
| 28-29/10 | Testes manuais do cadastro, correções                        | QA + Tech Lead    | Save no localStorage OK |

**Marco:** ✅ Cadastro salvando no localStorage

---

### Semana 2: 30/10 a 05/11 — Listagem + Integração

| Dia         | Atividade                                                    | Responsável       | Entrega            |
| ----------- | ------------------------------------------------------------ | ----------------- | ------------------ |
| 30-31/10    | Estruturar `listagem.html` (tabela semântica, vazia)         | Frontend Listagem | HTML pronto        |
| 31/10-01/11 | Estilizar tabela (responsiva, scroll horizontal mobile)      | Frontend Listagem | CSS tabela         |
| 01-02/11    | Implementar `listagem.js` (ler storage, renderizar, ordenar) | Frontend Listagem | Listagem funcional |
| 02-03/11    | Navegação entre telas (links/menu), integração completa      | Tech Lead         | App integrado      |
| 04-05/11    | Testes cruzados (cadastro → listagem), bugs                  | QA + Devs         | App funcional      |

**Marco:** ✅ Aplicação completa (cadastro + listagem) — **05/11**

---

### Semana 3: 06/11 a 12/11 — Validações + Testes + Polimento

| Dia      | Atividade                                                    | Responsável                | Entrega                     |
| -------- | ------------------------------------------------------------ | -------------------------- | --------------------------- |
| 06-07/11 | Validações robustas (regex telefone, email, data futura)     | Frontend Cadastro          | Validação completa          |
| 07-08/11 | Responsividade completa (mobile, tablet, desktop)            | Frontend Cadastro/Listagem | Layouts testados            |
| 08-09/11 | Feedback visual: loading, toast sucesso/erro, estados vazios | Tech Lead                  | UX polida                   |
| 09-10/11 | Testes de regressão (casos de teste formais)                 | QA                         | Tabela de testes preenchida |
| 11-12/11 | Correção de bugs, refatoração leve                           | Devs                       | Código limpo                |

**Marco:** ✅ Testes concluídos — **12/11**

---

### Semana 4: 13/11 a 23/11 — Documentação + Entrega

| Dia       | Atividade                                                         | Responsável      | Entrega                  |
| --------- | ----------------------------------------------------------------- | ---------------- | ------------------------ |
| 13-14/11  | Tirar prints organizados (cadastro, listagem, mobile, validações) | QA + Docs        | Pasta `prints/`          |
| 15-16/11  | Montar PDF apresentação (estrutura definida na semana 1)          | Docs             | `Apresentacao_PI2.pdf`   |
| 17-18/11  | Gravar vídeo demonstração (1-2 min, roteiro pré-definido)         | Docs             | `video_demo.mp4` ou link |
| 19/11     | Documentar boas práticas (seção do relatório)                     | Docs + Tech Lead | Texto final              |
| 20/11     | Revisão geral (app + docs), ajustes finais                        | Todos            | Versão final             |
| 21-22/11  | Buffer para imprevistos                                           | —                | —                        |
| **23/11** | **ENTREGA FINAL**                                                 | **Todos**        | **Pacote completo**      |

---

## 4. Estrutura Técnica

### 4.1 Arquivos do Projeto

```
projeto-integrador-2/
├── index.html          # Formulário de cadastro
├── listagem.html       # Tabela de clientes
├── style.css           # Estilos compartilhados (mobile-first)
├── app.js              # Storage, utils, helpers compartilhados
├── cadastro.js         # Lógica específica do cadastro
├── listagem.js         # Lógica específica da listagem
├── README.md           # Instruções de uso
└── prints/             # Prints para documentação
    ├── cadastro-desktop.png
    ├── cadastro-mobile.png
    ├── listagem-desktop.png
    ├── listagem-mobile.png
    ├── validacao-erro.png
    └── toast-sucesso.png
```

### 4.2 Schema do localStorage

**Chave:** `clientesConfeitaria`  
**Valor:** Array de objetos

```javascript
[
  {
    id: 1730000000000, // Date.now() como ID único
    nome: "Maria Silva",
    telefone: "(11) 99999-9999",
    email: "maria@email.com",
    produto: "Bolo 2kg - Chocolate",
    dataEntrega: "2026-11-20", // YYYY-MM-DD
    observacoes: "Sem glúten, cobertura branca",
    criadoEm: "2026-10-25T14:30:00.000Z", // ISO 8601
  },
];
```

### 4.3 Fluxo de Dados

```
[Formulário index.html]
       │
       ▼
[Validação JS (cadastro.js)]
       │
       ▼
[app.js → salvarCliente(dados)]
       │
       ▼
[localStorage.setItem('clientesConfeitaria', JSON.stringify(array))]
       │
       ▼
[Redirecionar para listagem.html]
       │
       ▼
[listagem.js → listarClientes()]
       │
       ▼
[localStorage.getItem → JSON.parse → renderizarTabela()]
```

---

## 5. Checklist de Entregáveis

| #   | Entregável                                        | Responsável (Papel) | Prazo | Status |
| --- | ------------------------------------------------- | ------------------- | ----- | ------ |
| 1   | Aplicação funcional (cadastro + listagem)         | Time Dev            | 05/11 | ⬜     |
| 2   | Apresentação em PDF                               | Documentação        | 20/11 | ⬜     |
| 3   | Prints das principais telas (mín. 6)              | QA / Testes + Documentação | 15/11 | ⬜     |
| 4   | Tabela de testes realizados                       | QA / Testes         | 12/11 | ⬜     |
| 5   | Boas práticas documentadas                        | Documentação        | 19/11 | ⬜     |
| 6   | Vídeo demonstração (1-2 min)                      | Documentação        | 18/11 | ⬜     |
| 7   | Funcionalidades opcionais (editar/excluir/filtro) | Time Dev            | 23/11 | ⬜     |

---

## 6. Template da Tabela de Testes

| ID   | Funcionalidade | Cenário de Teste         | Dados de Entrada                      | Resultado Esperado                                  | Resultado Obtido | Status | Evidência |
| ---- | -------------- | ------------------------ | ------------------------------------- | --------------------------------------------------- | ---------------- | ------ | --------- |
| CT01 | Cadastro       | Cadastro válido completo | Todos campos preenchidos corretamente | Registro salvo, toast sucesso, redireciona listagem |                  | ⬜     | Print     |
| CT02 | Cadastro       | Nome vazio               | Nome vazio, demais preenchidos        | Bloqueia envio, mensagem erro no campo              |                  | ⬜     | Print     |
| CT03 | Cadastro       | Email inválido           | Email "invalido"                      | Bloqueia envio, mensagem erro                       |                  | ⬜     | Print     |
| CT04 | Cadastro       | Telefone inválido        | Telefone "123"                        | Bloqueia envio, mensagem erro                       |                  | ⬜     | Print     |
| CT05 | Cadastro       | Data passada             | Data anterior a hoje                  | Bloqueia envio, mensagem erro                       |                  | ⬜     | Print     |
| CT06 | Listagem       | Exibir registros         | 3+ registros no storage               | Tabela ordenada desc por dataEntrega                |                  | ⬜     | Print     |
| CT07 | Listagem       | Lista vazia              | Storage vazio                         | Mensagem "Nenhum cadastro"                          |                  | ⬜     | Print     |
| CT08 | Integração     | Cadastro → Listagem      | Fluxo completo                        | Novo registro aparece no topo                       |                  | ⬜     | Print     |
| CT09 | Responsividade | Mobile (375px)           | Redimensionar tela                    | Formulário/tabela usáveis sem scroll horizontal     |                  | ⬜     | Print     |
| CT10 | Persistência   | Recarregar página        | F5 na listagem                        | Dados mantidos                                      |                  | ⬜     | Print     |

---

## 7. Boas Práticas para Documentar no Relatório

### 7.1 Código e Arquitetura

- [ ] Separação de responsabilidades: HTML (estrutura), CSS (apresentação), JS (comportamento)
- [ ] Modularização: `app.js` (compartilhado), `cadastro.js`, `listagem.js`
- [ ] Nomenclatura consistente: camelCase (JS), kebab-case (CSS/HTML), semântica
- [ ] Funções pequenas, single responsibility
- [ ] Comentários em trechos complexos (storage, validação)

### 7.2 Versionamento (Git)

- [ ] Commits semânticos: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
- [ ] Branch `main` protegida, desenvolvimento em branches `feat/*`
- [ ] Pull Requests com revisão (pelo menos 1 aprovação)
- [ ] Mensagens de commit claras e em português

### 7.3 Tratamento de Dados

- [ ] `try/catch` em todas operações localStorage
- [ ] Sanitização básica de inputs (trim, escape HTML)
- [ ] Schema versionado (futuro: chave `clientesConfeitaria_v1`)
- [ ] IDs únicos via `Date.now()` + fallback

### 7.4 Experiência do Usuário (UX)

- [ ] Feedback visual: loading no botão, toast sucesso/erro
- [ ] Estados vazios amigáveis ("Nenhum cadastro ainda")
- [ ] Validação inline (mostra erro ao lado do campo)
- [ ] Preservação de dados no formulário ao voltar (opcional)

### 7.5 Responsividade e Acessibilidade

- [ ] Mobile-first: base < 768px, media queries para tablet/desktop
- [ ] Unidades relativas (rem, %, clamp)
- [ ] Labels associados (`<label for>` + `<input id>`)
- [ ] Contraste WCAG AA (4.5:1 texto normal)
- [ ] Navegação por teclado (foco visível, ordem lógica)
- [ ] `aria-label` em botões apenas com ícone

---

## 8. Roteiro do Vídeo (1-2 minutos)

| Tempo     | Cena                                       | Áudio/Legenda                                          |
| --------- | ------------------------------------------ | ------------------------------------------------------ |
| 0:00-0:10 | Tela inicial → clica "Novo Cadastro"       | "Sistema de gestão de encomendas para confeitaria"     |
| 0:10-0:30 | Preenche formulário completo               | "Cadastro de cliente com validação em tempo real"      |
| 0:30-0:40 | Clica salvar → toast sucesso → redireciona | "Dados salvos no localStorage do navegador"            |
| 0:40-1:00 | Listagem aparece com registro no topo      | "Listagem automática ordenada por data de entrega"     |
| 1:00-1:15 | Tenta cadastrar inválido → mostra erros    | "Validação client-side: email, telefone, data futura"  |
| 1:15-1:30 | Redimensiona para mobile                   | "Totalmente responsivo: mobile, tablet, desktop"       |
| 1:30-1:45 | Recarrega página (F5) → dados permanecem   | "Persistência local sem necessidade de banco de dados" |
| 1:45-2:00 | Tela final com logos/equipe                | "Projeto Integrador 2 - Equipe [nomes]"                |

---

## 9. Riscos e Mitigações

| Risco                                      | Probabilidade | Impacto | Mitigação                                                         |
| ------------------------------------------ | ------------- | ------- | ----------------------------------------------------------------- |
| Atraso na integração (cadastro ↔ listagem) | Alta          | Alto    | Pair programming na Semana 2; Tech Lead faz a "cola"              |
| Bugs no localStorage (corrupção, quota)    | Média         | Alto    | Testes diários; `try/catch`; limpar storage se necessário         |
| Documentação deixada para última hora      | Alta          | Médio   | Integrante 5 começa prints na Semana 2; roteiro vídeo na Semana 1 |
| Falta de tempo para opcionais              | Certa         | Baixo   | Documentar como "futuro" no PDF; não prometer na entrega          |
| Conflitos de merge no Git                  | Média         | Médio   | Branches curtas, PRs pequenos, comunicação no grupo               |
| Integrantes não-devs sem tarefas claras    | Baixa         | Médio   | QA e Docs têm entregas definidas desde Semana 1                   |

---

## 10. Próximos Passos Imediatos (Esta Semana)

| Ação                                                         | Responsável (Papel) | Status |
| ------------------------------------------------------------ | ------------------- | ------ |
| Criar repositório GitHub, configurar branch protection, convidar equipe | Fabiana (Tech Lead) | ✅     |
| Criar `app.js` com `salvar()`, `listar()`, `gerarId()`, `toast()` | Fabiana (Tech Lead) |        |
| Estruturar `index.html` + `style.css` (mobile-first)         | [Frontend Cadastro] |        |
| Criar `listagem.html` com tabela semântica vazia             | [Frontend Listagem] |        |
| Definir casos de teste na tabela (CT01-CT10)                 | [QA / Testes]       |        |
| Definir estrutura do PDF (slides: capa, problema, solução, telas, testes, boas práticas, equipe) | [Documentação] |        |

---

## 11. Comunicação e Acompanhamento

| Ritual                 | Frequência          | Participantes     | Formato                                       |
| ---------------------- | ------------------- | ----------------- | --------------------------------------------- |
| Daily standup (15 min) | Diário (dias úteis) | Todos             | WhatsApp/Discord - o que fez, fará, bloqueios |
| Revisão de código      | A cada PR           | Tech Lead + autor | GitHub PR review                              |
| Demo semanal           | Sextas-feiras       | Todos             | Compartilhar tela, testar juntos              |
| Retrospectiva          | Fim de cada semana  | Todos             | O que funcionou, melhorar, ações              |

---

## 12. Contatos da Equipe

| Nome                                | Papel             | Contato (WhatsApp/Email) | Disponibilidade |
| ----------------------------------- | ----------------- | ------------------------ | --------------- |
| Fabiana Balduína Freitas Silva      | Tech Lead         |                          |                 |
|                                     | Frontend Cadastro |                          |                 |
|                                     | Frontend Listagem |                          |                 |
|                                     | QA / Testes       |                          |                 |
|                                     | Documentação      |                          |                 |

> **Nomes da equipe para preencher:** Aram Juliano Soares Zap, Camila Alves da Silva, Jonatas Sales dos Santos Vieira, Vitória Rodrigue

---

> **Documento vivo** — Atualize conforme o projeto evolui.  
> Última atualização: 22/10/2026
