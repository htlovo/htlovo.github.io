function a() {
	var arc=document.getElementsByClassName('picture-text')[0];
	var li=arc.getElementsByTagName('li');
	for (var i = 0; i < li.length; i++) {
		li[i].onclick=function(){b(this);}
	}
}
function b(c) {
	var arc=document.getElementsByClassName('picture-text')[0];
	var li=arc.getElementsByTagName('li');
	for (var i = 0; i < li.length; i++) {
		var d=li[i].getElementsByTagName("img")[0];
		d.setAttribute("style","display:none;");
	}
	d=c.getElementsByTagName("img")[0];
	d.style.display="inline-block";
	d.style.cssFloat="right";
}
window.onload=a;