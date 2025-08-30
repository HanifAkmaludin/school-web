import articles from "@/utils/contants/news";
import Link from "next/link";

export default async function DetailNews({
  slug,
}: {
  slug: string
}) {
  // Cari artikel berdasarkan slug
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto mt-20 text-center text-gray-500">
        <h2 className="text-xl font-semibold">Artikel tidak ditemukan</h2>
        <p className="mt-2">Silakan kembali ke halaman <Link href="/news" className="text-blue-600 hover:underline">News</Link>.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl lg:shadow-sm lg:border lg:border-gray-200 overflow-hidden mt-10 mb-6">
      {/* Category */}
      <div className="px-6 pt-6 text-sm font-semibold text-gray-600">
        {article.category}
      </div>

      {/* Image */}
      <div className="px-6 mt-3">
        <img
          src={article.image}
          alt={article.title}
          className="w-full rounded-xl object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Label */}
        <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
          {article.readTime}
        </span>

        {/* Title */}
        <h2 className="mt-3 text-2xl font-bold text-gray-900">
          {article.title}
        </h2>

        {/* Author */}
        <div className="flex items-center gap-3 mt-3">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-700">
              {article.author.name}
            </p>
            <p className="text-xs text-gray-400">{article.author.date}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition">
            <i className="ri-bookmark-line"></i> Save to pocket
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition">
            <i className="ri-share-line"></i> Share on media
          </button>
        </div>

        {/* Description / Body */}
        <div className="mt-6 space-y-4 text-gray-600 leading-relaxed text-sm">
          <p dangerouslySetInnerHTML={{ __html: article.content }}></p>
        </div>
      </div>
    </div>
  );
}
