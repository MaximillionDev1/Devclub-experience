# ExecPlan 019 — Institutional Accuracy

## Objetivo

Alinhar a redação institucional de Quem Somos, Empresas e ClubJobs ao posicionamento público atual do DevClub, sem redesenho ou alteração de comportamento da aplicação.

## Escopo

- substituir dados conceituais de empresas por nomes apresentados em fonte oficial;
- ajustar minimamente a descrição de Quem Somos;
- contextualizar ClubJobs como parte do ecossistema de oportunidades;
- atualizar somente a documentação afetada pelas mudanças factuais;
- validar lint, tipos, build e integridade do diff.

## Fora de escopo

- CSS, layout, espaçamento, tipografia e responsividade;
- Hero, Story Scroll, GSAP e animações;
- estrutura de componentes;
- assets, imagens e dependências.

## Fontes de verdade

- `https://devclub.com.br/`
- `https://devclub.com.br/sobre`
- `https://vagas.devclub.com.br/`
- `docs/CONTENT-SOURCES.md`

## Etapas

1. [x] Revisar fontes institucionais públicas.
2. [x] Mapear afirmações factuais afetadas no código e na documentação.
3. [x] Aplicar substituições textuais e de dados sem alterar a interface.
4. [x] Executar lint, typecheck, build e `git diff --check`.
5. [x] Conferir o diff final contra o escopo proibido.

## Resultado

Lint, typecheck, build de produção e `git diff --check` foram aprovados. O diff do MS-05 contém somente substituições de texto, dados tipados e documentação; nenhum arquivo de CSS, Hero, Story Scroll, GSAP, asset ou dependência foi alterado.

## Critérios de aceite

- oito empresas vêm da apresentação institucional pública do DevClub;
- nenhuma frase sugere parceria, contratação ou garantia;
- Quem Somos cobre prática, projetos, comunidade, mentoria, tecnologia e mercado;
- ClubJobs é descrito como parte do ecossistema de oportunidades;
- nenhuma alteração de CSS, layout, animação, Hero ou Story Scroll;
- todos os gates solicitados aprovados.

## Riscos e mitigação

- **Risco:** associar empresas ao projeto. **Mitigação:** usar redação neutra e aviso explícito de ausência de vínculo.
- **Risco:** alterar a composição por novos comprimentos de texto. **Mitigação:** mudanças mínimas e preservação integral de estilos e estrutura.
- **Risco:** tratar classificações editoriais como identidade oficial. **Mitigação:** documentar que setores, iniciais e formas pertencem apenas à interface conceitual.
