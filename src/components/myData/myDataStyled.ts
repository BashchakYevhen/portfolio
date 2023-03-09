import styled from "@emotion/styled";

import { Typography } from '@mui/material'


export const Link = styled.a`
color: inherit;
`
export const Name = styled(Typography)`
    text-Align: center;
    font-Style: normal;
    font-Weight: 500;
    font-Size: 2.875rem;
    line-Height: 4.3125rem;
    color: ${props => props.theme.palette.color.name};
`