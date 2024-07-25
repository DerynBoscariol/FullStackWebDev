import UselessFact from "../components/UselessFact";
import { useEffect } from "react";

export default function Home(){
    return(
        <main id="main">
            <h1>Hello World!</h1>
            <p>This is the homepage content</p>
            <UselessFact />
        </main>
    )
}