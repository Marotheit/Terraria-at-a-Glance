function showModal(){
	var modal = document.getElementById('modal');
	modal.style.display = "block";
}

function hideModal(){
	var modal = document.getElementById('modal');
	modal.style.display = "none";
}

window.onclick = function(event){
	var span = document.getElementById('modal_close_button')[0];
	if (event.target == modal){
		modal.style.display = "none";
	}
}