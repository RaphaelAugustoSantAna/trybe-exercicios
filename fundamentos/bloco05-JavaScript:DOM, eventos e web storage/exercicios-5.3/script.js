function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// exercicio 1
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function diasDoMes() {
    let listaDeDias = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let dia = dezDaysList[index];
        let itemDia = document.createElement('li');

        if (dia === 24 | dia === 31) {
            itemDia.className = 'dia feriado';
            itemDia.innerHTML = dia;
            listaDeDias.appendChild(itemDia);
        } else if (dia === 4 | dia === 11 | dia === 18) {
            itemDia.className = 'dia sexta-feira';
            itemDia.innerHTML = dia;
            listaDeDias.appendChild(itemDia);
        } else if (dia === 25) {
            itemDia.className = 'dia feriado sexta-feira';
            itemDia.innerHTML = dia;
            listaDeDias.appendChild(itemDia);
        } else {
            itemDia.innerHTML = dia;
            itemDia.className = 'dia';
            listaDeDias.appendChild(itemDia);
        }
    };
};//exercicio 2
diasDoMes();

function botaoFeriado(nomeDoBotao) {
let caixaBotao = document.querySelector('.buttons-container');
let novoBotao = document.createElement('button');
let novoBotaoID = 'btn-feriado';

novoBotao.innerHTML = nomeDoBotao;
novoBotao.id = novoBotaoID;
caixaBotao.appendChild(novoBotao);
};
botaoFeriado('feriados');

//exercicio 3
function displayFeriado(){
 let feriadoBotao = document.querySelector('#btn-feriado');
 let feriadao = document.querySelectorAll('.feriado');
 let corDeFundo = 'rgb(238,238,238)';
 let novaCor = 'white';

 feriadoBotao.addEventListener('click',function(){
     for(let index = 0; index < feriadao.length; index += 1){
        if(feriadao[index].style.corDeFundo === novaCor){
         feriadao[index].style.corDeFundo = corDeFundo;
        }else{
            feriadao[index].style.corDeFundo = novaCor;
        }
     }
 })
};
displayFeriado();

//exercicio 4 
