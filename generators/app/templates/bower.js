'use strict';

module.exports = {
    "name": "<%= module.name %>",
    "main": "<%= module.name + '.js'; %>",
    "version": "1.0.0",
    "authors": ["wonderflow"],
    "description": "<%= module.description %>",
    "keywords": [
	"<%= module.name %>",
	"http"
    ],
    "license": "<%= module.license %>",
    "private": true,
    "ignore": [
	"**/.*",
	"node_modules",
	"bower_components",
	"test",
	"tests"
    ],
    "dependencies": {
	"angular": "1.2.6",
    },
    "devDependencies": {
	"angular-mocks": "1.2.6",
    }
};

