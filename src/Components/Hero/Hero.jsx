import bloodDonationBnner from "../../assets/images/bloodDonorBAnner.avif"
const Hero = () => {
    return (
        <div className="bg-gray-400 h-auto max-h-[500px] w-full overflow-hidden">
            <img className="w-full h-full object-contain" src={bloodDonationBnner} alt="Banner" />
        </div>
    );
};

export default Hero;