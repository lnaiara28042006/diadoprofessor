document.addEventListener("DOMContentLoaded", function () {
    var mensagem = document.getElementById("mensagem");
    var mostrarMensagemBtn = document.getElementById("mostrarMensagem");

    mostrarMensagemBtn.addEventListener("click", function () {
        mensagem.innerHTML = "Feliz dia do professor"+
        "Na linha de cada historia da vida"+
        "há sempre um trecho que"+
        "que conta as experiencias "+
        "de um personagem especial,"+
        "os professores."+
        "A influencias"+
        "de bons"+
        "professores"+
        "ninguem consegue"+
        "apagar"+
        "Feliz Dia dos Professores!"
    });
});

