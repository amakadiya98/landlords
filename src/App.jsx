import './App.css'
import Header from './component/common/header';
import About from './pages/about/About';
import Pricing from './pages/pricing/Pricing';
import Services from './pages/services/Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  )
}


export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
