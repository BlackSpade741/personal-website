import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import "./about.css";

const styles = theme => ({
    body1: {
        fontFamily: "Muli, Roboto, sans-serif",
        fontSize: "110%",
        margin: "5px"
    },
    link: {
        color: "inherit"
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
                            {
                                "I started programming when I was in Grade 10 in an elective Computer Science class, and fell in love with it instantly. I've been programming and making ever since, with a love for UI/UX design, front-end development, and full-stack web development. I recently completed my Honours Bachelor of Science degree at the University of Toronto, St. George campus, specializing in Computer Science, and received high honours. Currently, I'm just beginning my professional career at Amazon Web Services as a software development engineer for AWS Identity and Directory Services."
                            }
                        </Typography>

                        <Typography
                            className={classes.body1}
                            variant="body1"
                            paragraph
                        >
                            {
                                "Moving from southern China to the sprawling city of Toronto, Canada when I was 12, I am proud of my heritage as a 1.5 generation Chinese-Canadian, and still keep it dear to my heart. I've also just moved to my third home of Vancouver, enjoying the beautiful weather and vieews. "
                            }
                        </Typography>

                        <Typography
                            className={classes.body1}
                            variant="body1"
                            paragraph
                        >
                            Besides software development, my passions include
                            art and design, music (I'm a big alternative rock
                            fan!), video games (WoW, Uncharted, and God of War are my current favourites), and making YouTube videos with my{" "}
                            <a
                                href="https://reecemartin.ca"
                                className={classes.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                partner in crime
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