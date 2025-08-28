# caffeinecoderspartnerships

Environment variables
---------------------

This project expects the following environment variables when using EmailJS from the client:

- VITE_EMAILJS_SERVICE_ID
- VITE_EMAILJS_TEMPLATE_ID
- VITE_EMAILJS_USER_ID

For local development copy `.env.example` to `.env` and fill in values. Never commit `.env` to git. For production (Netlify), set these variables in the Netlify site settings (Site settings → Build & deploy → Environment). If you want to keep these values secret and avoid embedding them in the client bundle, implement a server-side email relay instead.