// const order = {
//     name: 'Rafael Andrade',
//     phoneNumber: '11-98763-1416',
//     address: {
//       street: 'Rua das Flores',
//       number: '389',
//       apartment: '701',
//     },
//     order: {
//       pizza: {
//         marguerita: {
//           amount: 1,
//           price: 25,
//         },
//         pepperoni: {
//           amount: 1,
//           price: 20,
//         }
//       },
//       drinks: {
//         coke: {
//           type: 'Coca-Cola Zero',
//           price: 10,
//           amount: 1,
//         }
//       },
//       delivery: {
//         deliveryPerson: 'Ana Silveira',
//         price: 5,
//       }
//     },
//     payment: {
//       total: 60,
//     },
//   };

//   const customerInfo = (order) => {
//     const address = 'address';
//     const deliveryPerson = order.order.delivery.deliveryPerson;
//     const customerName = order['name'];
//     const customerPhone = order['phoneNumber'];
//     const street = order[address].street;
//     const number = order[address].number;
//     const apartment = order[address].apartment;

//     console.log(`Olá ${deliveryPerson}, entrega para : ${customerName}, Telefone:${customerPhone}, R. ${street}, Nº: ${number},AP: ${apartment}`)

//   }

//   customerInfo(order);

//   const orderModifier = (order) => {
//     const novaCompra = order.name = 'Luiz Silva';
//     const pizzas = Object.keys(order.order.pizza);
//     const drinks = order.order.drinks.coke.type;
//     const newTotal = order.payment.total = '50';

//     console.log(`Olá ${novaCompra}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`)

//   }

//   orderModifier(order);

// Parte III---------------------------------------

const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

//exercicio - 1 pt.3

const novaKey = (obj, key, value) => {
  obj[key] = value;
};

novaKey(lesson2, "turno", "noite");

//exercicio - 2 pt.3

const listaKey = (obj) => Object.keys(obj);
console.log(listaKey(lesson1));

//exercicio - 3 pt.3

const tamanhoObj = (obj) => Object.keys(obj).length;
console.log(tamanhoObj(lesson1));

//exercicio - 4 pt.3

const listaValores = (obj) => Object.values(obj);
console.log(listaValores(lesson1));

//exercicio - 5 pt.3

const allLessons = Object.assign({} ,{lesson1,lesson2,lesson3});
console.log(allLessons);

//exercicio - 6 pt.3

const numEstudantes = (obj) =>{
    let res = 0
    const array = Object.keys(obj);
    for (index in array){
        res += obj[array[index]].numEstudantes;
    }
    return res;
}
console.log(numEstudantes(allLessons));

//exercicio - 7 pt.3

const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber (lesson1,0));

//exercicio - 8 pt.3

const verificaPar = (obj,key,value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for(let index in arr){
        if(arr[index][0] === key && arr[index][1] === value) isEqual = true;
    }
    return isEqual;
};
console.log(verificaPar(lesson2,'professor', 'Carlos'));