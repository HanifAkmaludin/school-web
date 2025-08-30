export default function Major() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-20">
      <div className="mb-12 text-center">
        {/* Badge */}
        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Jurusan
        </span>

        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 leading-snug">
          Jurusan Unggulan
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Kami menyediakan berbagai jurusan yang dirancang sesuai kebutuhan dunia kerja dan perkembangan industri, sehingga siswa siap bersaing baik di tingkat nasional maupun internasional.
        </p>
      </div>

      {/* Package Design */}
      <div className="grid md:grid-cols-2 items-center gap-10">
        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://ppdb.itikurih-hibarna.sch.id/images/portfolio/bank-mini.jpeg"
            alt="Package Design"
            className="w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            PERBANKAN
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Materi yang dipelajari pada kompetensi keahlian Perbankan berfokus pada dunia keuangan, seperti bank, asuransi, lembaga simpan pinjam, pasar modal serta transaksi yang terjadi di dalamnya. Selain itu, lulusan perbankan mampu memaksimalkan fungsi lembaga perantara bagi pihak yang membutuhkan dan pihak yang kelebihan sumber dana. Peluang karir yang dimiliki lulusan perbankan yang paling sesuai adalah bagian penjualan dilembaga keuangan dan Pegawai Bank
          </p>
        </div>
      </div>

      {/* Corporate Design */}
      <div className="grid md:grid-cols-2 items-center gap-10">
        {/* Content */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            TEKNIK KOMPUTER DAN JARINGAN
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Kompetensi Keahlian TKJ membekali siswa untuk menguasai kemampuan di bidang troubleshooting PC dan laptop, troubleshooting jaringan (LAN dan WAN), serta Administrasi jaringan. Untuk mata diklat produktif, siswa TKJ memperoleh pelajaran dengan komposisi 30% teori dan 70% praktek. Materi yang dipelajari oleh Siswa TKJ adalah materi tentang perakitan PC dan Laptop, jaringan LAN (Local Area Network), jaringan WAN (Wide Area Network), Server, Administrasi jaringan.
          </p>

          <b className="">Lingkup Pekerjaan Lulusan Teknik Komputer dan Jaringan</b>

          {/* List */}
          <ul className="space-y-3 text-gray-600 mt-6">
            <li className="flex items-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 mt-2"></span>
              Integrator Komputer
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 mt-2"></span>
              Penyedia jasa layanan internet
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 mt-2"></span>
              Administrator Server
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 mt-2"></span>
              Integrator, dan administrator jaringan
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 mt-2"></span>
              Administrator web 
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://ppdb.itikurih-hibarna.sch.id/images/portfolio/lab-hardware.jpeg"
            alt="Corporate Design"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
