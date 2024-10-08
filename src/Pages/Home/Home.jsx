import { Helmet } from "react-helmet-async";
import Hero from "../../Components/Hero/Hero";
import DonorList from "../../Components/DonorList/DonorList";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - oClub</title>
            </Helmet>
            <div className="bg-gradient-to-r from-red-300 via-gray-300 to-red-300 min-h-screen">
                <Hero />
                <div className="flex flex-col md:flex-row gap-2 max-w-screen-xl mx-auto">
                    <aside className="md:w-1/4 w-full px-5 pt-5">
                        <div className="border border-red-900 rounded-md p-2">
                            <div className="flex gap-2 flex-col pb-5">
                                <h2 className="py-2 font-bold text-2xl">Search</h2>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="phoneNumber">Select Blood Group</label>
                                    <select className="border border-red-800 rounded-md p-2 outline-none bg-transparent text-gray-950 placeholder-gray-600" name="" defaultValue="selectGroup" >
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
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="phoneNumber">Select Division</label>
                                    <select className="border border-red-800 rounded-md p-2 outline-none bg-transparent text-gray-950 placeholder-gray-600" name="" defaultValue="selectDivision" >
                                        <option value="selectDivision" disabled>Select Division</option>
                                        <option value="Khulna">Khulna</option>
                                        <option value="Dhaka">Dhaka</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <aside className="md:w-3/4 w-full px-5 pb-5 pt-0 md:pt-5">
                        <DonorList />
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Home;