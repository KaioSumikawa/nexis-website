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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 w-full bg-slate-950/10 backdrop-blur-2xl transition">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-2xl font-bold text-cyan-300">Block Mind</div>
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
          style={{ backgroundImage: `url(${homeSenac})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-cyan-500/20 to-transparent" />
          <div className="relative mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-8">
              <p className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">
                Landing page pronta para customizar
              </p>
              <div className="space-y-6">
                <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  Construa sua presença online com velocidade e estilo.
                </h1>
                <p className="max-w-xl text-lg leading-8 text-slate-300">
                  Use esta base em React + Vite + Tailwind para criar uma landing page moderna, responsiva e fácil de manter.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 sm:w-auto"
                >
                  Começar agora
                </a>
                <a
                  href="#features"
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 px-8 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 sm:w-auto"
                >
                  Ver recursos
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-12">
              <div className="space-y-6">
                <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/90 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Estrutura</p>
                  <h2 className="mt-4 text-2xl font-semibold text-white">Template de landing page</h2>
                  <p className="mt-3 text-slate-300">
                    Inclui navegação fixa, hero, seção de recursos e chamada para ação pronta para editar.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-300">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Visual</p>
                    <p className="mt-2 text-base">Ajuste cores e tipografia com Tailwind em segundos.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-300">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Performance</p>
                    <p className="mt-2 text-base">Build leve e desenvolvimento rápido usando Vite.</p>
                  </div>
                </div>
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
