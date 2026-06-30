import About from './components/About'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyMinecraft from './components/WhyMinecraft'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-100">
      <Header />

      <main>
        <Hero />
        <WhyMinecraft />
        <Features />
        <About />
        <Footer />
      </main>
    </div>
  )
}