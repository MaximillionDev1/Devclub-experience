# MS-04 — Light Direction

## Objetivo

Auditar a experiência completa como uma única jornada cinematográfica de luz, atmosfera e contraste, identificando somente inconsistências observáveis que reduzam qualidade percebida. Esta auditoria não autoriza redesign, implementação, novos assets, gradientes, fundos, motion, tipografia, espaçamento ou copy.

## Método e limites

A análise combinou:

- inspeção visual da Hero, Story Scroll, Formações, Mentalidade, Quem Somos, Students, Companies, Tutores, CTA final e Footer;
- revisão dos fundos, gradientes, bordas, sombras, superfícies e accents implementados;
- inspeção individual das seções em 1440×900 e 390×844;
- validação geométrica e de overflow em 1440×900, 1366×768, 1280×720, 1024×768, 768×1024, 430×932, 390×844, 360×640, 844×390 e 1280×600;
- comparação do estado animado observado com o fallback estático definido no DOM/CSS.

Os dez viewports foram recarregados individualmente após resize e não apresentaram overflow horizontal da página. Formações mantém uma trilha horizontal interna deliberada abaixo de 901 px. A instância do navegador reportou `prefers-reduced-motion: false` e não expôs emulação dessa preferência; portanto, o estado reduzido foi auditado pela estrutura e pelos estilos estáticos, mas sua validação visual efetivamente ativa continua pendente. Nenhum código de interface ou asset foi alterado.

## 1. Resumo do sistema de luz atual

O sistema é coeso e reconhecível. A Hero concentra o único gesto fotográfico amplo: frio azul à esquerda, calor ambiente à direita e um centro quase preto no notebook. Depois da travessia, a página reduz deliberadamente a intensidade e passa a trabalhar com near-black, graphite e midnight blue, usando luz como orientação, não como decoração.

A direção recorrente é:

- **azul frio:** ativação, interface, eixos, progresso e direção;
- **calor âmbar muito baixo:** presença humana, decisão, mentoria e fechamento;
- **branco editorial:** foco principal, sempre reservado a headings, statements ou conteúdo ativo;
- **verde:** confirmação pontual em estados ativos;
- **violeta:** possibilidade, restrita a sinais pequenos ou halos quase imperceptíveis;
- **near-black/graphite:** continuidade material entre capítulos.

As seções não parecem pertencer a produtos diferentes. Sem divisores, mudanças de composição e temperatura ainda seriam lidas como capítulos do mesmo universo. A Hero permanece o ápice visual; as seções institucionais não tentam repetir sua intensidade.

## 2. Consistência cinematográfica geral

**Pontuação: 94/100.**

Não há BLOCKER nem IMPORTANT. O sistema está maduro, a paleta aprovada permanece contida e a hierarquia luminosa quase sempre coloca primeiro heading, statement ou sistema significativo. Foi identificado apenas um refinamento POLISH, limitado à passagem Story Scroll → Formações.

## 3. Revisão por seção

| Seção | Fonte de luz / temperatura | Mais claro / mais escuro | Tom, foco e profundidade | Continuidade |
|---|---|---|---|---|
| Hero | Luz fria lateral esquerda, calor ambiente à direita e emissão discreta da tela; balanço cool–warm controlado. | Headline e pontos de interface / tela, vinheta e bordas da cena. | Silêncio, decisão e potencial. Notebook + headline formam o foco; mesa, objetos e parede criam profundidade realista. Contraste premium, sem glow excessivo. | Estabelece toda a gramática. Deve permanecer intocada. |
| Story Scroll | Banho azul central superior sobre midnight blue; temperatura fria e editorial. | Headings ativos / periferia e intervalos entre etapas. | Travessia e progressão. Heading e etapa ativa chegam antes do painel/linhas; profundidade vem do sticky e da longa queda tonal. | Herda corretamente o azul da Hero depois da passagem escura. |
| Formações | Radial azul central muito contido, emitido conceitualmente pelo ecossistema; frio neutro. | Heading e detalhe ativo / órbitas externas e fundo near-black. | Construção e possibilidade. O heading chega primeiro, depois o sistema significativo; círculos e nós dão profundidade sem holografia. | Coerente, mas a entrada reduz a atmosfera azul um pouco mais cedo que o necessário; ver LD-01. |
| Mindset | Luz fria discreta no topo direito e calor baixo à esquerda; levemente mais humana. | Heading/statement serifado / frame e periferia. | Pausa, reflexão e decisão. Texto é percebido antes do artefato; o frame conserva materialidade da Hero. | Natural: aquece sem romper a paleta. |
| Quem Somos | Azul lateral esquerdo sobre graphite, quase sem calor. | Statement serifado e H2 / sistema orbital e margens. | Institucional, seguro e acompanhado. A assimetria cria planos sem competir com o conteúdo. | Herda a sobriedade de Mindset e volta ao frio de direção de forma natural. |
| Students | Luz azul difusa central, superfícies graphite e bordas frias. | Heading e relato ativo / cards remotos e fundo. | Humanidade e prova. O relato central é o plano luminoso principal; cards laterais recuam por contraste. | Boa continuidade: aumenta presença humana sem introduzir calor literal ou nova paleta. |
| Companies | Radial azul à direita e calor quase residual à esquerda; frio dominante. | Heading/statement e marca ativa / campo, órbitas e marcas inativas. | Destino e contribuição. O editorial chega primeiro; o campo é significativo, mas subordinado. | Natural após Students; troca voz humana por direção profissional sem reset cromático. |
| Tutors | Azul linear à esquerda e halo violeta extremamente baixo à direita; cool-neutral com calor humano vindo da serif. | Heading e perfil ativo / círculo decorativo e fundo direito. | Mentoria e conversa. Perfil e headline guiam o olhar; o halo não se torna foco. | Boa continuidade; violeta permanece dentro do limite aprovado. |
| Final CTA | Azul concentrado na passagem e âmbar residual no quadrante inferior direito; frio com conclusão acolhedora. | Headline, ação primária e eixo da passagem / periferia near-black. | Decisão e abertura. CTA é inequivocamente o primeiro foco; doorway sustenta profundidade sem competir. | Cinemática e conclusiva; retoma a luz como crescimento sem repetir a Hero. |
| Footer | Fundo quase preto uniforme, sem fonte decorativa. | Texto institucional / fundo `#040506`. | Epílogo silencioso e objetivo. Profundidade é encerrada deliberadamente. | Toca o CTA sem gap ou mudança cromática abrupta; conclusão correta. |

## 4. Revisão das transições

| Transição | Diagnóstico | Continuidade do olhar |
|---|---|---|
| Hero → Story Scroll | **Cinemática e natural.** A passagem escura absorve a cena e entrega midnight blue sem parecer outro produto. | O olhar sai do notebook e reencontra o heading editorial. Não há reset. |
| Story Scroll → Formações | **Natural, com POLISH.** A cauda preserva o fundo, mas o residual azul se dissipa antes de o ecossistema assumir. | O heading mantém orientação; existe uma breve sensação de reinício tonal, não de desconexão. |
| Formações → Mindset | **Cinemática.** O ecossistema frio cede a um capítulo com calor humano discreto. | O foco migra do sistema ao statement sem competir com o fundo. |
| Mindset → Quem Somos | **Natural.** Graphite e azul permanecem; muda apenas o papel editorial. | O visitante continua pela linguagem serif/sans e pelo eixo visual. |
| Quem Somos → Students | **Natural.** O azul lateral se torna halo central nos relatos. | A evidência humana recebe foco sem reset de paleta. |
| Students → Companies | **Natural.** Superfícies graphite e bordas frias continuam. | Heading de Companies reassume foco antes do campo; não há artefato luminoso dominante. |
| Companies → Tutors | **Natural.** A mudança de azul + calor residual para azul + violeta residual é quase imperceptível. | O perfil humano mantém progressão narrativa e visual. |
| Tutors → Final CTA | **Cinemática.** A densidade diminui e a passagem concentra a luz. | O CTA ganha protagonismo imediato e o halo anterior não interfere. |
| Final CTA → Footer | **Conclusiva e natural.** Near-black desce para quase preto uniforme. | O olhar encerra na assinatura/footer sem um novo clímax. |

### POLISH — LD-01: residual de atmosfera se perde cedo entre Story Scroll e Formações

- **Evidência observável:** o Story Scroll usa midnight blue contínuo e uma luz radial superior; a cauda termina em `#07090d`. Formações começa no mesmo near-black, mas seu radial central é tão restrito que, na entrada, a transição parece primeiro apagar a atmosfera e só depois revelar o ecossistema.
- **Impacto:** baixo. O heading continua sendo percebido primeiro e não há mudança de produto, mas o visitante pode sentir uma breve reinicialização tonal entre a travessia editorial e o primeiro capítulo institucional.
- **Classificação:** POLISH.
- **Recomendação mínima:** se houver implementação futura, calibrar somente a sobreposição/posição dos gradientes já existentes nessa fronteira para que o residual azul alcance o primeiro terço de Formações. Não criar gradiente, cor, camada, glow ou espaçamento novo; não alterar Story Scroll, ecossistema ou motion.
- **Esforço estimado:** até 1 hora de CSS + matriz visual.

## 5. Avaliação do sistema de accents

- **Blue — aprovado.** É a cor dominante de interface, direção e ativação. Pontos, linhas, bordas ativas, terminal, ecossistemas e doorway compartilham a mesma família sem parecer RGB.
- **Warm neutral — aprovado.** Está presente na Hero, em Mindset, Companies e CTA com opacidade baixa. Comunica humanidade sem tingir superfícies inteiras.
- **Green — aprovado.** Aparece apenas como confirmação/estado em accents pontuais; não se torna identidade paralela.
- **Purple — aprovado.** É quase invisível: pequenos estados de possibilidade e o halo de Tutores ficam abaixo do conteúdo. Não há justificativa para reduzir ou expandir seu uso agora.

Nenhuma expansão de paleta é recomendada.

## 6. Revisão de contraste

- **Hero terminal:** legível como interface ambiental e sustentado por transcript no DOM. A tela permanece o plano mais escuro, como esperado; preservar.
- **Headline:** é o foco claro em todas as seções. Não foi observado fundo ou gradiente atravessando texto a ponto de reduzir leitura.
- **Microcopy:** permanece deliberadamente subordinada. Ajustes tipográficos e de legibilidade já aprovados no MS-02 não devem ser reabertos por esta auditoria.
- **Buttons:** CTA primário possui borda, preenchimento e texto suficientes para dominar as ações; secundário recua corretamente.
- **Companies:** marcas inativas são discretas, mas o heading e a marca ativa mantêm hierarquia. Linhas/órbitas não precisam ganhar contraste.
- **Tutors:** perfil ativo é legível e separado do fundo; círculo superior direito permanece decorativo. Não elevar bordas ou halo.
- **CTA:** não está escuro demais. O doorway é visível como passagem, enquanto a ação primária continua mais clara.
- **Footer:** baixo contraste é apropriado ao epílogo e ainda legível; não deve competir com o CTA.

Não foram observados low contrast, excesso de contraste, bordas desaparecendo ou superfícies se fundindo com impacto novo além do escopo já documentado em MS-02.

## 7. Observações responsivas

- A atmosfera se mantém nos dez viewports e não há crop de gradiente que produza mancha isolada ou iluminação sem origem.
- Em 768×1024 e nos três mobile portrait, os sistemas trocam complexidade espacial por fluxo direto sem perder a base near-black/azul.
- A trilha horizontal de Formações é um sistema de conteúdo deliberado, não overflow da página; sua luz ativa permanece contida no item selecionado.
- Em 844×390 e 1280×600, a densidade aumenta por baixa altura, mas headings e CTAs continuam mais claros que os efeitos de fundo.
- O CTA preserva atmosfera e hierarquia em portrait e landscape; não fica visualmente escuro.
- O Footer continua ligado ao CTA em todos os tamanhos, com transição `#05070a` → `#040506`.
- Não foi encontrado caso em que mobile transforme um accent em protagonista ou perca completamente a atmosfera.

## 8. Observações de performance

Não foi observada evidência que justifique otimização nesta etapa:

- os gradientes permanentes são poucos por seção, localizados e de baixa opacidade;
- não há blur pesado permanente nos capítulos institucionais;
- sombras concentram-se em superfícies relevantes e não cobrem a viewport inteira;
- a inspeção visual não revelou jank, flashing ou atraso de composição atribuível à luz;
- Hero e seus plates possuem estratégia de derivados/fallback documentada separadamente.

Não se recomenda remover camadas ou simplificar efeitos sem perfil de performance que demonstre ganho real.

## 9. Implementação mínima recomendada

O escopo recomendado é deliberadamente reduzido:

1. considerar somente LD-01 em uma futura etapa de implementação;
2. reutilizar exclusivamente os gradientes e cores existentes na fronteira Story Scroll → Formações;
3. comparar antes/depois nos dez viewports e em reduced motion ativo;
4. rejeitar a mudança se ela tornar o fundo perceptível antes do heading ou aumentar o brilho do ecossistema.

Nenhuma outra alteração de luz é necessária.

## 10. Elementos que devem permanecer intocados

- composição, plates, cool–warm split, vinheta, terminal, notebook, mesa e headline da Hero;
- passagem Hero → Story Scroll e fundo midnight blue do Story Scroll;
- ordem, motion, duração e espaçamento de todas as seções;
- radial central e órbitas de Formações;
- balanço azul/âmbar de Mindset;
- assimetria e sistema orbital de Quem Somos;
- halo central, profundidade e superfícies dos relatos;
- campo, linhas, órbitas e accents de Companies;
- halo violeta extremamente restrito, perfil e linha de conversa de Tutores;
- passagem, threshold, warm residual, CTA primário e hierarquia de ações do fechamento;
- fundo uniforme, contraste e contato direto do Footer;
- paleta atual, especialmente os limites de verde e violeta;
- bordas sutis e sombras existentes;
- tipografia, copy, assets, estrutura React, motion e reduced-motion fallback.

## 11. Recomendação final

A experiência já se comporta como uma única jornada cinematográfica. A variação de temperatura acompanha a narrativa — decisão, travessia, construção, humanidade, direção e fechamento — sem transformar capítulos em campanhas independentes. Heading, statement ou sistema significativo permanecem como primeiro foco; nenhum gradiente, borda, ornamento ou artefato luminoso assume protagonismo indevido.

O único refinamento detectado tem impacto baixo, não exige nova camada e não justifica reabrir decisões visuais aprovadas. Todo o restante deve permanecer intocado.

APPROVED WITH REDUCED SCOPE
