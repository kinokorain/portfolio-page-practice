import { projects } from "./projects.ts";
import Card from "./Card.tsx";
export default function FeaturedWork() {
    return (
        <section id="featured-work" className="featured-work-section">
            <p>
                Featured work <span className="accent-color">· 2018–2022</span>
            </p>
            <br />
            <div className="cards-container">
                {projects.map((project) => {
                    return (
                        <Card
                            id={project.id}
                            name={project.name}
                            nature={project.nature}
                            imageURL={project.imageURL}
                        />
                    );
                })}
            </div>
        </section>
    );
}
