function clicar() {
    let texto = window.document.getElementById('saida');

    let escolha = window.document.getElementById('escolher');
    conversao = Number(escolha.value)

    console.log(escolha);

    switch (conversao) {
        case 0:
            texto.innerHTML = 'DOMINGO';
            texto.style.color = 'blue';
            break;

        case 1:
            texto.innerHTML = 'SEGUNDA-FEIRA';
            break;

        case 2:
            texto.innerHTML = 'TERÇA-FEIRA';
            break;

        case 3:
            texto.innerHTML = 'QUARTA-FEIRA';
            break;
        case 4:
            texto.innerHTML = 'QUINTA-FEIRA';
            break;
        case 5:
            texto.innerHTML = 'SEXTA FEIRA';
            break;
        case 6:
            texto.innerHTML = 'SÁBADO';
            break;
    }
}
//alt + shift + s