//function that changes the sites background image with a given url
function changeBackground(url) {
	$(".container").css("background-image","url('"+url+"')");
} // close changeBackground

$(document).ready(function() {

	navigator.geolocation.getCurrentPosition(function(position) {

		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+
			"&units=imperial&APPID=d329d64604abaf4e720fbb15f2a55466", function(weather) {
			console.log(weather);

			//add weather data to html
			$("#location").html(weather.name);
			$("#temperature").html(Math.floor(weather.main.temp) + "°");
			$("#condition").html(weather.weather[0].description);
			$("#weather-icon").html("<img src=http://openweathermap.org/img/w/"+weather.weather[0].icon+".png>");

			//switch to change site background based on weather condition
			switch(weather.weather[0].icon) {
				case "01d":
					changeBackground("https://canoetales.files.wordpress.com/2010/08/missiquoi-081.jpg"); break;
				case "01n":
					changeBackground("http://www.wvgazettemail.com/apps/pbcsi.dll/storyimage/CH/20150423/DM06/150429567/EP/1/2/EP-150429567.jpg"); break;
				case "02d":
					changeBackground("http://2.bp.blogspot.com/-e8q4VGqxqg0/TkUFQcGxyKI/AAAAAAAAAkw/0c_VmB-cgOA/s1600/cloudy-day.jpg"); break;
				case "02n":
					changeBackground("http://hdwallpapersd.com/wp-content/uploads/2015/12/beautiful-night-high-resolution-wallpaper.jpg"); break;
				case "03d":
					changeBackground("http://2.bp.blogspot.com/-e8q4VGqxqg0/TkUFQcGxyKI/AAAAAAAAAkw/0c_VmB-cgOA/s1600/cloudy-day.jpg"); break;
				case "03n":
					changeBackground("http://hdwallpapersd.com/wp-content/uploads/2015/12/beautiful-night-high-resolution-wallpaper.jpg"); break;
				case "04d":
					changeBackground("http://2.bp.blogspot.com/-e8q4VGqxqg0/TkUFQcGxyKI/AAAAAAAAAkw/0c_VmB-cgOA/s1600/cloudy-day.jpg"); break;
				case "04n":
					changeBackground("http://hdwallpapersd.com/wp-content/uploads/2015/12/beautiful-night-high-resolution-wallpaper.jpg"); break;
				case "09d":
					changeBackground("http://onpasture.com/wp-content/uploads/2015/02/rain-04.jpg"); break;
				case "09n":
					changeBackground("http://img.phombo.com/img1/photocombo/1642811/Rain-At-Night-Wallpaper.jpg"); break;
				case "10d":
					changeBackground("http://onpasture.com/wp-content/uploads/2015/02/rain-04.jpg"); break;
				case "10n":
					changeBackground("http://img.phombo.com/img1/photocombo/1642811/Rain-At-Night-Wallpaper.jpg"); break;
				case "11d":
					changeBackground("https://i.ytimg.com/vi/OQ9OzLvLWNc/maxresdefault.jpg"); break;
				case "11n":
					changeBackground("https://www.approvedmedia.net/wp-content/uploads/2014/04/thunderstorm.jpg"); break;
				case "13d":
					changeBackground("http://img.xcitefun.net/users/2014/07/361067,xcitefun-snowing-nature-2.jpg"); break;
				case "13n":
					changeBackground("http://data.hdwallpapers.im/snow_night_lights_wind_winter_roads_gallery.jpg"); break;
				case "50d":
					changeBackground("http://blog.findingthegood.org/wp-content/uploads/2011/04/Mist-lake.jpg"); break;
				case "50n":
					changeBackground("http://blog.findingthegood.org/wp-content/uploads/2011/04/Mist-lake.jpg"); break;
			} //close switch

			$("#tempFarenheit").on("click", function() {
				$("#temperature").html(Math.floor(weather.main.temp)+"°");
				$(this).css({"font-size": ".8em","opacity": "1"});
				$("#tempCelsius").css({"font-size": ".6em","opacity": ".5"});
			}); //close on click

			$("#tempCelsius").on("click", function() {
				$("#temperature").html(Math.floor((weather.main.temp - 32) * (5/9))+"°");
				$(this).css({"font-size": ".8em","opacity": "1"});
				$("#tempFarenheit").css({"font-size": ".6em","opacity": ".5"});
			}); //close on click

		}); //close getJSON

	}); //close getCurrentPosition

}); // close ready()