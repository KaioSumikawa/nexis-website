import { FaDiscord } from 'react-icons/fa'

import kaioImage from '../assets/images/kaio-image.png'
import kaykeImage from '../assets/images/kayke-image.png'

export default function About() {
  return (
    <section id="about" className="bg-white px-6 pb-28 pt-24 text-slate-900">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr_1.2fr] lg:items-start">
        {/* TITLE */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F8286]">
            OUR TEAM
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-[#1E293B] sm:text-4xl">
            Quality design, building and development is the foundation of our
            business.
          </h2>
        </div>

        {/* KAIO */}
        <div className="flex flex-col space-y-5">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
              <img src={kaioImage} alt="Kaio" className="h-full w-full object-cover" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1E293B]">Kaio</h3>

              <p className="text-xs font-bold uppercase tracking-wider text-[#467CE4]">
                FOUNDER
              </p>
            </div>
          </div>

          <p className="text-[15px] leading-relaxed text-[#64748B]">
            Passionate about technology and education, Kaio helps shape the
            vision behind Nexis by transforming Minecraft into an interactive
            learning experience where students can study for exams in a more
            immersive and engaging way.
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
              <img src={kaykeImage} alt="Kayke" className="h-full w-full object-cover" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1E293B]">Kayke</h3>

              <p className="text-xs font-bold uppercase tracking-wider text-[#467CE4]">
                MANAGING DIRECTOR
              </p>
            </div>
          </div>

          <p className="text-[15px] leading-relaxed text-[#64748B]">
            Focused on creativity and gameplay systems, Kayke works on
            developing interactive NPCs, quiz mechanics, and immersive
            environments that make studying through Minecraft more dynamic and
            enjoyable for students.
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
  )
}
