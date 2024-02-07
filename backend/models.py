# models.py

class RopaRecomendada:
    def __init__(self, tipo, descripcion, temperatura_min, temperatura_max):
        self.tipo = tipo
        self.descripcion = descripcion
        self.temperatura_min = temperatura_min
        self.temperatura_max = temperatura_max

    def __str__(self):
        return f"{self.tipo}: {self.descripcion} (Para temperaturas de {self.temperatura_min}°C a {self.temperatura_max}°C)"
