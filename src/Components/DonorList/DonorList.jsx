import DonorListCard from "./DonorListCard";

const DonorList = () => {
    const donorInfo = [
        {
            id: 1,
            name: "Md. Takbir Gazi",
            image: `https://scontent.fjsr12-1.fna.fbcdn.net/v/t39.30808-1/339843164_762183158612999_6871029539477375640_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeHUTZWNH3bT9yoM5tC9RJERIWQ5NtBFCSohZDk20EUJKpq_eaRZgbMQf_272puvAb60sSTEx2PxOSVX23UsjFhm&_nc_ohc=VRmzaXS-Ga0Q7kNvgFwpdFv&_nc_ht=scontent.fjsr12-1.fna&oh=00_AYDE67Zp6OlcbPoMDw5b9UE-HapX0ezO4kmD_5v3DOJbFg&oe=66E10F93`,
            bloodGroup: "O+",
            lastDonate: "24/08/2024",
            location: "Khulna, Bangladesh",
            phone: "01811947182"
        },
        {
            id: 2,
            name: "Md. Takbir Gazi",
            image: `https://scontent.fjsr12-1.fna.fbcdn.net/v/t39.30808-1/339843164_762183158612999_6871029539477375640_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeHUTZWNH3bT9yoM5tC9RJERIWQ5NtBFCSohZDk20EUJKpq_eaRZgbMQf_272puvAb60sSTEx2PxOSVX23UsjFhm&_nc_ohc=VRmzaXS-Ga0Q7kNvgFwpdFv&_nc_ht=scontent.fjsr12-1.fna&oh=00_AYDE67Zp6OlcbPoMDw5b9UE-HapX0ezO4kmD_5v3DOJbFg&oe=66E10F93`,
            bloodGroup: "O+",
            lastDonate: "24/08/2024",
            location: "Khulna, Bangladesh",
            phone: "01811947182"
        },
        {
            id: 3,
            name: "Md. Takbir Gazi",
            image: `https://scontent.fjsr12-1.fna.fbcdn.net/v/t39.30808-1/339843164_762183158612999_6871029539477375640_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeHUTZWNH3bT9yoM5tC9RJERIWQ5NtBFCSohZDk20EUJKpq_eaRZgbMQf_272puvAb60sSTEx2PxOSVX23UsjFhm&_nc_ohc=VRmzaXS-Ga0Q7kNvgFwpdFv&_nc_ht=scontent.fjsr12-1.fna&oh=00_AYDE67Zp6OlcbPoMDw5b9UE-HapX0ezO4kmD_5v3DOJbFg&oe=66E10F93`,
            bloodGroup: "O+",
            lastDonate: "24/08/2024",
            location: "Khulna, Bangladesh",
            phone: "01811947182"
        },
        {
            id: 4,
            name: "Md. Takbir Gazi",
            image: `https://scontent.fjsr12-1.fna.fbcdn.net/v/t39.30808-1/339843164_762183158612999_6871029539477375640_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeHUTZWNH3bT9yoM5tC9RJERIWQ5NtBFCSohZDk20EUJKpq_eaRZgbMQf_272puvAb60sSTEx2PxOSVX23UsjFhm&_nc_ohc=VRmzaXS-Ga0Q7kNvgFwpdFv&_nc_ht=scontent.fjsr12-1.fna&oh=00_AYDE67Zp6OlcbPoMDw5b9UE-HapX0ezO4kmD_5v3DOJbFg&oe=66E10F93`,
            bloodGroup: "O+",
            lastDonate: "24/08/2024",
            location: "Khulna, Bangladesh",
            phone: "01811947182"
        },
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border border-red-900 rounded-md p-2">
            {
                donorInfo.map(donor => <DonorListCard key={donor.id} donorInfo={donor} />)
            }
        </div>
    );
};

export default DonorList;