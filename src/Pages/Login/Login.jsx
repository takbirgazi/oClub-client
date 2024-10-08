import { NavLink } from "react-router-dom";;
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
    const [passShow, setPassShow] = useState(false);

    return (
        <div className="max-w-screen-xl mx-auto p-5 flex items-center justify-center bg-gradient-to-r from-red-300 via-gray-300 to-red-300 min-h-screen">
            <div className="flex gap-5 justify-center items-center">
                <div className="max-w-[500px] w-full border rounded-lg border-red-800 p-5">
                    <h2 className="text-4xl font-bold text-gray-900 pb-5">Log In</h2>
                    <div className="flex flex-col gap-2">
                        <form className="flex flex-col gap-3" action="">
                            <div className="flex flex-col gap-1">
                                <label className="text-gray-950" htmlFor="phoneNumber">Phone:</label>
                                <input className="border border-gray-950 rounded-md p-2 outline-none bg-transparent text-gray-950 placeholder-gray-600" type="text" name="phoneNumber" placeholder="Write Your Phone Number" required />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-gray-950" htmlFor="phoneNumber">Password:</label>
                                <div className="relative w-full flex items-center justify-center">
                                    <input className="border border-gray-950 rounded-md p-2 pr-7 outline-none w-full bg-transparent text-gray-950 placeholder-gray-600" type={passShow ? "text" : "password"} name="password" placeholder="Write Your Password" required />
                                    <div onClick={() => setPassShow(!passShow)} className="absolute right-2 top-1/3 cursor-pointer"><span>{passShow ? <FaEyeSlash /> : <FaEye />}</span></div>
                                </div>
                            </div>

                            <div className="flex">
                                <input className="border border-red-500 rounded-md p-2 outline-none cursor-pointer bg-red-800 text-gray-100 font-bold" type="submit" name="phoneNumber" value="Log In" />
                            </div>
                        </form>
                        <div className="py-4">
                            <NavLink className="text-blue-500" to="/signUp">I want to create an account</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;