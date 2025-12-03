import MainLayout from "@/Layout/MainLayout";
import bulb from "../../public/Images/home/bulb.png";
import Image from "next/image";

export default function LandingPage() {
  return (
    <MainLayout>
      {/* Header */}

      {/* Hero Section */}
      <section className="grid grid-cols-2 h-[87vh] overflow-hidden px-80">
        <div className=" mx-auto flex justify-center items-center">
          {/* LEFT CONTENT */}
          <div className="pt-10 ">
            <h2 className="text-[#0F1D37] leading-tight mb-8">
              We Provide <br />
              Smart Business <br />
              Solutions
            </h2>

            <div className="flex gap-4 mb-10">
              <div className="w-1 bg-[#1A73D9] rounded" />
              <p className="text-[#1E2A3B] text-lg max-w-xl">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ab illo inventore.</p>
            </div>

            <button className="bg-[#186DBF] text-white px-8 py-3 rounded-md hover:bg-blue-700 transition">Get In Touch</button>
          </div>
        </div>

        {/* RIGHT BULB IMAGE */}
        <Image src={bulb} alt="Bulb" className="w-400 h-400 object-cover left-[30%] -top-[50%] absolute z-10" width={1000} height={1000} />
      </section>

      {/* Blue Banner */}
      <div className="bg-blue-600 text-white py-2 sm:py-3 z-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm font-medium">Our Services & Capabilities</p>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12 leading-tight">
            Empowering Our Worldwide Clients To Adopt
            <br className="hidden sm:block" />
            Cutting-Edge Technology, Reimagine
            <br className="hidden sm:block" />
            Processes, And Enhance Experiences
          </h2>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <ServiceCard title="GLOBAL MARKETING" description="Reach global audiences with data-driven marketing strategies tailored to your business needs." />
            <ServiceCard title="LEADERSHIP" description="Develop strong leadership capabilities through comprehensive training and coaching programs." />
            <ServiceCard title="WEB DEVELOPMENT" description="Build modern, responsive websites that deliver exceptional user experiences and drive results." />
            <ServiceCard title="DATA ONLINE TRAINING" description="Upskill your team with cutting-edge online training programs in data science and analytics." />
            <ServiceCard title="AGILE + DEVOPS" description="Streamline development with agile methodologies and DevOps best practices for faster delivery." />
            <ServiceCard title="PRIVACY DESIGN BY OPERATION" description="Build privacy and security into every aspect of your operations from the ground up." />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Our Tech Stack</h2>

          {/* First Row */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <TechIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png" alt="Adobe" />
            <TechIcon src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/261_Php_logo-512.png" alt="PHP" />
            <TechIcon src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" alt="Docker" />
            <TechIcon src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png" alt="Node" />
            <TechIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" alt="AWS" />
            <TechIcon src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="MongoDB" />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            <TechIcon src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="HTML5" />
            <TechIcon src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="CSS3" />
            <TechIcon src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React" />
            <TechIcon src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="JavaScript" />
            <TechIcon src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="Redux" />
            <TechIcon src="https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" alt="Angular" />
          </div>
        </div>
      </section>

      {/* Stats & Description */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-3 sm:mb-4">Transforming Technology</h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-center text-blue-600 font-semibold mb-12 sm:mb-16">Into A Beneficial Asset</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
            <StatCard number="500+" label="Happy Clients" accent="blue" />
            <StatCard number="500+" label="Projects Done" accent="blue" />
            <StatCard number="250+" label="Expert People" accent="teal" />
            <StatCard number="250+" label="Winning Awards" accent="teal" />
          </div>

          <p className="text-sm sm:text-base text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">We deliver cutting-edge solutions that transform businesses. Our experienced team combines technical expertise with strategic thinking to help organizations achieve their digital transformation goals. With proven methodologies and innovative approaches, we ensure success in every project we undertake.</p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12 sm:mb-16">Who We Work With</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <WorkCard image="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600" title="DEVELOPERS" description="Skilled engineers building robust solutions" />
            <WorkCard image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600" title="DESIGNERS" description="Creative professionals crafting beautiful experiences" />
            <WorkCard image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600" title="CONSULTANTS" description="Strategic advisors aligning technology with business" />
          </div>
        </div>
      </section>

      {/* Satisfied Clients */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12 sm:mb-16">Our Satisfied Clients</h2>

          {/* First Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8 lg:mb-12">
            <ClientLogo name="Microsoft" />
            <ClientLogo name="AWS" />
            <ClientLogo name="IBM" />
            <ClientLogo name="Tektronix" />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            <ClientLogo name="SAP" />
            <ClientLogo name="Teradata" />
            <ClientLogo name="IBM" />
            <ClientLogo name="Microsoft" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-orange-500 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full mb-4 sm:mb-6">GET IN TOUCH</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Be On The Top & Reach
            <br className="hidden sm:block" />
            Out To More People!
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">Ready to transform your business? Let's discuss how our solutions can help you achieve your goals and reach new heights in the digital landscape.</p>
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded hover:bg-blue-700 transition text-sm sm:text-base font-medium shadow-lg">Contact Us Today</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-4">
                <span className="text-blue-400">M</span>
                <span>SS</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-4">Providing innovative business solutions for the digital age.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">SERVICES</h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">RESOURCES</h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Whitepapers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">NEWSLETTER</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-4">Subscribe to get the latest updates and insights.</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input type="email" placeholder="Your email" className="flex-1 px-3 sm:px-4 py-2 bg-gray-800 text-white text-xs sm:text-sm rounded border border-gray-700 focus:outline-none focus:border-blue-500" />
                <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded hover:bg-blue-700 transition text-xs sm:text-sm whitespace-nowrap">Sign Up</button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-gray-400">© 2024 MSS Solutions. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </MainLayout>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 sm:mb-3 tracking-wide">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function TechIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
      <img src={src} alt={alt} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain" />
    </div>
  );
}

function StatCard({ number, label, accent }: { number: string; label: string; accent: "blue" | "teal" }) {
  const colorClass = accent === "blue" ? "text-blue-600" : "text-teal-600";
  return (
    <div className="text-center p-4">
      <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${colorClass} mb-2`}>{number}</div>
      <div className="text-xs sm:text-sm text-gray-600 font-medium">{label}</div>
    </div>
  );
}

function WorkCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full h-40 sm:h-48 object-cover" />
      <div className="p-4 sm:p-6">
        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{description}</p>
        <button className="text-blue-600 hover:text-blue-700 font-semibold text-xs sm:text-sm">Learn More →</button>
      </div>
    </div>
  );
}

function ClientLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition">
      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400">{name}</span>
    </div>
  );
}
