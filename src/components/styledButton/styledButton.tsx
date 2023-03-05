import React from 'react'
import { Button, ButtonProps, styled } from '@mui/material'


export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: `${theme.palette.color.primary}`,
    color: `${theme.palette.color.textColor}`,
    width: "290px",
    height: "80px",
    '&:hover': {
        backgroundColor: `${theme.palette.color.active}`,
        color: `${theme.palette.color.primary}`
    }
}))

interface Children {
    children: any
}


export const CustomButton: React.FC<Children> = ({ children }) => {
    return <StyledButton variant="contained" type='button'>{children}</StyledButton>
}

