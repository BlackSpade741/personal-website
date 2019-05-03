import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import { Link } from 'react-scroll';

import './header.css';

const styles = theme => (
    {
        root: {
            flexGrow: 1,
        },
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginLeft: -12,
            marginRight: 20,
        },
        linkButton: {
            textTransform: "none",
            marginLeft: "5px",
        }
    }
);

const header = props => {
    const { classes } = props;
    return (
        <div id="header" className={classes.root}>
        <AppBar position="static" color="default">
            <Toolbar>
                <Avatar style={{margin: "10px"}} src={require("../../resources/ellen-icon.jpg")}/>
                <Typography variant="h6" color="inherit" align="left" className={classes.grow}>
                    <u>ellen.chen</u>
                </Typography>


                <div id="buttons">
                    <Button color="inherit" className={classes.linkButton}>
                        <Link activeClass="active" to="about" spy={true} smooth={true} duratiion={300}>
                            about
                        </Link>
                    </Button>
                    <Button color="inherit" className={classes.linkButton}>
                        <Link activeClass="active" to="experience" spy={true} smooth={true} duratiion={300}>
                            experience
                        </Link>
                    </Button>
                    <Button color="inherit" className={classes.linkButton}>
                        <Link activeClass="active" to="projects" spy={true} smooth={true} duratiion={300}>
                            projects
                        </Link>
                    </Button>
                    <Button variant="contained" color="primary" className={classes.linkButton}>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} duratiion={300}>
                            contact
                        </Link>
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
        </div>
    );
}

header.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(header);