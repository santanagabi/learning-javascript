/*
0 Obter um usuario
1 Obter o número de telefone de um usuario a partir do seu Id
2 Obter o endereço do usuario pelo Id
*/

//  apos acabar de executar dai chama o callback
function obterUsuario(callback) {
  setTimeout(function () {
    //  primeiro parametro é o erro e o segundo o sucesso
    return callback(null, {
      id: 1,
      nome: "Gabrielle",
      dataNascimento: new Date(),
    });
  }, 1000);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: "1199002",
      ddd: 11,
    });
  }, 2000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "Vila Aparecida",
      numero: 0,
    });
  }, 2000);
}

function resolverUsuario(erro, usuario) {
  console.log("usuario", usuario);
}

//  quando obter Usuario for resolvido e retornar uma informacao vai chamar resolverUsuario
obterUsuario(function resolverUsuario(error, usuario) {
  // null || "" || 0 === false
  if (error) {
    console.log("DEU RUIM em USUARIO", error);
    return;
  }

  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.log("DEU RUIM em TELEFONE", error1);
      return;
    }

    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if (error2) {
        console.log("DEU RUIM em TELEFONE", error2);
        return;
      }

      console.log(`
      Nome: ${usuario.nome},
      Endereco: ${endereco.rua}, ${endereco.numero},
      Telefone: (${telefone.ddd}) ${telefone.telefone}
      `);
    });
  });
});
// const telefone = obterTelefone(usuario.id);

// console.log("telefone", telefone);
