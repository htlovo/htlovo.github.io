	var board = document.getElementById('board');
	var square = board.getElementsByTagName('div');
	var playerTxt= document.getElementById('player').firstChild;
	var startTxt=document.getElementById('start').firstChild;
	var tipTxt=document.getElementById('tip').firstChild;
	var i;
	//黑先
	var piece;
	//定义战况
	var situation=[];
	//胜利条件
	var win=/(1){5,}|1(.{14}1){4,}|1(.{15}1){4,}|1(.{16}1){4,}|0{5}|0(.{14}0){4,}|0(.{15}0){4,}|0(.{16}0){4,}/;