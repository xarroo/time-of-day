	var dateTime = new Date();
	var hours = dateTime.getHours();
	var message;
	var colour;
	var font;
	var fontColour;
	if (hours <= 5) {
		message = "What are you doing at this hour?";
		colour = "#a0cadf";
		font = "Poiret One";
		fontColour = "#92734c";
	}else if (hours <= 9) {
		message = "Really time to start the day now";
		colour = "#290e23";
		font = "Fontdiner Swanky";
		fontColour = "#753467";
	}else if (hours <= 12) {
		message = "Being effective I hope?";
		colour = "#d0efd3";
		font = "Frijole";
		fontColour = "#a26d7f";
	}else if (hours == 13) {
		message = "Lunch time";
		colour = "#49c2c1";
		font = "Abril Fatface";
		fontColour = "#753815";
	}else if (hours <= 16) {
		message = "Working time, maybe?";
		colour = "#281a0d";
		font = "Knewave";
		fontColour = "#0f6074";
	}else if (hours <= 20) {
		message = "Fun time";
		colour = "#dcbf96";
		font = "Londrina Sketch";
		fontColour = "#45728f";
	}else if (hours <= 22) {
		message = "Not time to sleep yet";
		colour = "#edd4c9";
		font = "Love Ya Like A Sister";
		fontColour = "#68a099";
	}else {
		message = "Thinking about heading to bed?";
		colour = "#dfdaf3";
		font = "Cabin Sketch";
		fontColour = "#8b85a6";
	}
	var body = document.querySelector("body");
	body.style.backgroundColor = colour;
	var heading = document.querySelector("h1");
	heading.style.color = fontColour;
	var p = document.querySelector("p");
	p.style.fontFamily = font;
	var msg = document.getElementById("msg");
	msg.textContent = message;
	
	
	