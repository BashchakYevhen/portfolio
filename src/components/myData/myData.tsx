
import { Avatar, Box, Typography } from '@mui/material'
import { AboutMeBox, AvatarBox, MyNameBox } from '../differentBoxes/Boxes'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import photo from "../../image/photo.png";
import { Link, Name } from './myDataStyled';


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
                <Name variant="h4">
                    Bashchak Yevhen
                </Name>
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
                    <Link href='https://github.com/BashchakYevhen' rel="noopener noreferrer" target="blank" >
                        <GitHubIcon />
                    </Link>
                    <Link href='https://www.linkedin.com/in/bashchak-yevhen/' rel="noopener noreferrer" target="blank" >
                        <LinkedInIcon />
                    </Link>
                </Box>
            </MyNameBox>
        </AboutMeBox>
    )
}
