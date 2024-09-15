//Sintaxe com classes

// Sobrescrita de método

class Animal {
    constructor(public name: string) { }
    move() { console.log(`${this.name} está se movendo.`); }// declaração do método
  }
  class Bird extends Animal {
    move() { console.log(`${this.name} está voando.`); }// chama o método da classe Animal e sobrescreve ele
  }
  class Mammal extends Animal {
    move() { console.log(`${this.name} está andando.`); }// chama o método da classe Animal e sobrescreve ele
  }
  
  const a = new Animal('Tubarão');
  const b = new Bird('Papagaio');
  const m = new Mammal('Tatu');
  
  // cria a função passando animal como paramentro  do tipo Animal, que é a classe que está sendo herdada de Bird e Mammal.
  // chama o parametro e o método.
  const myMove = (animal: Animal) => { 
    animal.move();
  }
  myMove(a);
  myMove(b);
  myMove(m);
  
  /*
  Saída:
  Tubarão está se movendo.
  Papagaio está voando.
  Tatu está andando.
  */