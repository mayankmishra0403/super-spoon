import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import AI from './pages/AI/AI'
import Academics from './pages/Academics/Academics'
import Placements from './pages/Placements/Placements'
import Competitions from './pages/Competitions/Competitions'
import FAQ from './pages/FAQ/FAQ'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
