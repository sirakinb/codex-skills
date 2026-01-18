---
name: prd-generator
description: "Generate a Product Requirements Document (PRD) for a new feature. Use when planning a feature, starting a new project, or asked to create a PRD. Triggers include: create a prd, write prd for, plan this feature, requirements for, spec out."
---

# PRD Generator

## Overview

Create clear, implementation-ready Product Requirements Documents with structured stories, acceptance criteria, and scope boundaries.

## The Job

1. Receive a feature description from the user.
2. Ask 3-5 essential clarifying questions with lettered options.
3. Generate a structured PRD based on the answers.
4. Save to `tasks/prd-[feature-name].md`.

Do NOT start implementing. Only generate the PRD.

## Step 1: Clarifying Questions

Ask only critical questions where the initial prompt is ambiguous. Focus on:

- Problem/goal: what problem does this solve?
- Core functionality: what are the key actions?
- Scope/boundaries: what should it NOT do?
- Success criteria: how do we know it is done?

Format questions like this:

```
1. What is the primary goal of this feature?
   A. Improve user onboarding experience
   B. Increase user retention
   C. Reduce support burden
   D. Other: [please specify]

2. Who is the target user?
   A. New users only
   B. Existing users only
   C. All users
   D. Admin users only

3. What is the scope?
   A. Minimal viable version
   B. Full-featured implementation
   C. Just the backend/API
   D. Just the UI
```

This lets users respond with "1A, 2C, 3B" for quick iteration.

## Step 2: PRD Structure

Generate the PRD with these sections:

1. Introduction/Overview
2. Goals
3. User Stories
4. Functional Requirements
5. Non-Goals (Out of Scope)
6. Design Considerations (optional)
7. Technical Considerations (optional)
8. Success Metrics
9. Open Questions

### User story format

Each story must be small enough to implement in one focused session.

```
### US-001: [Title]
**Description:** As a [user], I want [feature] so that [benefit].

**Acceptance Criteria:**
- [ ] Specific verifiable criterion
- [ ] Another criterion
- [ ] Typecheck/lint passes
- [ ] **[UI stories only]** Verify in browser using dev-browser skill
```

Acceptance criteria must be verifiable. Avoid vague items like "works correctly."

### Functional requirements

Number each requirement. Example:

- FR-1: The system must allow users to...
- FR-2: When a user clicks X, the system must...

## Writing for Junior Developers

Be explicit and unambiguous. Avoid jargon or explain it. Provide enough detail to understand purpose and core logic. Use concrete examples when helpful.

## Output

- Format: Markdown (`.md`)
- Location: `tasks/`
- Filename: `prd-[feature-name].md` (kebab-case)

## Example (abbreviated)

```markdown
# PRD: Task Priority System

## Introduction
Add priority levels to tasks so users can focus on what matters most.

## Goals
- Allow assigning priority (high/medium/low) to any task
- Enable filtering by priority

## User Stories

### US-001: Add priority field to database
**Description:** As a developer, I want to store task priority so it persists across sessions.

**Acceptance Criteria:**
- [ ] Add priority column to tasks table: 'high' | 'medium' | 'low' (default 'medium')
- [ ] Generate and run migration successfully
- [ ] Typecheck/lint passes

## Functional Requirements
- FR-1: Add `priority` field to tasks table with default 'medium'
- FR-2: Display priority indicator on each task card

## Non-Goals
- No priority-based notifications

## Success Metrics
- Users can change priority in under 2 clicks

## Open Questions
- Should priority affect task ordering within a column?
```

## Checklist

- Asked clarifying questions with lettered options
- Incorporated user answers
- User stories are small and specific
- Functional requirements are numbered and unambiguous
- Non-goals section defines clear boundaries
- Saved to `tasks/prd-[feature-name].md`
