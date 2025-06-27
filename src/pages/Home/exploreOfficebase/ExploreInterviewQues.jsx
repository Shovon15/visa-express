import { Button, Typography } from "@material-tailwind/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import interviewImg from "../../../assets/image/companies_web.svg";

const ExploreInterviewQues = () => {
	return (
		<div className="flex mt-5">
			<div className="">
				<object data={interviewImg} width="600" height="400" />
			</div>
			<div className="w-full md:w-1/2 flex flex-col justify-center gap-4 px-10">
				<Typography variant="h2">Company-wise Interview Questions</Typography>
				<Button
					size="lg"
					variant="text"
					className="font-bold capitalize outline-none py-2 flex items-center  gap-3 px-2 hover:bg-transparent active:bg-transparent w-64 text-indigo-500 text-xl border-b-2 rounded-none border-indigo-500"
				>
					company interview
					<IoIosArrowRoundForward className="w-8 h-8" />
				</Button>
				<Link to="/share-interview-question">
					<Button
						size="lg"
						variant="outlined"
						className="font-bold capitalize outline-none py-2 gap-3 px-2 hover:bg-transparent active:bg-transparent w-72 text-indigo-500 text-xl border-b-4 border-r-4 border-indigo-500 mt-10 ring-0 focus:ring-0 hover:border-black hover:bg-indigo-800 active:bg-indigo-900 hover:text-white"
					>
						Share interview questions
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default ExploreInterviewQues;
