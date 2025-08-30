// // import Link from "next/link";

// // export default function Home() {
// //   return (
// //     <section className="flex items-center justify-center h-screen">
// //       <Link href="/signin" className="py-2 px-4 text-white rounded flex" style={{ backgroundColor: "blue" }}>Sign In</Link>
// //     </section>
// //   );
// // }

// "use client";

// // import ProductCard from "@/components/product-card";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchProduct = async () => {
//     setIsLoading(true);
//     const res = await fetch("/api/products", {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//     });

//     const data = await res.json();

//     if (res.ok) {
//       setIsLoading(false);
//       setProducts([]);
//     } else {
//       setProducts(data);
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProduct();
//   }, []);

//   return (
//     <div className="container mx-auto py-10">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Daftar Produk</h1>
//         <Link href="/products/new" className="btn btn-primary">Tambah Produk</Link>
//       </div>

//       {/* {products.length === 0 ? (
//         <p className="text-gray-600">Belum ada produk.</p>
//       ) : (
//         <div className="grid md:grid-cols-3 gap-6">
//           {products.map(p => <ProductCard key={p.id} product={p} />)}
//         </div>
//       )} */}
//     </div>
//   );
// }

"use client"

import Hero from "@/components/hero"

export default function Home(){
  return(
    <Hero />
  )
}

