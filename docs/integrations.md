---
id: integrations
title: Integrations
sidebar_label: Integrations
---

# Integrations

Velu AI works best when it’s connected to the tools you already use for docs, collaboration, and product development.

Right now, Velu supports:

- GitHub
- Google Drive
- Slack
- Linear

---

## GitHub

Use this when your docs and/or code live in GitHub.

What Velu does with GitHub:

- Scans your documentation repo (Markdown / MDX).
- Tracks changes in specific folders (for example `/docs`, `/api`, `/guides`).
- Suggests doc updates when code, APIs, or configs change.
- Can open pull requests with draft documentation changes.

**Setup:**

1. In Velu AI, go to **Integrations → GitHub**.
2. Click **Connect GitHub** and authorize Velu.
3. Select the organization/user and repositories you want Velu to watch.
4. Confirm the default branch (for example: `main`).
5. (Optional) Limit Velu to specific folders like `/docs` or `/api`.

---

## Google Drive

Use this when your docs live as Google Docs instead of code.

What Velu does with Google Drive:

- Connects to selected folders that contain your documentation.
- Reads doc structure and content to understand your help center / guides.
- Suggests updates when connected product sources change.
- Keeps a mapping between product areas and the docs that describe them.

**Setup:**

1. In Velu AI, go to **Integrations → Google Drive**.
2. Click **Connect** and grant access with your Google account.
3. Choose the folders that contain your documentation.
4. Save the integration.

---

## Slack

Slack is used for notifications and collaboration.

What Velu does with Slack:

- Sends notifications when new doc suggestions or updates are triggered.
- Can be part of a specific channel (for example: `#docs-updates`).
- Single right click from slack can send out udpates to velu
- Lets your team quickly click through to review or approve changes.

**Setup:**

1. In Velu AI, go to **Integrations → Slack**.
2. Click **Add to Slack**.
3. Choose the workspace and channel where Velu should post.
4. Confirm permissions and save.

---

## Linear

Use this if your team uses Linear to manage product work and issues.

What Velu does with Linear:

- Links documentation suggestions to Linear issues.
- Helps you see which features/issues still need docs.
- Optionally creates follow-up tasks when important doc gaps are detected.

**Setup:**

1. In Velu AI, choose **Integrations > Linear**.
2. Click **Connect** and authorize Velu AI.
3. Select the teams and projects that are relevant to your documentation.
4. Decide how you want Velu AI to create or link issues—for example, create one issue per feature or one per document.

### Create a Documentation Update From a Linear Ticket

Use this workflow when documentation work originates in Linear and you want Velu AI to track and complete the documentation changes. You'll keep your documentation tasks aligned with the product backlog.

**Prerequisites**

- Connect a Linear workspace in **Settings > Integrations > Linear** with a valid OAuth (Open Authorization) token.
- Map the relevant Velu AI documentation space to the Linear team, project, and labels that own the ticket.
- Confirm you have permission in Linear to view and create issues for that team.

**Steps**

1. In Linear, open the ticket that calls for documentation changes and confirm the summary, acceptance criteria, and links are up to date.
2. In Velu AI, go to the documentation space or page affected by the ticket and choose **Create documentation update** (or open the existing pending update).
3. Choose **Link Linear issue**, then paste the Linear issue link or identifier. Velu AI validates the link and attaches the issue to the documentation update.
4. Review the default team, project, and labels that load from your documentation space mapping. Adjust them if the ticket belongs elsewhere.
5. Add the documentation scope: list the pages to update, outline the edits, and assign the documentation owner and due date.
6. Save the documentation update. Velu AI stores the Linear issue ID, status, and a shortcut back to the ticket so the team can work from either tool.
7. As progress happens, refresh the Linear panel or wait for the automatic sync (runs about every 10 minutes). When the ticket moves to **Done**, Velu AI will prompt you to mark the documentation update complete.

**Troubleshooting**

- If Velu AI cannot attach the ticket, reconnect the Linear integration from **Settings > Integrations > Linear** and retry.
- If a permissions error appears, ask a Linear admin to grant you the necessary permissions for the team or to move the ticket to a mapped team.
- Velu AI warns you if a documentation update already references the same Linear issue. Review the existing link to avoid creating duplicates.


