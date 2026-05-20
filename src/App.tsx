import homeSenac from './assets/icons/home-senac.png'

const features = [
  {
    title: 'Design focado no usuário',
    description: 'Layout limpo e fluido pensando em conversão e experiência mobile-first.',
  },
  {
    title: 'Velocidade e performance',
    description: 'Arquitetura leve com React + Vite para carregamento rápido e build otimizado.',
  },
  {
    title: 'Fácil de personalizar',
    description: 'Componentes modulares e classe utilitárias para iterar rápido no design.',
  },
]

function App() {
  return (
    <div
      className="min-h-screen text-slate-100"
      style={{
        backgroundImage: `url(${homeSenac})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <header className="absolute inset-x-0 top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold text-white">Nexis</div>
          <nav className="hidden gap-8 text-sm uppercase tracking-[0.2em] text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">
              Recursos
            </a>
            <a href="#about" className="transition hover:text-white">
              Sobre
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section
          className="relative overflow-hidden px-6 py-24 sm:py-32"
          style={{
            backgroundImage: `url(${homeSenac})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-cyan-500/20 to-transparent" />

          <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center text-center">
            <div className="max-w-3xl space-y-8">
              <h1
                className="text-white font-normal leading-[0.9] tracking-[-0.015em] text-[70px] sm:text-[90px] lg:text-[100px]"
                style={{ fontFamily: 'multi-display, sans-serif' }}
              >
                INVEST IN
                <br />
                <span className="italic">CREATIVITY</span>
              </h1>

              {/* BOTÃO COM GRADIENTE */}
              <a
                href="#features"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#467CE4] to-[#5DB1D3] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-lg"
              >
                <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full"></span>

                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#467CE4]">
                  Explore our services
                </span>
              </a>

              {/* SCROLL INDICATOR */}
              <div className="mt-12 flex flex-col items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-white"
                  style={{ border: '1px solid #305693' }}
                >
                  ↓
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300 leading-relaxed">
                  SCROLL FOR MORE
                  <br />
                  ABOUT NEXIS
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Recursos</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Tudo que você precisa para lançar rápido.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
              Construído para ser o ponto de partida de uma landing page profissional com layout adaptado para desktop e mobile.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-slate-900/80"
              >
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-4 text-slate-300">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Sobre</p>
              <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
                Estrutura pensada para conversão e crescimento.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Adicione seções, depoimentos, formulários ou integração com analytics com facilidade. O código já está pronto para você customizar o visual e a navegação.
              </p>
            </div>

            <div className="rounded-[2rem] border border-cyan-400/10 bg-cyan-500/5 p-8 text-slate-200">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Use como base</p>
              <ul className="mt-6 space-y-4 text-slate-300">
                <li>• Layout responsivo com seções separadas</li>
                <li>• Hero, recursos, CTA e rodapé</li>
                <li>• Classes utilitárias Tailwind para customizar rápido</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-900/80 px-6 py-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Pronto para começar?</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Lance sua landing page ainda hoje.
                </h2>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:contato@blockmind.com"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Entre em contato
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 px-8 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500"
                >
                  Ver demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        <p>© 2026 Block Mind. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App