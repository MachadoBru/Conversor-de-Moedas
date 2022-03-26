function Converter() {
  var valor = parseFloat(document.getElementById("valormoeda").value);
  var resultado = document.getElementById("resultadoFinal");
  var select = document.getElementById("moedaSelecionada");
  var moeda = select.options[select.selectedIndex].value;

  var dolar = document.getElementById("dolar").value;
  var euro = document.getElementById("euro").value;
  var libra = document.getElementById("libra").value;
  var bitcoin = document.getElementById("bitcoin").value;

  var cotacaoDolar = parseFloat(4.92).toFixed(2);
  var cotacaoEuro = parseFloat(5.42).toFixed(2);
  var cotacaoLibra = parseFloat(6.52).toFixed(2);
  var cotacaoBitcoin = parseFloat(208423.41).toFixed(2);

  if (moeda == dolar) {
    resultado.innerHTML =
      " O valor de US$" +
      valor +
      " equivale a " +
      (valor * cotacaoDolar).toFixed(2) +
      " reais.";
  } else if (moeda == euro) {
    resultado.innerHTML =
      " O valor de €" +
      valor +
      " equivale a " +
      (valor * cotacaoEuro).toFixed(2) +
      " reais.";
  } else if (moeda == libra) {
    resultado.innerHTML =
      " O valor de £" +
      valor +
      " equivale a " +
      (valor * cotacaoLibra).toFixed(2) +
      " reais.";
  } else if (moeda == bitcoin) {
    resultado.innerHTML =
      "O valor de ₿" +
      valor +
      " equivale a " +
      (valor * cotacaoBitcoin).toFixed(2) +
      " reais";
  }
}