import Banner from "./Banner";
// import CompanyPage from "./company/CompanyPage";
import CompanySection from "./CompanySection";
import Contact from "./contact/Contact";
import ExploreSections from "./exploreOfficebase/ExploreSections";
import Services from "./services/Services";
import VideoSection from "./videoSection/VideoSection";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <CompanySection />
      <Services />
      {/* <CompanyPage /> */}
      <VideoSection />
      <ExploreSections />
      <Contact />
    </div>
  );
};

export default HomePage;
