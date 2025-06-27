// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import CompanyCard from "../../../../components/card/CompanyCard";
import { useRef } from "react";
import { Button } from "@material-tailwind/react";
import { IoMdArrowBack } from "react-icons/io";

const CarouselSwiper = () => {
  // const data = [
  // 	{
  // 		id: 1,
  // 		image: img1,
  // 		logo: companyLogo,
  // 		title: "Company name 1",
  // 		desc: "Lorem ipsum dolor sit",
  // 		rating: "3.4",
  // 	},
  // 	{
  // 		id: 2,
  // 		image: img2,
  // 		logo: companyLogo,
  // 		title: "Company name 2",
  // 		desc: "Lorem ipsum dolor sit",
  // 		rating: "4.2",
  // 	},
  // 	{
  // 		id: 3,
  // 		image: img4,
  // 		logo: companyLogo,
  // 		title: "Company name 3",
  // 		desc: "Lorem ipsum dolor sit",
  // 		rating: "3.4",
  // 	},
  // 	{
  // 		id: 4,
  // 		image: img5,
  // 		logo: companyLogo,
  // 		title: "Company name 4",
  // 		desc: "Lorem ipsum dolor sit",
  // 		rating: "3.5",
  // 	},
  // 	{
  // 		id: 5,
  // 		image: img1,
  // 		logo: companyLogo,
  // 		title: "Company name 5",
  // 		desc: "Lorem ipsum dolor sit",
  // 		rating: "5.0",
  // 	},
  // 	{
  // 		id: 6,
  // 		image: img3,
  // 		logo: companyLogo,
  // 		title: "Company name 6",
  // 		desc: "Lorem ipsum dolor sit",
  // 		rating: "5.0",
  // 	},
  // 	{
  // 		id: 7,
  // 		image: img2,
  // 		logo: companyLogo,
  // 		title: "Company name 7",
  // 		desc: "Lorem ipsum dolor sit",
  // 		rating: "4.0",
  // 	},
  // 	{
  // 		id: 8,
  // 		image: img1,
  // 		logo: companyLogo,
  // 		title: "Company name 8",
  // 		desc: "Lorem ipsum dolor sit",
  // 		rating: "3.5",
  // 	},
  // 	{
  // 		id: 9,
  // 		image: img2,
  // 		logo: companyLogo,
  // 		title: "Company name 9",
  // 		desc: "Lorem ipsum dolor sit",
  // 		rating: "4.2",
  // 	},
  // 	{
  // 		id: 10,
  // 		image: img5,
  // 		logo: companyLogo,
  // 		title: "Company name 10",
  // 		desc: "Lorem ipsum dolor sit",
  // 		rating: "3.5",
  // 	},
  // 	{
  // 		id: 11,
  // 		image: img3,
  // 		logo: companyLogo,
  // 		title: "Company name 11",
  // 		desc: "Lorem ipsum dolor sit",
  // 		rating: "4.0",
  // 	},
  // 	{
  // 		id: 12,
  // 		image: img4,
  // 		logo: companyLogo,
  // 		title: "Company name 12",
  // 		desc: "Lorem ipsum dolor sit",
  // 		rating: "4.2",
  // 	},
  // ];
  const swiperRef = useRef();
  return (
    <>
      <div className="hidden md:flex justify-end gap-5 pr-10 ">
        <Button
          onClick={() => swiperRef.current.slidePrev()}
          className="bg-green-400 rounded-full shadow-xxl p-2 "
        >
          <IoMdArrowBack className="w-6 h-6" />
        </Button>
        <Button
          onClick={() => swiperRef.current.slideNext()}
          className="bg-green-400 rounded-full shadow-xxl p-2 "
        >
          <IoMdArrowBack className="w-6 h-6 rotate-180" />
        </Button>
      </div>
      {/* <Swiper
				// slidesPerView={4}
				spaceBetween={5}
				slidesPerGroupSkip={0}
				speed={1500}
				// pagination={{ clickable: true }}
				breakpoints={{
					0: {
						slidesPerView: 1,
						slidesPerGroup: 1,
					},
					350: {
						slidesPerView: 1,
						slidesPerGroup: 1,
					},
					500: {
						slidesPerView: 2,
						slidesPerGroup: 2,
					},
					768: {
						slidesPerView: 2,
						slidesPerGroup: 3,
					},
					1024: {
						slidesPerView: 3,
						slidesPerGroup: 3,
					},
					1200: {
						slidesPerView: 3,
						slidesPerGroup: 3,
					},
				}}
				// modules={[Pagination]}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				// onSwiper={(swiper) => console.log(swiper, "swiper")}
				className=""
			>
				{data.map((item) => (
					<SwiperSlide key={item.id} className="p-1 h-full rounded-lg">
						<CompanyCard item={item} />
					</SwiperSlide>
				))}
			</Swiper> */}
    </>
  );
};

export default CarouselSwiper;
