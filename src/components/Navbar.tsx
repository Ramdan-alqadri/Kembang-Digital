import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection for homepage
      if (location.pathname === '/') {
        const sections = ['home', 'services', 'works', 'about', 'contact'];
        let current = 'home';
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el && window.scrollY >= el.offsetTop - 200) {
            current = section;
          }
        }
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    // Handle scrolling when navigating to /#hash from another page
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (!location.hash) {
      // Always scroll to top when navigating to a new page without a hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Works', href: '#works' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (location.pathname === '/') {
      if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/');
      } else {
        const id = href.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        navigate(`/${href}`, { replace: true });
      }
    } else {
      navigate(`/${href}`);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 flex flex-col items-center px-4 pt-4 md:pt-6 pointer-events-none"
      >
        <nav
          className={`pointer-events-auto relative w-full max-w-5xl transition-all duration-300 flex items-center justify-between rounded-full ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-md shadow-md py-3 px-5 md:px-6 scale-[0.98]' 
              : 'bg-white/90 backdrop-blur-md shadow-sm py-4 px-6 md:px-8'
          }`}
        >
          <Link to="/" onClick={(e) => handleNavClick(e, '#home')} className="group shrink-0">
            <Logo className="h-7 md:h-9 transition-transform group-hover:scale-105" dark={false} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-sm font-medium text-kembang-dark/80">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={`/${link.href}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`transition-colors ${
                      location.pathname === '/' && activeSection === link.href.replace('#', '') 
                        ? 'text-kembang-pink font-semibold' 
                        : 'hover:text-kembang-pink'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-kembang-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-kembang-pink transition-colors"
            >
              Mulai Ngobrol
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-kembang-dark shrink-0 p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-kembang-dark/40 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm bg-kembang-cream z-50 md:hidden shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-kembang-dark/5 bg-white">
                <Logo className="h-7" dark={false} />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-kembang-cream rounded-full text-kembang-dark hover:bg-kembang-pink hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Drawer Links */}
              <div className="flex flex-col p-6 gap-2 overflow-y-auto">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={`/${link.href}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-xl font-medium py-4 border-b border-kembang-dark/5 ${
                      location.pathname === '/' && activeSection === link.href.replace('#', '') 
                        ? 'text-kembang-pink' 
                        : 'text-kembang-dark hover:text-kembang-pink transition-colors'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="bg-kembang-dark text-white px-6 py-4 rounded-xl text-center font-bold mt-6 hover:bg-kembang-pink transition-colors shadow-sm"
                >
                  Mulai Ngobrol
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
