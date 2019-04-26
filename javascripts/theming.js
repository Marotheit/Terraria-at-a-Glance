function localTheme(){
	var currentTheme = localStorage.getItem('theme');
	document.getElementById('page_style').setAttribute('href', "https://gitcdn.link/repo/Marotheit/Terraria-at-a-Glance/master/stylesheets/"+currentTheme+".css");
}

function toggleTheme(){
	if(localStorage.getItem('theme') == 'dark'){
		localStorage.setItem('theme', 'light');
		document.getElementById('page_style').setAttribute('href', "https://gitcdn.link/repo/Marotheit/Terraria-at-a-Glance/master/stylesheets/light.css");
	}
	else{
		localStorage.setItem('theme', 'dark');
		document.getElementById('page_style').setAttribute('href', "https://gitcdn.link/repo/Marotheit/Terraria-at-a-Glance/master/stylesheets/dark.css");
	}
}
