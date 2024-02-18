const { rejects } = require("assert");
const EventEmitter = require("events");
// definindo uma classe MeuEmissor que herda de EventEmitter
//  isso significa que agora a classe pode usar metodos e propiedades do EventEmitter
class MeuEmissor extends EventEmitter {}

//  criando uma instania de MeuEmissor
const meuEmissor = new MeuEmissor();
const nomeEvento = "usuario:click";

meuEmissor.on(nomeEvento, function (click) {
  console.log("O usuario clicou", click);
});

// meuEmissor.emit(nomeEvento, 'na barra de rolagem')
// meuEmissor.emit(nomeEvento, 'no ok')

// let count = 0

// setInterval(function() {
//     meuEmissor.emit(nomeEvento, 'no ok' + (count++))
// }, 1000)

// process.openStdin() -> permite ler oq o usuario digita no terminal
const stdin = process.openStdin();
function main() {
  return new Promise(function (resolve, reject) {
    stdin.addListener("data", function (value) {
      console.log(`Voce digitou: ${value.toString().trim()}`);
      return resolve(value);
    });
  });
}

main().then(function(resultado) {
    console.log('resultado', resultado.toString());
})