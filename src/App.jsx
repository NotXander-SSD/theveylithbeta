import { useState } from 'react';
import Header from './components/Header.jsx';
import HowToParticipate from './components/HowToParticipate.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import SuccessMessage from './components/SuccessMessage.jsx';
import Footer from './components/Footer.jsx';

const visitUrl = import.meta.env.VITE_VEYLITH_URL ?? '#';

function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-brown">
      <Header />
      <main className="max-w-5xl mx-auto px-6 pb-16">
        <HowToParticipate />

        <section className="mt-16 text-center">
          <a
            href={visitUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-brand-brown text-brand-cream uppercase tracking-[0.25em] text-sm font-semibold px-10 py-5 border border-brand-brown rounded-none"
          >
            Visit Veylith Serenity →
          </a>
          <p className="mt-4 text-sm text-brand-muted">Opens in a new tab — come back here when you're done</p>
        </section>

        <div className="mt-12 bg-brand-gold py-6 text-center">
          <p className="uppercase tracking-[0.35em] text-brand-brown text-sm">Done exploring? Scroll down and leave your feedback below 👇</p>
        </div>

        <div className="mt-16">
          {submitted ? <SuccessMessage /> : <FeedbackForm onSuccess={() => setSubmitted(true)} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
