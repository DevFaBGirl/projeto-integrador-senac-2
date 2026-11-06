# Escopo e Requisitos

> Derivado de `docs/requests/Enunciado da 2º entrega do Projeto Integrador.pdf`, `docs/requests/PLANO_DE_ACAO_PI2.md` e `docs/requests/projeto-integrador_1_Senac.pdf`.
> Escopo confirmado: a aplicação **inclui a landing page** (PI1) **e** o sistema de cadastro/listagem (PI2).

## 1. Requisitos funcionais

### 1.1 Landing page (origem: proposta PI1)

| ID | Requisito | Objetivo |
| --- | --- | --- |
| RL01 | **Apresentação da confeiteira:** nome, descrição, proposta de trabalho e principais diferenciais. | Visitante conhece rapidamente a/o profissional e o negócio. |
| RL02 | **Catálogo de produtos:** principais produtos com nome, descrição, imagem e, quando aplicável, preço inicial. | Potencial cliente conhece as opções disponíveis. |
| RL03 | **Galeria de trabalhos:** imagens de trabalhos realizados. | Mostrar qualidade e variedade dos produtos. |
| RL04 | **Informações para encomenda:** prazo mínimo, tipos de produtos disponíveis e informações para solicitar orçamento. | Reduzir dúvidas iniciais e facilitar a solicitação. |
| RL05 | Página **responsiva** que facilite o contato com potenciais clientes. | Objetivo 2 da proposta PI1. |

### 1.2 Cadastro e consulta (origem: enunciado e plano PI2)

#### Obrigatórios (mínimo viável)

| ID | Requisito | Origem |
| --- | --- | --- |
| RF01 | Cadastrar informações por formulário: Nome, Telefone, Email, Produto, Data de Entrega, Observações. | Enunciado ("cadastro de informações"); Plano §1.1 |
| RF02 | Listar/consultar os registros cadastrados em tabela, ordenados por data (mais recente primeiro). | Enunciado ("listagem"); Plano §1.1 |
| RF03 | Armazenar os dados no `localStorage` do navegador (chave `clientesConfeitaria`). | Enunciado (sugestão); Plano §1.1 |
| RF04 | Validar campos obrigatórios e o formato de email, telefone e data. | Plano §1.1 |
| RF05 | Dar feedback visual (sucesso/erro) e exibir estado vazio quando não houver registros. | Plano §7.4 |
| RF06 | Permitir navegação entre as telas de cadastro e listagem. | Plano §3 (semana 2) |

#### Opcionais (documentar como "funcionalidades futuras" se não implementadas)

| ID | Requisito |
| --- | --- |
| RO01 | Alterar registro. |
| RO02 | Excluir registro. |
| RO03 | Pesquisar/filtrar por nome, produto ou data. |

## 2. Requisitos não funcionais

| ID | Requisito | Origem |
| --- | --- | --- |
| RNF01 | Tecnologias: HTML, CSS e JavaScript (sem banco de dados externo); Git/GitHub para controle de versão. | Enunciado; PI1 |
| RNF02 | Interface simples, intuitiva e responsiva (mobile-first; mobile, tablet, desktop). | Enunciado; Plano §7.5 |
| RNF03 | Acessibilidade básica: labels associados, contraste WCAG AA, navegação por teclado. | Plano §7.5 |
| RNF04 | Separação de responsabilidades (HTML estrutura / CSS apresentação / JS comportamento) e modularização por arquivo. | Plano §7.1 |
| RNF05 | Tratamento de erros em operações de `localStorage` (`try/catch`) e sanitização básica de entradas (trim, escape de HTML). | Plano §7.3 |
| RNF06 | Versionamento com Git/GitHub: commits semânticos em português, branches `feat/*`, PRs com revisão. | Plano §7.2 |

## 3. Modelo de dados (inicial)

Chave: `clientesConfeitaria` — valor: array de objetos.

| Campo | Tipo | Observação |
| --- | --- | --- |
| `id` | number | `Date.now()` como identificador único (com fallback). |
| `nome` | string | Obrigatório. |
| `telefone` | string | Formato brasileiro, ex.: `(11) 99999-9999`. |
| `email` | string | Validação de formato. |
| `produto` | string | Ex.: "Bolo 2kg - Chocolate". |
| `dataEntrega` | string | `YYYY-MM-DD`; validação de data futura prevista no plano. |
| `observacoes` | string | Opcional. |
| `criadoEm` | string | ISO 8601. |

> Evolução prevista: schema versionado (`clientesConfeitaria_v1`).

## 4. Estrutura técnica prevista

> **Provisória.** A estrutura abaixo vem do plano PI2, que não previa a landing page. Como a landing page é a vitrine pública, é provável que ela passe a ser a página inicial e o formulário ganhe outro arquivo. A decisão está em aberto (ver pendência L7 em [03-pendencias-e-decisoes.md](03-pendencias-e-decisoes.md)).

```
index.html      # Formulário de cadastro (no plano PI2; conflita com a landing page)
listagem.html   # Tabela de registros
style.css       # Estilos compartilhados (mobile-first)
app.js          # Storage, utilitários, helpers compartilhados
cadastro.js     # Lógica do cadastro
listagem.js     # Lógica da listagem
README.md       # Instruções de uso
prints/         # Evidências visuais
```

Fluxo: Formulário → validação (`cadastro.js`) → `salvarCliente()` (`app.js`) → `localStorage` → redireciona para `listagem.html` → `listarClientes()` → renderização da tabela.

## 5. Entregáveis da etapa

| # | Entregável | Fonte |
| --- | --- | --- |
| 1 | Aplicação funcional (landing page + cadastro + listagem) | Enunciado; PI1; confirmação da equipe |
| 2 | Apresentação em PDF | Enunciado |
| 3 | Prints das principais telas (plano: mínimo de 6) | Enunciado; Plano §5 |
| 4 | Tabela de testes realizados (plano: CT01–CT10) | Enunciado; Plano §6 |
| 5 | Descrição das boas práticas aplicadas | Enunciado |
| 6 | Vídeo de demonstração de 1–2 min (sugerido, opcional) | Enunciado |

## 6. Papéis (resumo)

Só o papel de **Tech Lead** está atribuído (Fabiana Balduína Freitas Silva). Frontend Cadastro, Frontend Listagem, QA/Testes e Documentação seguem sem responsável. Nenhum papel do plano cobre a landing page. O detalhamento está em `docs/requests/PLANO_DE_ACAO_PI2.md` §2; `RACI_EXPLICACAO.md` está marcado como desabilitado e não foi usado.
