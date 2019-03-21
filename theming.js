function localTheme(){
	var body = document.getElementById('body');
	var currentClass = localStorage.getItem('theme');
	body.className = currentClass;
}

function toggleTheme(){
	if(localStorage.getItem('theme') == 'dark'){
		localStorage.setItem('theme', 'light');
		var body = document.getElementById('body');
		var currentClass = localStorage.getItem('theme');
		body.className = currentClass;
	}
	else{
		localStorage.setItem('theme', 'dark');
		var body = document.getElementById('body');
		var currentClass = localStorage.getItem('theme');
		body.className = currentClass;
	}
}