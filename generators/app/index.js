var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    initializing: function () {
	this.composeWith(
	    'karma:app', 
	    {
		options: {
		    'template-path': __dirname + '/templates',
		    'config-path': '.'
		}
	    }, 
	    require.resolve('generator-karma/generators/app/index.js')
	)
    }
});
