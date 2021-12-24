var root = document.documentElement;

function adjustHead() {
	document.getElementById("searchbar").style.marginLeft = (window.innerWidth / 2) - (document.getElementById("logo").offsetWidth) - (document.getElementById("searchbar").offsetWidth / 2) + "px";
	document.getElementById("spotlight-panel").style.marginLeft = (window.innerWidth / 2) - (document.getElementById("spotlight-panel").clientWidth / 2) + 24 + "px";
	document.getElementById("shopnowbtn").style.marginLeft = (window.innerWidth / 2) - (document.getElementById("shopnowbtn").clientWidth / 2) + "px";
	console.log((window.innerWidth - document.getElementById("spotlight-panel").clientWidth) / 2)
	console.log(window.innerWidth);
	console.log(document.getElementById("spotlight-panel").clientWidth);
}
