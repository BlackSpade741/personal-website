import React from "react";

import ExperienceCard from "./experienceCard";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./experience.css";

const experience = props => {
    const infos = [
        {
            org: "Lever",
            title: "Software Engineer III",
            description:
                "Working as part of the RBAC team to develop new user management & access control options for the Lever Hire app, using Typescript, Coffeescript, DerbyJs, and ShareDB",
            industry: "Technology",
            timePeriod: "Jun 2021 - "
        },
        {
            org: "Amazon Web Services",
            title: "Software Development Engineer I",
            description:
                "Developing native AWS applications to improve directory services and identity solutions using Python, AWS DynamoDB, AWS Lambda, and AWS Directory Services",
            industry: "Technology",
            timePeriod: "Jun 2020 - Jun 2021"
        },
        {
            org: "Citi ICG Technology Group",
            title: "Technology Summer Analyst - Software Development",
            description:
                "Work alongside team to develop for, maintain, and improve Commercial Cards client software using Java, J2EE, and TeamCity",
            industry: "Finance",
            timePeriod: "Jun 2019 - Aug 2019"
        },
        {
            org: "Avigilon",
            title: "Software Developer, Co-op",
            description:
                "Developed for and maintained Avigilon desktop applications using C#/.NET and WPF",
            industry: "Security",
            timePeriod: "May 2018 - Aug 2018"
        },
        {
            org: "University of Toronto",
            title: "Teaching Assistant",
            description:
                "Helped students with coursework during office hours, invigilated and evaluated examinations",
            industry: "Education",
            timePeriod: "Sept 2018 - Apr 2020"
        }
    ];

    const creds = {
        aws: "https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Cloud-Practitioner_512x512.bc006f14f986fa4f3ca238b0b62be458ce1fb5ce.png"
    }

    return (
        <div id="experience">
            <Typography gutterBottom variant="h4" id="experience-title">
                <u>Experience</u>
            </Typography>
            <Grid
                style={{ width: "100%" }}
                alignContent="center"
                justify="center"
            >
                {infos.map(info => (
                    <ExperienceCard experience={info} />
                ))}
            </Grid>
            <Grid
                style={{ width: "100%", marginTop: '20px' }}
                alignContent="center"
                justify="center"
            >
                {
                    Object.entries(creds).map(([key, value]) => (
                        <img
                            src={value}
                            alt={key}
                            style={{
                                width: "120px",
                                height: "120px",
                                display: "inline-block"
                            }}
                        />
                    ))
                }
            </Grid>
        </div>
    );
};

export default experience;
