import Link from "next/link"

export default function Footer(){
  return(
    <footer className="bg-white rounded-lg">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© 2025 <a href="https://flowbite.com/" className="hover:underline">SMK Itikurih Hibarna™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500">
            <li>
                <Link href="/" className="hover:underline me-4 md:me-6">Home</Link>
            </li>
            <li>
                <Link href="/about" className="hover:underline me-4 md:me-6">About Us</Link>
            </li>
            <li>
                <Link href="/activities" className="hover:underline me-4 md:me-6">Activities</Link>
            </li>
            <li>
                <Link href="/news" className="hover:underline me-4 md:me-6">News</Link>
            </li>
            <li>
                <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
        </ul>
        </div>
    </footer>
  )
}