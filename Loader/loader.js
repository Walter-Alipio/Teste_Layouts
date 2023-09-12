const processar = (id) =>{
    var botoes = document.getElementsByClassName(id);
    for (var i = 0; i < botoes.length; i++) {
        botoes[i].disabled = true;
    }

    // Exibir o pop-up com o gif animado
    var overlay = document.createElement("div");
    overlay.classList.add("overlay");
    var loader = document.createElement("div");
    loader.classList.add("loader");
    overlay.appendChild(loader);
    document.body.appendChild(overlay);

    // Simular um tempo de processamento
    setTimeout(function () {
        // Remover o pop-up
        document.body.removeChild(overlay);

        // Habilitar os botões novamente
        for (var i = 0; i < botoes.length; i++) {
            botoes[i].disabled = false;
        }
    }, 2000); // Tempo de load em milissegundos (2 segundos)
}