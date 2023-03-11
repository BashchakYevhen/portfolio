import React from "react";
// import { Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
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
                    <SignatureBox className="signatureBox">
                        <span>Filmoteka</span>
                    </SignatureBox>
                    <LinksBox className="linksBox">
                        <a
                            href="https://github.com/BashchakYevhen/filmoteka"
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon />
                        </a>
                        <a
                            href="https://bashchakyevhen.github.io/filmoteka/"
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <OpenInNewIcon />
                        </a>
                    </LinksBox>
                </ListItemStyled>
                <ListItemStyled>
                    <img src={IceCream} alt="img" />
                    <SignatureBox className="signatureBox">
                        <span>Ice Cream</span>
                    </SignatureBox>
                    <LinksBox className="linksBox">
                        <a
                            href="https://github.com/BashchakYevhen/iceCream"
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon />
                        </a>

                        <a
                            href="https://bashchakyevhen.github.io/iceCream/"
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <OpenInNewIcon />
                        </a>
                    </LinksBox>
                </ListItemStyled>
                <ListItemStyled>
                    <img src={PhoneBook} alt="img" />
                    <SignatureBox className="signatureBox">
                        <span>PhoneBook</span>
                    </SignatureBox>
                    <LinksBox className="linksBox">
                        <a
                            href="https://github.com/BashchakYevhen/goit-react-hw-08-phonebook"
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon />
                        </a>
                        <a
                            href="https://bashchakyevhen.github.io/goit-react-hw-08-phonebook/"
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <OpenInNewIcon />
                        </a>
                    </LinksBox>
                </ListItemStyled>
                <ListItemStyled>
                    <img src={Slimm} alt="img" />
                    <SignatureBox className="signatureBox">
                        <span>Slim-Mom</span>
                    </SignatureBox>
                    <LinksBox className="linksBox">
                        <a
                            href="https://github.com/denyskuz/slimmom"
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon />
                        </a>
                        <a
                            href="https://slimmom-gold-team.netlify.app/"
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <OpenInNewIcon />
                        </a>
                    </LinksBox>
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
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
        margin: 0 auto;
        margin-bottom: 20px;
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
        & img {
            filter: grayscale(0%);
        }
        & .signatureBox {
            transform: translate(-50%, 50px);
        }
        & .linksBox {
            transform: translate(-50%, -50px);
        }
    }
`;
const SignatureBox = styled.div`
    transition: 300ms linear;
    position: absolute;
    top: -50px;
    left: 50%;
    background-color: ${(props) => props.theme.palette.color.hoverCard};
    transform: translate(-50%, 0px);
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    & span {
        color: ${(props) => props.theme.palette.color.textColor};
    }
`;

const LinksBox = styled.div`
    transition: 300ms linear;
    position: absolute;
    bottom: -50px;
    left: 50%;
    background-color: ${(props) => props.theme.palette.color.hoverCard};
    transform: translate(-50%, 0px);
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    & a {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 170px;
        height: 100%;
        color: ${(props) => props.theme.palette.color.textColor};
    }
    & a:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.palette.color.active};
    }
`;
