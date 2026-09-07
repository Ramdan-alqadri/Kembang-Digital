import { motion } from 'motion/react';

export function TrustAndCta() {
  return (
    <section id="contact" className="h-screen pt-20 pb-8 bg-kembang-pink relative overflow-hidden flex flex-col justify-center snap-start shrink-0">
      <svg className="absolute top-0 right-0 w-96 h-96 text-white opacity-10 translate-x-1/3 -translate-y-1/3" viewBox="0 0 200 200" fill="currentColor">
        <path d="M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20 Z" />
      </svg>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          Ready to make your brand bloom?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Ceritakan sedikit tentang bisnismu. Kita cari cara terbaik untuk mengembangkannya di digital.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="/contact" className="bg-kembang-dark text-white hover:bg-white hover:text-kembang-dark px-8 py-4 rounded-full font-medium transition-colors shadow-lg hover:-translate-y-1">
            Mulai Ngobrol &rarr;
          </a>
          <a href="/works" className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-colors">
            Lihat Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
