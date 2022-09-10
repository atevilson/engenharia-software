// Higher Order Functions, utilizando o conceito DRY

// const telaLogin = (usuario) => {
//     let autenticaUsuario = []
//     for(loop = 0; loop < 1000; loop++) {
//         autenticaUsuario.push(loop);
//     }

//     return `${usuario} fez login`;
// }
// console.log(telaLogin("Atevilson"));
// console.log(telaLogin("Erick"));
// console.log(telaLogin("Carmen"));

// 1ª Refatoração

const login = (usuario) => {
    return `${usuario} fez login`;
};

const telaLogin = (usuario) => {
    let autenticaUsuario = []
    for(loop = 0; loop > 1000; loop++){
    autenticaUsuario.push(loop);
    }
    return login(usuario)
};

console.log(telaLogin("Atevilson"));
console.log(telaLogin("Erick"));
console.log(telaLogin("Carmen"));