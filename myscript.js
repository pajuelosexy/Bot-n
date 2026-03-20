let valorActual=10
document.getElementById("contador").innerHTML=valorActual



function incrementar(){

    valorActual=valorActual + 1;
    document.getElementById("contador").innerHTML=valorActual
}

function restar(){

    valorActual=valorActual +-1;
    document.getElementById("contador").innerHTML=valorActual
}