import {createTheme} from "@mui/material/styles";

export const appTheme = createTheme({
    typography: {
        fontFamily: [
            'Source Code Pro',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },


    palette: {
        primary: {
            main: "#0093D0",
            contrastText: "white"
        }
    },
});
