from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from joblib import load

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

# Endpoint 1: Predicción individual
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