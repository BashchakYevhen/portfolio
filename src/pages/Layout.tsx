import React from 'react'
import { Container, Box, Avatar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { MaterialUISwitch } from "../components/themeSwitch/switch";
import photo from "../image/photo.png"
import { CustomButton } from "../components/styledButton/styledButton";
import { StyledLink } from "../components/styledLink/styledLink";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <Container
            sx={{
                backgroundColor: "#d7d7d7",
                width: "100%",
                py: "15px"
            }}
        >
            {/* SWITCH */}
            <Box sx={{ display: "flex", justifyContent: "center", mb: "20px" }}>
                <MaterialUISwitch sx={{ m: 1 }} defaultChecked />
            </Box>
            {/* About me box */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: "20px",
                    gap: "15px",
                }}
            >
                {/* Avatar */}
                <Box
                    sx={{
                        width: "215px",
                        height: "215px",
                        padding: "5px",
                        borderRadius: "50%",
                        border: "2px solid #3c6184",
                        backgroundColor: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Avatar
                        src={photo}
                        alt="this me"
                        sx={{
                            width: "205px",
                            height: "205px",
                            backgroundColor: "#3c6184",
                        }}
                    />
                </Box>
                <Box>
                    <Typography variant="h5">Bashchak Yevhen</Typography>
                    <Typography>Web Developer</Typography>
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
                </Box>
            </Box>
            {/* Buttons box */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: "75px",
                    mx: "auto",
                    gap: "15px",
                    width: '618px',
                    height: "80px",
                }}
            >
                <CustomButton>download CV</CustomButton>
                <CustomButton>contact me</CustomButton>
            </Box>
            {/* links box */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: "15px",
                    width: "760px",
                    height: "132px",
                    borderRadius: "20px",
                    backgroundColor: "#fff",
                    mx: "auto",
                    mb: "65px"
                }}
            >
                <StyledLink to={"/"}>Portfolio</StyledLink>
                <StyledLink to={"/skills"}>Skills</StyledLink>
            </Box>
            <Outlet />

            <footer></footer>
        </Container>
    )
}
