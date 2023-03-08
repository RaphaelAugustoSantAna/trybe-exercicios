# Problema
class Player:
    # ...

    def tournaments(self, game_id):
        """Retorna os torneios de um jogo da pessoa"""
        return Game(game_id).tournaments()


class Game:
    """Classe que só possui o método de filtrar os torneios"""
    def __init__(self, game_id):
        self.game_id = game_id

    def tournaments(self):
        return Tournament.query.filter(game_id=self.game_id).all()


class Tournament:
    """Classe contendo vários métodos e que herda de algum banco de dados"""


# Código cliente
player = Player(id=1)
print(player.tournaments(1))

# Solução
# Se uma classe somente delega uma ação para outra, 
# por que deveria existir? 
# Remova o que fica no meio!
class Player:
    # ...

    def tournaments(self, game_id):
        """Retorna os torneios de um jogo da pessoa"""
        return Tournament.query.filter(game_id=game_id, user_id=self.id).all()


class Tournament:
    """Classe contendo vários métodos e que herda de algum banco de dados"""

# Código cliente
player = Player(id=1)
print(player.tournaments(1))

# Exemplo
# Imagine que você tem um aplicativo que possui as funcionalidades de cadastro de pessoas e de empresas. 
# Tanto as pessoas quanto as empresas possuem endereços.
class User:
    def __init__(self, name, age, street, number, district):
        self.name = name
        self.age = age
        self.address_street = street
        self.address_number = number
        self.address_district = district

    # ...


# Em algum outro lugar do código
class Company:
    def __init__(self, name, street, number, district):
        self.name = name
        self.address_street = street
        self.address_number = number
        self.address_district = district

    # ...

# Soluções
# Uma possível solução para esse problema é criar uma classe 
# somente para representar a entidade endereço:

from dataclasses import dataclass


@dataclass
class Address:
    # Podemos colocar um valor padrão
    street = "Street"
    number = 0
    # Ou especificar o tipo do campo com anotações de tipo
    district: str


address = Address(district="District")

print(address.street, address.number, address.district)
# Street 0 District

@dataclass
class Address:
    street: str
    number: int
    district: str


# A ordem de parâmetros pro construtor é a mesma da definição dos atributos
address = Address("Street", 0, "District")