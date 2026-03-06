import { FaCode, FaVideo, FaLanguage, FaInstagram, FaPenNib, FaDatabase, FaFileExcel, FaPaintbrush, FaRobot, FaShopify } from "react-icons/fa6"

const services = [
  { icon: <FaCode size={20} />, title: "Web Development", desc: "Next.js, React & Tailwind CSS.", tag: "Web", price: "From $80" },
  { icon: <FaShopify size={20} />, title: "EC Site", desc: "Shopify / WooCommerce setup.", tag: "EC", price: "From $120" },
  { icon: <FaRobot size={20} />, title: "LINE Bot & Automation", desc: "Custom bots & workflow automation.", tag: "Bot", price: "From $60" },
  { icon: <FaDatabase size={20} />, title: "Data Entry & Scraping", desc: "Fast, accurate data collection.", tag: "Data", price: "From $15" },
  { icon: <FaFileExcel size={20} />, title: "PDF & Excel Automation", desc: "Automate repetitive tasks.", tag: "Excel", price: "From $20" },
  { icon: <FaPaintbrush size={20} />, title: "Logo & Banner Design", desc: "Clean, modern design for your brand.", tag: "Design", price: "From $25" },
  { icon: <FaVideo size={20} />, title: "Video Editing", desc: "YMM4 & AviUtl. Fast delivery.", tag: "Video", price: "From $20" },
  { icon: <FaLanguage size={20} />, title: "Japanese Translation", desc: "Natural, fluent translation.", tag: "Translation", price: "From $10" },
  { icon: <FaInstagram size={20} />, title: "SNS Management", desc: "Content creation & management.", tag: "SNS", price: "From $30" },
  { icon: <FaPenNib size={20} />, title: "Blog Writing", desc: "Japanese articles for your audience.", tag: "Writing", price: "From $15" },
]

export default function Projects() {
  return (
    <section className="mb-16 w-full max-w-4xl">
      <h2 className="text-xs font-bold text-yellow-400 tracking-widest uppercase mb-6 text-center">
        Services
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-gray-900 border border-gray-800 p-5 rounded-2xl hover:border-yellow-400 transition group flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-yellow-400">{service.icon}</span>
              <span className="text-xs bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full font-bold">
                {service.tag}
              </span>
            </div>
            <h3 className="text-white font-bold text-sm group-hover:text-yellow-400 transition">
              {service.title}
            </h3>
            <p className="text-gray-400 text-xs flex-1">{service.desc}</p>
            <p className="text-yellow-400 font-bold text-sm">{service.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}