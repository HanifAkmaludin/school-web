export default function About(){
  return(
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="inline-block bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm mb-4">ABOUT ME</span>
            <h2 className="text-3xl font-bold mb-4">Get to Know Me</h2>
            <p className="text-gray-600 mb-6">
              I am a Computer Science student at <b>University of the People</b>.  
              I have a strong passion for technology, enjoy learning new tools, and 
              aspire to create impactful solutions through software development.
            </p>
            <a href="#"
              className="items-center bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition flex gap-2 w-max">
              Learn More
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="bg-blue-600 text-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <i className="ri-book-line text-3xl"></i>
              <h3 className="text-lg font-semibold mb-2 mt-2">Education</h3>
              <p className="text-sm">Computer Science student at University of the People.</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <i className="ri-tools-line text-3xl"></i>
              <h3 className="text-lg font-semibold mb-2 mt-2">Technical Skills</h3>
              <p className="text-sm text-gray-600">JavaScript, React JS, Vue JS, Next JS, Nuxt JS, Tailwind, Node.js.</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <i className="ri-star-line text-3xl"></i>
              <h3 className="text-lg font-semibold mb-2 mt-2">Interests</h3>
              <p className="text-sm text-gray-600">Web Dev, AI, Backend, Cloud Computing.</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <i className="ri-focus-line text-3xl"></i>
              <h3 className="text-lg font-semibold mb-2 mt-2">Vision</h3>
              <p className="text-sm text-gray-600">Creating impactful tech solutions.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}