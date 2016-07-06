var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    initializing: function () {
	this.composeWith(
	    'karma:app', 
	    {
		options: {
		    'config-path': '.'
		}
	    }, 
	    require.resolve('generator-karma/generators/app/index.js')
	)
    }
});
