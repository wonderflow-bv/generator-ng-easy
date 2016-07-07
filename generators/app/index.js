'use strict';

var ejs = require('ejs');
var fs = require('fs');
var generators = require('yeoman-generator');

var bowConfig = require('./templates/bower.js');

/**
 * Put into an array the name of dependencies and dev-dependencies as a bower
 * module location
 */
function generateDependencies() {
    var dependencies = [];
    var asBower = function (name) {
	return 'bower_compontens/' + name + '/' + name +'.js';
    };

    for (var d in bowConfig.dependencies) {
	dependencies.push(asBower(d));
    }

    for (var dD in bowConfig.devDependencies) {
	dependencies.push(asBower(dD));
    }

    // The module to testing
    dependencies.push(this.module.name + '.js');
    dependencies.push('test/spec' + this.module.name + '.js');

    return dependencies;
}

/**
 * Generate the bower.json in the root of project
 */
function writeBowerJson() {
    var self = this;

    var bowerContent = JSON.stringify(bowConfig, null, 2);
    // Instantiate the bower.json with the module configuration
    var bowerRender = ejs.render(bowerContent, {module: this.module});
    fs.writeFile('bower.json', bowerRender, 'utf8', function (err) {
	if (err) {
	    throw err;
	} 
    });
}

/**
 * Generate the package.json in the root of project
 */
function writeNPMJson() {
    this.fs.copyTpl(
	this.templatePath('package.json'),
	this.destinationPath('package.json'),
	{module: this.module}
    );
}

module.exports = generators.Base.extend({
    constructor: function () {
	generators.Base.apply(this, arguments);
	
	// All options setted by the user
	this.module = {};

	this.generateDependencies = generateDependencies;
	this.writeBowerJson = writeBowerJson;
	this.writeNPMJson = writeNPMJson;
    },

    prompting: function () {
	return this.prompt([{
	    type: 'input',
	    name: 'name',
	    message: 'Your Angular module name',
	    default: this.appname
	}, {
	    type: 'input',
	    name: 'description',
	    message: 'Description of the your module'
	}, {
	    type: 'input',
	    name: 'license',
	    message: 'License',
	    default: 'ISC'
	}, {
	    type: 'list',
	    name: 'type',
	    message: 'What you want:',
	    choices: ['service', 'directive']
	}]).then(function (answer) {
	    this.module = answer;
	}.bind(this));
    },

    configuring: function () {
	this.writeBowerJson();
	this.writeNPMJson();

	// Generate the karma.conf.js file
	this.composeWith(
	    'karma:app', 
	    {
		options: {
		    'test-files': this.generateDependencies(),
		    'template-path': __dirname + '/templates',
		    'config-path': '.'
		}
	    },
	    require.resolve('generator-karma/generators/app/index.js')
	)
	
	this.composeWith(
	    'ng-easy:'+this.module.type, 
	    {args: [this.module.name]}
	);
    },

    install: function () {
	this.installDependencies();
    }
});

