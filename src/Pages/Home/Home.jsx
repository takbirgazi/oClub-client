import { Helmet } from "react-helmet-async";
import Hero from "../../Components/Hero/Hero";
import DonorList from "../../Components/DonorList/DonorList";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - oClub</title>
            </Helmet>
            <div>
                <Hero />
                <div className="flex flex-col md:flex-row gap-2 max-w-screen-xl mx-auto">
                    <aside className="md:w-1/4 w-full px-5 pt-5">
                        <div className="border border-red-900 rounded-md p-2">
                            Search...
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