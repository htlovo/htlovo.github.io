function a() {
	var arc=document.getElementsByClassName('picture-text')[0];
	var li=arc.getElementsByTagName('li');
	for (var i = 0; i < li.length; i++) {
		var d=li[i].getElementsByTagName("img");
			for (var j = 0; j < d.length; j++) {
				d[j].style.display="none";
			}
		li[i].onclick=function(){b(this);}
	}
}
/*function b(c) {
	var arc=document.getElementsByClassName('picture-text')[0];
	var li=arc.getElementsByTagName('li');
	for (var i = 0; i < li.length; i++) {
		var d=li[i].getElementsByTagName("img");
		for (var j = 0; j < d.length; j++) {
				d[j].style.display="none";
			}
	}
	d=c.getElementsByTagName("img");
	for (var j = 0; j < d.length; j++) {
		d[j].style.display="inline-block";
	}
}*/
function b(c) {
	var d=c.getElementsByTagName("img");
	if (d[0].style.display=="none") {
		for (var j = 0; j < d.length; j++) {
			d[j].style.display="inline-block";
		}
	} else {
		for (j = 0; j < d.length; j++) {
			d[j].style.display="none";
		}
	}
}
window.onload=a;