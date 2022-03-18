var cartas1 = {
    nome: "Guardião negro",
    imagem:"http://3.bp.blogspot.com/-fdlB53DQD-4/VKGWUzOQkHI/AAAAAAAAAIQ/gS1YXthldCY/s1600/Screenshot_19.png",
    atributos: {
        ataque: 9 ,
        defesa: 12 ,
        magia: 5 ,
        velocidade: 9 ,
        destreza: 8
    }
  }
  
  var cartas2 = {
    nome: "Abelha da morte",
    imagem: "https://kids.pplware.sapo.pt/wp-content/uploads/2018/07/pplware_abelhas02-600x336.jpg",
    atributos: {
      ataque: 8 ,
      defesa: 19 ,
      magia: 9 ,
      velocidade: 16 ,
      destreza: 2
    }
  }
  
  var cartas3 = {
    nome: "Guerreiro das almas",
    imagem: "https://p4.wallpaperbetter.com/wallpaper/418/279/750/dark-souls-ii-art-armor-warrior-wallpaper-preview.jpg",
    atributos: {
      ataque: 10 ,
      defesa: 20 ,
      magia: 9 ,
      velocidade: 20 ,
      destreza: 8
    }
  }
  
  var cartas4 = {
    nome: "Soldado almirante das sombras",
    imagem: "http://pm1.narvii.com/6651/b951af5e57a20780d0b345e91bd333079c2d7ab1_00.jpg",
    atributos:{
      ataque: 12 ,
      defesa: 8 ,
      magia: 23 ,
      velocidade: 13 ,
      destreza: 12
    }
  }

  var cartasMaquina;
  var cartasJogador;
  var cartas = [cartas1, cartas2, cartas3, cartas4];

function sortearCartas() {

  var numeroCartasMaquina = parseInt(Math.random() * 4);
  cartasMaquina = cartas[numeroCartasMaquina];
  
  var numeroCartasJogador = parseInt(Math.random() * 4);
  // enquanto o número da carta maquina for igual ao número da carta jogador.
  // esses objetos irão ficar sorteando novamente.
  while (numeroCartasMaquina == numeroCartasJogador) {
    numeroCartasJogador = parseInt(Math.random() * 4);
  }

  cartasJogador = cartas[numeroCartasJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

exibirCartasJogador();
}
 
function escolhaAtributoSelecionado() {
  var selecioneAtributo = document.getElementsByName("atributo");

  for (var i = 0; i < selecioneAtributo.length; i++) {
    if (selecioneAtributo[i].checked == true) {
     return selecioneAtributo[i].value;
    }
  }
  
}

function jogar() {
  var atributoSelecionado = escolhaAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");

  var valorCartasJogador = cartasJogador.atributos[atributoSelecionado]
  var valorCartasMaquina = cartasMaquina.atributos[atributoSelecionado]

   if (valorCartasJogador > valorCartasMaquina) {
     seuResultado = "<h2 Class='resultadoFinal'> Aobaa! Você venceu... </h2>";
   } else if (valorCartasMaquina > valorCartasJogador){
     seuResultado = "<h2 Class='resultadoFinal'> Ishiiii Triste :( , Você perdeu o valor é maior! </h2>";
   } else {
     seuResultado = "<h2 Class='resultadoFinal'> Sorte sua! Você empatou... </h2>";
   }
       elementoResultado.innerHTML = seuResultado
       document.getElementById('btnSortear').disabled = true;
       document.getElementById('btnJogar').disabled = false ;
      
       exibirCartasMaquina();
  }


function exibirCartasJogador() {
    var divCartasJogador = document.getElementById("carta-jogador");
    divCartasJogador.style.backgroundImage = `url(${cartasJogador.imagem})`
// divCartasJogador.style.backgroundImage = "url("+ cartasJogador.imagem +")"
var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
var tagHTML = "<div id='opcoes' class='carta-status'>"
var opcoesTexto = "";
  for (var atributo in cartasJogador.atributos) {
    opcoesTexto += "<input type='radio'  name='atributo' value='" +  atributo  + "'>" +  atributo  + " | " + cartasJogador.atributos[atributo] + "<br>";
 }
 var nome = `<p class="carta-subtitle">${cartasJogador.nome}</p>`;
 divCartasJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartasMaquina() {
    var divCartasMaquina = document.getElementById("carta-maquina");
    divCartasMaquina.style.backgroundImage = `url(${cartasMaquina.imagem})`
// divCartasMaquina.style.backgroundImage = "url("+ cartasMaquina.imagem +")"
var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
var tagHTML = "<div id='opcoes' class='carta-status'>"
var opcoesTexto = "";
  for (var atributo in cartasMaquina.atributos) {
    opcoesTexto += "<p type='text'  name='atributo' value='" +  atributo  + "'>" +  atributo  + " | " + cartasMaquina.atributos[atributo] + "</p>";
 }
 var nome = `<p class="carta-subtitle">${cartasMaquina.nome}</p>`;
 divCartasMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
