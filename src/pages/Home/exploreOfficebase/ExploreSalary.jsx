import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import exploreSalaryImg from "../../../assets/image/salaries_web.png";
import { IoIosArrowRoundForward } from "react-icons/io";
const ExploreSalary = () => {
	return (
		<div className="flex ">
			<div className="w-full md:w-1/2 flex flex-col justify-center gap-4 px-10">
				<Typography variant="h2">Explore salaries of more than 5 Lakh+ companies</Typography>
				<Button
					size="lg"
					variant="text"
					className="font-bold capitalize outline-none py-2 flex items-center  gap-3 px-2 hover:bg-transparent active:bg-transparent w-[19rem] text-indigo-500 text-xl border-b-2 rounded-none border-indigo-500"
				>
					Explore Salary reviews
					<IoIosArrowRoundForward className="w-8 h-8" />
				</Button>
				<Link to="/share-salary">
					<Button
						size="lg"
						variant="outlined"
						className="font-bold capitalize outline-none py-2 gap-3 px-2 hover:bg-transparent active:bg-transparent w-56 text-indigo-500 text-xl border-b-4 border-r-4 border-indigo-500 mt-10 ring-0 focus:ring-0 hover:border-black hover:bg-indigo-800 active:bg-indigo-900 hover:text-white"
					>
						Share your salary
					</Button>
				</Link>
			</div>
			<div className="">
				<img src={exploreSalaryImg} className="w-[600px]" />
			</div>
		</div>
	);
};

export default ExploreSalary;
