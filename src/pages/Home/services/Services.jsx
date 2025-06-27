import startIcon from "../../../assets/icon/3star.png";
import img1 from "../../../assets/image/tour-and-travels.jpg";
import img2 from "../../../assets/image/work-permit.png";
import img3 from "../../../assets/image/visit-visa.jpg";
import img4 from "../../../assets/image/consultancy.jpg";
import ServiceCard from "./ServiceCard";
const Services = () => {
  return (
    <div className=" px-5 py-5 md:py-10">
      <div className="flex flex-wrap justify-center items-center gap-2">
        <p className="text-2xl font-bold text-center text-textPrimary gap-4">
          Explore Our Expert Services
        </p>
        <img className="w-14 h-14" src={startIcon} />
      </div>
      <div className="pt-5 md:pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

const data = [
  {
    id: 1,
    image: img1, // replace with relevant image for Tour & Travels
    title: "Tour & Travels",
    desc: "Explore the world with our expert travel planning and visa assistance tailored to your needs.",
  },
  {
    id: 2,
    image: img2, // replace with relevant image for Work Permit
    title: "Work Permit",
    desc: "Secure your work permit smoothly with our trusted consultation and documentation support.",
  },
  {
    id: 3,
    image: img3, // replace with relevant image for Visit Visa Processing
    title: "Visit Visa Processing",
    desc: "Get hassle-free visit visa processing with quick approvals and expert guidance every step of the way.",
  },
  {
    id: 4,
    image: img4, // replace with relevant image for Expert Consultancy
    title: "Expert Consultancy",
    desc: "Receive personalized consultancy from experienced professionals to make the right visa decisions.",
  },
];
