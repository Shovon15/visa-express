/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import tourIcon from "../../../assets/icon/tour.png";
import compareIcon from "../../../assets/icon/work.png";
import addPhotoIcon from "../../../assets/icon/consultant.png";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const NavItems = ({ scrollPosition }) => {
  const [openServiceMenu, setOpenServiceMenu] = useState(false);

  const serviceMenu = (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
      placement="bottom-end"
      open={openServiceMenu}
      handler={setOpenServiceMenu}
      allowHover
    >
      <MenuHandler>
        <div onClick={() => setOpenServiceMenu(!openServiceMenu)}>
          <NavButton
            label="Services"
            showIcon={true}
            isOpen={openServiceMenu}
          />
        </div>
      </MenuHandler>
      <MenuList className="hidden w-[26rem] grid-cols-1 gap-3 overflow-visible lg:grid shadow-xl relative">
        <div className="bg-white  w-5 h-5 absolute rotate-45 left-12 -top-1 outline-none"></div>
        <ul className="col-span-1 flex w-full flex-col gap-1 z-10 outline-none">
          {serviceMenuItems.map(({ title, description, icon, link, id }) => (
            <Link to={link} key={id}>
              <MenuItem className="parent flex items-center gap-3 bg-[#122d3d0e] hover:bg-primary group">
                <div className="child bg-gray-200 hover:bg-white rounded-md p-3">
                  <img src={icon} className="w-5 h-5" />
                </div>
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-1 group-hover:text-white"
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal group-hover:text-white"
                  >
                    {description}
                  </Typography>
                </div>
              </MenuItem>
            </Link>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );

  return (
    <div
      className={` px-10  hidden lg:flex justify-between items-center
					${scrollPosition > 50 ? "border-b border-primary" : ""}`}
    >
      <div className="flex ">
        <Link to="/">
          <NavButton label="Home" />
        </Link>
        <NavButton label="About Us" />
        {serviceMenu}

        <NavButton label="Offers" />
        <NavButton label="Contact Us" />
      </div>
    </div>
  );
};

export default NavItems;

const NavButton = ({
  label,
  showIcon = false,
  isOpen = false,
  onClick,
  className = "",
}) => {
  return (
    <Button
      size="sm"
      variant="text"
      onClick={onClick}
      className={`whitespace-nowrap flex items-center gap-1 rounded-none text-base font-medium capitalize tracking-normal outline-none text-textPrimary hover:bg-primary active:bg-primary/90 hover:text-white ${className}`}
    >
      {label}
      {showIcon && (
        <MdOutlineKeyboardArrowDown
          className={`h-5 w-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      )}
    </Button>
  );
};

const serviceMenuItems = [
  {
    id: 1,
    icon: tourIcon,
    link: "/",
    title: "Tour & Travels",
    description: "Custom tour packages and full travel support.",
  },
  {
    id: 2,
    icon: compareIcon,
    link: "/",
    title: "Work Permit",
    description: "Secure legal work permits with expert help.",
  },
  {
    id: 3,
    icon: tourIcon,
    link: "/",
    title: "Visit Visa",
    description: "Quick visit visa processing for all needs.",
  },
  {
    id: 4,
    icon: addPhotoIcon,
    link: "/",
    title: "Expert Consultation",
    description: "Get guided advice from visa experts.",
  },
];
