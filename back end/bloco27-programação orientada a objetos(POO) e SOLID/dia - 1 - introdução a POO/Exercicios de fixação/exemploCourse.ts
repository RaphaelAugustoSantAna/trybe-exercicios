// // sintase geral

// // Criação da classe
// class Person {
//   // Atributos 
//     name: string;
//     height: number;
//     weight: number;
  
//     // Métodos
//     // Método constructor
//     constructor(n: string, h: number, w: number) {
//       console.log(`Creating person ${n}`);
//       this.name = n; // Atribui valores de fora aos atributos do objeto
//       this.height = h;
//       this.weight = w;
//     }
  
//     sleep() {
//       console.log(`${this.name}: zzzzzzz`);
//     }
//   }
  
//   // Criação dos objetos
//   const p1 = new Person('Maria', 171, 58);
//   const p2 = new Person('João', 175, 66);
//   console.log(p1.name, p1.height, p1.weight);
//   console.log(p2.name, p2.height, p2.weight);

//   // Acesso aos metodos
//   p1.sleep();
//   p2.sleep();
  
//   /*
//   Saída:
//   Creating person Maria
//   Creating person João
//   Maria 171 58
//   João 175 66
//   Maria: zzzzzzz
//   João: zzzzzzz
//   */

//==========================================================================================

// Sintase de encapsulamento

class Person {
  name: string;
  private _weight: number;
  private _age: number;
  readonly height: number;

  constructor(name: string, height: number, weight: number, age: number) {
    this.name = name;
    this._weight = weight;
    this._age = age;
    this.height = height;
  }

// esta sintaxe permite acessar o valor retornado via person.getWeight()
  getWeight() {
    return this._weight;
  }

// esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
  get age() {
    return this._age;
  }

// do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
// mesmo que esteja ocorrendo uma validação internamente
  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    }
  }

  birthday() {
    this._age += 1;
  }

}

const p1 = new Person('Maria', 171, 58, 19);
const p2 = new Person('João', 175, 66, 18);

//Vamos agora a um exemplo de sintaxes que são válidas neste contexto:

// Alteração direta de variável pública
p1.name = 'Mariah';
// Acesso direto a variável pública
console.log(p1.name);
// Acesso a método público que manipula atributo privado
console.log(p1.getWeight());
// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(p2.age);
// Acesso a método público que manipula atributo privado
p2.birthday();
console.log(p2.age);
// Acesso a método com setter para manipular atributo privado como se fosse público
p2.age = 17;
console.log(p2.age);
// Leitura de atributo readonly
console.log(p1.height);

/*
Saída:
Mariah
58
18
19
17
171
*/

p2.age = 300;
console.log(p2.age);
// Saída: 17

//Agora um exemplo de sintaxes que são inválidas neste contexto:

// Acesso externo à classe a atributo privado
// p1._weight;
// p1._weight = 1;
// Acesso a atributo inexistente
// p1.weight;
// p1.weight = 1;
// Escrita em atributo readonly
// p1.height = 1;

//====================================================

class Email {
  private _from: string;
  private _to: string;
  private _message: string;
  private _subject: string;

  constructor(
    from: string,
    to: string,
    subject: string,
    message: string,
  ) {
    this._from = from;
    this._to = to;
    this._message = message;
    this._subject = subject;
  }

  set subject(newSubject: string) {
    if (newSubject.length <= 40) this._subject = newSubject;
  }

  get subject(): string {
    return this._subject;
  }

  get from(): string { return this._from; }

  get to(): string { return this._to; }

  get content(): string {
    return `
    From ${this._from} to ${this._to}
    ${this.subject}

    ${this._message}`;
  }
}

class MailList {
  // Essa sintaxe no construtor é chamada `Parameter Properties`
  // É um atalho para declarar e automaticamente atribuir o valor que será recebido via parâmetro ao atributo privado `mailList`
  constructor(private mailList: Email[] = []) { }

  get all(): Email[] { return this.mailList; }

  getEmailsSentBy(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.from === mailAddress);
  }

  getEmailsTo(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.to === mailAddress);
  }

  getEmailsBySubject(searchString: string): Email[] {
    return this.mailList
      .filter((mail) => mail.subject.indexOf(searchString) !== -1);
  }

  addEmail(newMail: Email): void { this.mailList.push(newMail); }

  removeEmail(mailToRemove: Email): void {
    // note que como essa é uma comparação de objetos, esse filter só funcionará se a referência de `mail` e `mailToRemove` for a mesma
    this.mailList = this.mailList.filter((mail) => mail !== mailToRemove);
  }
}

// Para testar
const friendEmail = 'friend@personalmail.com';
const myEmail = 'me@personalmail.com';

const email1 = new Email(
  myEmail,
  friendEmail,
  'Car wash',
  'There\'s a new car wash in town. Did you know?',
);
const email2 = new Email(
  friendEmail,
  myEmail,
  'Reply - Car wash',
  'Great! My car is really dirty. How much do they charge?',
);
const email3 = new Email(
  myEmail,
  friendEmail,
  'Reply - Reply - Car wash',
  '$5.00, and you get a free polishing cloth',
);
const email4 = new Email(
  'me@companymail.com',
  'ceo@companymail.com',
  'Day off monday',
  `Next Tuesday is a holiday.
  Are we going to work on Monday?`,
);
const email5 = new Email(
  'ceo@companymail.com',
  'me@companymail.com',
  'Reply - Day off monday',
  'The entire company will have a day off on monday =D'
);

const personalMailList = new MailList([email1, email2, email3]);
const professionalMailList = new MailList([email4, email5]);

console.log('------ personalMailList.getByEmailFrom(\'me@personalmail.com\'):');
personalMailList.getByEmailsFrom(myEmail).forEach(
  (mail) => console.log(mail.content),
);

const email6 = new Email(
  myEmail,
  'friend2@personalmail.com',
  'Day off monday',
  `Oh yes!
   My boss says we\'ll have Monday off.
   Want to go to the movies?`,
);

personalMailList.addEmail(email6);
personalMailList.addEmail(email5); // Adicionado erroneamente

console.log('------ personalMailList.getBySubject(\'Day off\'):');
personalMailList.getEmailsBySubject('Day off').forEach(
  (mail) => console.log(mail.content),
);
personalMailList.removeEmail(email5);

console.log('------ professionalMailList.all:');
professionalMailList.all.forEach(
  (mail) => console.log(mail.content),
);

console.log('------ personalMailList.all:');
personalMailList.all.forEach(
  (mail) => console.log(mail.content),
);