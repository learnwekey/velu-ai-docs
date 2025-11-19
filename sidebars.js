// sidebars.js

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'overview',
        },
        {
          type: 'doc',
          id: 'get-started',
        },
      ],
    },
    {
      type: 'doc',
      id: 'setup',
    },
    {
      type: 'doc',
      id: 'integrations',
    },
  ],
};

module.exports = sidebars;
