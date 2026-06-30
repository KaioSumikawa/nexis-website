import homeSenac from '../assets/images/home-senac.png'

export default function Hero() {
  const scrollToFeatures = () => {
    const section = document.getElementById('features')
    if (!section) return

    const targetY = section.offsetTop
    const startY = window.scrollY
    const distance = targetY - startY
    const duration = 1000

    let startTime: number | null = null

    const ease = (t: number) => 0.5 * (1 - Math.cos(Math.PI * t))

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime

      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)

      const run = startY + distance * ease(progress)
      window.scrollTo(0, run)

      if (progress < 1) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      style={{
        backgroundImage: `url(${homeSenac})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-slate-950/70" />

      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-cyan-500/20 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
        <div className="max-w-3xl space-y-8">
          <h1
            className="text-[70px] font-semibold leading-[0.9] tracking-[-0.015em] text-white sm:text-[90px] lg:text-[100px]"
            style={{ fontFamily: 'multi-display, sans-serif' }}
          >
            INVEST IN
            <br />
            <span className="italic">EDUCATION</span>
          </h1>

          <a
            href="#features"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#467CE4] to-[#5DB1D3] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-lg"
          >
            <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full"></span>

            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#467CE4]">
              Explore our services
            </span>
          </a>
        </div>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
        <button
          onClick={scrollToFeatures}
          className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-[#487EEB]"
        >
          <span className="absolute left-0 top-0 h-0 w-full bg-[#487EEB] transition-all duration-500 ease-out group-hover:h-full"></span>

          <span className="relative z-10 text-white">↓</span>
        </button>

        <p className="text-center text-sm font-bold uppercase leading-relaxed tracking-[0.15em] text-slate-300">
          SCROLL FOR MORE
          <br />
          ABOUT NEXIS
        </p>
      </div>
    </section>
  )
}
