import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import CarouselSwiper from "./carousel/CarouselSwiper";
import startIcon from "../../../assets/icon/3star.png";

const CompanyPage = () => {
  return (
    <div className=" px-5 py-5 md:py-10">
      <div className="flex flex-wrap justify-center items-center gap-2">
        <p className="text-2xl font-bold text-center text-textPrimary gap-4">
          Find companies that deserve you!
        </p>
        <img className="w-14 h-14" src={startIcon} />
      </div>
      <div className="pt-5 md:pt-0">
        <CarouselSwiper />
      </div>
      <div className="flex justify-center ">
        <Link to="/company">
          <Button
            size="lg"
            variant="outlined"
            className=" font-bold capitalize outline-none py-2 gap-3 px-2 hover:bg-transparent active:bg-transparent w-56 text-green-500 text-xl border-b-4 border-r-4 border-green-500 mt-5 ring-0 focus:ring-0 hover:border-t-green-800 hover:border-l-green-800 hover:border-b-black hover:border-r-black hover:bg-green-800 active:bg-green-900 hover:text-white"
          >
            View all company
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CompanyPage;
