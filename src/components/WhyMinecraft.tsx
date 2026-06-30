export default function WhyMinecraft() {
  return (
    <section className="overflow-hidden bg-[#F5F5F3] pt-20 pb-32 text-slate-900">
      {/* INTRO */}
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="mx-auto max-w-[900px] text-[22px] leading-[1.7] tracking-[-0.02em] sm:text-[34px]">
          Minecraft is the best-selling videogame of all time.
        </p>

        <p className="mx-auto mt-10 max-w-[900px] text-[22px] leading-[1.7] tracking-[-0.02em] sm:text-[34px]">
          It is also a powerful platform for creating digital experiences which
          educate, engage and entertain.
        </p>

        <p className="mx-auto mt-10 max-w-[900px] text-[22px] leading-[1.7] tracking-[-0.02em] sm:text-[34px]">
          Nexis transforms Minecraft into immersive educational experiences.
        </p>
      </div>

      {/* LINE */}
      <div className="mt-10">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-[90px] w-full"
        >
          <path
            d="
              M0,55
              C260,10
              520,95
              760,82
              C1000,70
              1220,110
              1440,80
            "
            fill="none"
            stroke="#314167"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="mx-auto grid max-w-7xl items-start gap-20 px-6 pt-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT */}
        <div>
          <h2
            className="text-[48px] tracking-[-0.04em] sm:text-[72px]"
            style={{
              fontFamily: 'multi-display, sans-serif',
            }}
          >
            Why Minecraft?
          </h2>

          <div className="mt-12">
            {['A Cultural Icon', 'A Trusted Platform', 'Something for Everyone'].map((item) => (
              <button
                key={item}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  border-b
                  border-slate-400
                  py-7
                  text-left
                  text-[22px]
                  transition
                  hover:opacity-70
                "
              >
                <span>{item}</span>

                <span className="text-[38px] font-light">+</span>
              </button>
            ))}
          </div>
        </div>

        {/* VIDEO */}
        <div className="overflow-hidden rounded-[8px] shadow-2xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            className="block w-full rounded-[8px]"
          >
            <source src="/videos/minecraft.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
