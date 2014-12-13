'use strict';

// Declare app level module which depends on filters, and services
var phpybdb = angular.module('phpybdb', ['ngSanitize']);

phpybdb.config(
	function($locationProvider, $routeProvider){		
		$routeProvider.
			when('/', { templateUrl: 'templates/index.html', controller: frontPageCtrl}).
			when('/home', { templateUrl: 'templates/index.html', controller: frontPageCtrl}).
			when('/:slug', {templateUrl: 'templates/index.html', controller: singlePageCtrl}).
			otherwise({redirectTo: '/404'});
			
		$locationProvider.hashPrefix('!').html5Mode(false);
	}
);

var listTpl = '<ul class="nav nav-pills nav-stacked">' +
				'<li ng-repeat="child in family">' +
					'<a href="#!/{{child.slug}}">{{child.title}}</a>' +
                    '<page family="child.sub"></page>' +
                '</li>' +
               '</ul>';