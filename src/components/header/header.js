import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';

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
    }
);

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div id="header" className={classes.root}>
        <AppBar position="static" color="default">
            <Toolbar>
                <Button>
                    <Avatar src={require("../../resources/ellen-icon.jpg")}/>
                </Button>
                <Typography variant="h6" color="inherit" align="left" className={classes.grow}>
                        ellen.chen
                    </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);