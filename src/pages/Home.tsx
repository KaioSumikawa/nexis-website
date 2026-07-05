import About from '../components/About'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Presentation from '../components/Presentation'
import WhyMinecraft from '../components/WhyMinecraft'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-100">
      <Header />

      <main>
        <Hero />
        <WhyMinecraft />
        <Presentation />
        <Features />
        <About />
        <Footer />
      </main>
    </div>
  )
}