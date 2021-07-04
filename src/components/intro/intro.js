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
                src={require("../../resources/headshot.png").default}
                alt="headshot"
                id="headshot"
            />
            <div id="caption">
                <Typography
                    variant="h3"
                    style={{ fontFamily: "inherit" }}
                    gutterBottom
                >
                    <strong>
                        <u>Hi, my name is Ellen.</u>
                    </strong>
                </Typography>
                <Typography variant="h5" style={{ fontFamily: "inherit" }}>
                    I am a software engineer currently improving APIs and Integrations at Lever.
                </Typography>
            </div>
        </div>
    );
};

export default intro;
