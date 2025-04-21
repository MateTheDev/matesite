import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Header from "../components/common/header"
import Footer from "../components/common/footer"
import PassGen from "./pages/projects/Passgen"

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/passgen" element={<PassGen />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
