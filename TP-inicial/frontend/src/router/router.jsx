import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import App from "../App.jsx"

//Carga diferida de componentes
const Home = lazy(() => import("../pages/Home.jsx"))
const PredictEmployee = lazy(() => import("../pages/PredictEmployee.jsx"))
const PredictEmployeeByCSV = lazy(() => import("../pages/PredictEmployeeByCSV.jsx"))
const NotFound = lazy(() => import("../pages/NotFound.jsx"))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // App como layout principal
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "predict-employee",
                element: <PredictEmployee />
            },
            {
                path: "predict-employee-csv",
                element: <PredictEmployeeByCSV />
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    }, // Ruta 404
])