import React, { createContext, useContext, useState, useEffect } from 'react';

type View = 'home' | 'about' | 'services' | 'works' | 'work-detail' | 'contact';

interface NavigationState {
  view: View;
  id?: string;
  navigate: (view: View, id?: string) => void;
}

const NavigationContext = createContext<NavigationState | null>(null);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState<View>('home');
  const [id, setId] = useState<string | undefined>();

  useEffect(() => {
    if (view === 'home' && id && id.startsWith('#')) {
      const elementId = id.replace('#', '');
      setTimeout(() => {
        document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [view, id]);

  const navigate = (newView: View, newId?: string) => {
    setView(newView);
    setId(newId);
  };

  return (
    <NavigationContext.Provider value={{ view, id, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error('useNavigation must be used within NavigationProvider');
  return ctx;
}
