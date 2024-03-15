import { projects } from "./projects.ts";
import Card from "./Card.tsx";
export default function FeaturedWork() {
    return (
        <section className="Featured-work-section">
            <p>
                Featured work <span className="accent-color">· 2018–2022</span>
            </p>
            <div className="cards-container">
                {projects.map((project) => {
                    return (
                        <Card
                            id={project.id}
                            name={project.name}
                            nature={project.nature}
                            imageURL={project.imageURL}
                            imageWidth={project.imageWidth}
                        />
                    );
                })}
            </div>
        </section>
    );
}
