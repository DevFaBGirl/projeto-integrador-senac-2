# Pendências, Divergências e Decisões

> Registro do que a documentação de fundação **não** conseguiu fechar a partir das fontes. Nada abaixo foi decidido por inferência silenciosa.

## 1. Divergências entre fontes

| # | Divergência | Como foi tratado nesta fundação | Ação necessária |
| --- | --- | --- | --- |
| D1 | ✅ **Resolvida.** A proposta PI1 descreve a landing page "Minha Confeitaria Online"; o plano e o enunciado PI2 descrevem um sistema de cadastro/listagem. | **Decisão da equipe: o escopo inclui a landing page e o sistema de cadastro/listagem.** A visão geral e os requisitos cobrem as duas partes. | Nenhuma. Os efeitos no plano estão em L7–L9. |
| D2 | Grafia do sobrenome da integrante: "Vitória Rodrigue" (plano) × "Vitória Rodrigues" (PI1). | Usada a grafia do PI1 ("Rodrigues"). | Confirmar a grafia correta. |
| D3 | `RACI_EXPLICACAO.md` está comentado e marcado "desabilitado — não utilizar". | Não usado como fonte. | Nenhuma. |

## 2. Lacunas de informação

| # | Lacuna | Impacto |
| --- | --- | --- |
| L1 | Responsáveis por Frontend Cadastro, Frontend Listagem, QA/Testes e Documentação não definidos. | Entregáveis sem dono. |
| L2 | Status atual do desenvolvimento desconhecido. O plano previa "aplicação completa" até 05/11/2026 e a fundação foi feita em 06/11/2026; não há código no repositório. | Não se sabe se o cronograma está em dia. |
| L3 | Regra exata de validação de telefone e de "data futura" (hoje, passado, hoje inclusive?). | Afeta casos de teste CT04/CT05. |
| L4 | Campos obrigatórios vs. opcionais: só Nome está explícito (CT02); `observacoes` aparenta ser opcional. | Afeta RF04. |
| L5 | Contatos e disponibilidade da equipe (plano §12 em branco). | Comunicação. |
| L6 | Forma de publicação/acesso da aplicação (arquivo local, página estática, etc.). | Ver restrição abaixo. |
| L7 | **Estrutura de arquivos.** O plano usa `index.html` para o formulário de cadastro, mas a landing page normalmente é a página inicial. | Reorganizar a estrutura técnica antes de implementar. |
| L8 | **Relação entre as duas partes.** Não está definido se a landing page só divulga e leva ao formulário (por exemplo, como solicitação de orçamento) ou se o cadastro/listagem é uma área interna da confeiteira. | Muda a navegação, a persona de cada tela e quem vê a listagem. |
| L9 | **Plano e cronograma sem landing page.** O plano PI2 (4 semanas) não tem tarefas, papéis, testes (CT01–CT10), prints nem roteiro de vídeo para a landing page. O PI1 previa 6 semanas. | Cronograma e entregáveis precisam ser revistos com o prazo de 23/11/2026. |
| L10 | **Conteúdo da landing page.** Faltam textos, imagens, preços iniciais, contato, localização e horários da confeiteira (ou se serão fictícios). | Bloqueia a implementação de RL01–RL04. |

## 3. Restrições desta rodada

- **Provedor de cloud não definido.** Hospedagem, deploy, CI/CD em nuvem e qualquer serviço gerenciado ficam para rodada posterior. A aplicação descrita funciona sem infraestrutura de servidor (localStorage). O GitHub aparece apenas como controle de versão, não como definição de hospedagem.

## 4. Decisões já tomadas (fornecidas na solicitação)

| # | Decisão |
| --- | --- |
| DEC1 | A rodada inicial produz documentação do projeto indicando **o que ele é e o que faz**. |
| DEC2 | Nenhum provedor de cloud é definido nesta rodada. |
| DEC3 | O escopo da aplicação inclui a **landing page** (PI1) e o **sistema de cadastro/listagem** (PI2). |

## 5. Decisões herdadas das fontes (a confirmar quando relevante)

| # | Decisão | Fonte |
| --- | --- | --- |
| H1 | Stack HTML + CSS + JavaScript, sem framework nem banco externo. | Enunciado / Plano |
| H2 | Persistência em `localStorage`, chave `clientesConfeitaria`. | Plano §4.2 |
| H3 | Tech Lead: Fabiana Balduína Freitas Silva. | Plano §2 |
| H4 | Prazo final 23/11/2026. | Plano |

## 6. Próximos passos sugeridos

1. Definir a relação entre landing page e cadastro (L8) e a estrutura de arquivos (L7).
2. Revisar o plano e o cronograma incluindo a landing page (L9) e atribuir papéis (L1).
3. Reunir o conteúdo da landing page (L10).
4. Confirmar o status atual (L2) e reajustar o cronograma se necessário.
5. Só então derivar SPECs/roadmap de funcionalidades a partir do escopo confirmado.
