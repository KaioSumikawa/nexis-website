import homeSenac from './assets/images/home-senac.png'
import bibliotecaNpc from './assets/images/biblioteca-npc.png'

function App() {
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
    <div className="min-h-screen text-slate-100">
      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold text-white">Nexis</div>

          <nav className="hidden gap-8 text-sm uppercase tracking-[0.2em] text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>

            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
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

        {/* SEGUNDA SECTION (AJUSTADA PARA BRANCO) */}
        <section
          id="features"
          className="overflow-hidden bg-white py-28 text-slate-900"
        >
          {/* TOPO */}
          <div className="mx-auto mb-20 max-w-7xl px-6">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500">
              WHO WE ARE
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-6xl">
              Nexis uses
              <br />
              Minecraft as a
              <br />
              platform to inspire
              <br />
              <span className="bg-gradient-to-r from-[#487EEB] to-[#5EB2D3] bg-clip-text text-transparent">
                education.
              </span>
            </h2>
          </div>

          {/* IMAGEM + TEXTO */}
          <div className="grid items-center gap-20 lg:grid-cols-[1.3fr_0.7fr]">
            {/* IMAGEM */}
            <div className="-ml-10 overflow-hidden rounded-r-[2rem] shadow-2xl">
              <img
                src={bibliotecaNpc}
                alt="Minecraft Library"
                className="h-[650px] w-full object-cover"
              />
            </div>

            {/* TEXTO */}
            <div className="max-w-[480px] px-6 lg:px-0">
              <p className="text-xl font-bold leading-10 text-[#7F8286]">
                Nexis transforms Minecraft into an immersive educational
                platform where students can explore interactive worlds,
                engage with intelligent NPCs, and answer vestibular-style
                quiz questions in a dynamic and gamified environment.
                Our goal is to make studying more accessible, engaging,
                and enjoyable by combining technology, creativity, and
                interactive learning experiences inside Minecraft.
              </p>

              <button className="mt-10 border-b-2 border-[#487EEB] pb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#487EEB] transition hover:opacity-70">
                VIEW OUR PROJECTS
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="bg-white px-6 py-28 text-slate-900"
        >
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr_1.2fr] lg:items-start">
            
            {/* Título da Seção */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F8286]">
                OUR TEAM
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-[#1E293B] sm:text-4xl">
                Quality design, building and development is the foundation of our business.
              </h2>
            </div>

            {/* Membro 1: David */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-14 w-14 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                  <img src="https://api.dicebear.com/7.x/bottts/svg?seed=David" alt="David Avatar" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E293B]">David</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#467CE4]">FOUNDER</p>
                </div>
              </div>
              <p className="text-[15px] leading-relaxed text-[#64748B]">
                Founded LeadPro 5 years ago, overlooking operations since day 1 to ensure that our team delivers market leading quality and stays on the forefront of service offering.
              </p>
              <div className="flex flex-col space-y-1.5 pt-2 text-xs font-semibold tracking-wider text-[#475569] uppercase">
                <span className="flex items-center gap-2">
                  <span className="text-slate-400">🎮</span> FATTACO#1059
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-slate-400">🐦</span> FATTACO_
                </span>
              </div>
            </div>

            {/* Membro 2: Robert */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-14 w-14 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                  <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Robert" alt="Robert Avatar" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E293B]">Robert</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#467CE4]">MANAGING DIRECTOR</p>
                </div>
              </div>
              <p className="text-[15px] leading-relaxed text-[#64748B]">
                An experienced leader who assists our clients across the globe with monetization and idea generation, helping us produce builds for 250+ unique projects and metaverse brands.
              </p>
              <div className="flex flex-col space-y-1.5 pt-2 text-xs font-semibold tracking-wider text-[#475569] uppercase">
                <span className="flex items-center gap-2">
                  <span className="text-slate-400">🎮</span> BUMBLEWASP#5111
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-slate-900 px-6 py-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
            <h2 className="text-center text-3xl font-semibold text-white">
              Launch your landing page today.
            </h2>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 text-center text-sm text-slate-500">
        <p>© 2026 Block Mind.</p>
      </footer>
    </div>
  )
}

export default App