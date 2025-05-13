import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./components/Homepage"
import MovieDetails from "./components/MovieDetails"
import MainLayout from "./layouts/MainLayout"
import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_BASE_URL + "/api/movies")
      .then((res) => setMovies(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainLayout}>
            <Route index element={<Homepage movies={movies} />} />
            <Route path="/:id" element={<MovieDetails/>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
