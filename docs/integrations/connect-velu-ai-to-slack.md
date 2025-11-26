---
id: integrations-connect-velu-ai-to-slack
title: How to Connect Velu AI to Slack
sidebar_label: Connect Velu AI to Slack
---

Use this guide when you want Velu AI to post documentation updates and review prompts directly into your team's Slack channels.

## Before you start

Confirm that you have:

- Admin access to your Velu AI workspace.
- Permission to install Slack apps in the target Slack workspace.
- The list of Slack channels where writers and reviewers expect Velu notifications (for example, `#docs-updates`).
- A plan for how your team will triage Velu notifications (respond in Slack, jump to Velu, or both).

## Step 1. Open the Slack integration in Velu

1. Sign in to Velu AI.
2. Navigate to **Settings → Integrations**.
3. Choose **Slack** and click **Add to Slack**.

Velu opens Slack's authorization window in a new tab.

## Step 2. Approve the Velu Slack app

1. Select the Slack workspace where you want Velu to post updates.
2. Review the permissions Velu is requesting (posting messages and unfurling links in selected channels).
3. Click **Allow** to complete the installation.

Slack returns you to Velu once the app is approved.

## Step 3. Pick notification channels

1. Back in Velu, review the list of Slack channels that the integration can access.
2. Select the channel (or channels) that should receive Velu alerts.
3. Decide whether Velu should post to:
   - A single shared channel (recommended for centralised doc review), or
   - Multiple feature- or team-specific channels.
4. Save your selections.

## Step 4. Configure notification rules

1. In Velu's Slack integration settings, choose the events that should trigger notifications, such as:
   - New documentation suggestions ready for review.
   - Pull requests created from Velu.
   - Status changes (for example, merged or blocked updates).
2. Set the urgency level or message format if Velu offers presets (for example, include diff summaries or direct review links).
3. Save the configuration.

## Step 5. Test the Slack connection

1. Use **Send test message** from the Slack integration panel in Velu.
2. Confirm the message appears in the selected Slack channel and that team members can open the deep links back to Velu.
3. If needed, adjust channel selection or notification settings.

## Step 6. Action Velu updates from Slack

- Team members can click the Velu links in Slack to open the relevant document diff or pull request inside Velu.
- Right-click (or use the message overflow menu) on Velu notifications to take available quick actions, such as acknowledging or assigning follow-up in Velu.
- Encourage reviewers to keep conversation threads in Slack so Velu's updates remain visible.

## Troubleshooting

- **App cannot post to a channel** — Verify that the Velu app is invited to the channel (`/invite @Velu`) and that the channel is public or the app has been granted access to the private channel.
- **Notifications are too noisy** — Refine the event triggers in Velu's Slack settings or route high-volume notifications to a separate channel.
- **Authentication expired** — Reopen **Settings → Integrations → Slack** in Velu and re-authorize the Slack workspace.
- **Users missing quick actions** — Ensure the Velu Slack app is the latest version and that users have the Velu permissions needed to act on linked documents or pull requests.

## Next steps

- Document channel norms (for example, who acknowledges new Velu updates).
- Pair Slack notifications with Linear or GitHub workflows so reviewers can jump straight from Slack into their preferred tools.
- Periodically review integration metrics (notification volume, response times) to keep alerting effective.