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
		})
		.fail(function (err){
			$('#relevant_build').html("<div id=\"sorry\">Sorry!</div><div id=\"not_found\">It seems like this guide hasn't been implemented quite yet!<br/><br/>Please check back later, or, if you're feeling adventurous, <a href=\"https://github.com/Marotheit/Terraria-at-a-Glance\">feel free to write it yourself!</a></div>");
			$('#relevant_build').css("display", "block");
		});
	});
});