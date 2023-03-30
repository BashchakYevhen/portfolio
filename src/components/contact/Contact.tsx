import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { ContactBox } from "../differentBoxes/Boxes";
import { StyledCvButton } from "../styledCvButton/styledCvButton";
import { IconStyled, StyledSendMail } from "../styledEmailButt/styledSendMail";
import { GrSend } from "react-icons/gr"

export const Contact = () => {
    return (
        <ContactBox>
            <StyledCvButton download href="https://drive.google.com/u/0/uc?id=1SX75hAgZqKH9GL2qJPR8jsw55n_7NOgL&export=download" >Download CV <FileDownloadIcon /></StyledCvButton>
            <StyledSendMail href="mailto:evgeny221@gmail.com">
                Send mail<IconStyled> <GrSend color="blue" /></IconStyled>
            </StyledSendMail>
        </ContactBox>
    )
}




