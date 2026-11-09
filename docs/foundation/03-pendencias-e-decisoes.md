# Pendências, Divergências e Decisões

> Atualizado em 09/11/2026. Registro do que a documentação de fundação **não** conseguiu fechar a partir das fontes. Nada abaixo foi decidido por inferência silenciosa.

## 1. Divergências entre fontes

| # | Divergência | Como foi tratado | Ação necessária |
| --- | --- | --- | --- |
| D1 | ✅ **Resolvida.** A proposta PI1 descreve a landing page "Minha Confeitaria Online"; o plano PI2 descreve um sistema de cadastro/listagem de clientes e encomendas. | **Decisão da equipe: o escopo inclui a landing page** (DEC3). | Nenhuma. |
| D2 | Grafia do sobrenome da integrante: "Vitória Rodrigue" (plano) × "Vitória Rodrigues" (PI1). | Usada a grafia do PI1 ("Rodrigues"). | Confirmar a grafia correta. |
| D3 | `RACI_EXPLICACAO.md` tinha sido desabilitado por comentário; o comentário foi removido. | Evoluído em [raci-e-combinados-de-trabalho.md](../planejamento/raci-e-combinados-de-trabalho.md). | Nenhuma. |
| D4 | 🆕 **O código inicial em `site/` cadastra produtos**, não clientes/encomendas como o plano de 22/10. O plano (`PLANO_DE_ACAO_PI2.md`, em `docs/requests/`) fica **desatualizado** em escopo, estrutura de arquivos, casos de teste CT01–CT10 e papéis "Frontend Cadastro/Listagem". | **DEC4:** o catálogo de produtos é o "cadastro de informações" do PI2 e substitui o cadastro de clientes (funcionalidade futura RX01). O plano original não foi alterado, por ser fonte. | Equipe confirmar a DEC4 (T01). Se preferir manter os dois cadastros, reverter RX01 para o escopo e acrescentar tarefas. |

## 2. Lacunas de informação

| # | Lacuna | Impacto |
| --- | --- | --- |
| L1 | Responsáveis por todas as funções, exceto a indicação da Fabiana na coordenação técnica, não definidos. | Entregáveis sem dono. |
| L2 | ✅ **Parcialmente resolvida.** O código inicial existe em `site/` (07/11). Falta confirmar se há trabalho fora do repositório. | Reavaliar o status quando a equipe confirmar. |
| L3 | Regras de validação do produto: tamanho máximo de nome/descrição, limite de preço, formato e tamanho da imagem. | Afeta RF04 e os casos de teste. |
| L4 | Se a imagem do produto será um arquivo em `site/img/` ou outra forma (URL externa). | Afeta RL02, RL03 e o modelo de dados. |
| L5 | Contatos e disponibilidade da equipe (plano §12 em branco). | Comunicação. |
| L6 | Forma de publicação/acesso da aplicação (arquivo local, página estática, etc.). | Ver restrição abaixo. |
| L7 | ✅ **Resolvida provisoriamente.** Estrutura adotada: `site/index.html`, `script.js`, `style.css`, com `site/img/` a criar. | Reavaliar se o `script.js` crescer. |
| L8 | **Onde fica o gerenciamento do catálogo.** Hoje o formulário está visível a qualquer visitante (achado C07). Opções: seção separada, página separada ou aviso de que é uma demonstração sem login (o enunciado dispensa banco e autenticação). | Muda navegação e a experiência de quem visita. |
| L9 | **Plano e cronograma.** O plano de 22/10 não cobre a landing page nem o catálogo. O cronograma novo está em [cronograma-e-tarefas.md](../planejamento/cronograma-e-tarefas.md), mas as datas de 06/11 a 08/11 já passaram sem confirmação. | Prazos revistos para 09/11 a 10/11 na fase de alinhamento. |
| L10 | **Conteúdo da landing page.** Faltam textos, imagens, preços iniciais, contato, localização e horários da confeiteira (ou a decisão de usar conteúdo fictício). | Bloqueia RL01, RL03 e RL04. |

## 3. Restrições desta rodada

- **Provedor de cloud não definido.** Hospedagem, deploy, CI/CD em nuvem e qualquer serviço gerenciado ficam para rodada posterior. A aplicação funciona sem infraestrutura de servidor (`localStorage`). O GitHub aparece apenas como controle de versão, não como definição de hospedagem.

## 4. Decisões já tomadas

| # | Decisão | Origem |
| --- | --- | --- |
| DEC1 | A rodada inicial produz documentação do projeto indicando **o que ele é e o que faz**. | Solicitação |
| DEC2 | Nenhum provedor de cloud é definido nesta rodada. | Solicitação |
| DEC3 | O escopo da aplicação inclui a **landing page** (PI1). | Equipe (resposta à pendência D1) |
| DEC4 | 🆕 O **catálogo de produtos gerenciável** (cadastro, listagem, edição e exclusão) é o "cadastro de informações" da 2ª etapa e substitui o cadastro de clientes/encomendas, que vira funcionalidade futura. **A confirmar com a equipe.** | Atualização de 09/11/2026, a partir do código inicial |

## 5. Decisões herdadas das fontes

| # | Decisão | Fonte |
| --- | --- | --- |
| H1 | Stack HTML + CSS + JavaScript, sem framework nem banco externo. | Enunciado / Plano |
| H2 | Persistência em `localStorage`. A chave agora é `produtos_confeitaria` (no plano era `clientesConfeitaria`). | Código |
| H3 | Coordenação técnica (Tech Lead) indicada no plano: Fabiana Balduína Freitas Silva. A equipe pode confirmar ou trocar. | Plano §2 |
| H4 | Prazo final 23/11/2026. | Plano |

## 6. Próximos passos sugeridos

1. Equipe confirmar a DEC4 e decidir o L8 (onde fica o gerenciamento).
2. Corrigir os achados C01 e C02 do código, que são rápidos e os mais visíveis ([04-estado-do-codigo.md](04-estado-do-codigo.md)).
3. Atribuir os responsáveis (L1) e definir a imagem dos produtos (L4).
4. Reunir o conteúdo da landing page (L10).
5. Só então derivar SPECs/roadmap de funcionalidades a partir do escopo confirmado.
