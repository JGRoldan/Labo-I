# Pruebas

## Tecnología utilizada
- Python 3.12.0
- Scikit learn 1.5.2

## Preparar el entorno

>[!NOTE]
>Pruebas realizadas en Windows utilizando VS Code.

1. Crear el entorno virtual
   ```bash
   python -m venv sklearn-env
   ```
   - Esto creara una carpeta "sklearn-env" en la raiz de la carpeta.
2. Activar el entorno virtual
   -   Windows 
   ```bash
   sklearn-env\Scripts\activate
   ```

   -   Linux 
   ```bash
   source sklearn-env/bin/activate
   ```
3. Instalar scikit-learn
   ```bash
   pip install scikit-learn==1.5.2
   ```

4. Seleccionar el interprete de python.
   1.  Abre la lista de comandos (Ctrl+Shift+P).
   2.  Escribi y selecciona "Python: Select Interpreter".
   3. En la lista, deberías ver tu entorno virtual (sklearn-env) como opción. Si no lo ves, busca la ruta donde lo creaste (por ejemplo, ruta/a/tu/proyecto/sklearn-env/Scripts/python.exe en Windows).

5. Ejecutar el código
    ```python
    python main.py # Entrenamiento y Genera modelo
    ```

## Resultados del modelo
- Intercepto (b0): 51.2092 (Valor real: 50)
- Coeficiente para 'horas_capacitación' (b1): 0.4945 (Valor real: 0.5) 
- Coeficiente para 'antiguedad' (b2): 0.8267 (Valor real: 0.8)
- Coeficiente para 'calificación_previa' (b3): 0.3849 (Valor real: 0.4)

Métricas de evaluación:
- MSE: 27.0158
- R²: 0.9005 (1.0 es perfecto)

### Resultados de una predicción de un empleado
- Puntaje predicho para el nuevo empleado: 54.62
- Puntaje real para el nuevo empleado: 53.4

### Resultados de una prección desde un csv con N empleados
| id | horas_capacitación | antiguedad | calificación_previa | puntaje_desempeño_predicho |
|----|-------------------|------------|---------------------|----------------------------|
| 0  | 2                 | 2          | 2                   | 54.621491                  |
| 1  | 1                 | 10         | 8                   | 63.049927                  |
| 2  | 6                 | 5          | 20                  | 66.008434                  |
| 3  | 15                | 4          | 5                   | 63.858455                  |


## Mejoras en el modelo

1. Reducción del ruido (0,5) a (0,1)
   ```py
   y = b0 + b1 * x1 + b2 * x2 + b3 * x3 + np.random.normal(0, 1)
   ```

### Resultados del modelo post mejora
| Dato | Valor real | Pre mejora | Post Mejora |
|--|--|--|--|
| Intercepto | 50 | 51.2092 | 49.7435 |
| b0 | 0.5 | 0.4945 | 0.4952 |
| b1 | 0.8 | 0.8267 | 0.8055 |
| b2 | 0.4 | 0.3849 | 0.4559 |
| MSE | 0 | 27.0158 | <span style="color:green">0.8909</span> |
| R2 | 1 | 0.9005 | <span style="color:green">0.9948 </span> |


| id | horas_capacitación | antiguedad | calificación_previa | puntaje_desempeño_predicho |
|----|-------------------|------------|---------------------|----------------------------|
| 0  | 2                 | 2          | 2                   | 53.256654                  |
| 1  | 1                 | 10         | 8                   | 61.940921                  |
| 2  | 6                 | 5          | 20                  | 65.859838                  |
| 3  | 15                | 4          | 5                   | 62.672798                  |
