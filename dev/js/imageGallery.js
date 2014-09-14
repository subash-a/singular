(function () {
    var images = [{
	"title": "Kangaroo Jack",
	"source": "assets/images/buck.jpg",
	"thumbnail":{"source": "assets/images/buck.jpg"},
	"description": "The coolest Kangaroo in the world!",
	"comments": [{"body": "Superlike!!!","author":"superBall"}]
    },{
	"title": "Tiger Stand",
	"source": "assets/images/tiger.jpg",
	"thumbnail":{"source": "assets/images/tiger.jpg"},
	"description": "The coolest Tiger in the world!",
	"comments": [{"body": "Superlike!!!","author":"superBall"}]
    },{
	"title": "Bengal Tiger",
	"source": "assets/images/bengal.jpg",
	"thumbnail":{"source": "assets/images/bengal.jpg"},
	"description": "The coolest Bengal Tiger in the world!",
	"comments": [{"body": "Superlike!!!","author":"superBall"}]
    },{
	"title": "Eye of the Tiger",
	"source": "assets/images/eyes.jpg",
	"thumbnail":{"source": "assets/images/eyes.jpg"},
	"description": "The coolest Eyes in the world!",
	"comments": [{"body": "Superlike!!!","author":"superBall"}]
    }];
    var app = angular.module("ImageGalleryModule", []);
    app.controller("ImageGalleryController",["$scope",function ($scope) {
		this.images = images;
		this.currentImage = images[0];
		this.changeImage = function (image) {
		    this.currentImage = image;
		}
	}]);
    app.directive ("imageGallery", function () {
	return {
	    "restrict": "E",
	    "templateUrl": "../templates/image-gallery.html",
	    "controller": "ImageGalleryController",
	    "controllerAs": "gallery"
	}
    });  
} ());
