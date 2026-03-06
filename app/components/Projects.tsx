import { FaCode, FaVideo, FaLanguage, FaInstagram, FaPenNib } from "react-icons/fa6"

const services = [
  {
    icon: <FaCode size={24} />,
    title: "Web Development",
    desc: "Portfolio, gallery & shop websites built with Next.js, React & Tailwind CSS.",
    tag: "Web",
    price: "From $80",
  },
  {
    icon: <FaVideo size={24} />,
    title: "Video Editing",
    desc: "Professional video editing using YMM4 & AviUtl. Fast delivery.",
    tag: "Video",
    price: "From $20",
  },
  {
    icon: <FaLanguage size={24} />,
    title: "Japanese Translation",
    desc: "Natural, fluent Japanese translation from English. Nuanced & accurate.",
    tag: "Translation",
    price: "From $10",
  },
  {
    icon: <FaInstagram size={24} />,
    title: "SNS Management",
    desc: "Social media account management & content creation for your brand.",
    tag: "SNS",
    price: "From $30",
  },
  {
    icon: <FaPenNib size={24} />,
    title: "Blog Writing",
    desc: "Japanese blog articles written naturally and engagingly for your audience.",
    tag: "Writing",
    price: "From $15",
  },
]

export default function Projects() {
  return (
    <section className="mb-16 w-full max-w-2xl">
      <h2 className="text-xs font-bold text-yellow-400 tracking-widest uppercase mb-6 text-center">
        Services
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-yellow-400 transition group"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <span className="text-yellow-400">{service.icon}</span>
                <h3 className="text-white font-bold text-lg group-hover:text-yellow-400 transition">
                  {service.title}
                </h3>
              </div>
              <span className="text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded-full font-bold">
                {service.tag}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-3">{service.desc}</p>
            <p className="text-yellow-400 font-bold">{service.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}