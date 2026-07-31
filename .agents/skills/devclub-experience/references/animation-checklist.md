# Animation Checklist

## Propósito

- A animação revela uma mudança?
- Guia o olhar?
- Ajuda a contar a história?
- Pode ser removida sem perder informação essencial?

## Implementação

- `useGSAP`?
- Escopo?
- Cleanup?
- Refs estáveis?
- Sem timeline duplicada?
- Sem state por frame?
- Sem ScrollTrigger órfão?

## Performance

- `transform` e `opacity`?
- Sem layout thrashing?
- Sem blur pesado?
- Mobile simplificado?
- Resize validado?

## Acessibilidade

- Reduced motion?
- Conteúdo disponível sem animação?
- Pinning não bloqueia?
- Teclado continua funcional?
