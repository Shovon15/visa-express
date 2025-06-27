import { Outlet } from "react-router-dom";

import { Header } from "../pages/shared/Header/Header";
import Footer from "../pages/shared/footer/Footer";

const Main = () => {
	return (
		<div className="">
			<Header />
			<div className="max-w-[1300px] mx-auto ">
				<Outlet />
			</div>
			<Footer />
			{/* <BottomHeader /> */}
		</div>
	);
};

export default Main;
