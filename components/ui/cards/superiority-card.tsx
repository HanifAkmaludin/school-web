import { ReactNode } from "react"

interface SuperiorityCardProps{
  title: string,
  description: string,
  icon: ReactNode
}

export default function SuperiorityCard({ title, description, icon }: SuperiorityCardProps) {
  return (
    <div
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
          { icon }
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  )
}