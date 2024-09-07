import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-red-900">
            <div className="max-w-screen-xl mx-auto py-2 px-5 flex gap-2 items-center justify-between">
                <NavLink to="/" className="text-gray-100 text-3xl lg:text-4xl font-bold">oClub</NavLink>
                <div>
                    <NavLink to="login" className="text-gray-100 font-semibold">Log In</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;