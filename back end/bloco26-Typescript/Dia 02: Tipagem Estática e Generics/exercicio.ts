// Type Aliases

// Exercícios

// 1 - Crie um type para um objeto que represente um pássaro.
type Bird = {
    wings: 2;
    beaks: 1;
    biped: true;
  }
// 2 - Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.
type Sum = (x: number, y: number) => number;
// 3 - Crie um type para um objeto que represente um endereço.
type Address = {
    publicPlace: string;
    number: number;
    district: string;
    city: string;
    state: string;
  }

//   Type Unions

// 1 - Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.

type EstadoDaAgua = 'Liquido' | 'sólido' | 'gasoso';

// 2 - Crie um type union que represente o documento identificador de uma pessoa 
// que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.

type Identificador = string | number;

// 3 - Crie um type union que represente sistemas operacionais: linux, mac os ou windows.
type SistemaOperacional = 'Linux' | 'Mac os' | 'Windows';

// 4 - Crie um type union que represente as vogais do alfabeto.

type vogais = 'a' | 'e' | 'i' | 'o' | 'u';