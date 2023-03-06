import { Box } from '@mui/material'
import styled from '@emotion/styled'

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

export const AboutMeBox = styled(Box)`
        margin: 0 auto 30px;

        
    @media screen and (min-width: 768px) {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
            gap: 15px;
    }
`
export const AvatarBox = styled(Box)`
    width: 215px;
    height: 215px;
    padding: 5px;
    border-radius: 50%;
    border: 2px solid #3c6184;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
        @media screen and (max-width: 767px) {
            margin: 0 auto 40px;  
        }
`
export const MyNameBox = styled(Box)`
    margin: 0 auto ;
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
@media screen and (min-width: 768px) {
    width: 760px;
    height: 132px;
    gap: 15px;
    border-Radius: 20px;
    margin-bottom: 75px;
}

`
