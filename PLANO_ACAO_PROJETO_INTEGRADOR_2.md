# Plano de Ação - Projeto Integrador 2 (Versão Simples)

---

## 1. Escopo Mínimo (Obrigatório)

| Item | Descrição |
|------|-----------|
| **Cadastro** | Formulário: Nome, Telefone, Email, Produto, Data Entrega, Observações |
| **Listagem** | Tabela ordenada por data (recente primeiro) |
| **Armazenamento** | localStorage (chave: `clientesConfeitaria`) |
| **Validação** | Campos obrigatórios + formato email/telefone/data |

---

## 2. Funcionalidades Opcionais (Documentadas, não priorizadas)

- ✏️ Editar registro
- 🗑️ Excluir registro
- 🔍 Filtrar por nome/produto/data

---

## 3. Divisão de Papéis (5 integrantes)

| Integrante | Perfil | Responsabilidades |
|------------|--------|-------------------|
| **Você** | Sabe HTML/JS | Tech Lead - Arquitetura JS, localStorage, integração, code review, Git |
| **Integrante 2** | Sabe HTML/JS | Frontend Cadastro - `index.html`, `style.css`, validação formulário, `salvarCliente()` |
| **Integrante 3** | Sabe HTML/JS | Frontend Listagem - `listagem.html`, renderização tabela, `listarClientes()`, ordenação |
| **Integrante 4** | Não programa | QA + Testes - Testar fluxos, registrar bugs, preencher tabela de testes, tirar prints |
| **Integrante 5** | Não programa | Documentação - Prints organizados, PDF apresentação, vídeo (1-2 min), boas práticas |

> **Dica:** Quem não programa foca 100% em qualidade e entregáveis (itens que pesam na nota).

---

## 4. Cronograma (4 semanas até 23/11)

| Semana | Datas | Foco |
|--------|-------|------|
| 1 | 23-29/10 | Setup + Cadastro |
| 2 | 30/10-05/11 | Listagem + Integração |
| 3 | 06-12/11 | Validações + Testes |
| 4 | 13-23/11 | Documentação + Entrega |

### Marcos importantes:
- **05/11:** Aplicação funcional (cadastro + listagem)
- **12/11:** Testes concluídos
- **20/11:** Docs prontos para revisão
- **23/11:** Entrega final

---

## 5. Estrutura de Arquivos

```
projeto-integrador-2/
├── index.html          # Formulário de cadastro
├── listagem.html       # Tabela de clientes cadastrados
├── style.css           # Estilos compartilhados (mobile-first)
├── app.js              # Lógica compartilhada (storage, utils)
├── cadastro.js         # Lógica específica do cadastro
├── listagem.js         # Lógica específica da listagem
└── README.md           # Instruções de uso
```

---

## 6. Schema do localStorage

```javascript
// Chave: "clientesConfeitaria"
// Valor: Array de objetos
[
  {
    id: Date.now(),              // timestamp como ID único
    nome: "Maria Silva",
    telefone: "(11) 99999-9999",
    email: "maria@email.com",
    produto: "Bolo 2kg - Chocolate",
    dataEntrega: "2026-11-20",
    observacoes: "Sem glúten, cobertura branca",
    criadoEm: "2026-10-25T14:30:00.000Z"  // ISO string
  }
]
```

---

## 7. Checklist de Entregáveis (conforme enunciado)

| Entregável | Status |
|------------|--------|
| ✅ Aplicação funcional (cadastro + listagem) | |
| ✅ Apresentação em PDF | |
| ✅ Prints das principais telas | |
| ✅ Tabela de testes realizados | |
| ✅ Boas práticas documentadas | |
| ⭐ Vídeo demonstração (1-2 min) | |
| ⭐ Funcionalidades opcionais (editar/excluir/filtro) | |

---

## 8. Boas Práticas Mínimas para Documentar

1. **Organização:** Separação HTML/CSS/JS em arquivos distintos
2. **Validação:** Client-side (HTML5 + JS) com feedback visual
3. **Dados:** `try/catch` no localStorage, sanitização básica
4. **Git:** Commits semânticos (`feat:`, `fix:`, `docs:`), branch main protegida
5. **UX:** Loading no botão, toast de sucesso/erro, responsividade
6. **Acessibilidade:** Labels associados, contraste, navegação por teclado

---

## 9. Riscos e Mitigações

| Risco | Probabilidade |
|-------|---------------|
| Atraso na integração | Alta |
| Bugs no localStorage | Média |
| Docs de última hora | Alta |
| Falta de tempo para opcionais | Certa |

---

## 10. Próximos Passos (esta semana)

1. **Hoje:** Criar repo GitHub, adicionar todos como colaboradores
2. **Você:** Criar `app.js` com funções base (`salvar()`, `listar()`, `gerarId()`)
3. **Integrante 2:** Estruturar `index.html` + `style.css` (mobile-first)
4. **Integrante 3:** Criar `listagem.html` (estrutura da tabela vazia)
5. **Integrante 4:** Definir casos de teste (template na tabela de testes)
6. **Integrante 5:** Definir estrutura do PDF apresentação (slides)

---

## ✅ O que vou gerar no .docx

Um documento único com:

1. Capa (nome do projeto, integrantes, data)
2. Escopo (mínimo + opcionais)
3. Matriz RACI (quem faz o quê)
4. Cronograma detalhado com datas
5. Estrutura técnica (arquivos, schema, fluxos)
6. Checklist de entregáveis com coluna de status
7. Template de tabela de testes (pronto para preencher)
8. Lista de boas práticas para copiar no relatório
9. Roteiro do vídeo (1-2 min)