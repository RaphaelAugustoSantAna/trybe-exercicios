#Listas (list)

fruits = ["laranja", "maçã", "uva", "abacaxi"]  # elementos são definidos separados por vírgula, envolvidos por colchetes

fruits[0]  # o acesso é feito por índices iniciados em 0

fruits[-1]  # o acesso também pode ser negativo

fruits.append("banana")  # adicionando uma nova fruta

fruits.remove("abacaxi")  # removendo uma fruta

fruits.extend(["pera", "melão", "kiwi"])  # acrescenta uma lista de frutas a lista original

fruits.index("maçã")  # retorna o índice onde a fruta está localizada, neste caso, 1

fruits.sort()  # ordena a lista de frutas

# ============================================

trybe_course = ["Introdução", "Front-end", "Back-end"]

#Exercício 5: Adicione o elemento “Ciência da Computação” à lista.

trybe_course.append("Ciência da Computação")

#Exercício 6: Acesse e altere o primeiro elemento da lista para “Fundamentos”.

trybe_course[0] = "Fundamentos"

#====================================================

# Tuplas (tuple)
# São similares a listas, porém não podem ser modificados durante a execução do programa.

# Sintaxe:

user = ("Will", "Marcondes", 42)  # elementos são definidos separados por vírgula, envolvidos por parênteses

user[0]  # acesso também por índices


#====================================================

# Conjuntos (set)
# Um conjunto é uma coleção de elementos únicos e não ordenados. Conjuntos implementam operações de união, intersecção e outras.

# Sintaxe:

permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento ao conjunto

permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto

permissions.union({"user"})  # retorna um conjunto resultado da união

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

#======================================================

# Exercício 7: Um conjunto ou set pode ser inicializado utilizando-se também o método set().
# Inicialize uma variável com essa função var = set()
# e adicione seu nome ao conjunto utilizando um dos métodos vistos acima.
# Depois, imprima a variável e confira se o retorno é: {‘seu_nome’}.

var = set()
var.add({"Raphael Sant'Ana"})
var

#========================================================

# Conjuntos imutáveis (frozenset)
# É uma variação do set, porém imutável, ou seja, seus elementos não podem ser modificados durante a execução do programa.

# Sintaxe:

permissions = frozenset(["member", "group"])  # assim como o set, qualquer estrutura iterável pode ser utilizada para criar um frozenset

permissions.union({"user"})  # novos conjuntos imutáveis podem ser criados à partir do original, mas o mesmo não pode ser modificado

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

#=========================================================

# Dicionários (dict)
# Estrutura que associa uma chave a um determinado valor. É a representação do tão famoso objeto que utilizamos em JavaScript.

# Sintaxe:

people_by_id = {1: "Maria", 2: "Fernanda", 3: "Felipe"}  # elementos no formato "chave: valor" separados por vírgula, envolvidos por chaves

people_by_name = {"Maria": 1, "Fernanda": 2, "Felipe": 3}  # outro exemplo, dessa vez usando strings como chaves. As aspas são necessárias para que o Python não ache que `Maria`, `Fernanda` e `Felipe` sejam variáveis.

# elementos são acessados por suas chaves
people_by_id[1]  # saída: Maria

# elementos podem ser removidos com a palavra chave del
del people_by_id[1]
people_by_id.items()  # dict_items([(1, "Maria"), (2, "Fernanda"), (3, "Felipe")])
# um conjunto é retornado com tuplas contendo chaves e valores

#===============================================================

# Utilizando o código abaixo, faça os exercícios 8 e 9:

info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# Exercício 8: Insira no objeto uma nova propriedade com o 
# nome de chave “recorrente” e o valor “Sim”. 
# Em seguida, imprima o objeto no console.

info["recorrente"] = "Sim"
info

# Exercício 9: Remova a propriedade cuja chave é “origem” 
# e imprima o objeto no console.

del info["origem"]
info


# Range (range)
# Estrutura capaz de gerar uma sequência numérica de um valor inicial até um valor final, 
# modificando seu valor de acordo com o passo (step) definido. 
# Pode ser declarado como range( [start], stop[, step] ), 
# em que start e step podem ser omitidos, 
# possuindo valores iniciais iguais a 0 e 1 respectivamente.

# Anota aí ✏️: O stop não é incluído na sequência,
# portanto, caso queira uma sequência de 1 até 10 
# a chamada deverá ser range(1, 11)

# Seus valores são criados à medida que esta sequência é percorrida.

# Sintaxe:

# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, 5, 7, 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

# Exercício 10: Após uma consulta do banco de dados, 
# temos linhas que contém nome, sobrenome e idade como: 
# "Thiago", "Nobre", 29. 
# Que estrutura vista anteriormente seria recomendada dado que
#  após esta consulta somente exibimos estes valores?

# Resposta: Tupla

# Exercício 11: Realizar a contagem de quantas vezes cada elemento aparece
# em uma sequência é uma técnica muito útil na solução de alguns problemas. 
# Qual é a estrutura mais recomendada para o armazenamento desta contagem?


my_list = [20, 20, 1, 2]
count_elements = {
    20: 2,
    1: 1,
    2: 2
}

