import watsAppIcon from "../../assets/images/watsappIcon.jpeg"

const DonorListCard = () => {
    return (
        <div className="border border-red-900 shadow-lg rounded-md">
            <img className="h-56 w-full rounded-tr-md rounded-tl-md" src="https://scontent.fjsr12-1.fna.fbcdn.net/v/t39.30808-1/339843164_762183158612999_6871029539477375640_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=cFPZlbU9iCcQ7kNvgEl1OdC&_nc_ht=scontent.fjsr12-1.fna&_nc_gid=ALxnD7JdcwLmb9_g0fxAZ-L&oh=00_AYB6n9aO71yyJLPtEKy21pDrXErpaeTn8m-v-KEJr2JzjA&oe=66D53213" alt="" />
            <div className="p-2">
                <h2 className="md:text-lg lg:text-2xl font-bold">Md. Takbir Gazi</h2>
                <h3 className="text-lg text-red-500">Blood Group: <span className="font-bold text-xl">O-</span></h3>
                <div className="flex flex-col gap-1 my-2">
                    <p><span className="font-semibold">Last Donate:</span> <span>24/4/2024 (3 Month 23 Days ago)</span></p>
                    <p><span className="font-semibold">BMI:</span> <span>5.4</span></p>
                    <p><span className="font-semibold">Location:</span> <span>Khulna, Khulna, Bangladesh</span></p>
                    <p className="flex gap-1 items-center"><img className="h-7 w-7" src={watsAppIcon} alt="" /><span className="font-bold ">01811947182</span></p>
                </div>
                <div className="flex items-center justify-center py-3">
                    <button className="bg-red-900 text-gray-100 font-semibold px-4 py-1 rounded-md">Call Now</button>
                </div>
            </div>
        </div>
    );
};

export default DonorListCard;