import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Header from "../components/common/header"

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
