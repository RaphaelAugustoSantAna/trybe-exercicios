let maiorNumero = 0;

for(let numero = 0; numero <= 50; numero += 1){
  let ehPrimo = true;
  for (let divisor = 2; divisor < numero; divisor += 1){
      if(numero % divisor === 0){
          ehPrimo =false;
      }

  }  
  if(ehPrimo){
      maiorNumero = numero;
  }
}
console.log(maiorNumero);