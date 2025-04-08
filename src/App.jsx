import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"

import SchoolIntroduction from './components/Intro'
import MissionSection from './components/ourMission'
import { CardStackDemo } from './components/review2'
import { FooterWithMap } from './components/footer'
// import { AboutSection } from './pages/about/components/hero'
import { CarouselWithContent } from './components/ui/carousel'
import AboutSection from './pages/about'
import AcademicsPage from './pages/acedemics'
import GalleryPage from './pages/gallery'
import ContactForm from './pages/contack'
import AdmissionForm from './pages/admission'

function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={
        <>
          <Navbar />
         <CarouselWithContent/>
          <SchoolIntroduction />
          <MissionSection />
          <CardStackDemo />
          <FooterWithMap />
        </>
      } />

      {/* About Page */}
      <Route path="/about" element={
        <>
<Navbar />
         
       <AboutSection/>
        
          <FooterWithMap />
        </>
      } />
      <Route path="/academics" element={
        <>
          <Navbar />
         
      <AcademicsPage></AcademicsPage>
        
          <FooterWithMap />
        </>
      } />
       <Route path="/gallary" element={
        <>
          <Navbar />
         
     <GalleryPage/>
        
          <FooterWithMap />
        </>
      } />
      <Route path="/contact" element={
        <>
          <Navbar />
         
     <ContactForm></ContactForm>
        
          <FooterWithMap />
        </>
      } />
       <Route path="/admission" element={
        <>
          <Navbar />
         
    <AdmissionForm></AdmissionForm>
        
          <FooterWithMap />
        </>
      } />
    </Routes>
  );
}

export default App