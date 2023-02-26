import React from 'react'
import { LinkProps, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'


export const StyledLink = styled(NavLink)(({ theme }) => ({
    cursor: "pointer",
    backgroundColor: `${theme.palette.light.white}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: `${theme.palette.light.textColor}`,
    width: "351px",
    height: "80px",
    borderRadius: "20px",
    textDecoration: "none",
    '&.active': {
        backgroundColor: `${theme.palette.light.secondary}`,
        color: `${theme.palette.light.textColor}`
    }
}))




// export const CustomLink: React.FC<Children> = ({ children }) => {
//     return <StyledLink>{children}</StyledLink>
// }