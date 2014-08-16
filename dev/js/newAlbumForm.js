(function () {
    var app = new angular.module("NewAlbumForm", []);
    app.directive("newAlbumForm", function () {
	return {
	    "restrict": "E",
	    "templateUrl": "js/newAlbumForm.html",
	    "controller": function () {
		this.createNewAlbum = function(album) {
		    this.albumName = album.name;
		    this.albumDescription = album.description;
		    this.albumStartDate = album.startDate;
		    this.albumEndDate = album.endDate;
		    console.log(this.albumName,
			       this.albumDescription,
			       this.albumStartDate,
			       this.albumEndDate);
		};
	    },
	    "controllerAs": "albumForm"
	};
    });
}())
