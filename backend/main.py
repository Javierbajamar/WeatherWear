from flask import Flask, request, jsonify

from models import RopaRecomendada

app = Flask(__name__)

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


@app.route('/recommendations', methods=['GET'])
def get_recommendations():
    # Obtener la temperatura como un parámetro de la consulta
    temperatura_c = request.args.get('temp', type=float)

    if temperatura_c is None:
        return jsonify({'error': 'La temperatura es requerida y debe ser un número.'}), 400

    recomendaciones = obtener_recomendaciones_de_ropa(temperatura_c)
    recomendaciones_respuesta = [
        {'type': r.tipo, 'description': r.descripcion, 'temperatura_min': r.temperatura_min, 'temperatura_max': r.temperatura_max} for r in recomendaciones
    ]

    return jsonify(recommendations=recomendaciones_respuesta)


if __name__ == '__main__':
    app.run(debug=True)
