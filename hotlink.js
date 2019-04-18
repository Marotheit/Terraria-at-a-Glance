$(document).ready(function(){
	$('#create_link_button').click(function(){
		
		var game = document.querySelector('input[name="game"]:checked').value;
		var build = document.querySelector('input[name="content"]:checked').value;
		var progression = document.querySelector('input[name="progression"]:checked').value;
		var results = 'https://marotheit.github.io/Terraria-at-a-Glance/?game='+game+'&content='+build+'&progression='+progression;
		
		var dummy = $('<input>').val(results).appendTo('#hotlink_container').select();
		document.execCommand('copy');
	});
});

function linkCopied(){
	var create_link_button = document.getElementById("create_link_button");
	create_link_button.innerHTML = "The link has been copied to your clipboard!"
}