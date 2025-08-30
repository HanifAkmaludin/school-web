import NewsCard from "@/components/card-news"

const articles = [
  {
    category: "Relationships",
    readTime: "10 mins",
    title: "Kegiatan Vaksin Covid-19 Dosis Pertama Untuk Siswa Sekolah SMK Itikurih Hibarna",
    description: "Tepat tanggal 9 Oktober 2021 di SMK Itikurih Hibarna Ciparay sudah dilaksanakan kegiatan Vaksinasi Siswa dosis pertama ...",
    author: {
      name: "Smk Itikurih Hibarna",
      avatar: "https://www.e-ujian.com/itikurih20/logo",
      date: "September 21, 2024",
    },
    image: "https://smk.itikurih-hibarna.sch.id/wp-content/uploads/2024/09/1522552419-phone-480x300.jpg",
    slug: "kegiatan-vaksin-covid-19-dosis-pertama-untuk-siswa-sekolah-smk-itikurih-hibarna"
  },
  // Tambahkan artikel lain sesuai kebutuhan
];

export default function News(){
  return(
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Badge */}
        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Our News
        </span>

        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 leading-snug">
          Tetap Terinformasi dengan Wawasan Terbaru <br /> dan Kisah Inspiratif
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Jelajahi artikel pilihan, pendapat pakar, dan pembaruan terkini yang dirancang untuk membantu Anda berkembang, tetap termotivasi, dan mendapatkan informasi tentang hal-hal yang benar-benar penting.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {articles.map((article, idx) => (
            <NewsCard key={idx} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}