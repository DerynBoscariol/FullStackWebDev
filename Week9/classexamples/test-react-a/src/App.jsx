import Header from "./components/Header"
import Footer from "./components/Footer"
//import Movie from "./components/Movie"

import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import MovieListing from "./pages/MovieListing"

function App() {
  return (
    <BrowserRouter>
      {/* The empty tags <></> is a React Fragment. It's useful when you need a root element of some sort but you don't want extra markup to be rendered in the HTML. */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieListing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
