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
            <ListItem><ImgBox><img src={HTML} alt="HTML" /></ImgBox></ListItem>
            <ListItem><ImgBox><img src={CSS} alt="Css" /></ImgBox></ListItem>
            <ListItem><ImgBox><img src={JavaScript} alt="JavaScript" /></ImgBox></ListItem>
            <ListItem><ImgBox><img src={React} alt="React" /></ImgBox></ListItem>
            <ListItem><ImgBox><img src={TypeScript} alt="TypeScript" /></ImgBox></ListItem>
            <ListItem><ImgBox><img src={Node} alt="Node" /></ImgBox></ListItem>
            <ListItem><ImgBox><img src={Mongo} alt="Mongo" /></ImgBox></ListItem>
            <ListItem><ImgBox><img src={Figma} alt="Figma" /></ImgBox></ListItem>
            <ListItem><ImgBox><img src={StyledComponent} alt="StyledComponent" /></ImgBox></ListItem>
        </ListStyled>
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
const ListItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
    overflow: hidden;
    margin-bottom: 30px;
    border-radius: 15px;
    width: 220px;
    height: 210px;
    background-color: ${props => props.theme.palette.color.primary};

`

const ImgBox = styled.div`
& img { 
    height: 100px;}

    border-radius: 50%;
`