let matheus = {
    nome: 'Matheus',
    vitorias: 2,
    empates: 3,
    derrotas: 2,
    pontos: 0
}
let thais = {
    nome: 'Thais',
    vitorias: 3,
    empates: 4,
    derrotas: 3,
    pontos: 0
}

function calcularPontos(jogador){
    let pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}
matheus.pontos = calcularPontos(matheus);
thais.pontos = calcularPontos(thais);

var jogadores = [matheus,thais];

function exibirJogadoresNaTela(players){
    var html = '';
    for(let i = 0; i < players.length; i++){
        html += "<tr><td>" + players[i].nome + "</td>";
        html += "<td>" + players[i].vitorias + "</td>";
        html += "<td>" + players[i].empates + "</td>";
        html += "<td>" + players[i].derrotas + "</td>";
        html += "<td>" + players[i].pontos + "</td>";
        html += "<td><button onclick='addVitoria("+ i + ")'>Vitória</button></td>";
        html += "<td><button onclick='addEmpate("+ i + ")'>Empate</button></td>";
        html += "<td><button onclick='addDerrota("+ i + ")'>Derrota</button></td>";
        html += "<td><button onclick='zerarTudo("+ i + ")'>Zerar</button></td></tr>";
    }
    var getTabela = document.getElementById("tabela-jogadores");
    getTabela.innerHTML = html;
}
exibirJogadoresNaTela(jogadores);

function zerarTudo(i){
    let jogador = jogadores[i];
    jogador.vitorias = 0;
    jogador.empates = 0;
    jogador.derrotas = 0;
    jogador.pontos = calcularPontos(jogador);
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