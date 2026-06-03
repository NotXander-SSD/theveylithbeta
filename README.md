# Veylith Serenity Beta Feedback

A standalone React + Vite beta testing feedback page built with Tailwind CSS and Supabase integration.

## Setup

1. Copy the sample environment file:
   ```bash
   cp .env.example .env
   ```
2. Fill in `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, and `VITE_VEYLITH_URL` in `.env`.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the local development server:
   ```bash
   npm run dev
   ```

## Environment variables

- `VITE_SUPABASE_URL` — your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` — your Supabase anonymous public key
- `VITE_VEYLITH_URL` — the website URL used by the Visit button

## Supabase

This app inserts feedback into a Supabase table named `beta_feedback` with the following columns:

- `name`
- `email`
- `star_rating`
- `device`
- `has_bug`
- `bug_description`
- `liked_most`
- `improvements`
- `other_comments`
- `submitted_at`

Make sure `submitted_at` is configured as a timestamp with a default value in Supabase.

## Netlify deployment

This project is ready for Netlify:

- Build command: `npm run build`
- Publish directory: `dist`

A `netlify.toml` file is included at the project root and `public/_redirects` ensures SPA routing works.
