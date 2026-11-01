import { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { ExitIntentPopup } from './components/ExitIntentPopup/ExitIntentPopup';
import { Toast } from './components/Common/Toast';
import { useExitIntent } from './hooks/useExitIntent';
import './App.css';
// import { NotificationPreferences } from './components/NotificationPreferences/NotificationPreferences';

export function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const { isOpen, close, forceOpen } = useExitIntent();

  const handleCopySuccess = (message: string) => {
    setToastMessage(message);
  };

  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact onCopySuccess={handleCopySuccess} />
        {/* TODO: Implement Notification Preferences in Backend & sw.js */}
        {/* <NotificationPreferences /> */}
      </main>

      <Footer onTriggerExitIntent={forceOpen} />

      {/* Exit Intent Popup */}
      <ExitIntentPopup
        isOpen={isOpen}
        onClose={close}
        onCopySuccess={handleCopySuccess}
      />

      {/* Ephemeral Feedback Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </>
  );
}

export default App;
