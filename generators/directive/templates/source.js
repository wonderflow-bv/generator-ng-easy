angular.module('wonderflow<%= name.charAt(0).toUpperCase() + name.slice(1) %>', [])
.directive('<%= name %>', function () {
    return {
	templateUrl: '',
	restrict: '',
	link: function (scope) {
	}
    };
});

