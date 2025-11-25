import { createBrowserRouter } from "react-router";
import Rootlayout from "../root/Rootlayout";
import Home from "../pages/Home";
import AllGames from "../pages/AllGames";
import Login from "../pages/Login";
import Register from "../pages/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Rootlayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }, 
            {
                path: '/allgames',
                element: <AllGames />
            }, 
            {
                path: '/',
                element: <Home />
            },
             {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Register/>
            },

        ]
    },
]);

export default router;