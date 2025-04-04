import { Outlet } from 'react-router-dom'
import './App.css'

// Componente principal de la aplicación
// Este componente utiliza React Router para renderizar diferentes rutas y vistas dentro de la aplicación
function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <main className="flex-grow">
        <Outlet /> {/* Renderiza el contenido de las rutas hijas */}
      </main>
      <footer className='text-center py-4'>Desarrollado por GastonRoldan - MauroFlores - JoaquinSpengler</footer>
    </div>
  )
}

export default App
