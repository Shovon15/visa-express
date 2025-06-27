import { Button, Typography } from "@material-tailwind/react";
import bannerImg from "../../assets/image/banner.jpg";
import TypingAnimation from "../../components/banner/TypingAnimation";

const Banner = () => {
  return (
    <div
      id="home"
      className="flex flex-col-reverse md:flex-row min-h-96 px-5 md:px-10  md:pt-10 mt-[4rem]"
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 md:pr-5 py-10 md:py-0">
        <Typography className="text-3xl md:text-4xl font-bold !leading-[40px] text-center md:text-left">
          Your visa solutions for <br />
          <TypingAnimation />
        </Typography>
        <div className="text-center md:text-left">
          <Button
            size="lg"
            variant="outlined"
            className=" font-bold capitalize outline-none py-2 gap-3 px-2 hover:bg-transparent  w-44 text-primary text-xl border-b-4 border-r-4 border-primary mt-5 ring-0 focus:ring-0 hover:border-t-primary hover:border-l-primary hover:border-b-black hover:border-r-black hover:bg-primary active:bg-primary/80 hover:text-white"
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 hidden lg:flex justify-end">
        <img className="rounded-xl" src={bannerImg} />
      </div>
    </div>
  );
};

export default Banner;
