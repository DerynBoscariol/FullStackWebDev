import UselessFact from "../components/UselessFact"
import {useEffect} from "react"

export default function Home() {
  useEffect(() => {
    document.title = "Home | Test site"
  }, []);

  return(
    <main id="main">
      <h1>Hello, world!</h1>
      <p>This is home page content.</p>
      <UselessFact />
    </main>
  )
}