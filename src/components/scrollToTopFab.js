import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Zoom from '@material-ui/core/Zoom';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 3,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const scrollToTopFab = (props) => {
    const { classes } = props;
    return (
        <Zoom in={props.isVisible}>
            <Fab color="secondary" size="small" aria-label="Add" className={classes.fab} onClick={props.onClick}>
                <ArrowUpwardIcon />
            </Fab>
        </Zoom>
    );
}

scrollToTopFab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(scrollToTopFab);