import { Button } from "@material-tailwind/react";
import { FaSadTear } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className="font-bold text-center text-3xl p-10 flex flex-col justify-center items-center">
			<p className="text-red-400">Under development</p>
			<FaSadTear className="w-20 h-20 text-gray-800" />
			<Link to="/">
				<Button variant="outlined" color="green" className="mt-10 ">
					Home
				</Button>
			</Link>
		</div>
	);
};

export default NotFoundPage;
