# Escopo e Requisitos

> Atualizado em 09/11/2026. Derivado de `docs/requests/Enunciado da 2º entrega do Projeto Integrador.pdf`, `docs/requests/projeto-integrador_1_Senac.pdf`, `docs/requests/PLANO_DE_ACAO_PI2.md` e do código inicial em `site/`.
> Escopo adotado: **landing page + catálogo de produtos gerenciável** (DEC4, a confirmar com a equipe). O cadastro de clientes/encomendas do plano de 22/10 virou funcionalidade futura.

Situação: ✅ feito no código · 🟨 parcial · ⬜ a fazer. Análise detalhada em [04-estado-do-codigo.md](04-estado-do-codigo.md).

## 1. Requisitos funcionais

### 1.1 Vitrine pública — landing page (origem: proposta PI1)

| ID | Requisito | Objetivo | Situação |
| --- | --- | --- | --- |
| RL01 | **Apresentação da confeiteira:** nome, descrição, proposta de trabalho e principais diferenciais. | Visitante conhece rapidamente a/o profissional e o negócio. | 🟨 |
| RL02 | **Catálogo de produtos:** nome, descrição, imagem e, quando aplicável, preço inicial. | Potencial cliente conhece as opções disponíveis. | 🟨 (sem imagem) |
| RL03 | **Galeria de trabalhos:** imagens de trabalhos realizados. | Mostrar qualidade e variedade dos produtos. | ⬜ |
| RL04 | **Informações para encomenda:** prazo mínimo, tipos de produtos disponíveis e como solicitar orçamento. | Reduzir dúvidas iniciais e facilitar a solicitação. | ⬜ |
| RL05 | Página **responsiva** que facilite o contato com potenciais clientes. | Objetivo 2 da proposta PI1. | 🟨 (responsiva, sem contato) |

### 1.2 Gerenciamento do catálogo (origem: enunciado PI2 + código inicial)

#### Obrigatórios (mínimo viável do enunciado)

| ID | Requisito | Origem | Situação |
| --- | --- | --- | --- |
| RF01 | Cadastrar produto por formulário: nome, descrição, preço e imagem. | Enunciado ("cadastro de informações") | 🟨 (sem imagem) |
| RF02 | Listar os produtos cadastrados como catálogo, com estado vazio. | Enunciado ("listagem") | ✅ |
| RF03 | Armazenar no `localStorage` (chave `produtos_confeitaria`). | Enunciado (sugestão) | ✅ |
| RF04 | Validar campos obrigatórios, preço numérico positivo e limpar espaços (`trim`). | Boas práticas | 🟨 (só `required`) |
| RF05 | Dar feedback visual de sucesso/erro e confirmar a exclusão. | UX | 🟨 (tem confirmação e estado vazio, sem toast) |

#### Opcionais do enunciado

| ID | Requisito | Situação |
| --- | --- | --- |
| RO01 | Editar produto. | ✅ |
| RO02 | Excluir produto. | ✅ |
| RO03 | Pesquisar/filtrar produtos por nome. | ⬜ |

#### Funcionalidade futura (fora do escopo atual)

| ID | Requisito |
| --- | --- |
| RX01 | Cadastro e listagem de clientes/encomendas (nome, telefone, email, produto, data de entrega, observações), como no plano de 22/10. |

## 2. Requisitos não funcionais

| ID | Requisito | Origem |
| --- | --- | --- |
| RNF01 | Tecnologias: HTML, CSS e JavaScript (sem banco de dados externo); Git/GitHub para controle de versão. | Enunciado; PI1 |
| RNF02 | Interface simples, intuitiva e responsiva (mobile-first; mobile, tablet, desktop). | Enunciado; Plano §7.5 |
| RNF03 | Acessibilidade básica: `<label>` associado a cada campo, contraste WCAG AA, navegação por teclado, `alt` nas imagens. | Plano §7.5 |
| RNF04 | Separação de responsabilidades (HTML estrutura / CSS apresentação / JS comportamento), sem `onclick` embutido. | Plano §7.1 |
| RNF05 | Tratamento de erros em operações de `localStorage` (`try/catch`) e sanitização de entradas. | Plano §7.3 |
| RNF06 | Versionamento com Git/GitHub: commits semânticos em português, branches `feat/*`, PRs com revisão. | Plano §7.2 |
| RNF07 | **Segurança:** nunca inserir texto digitado pelo usuário com `innerHTML` sem escapar (evitar XSS). | Boas práticas; achado em [04-estado-do-codigo.md](04-estado-do-codigo.md) |

## 3. Modelo de dados

Chave: `produtos_confeitaria` — valor: array de objetos.

**Formato atual no código** (sem `id`, preço como texto):

```javascript
[{ nome: "Bolo de chocolate", descricao: "Recheio de brigadeiro", preco: "85.00" }]
```

**Formato proposto** (a confirmar):

| Campo | Tipo | Observação |
| --- | --- | --- |
| `id` | number | `Date.now()` com fallback. Substitui o índice do array como identificador. |
| `nome` | string | Obrigatório, com `trim`. |
| `descricao` | string | Obrigatório, com `trim`. |
| `preco` | number | Maior que zero; exibido como `R$ 0,00`. |
| `imagem` | string | Caminho relativo a um arquivo em `site/img/`. Evitar guardar imagem como `data:` no `localStorage`, que tem limite de cerca de 5 MB. |
| `criadoEm` | string | ISO 8601 (opcional). |

> Ao ler dados no formato atual, o código deve tolerá-los (gerar `id`, converter `preco`), para não perder o que já foi cadastrado.

## 4. Estrutura técnica

Estrutura atual, adotada provisoriamente (resolve a pendência L7):

```
site/
├── index.html    # Landing page + formulário e catálogo de produtos
├── script.js     # Lógica do catálogo (CRUD em localStorage)
├── style.css     # Estilos
└── img/          # (a criar) imagens de produtos e galeria
```

Fluxo atual: formulário → `submit` → grava em `produtos[]` → `localStorage.setItem("produtos_confeitaria")` → `renderizarProdutos()` → cartões no catálogo. Editar e excluir operam pelo índice do array.

Evolução prevista, se o `script.js` crescer: separar utilitários (leitura/escrita seguras, `escapeHtml`, `toast`) em `app.js` e deixar a lógica do catálogo em arquivo próprio. O plano de 22/10 previa `index.html`, `listagem.html`, `app.js`, `cadastro.js` e `listagem.js` para o cadastro de clientes; essa estrutura não se aplica mais.

## 5. Entregáveis da etapa

| # | Entregável | Fonte |
| --- | --- | --- |
| 1 | Aplicação funcional (landing page + catálogo gerenciável) | Enunciado; PI1; DEC4 |
| 2 | Apresentação em PDF | Enunciado |
| 3 | Prints das principais telas (plano: mínimo de 6) | Enunciado; Plano §5 |
| 4 | Tabela de testes realizados (casos a reescrever para o catálogo e a landing page) | Enunciado; Plano §6 |
| 5 | Descrição das boas práticas aplicadas | Enunciado |
| 6 | Vídeo de demonstração de 1–2 min (sugerido, opcional): cadastrar e editar um produto | Enunciado |

## 6. Papéis (resumo)

Só o papel de **Tech Lead / coordenação técnica** está indicado no plano (Fabiana Balduína Freitas Silva). As demais funções seguem em aberto. A proposta de funções, RACI por entrega e combinados de trabalho está em [raci-e-combinados-de-trabalho.md](../planejamento/raci-e-combinados-de-trabalho.md).
