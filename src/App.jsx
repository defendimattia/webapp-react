import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./components/Homepage"
import Movies from "./components/Movies"
import MainLayout from "./layouts/MainLayout"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainLayout}>
            <Route index element={<Homepage />} />
            <Route path="/:id" element={<Movies />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
