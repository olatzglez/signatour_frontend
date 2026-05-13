import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ItinerarioList from './pages/ItinerarioList'
import ItinerarioDetail from './pages/ItinerarioDetail'
import LoginForm from './pages/LoginForm'
import RegisterForm from './pages/RegisterForm'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/itinerarios" element={<ItinerarioList />} />
            <Route path="/itinerarios/:id" element={<ItinerarioDetail />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App