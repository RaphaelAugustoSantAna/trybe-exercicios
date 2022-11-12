/*
Dicionário en-pt:
- employee: pessoa empregada/funcionária
- static: estático
*/
class Employee {
    private static employeeCount = 0
    constructor(public name: string) {
      Employee.addEmployee();
    }
    private static addEmployee() {
      this.employeeCount += 1;
    }
    static get employees() {
      return this.employeeCount;
    }
  }
  console.log(Employee.employees);
  const e1 = new Employee('Ronald');
  console.log(Employee.employees);
  const e2 = new Employee('Cíntia');
  console.log(Employee.employees);
  /*
  Saída:
  0
  1
  2
  */

//   Observe que o this no contexto de um método estático se refere à classe, não ao objeto. 
// Em métodos não estáticos ou fora da classe você deve utilizar o nome da classe para referenciar seus atributos e métodos estáticos.

// Entretanto, é importante salientar que na maioria das vezes é preferível criar uma função normal, 
// no mesmo módulo que a classe está sendo criada, exportando-as de forma separada. 
// Isso facilita a vida de quem vai usar.