import { ActivitiesProps } from "@/utils/contants/activities"

export default function ActivityCard({ category, description, title, image } : ActivitiesProps) {
  return (
    <div
      className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200 cursor-pointer"
    >
      {/* Main image */}
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Default overlay with title and category */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-10">
        <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
      </div>

      {/* Hover overlay with description */}
      <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
        <div className="text-center">
          <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
