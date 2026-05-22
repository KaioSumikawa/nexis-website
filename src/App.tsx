import { FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa'

import homeSenac from './assets/images/home-senac.png'
import bibliotecaNpc from './assets/images/biblioteca-npc.png'
import kaioImage from './assets/images/kaio-image.png'
import kaykeImage from './assets/images/kayke-image.png'
import logo from './assets/icons/logo.png'

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
    <div className="min-h-screen bg-white text-slate-100">
      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* LOGO */}
          <div className="-ml-2 flex items-center">
            <img
              src={logo}
              alt="Nexis Logo"
              className="h-[82px] w-[82px] object-contain"
            />

            <div className="-ml-3 text-[36px] font-semibold italic tracking-[-0.03em] text-white">
              Nexis
            </div>
          </div>

          {/* NAV */}
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

        {/* FEATURES */}
        <section
          id="features"
          className="overflow-hidden bg-white py-24 text-slate-900"
        >
          <div className="mx-auto mb-14 max-w-7xl px-6">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500">
              WHO WE ARE
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-5xl">
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

          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="-ml-6 overflow-hidden rounded-r-[2rem] shadow-2xl">
              <img
                src={bibliotecaNpc}
                alt="Minecraft Library"
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div className="max-w-[480px] px-6 lg:px-0">
              <p className="text-[17px] font-bold leading-8 text-[#7F8286]">
                Nexis transforms Minecraft into an immersive educational
                platform where students can explore interactive worlds,
                engage with intelligent NPCs, and answer vestibular-style
                quiz questions in a dynamic and gamified environment.
                Our goal is to make studying more accessible, engaging,
                and enjoyable by combining technology, creativity, and
                interactive learning experiences inside Minecraft.
              </p>

              <button className="mt-7 border-b-2 border-[#487EEB] pb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#487EEB] transition hover:opacity-70">
                VIEW OUR PROJECTS
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="bg-white px-6 pb-28 pt-24 text-slate-900"
        >
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr_1.2fr] lg:items-start">
            {/* TITLE */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F8286]">
                OUR TEAM
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-[#1E293B] sm:text-4xl">
                Quality design, building and development is the foundation of
                our business.
              </h2>
            </div>

            {/* KAIO */}
            <div className="flex flex-col space-y-5">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                  <img
                    src={kaioImage}
                    alt="Kaio"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E293B]">
                    Kaio
                  </h3>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#467CE4]">
                    FOUNDER
                  </p>
                </div>
              </div>

              <p className="text-[15px] leading-relaxed text-[#64748B]">
                Passionate about technology and education, Kaio helps shape
                the vision behind Nexis by transforming Minecraft into an
                interactive learning experience where students can study for
                exams in a more immersive and engaging way.
              </p>

              <div className="flex flex-col space-y-2 pt-2 text-xs font-semibold uppercase tracking-wider text-[#475569]">
                <span className="flex items-center gap-3">
                  <FaDiscord className="text-[20px] text-slate-600" />
                  kaio-sumikawa
                </span>
              </div>
            </div>

            {/* KAYKE */}
            <div className="flex flex-col space-y-5">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                  <img
                    src={kaykeImage}
                    alt="Kayke"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E293B]">
                    Kayke
                  </h3>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#467CE4]">
                    MANAGING DIRECTOR
                  </p>
                </div>
              </div>

              <p className="text-[15px] leading-relaxed text-[#64748B]">
                Focused on creativity and gameplay systems, Kayke works on
                developing interactive NPCs, quiz mechanics, and immersive
                environments that make studying through Minecraft more
                dynamic and enjoyable for students.
              </p>

              <div className="flex flex-col space-y-2 pt-2 text-xs font-semibold uppercase tracking-wider text-[#475569]">
                <span className="flex items-center gap-3">
                  <FaDiscord className="text-[20px] text-slate-600" />
                  kayke-sumikawa
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <section
          id="contact"
          className="bg-[#1F242C] px-6 py-14"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              {/* LEFT SIDE */}
              <div className="max-w-[470px]">
                {/* LOGO */}
                <div className="-ml-8 flex items-center">
                  <img
                    src={logo}
                    alt="Nexis Logo"
                    className="mt-2 h-[118px] w-[118px] object-contain"
                  />

                  <h2 className="-ml-5 text-[40px] font-semibold italic leading-none tracking-[-0.03em] text-white">
                    Nexis
                  </h2>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-3 max-w-[390px] text-[15px] leading-7 text-[#D1D5DB]">
                  Nexis is a Minecraft education platform focused on creating
                  immersive learning experiences through NPCs, quizzes, and
                  interactive worlds inspired by ENEM-style challenges.
                </p>

                {/* EMAIL */}
                <button className="mt-4 border-b-2 border-[#487EEB] pb-1 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:text-[#5EB2D3]">
                  SUPPORT@NEXIS.SITE
                </button>

                {/* SOCIALS */}
                <div className="mt-4 flex items-center gap-3">
                  <button className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-[16px] text-slate-300 transition hover:bg-white/20 hover:text-white">
                    <FaTwitter />
                  </button>

                  <button className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-[16px] text-slate-300 transition hover:bg-white/20 hover:text-white">
                    <FaDiscord />
                  </button>

                  <button className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-[16px] text-slate-300 transition hover:bg-white/20 hover:text-white">
                    <FaYoutube />
                  </button>
                </div>

                {/* DISCORD CTA */}
                <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#1B2028] px-4 py-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                  <span className="rounded-full bg-[#2F80ED] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white">
                    HEY!
                  </span>

                  <div className="flex items-center gap-1 text-[13px] text-white">
                    <span>Join our</span>

                    <span className="flex items-center gap-1 font-semibold">
                      <FaDiscord className="text-[#2F80ED]" />
                      Discord
                    </span>

                    <span>for support.</span>
                  </div>
                </div>

                {/* COPYRIGHT */}
                <div className="mt-5 space-y-1 text-[13px] text-slate-500">
                  <p>© Nexis, LLC 2026. All Rights Reserved.</p>

                  <p>
                    Site created by{' '}
                    <span className="italic text-slate-400">
                      Kaio & Kayke
                    </span>
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="mt-16 flex justify-center gap-16 lg:justify-end">
                {/* NAVIGATE */}
                <div>
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    Navigate
                  </p>

                  <div className="flex flex-col gap-2 text-[16px] text-white">
                    <a href="#" className="transition hover:text-[#487EEB]">
                      Portfolio
                    </a>

                    <a href="#" className="transition hover:text-[#487EEB]">
                      Minecraft Worlds
                    </a>

                    <a href="#" className="transition hover:text-[#487EEB]">
                      Marketplace
                    </a>
                  </div>
                </div>

                {/* ABOUT */}
                <div>
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    About
                  </p>

                  <div className="flex flex-col gap-2 text-[16px] text-white">
                    <a href="#" className="transition hover:text-[#487EEB]">
                      Team
                    </a>

                    <a href="#" className="transition hover:text-[#487EEB]">
                      Partners
                    </a>

                    <a href="#" className="transition hover:text-[#487EEB]">
                      Careers
                    </a>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-start pt-[20px]">
                  <button className="border-b-2 border-[#487EEB] pb-1 text-[12px] font-bold uppercase tracking-[0.18em] text-[#5EB2D3] transition hover:opacity-70">
                    WORK WITH US
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App