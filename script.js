

var ctr = 0;

var width = window.innerWidth;
var height = window.innerHeight;

var band_colors = []
var bands = []

$(document).ready(function() {
	$('#loading').hide();
	
	center($('#image'))		

	$('#words').css({
		fontSize:height/8,
		color:'black',
		width:width,
		height:height,
		position:'fixed',
		textAlign:'center',	
	});
	
	var edge = height;

	
	init_color_bands();

	cycle();

	$(document).mousemove(function() {
		cycle();
	});

})


function init_color_bands() {

	
	var band_height = height/256;
	n_bands = Math.round(height*0.7/band_height);
	console.log(n_bands)

	for (var i =0; i<n_bands; i++) {
		var band = $('<div>');
		var color = getRandomColor();
		band_colors.push(color);
		bands.push(band);
		band.css({
			background:'black',
			margin_top: band_height*i,
			height: band_height,
			width:width,
			borderColor: 'black',
			opacity: 0.2,
		});

		$('body').prepend(band);
	}	
	color_bands();

}

function add_new_color() {
	band_colors.push(getRandomColor())
	band_colors.shift()
}

function color_bands() {
	
	for (var i =0; i<bands.length; i++) {
		bands[i].css({
			background:band_colors[i],
		});	
	}
}

function center(el) {
	el.load(function () {
		el.css({
			position: 'fixed',
			left:width/2 - el.width()/2,
			top:height/2 - el.height()/2,
		});
	})
}

function cycle() {
	ctr += 1;
	set_background_color();
	add_new_color();
	color_bands();

}

function set_background_color() {
	$('#color').css({
		backgroundColor:getRandomColor(),
	})
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
