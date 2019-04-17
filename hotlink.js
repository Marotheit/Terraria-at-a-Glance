$(document).ready(function(){
	$('#create_link_button').click(function(){
		
		var game = document.querySelector('input[name="game"]:checked').value;
		var build = document.querySelector('input[name="content"]:checked').value;
		var progression = document.querySelector('input[name="progression"]:checked').value;
		var results = 'https://marotheit.github.io/Terraria-at-a-Glance/?game='+game+'&content='+build+'&progression='+progression;
		
		var dummy = $('<input>').val(results).appendTo('body').select();
		document.execCommand('copy');
	});
});