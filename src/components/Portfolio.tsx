import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Portfolio() {
  const projects = [
    {
      slug: "ecoslip",
      client: "Ecoslip",
      category: "Social Media Management",
      desc: "Membangun identitas visual dan feed interaktif untuk produk inovatif sabun kertas (paper soap).",
      image: "bg-kembang-lime/30",
      imageUrl: "/image.png"
    },
    {
      slug: "berbekie",
      client: "BERBEKIE",
      category: "Social Media Management",
      desc: "Menghadirkan konten kreatif dan edukatif di Instagram untuk produk smart home pintar yang inovatif.",
      image: "bg-kembang-pink/20",
      imageUrl: "/berbekie.png"
    },
    {
      slug: "eco-store",
      client: "Eco Store",
      category: "Digital Campaign",
      desc: "Kampanye digital untuk produk ramah lingkungan dengan budget efisien.",
      image: "bg-kembang-green/20"
    },
    {
      slug: "studio-keramik",
      client: "Studio Keramik",
      category: "Website & Branding",
      desc: "Digital presence minimalis untuk studio keramik lokal yang sedang berkembang.",
      image: "bg-kembang-cream"
    }
  ];

  return (
    <section id="works" className="h-screen pt-20 pb-8 bg-kembang-dark text-kembang-cream flex flex-col justify-center overflow-hidden snap-start shrink-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Yang sudah kami kembangkan.</h2>
            <p className="text-base text-kembang-cream/70">Beberapa karya dan project yang kami bantu kembangkan.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/works"
              className="inline-flex items-center gap-2 text-kembang-pink hover:text-white transition-colors pb-1 border-b border-kembang-pink/30 hover:border-white font-medium"
            >
              Lihat Semua Karya <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, i) => (
            <Link key={i} to={`/works/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="group cursor-pointer block"
              >
                <div className={`w-full aspect-video rounded-3xl mb-4 overflow-hidden relative ${project.image}`}>
                   {(project as any).imageUrl ? (
                     <img src={(project as any).imageUrl} alt={project.client} className="absolute inset-0 w-full h-full object-cover" />
                   ) : (
                     <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-kembang-dark/10 text-kembang-dark px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                          Featured Project
                        </span>
                     </div>
                   )}
                   {/* Hover overlay */}
                   <div className="absolute inset-0 bg-kembang-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-kembang-pink transition-colors line-clamp-1">
                      {project.client}
                    </h3>
                    <p className="text-kembang-cream/60 text-xs font-medium mb-2">
                      {project.category}
                    </p>
                    <p className="text-kembang-cream/80 text-sm max-w-md line-clamp-2">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
