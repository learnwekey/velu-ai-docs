---
id: update-doc-chat-demo
title: "Demo: Update a Documentation Chat"
sidebar_label: "Demo: Update a Documentation Chat"
---

# Demo: Update a Documentation Chat

Use this guided walkthrough to see how Velu AI helps you request, review, and apply documentation changes through the **Update a Documentation** chat flow.

## What you will accomplish

- Capture a product change request inside Velu AI.
- Generate a proposed documentation update directly from the chat.
- Review, iterate on, and approve the edits so they are ready to merge.

## Prerequisites

Before you start, confirm you have:

- Completed the core steps in the [Setup guide](./setup.md), including connecting your GitHub documentation repository.
- At least one repository with Markdown or MDX files Velu AI can edit.
- Access to a Velu AI workspace with the **Update a Documentation** chat template enabled.

## Step 1. Launch the chat template

1. From the Velu AI dashboard, open **Chats → Templates**.
2. Select **Update a Documentation**.
3. Choose the connected repository and branch you want Velu AI to reference.
4. Provide a short summary of the change (for example, “Add new API parameters to the authentication guide”).

Velu AI uses the connected sources to gather the existing documentation context so the proposal stays aligned with your current docs.

## Step 2. Refine the request with context

- Paste any relevant product specs, engineering notes, or Slack threads into the chat to give Velu AI additional context.
- Highlight the specific pages or sections that need edits.
- Ask follow-up questions—Velu AI can clarify which files it plans to modify before drafting changes.

## Step 3. Review the suggested edits

When Velu AI is ready, it presents a proposed diff:

1. Expand each file to see in-line additions and deletions.
2. Use the thumbs up/down controls to give quick feedback.
3. Request adjustments in the chat, such as tone updates or formatting tweaks; Velu AI regenerates the diff as needed.

## Step 4. Approve and publish

1. Once the diff looks correct, click **Apply changes** to let Velu AI open a pull request in your connected repository.
2. Add reviewers directly from the confirmation modal, or copy the PR link to share it manually.
3. Track the status of the change in Velu AI or your source control platform until it lands in main.

## Tips for running live demos

- Prepare a feature flag or staging branch so viewers can compare before-and-after docs safely.
- Save snippets of exemplar context (like customer questions) to paste into the chat for richer demonstrations.
- Pair the demo with the [Integrations overview](./integrations.md) so stakeholders understand how updates flow into Slack or Linear.

You are ready to show teams how Velu AI keeps documentation current with minimal manual editing.
