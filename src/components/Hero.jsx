import { ArrowDown, ArrowUpRight } from "lucide-react"
import Virat1 from "../assets/Virat1.jpg"

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#080808] overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f5c518]/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-16 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          {/* LEFT */}
          <div>

            <div className="flex items-center gap-3 mb-8">

              <span className="w-10 h-[1px] bg-[#f5c518]" />

              <p className="text-[#f5c518] uppercase tracking-[4px] text-xs font-semibold">
                Late Night Cafe
              </p>

            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-black leading-[0.82] tracking-[-5px]">

              HUNGRY
              <br />

              <span className="text-[#f5c518]">
                AFTER
              </span>
              <br />

              DARK.
            </h1>

            <p className="mt-8 text-gray-400 max-w-md text-base md:text-lg leading-relaxed">
              Good food hits different at night.
              Order from local kitchens around
              DY Patil & PCCOE.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="group flex items-center gap-3 bg-[#f5c518] text-black px-7 py-4 rounded-full font-bold hover:bg-[#ffd83d] transition">

                Order Tonight

                <ArrowUpRight
                  size={19}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                />

              </button>

              <a
                href="#menu"
                className="flex items-center gap-2 border border-white/20 px-7 py-4 rounded-full text-white hover:bg-white hover:text-black transition"
              >
                Explore Menu
              </a>

            </div>

            {/* Location */}
            <div className="mt-10 flex items-center gap-3 text-xs text-gray-500">

              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />

              Serving DY Patil & PCCOE area

            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* Decorative frame */}
            <div className="absolute -inset-3 border border-[#f5c518]/30 rounded-[30px] translate-x-3 translate-y-3" />

            <div className="relative h-[520px] md:h-[650px] rounded-[24px] overflow-hidden border border-white/10">

              <img
                src={Virat1}
                alt="18Night visual"
                className="w-full h-full object-cover object-center"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

              {/* Image Label */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">

                <div>
                  <p className="text-[#f5c518] text-xs tracking-[3px] uppercase">
                    18Night
                  </p>

                  <p className="text-white text-2xl font-bold mt-1">
                    PLAY AFTER DARK
                  </p>
                </div>

                <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center">
                  <ArrowDown size={18} />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero