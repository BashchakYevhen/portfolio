
import { Link, LinkProps, styled } from '@mui/material'



export const StyledMail = styled(Link)<LinkProps>(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    borderRadius: "10px",

    backgroundColor: `${theme.palette.color.primary}`,
    color: `${theme.palette.color.textColor}`,
    width: "290px",
    height: "80px",
    '&:hover': {
        backgroundColor: `${theme.palette.color.active}`,
        color: `${theme.palette.color.primary}`
    }
}))

