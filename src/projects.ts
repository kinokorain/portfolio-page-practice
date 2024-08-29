// import 1 from './assets/images/1.jfef';

export type Project = {
    id: number;
    name: string;
    nature: string;
    imageURL: string;
};

export let projects: Project[] = [
    {
        id: 1,
        name: "Rule ratio",
        nature: "Product design",
        imageURL:
            "./assets/images/1.jfif"
    },
    {
        id: 2,
        name: "Situation",
        nature: "Visual identity",
        imageURL:
            "./assets/images/2.jfif"
    },
    {
        id: 3,
        name: "Dry air",
        nature: "User research",
        imageURL:
            "./assets/images/3.jfif",
    },

    {
        id: 4,
        name: "Vertical",
        nature: "Product design",
        imageURL:
            "./assets/images/4.jfif",
    },

    {
        id: 5,
        name: "Variable compose",
        nature: "Product design",
        imageURL:
            "./assets/images/5.jfif",
    },

    {
        id: 6,
        name: "Scope shift",
        nature: "Product design",
        imageURL:
            "./assets/images/6.jfif",
    },
];
