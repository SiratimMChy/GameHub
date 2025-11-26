import { createBrowserRouter } from "react-router";
import Rootlayout from "../root/Rootlayout";
import Home from "../pages/Home";
import AllGames from "../pages/AllGames";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/ViewDetails";
import ForgetPassword from "../pages/ForgetPassword";
import PopularGames from "../component/PopularGames";
import ErrorPage from "../pages/ErrorPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Rootlayout />,
        errorElement:<ErrorPage/>,
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
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Register />
            },
            {
                path: '/popular',
                element: <PopularGames />
            },
            {
                path: '/profile',
                element: <PrivateRoute> <Profile /></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute> <ViewDetails /></PrivateRoute>
            },
            {
                path: '/forgetpassword/:email',
                element:<ForgetPassword/>
            },

        ]
    },
]);

export default router;