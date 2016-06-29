$(document).ready(function(){
	var numSquares=16;

	function makeGrid(numSquares){
		$("#container").empty();
		for(var x=0; x<numSquares; x++){
			for(var y=0; y<numSquares; y++){
				var unit = $('<div class="square"></div>');
				unit.height(960/numSquares);
				unit.width(960/numSquares);
				unit.appendTo("#container");
			};
		};
		$('.square').mouseenter(function(){
			$(this).css('background','#FFFFFF');
		});
	};
	makeGrid(numSquares);
	
	function clear(){
		$('.square').unbind("mouseenter");
		makeGrid(numSquares);
		$('.square').css('opacity',1)
	};
	
	function randomColor(){
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i=0; i<6; i++){
			color += letters[Math.floor(Math.random()*16)];
		};
		return color;
	};	
	
	$('#b1').click(function(){
		clear();
		makeGrid(16);		
	});
	
	$('#b2').click(function(){
		clear();
		numSquares = prompt('Select number of squares per each row and column',16);
		if ((numSquares>128) || (numSquares<1)){
			numSquares=16;
		};
		makeGrid(numSquares);
	});
	
	$('#b3').click(function(){
		clear();
		$('.square').mouseenter(function(){
			$(this).css('background',randomColor());
		});
	});
	
	$('#b4').click(function(){
		clear();
		$('.square').mouseenter(function(){
			$(this).css('background','#000000');
			var opacity = $(this).css('opacity');
			if(opacity>0){
				$(this).css('opacity',opacity-.1);
			};
		});
	});
	
	$('#b5').click(function(){
		clear();;
	});	
});
