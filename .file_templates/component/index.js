module.exports = {
  description:
    'create file and folder structure for new atom / molecule / organism',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'What Type is the new Component?',
      choices: ['Atom', 'Molecule', 'Organism'],
      filter: v => v.toLowerCase()
    },
    {
      type: 'input',
      name: 'name',
      message: `Name of the Component please:`,
      filter: v => v.toLowerCase()
    }
  ],
  actions: [
    {
      type: 'add',
      path: 'components/{{typeFolder type}}/{{name}}/{{name}}.jsx',
      templateFile: '.file_templates/component/component.jsx.hbs'
    },
    {
      type: 'add',
      path: 'components/{{typeFolder type}}/{{name}}/{{name}}.stories.js',
      templateFile: '.file_templates/component/component.stories.js.hbs'
    },
    {
      type: 'add',
      path: 'components/{{typeFolder type}}/{{name}}/{{name}}.test.js',
      templateFile: '.file_templates/component/component.test.js.hbs'
    },
    {
      type: 'add',
      path: 'components/{{typeFolder type}}/{{name}}/index.jsx',
      templateFile: '.file_templates/component/component.index.hbs'
    },
    {
      type: 'append',
      path: 'components/{{typeFolder type}}/index.jsx',
      pattern: /;(?![\s\S]*;)/g,
      templateFile: '.file_templates/component/component.index.parent.hbs'
    }
  ]
};
