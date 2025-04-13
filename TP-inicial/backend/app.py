from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from joblib import load
import pandas as pd

app = FastAPI()

# CORS para conectar con React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cargar modelo
model = load("modelo_regresion_lineal.joblib")

# Endpoint 1: Predicción individual de datos
@app.post("/predecir")
async def predecir(data: dict):
    try:
        # Extraer datos del frontend
        horas = float(data["horas_capacitacion"])
        antiguedad = float(data["antiguedad"])
        calificacion = float(data["calificacion_prev"])

        # Predecir
        pred = model.predict([[horas, antiguedad, calificacion]])[0]

        return {"prediccion": round(pred, 2)}
    except Exception as e:
        return {"error": str(e)}

# Endpoint 2: Predicción desde CSV
@app.post("/predecir-csv")
async def predecir_csv(file: UploadFile = File(...)):
    try:
        # Leer CSV
        df = pd.read_csv(file.file)
        X = df[["horas_capacitación", "antiguedad", "calificación_previa"]]
        # Predecir
        df["prediccion"] = model.predict(X)

        return {
            "predicciones": df.to_dict(orient="records"),
        }
    except Exception as e:
        return {"error": str(e)}
