(function () {
    var testRouter = angular.module("RouterTest",["ngRoute"]);
    testRouter.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
	    .when("/routes/a", {
		"templateUrl":"templates/a-template.html",
		"controller":"aController"
	    })
	    .when("/routes/b", {
		"templateUrl":"templates/b-template.html",
		"controller":"bController"
	    })
	    .otherwise({
		"redirectTo":"routes/a"
	    });
    }]);
}())
