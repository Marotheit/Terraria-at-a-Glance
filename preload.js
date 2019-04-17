$(document).ready(function(){
	
	var url = new URL(window.location);
	var params = new URLSearchParams(url.search);
	var preloadGame = params.get("game");
	var preloadContent = params.get("content");
	var preloadProgression = params.get("progression");
	
	$("input[name='game']").each(function(index, elem){
		var $radio = $(elem);
		if ($radio.val() === preloadGame){
			$radio.prop("checked", true);
			$("#content_selection").css("display", "block");
		}
	});
	
	if($("input[name='game']:checked")){
		$("input[name='content']").each(function(index, elem){
			var $radio = $(elem);
			if ($radio.val() === preloadContent){
				$radio.prop("checked", true);
				$('#progression_selection').css("display", "block");
			}
		});	
	}
	
	if($("input[name='content']:checked")){
		$("input[name='progression']").each(function(index, elem){
			var $radio = $(elem);
			if ($radio.val() === preloadProgression){
				$radio.prop("checked", true);
				$('#show_build_button').css("display", "block");
			}
		});
	}
	
    setTimeout(function() {
        $('#show_build_button').trigger('click');
    },1);
	
});