

var ctr = 0;

var width = window.innerWidth;
var height = window.innerHeight;


$(document).ready(function() {
	$('#loading').hide();
	
	center($('#image'))		


	$('#words').css({
		fontSize:height/8,
		color:'white',
		width:width,
		height:height,
		position:'fixed',
		textAlign:'center',	
		paddingTop:height/2-(height/16*2),
	});
	
	var edge = height;
	$('#color').css({
		height: height,
		width:width,
	});
	
	cycle();

	$(document).mousemove(function() {
		cycle();
	});

})


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
	if (ctr%2) {
		$('#image').show();
		$('#words').hide();
	} else {
		$('#words').show();
		//$('#words').css({color:getRandomColor()});
		$('#image').hide();
	}
	set_background_color();
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
