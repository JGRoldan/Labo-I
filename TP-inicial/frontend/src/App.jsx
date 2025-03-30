import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className='text-center py-4'>Desarrollado por X</footer>
    </div>
  )
}

export default App
