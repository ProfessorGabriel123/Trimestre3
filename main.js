function tocaSom(Seletoraudio){
const elementodeaudio = document.querySelector(Seletoraudio).play() 
if(elementodeaudio===null){alert('elemento não encontrado');}
if(elementodeaudio!=null && elementodeaudio==='audio'){ elementodeaudio.play();
}
}
const listaDeTeclas = document.querySelectorAll('.tecla'); //criando uma constante camada listadeteclas armazenando tdodas as teclas
for(let a=0; a<=listaDeTeclas.length;a++) //a diferença é que quando ocorre uma repetição a=a+1 acontece no final, alem de poder declarar uma variavel ja no incicio
{
    const tecla = listaDeTeclas[a];
    const instrumento = tecla.classList[1];
    const iDaudio = `#som_${instrumento}`;
    //aqui criamos um texto dinamido onde o som é fico mas com o $ invocamos o listaDeTeclas[a].classList[1] este recurso do java chama-se template string
    tecla.onclick=funcion(){
        tocaSom(iDaudio);
    }
    tecla.onkeydown = funcion(evento){//se a tecla for ativada adicione ativa na classe dos botoes
        if((evento.code === 'Space')||(evento.code === 'Enter')){tecla.classList.add('ativa')}// nte que ou é substituido por ||
    }
    tecla.onkeyup = function(){//se a tecla deixar de ser precionada remover ativa na classe dos botoes
        tecla.classList.remove('ativa')
    }
    /*console.log(a)//exibe uma mensagem direto no console */
}