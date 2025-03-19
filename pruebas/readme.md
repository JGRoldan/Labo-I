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
    python main.py # output 1.5.2
    ```