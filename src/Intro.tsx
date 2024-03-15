import Navigation from "./Navigation";

export default function Intro() {
    return (
        <div className="intro">
            <Navigation />
            <div className="intro-para">
                <p>
                    I’m Jonas — a senior product designer
                    <span>
                        {" "}
                        that cares a lot about positive impact projects
                    </span>
                </p>
            </div>
        </div>
    );
}
