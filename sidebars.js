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
        'integrations',
        'linear-integration-how-to',
      ],
    },
  ],
};

module.exports = sidebars;
