
function clicar()
{
    let idade = window.document.getElementById('numero').value;
    let texto= window.document.getElementById('resposta');
     
     
    window.alert('a variavel que eu peguei'+ idade)
    //Usuário digitará sua idade, se tiver menos de 16 anos: 
       //Você não pode votar; 
        
       if(idade<16) 
           {
               texto.innerText='Não pode votar';
          
           }
       //Se tiver menos que 18 e mais que 65:
       // voto Facultativo; 
       else if(idade>15 && idade<18 || idade>=65)
       {
           texto.innerText='Voto Facultativo';
   
       }
     
       else
       {
           texto.innerText='Voto OBRIGATORIO'
      
       }
   
}
//Usuário digitará sua idade, se tiver menos de 16 anos: 
//Você não pode votar; 

//Se não for essas faixas de idade: Voto Obrigatório;