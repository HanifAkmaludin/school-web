"use client"

// import About from "@/components/about"
import Major from "@/components/major"
import { useState } from "react";
import SuperiorityCard from "@/components/ui/cards/superiority-card";

const superiority = [
  {
    icon: <i className="ri-money-dollar-box-line text-2xl text-blue-500"></i>,
    title: "Biaya Terjangkau",
    description:
      "Biaya yang transparan, terjangkau dan terintegrasi dengan Bank sehingga memudahkan orang tua siswa dalam monitoring pembiayaan dan pembayaran.",
  },
  {
    icon: <i className="ri-shake-hands-line text-2xl text-blue-500"></i>,
    title: "Kerjasama Perusahaan",
    description:
      "Banyak kerjasama dengan DU/DI sehingga memperluas kesempatan lulusan untuk langsung bekerja.",
  },
  {
    icon: <i className="ri-book-line text-2xl text-blue-500"></i>,
    title: "Kurikulum",
    description:
      "Menggunakan kurikulum Dinas Pendidikan terbaru yang dipadukan dengan kurikulum Industri serta bersertifikat Nasional dan Internasional.",
  },
  {
    icon: <i className="ri-home-line text-2xl text-blue-500"></i>,
    title: "Lingkungan Nyaman",
    description:
      "Lingkungan yang selalu dijaga agar tetap asri sehingga membuat suasana belajar menjadi lebih nyaman dan menyenangkan.",
  },
  {
    icon: <i className="ri-building-line text-2xl text-blue-500"></i>,
    title: "Fasilitas Lengkap",
    description:
      "Memiliki fasilitas penunjang kegiatan belajar yang lengkap dan berkualitas sehingga dapat memudahkan dalam kegiatan pembelajaran.",
  },
  {
    icon: <i className="ri-user-line text-2xl text-blue-500"></i>,
    title: "Tenaga Pengajar",
    description:
      "Memiliki tenaga pengajar yang berpengalaman dan mempunyai kompetensi yang sudah tersertifikasi baik Nasional maupun Internasional.",
  },
];

export default function Page(){
  const [activeIndex, setActiveIndex] = useState(0);

  return(
    <>
      {/* <About /> */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="mb-6">
            {/* Badge */}
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Keunggulan
            </span>

            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 leading-snug">
              Keunggulan Sekolah Kami
            </h2>

            {/* Description */}
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Berbagai keunggulan yang kami tawarkan untuk mendukung proses belajar siswa agar siap menghadapi dunia akademik maupun dunia kerja.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {superiority.map((item, index) => (
              <SuperiorityCard 
                key={index}
                icon={item?.icon}
                title={item?.title}
                description={item?.description}
              />
            ))}
          </div>
        </div>
      </section>
      <Major />
    </>
  )
}