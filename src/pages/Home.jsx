import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProviderCard from "../components/ProviderCard"

import Virat2 from "../assets/Virat2.jpg"
import Virat3 from "../assets/Virat3.jpg"
import Virat4 from "../assets/Virat4.jpg"
import Virat5 from "../assets/Virat5.jpg"
import Virat6 from "../assets/Virat6.jpg"

function Home() {

  const providers = [
    {
      image: Virat2,
      number: "01",
      name: "Cloud Kitchen",
      type: "Late Night Kitchen",
    },
    {
      image: Virat3,
      number: "02",
      name: "Night Kitchen",
      type: "Cloud Kitchen",
    },
    {
      image: Virat4,
      number: "03",
      name: "18Night Cafe",
      type: "Restaurant",
    },
  ]

  return (
    <main className="bg-[#080808] text-white">

      <Navbar />

      <Hero />


      {/* PARTNERS */}
      <section
        id="partners"
        className="px-5 md:px-8 py-24 md:py-32"
      >

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">

            <div>

              <p className="text-[#f5c518] text-xs tracking-[4px] uppercase">
                Our Food Partners
              </p>

              <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">
                PICK YOUR
                <br />
                <span className="text-gray-500">
                  NIGHT.
                </span>
              </h2>

            </div>

            <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
              Three local food spots.
              One simple place to satisfy
              your late-night cravings.
            </p>

          </div>


          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-5">

            {providers.map((provider) => (
              <ProviderCard
                key={provider.number}
                {...provider}
              />
            ))}

          </div>

        </div>

      </section>


      {/* MENU INTRO */}
      <section
        id="menu"
        className="px-5 md:px-8 py-24"
      >

        <div className="max-w-7xl mx-auto">

          <div className="border-y border-white/10 py-16">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <p className="text-[#f5c518] text-xs tracking-[4px] uppercase">
                  Tonight's Menu
                </p>

                <h2 className="mt-5 text-5xl md:text-7xl font-black leading-none">
                  GOOD FOOD.
                  <br />
                  <span className="text-[#f5c518]">
                    NO EXCUSES.
                  </span>
                </h2>

              </div>

              <div>

                <p className="text-gray-400 leading-relaxed max-w-lg">
                  Burgers, wraps, pizzas, sandwiches,
                  coffee and everything you need for
                  a proper late-night meal.
                </p>

                <button className="mt-7 border border-white/20 px-7 py-3 rounded-full hover:bg-[#f5c518] hover:text-black transition">
                  View Full Menu →
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* VISUAL STRIP */}
      <section className="px-5 md:px-8 pb-24">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-5">

          <div className="h-[500px] overflow-hidden rounded-2xl">
            <img
              src={Virat5}
              alt="18Night visual"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[500px] overflow-hidden rounded-2xl">
            <img
              src={Virat6}
              alt="18Night visual"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="px-5 md:px-8 py-24 bg-[#f5c518] text-black"
      >

        <div className="max-w-7xl mx-auto">

          <p className="text-xs tracking-[4px] uppercase font-bold">
            About 18Night
          </p>

          <h2 className="mt-5 text-5xl md:text-8xl font-black tracking-[-4px] leading-[0.85]">
            MADE FOR
            <br />
            THE NIGHT.
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-10">

            <p className="text-lg md:text-xl max-w-lg leading-relaxed">
              A simple late-night food platform
              connecting students and food lovers
              around DY Patil and PCCOE with
              local kitchens and restaurants.
            </p>

            <div className="md:text-right">

              <p className="text-sm font-semibold">
                DY PATIL × PCCOE
              </p>

              <p className="text-sm mt-2 opacity-60">
                Local food. Late nights.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="px-5 md:px-8 py-12 bg-black">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">

          <div>

            <h3 className="text-2xl font-black">
              18<span className="text-[#f5c518]">NIGHT</span>
            </h3>

            <p className="text-gray-600 text-xs mt-2">
              Late night food platform
            </p>

          </div>

          <p className="text-gray-600 text-xs">
            © 2026 18Night Cafe. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  )
}

export default Home