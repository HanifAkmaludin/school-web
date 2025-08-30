// import Link from "next/link"

// export default function Header(){
//   return(
//     <nav className="bg-white border-gray-200">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <span className="self-center text-2xl font-semibold whitespace-nowrap">Hanif Akmaludin</span>
//         </a>
//         <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
//             <span className="sr-only">Open main menu</span>
//             <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
//             </svg>
//         </button>
//         <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//           <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
//             <li>
//               <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</Link>
//             </li>
//             <li>
//               <Link href="/about" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">About Us</Link>
//             </li>
//             <li>
//               <Link href="/activities" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Activities</Link>
//             </li>
//             <li>
//               <Link href="/news" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">News</Link>
//             </li>
//             <li>
//               <Link href="/contact" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }


"use client";
import { useState } from "react";
import Link from "next/link";
// import { X, Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 sticky w-full z-50">
      <div className="container flex items-center justify-between mx-auto p-4">
        {/* Brand */}
        <Link href="/" className="text-2xl font-semibold">
          SMK Itikurih Hibarna
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-8 font-medium">
            <li>
              <Link href="/" className="hover:text-blue-600">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">About Us</Link>
            </li>
            <li>
              <Link href="/activities" className="hover:text-blue-600">Activities</Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-blue-600">News</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          {/* <Menu size={24} /> */}
          <i className="ri-menu-3-line text-xl"></i>
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header Sidebar */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            {/* <X size={24} className="text-gray-600 hover:text-red-500" /> */}
            <i className="ri-close-line text-gray-600 hover:text-red-500"></i>
          </button>
        </div>

        {/* Menu List */}
        <ul className="flex flex-col p-4 space-y-4 font-medium">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/activities" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
              Activities
            </Link>
          </li>
          <li>
            <Link href="/news" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
              News
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}