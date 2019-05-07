import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";

const styles = {
    card: {
        maxWidth: 300,
        display: "inline-block",
        margin: "5px"
    },
    media: {
        objectFit: "cover"
    },
    chip: {
        margin: "0 5px",
        backgroundColor: "#f86d76"
    },
    link: {}
};

const projectCard = props => {
    const { classes, project } = props;
    return (
        <Card className={classes.card}>
            <div>
                <CardMedia
                    component="img"
                    alt={project.name + " image"}
                    className={classes.media}
                    height="140"
                    image={project.image}
                    title={project.name + " image"}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        style={{ fontFamily: "Space Mono, monospace" }}
                    >
                        {project.name}
                    </Typography>
                    <Typography
                        component="p"
                        style={{ display: "inline-block", height: "90px" }}
                    >
                        {project.description}
                    </Typography>

                    {/* List of tags */}
                    <div className="tagList">
                        {project.keywords.map(keyword => (
                            <Chip
                                label={keyword}
                                className={classes.chip}
                                color="secondary"
                            />
                        ))}
                    </div>
                </CardContent>
            </div>
            <CardActions>
                <Button size="small" color="error">
                    <Link
                        href={project.github}
                        className={classes.link}
                        color="inherit"
                        target="_blank"
                        rel="noopener"
                        underline="always"
                    >
                        Github
                    </Link>
                </Button>
                {project.demo === "" ? null : (
                    <Button size="small" color="error">
                        <Link
                            href={project.demo}
                            className={classes.link}
                            color="inherit"
                            target="_blank"
                            rel="noopener"
                            underline="always"
                        >
                            Demo
                        </Link>
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

projectCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(projectCard);
