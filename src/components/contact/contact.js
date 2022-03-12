import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import "./contact.css";

const style = {
    subtitle: {
        fontFamily: "Muli, sans-serif"
    },
    form: {},
    left: {
        padding: "1rem"
    },
    right: {},
    input_focused: {
        color: "#F53240"
    },
    contactInfo: {
        fontSize: "120%",
        padding: "10%",
        // backgroundColor: "black"
    }
};

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: ""
        };
    }

    handleChange = key => event => {
        console.log(this.key);
        this.setState({ [key]: event.target.value });
    };

    render() {
        const { classes } = this.props;
        return (
            <div id="contact">
                <Typography gutterBottom variant="h4" id="contact-title">
                    <u>Contact</u>
                </Typography>
                <Grid container>
                    {/* <Grid
                        id="contact-left"
                        className={classes.left}
                        xs="12"
                        md="5"
                    >
                        <Typography
                            variant="subtitle1"
                            className={classes.subtitle}
                        >
                            Got any ideas you'd like me to help you realize?
                            Drop me a line below.
                        </Typography>

                        <Grid
                            direction="column"
                            id="form"
                            className={classes.form}
                            container
                        >
                            <TextField
                                id="form-field-name"
                                label="Name"
                                value={this.state.name}
                                onChange={this.handleChange("name")}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="form-field-email"
                                label="Email"
                                value={this.state.name}
                                onChange={this.handleChange("email")}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="form-field-message"
                                label="Message"
                                value={this.state.name}
                                onChange={this.handleChange("message")}
                                margin="normal"
                                variant="outlined"
                                multiline
                                rows="8"
                            />
                            <Grid direction="row">
                                <Button>Reset</Button>
                                <Button>Submit</Button>
                            </Grid>
                        </Grid>
                    </Grid> */}

                    <Grid
                        // direction="column"
                        container
                        xs="12"
                        md="12"
                        alignItems="flex-start"
                        // spacing="5"
                        className={classes.contactInfo}
                    >
                        <List aria-label="contact info list">
                            <ListItem>
                                <ListItemIcon>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText primary="chenellen007 ﹫ gmail ○ com" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Markham, ON, Canada L3R 7A3" />
                            </ListItem>
                            <ListItem>
                                 <ListItemIcon>
                                    <GitHubIcon/>
                                </ListItemIcon>
                                <ListItemText>
                                <a href="https://github.com/blackspade741" target="_blank" rel="noopener noreferrer">GitHub</a>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                 <ListItemIcon>
                                    <LinkedInIcon/>
                                </ListItemIcon>
                                <ListItemText>
                                <a href="https://www.linkedin.com/in/ellenyufeichen/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                </ListItemText>
                            </ListItem>

                        </List>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(style)(Contact);
