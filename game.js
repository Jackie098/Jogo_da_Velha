const player1 = "X";
const player2 = "O";
var playTime = player1;
var gameOver = false;

atualizaMostrador();
inicializarEspaco();

var vencedor = "";

function atualizaMostrador(){
    if(gameOver){
        return;
    }
    if(playTime == player1){
        var player = document.querySelector("div#mostrador img");
        player.setAttribute("src","imagens/x_vermelho_80x80.png");
    }else if(playTime == player2){
        var player = document.querySelector("div#mostrador img");
        player.setAttribute("src","imagens/bola_azul_80x80.png");
    }
}

function inicializarEspaco(){
    var espacos = document.getElementsByClassName("espaco");
    
    for(espaco of espacos){
        espaco.onclick = function(){
            if(gameOver){return;}

            if(playTime == player1) {
                this.innerHTML = "<img src='imagens/x_vermelho.png'>";
                this.setAttribute("jogada",player1);
                playTime = player2;
            }else{
                this.innerHTML = "<img src='imagens/bola_azul_110x110.png'>";
                this.setAttribute("jogada",player2);
                playTime = player1;
            }
            atualizaMostrador();
            verificarVencedor();
        }
    } 
}

async function verificarVencedor(){
    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var A1 = document.getElementById("a1");
    var A2 = document.getElementById("a2");
    var A3 = document.getElementById("a3");
    var B1 = document.getElementById("b1");
    var B2 = document.getElementById("b2");
    var B3 = document.getElementById("b3");
    var C1 = document.getElementById("c1");
    var C2 = document.getElementById("c2");
    var C3 = document.getElementById("c3");

    if((a1==b1 && a1==c1 && a1!="") || (a1==a2 && a1==a3 && a1!="") || (a1==b2 && a1==c3 && a1!="")){
        vencedor = a1;
        if(a1==b1 && a1==c1){
            if(vencedor == "X"){
                A1.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
                B1.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
                C1.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
            }else if(vencedor == "O"){
                A1.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
                B1.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
                C1.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
            }
        }else if(a1==a2 && a1==a3){
            if(vencedor == "X"){
                A1.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
                A2.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
                A3.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
            }else if(vencedor == "O"){
                A1.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
                A2.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
                A3.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
            }
        }else if(a1==b2 && a1==c3){
            if(vencedor == "X"){
                A1.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
                B2.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
                C3.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
            }else if(vencedor == "O"){
                A1.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
                B2.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
                C3.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
            }
        }
    }else if((b2==b1 && b2==b3 && b2!="") || (b2==a2 && b2==c2 && b2!="") || (b2==a3 && b2==c1 && b2!="")){
        vencedor = b2;
        if(b2==b1 && b2==b3){
            switch(vencedor){
                case "X":
                    B1.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
                    B2.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
                    B3.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
                        break;
                case "O":
                    B1.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
                    B2.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
                    B3.style.backgroundColor= "rgba(17, 0, 255, 0.404)"
            }
        }else if(b2==a2 && b2==c2){
            if(vencedor == "X"){
                A2.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
                B2.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
                C2.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
            }else if(vencedor == "O"){
                A2.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
                B2.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
                C2.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
            }
        }else if(b2==a3 && b2==c1){
            if(vencedor == "X"){
                A3.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
                B2.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
                C1.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
            }else if(vencedor == "O"){
                A3.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
                B2.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
                C1.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
            }
        }
    }else if ((c3==b3 && c3==a3) || (c3==c2 && c3==c1 && c3!="")) { 
        vencedor = c3;
        if(c3==b3 && c3==a3){
            if(vencedor == "X"){
                A3.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
                B3.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
                C3.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
            }else if(vencedor == "O"){
                A3.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
                B3.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
                C3.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
            }
        }else if(c3==c2 && c3==c1){                           
            if(vencedor == "X"){
                C1.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
                C2.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
                C3.style.backgroundColor= "rgba(255, 0, 0, 0.404)";
            }else if(vencedor == "O"){
                C1.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
                C2.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
                C3.style.backgroundColor= "rgba(17, 0, 255, 0.404)";
            }
        }
    }else if ((a1 && a2 && a3 && c1 && c2 && c3 && b1 && b2 && b3) && a1 !=""){
        await sleep(50);
        alert(" Deu velha!");
    }

    if(vencedor != ""){
        gameOver = true;

        await sleep(50); //Em ms

        alert("O ganhador foi o: '" +vencedor+"'");
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

var reset = document.querySelector('button');
reset.onclick = function(){
    
    gameOver = false;
    vencedor = "";
    playTime = player1;

    var espacos = document.getElementsByClassName("espaco");
    for( espaco of espacos){
        espaco.style.backgroundColor = 'rgba(169, 169, 169, 0.301)';
        espaco.innerHTML = "";
        espaco.setAttribute('jogada','');
    }

    inicializarEspaco();
    atualizaMostrador();

    console.log("RESET clicado") ;   
    console.log(`Vencedor: ${vencedor} \nGameOver: ${gameOver} \nJogador: ${playTime}` );      
}
