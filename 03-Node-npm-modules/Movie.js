		/* OBSERVER */
		
		function MovieObserver(){

		}

		MovieObserver.prototype.play = function(value){
			console.log("Playing Movie: " + value);
		}

		MovieObserver.prototype.stop = function(){
			console.log("Stoping movie");
		}

		MovieObserver.prototype.newmovie = function(value){
			console.log("New Movie: " + value);
		}

		var Observer = new MovieObserver;

		function DownloadableMovie(){

		}

		DownloadableMovie.prototype = {
			download: function (){
				console.log('Downloading' + this.title);
			},
		}


		function extend(destination, source) {
			for (var k in source) {
				if (source.hasOwnProperty(k)) {
					destination[k] = source[k];
				}
			}
		}

		/* MOVIE CLASS */

		var Movie = function(){
			var title = '';
			var hashmap = ''
			var actor = ["Michael Douglas", "Robert D'Niro","Nicolas Cage", "Jack Nicolson"];
		};
		Movie.prototype = {
			set : function(key, value){
				Observer.newmovie(value);
				Movie.title = value;
			},
			get : function(key){
				return Movie[key];
			},
			play : function(){
				Observer.play(Movie.title);
			},
			stop : function(){
				Observer.stop();
			},
			share : function(name){
				console.log("Sharing " + Movie.title + " with " + name);
			}
		}