// sidebars.js

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'overview',
    },
    {
      type: 'category',
      label: 'Setup',
      items: [
        {
          type: 'doc',
          id: 'setup',
        },
        {
          type: 'doc',
          id: 'update-doc-chat-demo',
        },
      ],
    },
    {
      type: 'doc',
      id: 'integrations',
    },
  ],
};

module.exports = sidebars;
