import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-kembang-dark text-kembang-cream py-16 snap-end">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#home" className="group inline-block mb-6">
              <Logo className="h-12 md:h-14 transition-transform group-hover:scale-105" dark={true} />
            </a>
            <p className="text-kembang-cream/60 max-w-sm leading-relaxed">
              Digital growth partner untuk UMKM dan bisnis lokal. Kami membantu bisnismu berkembang di dunia digital.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Navigation</h4>
            <ul className="space-y-3 text-kembang-cream/70">
              <li><a href="#home" className="hover:text-kembang-pink transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-kembang-pink transition-colors">Services</a></li>
              <li><a href="#works" className="hover:text-kembang-pink transition-colors">Works</a></li>
              <li><a href="#about" className="hover:text-kembang-pink transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-kembang-pink transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Social</h4>
            <ul className="space-y-3 text-kembang-cream/70">
              <li><a href="https://www.instagram.com/kembang_digital/" target="_blank" rel="noopener noreferrer" className="hover:text-kembang-pink transition-colors">Instagram</a></li>
              <li><a href="https://wa.me/6281907087886" target="_blank" rel="noopener noreferrer" className="hover:text-kembang-pink transition-colors">WhatsApp</a></li>
              <li><a href="mailto:kembangdigital26@gmail.com" className="hover:text-kembang-pink transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-kembang-cream/40">
          <p>&copy; {new Date().getFullYear()} Kembang Digital. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Personalized Growth. 🌱</p>
        </div>
      </div>
    </footer>
  );
}
