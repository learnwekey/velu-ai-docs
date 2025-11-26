---
id: how-to-connect-slack
title: How to connect Velu AI to Slack
sidebar_label: Connect Velu AI to Slack
---

Use this guide when you want Velu AI to notify your team about documentation updates directly in Slack.

## Before you start

- You can sign in to the Velu AI dashboard.
- Your Slack account has permission to install apps for the target workspace.
- You know which channel (for example, `#docs-updates`) should receive Velu AI notifications.

## Steps

### 1. Prepare the Slack channel

1. Confirm the target channel exists and that you are a member.
2. Decide whether Velu AI should post to a public or private channel. (Private channels require you to invite the Velu app manually later.)

### 2. Open the Slack integration in Velu AI

1. Log in to Velu AI.
2. Select **Integrations** in the left navigation.
3. Choose **Slack**.
4. Click **Add to Slack**.

### 3. Authorize Slack access

1. When Slack opens the authorization window, pick the correct workspace.
2. Review the permissions Velu AI requests.
3. Click **Allow** to install the Velu app.

### 4. Choose the notification channel

1. Back in Velu AI, select the Slack channel you prepared.
2. If the channel is private, invite `@Velu` from Slack so it can post.
3. Save the integration settings.

### 5. Confirm notification delivery

1. In Velu AI, trigger a documentation update or use the **Send Test Notification** option if available.
2. Verify that Slack posts appear in the selected channel with links back to the Velu AI suggestion or pull request.

## Troubleshooting

- **Velu AI cannot post to a private channel:** Invite `@Velu` directly in Slack, then refresh the integration page and reselect the channel.
- **No notifications arrive after setup:** Ensure the workspace admin has not restricted custom app posting, and confirm that Velu AI has pending documentation updates to send.
- **Wrong workspace appears during authorization:** Sign out of Slack in your browser or open the authorization link in an incognito window, then repeat Step 3.

## Next steps

- Add Velu AI reviewers from your docs team to the Slack channel so they see updates immediately.
- Pair the Slack integration with the Linear integration to link notifications to follow-up issues when documentation gaps are detected.
