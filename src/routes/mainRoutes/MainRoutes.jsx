import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../../layout/Main";
import HomePage from "../../pages/Home/HomePage";
import NotFoundPage from "../../pages/shared/NotFoundPage";
import WriteReview from "../../pages/Contribute/Review/WriteReview";
import ScrollToTop from "../../hooks/ScrollToTop";

const MainRoutes = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				{/* ---------------------------public route--------------------- */}
				<Route element={<Main />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/company-review" element={<WriteReview />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default MainRoutes;
