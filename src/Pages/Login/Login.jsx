import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-5 min-h-screen flex items-center justify-center">
            <div className="flex gap-5 justify-center items-center">
                <div className="w-full border rounded-lg border-red-800 p-5">
                    <h2 className="text-4xl font-bold text-gray-900 pb-5">Log In</h2>
                    <div className="flex flex-col gap-2">
                        <form className="flex flex-col gap-3" action="">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="phoneNumber">Phone:</label>
                                <input className="border border-gray-500 rounded-md p-2 outline-none" type="text" name="phoneNumber" placeholder="Write Your Phone Number" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="phoneNumber">Password:</label>
                                <input className="border border-gray-500 rounded-md p-2 outline-none" type="password" name="phoneNumber" placeholder="Write Your Password" />
                            </div>
                            
                            <div className="flex">
                                <input className="border border-red-500 rounded-md p-2 outline-none cursor-pointer bg-red-800 text-gray-100 font-bold" type="submit" name="phoneNumber" value="Log In"/>
                            </div>
                        </form>
                        <NavLink className="text-blue-500" to="/signUp">I want to create an account</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;