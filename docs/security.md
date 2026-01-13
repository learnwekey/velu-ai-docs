---
id: security
title: Security
sidebar_label: Security
---

# Security

Velu AI keeps product information limited to the context required for generating documentation updates.

## Data Handling Principles

Velu AI follows these practices:

- Velu AI reads directly from connected repositories or drives when assembling an update and doesn't keep extra copies of your documentation content.
- Velu AI stores generated documentation updates so teams can review, edit, and manage them before publishing.
- Velu AI processes integration context (Slack threads, Linear or Jira issues, call notes, pasted transcripts, etc.) only long enough to produce an update and discards it once the workflow ends, such as after the pull request (PR) is raised.

## Integrations and Account Data

Keep these points in mind:

- Velu AI connects integrations through webhooks (automated HTTPS callbacks) or manually pasted context, depending on the tool involved.
- Velu AI stores only the basic user account data it needs to run the service (email, name, and role).
- Velu AI handles data deletion requests manually—email `support@getvelu.com` to start the process once a workflow is complete.

## Roadmap for Enterprise Readiness

Velu AI is building enterprise guardrails that include planned support for custom retention windows, data processing agreements, security questionnaires, and ongoing System and Organization Controls (SOC 2) readiness updates for enterprise teams.

Need more? Visit [`/security`](/security) for full details.
