import { motion } from 'motion/react';

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Kenalan",
      desc: "Kita mulai dengan memahami bisnis, target audience, dan tantanganmu."
    },
    {
      num: "02",
      title: "Tanam Strategi",
      desc: "Kita menentukan strategi digital yang sesuai dengan kebutuhan bisnis."
    },
    {
      num: "03",
      title: "Kembangkan",
      desc: "Kita mulai membuat, menjalankan, dan mengoptimalkan digital presence."
    },
    {
      num: "04",
      title: "Mekarkan",
      desc: "Kita evaluasi hasilnya dan mencari peluang untuk terus berkembang."
    }
  ];

  return (
    <section className="pt-12 pb-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-kembang-dark mb-4">
            Dari bibit sampai mekar.
          </h2>
          <p className="font-accent text-3xl text-kembang-pink">Proses kita bertumbuh</p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-kembang-dark/5 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-kembang-cream rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm group-hover:scale-110 group-hover:bg-kembang-lime transition-all duration-300">
                  <span className="text-xl font-bold text-kembang-dark">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-kembang-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-kembang-dark/70 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
