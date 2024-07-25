import Header from "./components/Header"
import Footer from "./components/Footer"
//import Movie from "./components/Movie"
import MovieList from "./components/MovieList"
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main id="main">
        {/*<Movie 
        title="Turning Red"
        year="2022" 
      />*/}
      <MovieList />
      </main>
      <Footer />

    </> //This is a fragment. Everytime something is returned it needs a root element (could be a div but divs will get compiled in html while fragments won't)
  )
}

export default App
