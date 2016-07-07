'use strict';

var generators = require('yeoman-generator');
var fs = require('fs');

module.exports = generators.Base.extend({
    constructor: function () {
	generators.Base.apply(this, arguments);
	
	this.argument('name', {type: String, required: true});
    },

    writing: function () {
	this.fs.copyTpl(
	    this.templatePath('source.js'),
	    this.destinationPath(this.name + '.js'),
	    {name: this.name}
	);

	this.fs.copyTpl(
	    this.templatePath('test.js'),
	    this.destinationPath('test/spec/' + this.name + '.js'),
	    {name: this.name}
	);
    }
});

