var setaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("Leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementsById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")


function RolarParaDireita() {
   
    samantha.style ="display:none"
    leonardo.style ="display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"

}

function RolarParaEsquerda() {
    samantha.style ="displayflex"
    leonardo.style ="display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none; margin-top:55px"

}
