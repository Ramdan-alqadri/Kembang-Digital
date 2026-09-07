import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      stage: "SEED",
      subtitle: "Build the Foundation",
      items: ["Brand Identity", "Content Strategy", "Social Media Setup", "Digital Strategy"],
      desc: "Memahami bisnis, menemukan arah, dan membangun fondasi digital.",
      color: "bg-kembang-cream",
      accent: "text-kembang-green"
    },
    {
      stage: "GROW",
      subtitle: "Build Your Presence",
      items: ["Social Media Management", "Content Creation", "Creative Design"],
      desc: "Membuat brand hadir secara konsisten dan relevan di dunia digital.",
      color: "bg-kembang-lime",
      accent: "text-kembang-dark"
    },
    {
      stage: "BLOOM",
      subtitle: "Reach & Grow",
      items: ["Digital Advertising", "Campaign", "Performance Optimization"],
      desc: "Membantu bisnis menjangkau lebih banyak orang dan terus berkembang.",
      color: "bg-kembang-pink",
      accent: "text-white"
    }
  ];

  return (
    <section id="services" className="h-screen pt-20 pb-8 bg-kembang-cream flex flex-col justify-center overflow-hidden snap-start shrink-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-kembang-dark mb-6"
          >
            Apa yang bisa kita kembangkan?
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className={`${srv.color} rounded-[2.5rem] p-6 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl flex flex-col`}
            >
              <div className={`text-sm font-bold tracking-widest ${srv.accent} opacity-50 mb-2`}>
                0{i + 1}
              </div>
              <h3 className={`text-3xl font-bold mb-2 ${i === 2 ? 'text-white' : 'text-kembang-dark'}`}>
                {srv.stage}
              </h3>
              <p className={`text-sm font-medium mb-8 ${i === 2 ? 'text-white/80' : 'text-kembang-dark/60'}`}>
                — {srv.subtitle}
              </p>
              
              <ul className="mb-6 space-y-3">
                {srv.items.map((item, j) => (
                  <li key={j} className={`font-medium ${i === 2 ? 'text-white' : 'text-kembang-dark'}`}>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className={`mt-auto pt-8 border-t ${i === 2 ? 'border-white/20' : 'border-kembang-dark/10'}`}>
                <p className={`text-sm leading-relaxed ${i === 2 ? 'text-white/90' : 'text-kembang-dark/70'}`}>
                  {srv.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <a href="/services" className="inline-flex items-center justify-center bg-kembang-dark text-white px-8 py-4 rounded-full font-medium hover:bg-kembang-pink transition-colors gap-2">
            Lihat Semua Layanan <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
