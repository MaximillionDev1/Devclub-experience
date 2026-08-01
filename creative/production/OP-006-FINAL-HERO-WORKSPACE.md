# OP-006 — Final Hero Workspace

## Estado

Preflight e upload concluídos. A única submissão autorizada foi rejeitada pelo Higgsfield antes da criação do job com `Requires basic plan or higher.` Nenhum crédito foi consumido.

## Asset

- ID: `HERO-FINAL-01`;
- ferramenta: Higgsfield;
- modelo selecionado: GPT Image 2 (`gpt_image_2`);
- status: rejected — plan requirement;
- máximo de gerações: 1;
- referência: imagem final de direção de arte anexada pelo usuário;
- saída prevista: `creative/outputs/images/HERO-FINAL-01-v01.png`;
- integração: proibida nesta ordem.

## Objetivo

Produzir uma única placa fotorealista 16:9 de um workspace noturno, íntimo e cinematográfico, com espaço negativo seguro para toda a interface posterior em React/DOM.

## Função narrativa

Materializar o instante anterior à decisão: uma mesa possível, vivida e silenciosa, em que o notebook funciona como passagem e não como símbolo de luxo ou produto.

## Preflight de capacidade

O catálogo Higgsfield confirmou para GPT Image 2:

- referência visual real no papel `image`;
- proporção 16:9;
- uma saída por `count: 1`;
- resoluções 1K, 2K e 4K;
- qualidade low, medium e high;
- tag de fotorealismo e alta resolução.

Parâmetros selecionados para a tentativa única:

```text
model: gpt_image_2
aspect_ratio: 16:9
count: 1
resolution: 2k
quality: high
medias: [{ role: image, value: <media_id da referência final> }]
```

O saldo observado no preflight foi 9,73 créditos, plano free, sem unlimited disponível. A estimativa confirmou custo de 7 créditos para 16:9, uma saída, 2K e qualidade high.

## Submissão

A referência `ChatGPT Image 31 de jul. de 2026, 21_50_45.png` foi enviada e confirmada pelo Higgsfield como mídia `a0c46096-4aa9-4067-929f-e142e6bc38b4`. A chamada única de geração usou o prompt v01 e todos os parâmetros aprovados, mas foi recusada antes da criação do job com `Requires basic plan or higher.` Não houve retry, variação ou troca automática de modelo.

## Prompt aprovado

`creative/production/prompts/HERO-FINAL/v01.md`

## Quality Gate previsto

Após uma geração válida, verificar diretamente contra a referência:

1. atmosfera cinematográfica premium;
2. espaço negativo para header e copy DOM;
3. laptop inteiro e geometria plausível;
4. tela limpa;
5. contraste frio à esquerda e quente à direita;
6. nenhum texto, UI, marca ou pessoa;
7. cada objeto exatamente uma vez;
8. ausência de aparência de banco de imagens;
9. viabilidade de crop responsivo;
10. ganho claro sobre a Hero CSS/DOM atual.

## Resultado

Nenhum asset gerado e nenhum crédito consumido; o saldo permaneceu em 9,73. Quality Gate visual não executável e integração não realizada. Conclusão: REVISION REQUIRED.
