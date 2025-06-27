import { Button, Typography } from "@material-tailwind/react";
import searchIcon from "../../../assets/icon/search.png";
import exploreImg from "../../../assets/image/explore.png";
import { IoIosArrowRoundForward } from "react-icons/io";
// import { Link } from "react-router-dom";
const ExploreCompanySection = () => {
  return (
    <div className="min-h-96 p-5 md:p-10 ">
      <p className="text-2xl font-bold flex justify-center items-center gap-2 pb-5 text-textPrimary">
        Explore Visa Express
        <img className="w-7 h-7" src={searchIcon} />
      </p>
      <Typography variant="lead" className="text-center">
        Bangladesh’s trusted platform for visa services, immigration guidance,
        and global mobility solutions.
      </Typography>
      <div className="flex flex-col p-5 md:flex-row w-full">
        <div className="mx-15 w-full  lg:w-1/2 ">
          <img className=" lg:max-w-[400px]" src={exploreImg} alt="..." />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-start md:justify-center gap-4 lg:px-10">
          <p className="text-xl md:text-xl pt-5 text-center md:text-start">
            Helping you travel, work, and settle abroad — with expert support
            every step of the way.
          </p>
          <div className="flex md:justify-start  justify-center ">
            <Button
              size="md"
              variant="text"
              className="font-bold capitalize outline-none py-2 flex  items-center  gap-3 px-2 hover:bg-transparent active:bg-transparent  text-green-500 text-md lg:text-xl border-b-2 rounded-none border-green-500"
            >
              Explore Visa Express
              <IoIosArrowRoundForward className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCompanySection;
