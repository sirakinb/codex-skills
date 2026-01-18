# Codex Skills

This repo mirrors the Codex skills installed locally under `~/.codex/skills`. Each skill lives in its own folder and is documented by its `SKILL.md` file. Supporting scripts, references, and source code live alongside the instructions.

## How to read this repo

- `SKILL.md` is the canonical entry point for each skill.
- `scripts/` holds helper tools invoked by the skill.
- `references/` holds longer-form docs linked from `SKILL.md`.
- `.system/` contains system skills used to manage or create skills.

## Skills overview

| Skill | Description | Instructions |
| --- | --- | --- |
| build-feature | Autonomous task loop that picks ready tasks, implements them, updates progress.txt, commits, and repeats. | `build-feature/SKILL.md` |
| compound-engineering | Compound Engineering workflow for AI-assisted development. | `compound-engineering/SKILL.md` |
| dev-browser | Browser automation with persistent page state. | `dev-browser/SKILL.md` |
| pdf | PDF manipulation toolkit for extracting text and tables, creating new PDFs, merging/splitting documents, and handling forms. | `pdf/SKILL.md` |
| prd-generator | Generate a Product Requirements Document (PRD) for a new feature. | `prd-generator/SKILL.md` |
| ralph | Set up Ralph for autonomous feature development. | `ralph/SKILL.md` |
| skill-creator | Guide for creating effective skills. | `.system/skill-creator/SKILL.md` |
| skill-installer | Install Codex skills into `$CODEX_HOME/skills` from a curated list or a GitHub repo path. | `.system/skill-installer/SKILL.md` |

## Repo contents by skill

### build-feature

- `build-feature/SKILL.md`

### compound-engineering

- `compound-engineering/SKILL.md`

### dev-browser

- `dev-browser/SKILL.md`
- `dev-browser/package.json`
- `dev-browser/bun.lock`
- `dev-browser/server.sh`
- `dev-browser/tsconfig.json`
- `dev-browser/vitest.config.ts`
- `dev-browser/references/scraping.md`
- `dev-browser/scripts/start-server.ts`
- `dev-browser/scripts/start-relay.ts`
- `dev-browser/src/client.ts`
- `dev-browser/src/index.ts`
- `dev-browser/src/relay.ts`
- `dev-browser/src/types.ts`
- `dev-browser/src/snapshot/index.ts`
- `dev-browser/src/snapshot/browser-script.ts`
- `dev-browser/src/snapshot/inject.ts`
- `dev-browser/src/snapshot/__tests__/snapshot.test.ts`

### pdf

- `pdf/SKILL.md`

### prd-generator

- `prd-generator/SKILL.md`

### ralph

- `ralph/SKILL.md`

### .system/skill-creator

- `.system/skill-creator/SKILL.md`
- `.system/skill-creator/license.txt`
- `.system/skill-creator/scripts/init_skill.py`
- `.system/skill-creator/scripts/package_skill.py`
- `.system/skill-creator/scripts/quick_validate.py`

### .system/skill-installer

- `.system/skill-installer/SKILL.md`
- `.system/skill-installer/LICENSE.txt`
- `.system/skill-installer/scripts/github_utils.py`
- `.system/skill-installer/scripts/list-curated-skills.py`
- `.system/skill-installer/scripts/install-skill-from-github.py`

### .system markers

- `.system/.codex-system-skills.marker`
