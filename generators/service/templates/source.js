angular.module('wonderflow<%= name.charAt(0).toUpperCase() + name.slice(1) %>', [])
.service('<%= name %>', function () {
    function <%= name %>() {}

    return new <%= name %>();
});

