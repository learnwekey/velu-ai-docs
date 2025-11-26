// sidebars.js

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'overview',
    },
    {
      type: 'doc',
      id: 'setup',
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        {
          type: 'doc',
          id: 'integrations',
        },
        {
          type: 'doc',
          id: 'integrations-connect-velu-ai-to-github',
        },
        {
          type: 'doc',
          id: 'integrations-connect-velu-ai-to-slack',
        },
      ],
    },
  ],
};

module.exports = sidebars;
