---
id: integrations-connect-velu-ai-to-github
title: How to Connect Velu AI to GitHub
sidebar_label: Connect Velu AI to GitHub
---

Use this guide when you need Velu AI to create GitHub pull requests for your documentation updates without leaving the docs-as-code workflow.

## Before you start

Make sure you have:

- Admin access to the Velu AI workspace.
- Permission to install GitHub Apps for the target GitHub organization or user account.
- The list of repositories and default branches where Velu should open documentation pull requests.
- A plan for which Velu projects map to which GitHub directories (for example, `/docs` or `/website/docs`).

## Step 1. Open the GitHub integration in Velu

1. Sign in to Velu AI.
2. In the left navigation, choose **Settings → Integrations**.
3. Select **GitHub** and click **Connect GitHub**.

Velu opens the GitHub authorization flow in a new window.

## Step 2. Install the Velu GitHub App

1. On GitHub, pick the organization or user that owns the documentation repository.
2. Approve the Velu GitHub App installation request.
3. When prompted, select **Only select repositories** and choose the repos that Velu may access. You can add more later from the integration settings.
4. Confirm the installation.

GitHub redirects you back to Velu once the app is installed.

## Step 3. Confirm repository access in Velu

1. Review the list of connected organizations and repositories that Velu displays.
2. Use **Add repositories** to widen access or **Remove** to revoke a repo if needed.
3. For each Velu project or documentation space, set:
   - **Default repository** – where Velu will create branches and pull requests.
   - **Default branch** – usually `main`, but match your publishing branch.
   - **Docs root** – the directory path Velu should treat as the documentation root inside the repository.

Velu stores this mapping securely so writers can create pull requests without reconfiguring each time.

## Step 4. Map documents to GitHub file paths

1. Open a document inside Velu AI.
2. In the document settings, choose **Link to GitHub file**.
3. Select the connected repository, target branch, and specify the exact file path (for example, `docs/integrations/connect-velu-ai-to-github.md`).
4. Save the mapping.

Velu uses this mapping to generate diffs against the live file in GitHub.

## Step 5. Test the connection by creating a pull request

1. Generate or review a documentation update inside Velu.
2. Click **Review changes** to inspect the Git-style diff.
3. Choose **Create pull request**.
4. Adjust the automatically generated branch name, pull request title, and description if necessary.
5. Submit the pull request.

Velu creates a feature branch (for example, `velu/docs-update-<timestamp>`), commits the changes, and opens the pull request in GitHub. The pull request link and status now appear in Velu.

## Step 6. Monitor pull request status

- Velu periodically syncs the pull request state from GitHub (open, draft, merged, or closed).
- Use the status indicator on the document page to confirm whether documentation changes are live.
- Click **Open in GitHub** from Velu to review or merge the pull request inside GitHub.

## Troubleshooting

- **Permission errors when creating pull requests** — Confirm that the Velu GitHub App still has access to the repository and that your Velu role allows PR creation.
- **Branch protection failures** — If GitHub blocks the push, retry with a different target branch or open the pull request as a draft so reviewers can handle required checks.
- **Repository moved or renamed** — Update the repository mapping in Settings → Integrations to point to the new location.
- **File path conflicts** — Edit the document mapping so the path matches the current GitHub file structure before re-running the pull request flow.

## Next steps

- Share this guide with writers so they can create review-ready pull requests directly from Velu.
- Track integration health with the number of connected repositories and merged Velu pull requests in your workspace metrics.