import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import "./contact.css";

const style = {};

const contact = props => {
    return (
        <div id="contact">
            <Typography gutterBottom variant="h4" id="contact-title">
                <u>Contact</u>
            </Typography>
            <Grid container>
                <Grid>
                    <Typography>
                        Got any ideas you'd like me to help you realize? Drop me
                        a line below.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(style)(contact);
