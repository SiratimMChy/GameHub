import { createBrowserRouter } from "react-router";
import Rootlayout from "../root/Rootlayout";
import Home from "../pages/Home";
import AllGames from "../pages/AllGames";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Rootlayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }, {
                path: '/allgames',
                element: <AllGames/>
            }, {
                path: '/',
                element: <Home />
            }
        ]
    },
]);

export default router;