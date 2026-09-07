import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Problem } from '../components/Problem';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { WhyUs } from '../components/WhyUs';
import { Portfolio } from '../components/Portfolio';
import { CaseStudy } from '../components/CaseStudy';
import { Process } from '../components/Process';
import { TrustAndCta } from '../components/TrustAndCta';

export function Home() {
  useEffect(() => {
    document.documentElement.style.scrollSnapType = 'y mandatory';
    return () => {
      document.documentElement.style.scrollSnapType = '';
    };
  }, []);

  return (
    <>
      {/* 1. HOME */}
      <Hero />
      
      {/* 2. PROBLEM */}
      <Problem />
      
      {/* 3. SERVICES */}
      <Services />
      
      {/* 4. WORKS */}
      <Portfolio />
      
      {/* 5. ABOUT */}
      <About />
      
      {/* 6. CONTACT */}
      <TrustAndCta />
    </>
  );
}
