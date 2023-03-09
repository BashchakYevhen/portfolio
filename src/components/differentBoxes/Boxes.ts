import { Box } from '@mui/material'
import styled from '@emotion/styled'



export const AboutMeBox = styled(Box)`
        margin: 0 auto 30px;

        
    @media screen and (min-width: 768px) {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
            gap: 15px;
            width: 694px;
    }
`
export const AvatarBox = styled(Box)`
    margin: 0 auto 40px;  
    width: 215px;
    height: 215px;
    padding: 5px;
    border-radius: 50%;
    border: 3px solid #ECB365;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
        @media screen and (min-width: 768px) {
            margin: 0 auto
        }
`
export const MyNameBox = styled(Box)`
    color: ${props => props.theme.palette.color.textColor};
    display: flex;
    flex-direction: column;
    align-items: center;
        @media screen and (min-width: 768px) {
            align-items: flex-start;}

`
export const ContactBox = styled(Box)`
    margin: 0 auto 30px;

    width: 100%;
    height: 80px;
    gap: 15px;
    justify-content: center;
    display: flex;
        @media screen and (min-width: 768px) {
            margin: 0 auto 75px;
        }
`
export const NavLinksBox = styled(Box)`
    display: flex;
    justify-Content: space-around;
    align-Items: center;
    padding: 6.85px 6.5px;
    gap: 9px;
    width: 330px;
    height: 64px;
    border-Radius: 10px;
    background-Color: #fff;
    margin:  0 auto;
    margin-bottom: 40px;
    background-color: ${props => props.theme.palette.color.primary};
@media screen and (min-width: 768px) {
    width: 760px;
    height: 132px;
    gap: 15px;
    border-Radius: 20px;
    margin-bottom: 75px;
}

`
