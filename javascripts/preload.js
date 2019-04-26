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
			if(this.value == 'terraria'){
				$("input[type=radio][value=bard]").attr("disabled",true);
				$("input[type=radio][value=healer]").attr("disabled",false);
				$("input[type=radio][value=rogue]").attr("disabled",true);
				$("input[type=radio][value=summoning]").attr("disabled",false);
				$("input[type=radio][value=throwing]").attr("disabled",false);
				$("input[type=radio][value=yo-yo]").attr("disabled",false);
				$('input:radio[name=content]:checked').prop('checked', false);
				$('input:radio[name=progression]:checked').prop('checked', false);
				$("#content_selection").css("display", "block");
			}
			if(this.value == 'calamity_mod'){
				$("input[type=radio][value=bard]").attr("disabled",true);
				$("input[type=radio][value=healer]").attr("disabled",true);
				$("input[type=radio][value=rogue]").attr("disabled",false);
				$("input[type=radio][value=summoning]").attr("disabled",false);
				$("input[type=radio][value=throwing]").attr("disabled",true);
				$("input[type=radio][value=yo-yo]").attr("disabled",true);
				$('input:radio[name=content]:checked').prop('checked', false);
				$('input:radio[name=progression]:checked').prop('checked', false);
				$("#content_selection").css("display", "block");
			}
			if(this.value == 'spirit_mod'){
				$("input[type=radio][value=bard]").attr("disabled",true);
				$("input[type=radio][value=healer]").attr("disabled",true);
				$("input[type=radio][value=rogue]").attr("disabled",true);
				$("input[type=radio][value=summoning]").attr("disabled",false);
				$("input[type=radio][value=throwing]").attr("disabled",false);
				$("input[type=radio][value=yo-yo]").attr("disabled",false);
				$('input:radio[name=content]:checked').prop('checked', false);
				$('input:radio[name=progression]:checked').prop('checked', false);
				$("#content_selection").css("display", "block");
			}
			if(this.value == 'super_terraria_world'){
				$("input[type=radio][value=bard]").attr("disabled",true);
				$("input[type=radio][value=healer]").attr("disabled",true);
				$("input[type=radio][value=rogue]").attr("disabled",true);
				$("input[type=radio][value=summoning]").attr("disabled",true);
				$("input[type=radio][value=throwing]").attr("disabled",true);
				$("input[type=radio][value=yo-yo]").attr("disabled",true);
				$('input:radio[name=content]:checked').prop('checked', false);
				$('input:radio[name=progression]:checked').prop('checked', false);
				$("#content_selection").css("display", "block");
			}
			if(this.value == 'thorium_mod'){
				$("input[type=radio][value=bard]").attr("disabled",false);
				$("input[type=radio][value=healer]").attr("disabled",false);
				$("input[type=radio][value=rogue]").attr("disabled",true);
				$("input[type=radio][value=summoning]").attr("disabled",false);
				$("input[type=radio][value=throwing]").attr("disabled",false);
				$("input[type=radio][value=yo-yo]").attr("disabled",true);
				$('input:radio[name=content]:checked').prop('checked', false);
				$('input:radio[name=progression]:checked').prop('checked', false);
				$("#content_selection").css("display", "block");
			}
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
				$('#create_link_button').css("display", "block");
			}
		});
	}
	
    setTimeout(function() {
        $('#show_build_button').trigger('click');
    },1);
	
});