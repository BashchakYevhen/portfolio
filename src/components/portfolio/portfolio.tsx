import React from "react";
// import { Box } from "@mui/material";
import filmoteka from "../../image/projects/small/filmoteka.png";
import IceCream from "../../image/projects/small/IceCream.png";
import PhoneBook from "../../image/projects/small/PhoneBook.png";
import Slimm from "../../image/projects/small/Slimm.png";
import styled from "@emotion/styled";

export function Portfolio() {
    return (
        <div>
            {/* {"portfolio list "} */}
            <ListStyled>
                <ListItemStyled>
                    <img src={filmoteka} alt="img" />
                    <SignatureBox>
                        <span>Filmoteka</span>
                    </SignatureBox>
                </ListItemStyled>
                <ListItemStyled>
                    <img src={IceCream} alt="img" />
                    <SignatureBox>
                        <span>Ice Cream</span>
                    </SignatureBox>
                </ListItemStyled>
                <ListItemStyled>
                    <img src={PhoneBook} alt="img" />
                    <SignatureBox>
                        <span>PhoneBook</span>
                    </SignatureBox>
                </ListItemStyled>
                <ListItemStyled>
                    <img src={Slimm} alt="img" />
                    <SignatureBox>
                        <span>Slim-Mom</span>
                    </SignatureBox>
                </ListItemStyled>
            </ListStyled>
        </div>
    );
}

const ListStyled = styled.ul`
    display: flex;
    align-items: center;     
    justify-content: center;
    gap: 20px;
    flex-direction: column;
@media screen and (min-width: 768px) {
        margin: 0 auto;
        width: 756px;
        flex-direction: row;
        flex-wrap: wrap;
    }

`;
const ListItemStyled = styled.li`
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
    border-radius: 15px;
    width: 340px;
    height: 210px;
    
    @media screen and (min-width: 768px) {

        margin-bottom: 0px;
    }

    & img {
        transition: 300ms linear;
        filter: grayscale(80%);
    }
    &:hover {
        cursor: pointer;
        & img {
            filter: grayscale(0%);
        }
        & div {
            transform: translate(-50%, -50px);
        }
    }
`;
const SignatureBox = styled.div`
    transition: 300ms linear;
    position: absolute;
    bottom: -50px;
    left: 50%;
    background-color:${props => props.theme.palette.color.hoverCard};
    transform: translate(-50%, 0px);
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    & span {
        color: ${props => props.theme.palette.color.textColor};
    }
`;
