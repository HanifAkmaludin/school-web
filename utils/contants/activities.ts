export interface ActivitiesProps {
  id?: number
  title: string
  category: string
  image: string
  description: string
}

const activities: ActivitiesProps[] = [
  {
    id: 1,
    title: "Ujian Praktik Seni Budaya",
    category: "art • beauty",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNqa9KfBloKSFNpXQTPCXDQrP_TdkbQpJWiz5Ko3nhlKtDQN66qppnyQCbQ6Ze67O-d2U&usqp=CAU",
    description: "Siswa sedang melakukan ujian praktik seni budaya",
  },
  {
    id: 2,
    title: "Fasilitas",
    category: "nature • leaf • tropical",
    image: "https://ppdb.itikurih-hibarna.sch.id/images/portfolio/lab-admin.jpeg",
    description: "Didukung dengan fasilitas pembelajaran yang baik.",
  },
  {
    id: 3,
    title: "Kegiatan Belajar",
    category: "vintage • travel",
    image: "https://ppdb.itikurih-hibarna.sch.id/images/portfolio/img1-4.jpeg",
    description: "Kegiatan Belajar yang di dukung dengan sumber daya Guru Professional.",
  },
  {
    id: 4,
    title: "Microtik",
    category: "business • city",
    image: "https://ppdb.itikurih-hibarna.sch.id/images/portfolio/mikroacad.jpeg",
    description: "SMK Itikurih Hibarna Jurusan TKJ telah resmi menjadi Academy Mikrotik.",
  },
]

export default activities;