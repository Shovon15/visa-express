import { Typography } from "@material-tailwind/react";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import logo from "../../../assets/logo/logo.jpg"; // Adjust the path as necessary
const LINKS = [
  {
    title: "Resources",
    items: ["Guides", "FAQs", "Visa Policies", "Travel Tips"],
  },
  {
    title: "Services",
    items: ["Tour & Travels", "Work Permit", "Visit Visa", "Consultancy"],
  },
  {
    title: "Offers",
    items: [
      "Free Consultation",
      "Visa Discounts",
      "Tour Deals",
      "Referral Bonus",
    ],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full bg-primary py-5 md:py-10">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div className="space-y-5">
            <img className="w-32" src={logo} />
            <div>
              <Typography
                variant="small"
                className="mb-4 font-normal text-white md:mb-0"
              >
                Lake drive Road, Dhaka, Bangladesh
              </Typography>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <p className="mb-3 font-medium opacity-70 text-white text-[18px] lg:text-[20px]">
                  {title}
                </p>
                {items.map((link) => (
                  <li key={link}>
                    <p className="py-1.5 font-normal transition-colors text-white/80 hover:text-white/50 cursor-pointer text-[14px] lg:text-[16px]">
                      {link}
                    </p>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-white md:mb-0"
          >
            &copy; {currentYear} Visa Express. All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-white sm:justify-center md:mr-10">
            <FaFacebookSquare className="w-5 h-5" />
            <IoLogoYoutube className="w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
