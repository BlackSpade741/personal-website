import React from "react";

import "./projects.css";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./projectCard";

const projects = props => {
    // Project info
    const projects = [
        {
            name: "BurgersGo",
            description:
                "A burger builder web application that allows you to customize and order your perfect burger.",
            keywords: ["ReactJS", "NodeJS", "MERN"],
            github: "https://github.com/BlackSpade741/burgers-go",
            demo: "https://sleepy-lowlands-61784.herokuapp.com/",
            image: "https://i.imgur.com/85UlnaX.jpg"
        },
        {
            name: "Saturn",
            description:
                "An Android app that allows users to browse entertainment events and track them with a calendar.",
            keywords: ["Android", "Mobile", "Java"],
            github: "https://github.com/BlackSpade741/saturn",
            demo: "",
            image: "https://i.imgur.com/ynBUNaC.jpg"
        },
        {
            name: "Motivate.Me",
            description:
                "A prototype mobile application designed to help people stay active and work towards their fitness goals. ",
            keywords: ["Design", "UX", "Prototype"],
            github: "https://github.com/BlackSpade741/motivate-me",
            demo: "https://pr.to/DEPB9M/",
            image: "https://i.imgur.com/bmWIyC5.png"
        },
        {
            name: "Photo Manager",
            description:
                "A cross-platform desktop application for photo tagging and management.",
            keywords: ["Java", "Desktop", "Front-end"],
            github: "https://github.com/BlackSpade741/photomanager",
            demo: "",
            image: "https://i.imgur.com/C27bcIS.png"
        }
    ];

    return (
        <div id="projects">
            <Grid container spacing={24}>
                <Grid
                    item
                    xs={12}
                    md={5}
                    container
                    alignItems="center"
                >
                    <Typography gutterBottom variant="h4" id="projects-title">
                        <u>Projects</u>
                    </Typography>
                </Grid>

                <Grid item xs={12} md={7}>
                    {projects.map(project => (
                        <ProjectCard project={project} />
                    ))}
                </Grid>
            </Grid>
        </div>
    );
};

export default projects;
