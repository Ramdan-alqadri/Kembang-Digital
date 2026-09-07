import { motion } from 'motion/react';
import { UserCheck, Zap, MessageCircleHeart, PiggyBank } from 'lucide-react';

export function WhyUs() {
  const reasons = [
    {
      title: "PERSONALIZED",
      desc: "Setiap bisnis punya cerita yang berbeda. Strategi kami disesuaikan dengan kebutuhanmu.",
      icon: <UserCheck strokeWidth={1.5} size={28} />
    },
    {
      title: "AGILE",
      desc: "Tim kecil dan lincah membuat komunikasi dan proses kerja lebih dekat dan fleksibel.",
      icon: <Zap strokeWidth={1.5} size={28} />
    },
    {
      title: "APPROACHABLE",
      desc: "Kami ingin menjadi partner yang mudah diajak berdiskusi, bukan sekadar vendor.",
      icon: <MessageCircleHeart strokeWidth={1.5} size={28} />
    },
    {
      title: "BUDGET-FRIENDLY",
      desc: "Strategi dan layanan disesuaikan dengan kondisi dan kemampuan bisnis yang sedang bertumbuh.",
      icon: <PiggyBank strokeWidth={1.5} size={28} />
    }
  ];

  return (
    <section className="pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-kembang-dark">Kenapa Kembang?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="p-8 rounded-3xl border border-kembang-dark/10 hover:border-kembang-lime transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-kembang-cream transition-transform duration-500 group-hover:scale-150 group-hover:text-kembang-lime/20 -z-10">
                 {/* Decorative organic shape */}
                 <svg width="100" height="100" viewBox="0 0 200 200" fill="currentColor">
                   <path d="M44.7,-76.4C58.1,-69.2,69.2,-55.8,77.3,-41.2C85.4,-26.6,90.5,-10.8,87.9,3.9C85.3,18.6,75.1,32.2,64.2,43.7C53.3,55.2,41.7,64.6,28.4,70.5C15.1,76.4,0.1,78.8,-14.2,76.7C-28.5,74.6,-42.1,68.1,-54.2,58.4C-66.3,48.7,-76.9,35.8,-82.3,21.1C-87.7,6.4,-87.9,-10.1,-82.1,-24.1C-76.3,-38.1,-64.5,-49.6,-51.5,-57.4C-38.5,-65.2,-24.3,-69.3,-9.1,-68.8C6.1,-68.3,21.3,-63.3,44.7,-76.4Z" transform="translate(100 100)" />
                 </svg>
              </div>
              
              <div className="w-14 h-14 rounded-2xl bg-kembang-cream text-kembang-pink flex items-center justify-center mb-8">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-kembang-dark mb-4 tracking-wide">
                {reason.title}
              </h3>
              <p className="text-kembang-dark/70 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
