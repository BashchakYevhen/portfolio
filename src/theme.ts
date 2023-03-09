import { createTheme } from "@mui/material";

export const myTheme = createTheme({
    palette: {
        color: {
            backGround: '#E9EBEC',
            primary: '#ffffff',
            secondary: "#04293A",
            additional: "#FBD144",
            textColor: "#3D3D3D",
            active: "#3c6184"
        },
    },

    components: {
        MuiIcon: {},
    },
});



export const getDesignTokens = (mode: String) => ({
    palette: {
        ...(mode === 'light'
            ? {
                color: {
                    // palette values for light mode
                    backGround: '#E5E5E5',
                    primary: "#ECB365",
                    secondary: "#D7D7D7",
                    additional: "#FBD144",
                    textColor: "#3D3D3D",
                    additionalText: "#A3ABB2",
                    active: "#3c6184",
                    white: "#fff"
                }
            }
            : {
                color: {
                    // palette values for dark mode
                    backGround: '#041C32',
                    primary: '#ffffff',
                    secondary: "#064663",
                    additional: "#FBD144",
                    textColor: "#A3ABB2",
                    additionalText: "#A3ABB2",
                    active: "#ECB365",
                    white: "#fff"
                }
            }),
    },
});