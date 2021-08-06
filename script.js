const getPlayerName = document.getElementById("nomeJogador")
const getBtnAddPlayer = document.getElementById("enviaJogador");

getBtnAddPlayer.addEventListener('click',(e)=>{
    e.preventDefault();
    let nomePlayer = getPlayerName.value;
    if(nomePlayer ==='' || nomePlayer === null){
     return   
    }else{
        jogadores.push({nome:nomePlayer,vitorias: 0, empates: 0, derrotas: 0, pontos: 0})
        getPlayerName.value = '';
        exibirJogadoresNaTela(jogadores);
    }
});
let jogadores = [];

function calcularPontos(jogador){
    let pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

function exibirJogadoresNaTela(players){
    var html = '';
    for(let i = 0; i < players.length; i++){
        html += "<tr><td>" + players[i].nome + "</td>";
        html += "<td>" + players[i].vitorias + "</td>";
        html += "<td>" + players[i].empates + "</td>";
        html += "<td>" + players[i].derrotas + "</td>";
        html += "<td>" + players[i].pontos + "</td>";
        html += "<td><button onclick='addVitoria("+ i + ")' class='btnEvent'>Vitória</button></td>";
        html += "<td><button onclick='addEmpate("+ i + ")' class='btnEvent'>Empate</button></td>";
        html += "<td><button onclick='addDerrota("+ i + ")' class='btnEvent'>Derrota</button></td>";
        html += "<td><button onclick='zerarTudo("+ i + ")' class='btnEvent'>Zerar</button></td>";
        html += "<td><button onclick='removePlayer("+ i + ")' class='btnEvent'>Remover Jogador</button></td></tr>";
    }
    var getTabela = document.getElementById("tabela-jogadores");
    getTabela.innerHTML = html;
}
exibirJogadoresNaTela(jogadores);

function zerarTudo(i){
    // let jogador = jogadores[i];
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = calcularPontos(jogadores[i]);
    exibirJogadoresNaTela(jogadores)
}
function addVitoria(i){
    let jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calcularPontos(jogador);
    exibirJogadoresNaTela(jogadores)
}

function addEmpate(i){
    let jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calcularPontos(jogador);
    exibirJogadoresNaTela(jogadores);
}
function addDerrota(i){
    let jogador = jogadores[i];
    jogador.derrotas++;
    exibirJogadoresNaTela(jogadores)
}
function removePlayer(i){
    jogadores.splice(i,1);
    exibirJogadoresNaTela(jogadores)
}