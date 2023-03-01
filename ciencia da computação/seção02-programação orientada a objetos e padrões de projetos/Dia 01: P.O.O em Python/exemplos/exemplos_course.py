class Liquidificador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0
        # O primeiro parâmetro, o self, 
        # representa a instância do objeto, ou seja, 
        # tem acesso ao objeto na memória.

        meu_liquidificador = Liquidificador("Azul", 200, 127, 200)
        seu_liquidificador = Liquidificador(cor="Vermelho", potencia=250, tensao=220, preco=100)

        # Perceba que é possível ter atributos que não precisam ser passados por meio de parâmetros 
        # na chamada do construtor. Por exemplo, para o booleano __ligado e o inteiro __velocidade, 
        # o construtor vai iniciá-los sempre com os valores fixos (hard coded) False e 0, respectivamente.
    
    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )
        
        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True
    
    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0
    
    def esta_ligado(self):
        return self.__ligado
        
liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 100)
liquidificador_vermelho.ligar(1)
print("Está ligado?", liquidificador_vermelho.esta_ligado())
# Está ligado? True
liquidificador_vermelho.desligar()
print("Está ligado?", liquidificador_vermelho.esta_ligado())
# Está ligado? False