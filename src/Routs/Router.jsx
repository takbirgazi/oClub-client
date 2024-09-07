import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/signUp",
                element: <SignUp />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
]);

export default router