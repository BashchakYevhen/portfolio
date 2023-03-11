import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'


export const StyledRoute = styled(NavLink)` 

    background-Color: ${props => props.theme.palette.color.primary};
    display: flex;
    align-Items: center;
    justify-Content: center;
    color: ${props => props.theme.palette.color.textColor};
    width: 154px;
    height: 50.3px;
    border-Radius: 10px;
    text-Decoration: none;
    &.active {
        background-Color: ${props => props.theme.palette.color.secondary};
        color: ${props => props.theme.palette.color.textColor}
    }
    &:hover {
        cursor: pointer;
         border:1px solid ${props => props.theme.palette.color.active};
    }
    @media screen and (min-width: 768px) {
        width: 351px;
        height: 80px;
    }
`