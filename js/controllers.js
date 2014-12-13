'use strict';

/* Controllers */
	function frontPageCtrl ($scope, $http) {
		$http.get('pages/Halaman-Depan.md').
			success(function(response) {
				$scope.content = marked(response, {gfm: true});
			});
	}
	
	function PageListCtrl ($scope, $http) {
		$http.get('pages.json').success(function(response) {
			add_slug(response);
			$scope.pageList = response;
		});
	}
	
	function singlePageCtrl ($routeParams,$http, $scope) {
		var slug = $routeParams.slug;
		$http.get(slug.replace('.html','.md')).
			success(function(response) {
				$scope.content = marked(response, {gfm: true});
			}).
			error(function() {
				$scope.content = '<h1>Not found !</h1>';
			});
	}
	
/* Helpers */
	function add_slug(array_of_obj)
	{
		for(var pageIdx = 0; pageIdx < array_of_obj.length; ++pageIdx) {
			var curPage = array_of_obj[pageIdx];

			if(curPage.title) {
				curPage.slug = curPage.title.split(' ').join('-') + '.html';
			}

			if(curPage.sub) {
				add_slug(curPage.sub);
			}
		}
	}