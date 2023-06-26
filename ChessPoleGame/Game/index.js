let pol;
let opens;

function object(elem){
	let pole = document.getElementById(elem);

	return pole;
}

function auids(aui){
	let audio = new Audio(aui);
	audio.play();

	return audio;
}

let start = object('start');

start.onclick = function Start(){

	start.onclick = function(){
		start.style.background='#6E1318';
		auids('audi/Errors.mp3');
	}

	let poin = 0;
	let poin2 = 0;
	let poinAnd = 0;
	let ai = {}
	for (let i = 0; i <= 8; i++) {
		for (let a = 1; a <= 8; a++) {
			if (i <= 1) {
				let loges1 = "a" + a;
				let loges2 = object('a'+a);
				ai[loges1] = loges2;
			}else if (i <= 2){
				let loges1 = "b" + a;
				let loges2 = object('b'+a);
				ai[loges1] = loges2;
			}else if (i <= 3){
				let loges1 = "c" + a;
				let loges2 = object('c'+a);
				ai[loges1] = loges2;
			}else if (i <= 4){
				let loges1 = "d" + a;
				let loges2 = object('d'+a);
				ai[loges1] = loges2;
			}else if (i <= 5){
				let loges1 = "e" + a;
				let loges2 = object('e'+a);
				ai[loges1] = loges2;
			}else if (i <= 6){
				let loges1 = "f" + a;
				let loges2 = object('f'+a);
				ai[loges1] = loges2;
			}else if (i <= 7){
				let loges1 = "g" + a;
				let loges2 = object('g'+a);
				ai[loges1] = loges2;
			}else if (i <= 8){
				let loges1 = "h" + a;
				let loges2 = object('h'+a);
				ai[loges1] = loges2;
			}
		}
	}
	let cordsx = {
		poleY_corA: document.querySelector('.poleY_corA'),
		poleY_corB: document.querySelector('.poleY_corB'),
		poleY_corC: document.querySelector('.poleY_corC'),
		poleY_corD: document.querySelector('.poleY_corD'),
		poleY_corE: document.querySelector('.poleY_corE'),
		poleY_corF: document.querySelector('.poleY_corF'),
		poleY_corG: document.querySelector('.poleY_corG'),
		poleY_corH: document.querySelector('.poleY_corH'),
	};
	for (let i = 0; i <= 8; i++){
		let loge1 = "Ycor"+i;
		let loge2 = object('poleY_cor'+i);
		cordsx[loge1] = loge2;
	}
	let tims = object('tims');
	let timss = object('timss');
	let points = object('points');
	let pointss = object('pointss');
	let Result = object('Result');
	let dosca = object('dosca');
	let NameText = object('NameText');
	let Rest = object('Rest');
	let Coord = object('Coord');
	let dameg = object('dameg');
	let poles = {};
	for (let i = 1; i <= 8; i++) {
		for (let a = 1; a <= 8; a++) {
			if (i <= 1) {
				let loge1 = "a" + a;
				poles[loge1] = loge1;
			}else if (i <= 2){
				let loge2 = "b" + a;
				poles[loge2] = loge2;
			}else if (i <= 3){
				let loge3 = "c" + a;
				poles[loge3] = loge3;
			}else if (i <= 4){
				let loge4 = "d" + a;
				poles[loge4] = loge4;
			}else if (i <= 5){
				let loge5 = "e" + a;
				poles[loge5] = loge5;
			}else if (i <= 6){
				let loge6 = "f" + a;
				poles[loge6] = loge6;
			}else if (i <= 7){
				let loge7 = "g" + a;
				poles[loge7] = loge7;
			}else if (i <= 8){
				let loge8 = "h" + a;
				poles[loge8] = loge8;
			}
		}
	}

	let auud = {
		aui1: 'audi/aui1.m4a',
		aui2: 'audi/aui2.m4a',
		aui3: 'audi/aui3.m4a',
		aui4: 'audi/aui4.m4a',
		aui5: 'audi/aui5.m4a',
		aui6: 'audi/aui6.m4a'
	};

	function getRandomA() {
		let keyss = Object.keys(auud);
		let randomIndex = Math.floor(Math.random() * keyss.length);
		let Indes = auud[keyss[randomIndex]];
		auids(Indes);
		return auud[keyss[randomIndex]];
	}

	function corP(elems){
		Result.innerHTML = elems;
	}

	let ti = 0;
	function auido(){
		ti++;
		if (ti == 1) {
			//getRandomA();
		} else if (ti >= 1){

		}
	}

	let setin1;
	let setin2;
	let ul = 0;
	function time(){
		ul++;
		if (ul==1) {
			let min = 1;
			tims.innerHTML = "0"+min+":";
			let secun = 60;
			timss.innerHTML = '59';
			setin1 = setInterval( function minut(){
				min--;
				if (min <= 9) {
					if (min == -1){
						clearInterval(setin1);
					}
					tims.innerHTML = "0"+min+":";
				}
			},60000);
			setin2 = setInterval( function secuns(){
				secun--;
				if (secun <= 9) {
					timss.innerHTML = '0'+secun;
					if (secun == 0) {
						timss.innerHTML = '59';
						if (secun == 0 && min == -1) {
							clearInterval(setin2);
							ul = 0;
							min = 1;
							over();
							timss.innerHTML = '00';
						}
						secun = 60;
					}
				}else if (secun >= 10){
					timss.innerHTML = secun;
				}
			},1000);
		}
		
	}
	
	function res(){
		auids('audi/ress.mp3');
		getRandomP();
		clearInterval(setin1);
		clearInterval(setin2);
		min = 0;
		secun = 0;
		ul = 0;
		tims.innerHTML = '00:';
		timss.innerHTML = '00';
		poinAnd = 0;
		poin = 0;
		poinAnd = 0;
		points.innerHTML = '0';
		dameg.innerHTML = '0';
	}
	function over(){
		auids('audi/eab.mp3');
		getRandomP();
		clearInterval(setin1);
		clearInterval(setin2);
		min = 0;
		secun = 0;
		ul = 0;
		tims.innerHTML = '00:';
		timss.innerHTML = '00';
		poinAnd = 0;
		poin = 0;
		poinAnd = 0;
		points.innerHTML = '0';
		dameg.innerHTML = '0';
	}

	let ql = 0;
	Coord.onclick = function(){
		ql++
		if (ql == 1) {
			auids('audi/opans.mp3');
			cordsx.Ycor8.innerHTML="";
			cordsx.Ycor1.innerHTML="";
			cordsx.Ycor2.innerHTML="";
			cordsx.Ycor3.innerHTML="";
			cordsx.Ycor4.innerHTML="";
			cordsx.Ycor5.innerHTML="";
			cordsx.Ycor6.innerHTML="";
			cordsx.Ycor7.innerHTML="";
			cordsx.poleY_corA.innerHTML="";
			cordsx.poleY_corB.innerHTML="";
			cordsx.poleY_corC.innerHTML="";
			cordsx.poleY_corD.innerHTML="";
			cordsx.poleY_corE.innerHTML="";
			cordsx.poleY_corF.innerHTML="";
			cordsx.poleY_corG.innerHTML="";
			cordsx.poleY_corH.innerHTML="";
		
		}else if (ql == 2){
			auids('audi/door.mp3');
			cordsx.Ycor8.innerHTML="8";
			cordsx.Ycor1.innerHTML="1";
			cordsx.Ycor2.innerHTML="2";
			cordsx.Ycor3.innerHTML="3";
			cordsx.Ycor4.innerHTML="4";
			cordsx.Ycor5.innerHTML="5";
			cordsx.Ycor6.innerHTML="6";
			cordsx.Ycor7.innerHTML="7";
			cordsx.poleY_corA.innerHTML="A";
			cordsx.poleY_corB.innerHTML="B";
			cordsx.poleY_corC.innerHTML="C";
			cordsx.poleY_corD.innerHTML="D";
			cordsx.poleY_corE.innerHTML="E";
			cordsx.poleY_corF.innerHTML="F";
			cordsx.poleY_corG.innerHTML="G";
			cordsx.poleY_corH.innerHTML="H";
			ql = 0;
		}
	}

	dosca.addEventListener("click", function(event) {
		let clicks = event.target;
		pol = clicks.id;
		corP(pol);
		time();
		auido();
		auids('audi/but.mp3');
		if (pol == opens) {
    		getRandomP();
    		poin++;
    		points.innerHTML = poin;
    		if (poin > poin2) {
    			poin2 = poin;
    			pointss.innerHTML = poin2;
    		}
  		} else if(pol != opens) {
  			auids('audi/gravs.mp3');
  			poinAnd++;
  			dameg.innerHTML = poinAnd;
  			if(poinAnd == 5){
  				alert('GAME OVER');
  				over();
  			}
  		}
	});

	function getRandomP() {
		let keyss = Object.keys(ai);
		let randomIndex = Math.floor(Math.random() * keyss.length);
		let Indes = ai[keyss[randomIndex]];
		opens = Indes.id;
		NameText.innerHTML = opens;
		return ai[keyss[randomIndex]], opens;
	}

	NameText.innerHTML = getRandomP();

	Rest.onclick = function(){res()};
}