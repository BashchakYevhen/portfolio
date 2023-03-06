import styled from "@emotion/styled"
// import { Button } from '@mui/material'


export const StyledCvButton = styled.button`
    border-width: 0px;
    border-Radius: 10px;
    box-Shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    background-Color: ${props => props.theme.palette.color.primary};
    color: ${props => props.theme.palette.color.textColor};
    width: 158px;
    height: 44px;
    @media screen and (min-width: 768px) {
        width: 290px;
        height: 80px; 
    }
    
    &:hover {
        cursor: pointer;
        background-Color: ${props => props.theme.palette.color.active};
        color: ${props => props.theme.palette.color.primary};
    }
    `

