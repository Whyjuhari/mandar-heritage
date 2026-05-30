import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CultureDetailPage from './pages/CultureDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import StaticInfoPage from './pages/StaticInfoPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/culture/:slug" element={<CultureDetailPage />} />
        <Route path="/privacy" element={<StaticInfoPage type="privacy" />} />
        <Route path="/contact" element={<StaticInfoPage type="contact" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
