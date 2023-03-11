import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { ContactBox } from "../differentBoxes/Boxes";
import { StyledCvButton } from "../styledCvButton/styledCvButton";
import { IconStyled, StyledSendMail } from "../styledEmailButt/styledSendMail";
import { GrSend } from "react-icons/gr"

export const Contact = () => {
    return (
        <ContactBox>
            <StyledCvButton download="CV.pdf" href='../../image/YEVHEN_BASHCHAK.pdf' >Download CV <FileDownloadIcon /></StyledCvButton>
            <StyledSendMail href="mailto:evgeny221@gmail.com">
                Send mail<IconStyled> <GrSend color="blue" /></IconStyled>
            </StyledSendMail>
        </ContactBox>
    )
}






