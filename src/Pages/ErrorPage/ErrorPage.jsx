import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-5">
            <h2 className="text-4xl font-bold">404 | Page Not Found</h2>
            <NavLink className="bg-red-900 rounded-md text-gray-100 font-semibold px-6 py-2 text-lg">Home</NavLink>
        </div>
    );
};

export default ErrorPage;