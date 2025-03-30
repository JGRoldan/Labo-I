import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import seaborn as sns
import matplotlib.pyplot as plt
from joblib import dump

# 1. Cargar el dataset generado
df = pd.read_csv("dataset_ficticio_regresion_lineal.csv")

# 2. Definir características (X) y objectivo (y)
X = df[["horas_capacitación", "antiguedad", "calificación_previa"]]  # Features
y = df["puntaje_desempeño"]  # objectivo

# 3. Dividir en train (80%) y test (20%)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 4. Crear y entrenar el modelo
model = LinearRegression()
model.fit(X_train, y_train)

# 5. Predecir en el conjunto de test
y_pred = model.predict(X_test)

# 6. Calcular MSE y R^2
mse = mean_squared_error(y_test, y_pred)
r2 = model.score(X_test, y_test)

# 7. Mostrar resultados
print("\nResultados del modelo:")
print(f"- Intercepto (b0): {model.intercept_:.4f} (Valor real: 50)")
print(f"- Coeficiente para 'horas_capacitación' (b1): {model.coef_[0]:.4f} (Valor real: 0.5)")
print(f"- Coeficiente para 'antiguedad' (b2): {model.coef_[1]:.4f} (Valor real: 0.8)")
print(f"- Coeficiente para 'calificación_previa' (b3): {model.coef_[2]:.4f} (Valor real: 0.4)")
print(f"\nMétricas de evaluación:")
print(f"- MSE: {mse:.4f}")
print(f"- R²: {r2:.4f} (1.0 es perfecto)")

#################################
####EXPORTAR MODELO PARA USAR####
#################################
dump(model, 'modelo_regresion_lineal.joblib')

#############################
####GRAFICO DE DISPERSIÓN####
#############################
plt.figure(figsize=(10, 6))
sns.scatterplot(x=y_test, y=y_pred, color='blue', alpha=0.5)
sns.regplot(x=y_test, y=y_pred, scatter=False, color='red')

plt.xlabel("Valores reales")
plt.ylabel("Valores de predicción")
plt.title("Valores reales vs Valores de predicción")
plt.show()


############################
#####PREDICCION EMPLEADO####
############################

nuevo_empleado = pd.DataFrame({
    "horas_capacitación": [2],
    "antiguedad": [2],
    "calificación_previa": [2]
})

# Predecir su puntaje de desempeño
puntaje_predicho = model.predict(nuevo_empleado)
print(f"Puntaje predicho para el nuevo empleado: {puntaje_predicho[0]:.2f}")

#######################################
#####PREDICCION EMPLEADOS DESDE CSV####
#######################################

# Cargar nuevos datos
nuevos_empleados = pd.read_csv("dataset_nuevos_empleados.csv")
X_nuevos = nuevos_empleados[["horas_capacitación", "antiguedad", "calificación_previa"]]

# Predecir y añadir columna al DataFrame
nuevos_empleados["puntaje_desempeño_predicho"] = model.predict(X_nuevos)

# Guardar resultados en nuevo archivo
# nuevos_empleados.to_csv("resultados_predicciones.csv", index=False)  <---- Descomentar para guardar

# Seleccionar columnas importantes para mostrar
resultados = nuevos_empleados[["id", "horas_capacitación", "antiguedad", "calificación_previa", "puntaje_desempeño_predicho"]]

print("\nRESULTADOS DE PREDICCIÓN:")
print(resultados.to_string(index=False))