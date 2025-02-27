let fundo = window.document.getElementsByTagName('body')[0];
let a= window.document.getElementById('area');
a.addEventListener('click', clicar)


function clicar(){
    a.innerText= 'CLICOU!'
    a.style.background='aquamarine'
    fundo.style.background='cadetblue'
}