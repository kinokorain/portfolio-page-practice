import { Project } from "./projects.ts";

export default function Card(props: Project) {
    return (
        <div className={"card " + "card" + props.id}>
            <img src={props.imageURL} alt="" />
            <div className="card-text-container">
                <h3>{props.name}</h3>
                <p>{props.nature}</p>
            </div>
        </div>
    );
}
