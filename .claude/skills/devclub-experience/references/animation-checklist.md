# Checklist de animação

## Propósito

- A animação conta algo?
- Ela guia o olhar?
- Ela revela mudança de estado?
- Ela melhora a compreensão?
- Ela pode ser removida sem perder informação essencial?

## Implementação

- Existe cleanup da timeline?
- ScrollTriggers são eliminados ao desmontar?
- Event listeners são removidos?
- O escopo do `useGSAP` está correto?
- Refs são estáveis?
- Não há timelines duplicadas em re-render?
- Não há variável, estado ou etapa sem uso?

## Performance

- Prioriza `transform` e `opacity`?
- Evita animar propriedades que causam layout?
- Não lê e escreve layout repetidamente no mesmo frame?
- Scrub é realmente necessário?
- Imagens e camadas têm tamanho adequado?
- Há layout shift?
- A animação mantém fluidez em dispositivo intermediário?

## Scroll

- A duração da seção é proporcional à narrativa?
- O pin termina no ponto correto?
- Não há salto ao entrar ou sair?
- Resize e mudança de orientação são tratados?
- O usuário continua no controle?
- O scroll suave não conflita com ScrollTrigger?

## Reduced motion

- `prefers-reduced-motion` é respeitado?
- Existe estado final estático?
- Conteúdo permanece disponível?
- Pinning excessivo é removido ou reduzido?
- Autoplay não é indispensável?

## Validação

- Testado com mouse?
- Testado com trackpad?
- Testado com teclado?
- Testado em viewport mobile?
- Testado com reduced motion?
- Testado após navegação ou hot reload?
