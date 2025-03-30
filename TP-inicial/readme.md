# TP inicial

## DEMO

https://github.com/user-attachments/assets/4b969580-6147-447f-a5f1-f27b81ca06c9

# Sistema de Predicción de Desempeño Laboral

Aplicación full-stack para predecir el rendimiento de empleados basado en datos.

## Estructura del Proyecto
- **`backend/`**: Servidor API con el modelo de predicción (FastAPI)
- **`frontend/`**: Interfaz web React/Vite

## Requisitos
- Node.js v22.9.0+
- npm v10.8+
- Python 3.12 (solo backend)
- pip 25.0.1 (gestor de paquetes Python)

## Instalación Backend
```bash
cd backend
pip install fastapi uvicorn joblib
uvicorn app:app --reload
```

- Servidor disponible en http://localhost:8000

## Instalación Frontend
```bash
cd frontend
npm i
npm run dev
```

- Aplicación disponible en http://localhost:5173
