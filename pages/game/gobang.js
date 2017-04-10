(function () {
	var board = document.getElementById('board');
	var square = board.getElementsByTagName('div');
	var start= document.getElementById('start');
	var startTxt= start.firstChild;
	var i;
	//黑先
	var piece=0;
	//定义战况
	var situation=[];
	for (i = 0; i < 240; i++) {
		situation[i]= 2;
	}
	//胜利条件
	var win=/1{5,}|1(.{14}1){4,}|1(.{15}1){4,}|1(.{16}1){4,}|0{5}|0(.{14}0){4,}|0(.{15}0){4,}|0(.{16}0){4,}/;
	for (i = 0; i < square.length; i++) {
		square[i].onclick=play;
	}
	//落子事件
	function play() {
		//改变战况
		var id=Number(this.id.replace("sq",""));
		situation[id] = piece;
		//落子，轮换棋手
		if (piece) {
			this.style.backgroundImage= "radial-gradient(#fff 60%, transparent 0)";
			piece=0;
			startTxt.nodeValue="黑"
		} else {
			this.style.backgroundImage= "radial-gradient(#000 60%, transparent 0)";
			piece=1;
			startTxt.nodeValue="白"
		}
		this.onclick=null;
		//判断战况
		situation=situation.join("");
		if (win.test(situation)) {
			if (Number(win.exec(situation)[0][0])) {
				startTxt.nodeValue="白胜";
				alert("白胜");
			} else {
				startTxt.nodeValue="黑胜";
				alert("黑胜");
			}
			for (i = 0; i < square.length; i++) {
				square[i].onclick=null;
			}
		}
		situation=situation.split("");
	}
})()
