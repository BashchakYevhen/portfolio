import SendIcon from "@mui/icons-material/Send";
import { ContactBox } from "../differentBoxes/Boxes";
import { StyledCvButton } from "../styledButton/styledButton";
import { StyledSendMail } from "../styledEmailButt/styledSendMail";


export const Contact = () => {
    return (
        <ContactBox>
            <StyledCvButton>Download CV</StyledCvButton>
            <StyledSendMail href="mailto:evgeny221@gmail.com">
                Send mail <SendIcon />
            </StyledSendMail>
        </ContactBox>
    )
}
