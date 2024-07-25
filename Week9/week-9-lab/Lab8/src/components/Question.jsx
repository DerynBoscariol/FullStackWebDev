import { useState, useEffect } from "react"

export default function Question(){
    const [categoryName, setCategory] = useState("");
    const [questionText, setQuestion] = useState("");
    const [answerText, setAnswer] = useState("");
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const getQuestion = async() => {
            let response = await fetch(
                "https://opentdb.com/api.php?amount=1&type=boolean", 
                {method: "get"}
            );
            let data = await response.json();
            let questionData = data.results[0];
            console.log(data.results[0]);

            setCategory(questionData.category);
            setQuestion(questionData.question);
            setAnswer(questionData.correct_answer);
        }
        getQuestion();
    }, []);

    let revealAnswer = revealed ? `${answerText}` : "";

    return (
        <div>
            <div>Category: {categoryName} </div>
            <h3>{questionText}</h3>
            <div>{revealAnswer}</div>
            <button onClick={() => setRevealed(true)} type="button">Reveal Answer</button>
        </div>
    )
}