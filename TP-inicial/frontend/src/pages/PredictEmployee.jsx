import { useState } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'

// Este componente se encarga de predecir el puntaje de un candidato a empleado
// a partir de los datos ingresados por el usuario en un formulario. 
// Al enviar el formulario, se realiza una petición POST a la API

function PredictEmployee() {
    const [formData, setFormData] = useState({
        horas_capacitacion: '',
        antiguedad: '',
        calificacion_prev: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Llamar a la API para predecir el puntaje
        const response = await fetch('http://localhost:8000/predecir', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        // Convertir la respuesta a JSON 
        const data = await response.json()

        // Alerta de éxito
        Swal.fire({
            title: 'Predicción realizada',
            text: `Puntaje predicho: ${data.prediccion}`,
            icon: "success"
        })

        // Setear los datos del formulario a valores por defecto
        setFormData({
            horas_capacitacion: '',
            antiguedad: '',
            calificacion_prev: ''
        })
    }

    return (
        <section className="flex flex-col justify-center items-center min-h-[80vh]">
            <h1 className='text-xl font-bold text-gray-800 mb-6'>Ingresa los datos del candidato</h1>
            <form className="w-[25%]" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input value={formData.horas_capacitacion} onChange={(e) => setFormData({ ...formData, horas_capacitacion: e.target.value })} type="number" name="floating_antiguedad" id="floating_antiguedad" min={0} max={100} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_antiguedad" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Horas de capacitación</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input value={formData.antiguedad} onChange={(e) => setFormData({ ...formData, antiguedad: e.target.value })} type="number" name="floating_capacitacion" id="floating_capacitacion" min={0} max={20} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_capacitacion" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Antiguedad</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input value={formData.calificacion_prev} onChange={(e) => setFormData({ ...formData, calificacion_prev: e.target.value })} type="number" name="floating_calificacion" id="floating_calificacion" min={0} max={10} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_calificacion" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Calificación previa</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Predecir</button>
            </form>
        </section>
    )
}

export default PredictEmployee