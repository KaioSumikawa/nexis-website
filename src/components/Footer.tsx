import { FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa'

import logo from '../assets/icons/logo.png'

export default function Footer() {
  return (
    <section id="contact" className="bg-[#1F242C] px-6 py-14">
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
                <span className="italic text-slate-400">Kaio & Kayke</span>
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
  )
}
