import ActivityCard from "./ui/cards/activity-card"
import activities from "@/utils/contants/activities"

export default function Page(){
  return(
    <section>
      <div className="container mx-auto py-16 px-6 lg:px-0">
        <div className="mb-6 text-center">
          {/* Badge */}
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Kegiatan
          </span>

          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 leading-snug">
            Kegiatan Siswa
          </h2>

          {/* Description */}
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Dokumentasi berbagai aktivitas siswa dalam bidang akademik, ekstrakurikuler, maupun kegiatan sosial. Semua momen berharga ini menjadi bagian penting dari perjalanan belajar di sekolah kami.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((item, index) => (
            <ActivityCard
              key={index}
              category={item?.category}
              description={item?.description}
              image={item?.image}
              title={item?.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}