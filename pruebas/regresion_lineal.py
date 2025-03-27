"""
================
Regresion Lineal
================
Predicción de Puntaje de Desempeño (Opción 2):

- Desarrollen un modelo de regresión lineal para predecir el puntaje de desempeño de
un empleado basado en variables como horas de capacitación, antigüedad y
calificación previa. Creen un conjunto de datos ficticio con al menos 30 empleados y
entrenen el modelo para predecir el puntaje.
- Resultado esperado: Un modelo que prediga puntajes (por ejemplo, "Empleado con
20 horas de capacitación y 3 años de antigüedad → Puntaje 78") y muestre el error
cuadrático medio (MSE).

================
Teoría
================
Hay una formula para predecir lo que buscamos, en este caso puntaje de desempeño, que es la siguiente:

PD = b0 + b1 * X1 + b2 * X2 + b3 * X3 + ... + bn * Xn

Donde:
- PD es el puntaje de desempeño
- b0 es el intercepto (valor de PD cuando todas las variables son 0)
- b1, b2, b3, ..., bn son los coeficientes
- X1, X2, X3, ..., Xn son las variables independientes

Según estuve viendo:
- b0 podes elegirlo vos (por ejemplo, 50). Es decir, si el empleado no tiene horas de capacitación, antigüedad ni calificación previa, su puntaje de desempeño será 50.
- b1 es el coeficiente de la variable horas de capacitación. Si b1 es 2, significa que por cada hora de capacitación, el puntaje de desempeño aumenta en 2.
- b2 es el coeficiente de la variable antigüedad. Si b2 es 3, significa que por cada año de antigüedad, el puntaje de desempeño aumenta en 3.
- b3 es el coeficiente de la variable calificación previa. Si b3 es 4, significa que por cada punto de calificación previa, el puntaje de desempeño aumenta en 4.

Interrogantes:
- ¿Cómo se eligen los coeficientes?
    -¿Podemos elegir estos valores arbitrariamente? Es decir, b2 > b1 > b3 o como queramos.
    -¿Cómo se elige el intercepto? ¿Puede ser cualquier valor arbitrario?

Aclaraciones:
- Tengo entendido, que una vez que le des el modelo a scikit-learn, este se encarga de elegir los coeficientes y el intercepto.
    - Es decir, entrenas el modelo con los datos ficticios (¿elegiendo arbitrariamente b0, b1, b2, b3?) y el modelo despues sabe como calcularlo para futuros casos.


================
Ejemplo
================
Datos de un caso en csv:
id, horas_capacitacion, antiguedad, calificacion_previa, puntaje_desempenio
1, 10, 2, 8, 59.8 <--- Busco ese valor

PD = b0 + b1 * X1 + b2 * X2 + b3 * X3

Donde: 
- b0 = 50
- b1 = .5
- b2 = .8
- b3 = .4

PD = 50 + .5 * 10 + .8 * 2 + .4 * 8
PD = 59.8

En caso de que sea asi, a continuación se crea el modelo con los datos ficticios en formato csv:
"""
import numpy as np
import pandas as pd

# Definir los coeficientes de la regresión lineal
b0 = 50  # Intercepto
b1 = .5  # Coeficiente para x1
b2 = .8 # Coeficiente para x2
b3 = .4  # Coeficiente para x3

# Definir la cantidad de empleados para el dataset
employees = 100

# Crear un array bidimensional de 100 filas y 5 columnas (id,x1, x2, x3, PD)
dataset = np.zeros((employees, 5))

# Generar valores enteros para x1, x2, x3 y calcular PD
for i in range(employees):
    # Generar valores enteros para x1, x2, x3
    x1 = np.random.randint(0, 101)  # Enteros entre 0 y 100 (inclusive)
    x2 = np.random.randint(0, 21)   # Enteros entre 0 y 20 (inclusive)
    x3 = np.random.randint(0, 11)   # Enteros entre 0 y 10 (inclusive)
    
    # Calcular y usando la fórmula de regresión lineal
    y = b0 + b1 * x1 + b2 * x2 + b3 * x3 + np.random.normal(0, 5)  # Agregar ruido normal
    
    # Guardar los valores en el array bidimensional
    dataset[i] = [i, x1, x2, x3, y]

# Convertir el array a un DataFrame de pandas
df = pd.DataFrame(dataset, columns=["id","horas_capacitación", "antiguedad", "calificación_previa", "puntaje_desempeño"])

# Convertir las columnas id, x1, x2, x3 a enteros
df["id"] = df["id"].astype(int)
df["horas_capacitación"] = df["horas_capacitación"].astype(int)
df["antiguedad"] = df["antiguedad"].astype(int)
df["calificación_previa"] = df["calificación_previa"].astype(int)

# Guardar el DataFrame en un archivo CSV
df.to_csv("dataset_ficticio_regresion_lineal.csv", index=False)

print("Dataset guardado como 'dataset_ficticio_regresion_lineal.csv'")
