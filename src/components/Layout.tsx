import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] font-sans bg-kembang-cream text-kembang-dark">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
