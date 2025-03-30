# Backend

# Sistema de Predicción de Desempeño Laboral  

Backend de la aplicación para predecir el rendimiento de empleados basado en datos.  

## Requisitos previos  
- Python 3.12
- pip 25.0.1

## Instalación y ejecución  

1. **Ir a la carpeta del proyecto**  
   ```bash
   cd backend
   ```
2. Instalar dependencias

    ```bash
    pip install fastapi uvicorn joblib
    ```
3. Ejecutar el servidor de desarrollo

    ```
    uvicorn app:app --reload
    ```