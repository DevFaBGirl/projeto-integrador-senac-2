# Minha Confeitaria Online — Grupo 37

Landing page de divulgação com catálogo de produtos gerenciável para confeiteiras/os autônomas/os.
Projeto Integrador SENAC, 2ª etapa: *Desenvolvimento da Aplicação Web utilizando Boas Práticas de Desenvolvimento de Software*.

**Acesse e teste a aplicação:** https://projeto-integrador-senac-2.vercel.app/

A aplicação é 100% client-side (HTML, CSS e JavaScript), sem backend e sem banco de dados externo. Os produtos ficam no `localStorage` do navegador.

## Equipe

Grupo 37, participantes do projeto:

- Camila Alves da Silva
- Fabiana Balduína Freitas Silva · Tech Lead
- Jonatas Sales dos Santos Vieira
- Vitória Rodrigues

## Como executar

Dê dois cliques em `index.html` (não precisa de servidor). Se preferir um servidor local, rode na pasta do projeto:

```
python -m http.server 8000
```

e acesse `http://localhost:8000`.

Na primeira visita, o catálogo vem com 4 produtos de exemplo. Para voltar a esse estado, limpe os dados do site no navegador (`localStorage`).

## Estrutura

```
index.html   # Landing page, catálogo, formulário de produto e de orçamento
style.css    # Estilos (visual de "moldura de navegador" com abas como menu)
script.js    # CRUD do catálogo, busca, orçamento por WhatsApp e abas
img/         # Ilustrações da página
docs/        # Requisitos, planejamento, cronograma, registro de andamento e fontes
```

## Requisitos atendidos

### Landing page

| ID | Requisito | Onde está |
| --- | --- | --- |
| RL01 | Apresentação da confeiteira (nome, descrição, proposta e diferenciais) | Seção **Sobre** |
| RL02 | Catálogo com nome, descrição, imagem e preço | Seção **Catálogo** |
| RL03 | Galeria de trabalhos | Seção **Galeria** |
| RL04 | Informações para encomenda (prazo, produtos, como pedir orçamento) | Seção **Encomenda**, com formulário que abre o WhatsApp |
| RL05 | Página responsiva que facilita o contato | Seção **Contato**, orçamento por WhatsApp e layout responsivo |

### Gerenciamento do catálogo

| ID | Requisito | Situação |
| --- | --- | --- |
| RF01 | Cadastrar produto (nome, descrição, preço e imagem) | Feito |
| RF02 | Listar produtos, com estado vazio | Feito |
| RF03 | Persistir no `localStorage` (`produtos_confeitaria`) | Feito |
| RF04 | Validar campos, preço maior que zero e `trim` | Feito |
| RF05 | Feedback visual (mensagens de sucesso/erro) e confirmação de exclusão | Feito |
| RO01 | Editar produto | Feito |
| RO02 | Excluir produto | Feito |
| RO03 | Pesquisar produtos por nome (sem acento e sem diferenciar maiúsculas) | Feito |

## Boas práticas aplicadas

- **Segurança:** textos digitados são inseridos com `textContent` (nunca `innerHTML`), evitando XSS.
- **Dados:** leitura e escrita do `localStorage` com `try/catch`; cada produto tem `id` próprio; dados inválidos ou corrompidos não quebram a página. A imagem enviada é reduzida (480 px, JPEG) antes de salvar, para respeitar o limite do armazenamento.
- **Separação de responsabilidades:** HTML (estrutura), CSS (apresentação) e JS (comportamento), com delegação de eventos em vez de `onclick` no HTML.
- **Acessibilidade:** `<label>` em todos os campos, mensagens de erro associadas aos campos (`role="alert"`), foco visível, `alt` nas imagens, avisos com `aria-live` e respeito a `prefers-reduced-motion`.
- **Responsividade:** layout adaptado para celular, tablet e desktop.
- **Versionamento:** Git/GitHub, com branches por tipo de mudança (`fix/*`, `feat/*`) e commits semânticos em português.

## Dados fictícios e imagens

O nome da confeiteira, os textos, os preços, o WhatsApp, o Instagram e o endereço são de exemplo, criados para fins acadêmicos. Para personalizar:

- **Textos:** `index.html` (seções Sobre, Encomenda e Contato).
- **WhatsApp:** constante `WHATSAPP` no topo de `script.js`.
- **Imagens:** substitua os arquivos de `img/`, mantendo o mesmo nome.

## Documentação

Requisitos, pendências, cronograma de tarefas e o registro de andamento estão em [`docs/`](docs/README.md).

## Entrega

Os arquivos da entrega estão em [`docs/entrega/`](docs/entrega/):

- `apresentacao.pdf`: apresentação, gerada com `node docs/entrega/gerar-apresentacao.js`. Termina com o link da aplicação.
- `tabela-de-testes.md`: casos de teste, resultados e bugs corrigidos.
- `roteiro-do-video.md`: roteiro do vídeo de demonstração.
- `img/`: prints das telas usados na apresentação.
