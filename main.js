//nossa função tem que armazernar os comando de som 
function tocaSom(idelementoaudio) {
document.querySelector(idelementoaudio).play() 
}
//AO pesquisar o botão com o document.querySelector('.tecla_pom') e clicar nele, .onclick, ele vai puchar a referencia tocaSomPom que é a função criada inicialmente
function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play()
}
// Ao usar as duas varras voce esta comentando
document.querySelector('.tecla_pom');
//document. serve para encontrar o arquivo
//Se for uma Teg coloque o nome da teg direto EX document.querySelector('h1')
//Se for o nome da Classe coloque o ponto junto EX document.querySelector('.tecla_pom')
//Se for um Id utilise o # Ex document.querySelector('# tecla_pom')
document.querySelectorAll('.tecla');
/*Este comando pesquesa todos os elementos com a classe tecla*/

const listaDeTeclas = document.querySelectorAll('.tecla'); //criando uma constante camada listadeteclas armazenando tdodas as teclas
var a = 0;
while(a<=listaDeTeclas.length)
{
    const tecla = listaDeTeclas[a];
    const instrumento = tecla.classList[1];
    const iDaudio = `#som_${instrumento}` //aqui criamos um texto dinamido onde o som é fico mas com o $ invocamos o listaDeTeclas[a].classList[1] este recurso do java chama-se template string
    tecla.onclick=funcion(){
        tocaSom('#som_tecla_pom');
    }
    a=a+1;
    console.log(a)//exibe uma mensagem direto no console 
}