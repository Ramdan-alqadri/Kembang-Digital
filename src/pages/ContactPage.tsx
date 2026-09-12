import { motion } from 'motion/react';

export function ContactPage() {
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nama = formData.get('Nama') as string;
    const kontak = formData.get('Kontak') as string;
    const pesan = formData.get('Pesan') as string;

    const text = `Halo Kembang Digital,\n\nNama: ${nama}\nKontak: ${kontak}\nPesan: ${pesan}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/6281907087886?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-kembang-dark">Mari Tumbuh Bersama.</h1>
          <p className="text-xl text-kembang-dark/70 mb-12">
            Punya project atau bisnis yang ingin dikembangkan? Kami selalu terbuka untuk diskusi baru. 
            Silakan hubungi kami melalui form di samping atau melalui kontak di bawah.
          </p>
          <div className="space-y-6 text-lg font-medium">
            <a href="mailto:kembangdigital26@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-kembang-pink transition-colors">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl shadow-sm border border-kembang-dark/5">📧</div>
              kembangdigital26@gmail.com
            </a>
            <a href="https://wa.me/6281907087886" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-kembang-pink transition-colors">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl shadow-sm border border-kembang-dark/5">📱</div>
              WhatsApp (+62 819-0708-7886)
            </a>
            <a href="https://www.instagram.com/kembang_digital/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-kembang-pink transition-colors">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl shadow-sm border border-kembang-dark/5">📸</div>
              @kembang_digital
            </a>
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-kembang-dark/5">
          <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-kembang-dark mb-2">Nama Kamu / Bisnis</label>
              <input type="text" name="Nama" required className="w-full bg-kembang-cream/30 border border-kembang-dark/10 rounded-xl px-4 py-3 focus:outline-none focus:border-kembang-pink transition-colors" placeholder="Cth. Budi / Kopi Susu Kita" />
            </div>
            <div>
              <label className="block text-sm font-bold text-kembang-dark mb-2">Email / WhatsApp</label>
              <input type="text" name="Kontak" required className="w-full bg-kembang-cream/30 border border-kembang-dark/10 rounded-xl px-4 py-3 focus:outline-none focus:border-kembang-pink transition-colors" placeholder="Email atau nomor WhatsApp yang bisa dihubungi" />
            </div>
            <div>
              <label className="block text-sm font-bold text-kembang-dark mb-2">Ceritakan kebutuhanmu</label>
              <textarea name="Pesan" required rows={4} className="w-full bg-kembang-cream/30 border border-kembang-dark/10 rounded-xl px-4 py-3 focus:outline-none focus:border-kembang-pink transition-colors" placeholder="Cth. Butuh dibantu kelola sosial media..."></textarea>
            </div>
            <button type="submit" className="w-full bg-kembang-dark text-white hover:bg-kembang-pink rounded-xl py-4 font-bold transition-colors shadow-md flex items-center justify-center gap-2">
              Kirim Pesan ke WhatsApp 📱
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
