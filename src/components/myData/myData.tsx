
import { Avatar, Box, Typography } from '@mui/material'
import { AboutMeBox, AvatarBox, MyNameBox } from '../differentBoxes/Boxes'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import photo from "../../image/photo.png";


export const MyData = () => {
    return (
        <AboutMeBox>
            {/* Avatar */}
            <AvatarBox>
                <Avatar
                    src={photo}
                    alt="this me"
                    sx={{
                        width: "205px",
                        height: "205px",
                        backgroundColor: "#ECB365",
                    }}
                />
            </AvatarBox>
            <MyNameBox>
                <Typography sx={{
                    textAlign: "center",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "2.875rem",
                    lineHeight: "4.3125rem"
                }} variant="h4">
                    Bashchak Yevhen
                </Typography>
                <Typography sx={{
                    textAlign: "center",
                    mb: "20px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "22px",
                    lineHeight: "33px"
                }}>
                    Web Developer
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        gap: "10px",
                    }}
                >
                    <a href='https://github.com/BashchakYevhen' referrerPolicy='no-referrer'>
                        <GitHubIcon /></a>
                    <LinkedInIcon />
                </Box>
            </MyNameBox>
        </AboutMeBox>
    )
}
