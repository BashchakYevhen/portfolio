import { createTheme } from "@mui/material";

const myTheme = createTheme({
    palette: {
        color: {
            backGround: '#E9EBEC',
            primary: '#ffffff',
            secondary: "#D7D7D7",
            additional: "#FBD144",
            textColor: "#3D3D3D",
            active: "#3c6184"
        },
    },

    components: {
        MuiIcon: {},
    },
});

export default myTheme;



const getDesignTokens = (mode: String) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                color: {
                    // palette values for light mode
                    backGround: '#E9EBEC',
                    primary: '#ffffff',
                    secondary: "#D7D7D7",
                    additional: "#FBD144",
                    textColor: "#3D3D3D",
                    active: "#3c6184"
                }
            }
            : {
                color: {
                    // palette values for dark mode
                    backGround: '#0C151D',
                    primary: '#ffffff',
                    secondary: "#D7D7D7",
                    additional: "#FBD144",
                    textColor: "#3D3D3D",
                    active: "#3c6184"
                }
            }),
    },
});