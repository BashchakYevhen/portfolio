import { NavLinksBox } from "../differentBoxes/Boxes"
import { StyledRoute } from "../styledLink/styledLink"


export const Navigation = () => {
    return (
        <NavLinksBox>
            <StyledRoute to={"/"}>Portfolio</StyledRoute>
            <StyledRoute to={"/skills"}>Skills</StyledRoute>
        </NavLinksBox>
    )
}
