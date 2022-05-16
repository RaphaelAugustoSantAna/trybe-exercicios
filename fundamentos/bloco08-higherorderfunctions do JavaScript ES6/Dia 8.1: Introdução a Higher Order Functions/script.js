// exercicio - 1

// const cadastro = (string) =>{
//     const novoCadastro = string.replace(/ /g, '_');
//     const email = `${novoCadastro}@trybe.com`;
//     const objeto = {
//         name:string,
//         email:email,
//     }
//     return objeto;
// }

// const newEmployees = (callback) => {
//     const employees = {
//       id1: callback('pedro guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: callback('luiza drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: callback('carla paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };
//   const objeto = newEmployees(cadastro);
//   console.log(objeto);


// ------------------------------------------------------------
// exercicio - 2

// const numAposta = (aposta, sorteio) => aposta === sorteio;

// const resSorteio = (aposta, callback) => {
//     const sorteio = Math.floor((Math.random()*5) + 1);
//     return callback(aposta, sorteio) ? 'Parabéns você ganhou!' : 'Tente novamente.';
// };

// console.log(resSorteio(1,numAposta));

//------------------------------------------------------------
//exercicio - 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const notaDoAluno = (rightAnswers, studentAnsers) => {
    if(rightAnswers === studentAnsers){
        return 1;
    }if(studentAnsers === 'N/A'){
        return 0;
    }
    return -0,5;
};

const contador = (rightAnswers, studentAnsers, action) =>{
    let cont = 0;
    for (let index = 0; index < rightAnswers.length; index += 1){
        const actionReturn = action(rightAnswers[index], studentAnsers[index]);
        contador + actionReturn;
    }
    return `Resultado final: ${contador} pontos.`
};
console.log(contador(RIGHT_ANSWERS,STUDENT_ANSWERS,notaDoAluno));