(function () {
    var app = angular.module("Albums",[]);
    var albums = [
	{
	    "title":"Mt. Everest",
	    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor sagittis tempor. Fusce luctus turpis nunc. Vestibulum a metus eget augue imperdiet fringilla eu non ante. Duis orci mauris, tristique iaculis consectetur eu, tempor vel eros. Pellentesque lacinia lacus in lectus faucibus pharetra. Fusce aliquet auctor molestie. Ut cursus eros massa, eu facilisis nunc lobortis nec. Integer elit mauris, porta id urna pretium, consequat molestie diam. Praesent gravida erat nisi, scelerisque mollis libero tincidunt non. Nulla enim lectus, dictum et tellus pretium, vestibulum posuere leo. Maecenas mattis orci at aliquam sollicitudin. Curabitur eleifend sed nisi nec sagittis. Donec consectetur nisi sit amet hendrerit sollicitudin. Etiam vestibulum consectetur blandit.\nSuspendisse laoreet, ipsum quis condimentum dictum, odio lacus lobortis metus, non ultrices nibh lacus et sem. Ut ultrices posuere placerat. Aliquam mattis magna eget purus congue pulvinar. Etiam at blandit lorem. Cras rutrum ipsum a pretium suscipit. Ut at massa metus. Nullam interdum eu sapien nec lobortis. ",
	    "cover":"assets/images/everest.jpg",
	    "startDate":"2014-03-03",
	    "endDate":"2014-05-03",
	    "location":"Mt. K2, Pakistan"
	},
	{
	    "title":"Amazon",
	    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor sagittis tempor. Fusce luctus turpis nunc. Vestibulum a metus eget augue imperdiet fringilla eu non ante. Duis orci mauris, tristique iaculis consectetur eu, tempor vel eros. Pellentesque lacinia lacus in lectus faucibus pharetra. Fusce aliquet auctor molestie. Ut cursus eros massa, eu facilisis nunc lobortis nec. Integer elit mauris, porta id urna pretium, consequat molestie diam. Praesent gravida erat nisi, scelerisque mollis libero tincidunt non. Nulla enim lectus, dictum et tellus pretium, vestibulum posuere leo. Maecenas mattis orci at aliquam sollicitudin. Curabitur eleifend sed nisi nec sagittis. Donec consectetur nisi sit amet hendrerit sollicitudin. Etiam vestibulum consectetur blandit.\nSuspendisse laoreet, ipsum quis condimentum dictum, odio lacus lobortis metus, non ultrices nibh lacus et sem. Ut ultrices posuere placerat. Aliquam mattis magna eget purus congue pulvinar. Etiam at blandit lorem. Cras rutrum ipsum a pretium suscipit. Ut at massa metus. Nullam interdum eu sapien nec lobortis.",
	    "cover":"assets/images/greenery.jpeg",
	    "startDate":"2014-03-03",
	    "endDate":"2014-05-03",
	    "location":"Bandhavgarh"
	},
	{
	    "title":"Books",
	    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor sagittis tempor. Fusce luctus turpis nunc. Vestibulum a metus eget augue imperdiet fringilla eu non ante. Duis orci mauris, tristique iaculis consectetur eu, tempor vel eros. Pellentesque lacinia lacus in lectus faucibus pharetra. Fusce aliquet auctor molestie. Ut cursus eros massa, eu facilisis nunc lobortis nec. Integer elit mauris, porta id urna pretium, consequat molestie diam. Praesent gravida erat nisi, scelerisque mollis libero tincidunt non. Nulla enim lectus, dictum et tellus pretium, vestibulum posuere leo. Maecenas mattis orci at aliquam sollicitudin. Curabitur eleifend sed nisi nec sagittis. Donec consectetur nisi sit amet hendrerit sollicitudin. Etiam vestibulum consectetur blandit.\nSuspendisse laoreet, ipsum quis condimentum dictum, odio lacus lobortis metus, non ultrices nibh lacus et sem. Ut ultrices posuere placerat. Aliquam mattis magna eget purus congue pulvinar. Etiam at blandit lorem. Cras rutrum ipsum a pretium suscipit. Ut at massa metus. Nullam interdum eu sapien nec lobortis. ",
	    "cover":"assets/images/books.png",
	    "startDate":"2014-03-03",
	    "endDate":"2014-05-03",
	    "location":"Crossword, Indiranagar"
	},
	{
	    "title":"Tea Cup",
	    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor sagittis tempor. Fusce luctus turpis nunc. Vestibulum a metuLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor sagittis tempor. Fusce luctus turpis nunc. Vestibulum a metus eget augue imperdiet fringilla eu non ante. Duis orci mauris, tristique iaculis consectetur eu, tempor vel eros. Pellentesque lacinia lacus in lectus faucibus pharetra. Fusce aliquet auctor molestie. Ut cursus eros massa, eu facilisis nunc lobortis nec. Integer elit mauris, porta id urna pretium, consequat molestie diam. Praesent gravida erat nisi, scelerisque mollis libero tincidunt non. Nulla enim lectus, dictum et tellus pretium, vestibulum posuere leo. Maecenas mattis orci at aliquam sollicitudin. Curabitur eleifend sed nisi nec sagittis. Donec consectetur nisi sit amet hendrerit sollicitudin. Etiam vestibulum consectetur blandit.\nSuspendisse laoreet, ipsum quis condimentum dictum, odio lacus lobortis metus, non ultrices nibh lacus et sem. Ut ultrices posuere placerat. Aliquam mattis magna eget purus congue pulvinar. Etiam at blandit lorem. Cras rutrum ipsum a pretium suscipit. Ut at massa metus. Nullam interdum eu sapien nec lobortis. s eget augue imperdiet fringilla eu non ante.",
	    "cover":"assets/images/tea.jpg",
	    "startDate":"2014-03-03",
	    "endDate":"2014-05-03",
	    "location":"Infinitea, Indiranagar"
	}
    ];
    app.controller("AlbumController", function () {
	this.albums = albums;
    });
    app.directive("albums", function () {
	return {
	    "restrict": "E",
	    "templateUrl": "../templates/albums.html"
	};
    });
} ())
