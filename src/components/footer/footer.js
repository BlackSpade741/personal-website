import React from "react";
import Typography from "@material-ui/core/Typography";

import "./footer.css";

const footer = props => {
    const date =new Date( Date.now())
    const caption = "Made with <3 by Ellen (Yufei) Chen © 2019 - " + date.getFullYear();

    return (
        <div id="footer">
            <Typography variant="caption" color="inherit">
                {caption}
            </Typography>
        </div>
    );
};

export default footer;
