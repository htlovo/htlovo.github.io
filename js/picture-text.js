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
		li[i].getElementsByTagName("img")[0].setAttribute("style","display:none;");
	}
	c.getElementsByTagName("img")[0].setAttribute("style","display:block;float:right;");
}
window.onload=a;