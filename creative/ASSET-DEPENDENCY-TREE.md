# Asset Dependency Tree

```text
Creative Bible
└── HERO-02 Base Image
    ├── HERO-01 Hero Video
    ├── HERO-03 Transformed Image
    ├── FX-01 Screen Reflection
    └── FX-02 Ambient Texture
```

## Ordem de produção

1. HERO-02.
2. Revisar e aprovar.
3. HERO-01 usando HERO-02 como referência.
4. Integrar Hero.
5. Avaliar necessidade real de HERO-03.
6. Avaliar necessidade real de FX-01 e FX-02.

## Regra

Se HERO-02 não for aprovado, nenhum dependente pode ser produzido.
