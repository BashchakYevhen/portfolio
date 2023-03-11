import styled from "@emotion/styled"


export const StyledCvButton = styled.a`
    display: flex;
    align-items: center;
    justify-Content: center;
    border-width: 0rem;
    border-Radius: .625rem;
    box-Shadow: 0rem .1875rem .0625rem -0.125rem rgb(0 0 0 / 20%), 0rem .125rem .125rem 0rem rgb(0 0 0 / 14%), 0rem .0625rem .3125rem 0rem rgb(0 0 0 / 12%);
    background-Color: ${props => props.theme.palette.color.primary};
    color: ${props => props.theme.palette.color.textColor};
    width: 9.875rem;
    height: 2.75rem;
    font-size: .75rem;
    line-height: 1.125rem;
    letter-spacing: -0.0313rem;
    font-style: normal;
    font-weight: 500;

    @media screen and (min-width: 48rem) {
        width: 18.125rem;
        height: 5rem; 
        font-size: 1.375rem;
        line-height: 2.0625rem;
        letter-spacing: -0.0313rem;
    }
    
    &:hover {
        cursor: pointer;
        background-Color: ${props => props.theme.palette.color.active};
        color: ${props => props.theme.palette.color.hoverText};
    }
    `

export const StyledDownloadIcon = styled.div`
     margin-left: .625rem;
    display: flex;
`
