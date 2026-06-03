import { useState } from 'react';
import { supabase } from '../lib/supabase.js';

function FeedbackForm({ onSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [starRating, setStarRating] = useState(0);
  const [device, setDevice] = useState('Desktop');
  const [hasBug, setHasBug] = useState('No');
  const [bugDescription, setBugDescription] = useState('');
  const [likedMost, setLikedMost] = useState('');
  const [improvements, setImprovements] = useState('');
  const [otherComments, setOtherComments] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const { data, error: insertError } = await supabase.from('beta_feedback').insert([
        {
          name: name || null,
          email: email || null,
          star_rating: starRating,
          device,
          has_bug: hasBug === 'Yes',
          bug_description: hasBug === 'Yes' ? bugDescription : null,
          liked_most: likedMost || null,
          improvements: improvements || null,
          other_comments: otherComments || null
        }
      ]);

      setSubmitting(false);

      if (insertError) {
        console.error('Supabase insert error:', insertError);
        setError(`Something went wrong. Please try again. (${insertError.message})`);
        return;
      }

      onSuccess();
    } catch (err) {
      setSubmitting(false);
      console.error('Unexpected error during submission:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <section>
      <div className="text-center">
        <h2 className="text-3xl font-serif text-brand-brown">Share Your Feedback</h2>
        <div className="mx-auto mt-4 h-px w-24 bg-brand-gold" />
      </div>

      <form onSubmit={handleSubmit} className="mt-10 space-y-8">
        <div>
          <label className="block text-sm uppercase tracking-[0.25em] text-brand-muted">Tester name</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name (optional)"
            className="mt-3 w-full bg-transparent border-b border-brand-muted py-3 text-base text-brand-brown placeholder:text-brand-muted focus:outline-none rounded-none"
          />
        </div>

        <div>
          <label className="block text-sm uppercase tracking-[0.25em] text-brand-muted">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="your@email.com (optional)"
            className="mt-3 w-full bg-transparent border-b border-brand-muted py-3 text-base text-brand-brown placeholder:text-brand-muted focus:outline-none rounded-none"
          />
        </div>

        <div>
          <label className="block text-sm uppercase tracking-[0.25em] text-brand-muted">Overall experience</label>
          <div className="mt-3 flex gap-3">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setStarRating(value)}
                className={`text-3xl leading-none ${starRating >= value ? 'text-brand-gold' : 'text-brand-muted'} rounded-none border-none bg-transparent p-0`}
                aria-label={`${value} star`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm uppercase tracking-[0.25em] text-brand-muted">Device used</label>
          <select
            value={device}
            onChange={(event) => setDevice(event.target.value)}
            className="mt-3 w-full bg-transparent border-b border-brand-muted py-3 text-base text-brand-brown focus:outline-none rounded-none"
          >
            <option>Desktop</option>
            <option>Mobile</option>
            <option>Tablet</option>
          </select>
        </div>

        <div>
          <label className="block text-sm uppercase tracking-[0.25em] text-brand-muted">Did you encounter any bugs?</label>
          <div className="mt-3 flex gap-3">
            {['Yes', 'No'].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setHasBug(option);
                  if (option === 'No') setBugDescription('');
                }}
                className={`px-6 py-3 border border-brand-brown text-sm font-semibold uppercase tracking-[0.2em] ${hasBug === option ? 'bg-brand-brown text-brand-cream' : 'bg-transparent text-brand-brown'} rounded-none`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {hasBug === 'Yes' && (
          <div>
            <label className="block text-sm uppercase tracking-[0.25em] text-brand-muted">Please describe the bug</label>
            <textarea
              value={bugDescription}
              onChange={(event) => setBugDescription(event.target.value)}
              placeholder="What happened and where?"
              rows="4"
              className="mt-3 w-full bg-transparent border-b border-brand-muted py-3 text-base text-brand-brown placeholder:text-brand-muted focus:outline-none rounded-none"
            />
          </div>
        )}

        <div>
          <label className="block text-sm uppercase tracking-[0.25em] text-brand-muted">What did you like most?</label>
          <textarea
            value={likedMost}
            onChange={(event) => setLikedMost(event.target.value)}
            placeholder="Share what stood out"
            rows="4"
            className="mt-3 w-full bg-transparent border-b border-brand-muted py-3 text-base text-brand-brown placeholder:text-brand-muted focus:outline-none rounded-none"
          />
        </div>

        <div>
          <label className="block text-sm uppercase tracking-[0.25em] text-brand-muted">What should be improved or changed?</label>
          <textarea
            value={improvements}
            onChange={(event) => setImprovements(event.target.value)}
            placeholder="Suggestions for improvement"
            rows="4"
            className="mt-3 w-full bg-transparent border-b border-brand-muted py-3 text-base text-brand-brown placeholder:text-brand-muted focus:outline-none rounded-none"
          />
        </div>

        <div>
          <label className="block text-sm uppercase tracking-[0.25em] text-brand-muted">Any other comments?</label>
          <textarea
            value={otherComments}
            onChange={(event) => setOtherComments(event.target.value)}
            placeholder="Anything else you want us to know"
            rows="4"
            className="mt-3 w-full bg-transparent border-b border-brand-muted py-3 text-base text-brand-brown placeholder:text-brand-muted focus:outline-none rounded-none"
          />
        </div>

        {error && <p className="text-brand-gold">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-brand-brown text-brand-gold uppercase tracking-[0.3em] py-4 text-sm font-semibold border border-brand-brown rounded-none"
        >
          {submitting ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
    </section>
  );
}

export default FeedbackForm;
