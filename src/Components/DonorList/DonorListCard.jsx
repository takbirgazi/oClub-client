import PropTypes from 'prop-types';
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";


const DonorListCard = ({ donorInfo }) => {
    const { name, image, bloodGroup, lastDonate, location, phone } = donorInfo;
    return (
        <div className="border border-red-900 shadow-lg rounded-md">
            <img className="h-56 w-full rounded-tr-md rounded-tl-md" src={image} alt={name} />
            <div className="p-2">
                <h2 className="md:text-lg lg:text-2xl font-bold">{name}</h2>
                <h3 className="text-lg text-red-500">Blood Group: <span className="font-bold text-xl">{bloodGroup}</span></h3>
                <div className="flex flex-col gap-1 my-2">
                    <p><span className="font-semibold">Last Donate:</span> <span>{lastDonate} (3 Month 23 Days ago)</span></p>
                    <p><span className="font-semibold">BMI:</span> <span>5.4</span></p>
                    <p><span className="font-semibold">Location:</span> <span>{location}</span></p>
                    <p className="flex gap-1 items-center"><FaWhatsapp /><span className="font-bold ">{phone}</span></p>
                </div>
                <div className="flex items-center justify-center py-3">
                    <a href={`tel:${phone}`} className="bg-red-900 text-gray-100 font-semibold py-1 px-3 rounded-md flex items-center gap-1"><FiPhoneCall />Call</a>
                </div>
            </div>
        </div>
    );
};

export default DonorListCard;

DonorListCard.propTypes = {
    donorInfo: PropTypes.object,
}