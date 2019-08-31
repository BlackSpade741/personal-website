import React from "react";

import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
    card: {
        width: "500px",
        backgroundColor: "rgba(255,255,255,0.1)",
        color: "white",
        margin: "auto",
        marginBottom: "10px"
    },
    org: {
        color: "white",
        fontFamily: "Muli, sans-serif",
        fontSize: "150%"
    },
    title: {
        marginBottom: "0.5rem"
    },
    description: {
        fontSize: "85%",
        fontFamily: "Muli, sans-serif"
    }
};

const experienceCard = props => {
    const { classes, experience } = props;
    return (
        <Card className={classes.card}>
            <CardMedia />
            <CardContent>
                <Typography variant="h6" className={classes.org}>
                    {experience.org}
                </Typography>
                <Typography variant="p" className={classes.title}>
                    {experience.title}
                </Typography>
                <Typography variant="p" className={classes.description}>
                    {experience.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

experienceCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(experienceCard);
