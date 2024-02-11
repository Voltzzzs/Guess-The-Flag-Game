const easer = document.getElementById("ease")
const normal = document.getElementById("normal")
const hard = document.getElementById("hard")
const fp = document.getElementById("inicio")
const resp = document.getElementsByClassName("rep")
/*Flags*/

const Dinamarca = document.querySelector

/*Flags*/

function blackp1() {
    fp.style.display = "none";

    Array.from(resp).forEach((element) => {
        element.style.display = "grid";
    });
}



easer.addEventListener("click", blackp1)



