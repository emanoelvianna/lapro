// TODO: A busca hoje realizada pelo id da div deve ser modificada?
// TODO: também é necessario criar uma mensagem de tubo não encontrado!

function elementoBuscado() {
  return document.getElementById("inputBusca").value;
}

function retornaListaDeItens(argument) {
  return document.getElementsByClassName(argument);
}

var botao = document.getElementById('buscar');
botao.addEventListener("click", function() {
  var elemento = elementoBuscado();
  var listaDeItens = retornaListaDeItens("item");

  console.log(listaDeItens.length);

  var size = listaDeItens.length;
  for (var i = 0; i <= size - 1; i++) {
    if (listaDeItens[i].textContent == elemento) {
      return destacaElemento(elemento);
    }
  }
  console.log("Item não encontrado!");
});

function destacaElemento(elemento) {
  var listaDeItens = retornaListaDeItens("item");

  var size = listaDeItens.length;
  for (var i = 0; i <= size - 1; i++) {
    if (listaDeItens[i].textContent != elemento) {
      listaDeItens[i].style.display = "none";
    }

  }
}
