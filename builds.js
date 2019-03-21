$(document).ready(function(){
	$('#show_build_button').click(function(){
		$('#relevant_build').css("display", "none");
		
		var game = document.querySelector('input[name="game"]:checked').value;
		var build = document.querySelector('input[name="content"]:checked').value;
		var progression = document.querySelector('input[name="progression"]:checked').value;
		var results = 'https://raw.githubusercontent.com/Marotheit/Terraria-at-a-Glance/master/builds/'+game+'_'+build+'_'+progression+'.txt';
		
		jQuery.get(results, function(data){
			$('#relevant_build').html(data);
			$('#relevant_build').css("display", "block");
		});
	});
});