# Quality Gate

## Gate 1 — Coerência

- O notebook é o foco?
- A cena pertence ao mesmo universo do projeto?
- A marca é reconhecível por linguagem, não por cópia?

## Gate 2 — Realismo

- Perspectiva coerente?
- Teclado plausível?
- Materiais naturais?
- Objetos não duplicados?
- Luz física?

## Gate 3 — Narrativa

- A cena transmite possibilidade?
- A ausência de pessoa facilita identificação?
- A luz representa progresso?
- O asset melhora a experiência?

## Gate 4 — Técnica

- Proporção correta?
- Safe area?
- Resolução suficiente?
- Tamanho aceitável?
- Fallback possível?
- Mobile viável?

## Gate 5 — Aparência de IA

Rejeitar se houver:

- objeto deformado;
- teclado incoerente;
- excesso de brilho;
- textura plástica;
- composição genérica;
- detalhe sem função;
- visual de banco de imagem;
- estética de prompt.

## Gate final

Aprovar somente se a resposta for sim:

> Este asset aumenta claramente o impacto da página e vale o crédito gasto?

## Observação de projeto — HERO-02

`HERO-02-v01.png` recebeu aprovação condicional para testes de integração porque os desvios restantes — tela gerada e pequeno pseudo-branding no bezel — podem ser cobertos por camadas DOM/CSS sem reconstruir a cena. `HERO-02-v02.png` foi rejeitado por alterar composição, objetos e ambiente e introduzir uma pessoa. A aprovação condicional não autoriza mover texto essencial para a imagem nem dispensar nova validação visual após a integração.
