(function () {
    var app = angular.module("viewer",[]);
    app.controller("imageBlock", function () {
	this.block = imageblock;
    });
    var imageblock = {
	"title": "Kangaroo Jack",
	"source": "assets/images/buck.jpg",
	"description": "The coolest Kangaroo in the world!",
	"comments": [{"body": "Superlike!!!","author":"superBall"}]
    };
    app.controller("thumbnailBlock", function () {
	this.list = thumbnailblock;
	this.thumbSelect = function () {
	    alert("Thumbnail clicked");
	};
    });
    var thumbnailblock = {"thumbs":[{"source":"assets/images/buck.jpg"}]};
} ());
