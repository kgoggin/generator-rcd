var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.argument('componentName', {
            type: String,
            required: true,
            desc: 'The name of the component'
        });
    }

    writing() {
        const name = this.options.componentName;

        // main component file
        this.fs.copyTpl(
            this.templatePath('Component.js'),
            this.destinationPath(`${name}/${name}.js`),
            { name }
        );

        // index.js
        this.fs.copyTpl(
            this.templatePath('index.js'),
            this.destinationPath(`${name}/index.js`),
            { name }
        );

        // test file
        this.fs.copyTpl(
            this.templatePath('test.js'),
            this.destinationPath(`${name}/${name}.test.js`),
            { name }
        );

        // story file
        this.fs.copyTpl(
            this.templatePath('story.js'),
            this.destinationPath(`${name}/${name}.story.js`),
            { name }
        );
    }
};
