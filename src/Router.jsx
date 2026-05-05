import { Routes, Route } from "react-router-dom";
import HomePage from "./Page/Home";
import AboutPage from "./Page/About";
import ServicePage from "./Page/Service";
import ServiceDetailPage from "./Page/ServiceDetail";
import PortfolioPage from "./Page/Portfolio";
import PortfolioDetailPage from "./Page/PortfolioDetail";
import PricingPage from "./Page/Pricing";
import TeamPage from "./Page/Team";
import FaqPage from "./Page/Faq";
import NotfoundPage from "./Page/NotFound";
import ContactPage from "./Page/Contact";
import BlogPage from "./Page/Blog";
import SearchPage from "./Page/Search";
import SinglePostPage from "./Page/SinglePost";

function AppRouter(){
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="service" element={<ServicePage/>} />
                <Route path="service-detail" element={<ServiceDetailPage/>} />
                <Route path="portfolio" element={<PortfolioPage/>} />
                <Route path="portfolio-detail" element={<PortfolioDetailPage/>} />
                <Route path="pricing" element={<PricingPage/>} />
                <Route path="team" element={<TeamPage/>} />
                <Route path="faq" element={<FaqPage/>} />
                <Route path="notfound" element={<NotfoundPage/>} />
                <Route path="contact" element={<ContactPage/>} />
                <Route path="blog" element={<BlogPage/>} />
                <Route path="single-post" element={<SinglePostPage/>} />
                <Route path="search" element={<SearchPage />} />
                {/* Catch All */}
                <Route path="*" element={<NotfoundPage />} />
            </Routes>
        </>
    );
}

export default AppRouter;