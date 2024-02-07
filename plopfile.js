module.exports = plop => {
  plop.setGenerator('Component Generator', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        message: 'What is your component name?',
        name: 'name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.tsx',
        templateFile: 'templates/Component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.styles.ts',
        templateFile: 'templates/Component/Component.styles.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.types.ts',
        templateFile: 'templates/Component/Component.types.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/index.ts',
        templateFile: 'templates/Component/index.ts.hbs',
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        template: "export { {{name}} } from './{{name}}';",
      },
    ],
  });
};
