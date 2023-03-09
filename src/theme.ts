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
                    primary: "#ffffff",
                    secondary: "#D7D7D7",
                    additional: "#FBD144",
                    textColor: "#3D3D3D",
                    additionalText: "#575757",
                    active: "#ECB365",
                    white: "#fff",
                    name: "#3D3D3D",
                    hoverText: "#3D3D3D",
                    hoverCard: "rgba(229, 229, 229, 0.8)",
                }
            }
            : {
                color: {
                    // palette values for dark mode
                    backGround: '#0C151D',
                    primary: '#171F26',
                    secondary: "#0C151D",
                    additional: "#FBD144",
                    textColor: "#A3ABB2",
                    additionalText: "#A3ABB2",
                    active: "#ECB365",
                    white: "#fff",
                    name: "#F1F2F4",
                    hoverText: "#3D3D3D",
                    hoverCard: "rgba(12, 21, 29, 0.8)",
                }
            }),
    },
});