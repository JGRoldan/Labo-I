import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

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
