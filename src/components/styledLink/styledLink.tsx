// import React from 'react'
import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'


export const StyledRoute = styled(NavLink)(({ theme }) => ({
    cursor: "pointer",
    backgroundColor: `${theme.palette.color.primary}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: `${theme.palette.color.textColor}`,
    width: "351px",
    height: "80px",
    borderRadius: "20px",
    textDecoration: "none",
    '&.active': {
        backgroundColor: `${theme.palette.color.secondary}`,
        color: `${theme.palette.color.textColor}`
    }
}))




// export const CustomLink: React.FC<Children> = ({ children }) => {
//     return <StyledLink>{children}</StyledLink>
// }