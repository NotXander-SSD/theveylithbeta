const steps = [
  {
    label: '①',
    text: 'Click the Veylith Serenity website link below to visit the site'
  },
  {
    label: '②',
    text: 'Spend at least 5–10 minutes exploring — browse products, click every button, try adding items to cart, test the checkout flow, navigate all pages'
  },
  {
    label: '③',
    text: 'Try to break things — resize your browser, test on your phone, tap every link, and note anything that looks off or does not work'
  },
  {
    label: '④',
    text: 'Come back to THIS page when you are done'
  },
  {
    label: '⑤',
    text: 'Fill in the feedback form below and hit submit'
  }
];

function HowToParticipate() {
  return (
    <section className="mt-16">
      <div className="text-center">
        <h2 className="text-3xl font-serif text-brand-brown">How to Participate</h2>
        <div className="mx-auto mt-4 h-px w-24 bg-brand-gold" />
      </div>

      <div className="mt-10 grid gap-8">
        {steps.map((step) => (
          <div key={step.label} className="flex items-start gap-6">
            <div className="text-4xl text-brand-gold font-serif leading-none">{step.label}</div>
            <p className="max-w-4xl text-base leading-8 text-brand-secondary">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowToParticipate;
