$(document).ready(function(){
	$('input:radio[name=game]').change(function(){
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
			$("#show_build_button").css("display", "none");
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
			$("#show_build_button").css("display", "none");
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
			$("#show_build_button").css("display", "none");
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
			$("#show_build_button").css("display", "none");
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
			$("#show_build_button").css("display", "none");
		}
	});
});

$(document).ready(function(){
	$('input:radio[name=content]').change(function(){
		$('#progression_selection').css("display", "block");
	});
});

$(document).ready(function(){
	$('input:radio[name=progression]').change(function(){
		$('#show_build_button').css("display", "block");
	});
});