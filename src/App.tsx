import "./App.css";
import Intro from "./Intro";
import FeaturedWork from "./FeaturedWork";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
function App() {
    return (
        <>
            <div className="container">
                <Intro />
                <FeaturedWork />
                <AboutMe />
                <div className="image full-width">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/cea9/165c/ff76f41aa421494e6b5df7890d84b171?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wg~O-RA-CKTBN~V2f4zdOLjxn0g7uW82C6zkQ2fiBye6SLP8vLjYP0W4tRVB581veRlGeiHvaUpoApTtSpHwb~l5Ru35Obyka7-ceA9~hXUV3ivNodwVXYYf~JyGDVgo3UIKVHQIda5UWERTck2rtdScBmuws~xDrbAJvj~LZK6LpTOWYSGwqXJtY0MNJkQwE6flpKlB5PaQi1kzjeurN82BSsGHeZob0VhlJ48QfZO2ZfsPeZ45LHsi-lr-Q-QciFoTK~mr80NauXCYIoxC6gELIZjyU3V9TGCaZ3Lp5G0bjgD84NFmHTLDJPqE0soz-B5IrumdUZ8yjAeuKERxlg__"
                        alt=""
                    />
                </div>
                <Experience />
            </div>
        </>
    );
}

export default App;
