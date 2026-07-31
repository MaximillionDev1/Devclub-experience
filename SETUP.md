# Instalação do kit no projeto

## Opção 1 — Copiar a estrutura

Copie para a raiz do seu repositório:

- `.claude/`
- `docs/`
- `PROJECT_BRAIN.md`

Não substitua arquivos existentes sem revisar diferenças.

## Opção 2 — Criar manualmente no PowerShell

Execute na raiz do projeto:

```powershell
New-Item -ItemType Directory -Force .claude\skills\devclub-experience\references
New-Item -ItemType Directory -Force docs
```

Depois crie os arquivos com os conteúdos deste kit.

## Validar o Claude Code

Abra o terminal na raiz do repositório:

```bash
claude
```

Dentro do Claude Code:

```text
/context
```

Confirme que `.claude/CLAUDE.md` aparece entre os arquivos de memória carregados.

Depois digite:

```text
/devclub-experience
```

A skill deve aparecer no menu `/` e ser carregada.

## Caso a skill não apareça

1. Confirme o caminho exato:

```text
.claude/skills/devclub-experience/SKILL.md
```

2. Confirme que o nome é `SKILL.md` em letras maiúsculas.
3. Confirme que o frontmatter começa e termina com `---`.
4. Reinicie o Claude Code se a pasta `.claude/skills` foi criada depois que a sessão começou.
5. Execute `/context`.
6. Digite `/devclub-experience` diretamente.

## Primeira instrução recomendada

```text
Use /devclub-experience.

Antes de implementar, audite o repositório e confirme:

1. estrutura atual;
2. versões do package.json;
3. scripts disponíveis;
4. skills e integrações acessíveis;
5. conflitos entre o código existente e o Creative Brief;
6. riscos técnicos;
7. primeira etapa de implementação.

Não altere arquivos ainda. Atualize docs/CURRENT_STATE.md com o resultado da auditoria e apresente um plano objetivo.
```

## Observação

A documentação deve evoluir com o projeto. Não preserve texto inicial que deixe de representar o código real.
