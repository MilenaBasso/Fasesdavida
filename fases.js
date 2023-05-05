/*Criança - até 11 anos de idade;
Adolescente - dos 12 até 20 anos de idade;
Adulto - dos 21 até 65 anos de idade;
Idoso - 65 anos ou mais;
*/

var idade;
var resultado;


function fase() {
    idade= document.getElementById("idade").value;
    resultado= document.getElementById("resultado");


    if (idade >1 && idade <= 11) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Você é uma criança, está se preparando para a vida.";
    } else if (idade >= 12 && idade <= 20) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Você é um adolecente, tome cuidado e aproveite essa fase";
    } else if (idade >= 21 && idade <= 65) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/>  Você é um adulto, seja responsável, mas não se cobre tanto!";
    } else if (idade > 65) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/>  Você é um idoso!! <3";
    }
}