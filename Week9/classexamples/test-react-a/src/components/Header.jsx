import Nav from "./Nav"
import {Link} from "react-router-dom"

export default function Header() {
  //This is a JS comment.
  //Outside the return() statement is just regular JS so you can use JS comments as usual.

  return(
    <header id="header">
      {/* A JSX comment. This is used within the return() statement because you write the component contents to return in JSX.  */}
      <h2 className="site-name">
        <Link to="/">Test site</Link>
      </h2>
      <Nav />
    </header>
  )
}