let ladoDoTrianguloA = 65;
let ladoDoTrianguloB = 100;
let ladoDoTrianguloC = 15;

let somaDeAngulos = ladoDoTrianguloA + ladoDoTrianguloB + ladoDoTrianguloC;
let todosAngulosPositivo = ladoDoTrianguloA > 0 && ladoDoTrianguloB > 0 && ladoDoTrianguloC > 0;

if(todosAngulosPositivo){
    if(somaDeAngulos === 180){
        console.log(true);
    }else{
        console.log(false);
    }
}else{
    console.log('Ângulo invalido');
}