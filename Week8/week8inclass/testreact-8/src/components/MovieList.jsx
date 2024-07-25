import { useState } from "react";
import Movie from "./Movie";
import "./MovieList.css";

var moviesArray = [
    {
        title: "The King's Man",
        year: "2021"
    },
    {
        title: "The Dark Knight",
        year: "2008"
    }
];

export default function MovieList(){
    const [moviesList, setMoviesList] = useState(moviesArray);
    //moviesList = state variable   setMoviesList = setter variable
    
    function handleForm(e) {
        e.preventDefault(); // make sure the page doesn't reload
        console.log(e.target.title.value);

        let newMovie = {
            title: e.target.title.value,
            year: e.target.year.value
        };
        setMoviesList(
            [
                ...moviesList,      //Array spread syntax - changes array into listed objects in array. Creating a completely new array consisting of previous array and new object
                newMovie
            ]
        )
    }
    
    return(
        <section className="movies">
            <h2>Movies</h2>
            <form onSubmit={handleForm}>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" name="title" placeholder="ex. Baby Driver" />
                <label htmlFor="year">Year: </label>
                <input type="text" id="year" name="year" placeholder="ex. 2001" />
                <button type="submit">Add Movie</button>
            </form>
            {
                moviesList.map((m)=>(       //For each m in movieslist do this...
                <Movie 
                key={m.title + m.year}      //this can be any unique value
                title={m.title}
                year={m.year}
                />
                ))
            }
        </section>
    )

}