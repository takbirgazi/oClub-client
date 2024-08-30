import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";

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
                path: "/about",
                element: <About />
            }
        ]
    }
]);

export default router