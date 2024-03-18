import Navigation from "./Navigation";

export default function Intro() {
    return (
        <section className="intro ">
            <Navigation />
            <div className="intro-para full-width">
                <p>
                    I’m Jonas — a senior product designer
                    <span className="accent-color">
                        {" "}
                        that cares a lot about positive impact projects
                    </span>
                </p>
            </div>
        </section>
    );
}
