'use strict';

describe('Directive - <%= name %>', function () {
    beforeEach(module('wonderflow<%= name.charAt(0).toUpperCase() + name.slice(1) %>'));
    
    var scope;

    beforeEach(inject(function($rootScope) {
	scope = $rootScope.$new();
    }));
});

