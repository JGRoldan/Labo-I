import { useState, useRef } from 'react'

// Este componente permite al usuario subir un archivo CSV y predecir el rendimiento de los empleados
// mediante una llamada a la API del backend. Muestra los resultados en una tabla.
function PredictEmployeeByCSV() {
    const [predictions, setPredictions] = useState([]) // Estado para almacenar las predicciones
    const [selectedFile, setSelectedFile] = useState(null)
    const fileInputRef = useRef(null) // Ref para el input de archivo

    // Al seleccionar un archivo, se actualiza el estado con el archivo seleccionado
    const handleFileChange = async (e) => {
        setSelectedFile(e.target.files[0])
    }

    // Procesar archivo cuando se haga clic en "Predecir"
    const handleFileUpload = async () => {
        if (!selectedFile) {
            alert("Por favor selecciona un archivo CSV primero.")
            return
        }

        // Crear un objeto FormData para enviar el archivo al backend
        // El FormData es un objeto que permite construir un conjunto de pares clave/valor
        const formData = new FormData()
        formData.append("file", selectedFile)

        // Logica para llamar al backend
        const response = await fetch("http://localhost:8000/predecir-csv", {
            method: "POST",
            body: formData,
        })

        const data = await response.json()
        setPredictions(data.predicciones)

        // Limpiar input de archivo después de procesarlo
        setSelectedFile(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = "" // Resetear el input
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Ingresa el CSV de los candidatos</h1>

            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
                <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="p-2 block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                />
                <button
                    onClick={handleFileUpload}
                    className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Predecir
                </button>

            </div>

            {predictions.length > 0 && (
                <div className="mt-6 w-full max-w-3xl overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700 border-collapse border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 border border-gray-300">Empleado</th>
                                <th className="px-4 py-2 border border-gray-300">Horas Capacitación</th>
                                <th className="px-4 py-2 border border-gray-300">Antigüedad</th>
                                <th className="px-4 py-2 border border-gray-300">Calificación Previa</th>
                                <th className="px-4 py-2 border border-gray-300">Predicción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {predictions.map(({ id, horas_capacitación, antiguedad, calificación_previa, prediccion }, i) => (
                                <tr key={i} className="bg-white border border-gray-300">
                                    <td className="px-4 py-2 border">{id}</td>
                                    <td className="px-4 py-2 border">{horas_capacitación}</td>
                                    <td className="px-4 py-2 border">{antiguedad}</td>
                                    <td className="px-4 py-2 border">{calificación_previa}</td>
                                    <td className="px-4 py-2 border">{prediccion.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default PredictEmployeeByCSV