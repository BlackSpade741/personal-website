import React from "react";
import Typography from "@material-ui/core/Typography";

import "./footer.css";

const footer = props => {
    const caption = "Made with <3 by Ellen (Yufei) Chen © 2019";

    return (
        <div id="footer">
            <Typography variant="caption" color="inherit">
                {caption}
            </Typography>
        </div>
    );
};

export default footer;
