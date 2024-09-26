# class Employee
# Para armazenar os dados da pessoa de forma agregada vamos criar a classe Employee:


class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


# Hash Function


class HashMap:
    def get_address(self, id_num):
        return id_num % 10


# Buckets


class HashMap:
    def __init__(self):
        self._buckets = [None for i in range(10)]
# insert
# Para povoar nossa hash, recebemos o objeto, 
# computamos o seu address a partir da chave numérica, e armazenamos no local adequado.
    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee
# get_value
# Para acessar o dado de interesse, passamos a chave. 
# A classe identifica o índice, onde a referência para aquele objeto está armazenada, 
# e retorna o valor que estiver no campo name.
    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name
# has
# Para consultar se uma determinada chave existe dentro da sua hash map, basta calcular o address. 
# Além disso, vamos nos certificar de que o conteúdo da lista buckets não é None.
    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None