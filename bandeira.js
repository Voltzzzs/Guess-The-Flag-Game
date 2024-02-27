const easer = document.querySelector("#ease");
const normal = document.querySelector("#normal");
const hard = document.querySelector("#hard");
const fp = document.querySelector("#inicio");
const resp = document.querySelectorAll(".rep");
const pont = document.querySelector("#Pontos");
const Npont = document.querySelector("#NAcertos");
const audio = document.querySelector("#myAudio");

/*Flags*/

/*ImportBandeiras*/
const Dinamarca = document.querySelector("#Dinamarca");
const UK = document.querySelector("#ReinoU");
const BR = document.querySelector("#Brasil");
const SRI = document.querySelector("#Srilanka");
const Port = document.querySelector("#Portugal");
const Spain = document.querySelector("#Spain");
const France = document.querySelector("#France");
const Germany = document.querySelector("#Germany");
const Belgium = document.querySelector("#Belgium");
const Netherlands = document.querySelector("#Netherlands");
const Luxemburg = document.querySelector("#Luxemburg");
const Andorra = document.querySelector("#Andorra");
const Switzerland = document.querySelector("#Switzerland");
const Italy = document.querySelector("#Italy");
/*ImportBandeiras*/

/*Array Bandeiras*/
let flaggers = [
  Dinamarca,
  UK,
  BR,
  SRI,
  Port,
  Spain,
  France,
  Germany,
  Belgium,
  Netherlands,
  Luxemburg,
  Andorra,
  Switzerland,
  Italy,
];

let flaggersstring = [
  "Dinamarca",
  "UK",
  "Brasil",
  "Sri Lanka",
  "Portugal",
  "Espanha",
  "França",
  "Alemanha",
  "Bélgica",
  "Paises Baixos",
  "Luxemburgo",
  "Andorra",
  "Suiça",
  "Itália",
];
/*Array Bandeiras*/



/*Random Numbers Flags/Op*/



/*Flags*/

/*Opc*/
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");
const op4 = document.getElementById("op4");
const options = [op1, op2, op3, op4];

/*Opc*/

/*Functions*/

/**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/
function blackp1() {
  fp.style.display = "none";
  resp.forEach((element) => {
    element.style.display = "grid";
  });
}

/**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/

resp.forEach((element) => {
  element.addEventListener("click", (event) => {
    Repetiton.push(event.target.id);
  });
});

function Gaming() {

  let randomR = randomNumforFlags();
  let randomO = RandomOptions();

  flaggers[randomR].style.display = "flex";

  options[randomO].textContent = flaggersstring[randomR];

  options[randomO].addEventListener("click", CorrectOne);

  WrongAnswers(randomO, randomR);

  function CorrectOne() {
    Npont.textContent++;
    audio.play();
    pisca();
    Gaming();
    options[randomO].removeEventListener("click", CorrectOne)
    console.log(flaggers[randomR])
    console.log(flaggersstring[randomR])
    console.log(randomR)
    flaggers[randomR].style.display = "none";
  flaggers.splice(randomR, 1);
  flaggersstring.splice(randomR, 1);
  }
  
}

/**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/

function WrongAnswers(OpcaoAleatoria, FlagGerada) {
  let Options = [];
  let opcionesFlags = [];
  let Flags = [];
  let randomNums = [];

  Options.push(OpcaoAleatoria);
  Flags.push(FlagGerada);

  do {
    randomNum = RandomOptions();
    if (!Options.includes(randomNum)) {
      randomNums.push(randomNum);
      Options.push(randomNum);
    }
  } while (Options.length < 4);

  do {
    randomFlag = randomNumforFlags();
    if (!Flags.includes(randomFlag)) {
      opcionesFlags.push(randomFlag);
      Flags.push(randomFlag);
    }
  } while (Flags.length < 4);

  for (let i = 0; i < randomNums.length; i++) {
    let optionIndex = randomNums[i];
    let flagIndex = opcionesFlags[i];
    options[optionIndex].textContent = flaggersstring[flagIndex];
  }
}

/**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/ /**/

easer.addEventListener("click", function () {
  Gaming();
  blackp1();
  pont.style.display = "grid";
});

/*No ReP*/
function randomNumforFlags() {
  let randomNum = Math.round(Math.random() * flaggers.length);
  return randomNum;
}

function RandomOptions() {
  let randompt = Math.round(Math.random() * 3);
  return randompt;
}
/*Random Numbers Flags/Op*/

function pisca() {
  pont.classList.add("transition");

  setTimeout(function () {
    pont.classList.remove("transition");
  }, 700);
}
