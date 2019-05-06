import React from "react";

import Typography from "@material-ui/core/Typography/Typography";

import "./intro.css";

const intro = props => {
    return (
        <div id="intro">
            {/* <Typography variant="h2" component="h2">
                This page is still under construction! Feel free to follow the
                progress right here.
            </Typography> */}
            <img
                src={require("../../resources/headshot.png")}
                alt="headshot"
                id="headshot"
            />
            <div id="caption">
                <Typography variant="h3" style={{ fontFamily: "inherit" }}>
                    <strong>
                        <u>Hi, my name is Ellen.</u>
                    </strong>
                </Typography>
                <Typography variant="h5" style={{ fontFamily: "inherit" }}>
                    I am a fourth year computer science student studying at the
                    University of Toronto.
                </Typography>
            </div>
        </div>
    );
};

export default intro;
