import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import FloatingAdmissions from './components/FloatingAdmissions.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Academics from './pages/Academics.jsx'
import Admissions from './pages/Admissions.jsx'
import StudentLife from './pages/StudentLife.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Accessibility from './pages/Accessibility.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="bg-background text-on-surface font-body-md antialiased min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      {/* Home: transparent nav overlays the hero. Inner pages: nav sits above content. */}
      <main className={`flex-grow ${isHome ? '' : 'pt-[68px]'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingAdmissions />
    </div>
  )
}
