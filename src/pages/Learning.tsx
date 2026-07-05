import Header from '../components/Header'

export default function Learning() {
  return (
    <div className="min-h-screen bg-[#F5F5F3] text-slate-900">
      <Header />

      {/* HERO */}
      <section className="mx-auto flex min-h-[45vh] max-w-7xl items-center px-6 pt-32">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#487EEB]">
            Learning
          </p>

          <h1
            className="mt-4 text-5xl tracking-[-0.04em] sm:text-7xl"
            style={{ fontFamily: 'multi-display, sans-serif' }}
          >
            Learn Programming
            <br />
            with Minecraft
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
            Explore interactive lessons created with Minecraft Education,
            MakeCode, Scratch, JavaScript and Python.
          </p>
        </div>
      </section>

      {/* COURSES */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <h2
          className="mb-12 text-4xl tracking-[-0.03em]"
          style={{ fontFamily: 'multi-display, sans-serif' }}
        >
          Learning Paths
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-1">
            <h3 className="text-2xl font-semibold">
              Scratch
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Learn programming logic using visual blocks inside Minecraft
              Education.
            </p>

            <button className="mt-8 border-b-2 border-[#487EEB] pb-1 text-sm font-bold uppercase tracking-[0.15em] text-[#487EEB]">
              Coming Soon
            </button>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-1">
            <h3 className="text-2xl font-semibold">
              JavaScript
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Move from block programming to text-based coding using
              JavaScript.
            </p>

            <button className="mt-8 border-b-2 border-[#487EEB] pb-1 text-sm font-bold uppercase tracking-[0.15em] text-[#487EEB]">
              Coming Soon
            </button>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-1">
            <h3 className="text-2xl font-semibold">
              Python
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Develop more advanced projects using Python inside Minecraft
              Education.
            </p>

            <button className="mt-8 border-b-2 border-[#487EEB] pb-1 text-sm font-bold uppercase tracking-[0.15em] text-[#487EEB]">
              Coming Soon
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}