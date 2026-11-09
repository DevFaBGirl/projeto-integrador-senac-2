# Visão Geral do Projeto

> Documento de fundação — atualizado em 09/11/2026 para refletir o código inicial em `site/`.
> Fontes: `docs/requests/` (enunciado PI2, plano de ação PI2, proposta PI1) e `site/`. Ver [03-pendencias-e-decisoes.md](03-pendencias-e-decisoes.md) para lacunas e divergências e [04-estado-do-codigo.md](04-estado-do-codigo.md) para a análise do código.

## 1. O que é o projeto

Aplicação web **"Minha Confeitaria Online"** para confeiteiras/os autônomas/os, desenvolvida pelo **Grupo 37** como **Projeto Integrador (PI) do SENAC — 2ª etapa**: "Desenvolvimento da Aplicação Web utilizando Boas Práticas de Desenvolvimento de Software".

É uma **landing page de divulgação** com um **catálogo de produtos gerenciável**:

1. **Vitrine pública (landing page):** apresenta a confeiteira, o catálogo de produtos, a galeria de trabalhos e as informações para encomenda, de forma profissional e responsiva.
2. **Gerenciamento do catálogo:** a confeiteira cadastra, lista, edita e exclui os produtos que aparecem na vitrine. Esta parte é o "cadastro e listagem" exigido pelo enunciado da 2ª etapa.

É uma aplicação **100% client-side** (HTML, CSS e JavaScript), sem backend e sem banco de dados externo. Os dados ficam no `localStorage` do navegador de quem usa.

> **Decisão adotada nesta atualização (DEC4, a confirmar com a equipe):** o catálogo de produtos é o "cadastro de informações" da 2ª etapa e **substitui** o sistema de cadastro de clientes/encomendas previsto no plano de ação de 22/10. O cadastro de clientes/encomendas passa a ser funcionalidade futura. Veja [03-pendencias-e-decisoes.md](03-pendencias-e-decisoes.md).

## 2. O que ele faz

### 2.1 Vitrine pública (landing page)

| Capacidade | Descrição | Situação no código |
| --- | --- | --- |
| **Apresentar a confeiteira** | Nome, descrição, proposta de trabalho e principais diferenciais. | Parcial: só título e uma frase. |
| **Catálogo de produtos** | Produtos com nome, descrição, imagem e preço inicial, vindos do gerenciamento. | Parcial: sem imagem. |
| **Galeria de trabalhos** | Imagens de trabalhos realizados, mostrando qualidade e variedade. | A fazer. |
| **Informações para encomenda** | Prazo mínimo, tipos de produtos disponíveis e como pedir orçamento. | A fazer. |
| **Facilitar o contato** | Contato, localização e horários para reduzir dúvidas de quem quer encomendar. | A fazer. |

### 2.2 Gerenciamento do catálogo

| Capacidade | Descrição | Situação no código |
| --- | --- | --- |
| **Cadastrar produto** | Formulário com nome, descrição, preço e imagem. | Feito, sem o campo de imagem. |
| **Listar produtos** | Exibe os produtos em cartões, com estado vazio ("Nenhum produto cadastrado ainda"). | Feito. |
| **Editar produto** | Carrega o produto no formulário e atualiza o registro. | Feito. |
| **Excluir produto** | Remove o produto, com confirmação. | Feito. |
| **Validar dados** | Campos obrigatórios, preço numérico positivo e limpeza de espaços. | Parcial: só `required`. |
| **Persistir localmente** | Salva em `localStorage` (chave `produtos_confeitaria`); sobrevive a recarregar a página. | Feito. |
| **Dar feedback** | Mensagens de sucesso/erro (toast) e validação junto ao campo. | A fazer. |

Funcionalidade **opcional** ainda não feita: pesquisar/filtrar produtos. Editar e excluir, que eram opcionais no enunciado, já existem.

## 3. Para quem

- **Público principal:** confeiteira/o autônoma/o que trabalha por encomenda, quer divulgar seus produtos, ampliar a presença digital e manter o catálogo atualizado sozinha/o.
- **Público secundário:** pessoas interessadas em contratar confeitaria para eventos ou encomendas (bolos, doces, kits de festa e produtos personalizados), que usam a vitrine.
- **Avaliadores do SENAC:** a aplicação também é um entregável acadêmico e será avaliada por funcionalidade, boas práticas, evidências e testes.

## 4. Por que existe

- **Problema (origem — PI1):** confeiteiras/os autônomas/os têm informações de produtos, contato e encomendas dispersas em redes sociais e aplicativos de mensagem, e dificuldade de se apresentar de forma profissional e organizada.
- **Objetivos (PI1):** facilitar a presença digital da confeiteira, divulgar produtos e captar clientes por uma landing page responsiva, e facilitar o acesso a recursos digitais e de marketing para aumentar a visibilidade.
- **Objetivo acadêmico (PI2):** entregar uma aplicação funcional, organizada e com interface simples e intuitiva, aplicando e documentando boas práticas.

## 5. Contexto e prazos

| Item | Valor |
| --- | --- |
| Disciplina/etapa | Projeto Integrador — 2ª etapa |
| Equipe | Grupo 37: Aram Juliano Soares Zap, Camila Alves da Silva, Fabiana Balduína Freitas Silva, Jonatas Sales dos Santos Vieira, Vitória Rodrigues |
| Prazo final | 23/11/2026 |
| Plano de ação criado em | 22/10/2026 |
| Código inicial | `site/`, enviado por Jonatas em 07/11/2026 |

## 6. Fora de escopo nesta rodada

- **Provedor de cloud / hospedagem / deploy:** não definido. Nenhum documento desta fundação assume provedor, serviço gerenciado ou infraestrutura de execução.
- Banco de dados externo, API/backend e autenticação (o enunciado dispensa banco externo).
- **Cadastro de clientes/encomendas** (nome, telefone, email, produto, data de entrega, observações), previsto no plano de 22/10: funcionalidade futura, se a equipe decidir mantê-lo.
