import "./App.css";
import Intro from "./Intro";
import FeaturedWork from "./FeaturedWork";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Services from "./Services";
import Mail from "./Mail";
import Footer from "./Footer";
function App() {
    return (
        <>
            <div className="container">
                <Intro />
                {/* <img src={require('/images/image-name.png')} alt="" /> */}
                <FeaturedWork />
                <AboutMe />
                <div className="image full-width">
                    <img
                        src="./assets/images/dude.jfif"
                        alt=""
                    />
                </div>
                <Experience />
                <Services />
                <Mail />
                <Footer />
            </div>
        </>
    );
}

export default App;
