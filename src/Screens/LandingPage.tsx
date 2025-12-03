import MainLayout from "@/Layout/MainLayout";
import Footer from "@/components/Footer/Footer";
import ChooseUSSection from "@/components/LandingPageComp/ChooseUSSection/ChooseUSSection";
import ContactForm from "@/components/LandingPageComp/ContactForm/ContactForm";
import HeroSection from "@/components/LandingPageComp/HeroSection/HeroSection";
import OurClientsSection from "@/components/LandingPageComp/OurClientsSection/OurClientsSection";
import OurExpertiseSection from "@/components/LandingPageComp/OurExpertiseSection/OurExpertiseSection";
import OurStackSection from "@/components/LandingPageComp/OurStackSection/OurStackSection";
import ServiceSection from "@/components/LandingPageComp/ServiceSection/ServiceSection";

export default function LandingPage() {
  return (
    <MainLayout fixedHead>
      {/* Header */}

      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement */}
      <ServiceSection />

      {/* Tech Stack */}
      <OurStackSection />

      {/* Why Choose Us */}
      <ChooseUSSection />

      {/* Our Expertise */}
      <OurExpertiseSection />

      {/* Our Clients */}
      <OurClientsSection />

      {/*Contact US */}
      <ContactForm />
      {/*Footer */}
      <Footer />

      {/* Stats & Description
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-3 sm:mb-4">Transforming Technology</h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-center text-blue-600 font-semibold mb-12 sm:mb-16">Into A Beneficial Asset</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
            <StatCard number="500+" label="Happy Clients" accent="blue" />
            <StatCard number="500+" label="Projects Done" accent="blue" />
            <StatCard number="250+" label="Expert People" accent="teal" />
            <StatCard number="250+" label="Winning Awards" accent="teal" />
          </div>

          <p className="text-sm sm:text-base text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">We deliver cutting-edge solutions that transform businesses. Our experienced team combines technical expertise with strategic thinking to help organizations achieve their digital transformation goals. With proven methodologies and innovative approaches, we ensure success in every project we undertake.</p>
        </div>
      </section>

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

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12 sm:mb-16">Our Satisfied Clients</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8 lg:mb-12">
            <ClientLogo name="Microsoft" />
            <ClientLogo name="AWS" />
            <ClientLogo name="IBM" />
            <ClientLogo name="Tektronix" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            <ClientLogo name="SAP" />
            <ClientLogo name="Teradata" />
            <ClientLogo name="IBM" />
            <ClientLogo name="Microsoft" />
          </div>
        </div>
      </section>

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
      </footer> */}
    </MainLayout>
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
