# main.py

from models import RopaRecomendada

# Ejemplo de datos de ropa
ropa_disponible = [
    RopaRecomendada("Camiseta", "Ligera y transpirable", 20, 30),
    RopaRecomendada("Suéter", "Cálido y cómodo", 10, 20),
    RopaRecomendada("Chaqueta", "Impermeable para la lluvia", 5, 15),
]


def obtener_recomendaciones_de_ropa(temperatura_actual):
    recomendaciones = []
    for ropa in ropa_disponible:
        if ropa.temperatura_min <= temperatura_actual <= ropa.temperatura_max:
            recomendaciones.append(ropa)
    return recomendaciones


# Supongamos que la temperatura actual es 12°C
temperatura_actual = 12
recomendaciones = obtener_recomendaciones_de_ropa(temperatura_actual)
for recomendacion in recomendaciones:
    print(recomendacion)
