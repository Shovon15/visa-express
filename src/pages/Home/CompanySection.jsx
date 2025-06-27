import { Button, Typography } from "@material-tailwind/react";
import conversationImg from "../../assets/image/consultancy-2.png";
import userIcon from "../../assets/icon/user.png";
import salaryIcon from "../../assets/icon/money.png";
import questionIcon from "../../assets/icon/question.png";
import reviewIcon from "../../assets/icon/satisfaction.png";
const CompanySection = () => {
  const items = [
    {
      icon: userIcon,
      text: "1,000+",
      desc: "Dreams Made Reality",
    },
    {
      icon: salaryIcon,
      text: "50+",
      desc: "Countries Covered",
    },
    {
      icon: reviewIcon,
      text: "99%",
      desc: "Client Satisfaction Rate",
    },
    {
      icon: questionIcon,
      text: "24/7",
      desc: "Expert Support & Guidance",
    },
  ];

  return (
    <div className=" py-5 md:py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2  lg:px-[4rem] lg:py-[2rem]">
        {items.map(({ text, desc, icon }) => (
          <div href="#" key={text} className="flex gap-2 justify-center">
            <div className=" p-2">
              <img src={icon} className="w-10 h-10" />
            </div>
            <div>
              <p className="mb-1 font-bold text-primary">{text}</p>
              <Typography variant="small" color="gray" className="font-normal">
                {desc}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 md:px-10 pt-10">
        <div className="flex bg-primary transform transition duration-300 rounded-2xl justify-between items-center px-5 lg:px-10 p-3">
          <div className="p-5 lg:p-0 text-center lg:text-left">
            <p className="text-xl md:text-3xl font-bold text-white">
              Connect anonymously with industry experts for honest career advice
            </p>
            <Button
              variant="outlined"
              color="white"
              className=" rounded-full text-white mt-5"
            >
              Speak to an Expert
            </Button>
          </div>
          <img className="w-96 hidden lg:block" src={conversationImg} />
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
