import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const [errMessage, setErrMessage] = useState('');
    const [passShow, setPassShow] = useState(false);
    const navigate = useNavigate();

    const handlerSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const phoneNumber = form.phoneNumber.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const bloodGroup = form.bloodGroup.value;
        const userData = { fullName, phoneNumber, password, bloodGroup };
        if (password !== confirmPassword) {
            toast.error('Password Not Match!');
            setErrMessage("Password Not Match!");
            return;
        }
        if (bloodGroup == "selectGroup") {
            toast.error('Select Your Blood Group!');
            setErrMessage("Select Your Blood Group!");
            return;
        }
        if (password === confirmPassword) {
            axios.post(`${import.meta.env.VITE_base_api}/users`, userData)
                .then(res => {
                    toast.success(res.data.message);
                    form.reset();
                    navigate("/");
                })
        }
    }

    return (
        <div className="max-w-screen-xl mx-auto p-5 flex items-center justify-center bg-gradient-to-r from-red-300 via-gray-300 to-red-300 min-h-screen">
            <div className="flex gap-5 justify-center items-center w-full">
                <div className="max-w-[500px] w-full md:w-10/12 mx-auto border rounded-lg border-red-800 p-5">
                    <h2 className="text-4xl font-bold text-gray-900 pb-5">Sign Up</h2>
                    <div className="flex flex-col gap-2">
                        <form onSubmit={handlerSignUp} className="flex flex-col gap-3">
                            <div className="text-red-500">{errMessage && errMessage}</div>
                            <div className="flex flex-col gap-1">
                                <label className="text-gray-950" htmlFor="fullName">Name:</label>
                                <input className="border border-gray-950 rounded-md p-2 outline-none bg-transparent text-gray-950 placeholder-gray-600" type="text" name="fullName" placeholder="Write Your Full Name" required />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-gray-950" htmlFor="phoneNumber">Phone:</label>
                                <input className="border border-gray-900 rounded-md p-2 outline-none bg-transparent text-gray-950 placeholder-gray-600" type="text" name="phoneNumber" placeholder="Write Your Phone Number" required />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-gray-950" htmlFor="password">Password:</label>
                                <div className="relative w-full flex items-center justify-center">
                                    <input className="border border-gray-950 rounded-md p-2 pr-7 outline-none w-full bg-transparent text-gray-950 placeholder-gray-600" type={passShow ? "text" : "password"} name="password" placeholder="Set a Password" required />
                                    <div onClick={() => setPassShow(!passShow)} className="absolute right-2 top-1/3 cursor-pointer"><span>{passShow ? <FaEyeSlash /> : <FaEye />}</span></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-gray-950" htmlFor="confirmPassword">Confirm Password:</label>
                                <div className="relative w-full flex items-center justify-center">
                                    <input className="border border-gray-950 rounded-md p-2 pr-7 outline-none w-full bg-transparent text-gray-950 placeholder-gray-600" type={passShow ? "text" : "password"} name="confirmPassword" placeholder="Write Your Password" required />
                                    <div onClick={() => setPassShow(!passShow)} className="absolute right-2 top-1/3 cursor-pointer"><span>{passShow ? <FaEyeSlash /> : <FaEye />}</span></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-gray-950" htmlFor="bloodGroup">Select Your Blood Group:</label>
                                <select className="border border-gray-950 rounded-md p-2 outline-none bg-transparent text-gray-950 placeholder-gray-600" name="bloodGroup" defaultValue="selectGroup" >
                                    <option value="selectGroup" disabled>Select Group</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>
                            <div className="flex">
                                <input className="border border-red-500 rounded-md p-2 outline-none cursor-pointer bg-red-800 text-gray-100 font-bold" type="submit" name="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div className="py-4">
                            <NavLink className="text-blue-500" to="/login">I have an account</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;