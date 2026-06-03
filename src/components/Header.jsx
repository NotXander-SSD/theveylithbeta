function Header() {
  return (
    <header className="bg-brand-cream">
      <div className="bg-brand-brown text-brand-gold text-[10px] uppercase tracking-[0.35em] text-center py-2">
        ✦ Botanical Rituals for Celestial Radiance ✦
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 text-center border-b border-brand-light">
        <h1 className="text-5xl md:text-6xl font-serif text-brand-brown">Veylith Serenity</h1>
        <p className="mt-5 text-[10px] uppercase tracking-[0.35em] font-sans text-brand-muted">by Zariah & Co.</p>
        <p className="mt-2 text-[10px] uppercase tracking-[0.35em] font-sans text-brand-gold">Beta Testing Program</p>

        <div className="mt-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-brown">Help Us Perfect Veylith Serenity</h2>
          <p className="mt-6 max-w-2xl mx-auto text-base leading-8 text-brand-secondary">
            You've been invited to beta test our website before launch. Your feedback shapes the final experience.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
