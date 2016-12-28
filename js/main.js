var isA = document.getElementById("isA");
var isB = document.getElementById("isB");
var pSalida = document.getElementById("salida");



function calcular() {
    var valisA = isA.value;
    var valisB = isB.value;

    //var isaSmile = true;
    //var isbSmile = false;


    if (valisA == "" || valisB == "") {
        isA.placeholder="Rellenar el campo!";
        isA.style.backgroundColor = "rgba(247, 118, 23, 0.2)";
        isB.placeholder="Rellenar el campo!";
        isB.style.backgroundColor = "rgba(247, 118, 23, 0.2)";
    } else {
        isB.style.backgroundColor = "#fff";
        isA.style.backgroundColor = "#fff";

      if (valisA == "1" && valisB == "2") {
            pSalida.innerHTML = "1";
        } 
        
        else if (valisA == "2" && valisB == "2") {
            pSalida.innerHTML = "1";
        }

         else if (valisA == "2" && valisB == "1") {
            pSalida.innerHTML = "1";
        }
        
        else {
            pSalida.innerHTML = "0";
        }
    }
}