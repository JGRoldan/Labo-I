import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <section className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    Sistema de Predicción de Desempeño Laboral
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Pronostica el rendimiento futuro de tus empleados con inteligencia de datos
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
                    <p className="text-blue-700">
                        Nuestro algoritmo analiza capacitación, antigüedad y calificación previa para predecir el desempeño futuro.
                    </p>
                </div>
            </section>

            <section className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow flex flex-col justify-between">
                    <div className="text-blue-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Evaluación Individual</h2>
                    <p className="text-gray-600 mb-6">
                        Ingresa los datos de un empleado específico para obtener una predicción personalizada de su desempeño.
                    </p>
                    <Link
                        to="/predict-employee"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors w-fit"
                    >
                        Probar ahora
                    </Link>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow flex flex-col justify-between">
                    <div className="text-green-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Análisis Masivo</h2>
                    <p className="text-gray-600 mb-6">
                        Sube un archivo CSV con datos de múltiples empleados para obtener predicciones en lote.
                    </p>
                    <Link
                        to="/predict-employee-csv"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors w-fit"
                    >
                        Procesar archivo
                    </Link>
                </div>
            </section>

            <section className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Cómo funciona?</h2>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>Nuestro modelo analiza tres factores clave: capacitación recibida, antigüedad en la empresa y calificación previa.</li>
                    <li>Aplicamos algoritmos de machine learning para identificar patrones de desempeño.</li>
                    <li>Generamos una proyección del rendimiento futuro.</li>
                    <li>Te ayudamos a identificar oportunidades de mejora para tu equipo.</li>
                </ol>
            </section>
        </div>
    )
}

export default Home