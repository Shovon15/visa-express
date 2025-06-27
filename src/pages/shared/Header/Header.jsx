/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Drawer,
  ListItem,
  ListItemPrefix,
  List,
  AccordionBody,
  AccordionHeader,
  Accordion,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo-2.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./header.css";
import NavItems from "./NavItems";

export function Header() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const openDrawer = () => setIsOpenDrawer(true);
  const closeDrawer = () => setIsOpenDrawer(false);

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsOpenDrawer(false),
    );
  }, []);

  // ----------------scroll position

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setScrollPosition(Math.round(window.scrollY)),
    );
    return () => {
      window.removeEventListener("scroll", () =>
        setScrollPosition(Math.round(window.scrollY)),
      );
    };
  }, []);

  return (
    <div className="">
      <Navbar
        className={`fixed top-0 z-10 h-max max-w-full rounded-none px-0 py-0 border-none !bg-white 
			 ${scrollPosition > 50 ? "shadow-lg" : "shadow-none"}`}
      >
        <div className="flex items-center justify-between text-blue-gray-900 px-5 md:px-10 py-0 max-w-7xl mx-auto">
          <div className="flex gap-4 justify-between items-center w-full">
            <Link to="/" className="mr-4 cursor-pointer py-1.5 ">
              <img className="w-32" src={logo} />
            </Link>
            <IconButton
              variant="text"
              className=" h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
              ripple={false}
              onClick={openDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </IconButton>
          </div>
          <NavItems />
        </div>
      </Navbar>

      <Drawer
        open={isOpenDrawer}
        onClose={closeDrawer}
        className="p-4 fixed top-0"
      >
        <div className="mb-6 flex items-center justify-between">
          <Link to="/" className="mr-4 cursor-pointer py-1.5 ">
            <img className="w-32" src={logo} />
          </Link>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div>
          <List>
            <Link to="/" onClick={() => setIsOpenDrawer(false)}>
              <ListItem className="border-b border-primary rounded-none font-medium">
                Home
              </ListItem>
            </Link>
            <Link to="/" onClick={() => setIsOpenDrawer(false)}>
              <ListItem className="border-b border-primary rounded-none font-medium">
                About Us
              </ListItem>
            </Link>
            <ServiceAccordion
              open={open}
              handleOpen={handleOpen}
              id={1}
              title="Services"
              items={serviceMenuItems}
              setIsOpenDrawer={setIsOpenDrawer}
            />
            <Link to="/" onClick={() => setIsOpenDrawer(false)}>
              <ListItem className="border-b border-primary rounded-none font-medium">
                Offers
              </ListItem>
            </Link>
            <Link to="/" onClick={() => setIsOpenDrawer(false)}>
              <ListItem className="border-b border-primary rounded-none font-medium">
                {/* <ListItemPrefix>
                  <IoHomeOutline className="h-5 w-5" />
                </ListItemPrefix> */}
                Contact Us
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

const ServiceAccordion = ({
  open,
  handleOpen,
  id,
  title,
  items,
  setIsOpenDrawer,
}) => {
  return (
    <Accordion
      open={open === id}
      icon={
        <MdOutlineKeyboardArrowDown
          className={`h-5 w-5 transition-transform ${
            open === id ? "rotate-180" : ""
          }`}
        />
      }
    >
      <ListItem
        className="p-0 border-b border-primary rounded-none font-medium"
        selected={open === id}
      >
        <AccordionHeader
          onClick={() => handleOpen(id)}
          className={`border-b-0 p-3 ${
            open === id ? "bg-primary/10 text-white" : ""
          }`}
        >
          <Typography color="blue-gray" className="mr-auto font-medium">
            {title}
          </Typography>
        </AccordionHeader>
      </ListItem>

      <AccordionBody className="py-1">
        <List className="p-0">
          {items.map((item) => (
            <ListItem key={item.id} onClick={() => setIsOpenDrawer(false)}>
              <ListItemPrefix>{/* Add icon or leave empty */}</ListItemPrefix>
              <div>
                <p className="font-medium">{item.title}</p>
                {/* <p className="text-sm text-gray-500">{item.description}</p> */}
              </div>
            </ListItem>
          ))}
        </List>
      </AccordionBody>
    </Accordion>
  );
};

const serviceMenuItems = [
  {
    id: 1,
    link: "/",
    title: "Tour & Travels",
    description: "Custom tour packages and full travel support.",
  },
  {
    id: 2,
    link: "/",
    title: "Work Permit",
    description: "Secure legal work permits with expert help.",
  },
  {
    id: 3,
    link: "/",
    title: "Visit Visa",
    description: "Quick visit visa processing for all needs.",
  },
  {
    id: 4,
    link: "/",
    title: "Expert Consultation",
    description: "Get guided advice from visa experts.",
  },
];
