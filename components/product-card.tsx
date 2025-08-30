import Link from "next/link";

interface ProductCardProps {
  product: {
    imageUrl: string,
    name: string,
    description: string,
    price: string,
    id: number,
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card p-4">
      <img src={product.imageUrl || "/images/placeholder.png"} alt={product.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="font-bold text-lg mt-3">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-blue-600 font-semibold mt-2">Rp {product.price.toLocaleString()}</p>
      <Link href={`/products/${product.id}`} className="text-sm text-blue-500 mt-3 inline-block">
        Lihat Detail →
      </Link>
    </div>
  );
}
