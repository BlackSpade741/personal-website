import React from "react";

import ExperienceCard from "./experienceCard";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import "./experience.css";

const styles = theme => ({
    body1: {
        fontFamily: "Muli, Roboto, sans-serif",
        fontSize: "110%",
        margin: "5px",
        color: "#2b2b2b"
    },
    link: {
        color: "inherit",
    }
});

const experience = props => {
    const { classes } = props;
    const infos = [
        {
            org: "Royal Bank of Canada",
            title: "Senior Cloud Engineer, Public Cloud Operations",
            description:
                "Working as part of the Public Cloud Operations team to improve developer experience for internal RBC engineering teams on the public cloud (AWS, Azure, & GCP)",
            industry: "Finance",
            timePeriod: "Apr 2023 - "
        },
        {
            org: "Lever",
            title: "Software Engineer III",
            description:
                "Working as part of the RBAC team to develop new user management & access control options for the Lever Hire app, using Typescript, Coffeescript, DerbyJs, and ShareDB",
            industry: "Technology",
            timePeriod: "Jun 2021 - Apr 2023"
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
        aws: {
            image: "https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Cloud-Practitioner_512x512.bc006f14f986fa4f3ca238b0b62be458ce1fb5ce.png",
            url: "https://www.credly.com/badges/ab045ced-614e-4375-a317-7a261cd75f94"
        },
        cka: {
            image: "https://images.credly.com/images/8b8ed108-e77d-4396-ac59-2504583b9d54/twitter_thumb_201604_cka_from_cncfsite__281_29.png",
            url: "https://www.credly.com/badges/5edbec5f-0b99-4a69-99ff-a8f48000efdf"
        },
        az104: {
            image: "https://learn.microsoft.com/en-ca/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
            url: "https://learn.microsoft.com/en-ca/users/ellenchen-8648/credentials/eb37eb4692c0fa4c"
        }
    }

    return (
        <div id="experience">
            <Typography gutterBottom variant="h4" id="experience-title">
                <u>Experience</u>
            </Typography>
            <Grid
                style={{ width: "100%" }}
            >
                {infos.map(info => (
                    <ExperienceCard experience={info} />
                ))}
            </Grid>
            <Grid
                style={{ width: "100%", marginTop: '20px' }}
            >
                {
                    Object.entries(creds).map(([key, value]) => (
                        <a
                            href={value.url}
                            className={classes.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={key}
                        >
                            <img
                                src={value.image}
                                alt={key}
                                style={{
                                    width: "120px",
                                    height: "120px",
                                    display: "inline-block"
                                }}
                            />
                        </a>
                    ))
                }
            </Grid>
        </div>
    );
};

export default withStyles(styles)(experience);
