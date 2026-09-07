import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CaseStudy() {
  return (
    <section className="py-24 bg-kembang-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
             <span className="bg-kembang-pink text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
               Featured Case Study
             </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-kembang-dark max-w-2xl"
          >
            Bagaimana strategi digital yang tepat membantu bisnis lokal berkembang.
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-kembang-dark/5"
        >
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-kembang-dark">Ecoslip</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-kembang-dark/50 uppercase tracking-wider mb-2">Challenge</h4>
                    <p className="text-kembang-dark/80">Produk sabun kertas (paper soap) inovatif dan ramah lingkungan, namun butuh edukasi market dan konten visual yang menarik di Instagram agar dikenal lebih luas.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-kembang-dark/50 uppercase tracking-wider mb-2">Approach</h4>
                    <p className="text-kembang-dark/80">Fokus pada pembuatan konten edukatif, Reels kreatif tentang cara pakai, serta visual feed yang fresh dan clean di Instagram untuk menonjolkan kepraktisan Ecoslip.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-kembang-dark/50 uppercase tracking-wider mb-2">Solution</h4>
                    <p className="text-kembang-dark/80">Social media management, produksi video kreatif (Reels), dan optimasi tampilan feed Instagram yang konsisten.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-kembang-lime/20 rounded-2xl">
                <h4 className="text-sm font-bold text-kembang-dark/50 uppercase tracking-wider mb-2">Result</h4>
                <p className="font-medium text-kembang-dark text-lg">Peningkatan engagement yang signifikan, brand awareness yang lebih luas, dan respon positif audiens melalui konten Reels kreatif.</p>
              </div>
            </div>
            
            <div className="md:col-span-7 flex flex-col gap-6">
               <div className="w-full aspect-video bg-kembang-cream rounded-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center opacity-50 text-kembang-dark/50 font-medium">BEFORE</div>
               </div>
               <div className="w-full flex items-center justify-center text-kembang-pink py-2">
                  <ArrowRight />
               </div>
               <div className="w-full aspect-video bg-kembang-lime/30 rounded-2xl relative overflow-hidden">
                  <img src="/image.png" alt="Ecoslip IG Feed" className="absolute inset-0 w-full h-full object-cover opacity-90" />
               </div>
               
               <div className="mt-4 flex flex-wrap justify-end gap-4">
                 <a href="https://www.instagram.com/ecoslip_?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-kembang-pink hover:text-kembang-dark transition-colors">
                   View Instagram Profile <ArrowRight size={18} />
                 </a>
                 <a href="https://www.instagram.com/reel/DBiFQT8PktC/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-kembang-pink hover:text-kembang-dark transition-colors">
                   View Reels Video <ArrowRight size={18} />
                 </a>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
