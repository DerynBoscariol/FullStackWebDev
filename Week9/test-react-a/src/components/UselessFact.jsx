import { useEffect, useState } from "react";
export default function UselessFact(){
    const [randomFact, setRandomFact] = useState("");
    const [factSource, setFactSource] = useState("");

    useEffect(() => {
        const getFact = async() => {
            let response = await fetch(
                "https://uselessfacts.jsph.pl/api/v2/facts/random", {method: "get"}
            );
            let data = await response.json();
            //console.log(data);
            setRandomFact(data.text);
            setFactSource(data.source);
        }
        getFact(); //make sure to run the function right after defining it
    }, []) //empty square brackets define an empty dependency array that will only run if something in array changes
    
    let source = (factSource) ? `(Source: ${factSource})` : ""; //if fact source is empty only print and empty string

    return(
        <section>
            <h2>Today's Random Fact</h2>
            <div>{randomFact} {source}</div>
        </section>
    )

}