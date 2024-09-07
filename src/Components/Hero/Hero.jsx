import bloodDonationBnner from "../../assets/images/bloodDonorBAnner.avif"
const Hero = () => {
    return (
        <div className="bg-gray-400 h-[500px] w-full">
            <img className="w-full h-full object-cover" src={bloodDonationBnner} alt="Banner" />
        </div>
    );
};

export default Hero;