import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./components/Homepage"
import Movies from "./components/Movies"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
