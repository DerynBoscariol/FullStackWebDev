import { NavLink } from "react-router-dom"

export default function Nav(){
    return(
        <nav id="main-navigation">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/movies">Movies</NavLink></li>
            </ul>
        </nav>
    )
}