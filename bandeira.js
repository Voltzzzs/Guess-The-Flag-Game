const easer = document.getElementById("ease")
const normal = document.getElementById("normal")
const hard = document.getElementById("hard")
const fp = document.getElementById("inicio")
const resp = document.getElementsByClassName("rep")

/*Flags*/

const Dinamarca = document.getElementById("Dinamarca")
const UK = document.getElementById("ReinoU")
const BR = document.getElementById("Brasil")
const SRI = document.getElementById("Srilanka")




let flaggers = [Dinamarca,UK,BR,SRI]
let flaggersstring = ["Dinamarca","UK","Brasil","Sri Lanka"]



function randomNumforFlags(){
    let randomNum = Math.round(Math.random()*3)
    return randomNum;
}




function ShowFlag(element){
   flaggers[element].style.display = "flex"
}




/*Flags*/




/*Opc*/
const op1 = document.getElementById("op1")
const op2 = document.getElementById("op2")
const op3 = document.getElementById("op3")
const op4 = document.getElementById("op4")
const options = [op1,op2,op3,op4]

function RandomOptions (){
    let randompt = Math.round(Math.random()*3)
    return randompt;
}

let othersOp = []

/*Opc*/








/**/

/*PaG1*/
function blackp1() {
    fp.style.display = "none";

    Array.from(resp).forEach((element) => {
        element.style.display = "grid";
    });
     
}







function Gaming(){

    let randomCARALHO = randomNumforFlags()
    let RandomOption = RandomOptions()
    let ArrayforFlags = []
    let ArrayforOpt = []

    ShowFlag(randomCARALHO)

    options[RandomOption].textContent = flaggersstring[randomCARALHO]
    
    ArrayforOpt.push(RandomOption)


    function WrongAnswers(OpcaoAleatoria) {
        let randomNum;
        let Options = [];
        let Flags = [];
    
        Options.push(OpcaoAleatoria)
    
        do {
          randomNum = Math.floor(Math.random() * 4)
    
          if(!Options.includes(randomNum)){
    
    
    
    
         do {
    
            let randomWrongFlag = Math.floor(Math.random() * 4)
            options[randomNum].textContent = flaggersstring[randomWrongFlag]
            
        } while (Flags.length < 3)
    
    
    
    
    
    
             Flags.push(randomWrongFlag)
             Options.push(randomNum)
          }
    
        } while (Options.length < 3);
    
    }




    
}
      







easer.addEventListener("click", function(){
    blackp1()
    Gaming()
})
/*PaG1*/






/*Easy*/








/*Easy*/


