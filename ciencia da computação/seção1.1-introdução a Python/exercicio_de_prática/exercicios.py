# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def num(a, b):
    if a > b:
        return a
    else:
        return b

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def media(list):
    sum = 0
    for number in list:
        sum += number
    return sum / len(list)

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def square(n):
    for i in range(n):
        print('*' * n)

#  Exercício 4: Crie uma função que receba uma lista de nomes
#  e retorne o nome com a maior quantidade de caracteres.
#  Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
#  o retorno deve ser "Fernanda".


def biggest_name(list_name):
    result_name = list_name[0]
    for name in list_name:
        if len(name) > len(result_name):
            result_name = name
    return result_name
