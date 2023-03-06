import styled from "@emotion/styled"
import { Link } from '@mui/material'



export const StyledSendMail = styled(Link)`
    display: flex;
    align-items: center;
    justify-Content: center;
    text-Decoration: none;    
    border-Radius: 10px;
    background-Color: ${props => props.theme.palette.color.primary};
    color: ${props => props.theme.palette.color.textColor};
    width: 158px;
    height: 44px;
    box-Shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    @media screen and (min-width: 768px) {
        width: 290px;
        height: 80px; 
    }
    
    
    &:hover {
        background-Color: ${props => props.theme.palette.color.active};
        color: ${props => props.theme.palette.color.primary};
    }

`

