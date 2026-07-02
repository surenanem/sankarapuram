import Nav from './components/Nav'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Advantages from './components/Advantages'
import Neighborhood from './components/Neighborhood'
import Legal from './components/Legal'
import IdealFor from './components/IdealFor'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import StickyContact from './components/StickyContact'

export default function App() {
  return (
    <div id="top">
      <Nav />
      <Hero />
      <Overview />
      <Advantages />
      <Neighborhood />
      <Legal />
      <IdealFor />
      <Pricing />
      <Footer />
      <StickyContact />
      <div className="h-16 md:hidden" />
    </div>
  )
}
