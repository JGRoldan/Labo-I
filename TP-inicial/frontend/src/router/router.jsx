import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import App from "../App.jsx"

//Carga diferida de componentes
const Home = lazy(() => import("../pages/Home.jsx"))
const PredictEmployee = lazy(() => import("../pages/PredictEmployee.jsx"))
const PredictEmployeeByCSV = lazy(() => import("../pages/PredictEmployeeByCSV.jsx"))
const NotFound = lazy(() => import("../pages/NotFound.jsx"))

// Crea el enrutador de la aplicación
// Define las rutas de la aplicación utilizando createBrowserRouter
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // App como layout principal
        children: [
            {
                index: true,
                element: <Home /> // Página de inicio
            },
            {
                path: "predict-employee",
                element: <PredictEmployee /> // Página de predicción de empleados
            },
            {
                path: "predict-employee-csv",
                element: <PredictEmployeeByCSV /> // Página de predicción de empleados por CSV
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    }, // Ruta 404
])