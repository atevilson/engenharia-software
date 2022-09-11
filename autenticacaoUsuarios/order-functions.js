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

// 1ª Refatoração, higher order functions 

const login = (usuario) => {
    return `${usuario} fez login`;
};

const telaLogin = (perfil) => {
    let autenticaUsuario = []
    for(loop = 0; loop < perfil; loop++){
    autenticaUsuario.push(loop);
    }
    return true;
};

// Adicionado um tempo de login maior para Atevilson
const validador = (identificador, telaLogin) => {
    if(identificador.perfil === `Administrador`) {
        telaLogin(50000);
    }else if (identificador.perfil === `Usuario`) {
        telaLogin(1000);
    }
    return login(identificador.usuario);
}
console.log(validador({ perfil: `Administrador`, usuario: `Atevilson`}, telaLogin));
console.log(validador({ perfil: `Usuario`, usuario: `Erick`}, telaLogin));
console.log(validador({ perfil: `Usuario`, usuario: `Carmen`}, telaLogin));