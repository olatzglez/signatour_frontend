import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ItinerarioList from './pages/ItinerarioList'
import ItinerarioDetail from './pages/ItinerarioDetail'
import LoginForm from './pages/LoginForm'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<ItinerarioList />} />
          <Route path="/itinerarios" element={<ItinerarioList />} />
          <Route path="/itinerarios/:id" element={<ItinerarioDetail />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App