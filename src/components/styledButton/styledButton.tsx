import React from 'react'
import { Button, ButtonProps, styled } from '@mui/material'


const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: `${theme.palette.light.white}`,
    color: "#19191B",
    width: "290px",
    height: "80px",
    '&:hover': {
        backgroundColor: "#3c6184",
        color: `${theme.palette.light.white}`
    }
}))

interface Children {
    children: any
}


export const CustomButton: React.FC<Children> = ({ children }) => {
    return <StyledButton variant="contained" type='button'>{children}</StyledButton>
}