import Banner from "../../Components/Banner/Banner";
import ContactMe from "../../Components/ContactMe/ContactMe";
import Download from "../../Components/Download/Download";
import Education from "../../Components/Education/Education";
import Footer from "../../Components/Footer/Footer";
import Intro from "../../Components/Intro/Intro";
import Projects from "../../Components/Projects/Projects";


const Home = () => {
    return (
        <div>
            <Banner />
            <Download />
            <Intro />
            <Projects />
            <Education />
            <ContactMe />
            <Download />
            <Footer />
        </div>
    );
};

export default Home;