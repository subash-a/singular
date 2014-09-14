(function () {
    var app = angular.module("PhotoBook", [
	"ngRoute",
	"ImageGalleryModule",
	"NewAlbumForm",
	"Albums"]);
    /*
     * NOTE: Router testing going on trying to understand the workings
     * of a router in angular. Understood till now how to invoke it,
     * need to understand the basics behind how to use it.
     */
    app.config(["$routeProvider",
		function ($routeProvider) {
		    $routeProvider
			.when("/albums",{
			    "templateUrl":"templates/album-section.html",
			    "controller": "AlbumController"
			})
			.when("/album/:albumName",{
			    "templateUrl": "templates/image-gallery-section.html",
			    "controller": "ImageGalleryController"
			})
			.otherwise({
			    "redirectTo": "/albums"
			});
		 }]);
} ());
