# Generator-wondermodule

A Yeoman generator to create angular's model follow the Wonderflow's standard:
- APP
  - Create develop environment
  
- TEST
  - Create test environment
	(karma configuration)
	- karma configuration file
	- setting manual param
	(e2e test)
	- create directory for e2e test
	- create directory `lib` and load library
	- create directory `conf` and load content
	- create and initialize `specList`
	- create and configure protractor file
	(unit test)
	- create directory for unit test with: data, utils
	- create file test-dependencies-list, test-file-list, test-spec-list
	- runner.html
	
  - Create test
	(e2e test)
	- define a name
	- define an user object if you need
	- put the file path into `specList`
	(unit test)
	- put path file in `test-spec-list`
	
- CONF
  - Manage dependencies
	- Angular
	  - Angular 1.2.6
	- Wonderflow
	  - data
	  - build-url
	- Generator
	  - generator-angular
  - Package
	- bower module
	- npm module
  - Project utilities
	- makefile
	- gruntfile
	- .gitignore
	- docker (?)
	- various shell script

