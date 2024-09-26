// Cria a interface
interface MyInterface {
    myNumber: number;// atributo
    
    myFunc(myParam: number): string;// método
}

class MyClass implements MyInterface {// classe implementa a interface
    constructor(public myNumber: number) { }// o método é inicializado direto dentro do construtor

    myFunc(myParam: number): string {
        return `myNumber + myParam: ${this.myNumber + myParam}`;
    }
}

const myObject = new MyClass(2);// criação do objeto da classe
console.log(myObject.myNumber);
console.log(myObject.myFunc(4));