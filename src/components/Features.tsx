import bibliotecaNpc from '../assets/images/biblioteca-npc.png'

export default function Features() {
  return (
    <section id="features" className="overflow-hidden bg-white py-24 text-slate-900">
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
            Nexis transforms Minecraft into an immersive educational platform
            where students can explore interactive worlds, engage with
            intelligent NPCs, and answer vestibular-style quiz questions in a
            dynamic and gamified environment. Our goal is to make studying more
            accessible, engaging, and enjoyable by combining technology,
            creativity, and interactive learning experiences inside Minecraft.
          </p>

          <button className="mt-7 border-b-2 border-[#487EEB] pb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#487EEB] transition hover:opacity-70">
            VIEW OUR PROJECTS
          </button>
        </div>
      </div>
    </section>
  )
}
