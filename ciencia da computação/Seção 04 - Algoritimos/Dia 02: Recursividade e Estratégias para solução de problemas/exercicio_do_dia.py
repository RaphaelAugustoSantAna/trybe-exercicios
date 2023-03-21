# Exercicio 1:
# Crie um algoritmo não recursivo para contar quantos números pares 
# existem em uma sequência numérica (1 a n).

def contar_pares(n):
    count = 0
    for i in range(1, n+1):
        if i % 2 == 0 and i != 0:
            count += 1
    return count

# Exercício 2:
# Transforme o algoritmo criado acima em recursivo.

def contar_pares(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + contar_pares(n-1)
    else:
        return contar_pares(n-1)
