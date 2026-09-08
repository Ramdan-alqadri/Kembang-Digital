import { motion } from 'motion/react';
import { useNavigation } from '../context/NavigationContext';

export function About() {
  const { navigate } = useNavigation();
  
  return (
    <section id="about" className="min-h-[100dvh] pt-20 pb-8 bg-kembang-dark text-kembang-cream flex flex-col justify-center overflow-hidden snap-start shrink-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 relative hidden md:block"
          >
            {/* Logo Animation Visual via Video */}
            <div className="relative w-full aspect-square md:aspect-[4/3] bg-white rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl">
              <video 
                src="/animation.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                Browser Anda tidak mendukung tag video.
              </video>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-kembang-pink text-white p-4 rounded-full w-24 h-24 flex items-center justify-center rotate-12 shadow-xl">
              <span className="font-accent text-lg text-center leading-tight">Your Digital Growth Partner</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Kenalan dengan Kembang.</h2>
            <p className="text-lg leading-relaxed text-kembang-cream/80 mb-8">
              Kami percaya setiap bisnis punya potensi untuk tumbuh. Kembang Digital hadir untuk membantu bisnis menemukan cara terbaik untuk berkembang di dunia digital.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="#about-page" onClick={(e) => { e.preventDefault(); navigate('about'); }} className="inline-flex items-center justify-center bg-kembang-pink text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-kembang-dark transition-colors gap-2 text-sm">
                Kenal Kembang Lebih Dekat <span>→</span>
              </a>
              <div className="inline-flex items-center gap-3 bg-white/10 px-5 py-3 rounded-full text-xs tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-kembang-lime"></span>
                Small team. Personal approach.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
