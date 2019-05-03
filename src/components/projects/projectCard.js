import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
    card: {
        maxWidth: 280,
        display: "inline-block",
        margin: "5px"
    },
    cardContent: {
        height: 500
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: "cover"
    }
};

const projectCard = props => {
    const { classes, project } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
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
                        style={{ fontFamily: "Titillium Web, sans-serif" }}
                    >
                        {project.name}
                    </Typography>
                    <Typography
                        component="p"
                        style={{ display: "inline-block", height: "90px" }}
                    >
                        {project.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

projectCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(projectCard);
