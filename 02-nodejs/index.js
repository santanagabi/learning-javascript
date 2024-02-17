/*
0 Obter um usuario
1 Obter o número de telefone de um usuario a partir do seu Id
2 Obter o endereço do usuario pelo Id
*/

//  importamos um modulo interno do nodejs
const util = require("util");
const obterEnderecoAsync = util.promisify(obterEndereco);

//  apos acabar de executar dai chama o callback
function obterUsuario() {
  //  quando der algum problema -> reject
  // quando for sucesso -> resolve
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      // return reject(new Error('DEU RUIM DE VERDADE!'))
      //  primeiro parametro é o erro e o segundo o sucesso
      return resolve({
        id: 1,
        nome: "Gabrielle",
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}

function obterTelefone(idUsuario) {
  return new Promise(function resolverPromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: "1199002",
        ddd: 11,
      });
    }, 2000);
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "Vila Aparecida",
      numero: 0,
    });
  }, 2000);
}

const usuarioPromise = obterUsuario();
//  sucesso -> .then
//  erros -> .catch
//  usuario -> telefone -> telefone
usuarioPromise
  .then(function (usuario) {
    return obterTelefone(usuario.id).then(function resolverTelefone(result) {
      return {
        usuario: {
          nome: usuario.nome,
          id: usuario.id,
        },
        telefone: result,
      };
    });
  })
  .then(function (resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id);
    return endereco.then(function resolverEndereco(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result,
      };
    });
  })
  .then(function (resultado) {
    console.log(`
    Nome: ${resultado.usuario.nome},
    Endereco: ${resultado.endereco.rua} ${resultado.endereco.numero},
    Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
    `);
  })
  .catch(function (error) {
    console.log("DEU RUIM", error);
  });

//  quando obter Usuario for resolvido e retornar uma informacao vai chamar resolverUsuario
// obterUsuario(function resolverUsuario(error, usuario) {
//   // null || "" || 0 === false
//   if (error) {
//     console.log("DEU RUIM em USUARIO", error);
//     return;
//   }

//   obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//     if (error1) {
//       console.log("DEU RUIM em TELEFONE", error1);
//       return;
//     }

//     obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//       if (error2) {
//         console.log("DEU RUIM em TELEFONE", error2);
//         return;
//       }

//       console.log(`
//       Nome: ${usuario.nome},
//       Endereco: ${endereco.rua}, ${endereco.numero},
//       Telefone: (${telefone.ddd}) ${telefone.telefone}
//       `);
//     });
//   });
// });
// const telefone = obterTelefone(usuario.id);

// console.log("telefone", telefone);
