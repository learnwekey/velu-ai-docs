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
          type: 'category',
          label: 'Project Management',
          items: [
            'integrations/project-management/how-to-connect-linear-in-velu',
            'integrations/project-management/how-to-connect-jira-in-velu',
            'integrations/project-management/how-to-connect-notion-in-velu',
            'integrations/project-management/how-to-connect-monday-in-velu',
            'integrations/project-management/how-to-connect-trello-in-velu',
            'integrations/project-management/how-to-connect-asana-in-velu',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
