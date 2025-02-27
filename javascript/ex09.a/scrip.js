let consultar = window.document.getElementById('consultar');
let numero = window.document.getElementById('numero').value;
let texto= window.document.getElementsByTagName('p')[1];
let vel= Number(vel.value)
consultar.addEventListener('click', clicar)

function clicar(){
   
     if(numero<40)
        {
            texto.innerText='Tudo OKAY';
       
        }
    else if(numero<99)
    {
        texto.innerText='Seu carro vai ser Multado';

    }
  
    else(numero>100)
        {
            texto.innerText='Tudo OKAY'
       
        }

   
}