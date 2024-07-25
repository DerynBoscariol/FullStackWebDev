import Menu from "./Menu";
import "./Header.css";

export default function Header(){

    return(
        <header id="header">
            <h2 id="sitename">
                <a href="/">&#127809; Maple Leaf Wellness &#127809;</a>
            </h2>
            <p>A Natural Spa in the Heart of Downtown Toronto</p>
            <Menu />
        </header>
    )
}