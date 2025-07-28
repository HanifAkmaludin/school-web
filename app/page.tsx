import Link from "next/link";

export default function Home() {
  return (
    <section className="flex items-center justify-center h-screen">
      <Link href="/signin" className="py-2 px-4 text-white rounded flex" style={{ backgroundColor: "blue" }}>Sign In</Link>
    </section>
  );
}
