import {useEffect, useState} from "react"

export default function UselessFact() {
  const [randomFact, setRandomFact] = useState("");
  const [factSource, setFactSource] = useState("");

  useEffect(() => {
    const getFact = async() => {
      let response = await fetch(
        "https://uselessfacts.jsph.pl/api/v2/facts/random",
        { method: "get" }
      );
      let data = await response.json();
      //console.log(data);
      setRandomFact(data.text);
      setFactSource(data.source);
    }
    getFact(); //make sure to run the getFact() function
  }, []); //The empty square brackets are defining an empty dependency array. This means that the effect doesn't depend on anything so it will only run once.

  let source = (factSource) ? `(Source: ${factSource})` : "";

  return(
    <section>
      <h2>Today's random fact</h2>
      <div>{randomFact} {source}</div>
    </section>
  )
}