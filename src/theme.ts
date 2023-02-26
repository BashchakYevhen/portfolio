import { createTheme } from "@mui/material";

const myTheme = createTheme({
    palette: {
        light: {
            backGround: '#E9EBEC',
            white: '#ffffff',
            secondary: "#D7D7D7",
            additional: "#FBD144",
            textColor: "#3D3D3D",
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
                // palette values for light mode
                backGround: '#E9EBEC',
                white: '#ffffff',
                secondary: "#D7D7D7",
                additional: "#FBD144",
                textColor: "#3D3D3D",
            }
            : {
                // palette values for dark mode
                backGround: '#0C151D',
                white: '#ffffff',
                secondary: "#D7D7D7",
                additional: "#FBD144",
                textColor: "#3D3D3D",
            }),
    },
});