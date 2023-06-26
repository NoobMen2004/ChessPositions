function object(elem) {
  let pole = document.getElementById(elem);
  return pole;
}

let but3 = object('but3');

but3.onclick = function Start(){
  function auids(aui){
    let audio = new Audio(aui);
    audio.play();

    return audio;
  }
  let dicr = 0;
  but3.onclick = function Start(){
    dicr++;
    auids('Game/audi/mbut.mp3');
    if (dicr == 1){
      auids('Game/audi/aui'+getRandomD()+'.m4a');
    }
  }
  let playsong = [1,2,3,4,5,6];
  function getRandomD() {
    let randomIndex = Math.floor(Math.random() * playsong.length);
    let Indes = playsong[randomIndex];
    return playsong[randomIndex];
  }


  let ai = {};
  let but1 = object('but1');
  let but2 = object('but2');
  let incr = 0;

  but1.onclick = function activ(){
    auids('Game/audi/eab.mp3');
  }

  but2.onclick = function activ(){
    auids('Game/audi/mbut.mp3');
  }


  for (let i = 0; i <= 8; i++) {
    for (let a = 1; a <= 8; a++) {
      if (i <= 1) {
        let loges1 = "a" + a;
        let loges2 = object('a' + a);
        ai[loges1] = loges2;
      } else if (i <= 2) {
        let loges1 = "b" + a;
        let loges2 = object('b' + a);
        ai[loges1] = loges2;
      } else if (i <= 3) {
        let loges1 = "c" + a;
        let loges2 = object('c' + a);
        ai[loges1] = loges2;
      } else if (i <= 4) {
        let loges1 = "d" + a;
        let loges2 = object('d' + a);
        ai[loges1] = loges2;
      } else if (i <= 5) {
        let loges1 = "e" + a;
        let loges2 = object('e' + a);
        ai[loges1] = loges2;
      } else if (i <= 6) {
        let loges1 = "f" + a;
        let loges2 = object('f' + a);
        ai[loges1] = loges2;
      } else if (i <= 7) {
        let loges1 = "g" + a;
        let loges2 = object('g' + a);
        ai[loges1] = loges2;
      } else if (i <= 8) {
        let loges1 = "h" + a;
        let loges2 = object('h' + a);
        ai[loges1] = loges2;
      }
    }
  }

  function getRandomP() {
    let keyss = Object.keys(ai);
    let randomIndex = Math.floor(Math.random() * keyss.length);
    let Indes = ai[keyss[randomIndex]];
    let colo = Indes;

    if (!colo.originalBackground) {
      colo.originalBackground = colo.style.background; // Сохранить исходный цвет фона
    }

    colo.style.background = 'green'; // Установить новый цвет фона

    setTimeout(function () {
      colo.style.background = colo.originalBackground; // Вернуть исходный цвет фона
    }, 1900);
    incr++;
    return ai[keyss[randomIndex]], colo;
  }

  setInterval(function () {
    getRandomP();
  }, 3000);
}