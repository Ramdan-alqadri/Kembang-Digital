import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-kembang-dark">Our Story.</h1>
        <p className="text-2xl text-kembang-dark/80 leading-relaxed mb-6">
          Kembang Digital lahir dari kepercayaan bahwa setiap UMKM dan bisnis lokal memiliki potensi yang luar biasa untuk tumbuh.
        </p>
        <p className="text-lg text-kembang-dark/70 leading-relaxed mb-12">
          Kami bukan sekadar vendor, melainkan "Digital Growth Partner" Anda. Pendekatan kami sangat personal; karena kami tahu setiap bisnis punya karakter yang berbeda, maka solusinya pun harus dipersonalisasi. Tidak ada copy-paste strategy di sini.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <div className="bg-kembang-lime/20 p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">Filosofi Kembang</h2>
          <p className="text-lg text-kembang-dark/80">
            Seperti sebuah benih (Seed) yang ditanam, dirawat agar tumbuh (Grow), hingga akhirnya mekar (Bloom). Begitulah kami merawat brand Anda.
          </p>
        </div>
        <div className="bg-kembang-pink/10 p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">Nilai Kami</h2>
          <ul className="space-y-3 text-lg text-kembang-dark/80 font-medium">
            <li>🌱 Personalized Growth</li>
            <li>🤝 Friendly & Approachable</li>
            <li>🎨 Creative & Playful</li>
            <li>🎯 Optimistic & Results-driven</li>
          </ul>
        </div>
      </div>
      <div className="mt-16">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-kembang-dark text-white px-8 py-4 rounded-full font-medium hover:bg-kembang-pink transition-colors">
          Mari Tumbuh Bersama <span>→</span>
        </Link>
      </div>
    </div>
  );
}
