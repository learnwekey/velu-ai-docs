---
id: linear-integration-how-to
title: Connect Velu to Linear for documentation work
sidebar_label: Linear integration how-to
---

# Connect Velu to Linear for documentation work

Use this guide to connect your Velu workspace to Linear so that every documentation task you approve in Velu is mirrored as a Linear issue with up-to-date status.

## Before you begin

Make sure you have:

- Velu workspace admin access.
- A Linear workspace admin account with permission to authorize third-party apps.
- Clarity on which Linear teams, projects, labels, and (optionally) cycles should own documentation work.
- A list of Velu Docs Spaces or product areas that need to sync with Linear.

## Step 1. Prepare Linear for the integration

1. Sign in to Linear with an account that can install OAuth apps.
2. Confirm the teams and projects that will hold documentation issues.
3. Create or verify labels (for example, `docs`, `velu`) you want Velu to apply automatically.
4. Let your team know that Velu will request the following Linear scopes: read and write issues, plus read access to teams, projects, labels, and cycles.

## Step 2. Authorize Linear in Velu

1. In Velu, go to **Settings → Integrations → Linear**.
2. Select **Connect Linear**.
3. Approve the Linear OAuth consent screen for the workspace you prepared, ensuring the required scopes stay selected.
4. When Velu confirms the connection, reload the Linear integration page to verify the workspace metadata (teams, projects, labels) has synced.

## Step 3. Set workspace defaults for new issues

1. Stay on **Settings → Integrations → Linear**.
2. Choose a default Linear team that should own documentation issues created from Velu.
3. (Optional) Pick a default project and default labels; Velu will pre-fill them in every new issue.
4. Save the defaults so that writers see the correct selections the first time they open the issue creation modal.

## Step 4. Map Velu Docs Spaces to Linear teams

1. Navigate to each Docs Space or product area inside Velu.
2. Open the space settings and set the preferred Linear team.
3. (Optional) Assign a default project and labels for that space if its work differs from the workspace-wide defaults.
4. Confirm that the mapping appears in the space overview; Velu now auto-populates the issue modal with the correct team for users working in that space.

## Step 5. Create Linear issues from Velu doc tasks

1. Open a Velu doc suggestion or task that you want to track in Linear.
2. Select **Create Linear issue**.
3. Review the pre-filled fields:
   - Title generated from the doc name and requested change.
   - Description summarizing the update, including Velu doc links and any connected pull requests.
   - Team, project, labels, and (if fetched) cycle based on your defaults and mappings.
4. Adjust any fields, add priorities or checklists as needed, and select **Create issue**.
5. Wait for the confirmation toast, then follow the **View in Linear** link if you want to adjust details directly in Linear.
6. Note that Velu flags the doc task as **Tracked in Linear** once the issue is created, helping you avoid duplicate issues for the same doc work.

## Step 6. Monitor status and keep the integration healthy

1. From any Velu doc task linked to Linear, watch the status chip (Todo, In Progress, Done, Canceled) that mirrors the Linear issue state.
2. Refresh or revisit the task to trigger periodic status syncs (Velu updates linked issues roughly every 10 minutes).
3. When Linear marks an issue done, use the Velu prompt to close out the doc task or mark it as completed.
4. If Velu reports an authentication or permission error, return to **Settings → Integrations → Linear** and reconnect the workspace before retrying.
5. For repeated API failures, collect the error message shown in Velu and share it with your workspace admin so they can check Linear permissions or rate limits.

## Outcome

After completing these steps, your documentation tasks stay visible in both Velu and Linear. Writers can raise issues with one click, PMs track progress inside Linear, and Velu keeps status in sync so you always know which doc updates are underway.

Next, review the [Integrations](./integrations.md) overview if you want to connect additional tools alongside Linear.
