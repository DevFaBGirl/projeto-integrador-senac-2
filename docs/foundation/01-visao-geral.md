# Visão Geral do Projeto

> Documento de fundação — rodada inicial (MODE=FOUNDATION).
> Fontes: `docs/requests/` (enunciado PI2, plano de ação PI2, proposta PI1). Ver [03-pendencias-e-decisoes.md](03-pendencias-e-decisoes.md) para lacunas e divergências.

## 1. O que é o projeto

Aplicação web **"Minha Confeitaria Online"** para confeiteiras/os autônomas/os, desenvolvida pelo **Grupo 37** como **Projeto Integrador (PI) do SENAC — 2ª etapa**: "Desenvolvimento da Aplicação Web utilizando Boas Práticas de Desenvolvimento de Software".

Ela reúne duas partes (escopo confirmado pela equipe):

1. **Landing page de divulgação** (planejada na 1ª etapa): apresenta a confeiteira, o catálogo de produtos, a galeria de trabalhos e as informações para encomenda, de forma profissional e responsiva.
2. **Sistema de cadastro e consulta de clientes/encomendas** (plano da 2ª etapa): formulário de cadastro e listagem dos registros.

É uma aplicação **100% client-side** (HTML, CSS e JavaScript), sem backend e sem banco de dados externo. Os dados cadastrados ficam no `localStorage` do navegador de quem usa.

## 2. O que ele faz

### 2.1 Landing page

| Capacidade | Descrição |
| --- | --- |
| **Apresentar a confeiteira** | Nome, descrição, proposta de trabalho e principais diferenciais do negócio. |
| **Catálogo de produtos** | Principais produtos com nome, descrição, imagem e, quando aplicável, preço inicial. |
| **Galeria de trabalhos** | Imagens de trabalhos realizados, mostrando qualidade e variedade. |
| **Informações para encomenda** | Prazo mínimo, tipos de produtos disponíveis e o que é preciso para solicitar um orçamento. |
| **Facilitar o contato** | Reunir contato, localização e horários para reduzir dúvidas iniciais de quem quer encomendar. |

### 2.2 Cadastro e consulta de clientes/encomendas

| Capacidade | Descrição |
| --- | --- |
| **Cadastrar encomenda/cliente** | Formulário com Nome, Telefone, Email, Produto, Data de Entrega e Observações. |
| **Validar dados** | Campos obrigatórios e formato de email, telefone e data. |
| **Listar/consultar registros** | Tabela com todos os registros salvos, ordenados por data (mais recente primeiro). |
| **Persistir localmente** | Salva em `localStorage` (chave `clientesConfeitaria`); os dados sobrevivem a recarregar a página. |
| **Dar feedback ao usuário** | Mensagens de sucesso/erro (toast), validação junto ao campo e estado vazio ("Nenhum cadastro"). |

Funcionalidades **opcionais** (documentadas, não priorizadas): editar registro, excluir registro e filtrar/pesquisar por nome, produto ou data.

## 3. Para quem

- **Público principal:** confeiteira/o autônoma/o que trabalha por encomenda e quer divulgar seus produtos, ampliar a presença digital e organizar clientes e pedidos em um só lugar (hoje costumam ficar dispersos em redes sociais e aplicativos de mensagem).
- **Público secundário:** pessoas interessadas em contratar confeitaria para eventos ou encomendas (bolos, doces, kits de festa e produtos personalizados), que usam a landing page.
- **Avaliadores do SENAC:** a aplicação também é um entregável acadêmico e será avaliada por funcionalidade, boas práticas, evidências e testes.

## 4. Por que existe

- **Problema (origem — PI1):** confeiteiras/os autônomas/os têm informações de produtos, contato e encomendas dispersas e dificuldade de se apresentar de forma profissional e organizada.
- **Objetivos (PI1):** facilitar a presença digital da confeiteira, divulgar produtos e captar clientes por uma landing page responsiva, e facilitar o acesso a recursos digitais e de marketing para aumentar a visibilidade.
- **Objetivo acadêmico (PI2):** entregar uma aplicação funcional, organizada e com interface simples e intuitiva, aplicando e documentando boas práticas.

## 5. Contexto e prazos

| Item | Valor |
| --- | --- |
| Disciplina/etapa | Projeto Integrador — 2ª etapa |
| Equipe | Grupo 37: Aram Juliano Soares Zap, Camila Alves da Silva, Fabiana Balduína Freitas Silva, Jonatas Sales dos Santos Vieira, Vitória Rodrigues |
| Prazo final | 23/11/2026 |
| Plano de ação criado em | 22/10/2026 |

## 6. Fora de escopo nesta rodada

- **Provedor de cloud / hospedagem / deploy:** não definido. Nenhum documento desta fundação assume provedor, serviço gerenciado ou infraestrutura de execução.
- Banco de dados externo, API/backend e autenticação (o enunciado dispensa banco externo).
- Implementação de código: esta rodada produz apenas documentação.
