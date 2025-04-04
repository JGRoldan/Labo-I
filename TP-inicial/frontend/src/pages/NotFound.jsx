import { Link } from 'react-router-dom'

// Este componente se encarga de mostrar la página de error 404 cuando no se encuentra la ruta solicitada
// Se utiliza para redirigir al usuario a la página de inicio o a otra ruta válida
function NotFound() {
    return (
        <section className="bg-white flex justify-center items-center h-screen">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-500">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Algo salio mal.</p>
                    <p className="mb-4 text-lg font-light text-gray-500">Lo sentimos, no logramos encontrar la página. Encontrarás mucho para explorar en la página de inicio. </p>
                    <Link to={'/'} className="inline-flex text-white bg-red-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Ir al inicio</Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound