# cria a lista
my_list = [1, 2, 3, 4, 5]

#chama a função __iter__ com a lista
my_iterator = iter(my_list)

# verificando o tipo de my_iterator
print(next(my_iterator))
print(next(my_iterator))
print(next(my_iterator))