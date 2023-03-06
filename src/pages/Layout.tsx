import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Box, Avatar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import { MaterialUISwitch } from "../components/themeSwitch/switch";
import photo from "../image/photo.png";
import { StyledCvButton } from "../components/styledButton/styledButton";
import { StyledRoute } from "../components/styledLink/styledLink";
import { StyledSendMail } from "../components/styledEmailButt/styledSendMail";
import {
    AboutMeBox,
    AvatarBox,
    ContactBox,
    MyNameBox,
    NavLinksBox,
} from "../components/differentBoxes/Boxes";
import { myTheme } from "../theme";

export default function Layout() {
    return (
        <ThemeProvider theme={myTheme}>
            <CssBaseline />
            <Container
                sx={{
                    backgroundColor: "#d7d7d7",
                    width: "100%",
                    py: "15px",
                }}
            >
                {/* SWITCH */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: "20px",
                    }}
                >
                    <MaterialUISwitch sx={{ m: 1 }} defaultChecked />
                </Box>
                {/* About me box */}
                <AboutMeBox>
                    {/* Avatar */}
                    <AvatarBox>
                        <Avatar
                            src={photo}
                            alt="this me"
                            sx={{
                                width: "205px",
                                height: "205px",
                                backgroundColor: "#3c6184",
                            }}
                        />
                    </AvatarBox>
                    <MyNameBox>
                        <Typography sx={{ textAlign: "center" }} variant="h5">
                            Bashchak Yevhen
                        </Typography>
                        <Typography sx={{ textAlign: "center", mb: "20px" }}>
                            Web Developer
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                            }}
                        >
                            <GitHubIcon />
                            <LinkedInIcon />
                        </Box>
                    </MyNameBox>
                </AboutMeBox>
                {/* Buttons box */}
                <ContactBox>
                    <StyledCvButton>Download CV</StyledCvButton>
                    <StyledSendMail href="mailto:evgeny221@gmail.com">
                        Send mail <SendIcon />
                    </StyledSendMail>
                </ContactBox>
                {/* links box */}
                <NavLinksBox>
                    <StyledRoute to={"/Portfolio"}>Portfolio</StyledRoute>
                    <StyledRoute to={"/skills"}>Skills</StyledRoute>
                </NavLinksBox>
                <Suspense fallback="...">
                    <Outlet />
                </Suspense>
                <footer></footer>
            </Container>
        </ThemeProvider>
    );
}
