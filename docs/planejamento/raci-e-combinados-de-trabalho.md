# RACI e Combinados de Trabalho

> **Proposta para a equipe discutir e aprovar.** Evolui o `docs/requests/RACI_EXPLICACAO.md` (que continua como está, como referência) e se apoia na lista de tarefas de [cronograma-e-tarefas.md](cronograma-e-tarefas.md).
> Objetivo: todo mundo saber **o que é seu**, **quem aprova** e **o que acontece se algo travar**, sem depender de uma pessoa só.

## 1. O que muda em relação ao RACI anterior

| Problema do modelo anterior | Ajuste proposto |
| --- | --- |
| A letra **A** tinha dois sentidos: "Aprovador" no texto explicativo e "Apoia" no plano (§2). | **A = Accountable**: quem aprova e responde pela entrega. **Um único A por entrega.** "Apoiar" vira C (consultado) ou o campo "posso apoiar" do quadro pessoal. |
| O papel de Tech Lead aprovava e apoiava quase tudo, virando gargalo e ponto único de falha. | A aprovação é **distribuída por área** (seção 4). A coordenação técnica aprova código e merge, e só isso. |
| Os papéis dependiam de "sabe HTML/JS" e quatro de cinco estavam sem dono. | Papéis viram **funções de trabalho**, com tarefas pequenas e dono visível (seção 3). |
| A landing page não tinha dono. | Ganhou o papel **Landing page**. |
| Não dizia o que fazer quando alguém não entrega ou some. | Há **combinados explícitos** de aviso, reserva e escalonamento (seção 5). |

## 2. As letras

| Letra | Significa | Na prática |
| --- | --- | --- |
| **R** | Responsável | Faz a tarefa. Pode haver mais de uma pessoa. |
| **A** | Accountable | Confirma que está pronto e responde pela entrega. **Só uma por linha.** Pode ser a mesma pessoa que o R (A/R). |
| **C** | Consultado | Dá opinião **antes** de a decisão ser fechada. Resposta esperada em até 24 h. |
| **I** | Informado | Só precisa saber do resultado. Não precisa responder. |

Regras: toda linha tem pelo menos um R e exatamente um A. Quem é C não aprova. Quem é I não precisa responder.

## 3. Funções

Cinco pessoas, seis funções. A **Facilitação** é acumulada por alguém com outra função, de preferência QA ou Documentação, e pode girar por fase.

| Sigla | Função | O que faz | Limite da função |
| --- | --- | --- | --- |
| **CT** | Coordenação técnica (no plano: Tech Lead) | Repositório, estrutura de arquivos, `app.js` e `style.css` base, revisão de PRs e integração. | Não distribui tarefas sozinha e não decide escopo sozinha. Não faz o trabalho dos outros para "ganhar tempo". |
| **LP** | Landing page | HTML, CSS e conteúdo da vitrine: apresentação, galeria, informações de encomenda e contato. | Alinha com CL a navegação e o estilo compartilhado. |
| **CL** | Catálogo e gerenciamento | Formulário de produto, validações, armazenamento no `localStorage`, catálogo em cartões, edição e exclusão (área **CAT** do cronograma). | Segue as regras de validação definidas em grupo (T06). |
| **QA** | Testes | Casos de teste, execução, registro e reteste de bugs. | Registra bugs sem culpar ninguém: passos, print e resultado esperado. |
| **DOC** | Documentação | Prints, PDF, vídeo e texto de boas práticas. | Pede o material cedo, não na véspera. |
| **FAC** | Facilitação | Mantém o quadro de tarefas atualizado, convoca as reuniões, registra as decisões e faz a cobrança gentil. | Não manda: lembra, pergunta e anota. |

> **Quem ocupa cada função** é decidido pela equipe na reunião de alinhamento (até 08/11) e anotado no quadro pessoal de [cronograma-e-tarefas.md](cronograma-e-tarefas.md). O plano de ação atual indica a Fabiana na coordenação técnica; a equipe pode confirmar ou trocar, e as outras funções seguem em aberto.

## 4. RACI por entrega

Os IDs em parênteses são da lista de tarefas. Cada linha tem um único A.

| Entrega | CT | LP | CL | QA | DOC | FAC |
| --- | --- | --- | --- | --- | --- | --- |
| Decisões de escopo, conteúdo e regras de validação (T01, T05, T06) | R | R | R | C | C | **A** |
| Repositório, estrutura de arquivos e regras de PR (T02, T03) | **A/R** | C | C | I | I | I |
| Base compartilhada: `app.js`, `style.css`, feedback visual (T08, T09, T22) | **A/R** | C | C | I | I | I |
| Landing page: estrutura, seções e responsividade (T10, T11, T13, T14, T23) | C | **A/R** | I | C | C | I |
| Catálogo e gerenciamento de produtos (T12, T15–T18, T21, T24, T39) | C | C | **A/R** | C | I | I |
| Revisão de PRs e merge (T26) | **A/R** | R | R | I | I | I |
| Integração e navegação entre telas (T20) | **A/R** | C | C | I | I | I |
| Casos de teste, execução e reteste (T19, T27, T28, T30) | I | C | C | **A/R** | I | I |
| Correção de bugs (T29) | C | R | R | **A** | I | I |
| Prints e evidências (T31) | I | C | C | R | **A/R** | I |
| Boas práticas (T32) | C | C | C | I | **A/R** | I |
| PDF da apresentação (T33) | C | C | C | C | **A/R** | I |
| Vídeo de demonstração (T34) | I | C | C | C | **A/R** | I |
| `README.md` do repositório (T35) | **A/R** | C | C | I | C | I |
| Quadro de tarefas, status e lembretes | R | R | R | R | R | **A/R** |
| Revisão geral, pacote e entrega (T36–T38) | R | R | R | R | R | **A** |

Leitura: a coordenação técnica aprova **o que é código compartilhado e merge**. QA aprova que um bug está resolvido. DOC aprova o material de apresentação. FAC garante que o quadro está em dia e que o pacote está completo. Em "Correção de bugs", o R é quem desenvolveu a parte com defeito (LP ou CL). Em "Quadro de tarefas", cada pessoa atualiza as próprias tarefas.

## 5. Combinados de trabalho

### Distribuição de tarefas
1. Cada pessoa escolhe tarefas na lista até **08/11**.
2. O que sobrar sem dono é dividido na reunião de alinhamento, começando por quem tem menos tarefas.
3. Cada tarefa tem **um responsável e uma reserva** (quem cobre se o responsável não conseguir). Anote a reserva no quadro pessoal.
4. Cada tarefa deve caber em poucas horas. Se for maior, quebre em duas antes de assumir.

### Comunicação
- **Atualização diária em 3 linhas**, por mensagem, nos dias úteis: fiz, vou fazer, bloqueio. Pode ser assíncrona.
- **Duas reuniões curtas por semana**, com pauta e decisões anotadas: alinhamento e demo (13/11 e 20/11). As decisões vão para [03-pendencias-e-decisoes.md](../foundation/03-pendencias-e-decisoes.md).
- Silêncio de mais de **48 h** em tarefa com prazo próximo: a facilitação chama a pessoa no privado.

### Prazos e imprevistos
- Se não for cumprir um prazo, **avise com pelo menos 24 h de antecedência** e diga o que já está pronto. Avisar a tempo não é falha.
- Tarefa vencida e sem resposta por **24 h** passa para a reserva. O responsável original pode retomar se avisar e combinar.
- Se o problema de participação continuar, a equipe registra o histórico (quadro, commits, PRs) e leva a situação ao professor, como último recurso.

### Código e revisão
- PRs pequenos, uma ideia por PR, commits semânticos em português.
- A coordenação técnica revisa em até **24 h**. Passado o prazo, outra pessoa que programa pode aprovar, para a revisão não travar o grupo.
- Comentário de revisão fala do **código, não da pessoa**, e vem com sugestão sempre que possível.

### Decisões
- Decisão técnica: quem propõe explica o motivo, quem discorda responde em 24 h, e se não houver acordo a equipe vota. O resultado é registrado.
- **Escopo, prazo e conteúdo** são decididos em grupo, nunca por uma pessoa só.

### Tarefa pronta
Uma tarefa só vai para ✅ quando: está no repositório (ou no local combinado), quem é A viu, e quem depende dela foi avisado.

## 6. Como adotar

1. Na reunião de alinhamento, ler este documento e ajustar o que o grupo discordar.
2. Escolher quem ocupa cada função e quem acumula a facilitação.
3. Preencher responsáveis e reservas no quadro de [cronograma-e-tarefas.md](cronograma-e-tarefas.md).
4. Na primeira demo (13/11), rever o que funcionou e o que não funcionou, e ajustar.

## 7. Pontos em aberto

| # | Ponto | Quem decide |
| --- | --- | --- |
| R1 | Confirmar ou trocar quem ocupa a coordenação técnica. | Equipe |
| R2 | Quem acumula a facilitação, e se gira por fase. | Equipe |
| R3 | Canal da atualização diária (WhatsApp, Discord ou outro) e horário. | Equipe |
| R4 | Se o plano de ação (§2 e §11) será atualizado para refletir este modelo. | Equipe |
| R5 | Se existe uma regra da disciplina sobre avaliação individual da participação, que mudaria como o histórico é registrado. | Quem tiver o enunciado/professor |
