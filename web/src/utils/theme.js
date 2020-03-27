import { createMuiTheme } from '@material-ui/core/styles';

export const themeL = createMuiTheme({
    palette: {
        common: {
            black: "#000",
            white: "#fff"
        },
        background: {
            paper: "#fff",
            default: "#fafafa"
        },
        primary: {
            main: "#66BB6A",
            contrastText: "#fff"
        },
        secondary: {
            main: "#449947",
            contrastText: "#fff"
        },
        error: {
            main: "#F29797",
            contrastText: "#fff"
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)"
        }
    },
    body: {
        // image: require("../img/white-bg.png"),
        color: "#F6FFFA",
    //     textColor: "#000"
    }
})

export const themeD = createMuiTheme({
    palette: {
        common: {
            black: "#000",
            white: "#fff"
        },
        background: {
            paper: "#424242",
            color: "#fff"
        },
        primary: {
            light: "rgba(255, 217, 91, 1)",
            main: "rgb(255,140,0)",
            contrastText: "#fff"
        },
        secondary: {
            light: "rgba(255, 167, 38, 1)",
            main: "rgba(199, 120, 0, 0.99)",
            dark: "rgba(255, 167, 38, 1)",
            contrastText: "#fff"
        },
        error: {
            light: "#e57373",
            main: "#f44336",
            dark: "#d32f2f",
            contrastText: "#fff"
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)"
        }
    },
    // body: {
    //     image: require("../img/black-bg.png"),
    //     color: "#1b1b1b",
    //     textColor: "#fff"
    // }
})