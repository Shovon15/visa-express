import { IoHomeOutline } from "react-icons/io5";
import { GoPlusCircle } from "react-icons/go";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { Button, Drawer, MenuItem, Navbar, Typography } from "@material-tailwind/react";

import addReviewIcon from "../../assets/icon/add-review.png";
import interviewIcon from "../../assets/icon/question.png";
import salaryIcon from "../../assets/icon/money.png";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./bottomHeader.css";
const BottomHeader = () => {
	const [open, setOpen] = useState(false);

	const openDrawer = () => setOpen(true);
	const closeDrawer = () => setOpen(false);
	const bottomNavList = (
		<div className="flex justify-between px-2">
			<div className="flex flex-col items-center cursor-pointer">
				<IoHomeOutline className="w-5 h-5" />
				Home
			</div>
			<div className="flex flex-col items-center cursor-pointer">
				<IoHomeOutline className="w-5 h-5" />
				Home
			</div>
			<Button
				variant="text"
				onClick={openDrawer}
				className="flex flex-col items-center cursor-pointer py-1 px-3 rounded-none"
			>
				<GoPlusCircle className="w-5 h-5" />
				Create
			</Button>
			<div className="flex flex-col items-center cursor-pointer">
				<IoHomeOutline className="w-5 h-5" />
				Home
			</div>
			<div className="flex flex-col items-center cursor-pointer">
				<IoHomeOutline className="w-5 h-5" />
				Home
			</div>
		</div>
	);
	const contributeMenuItems = [
		{
			id: 1,
			icon: addReviewIcon,
			link: "/company-review",
			title: "Add Review",
			description: "Write a review",
		},
		{
			id: 2,
			icon: interviewIcon,
			link: "/",
			title: "Compare companies",
			description: "Share interview",
		},
		{
			id: 3,
			icon: salaryIcon,
			link: "/",
			title: "Companies2",
			description: "Contrubute salary",
		},
	];

	const contributeMenu = (
		<ul className="col-span-1 flex w-full flex-col gap-1 z-10 outline-none h-96">
			{contributeMenuItems.map(({ title, description, icon, link, id }) => (
				<Link to={link} key={id}>
					<MenuItem className="parent flex items-center gap-3">
						<div className="child bg-gray-200 hover:bg-white rounded-md p-3">
							<img src={icon} className="w-5 h-5" />
						</div>
						<div>
							<Typography variant="h6" color="blue-gray" className="mb-1">
								{title}
							</Typography>
							<Typography variant="small" color="gray" className="font-normal">
								{description}
							</Typography>
						</div>
					</MenuItem>
				</Link>
			))}
		</ul>
	);
	return (
		<div>
			<Navbar className="bg-green-500  fixed bottom-0 z-10 rounded-none p-2 md:hidden">
				<div className="">{bottomNavList}</div>
			</Navbar>
			<Drawer
				placement="bottom"
				open={open}
				onClose={closeDrawer}
				className="p-4 pt-0  rounded-t-2xl bottomNavDrawer"
			>
				<div onClick={closeDrawer} className="flex justify-center">
					<TfiLayoutLineSolid className="w-20 h-8 text-gray-500" />
				</div>
				<div className="mb-6 flex flex-col items-center justify-between">
					<Typography variant="h5" color="blue-gray" className="mx-auto">
						Material Tailwind
					</Typography>
					<div>{contributeMenu}</div>
				</div>
			</Drawer>
		</div>
	);
};

export default BottomHeader;
