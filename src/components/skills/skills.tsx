import styled from "@emotion/styled";
import HTML from "../../image/logos/html-5.png"
import CSS from "../../image/logos/CSS.png"
import Figma from "../../image/logos/figma.png"
import JavaScript from "../../image/logos/javaScript.png"
import Mongo from "../../image/logos/mongodb.png"
import React from "../../image/logos/React.png"
import Node from "../../image/logos/nodejs_icon.png"
import StyledComponent from "../../image/logos/styled-components.png"
import TypeScript from "../../image/logos/TypeScript.png"
// import HTML from "../../image/logos"


export function Skills() {

    return (
        <ListStyled>
            <li><ImgBox><img src={HTML} alt="HTML" /></ImgBox></li>
            <li><ImgBox><img src={CSS} alt="Css" /></ImgBox></li>
            <li><ImgBox><img src={JavaScript} alt="JavaScript" /></ImgBox></li>
            <li><ImgBox><img src={React} alt="React" /></ImgBox></li>
            <li><ImgBox><img src={TypeScript} alt="TypeScript" /></ImgBox></li>
            <li><ImgBox><img src={Node} alt="Node" /></ImgBox></li>
            <li><ImgBox><img src={Mongo} alt="Mongo" /></ImgBox></li>
            <li><ImgBox><img src={Figma} alt="Figma" /></ImgBox></li>
            <li><ImgBox><img src={StyledComponent} alt="StyledComponent" /></ImgBox></li>
        </ListStyled>
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

const ImgBox = styled.div`
& img { 
    height: 100px;}

    border-radius: 50%;
`