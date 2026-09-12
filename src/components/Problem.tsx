import { motion } from 'motion/react';

export function Problem() {
  const problems = [
    {
      title: "Belum tahu harus mulai dari mana.",
      desc: "Digital terasa rumit dan terlalu banyak pilihan."
    },
    {
      title: "Sosial media belum konsisten.",
      desc: "Punya akun, tetapi sulit menjaga konten tetap aktif dan relevan."
    },
    {
      title: "Belum punya tim digital.",
      desc: "Tidak semua bisnis membutuhkan atau mampu membangun tim digital sendiri."
    },
    {
      title: "Budget harus tetap masuk akal.",
      desc: "Strategi digital harus menyesuaikan kondisi bisnis, bukan sebaliknya."
    }
  ];

  return (
    <section className="min-h-screen pt-20 pb-8 bg-white flex flex-col justify-center   overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-kembang-dark mb-4 md:mb-6"
          >
            Bisnis bagus, tapi digitalnya belum maksimal?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-kembang-dark/70 leading-relaxed"
          >
            Banyak bisnis lokal punya produk dan cerita yang bagus, tetapi belum punya cukup waktu, tim, atau resource untuk mengelola digital secara konsisten.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="bg-white border border-kembang-pink/40 shadow-sm p-6 md:p-8 rounded-3xl group hover:border-kembang-pink hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-kembang-pink/10 rounded-full flex items-center justify-center mb-4 md:mb-6 text-kembang-pink shadow-sm">
                <span className="font-bold">{i + 1}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-kembang-dark mb-2 md:mb-3 leading-snug">
                {prob.title}
              </h3>
              <p className="text-sm md:text-base text-kembang-dark/70 leading-relaxed">
                {prob.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
