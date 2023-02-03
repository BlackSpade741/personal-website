import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import "./about.css";

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

const about = props => {
    const { classes } = props;

    return (
        <div id="about">
            <Grid container style={{ height: "100%" }}>
                <Grid
                    item
                    xs={12}
                    md={5}
                    container
                    justify="center"
                    alignItems="center"
                >
                    <Typography gutterBottom variant="h4" id="about-title">
                        <u>About Me</u>

                        <img
                            src={require("../../resources/ellen-pic.jpg")}
                            alt="Ellen Icon"
                            id="about-icon"
                        />
                    </Typography>
                </Grid>

                <Grid item id="content" xs={12} md={7} alignContent="center">
                    <div id="about-content">
                        <Typography
                            className={classes.body1}
                            variant="body1"
                            paragraph
                        >
                            
                            I started programming when I was in Grade 10 in an elective Computer Science class, and fell in love with it instantly. I've been programming and making ever since, with a love for UI/UX design, front-end development, and full-stack web development. I completed my Honours Bachelor of Science degree at the University of Toronto, St. George campus in 2020, specializing in Computer Science, and received high honours. Currently, I'm at {" "}
                            <a
                                href="https://lever.co"
                                className={classes.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <strong>Lever</strong>
                            </a>
                            's RBAC team working with a group of awesome engineers to develop & maintain the Lever Hire platform.                             
                        </Typography>

                        <Typography
                            className={classes.body1}
                            variant="body1"
                            paragraph
                        >
                            {
                                "Moving from southern China to the sprawling city of Toronto, Canada when I was 12, I am proud of my heritage as a 1.5 generation Chinese-Canadian, and still keep it dear to my heart. I'm currently living in the Christie Pits area of Toronto close to the city's heart (and public transit, of course!), come join me for a coffee!"
                            }
                        </Typography>

                        <Typography
                            className={classes.body1}
                            variant="body1"
                            paragraph
                        >
                            Besides software development, my passions include
                            digital art and design, music (I'm a big alternative rock
                            fan, and I play the bass guitar!), video games, binging my favourite TV shows, and making YouTube videos with my{" "}
                            <a
                                href="https://reecemartin.ca"
                                className={classes.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <strong>partner in crime</strong>
                            </a>
                            .
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(styles)(about);
