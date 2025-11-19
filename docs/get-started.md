---
id: get-started
title: Get Started
sidebar_label: Get Started
slug: /overview/get-started
---

# Get Started with Velu AI

Follow these steps to create your Velu AI workspace, connect your docs, and invite the teammates with whom you will collaborate.

## Before you begin

- A GitHub account with access to your documentation repository.
- Awareness of which teammates will collaborate in Velu AI (they will receive email invitations).
- A sense of which third-party tools you plan to integrate (for example GitHub, Google Drive, Slack, or Linear).

## Step 1. Create your Velu AI account

1. Navigate to the Velu AI sign-in page.
2. Select **Continue with GitHub**.
3. Authorize Velu AI to access your GitHub identity. This creates your workspace and starts a 7-day free trial automatically.
4. (Optional) Verify your email address if prompted, so collaborators receive notifications from your workspace.

## Step 2. Connect your documentation repository

1. In the Velu AI dashboard, open **Integrations → GitHub**.
2. Confirm the GitHub organization or user where your docs live and approve the requested permissions.
3. Choose the repository that contains your documentation (for example a Docusaurus or Markdown repo).
4. (Optional) Limit Velu AI to specific folders—such as `/docs` or `/api`—to focus scanning on the relevant content.

Once connected, Velu AI begins mapping the structure of your docs so it can surface update suggestions.

## Step 3. Add collaborators

1. Go to **Workspace Settings → Collaborators**.
2. Click **Invite collaborator**, enter each teammate’s email address, and assign the appropriate role.
3. Send the invitations. Collaborators receive an email with a GitHub-based sign-in link so they can join the same trial workspace.

Inviting collaborators early ensures the right reviewers can approve suggested documentation updates as they appear.

## Step 4. Confirm Velu AI GitHub app permissions

1. Open your GitHub [Installed GitHub Apps](https://github.com/settings/installations) page.
2. Locate **Velu AI** in the list and select **Configure**.
3. Grant access to the organization and repositories where you want Velu AI to monitor documentation updates, then save changes.

Ensuring the Velu AI GitHub app has repository access lets it sync content and prepare pull requests in the correct projects.

## Step 5. Enable the integrations you need

1. Open **Integrations** in the Settings.
2. Review the available connectors:
   - **GitHub** – required for repo-based documentation.
   - **Google Drive** – connect shared folders if you maintain Google Docs content.
   - **Slack** – deliver review notifications to a channel your team already watches.
   - **Linear** – link documentation updates to product issues and track follow-up work.
3. For each integration you need, click **Connect**, authorize access, and configure any optional scope (for example, specific folders or projects).
4. Save your changes to activate the integration.

See the [Integrations](../integrations) reference for detailed capabilities and setup instructions for each connector.

## What’s next?

- Review the [Setup](../setup) guide for deeper configuration steps.
- Explore the Velu AI dashboard to trigger your first documentation update and review the suggested changes.
