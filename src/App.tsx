import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageLayout } from './components/PageLayout'
import { Home } from './pages/Home'
import { Karriere } from './pages/Karriere'
import { UeberUns } from './pages/UeberUns'
import { Kontakt } from './pages/Kontakt'
import { Impressum } from './pages/Impressum'
import { Datenschutz } from './pages/Datenschutz'
import { AGB } from './pages/AGB'

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/karriere" element={<Karriere />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}

export default App

