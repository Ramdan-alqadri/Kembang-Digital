import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function ServicesPage() {
  const services = [
    {
      stage: "SEED",
      subtitle: "Build the Foundation",
      items: ["Brand Identity Design", "Content Strategy & Planning", "Social Media Platform Setup", "Digital Strategy Consultation"],
      desc: "Langkah pertama untuk bisnis yang baru mulai go-digital. Kami merumuskan identitas dan pesan utama agar brand Anda memiliki fondasi yang kuat.",
      color: "bg-kembang-cream",
      accent: "text-kembang-green"
    },
    {
      stage: "GROW",
      subtitle: "Build Your Presence",
      items: ["Monthly Social Media Management", "Content Creation & Production", "Creative Graphic Design", "Copywriting"],
      desc: "Fase pertumbuhan. Kami menjalankan eksekusi harian untuk memastikan brand Anda secara konsisten berkomunikasi dan berinteraksi dengan audiens.",
      color: "bg-kembang-lime",
      accent: "text-kembang-dark"
    },
    {
      stage: "BLOOM",
      subtitle: "Reach & Grow",
      items: ["Digital Advertising (Meta/Google Ads)", "Campaign Management", "Performance Analytics", "Website Development"],
      desc: "Saat fondasi sudah kuat dan audiens sudah terbentuk, ini saatnya mekar. Kami bantu optimasi jangkauan brand untuk konversi dan awareness yang lebih luas.",
      color: "bg-kembang-pink",
      accent: "text-white"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-kembang-dark">Layanan Kembang.</h1>
        <p className="text-xl text-kembang-dark/80 leading-relaxed">
          Tiga fase perjalanan untuk memastikan bisnis Anda tumbuh dengan strategi yang paling relevan.
        </p>
      </motion.div>
      <div className="space-y-12">
        {services.map((srv, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${srv.color} rounded-3xl p-8 md:p-12 shadow-sm border border-kembang-dark/5`}
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="md:w-1/3">
                <div className={`text-sm font-bold tracking-widest ${srv.accent} opacity-60 mb-2`}>
                  FASE 0{i + 1}
                </div>
                <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${i === 2 ? 'text-white' : 'text-kembang-dark'}`}>
                  {srv.stage}
                </h2>
                <p className={`text-lg font-medium ${i === 2 ? 'text-white/80' : 'text-kembang-dark/60'}`}>
                  {srv.subtitle}
                </p>
              </div>
              <div className="md:w-2/3 flex flex-col justify-between">
                <p className={`text-xl mb-8 leading-relaxed ${i === 2 ? 'text-white/90' : 'text-kembang-dark/80'}`}>
                  {srv.desc}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {srv.items.map((item, j) => (
                    <div key={j} className={`flex items-center gap-3 font-medium ${i === 2 ? 'text-white' : 'text-kembang-dark'}`}>
                      <span className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-white' : 'bg-kembang-dark/20'}`} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <p className="text-xl text-kembang-dark/70 mb-6">Bingung mulai dari mana? Mari kita diskusikan bersama.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-kembang-dark text-white px-8 py-4 rounded-full font-medium hover:bg-kembang-pink transition-colors">
          Konsultasi Gratis <span>→</span>
        </Link>
      </div>
    </div>
  );
}
