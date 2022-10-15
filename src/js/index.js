/*
    OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior


    

*/

//console.log(document);

// - passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

const abas = document.querySelectorAll(".aba");


abas.forEach(aba => {

    // - passo 2 - dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;

        }
        // passo 3 e 4
        selecionarAba(aba);

        // passo 5 e 6
        mostrarInformacaoAba(aba);

        

    });
});

function selecionarAba(aba){
    // - passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    // - passo 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionado");
}

function mostrarInformacaoAba(aba){
    // - passo 5 - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");


    // - passo 6 - mostrar o conteúdo da aba selecionada

    const idElementoDeInfoAba = `info-${aba.id}`;

    const infoASerMostrada = document.getElementById(idElementoDeInfoAba);
    infoASerMostrada.classList.add("selecionado");
}