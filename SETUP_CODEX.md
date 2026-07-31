# SETUP_CODEX.md

## Instalação

Copie o conteúdo deste kit para a raiz do projeto, no mesmo nível do `package.json`.

Estrutura esperada:

```text
AGENTS.md
PROJECT_BRAIN.md
PLANS.md
TASKS.md
.agents/
docs/
src/
package.json
```

## VS Code

1. Abra a raiz do projeto.
2. Abra a extensão Codex.
3. Inicie uma nova conversa depois de copiar os arquivos.
4. Peça para resumir as instruções carregadas.
5. Use `/skills` para verificar as skills.
6. Invoque a skill com `$devclub-experience`.

## Verificação

Primeiro prompt:

```text
Resuma as instruções ativas deste repositório e informe quais arquivos de orientação você carregou. Não altere arquivos.
```

Depois:

```text
Use /skills ou informe se a skill devclub-experience está disponível. Não altere arquivos.
```

## Iniciar auditoria

Cole o conteúdo de `PROMPT_INICIAL_CODEX.md`.

## Observação

O Codex lê `AGENTS.md` ao iniciar uma nova execução ou sessão. Se o arquivo foi criado depois que a conversa já estava aberta, inicie uma nova conversa.
