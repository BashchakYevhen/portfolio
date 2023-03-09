import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, createTheme } from "@mui/material";
import { MaterialUISwitch } from "../components/themeSwitch/switch";
import { getDesignTokens } from "../theme";
import { MyData } from "../components/myData/myData";
import { Contact } from "../components/contact/Contact";
import { Navigation } from "../components/navigation/Navigation";
import { Container } from "../components/container/Container";

export default function Layout() {
    const [mode, setMode] = React.useState<"light" | "dark">("light");
    const theme = React.useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode]
    );

    const handleChange = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                {/* SWITCH */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: "20px",
                    }}
                >
                    <MaterialUISwitch sx={{ m: 1 }} onChange={handleChange} />
                </Box>
                <MyData />
                <Contact />
                <Navigation />
                <Suspense fallback="...">
                    <Outlet />
                </Suspense>
                <footer></footer>
            </Container>
        </ThemeProvider>
    );
}
