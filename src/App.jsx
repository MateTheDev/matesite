import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home"
import PassGen from "./pages/projects/Passgen"
import DiscordLogin from "./pages/auth/discordLogin"
import DiscordCallback from "./pages/auth/callbacks/discordCallback"

function App() {

  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/passgen" element={<PassGen />} />
          <Route path="/login/discord" element={<DiscordLogin />} />
          <Route path="/auth/discord/callback" element={<DiscordCallback />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
