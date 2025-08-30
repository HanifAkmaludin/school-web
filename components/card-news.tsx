import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  category: string;
  readTime: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
    date: string;
  };
  image: string;
  slug: string
};

export default function NewsCard({
  category,
  readTime,
  title,
  description,
  author,
  image,
  slug,
}: NewsCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition p-4 flex flex-col">
      {/* Thumbnail */}
      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="object-cover hover:scale-105 transition duration-300"
        />
        <span className="absolute top-3 left-3 bg-white/90 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <span className="text-gray-400 text-xs mb-1 text-start">{readTime} read</span>
        <Link href={`news/${slug}`}>
          <h3 className="text-start text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-500">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm flex-1 line-clamp-2 text-start">
          {description}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 mt-4">
          <img
            src={author.avatar}
            alt={author.name}
            className="rounded-full w-[36px] h-[36px] object-cover"
          />
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-800 text-start">
              {author.name}
            </p>
            <span className="text-xs text-gray-400 text-start">{author.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
