import DonorListCard from "./DonorListCard";

const DonorList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border border-red-900 rounded-md p-2">
            <DonorListCard />
            <DonorListCard />
            <DonorListCard />
            <DonorListCard />
            <DonorListCard />
            <DonorListCard />
        </div>
    );
};

export default DonorList;