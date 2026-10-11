import { ArrowUpRight } from "lucide-react"

function ProviderCard({ image, number, name, type }) {
  return (
    <div className="group relative">

      {/* Image */}
      <div className="relative h-[420px] overflow-hidden rounded-2xl border border-white/10">

        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Number */}
        <span className="absolute top-5 left-5 text-[#f5c518] text-xs font-bold tracking-[3px]">
          {number}
        </span>

        {/* Content */}
        <div className="absolute bottom-6 left-6 right-6">

          <p className="text-[#f5c518] uppercase tracking-[3px] text-[10px]">
            {type}
          </p>

          <div className="flex items-end justify-between mt-2">

            <h3 className="text-2xl font-bold text-white">
              {name}
            </h3>

            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#f5c518] transition">
              <ArrowUpRight size={18} />
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ProviderCard