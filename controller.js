function GerarJogos() {
  var qtdJogos = $("#qtdJogos").val();
  // var qtdJogos = 13;
  var numerosPermetidos = 100;
  var qtdNumeros = 6;
  var jogos = [];
  for (var i = 0; i < qtdJogos; i++) {
    var jogoTemp = [];
    jogoTemp[0] = Math.round(Math.random() * numerosPermetidos);
    jogoTemp[1] = Math.round(Math.random() * numerosPermetidos);
    jogoTemp[2] = Math.round(Math.random() * numerosPermetidos);
    jogoTemp[3] = Math.round(Math.random() * numerosPermetidos);
    jogoTemp[4] = Math.round(Math.random() * numerosPermetidos);
    jogoTemp[5] = Math.round(Math.random() * numerosPermetidos);
    jogos.push(jogoTemp);
  }
  return jogos;
}

function plotaOsJogos(){
  var jogos = GerarJogos();
  for (var j = 0; j < jogos.length; j++) {
    var h = document.createElement("H3")
    var t = document.createTextNode(""+jogos[j]);
    var br = document.createElement("BR")
    h.appendChild(t);
    h.appendChild(br);
    $("#jogos").append(h)
  }
  confereOsJogos();
}

function confereOsJogos(){
  var sorteado = [22,27,33,42,58,59]
  var jogos = GerarJogos();
  var contaQuadra = 0;
  var contaQuina = 0;
  var contaSena = 0;
  var contaAcertou1 = 0;
  var contaAcertou2 = 0;
  var contaAcertou3 = 0;

  for (var i = 0; i < jogos.length; i++) {
    var contaLocal = 0;
    for (var j = 0; j < jogos[i].length; j++) {
      if ($.inArray(jogos[i][j],sorteado) !== -1) {
        contaLocal++;
      }
    }
    switch (contaLocal) {
      case 1:
        contaAcertou1++;
        break;
      case 2:
        contaAcertou2++;
        break;
        case 3:
          contaAcertou3++;
          break;
          case 4:
            contaQuadra++;
            break;
          case 5:
            contaQuina++;
            break;
            case 6:
              contaSena++;
              break;
      default:
      break;
    }
  }
  $("#Acertou1").text(""+contaAcertou1);
  $("#Acertou2").text(""+contaAcertou2);
  $("#Acertou3").text(""+contaAcertou3);
  $("#GanhouQuadra").text(""+contaQuadra);
  $("#GanhouQuina").text(""+contaQuina);
  $("#GanhouSena").text(""+contaSena);
}
