import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import HealthScanPage from './pages/HealthScanPage'
import LiveDataPage from './pages/LiveDataPage'
import FaultCodesPage from './pages/FaultCodesPage'
import OilPage from './pages/OilPage'
import LearnPage from './pages/LearnPage'
import LearnArticlePage from './pages/LearnArticlePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import BlogArticlePage from './pages/BlogArticlePage'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/health-scan" element={<HealthScanPage />} />
        <Route path="/live-data" element={<LiveDataPage />} />
        <Route path="/fault-codes" element={<FaultCodesPage />} />
        <Route path="/oil" element={<OilPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/learn/:id" element={<LearnArticlePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  )
}
