import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./components/Homepage"
import MovieDetails from "./components/MovieDetails"
import MainLayout from "./layouts/MainLayout"
import { useEffect, useState } from "react"
import axios from "axios"
import GlobalContext from "../contexts/GlobalContext"

function App() {

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => getBooks, [])

  function getBooks() {

    setIsLoading(true)

    return (
      axios.get(import.meta.env.VITE_API_BASE_URL + "/api/movies")
        .then((res) => setMovies(res.data))
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
    )

  }


  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={MainLayout}>
              <Route index element={<Homepage movies={movies} />} />
              <Route path="/:id" element={<MovieDetails />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>

    </>
  )
}

export default App
