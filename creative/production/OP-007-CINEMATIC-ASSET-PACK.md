# OP-007 — Cinematic Asset Pack

## Estado

Gate A autorizado. Somente `HERO-01 — The Silence` pode ser gerado nesta execução. Todos os demais assets permanecem condicionados aos Quality Gates e a nova autorização.

## Objetivo

Produzir um universo visual cinematográfico coerente para a DevClub Experience, em que cada asset tenha função narrativa e técnica definida. A imagem final de direção de arte é moodboard e referência de atmosfera, nunca fonte de UI ou texto.

## DNA visual obrigatório

Near-black, grafite, azul meia-noite, madeira natural escura, luz quente neutra contida, contraste suave, materiais realistas, reflexos controlados, espaço negativo e iluminação fisicamente plausível. Interface, marca, texto e interação permanecem no DOM.

## Roadmap máximo

### Pack 01 — Hero Cinematic Sequence

1. `HERO-01 — The Silence`: frame inicial, sem iluminação de tela; função: abertura.
2. `HERO-02 — The Awakening`: primeiro despertar azul; função: primeiro gesto de scroll.
3. `HERO-03 — The Signal`: reflexo azul plausível; função: progressão do terminal.
4. `HERO-04 — The Decision`: profundidade e relação frio/quente ampliadas; função: clímax.
5. `HERO-05 — The Threshold`: atenção converge à tela; função: ponte para Story Scroll.

### Pack 02 — Story Cinematic Plates

6. `STORY-01 — Fundamentos`: estudo silencioso; função: aprendizagem.
7. `STORY-02 — Prática`: workspace em atividade; função: experimentação.
8. `STORY-03 — Projetos`: construção real; função: confiança produtiva.
9. `STORY-04 — Transformação`: ambiente mais aberto; função: progresso sem símbolo literal de sucesso.

### Pack 03 — Detail Plates

10. `DETAIL-01`: detalhe de laptop/teclado; função: transição ou crop responsivo.
11. `DETAIL-02`: detalhe de mesa/caderno; função: materialidade.
12. `DETAIL-03`: detalhe de luz/ambiente; função: textura narrativa.

### Pack 04 — Environment Plates

13. `ENV-01`: textura ambiental fria; função: fundo tipográfico escuro.
14. `ENV-02`: transição quente/fria; função: continuidade entre cenas.

Quatorze é teto, não meta. Story, Detail e Environment não podem ser gerados antes da aprovação do Hero Pack ou sem necessidade comprovada.

## Gate A — HERO-01

- asset: `HERO-01 — The Silence`;
- função narrativa: o instante imediatamente anterior à decisão;
- local previsto: frame inicial da Hero, atrás de toda a interface DOM;
- referência primária: `ChatGPT Image 31 de jul. de 2026, 21_50_45.png`;
- prompt: `creative/production/prompts/HERO-01/final.md`;
- saída: `creative/outputs/images/HERO-01-v01.png`;
- proporção: 16:9;
- quantidade: exatamente 1;
- resolução preferida: 2K;
- integração: proibida antes do Quality Gate;
- retry ou variação automática: proibidos.

## Justificativa do asset

A referência fornecida contém UI e texto baked-in e não pode ser usada diretamente como plate. A Hero CSS/DOM atual garante fallback, mas não entrega o realismo material solicitado para a fase final. HERO-02-v01 está arquivado e foi rejeitado para produção por custo, warnings e desvios. Um novo plate limpo tem função distinta e comprovada.

## Estratégia de referência

HERO-01 usa a imagem anexada apenas como referência de mood, composição, luz e espaço negativo. Se aprovado, HERO-01 torna-se a referência primária de HERO-02. Cada frame aprovado substitui o moodboard como referência de continuidade de câmera, objetos, materiais e color science.

## Gates seguintes

- Gate B: HERO-02 autorizado explicitamente após aprovação de HERO-01. Uma única geração, sem retry automático.
- Gate C: HERO-03 somente após continuidade aprovada entre HERO-01 e HERO-02.
- Depois de HERO-03, testar primeiro se CSS/GSAP produz HERO-04 e HERO-05; gerar apenas se código não cumprir a função.

## Quality Gate HERO-01

Avaliar composição, safe areas DOM, geometria do laptop, teclado, dobradiça, trackpad, materiais, iluminação, balanço frio/quente, contagem e posição de objetos, tela limpa, ausência de texto/marca/pessoas/artefatos, qualidade cinematográfica, risco de stock photo e viabilidade de crop responsivo.

## Progresso

- [x] roadmap máximo definido;
- [x] função e local de HERO-01 definidos;
- [x] prompt final congelado;
- [x] capacidade e custo selecionados: GPT Image 2, 16:9, 2K, high, 7 créditos;
- [x] geração única submetida: `a7f2ff30-3c9d-4e80-aecf-6ed4665530d4`;
- [x] arquivo salvo em `creative/outputs/images/HERO-01-v01.png`;
- [x] Quality Gate concluído;
- [x] decisão final registrada: APPROVED.

## Resultado

HERO-01-v01 foi gerado em uma única tentativa com GPT Image 2, referência real, 16:9, 2K e qualidade high. O job `a7f2ff30-3c9d-4e80-aecf-6ed4665530d4` consumiu 7 créditos; saldo confirmado após a geração: 202,73.

O Gate A aprovou:

- atmosfera cinematográfica equivalente ao moodboard sem copiar sua interface;
- composição limpa, espaço negativo superior e direito e leitura editorial;
- laptop completo, tela escura e limpa, dobradiça, teclado e trackpad plausíveis;
- exatamente uma caneca, um mouse, um headphone e um caderno;
- materiais, sombras e transição frio/quente fisicamente críveis;
- ausência de texto, marca, UI, pessoas e artefatos bloqueadores;
- ganho visual objetivo sobre a Hero CSS/DOM atual.

Observação para uma futura integração: o PNG bruto tem 4.641.778 bytes e deverá ser otimizado; crops estreitos exigirão `object-position` específico ou fallback atual para preservar a composição. Nenhuma integração foi feita nesta ordem.

Decisão do Gate A: **APPROVED**. A autorização explícita do Gate B foi recebida posteriormente.

## Gate B — HERO-02

- autorização: concedida pelo usuário após aprovação do Gate A;
- asset: `HERO-02 — The Awakening`;
- função narrativa: primeira resposta física ao gesto do visitante;
- local previsto: primeiro estado de transformação da Hero durante o scroll;
- referência primária: `creative/outputs/images/HERO-01-v01.png`;
- prompt: `creative/production/prompts/HERO-02/final.md`;
- saída: `creative/outputs/images/HERO-02-AWAKENING-v01.png`;
- proporção: 16:9;
- quantidade: exatamente 1;
- resolução preferida: 2K;
- mudança permitida: somente iluminação azul extremamente sutil e limpa na tela, com spill físico mínimo;
- integração: proibida antes do Quality Gate;
- retry ou variação automática: proibidos.

O nome inclui `AWAKENING` porque `creative/outputs/images/HERO-02-v01.png` já pertence ao asset histórico HERO-02 e não pode ser sobrescrito.

### Quality Gate Gate B

Além do gate técnico de HERO-01, comparar diretamente as duas imagens e exigir continuidade de câmera, crop, laptop, mesa, objetos, materiais, exposição e color science. Rejeitar se a cena parecer regenerada, se objetos mudarem ou se a tela introduzir UI/texto/glow excessivo.

### Progresso Gate B

- [x] autorização explícita recebida;
- [x] função e local definidos;
- [x] prompt final congelado;
- [x] HERO-01 enviado como referência real pelo job aprovado;
- [x] capacidade e custo validados: GPT Image 2, 16:9, 2K, high, 7 créditos;
- [x] geração única submetida: `336193a9-bc78-4c56-ba58-9c267a33d787`;
- [x] output salvo em `creative/outputs/images/HERO-02-AWAKENING-v01.png`;
- [x] continuidade e Quality Gate avaliados;
- [x] decisão final registrada: APPROVED.

### Resultado Gate B

HERO-02-AWAKENING-v01 foi gerado em uma única tentativa com GPT Image 2, usando o job aprovado de HERO-01 como referência real. O job `336193a9-bc78-4c56-ba58-9c267a33d787` consumiu 7 créditos; saldo confirmado após a geração: 195,73.

O Gate B aprovou:

- continuidade de câmera, crop, perspectiva, laptop, mesa, parede e objetos;
- exatamente a mesma caneca, headphone, mouse e caderno em posições estáveis;
- tela limpa e vazia, sem texto, UI, marca, cursor ou sistema operacional;
- iluminação azul meia-noite perceptível, mas restrita ao primeiro despertar;
- spill físico discreto no bezel/teclado, sem bloom, neon ou transformação dramática;
- preservação das safe areas e da relação frio/quente;
- leitura clara de frame imediatamente posterior ao HERO-01.

O PNG bruto possui 5.072.540 bytes e permanece fora da aplicação. Decisão: **APPROVED**. Gate C/HERO-03 depende de nova autorização explícita.

## Gate C — HERO-03

- autorização: concedida explicitamente após aprovação do Gate B;
- asset: `HERO-03 — The Signal`;
- função narrativa: tornar perceptível que o ambiente começa a responder à progressão do terminal;
- local previsto: estado intermediário da Hero durante o scroll;
- referência primária: `creative/outputs/images/HERO-02-AWAKENING-v01.png`;
- prompt: `creative/production/prompts/HERO-03/final.md`;
- saída: `creative/outputs/images/HERO-03-SIGNAL-v01.png`;
- proporção: 16:9;
- quantidade: exatamente 1;
- resolução preferida: 2K;
- mudança permitida: um passo contido de intensidade azul na tela e reflexo físico discreto no teclado/trackpad/mesa;
- integração: proibida antes do Quality Gate;
- retry ou variação automática: proibidos.

### Quality Gate Gate C

Exigir continuidade integral com HERO-02 e progressão luminosa legível sem UI, texto, glow decorativo ou alteração da cena. Após a avaliação, decidir se HERO-04/HERO-05 podem ser derivados em CSS/GSAP a partir dos três plates aprovados.

### Progresso Gate C

- [x] autorização explícita recebida;
- [x] função e local definidos;
- [x] prompt final congelado;
- [x] HERO-02 enviado como referência real pelo job aprovado;
- [x] capacidade e custo validados: GPT Image 2, 16:9, 2K, high, 7 créditos;
- [x] geração única submetida: `ec1d8a6e-8c15-4484-8fa1-2ad08b0c939e`;
- [x] output salvo em `creative/outputs/images/HERO-03-SIGNAL-v01.png`;
- [x] continuidade e Quality Gate avaliados;
- [x] decisão sobre HERO-04/HERO-05 registrada: resolver em CSS/GSAP;
- [x] decisão final registrada: APPROVED.

### Resultado Gate C

HERO-03-SIGNAL-v01 foi gerado em uma única tentativa com GPT Image 2, usando o job aprovado de HERO-02 como referência real. O job `ec1d8a6e-8c15-4484-8fa1-2ad08b0c939e` consumiu 7 créditos; saldo confirmado após a geração: 188,73.

O Gate C aprovou:

- continuidade de câmera, composição, laptop, mesa, parede e objetos;
- tela inteiramente vazia, sem texto, UI, marca ou artefato;
- progressão luminosa clara em relação a HERO-02;
- reflexão azul fisicamente coerente no teclado, trackpad e grafite frontal;
- ausência de halo, bloom, neon, feixe ou linguagem gamer;
- preservação do ambiente quente à direita e das safe areas DOM;
- sequência 01→02→03 narrativa e tecnicamente legível.

O PNG bruto possui 5.167.727 bytes e permanece fora da aplicação.

### Decisão de crédito após Gate C

HERO-04 e HERO-05 não serão gerados. Os três plates aprovados já cobrem silêncio, despertar e sinal. A decisão/clímax pode ser obtida por crossfade e ajustes de gradiente/vinheta; o threshold pode reutilizar HERO-03 com o push-in, escurecimento periférico e portal GSAP/CSS já existentes. Isso preserva continuidade perfeita, reduz peso e economiza pelo menos 14 créditos.

Decisão: **APPROVED**. Produção de imagens do Hero Pack encerrada em três plates; qualquer integração exige ordem separada.
