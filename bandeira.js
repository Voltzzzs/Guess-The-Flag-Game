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



function randomF(){
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

function RandomOPT (){
    let randompt = Math.round(Math.random()*3)
    return randompt;
}




/*Opc*/










/*PaG1*/
function blackp1() {
    fp.style.display = "none";

    Array.from(resp).forEach((element) => {
        element.style.display = "grid";
    });
     
    let randomCARALHO = randomF()
    ShowFlag(randomCARALHO)

   
    
    let RandomOption = RandomOPT()


    options[RandomOption].textContent = flaggersstring[randomCARALHO]
    return randomCARALHO
}


easer.addEventListener("click", blackp1)
/*PaG1*/






/*Easy*/

let HasSaw = []
HasSaw.push(flaggers[randomCARALHO])


options[randomCARALHO].addEventListener('click', function a (){
   
})



/*Easy*/


