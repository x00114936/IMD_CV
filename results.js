var results = angular.module("results", []);

	results.controller("resultsController",
		function resultsController($scope){
			$scope.results = {
					fourthYear: [
					{
						id: 1,
						subject: "Enterprise Application Development",
						grade: "TBC"
					},
					{
						id: 2,
						subject: "Enterprise Application Architecture",
						grade: "TBC"
					}
			]
			};
		});