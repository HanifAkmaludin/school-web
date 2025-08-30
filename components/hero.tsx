import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="pr-6 lg:pr-12 py-12 lg:py-20">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-balance">Mendidik dengan Dedikasi, Membangun Masa Depan</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              SMK Itikurih Hibarna berkomitmen memberikan pendidikan berkualitas dengan kurikulum terpadu, fasilitas modern, serta dukungan kegiatan akademik dan non-akademik yang membentuk siswa siap kerja dan berdaya saing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium">
                Tentang Sekolah
              </Link>
              <Link
                href="/contact"
                className="border border-gray-600 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full font-medium bg-transparent block"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>

          {/* Right Content - Image and Event Card */}
          <div className="relative h-full min-h-[500px] lg:min-h-[600px]">
            {/* Background Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <img
                src="/school.jpg"
                alt="Student walking through school corridor"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Card Overlay */}
            <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-12">
              <div className="bg-blue-500 text-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-balance">
                      Lihat aktivitas terbaru dan informasi penting untuk siswa, guru, dan orang tua.
                    </h3>
                    <Link href="/activities" className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors text-sm font-medium">
                      Lihat Aktivitas
                      <i className="ri-arrow-right-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

