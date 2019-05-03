import React from 'react';

import Typography from '@material-ui/core/Typography/Typography';

import "./intro.css";

const intro = props => {
    return (
        <div id="intro">
            <Typography variant="h5" component="h5">
          This is the intro!
        </Typography>
        </div>
    );
};

export default intro;