import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center pt-16 overflow-hidden snap-start shrink-0">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-kembang-lime/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-kembang-pink/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-kembang-dark tracking-tight">
            Bisnismu punya potensi.<br />
            <span className="text-kembang-pink relative inline-block mt-2">
              Yuk, kita kembangkan.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-kembang-lime opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>
          </h1>
          
          <p className="font-accent text-3xl md:text-4xl text-kembang-dark/60 mb-6 rotate-[-2deg]">
            Let Your Business Bloom Digitally.
          </p>
          
          <p className="text-lg md:text-xl text-kembang-dark/70 mb-10 leading-relaxed max-w-lg">
            Kembang Digital membantu UMKM dan bisnis lokal berkembang di dunia digital melalui strategi, konten, dan iklan yang disesuaikan dengan kebutuhan bisnismu.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="#contact" className="bg-kembang-pink hover:bg-kembang-pink/90 text-white px-8 py-4 rounded-full font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
              Mulai Kembangkan Bisnis
            </a>
            <a href="#works" className="bg-transparent border border-kembang-dark/20 text-kembang-dark hover:border-kembang-dark px-8 py-4 rounded-full font-medium transition-colors">
              Lihat Karya Kami
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[500px] flex items-center justify-center"
        >
          {/* Embedded YouTube Video */}
          <div className="relative w-full aspect-video bg-white/40 rounded-3xl overflow-hidden shadow-xl border border-white/60 flex items-center justify-center backdrop-blur-sm">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/jdCggcKZEow?rel=0&modestbranding=1" 
              title="Kembang Digital Activities" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
