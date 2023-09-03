import React, { Component } from "react";
import "./App.css";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy
} from "react-scroll";

import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import ScrollToTopFab from "./components/scrollToTopFab";

const theme = createTheme({
    palette: {
        primary: {
            main: "#7CDBD5"
        },
        secondary: {
            main: "#F53240"
        },
        error: {
            main: "#F9BE02"
        }
    }
});

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFabVisible: false
        };
    }

    componentDidMount() {
        Events.scrollEvent.register("begin", (to, element) => {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register("end", (to, element) => {
            console.log("end", arguments);
        });

        window.addEventListener("scroll", e => {
            if (window.scrollY > 0) {
                this.setState({
                    isFabVisible: true
                });
            } else {
                this.setState({
                    isFabVisible: false
                });
            }
        });

        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove("begin");
        Events.scrollEvent.remove("end");
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    scrollTo() {
        scroll.scrollTo(100);
    }

    handleSetActive(to) {
        console.log(to);
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <CssBaseline />

                    <Header />
                    <Intro />
                    <Element name="about" className="element">
                        <About />
                    </Element>
                    <Element name="experience" className="element">
                        <Experience />
                    </Element>
                    <Element name="projects" className="element">
                        <Projects />
                    </Element>
                    <Element name="contact" className="element">
                        <Contact />
                    </Element>
                    <Footer />

                    <ScrollToTopFab
                        onClick={this.scrollToTop}
                        isVisible={this.state.isFabVisible}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
