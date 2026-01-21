# Portfolio Landing Page

A minimal, Apple Human Interface Guidelines-inspired personal portfolio landing page.

## Design Philosophy

- **Minimal**: Pure white background, no cards, borders, or shadows
- **Typography-first**: SF Pro Display/Text with generous spacing
- **Left-aligned**: No center alignment, generous white space
- **Calm & Intelligent**: Academic, intellectually confident tone

## Features

- Clean, semantic HTML5
- Apple-inspired typography and spacing
- Fully responsive (desktop, tablet, mobile)
- Minimal JavaScript interactions
- SEO optimized
- Ready for Vercel deployment

## Local Development

```bash
# Serve locally using Python
python -m http.server 8000

# Or using Node.js
npx serve .
```

Then open `http://localhost:8000` in your browser.

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel
```

### Option 2: Vercel Dashboard

1. Push code to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect and deploy

### Option 3: Deploy from Local Directory

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from this directory
vercel --prod
```

## Customization

Update the following in `index.html`:

- **Name**: Change "Alex Chen" to your name
- **Greeting**: Modify "Hello, I'm"
- **Role**: Update "Computer Science & Machine Learning Engineer"
- **Bio**: Replace the bio paragraph
- **Social Links**: Update GitHub, LinkedIn, Medium URLs
- **Avatar**: Replace the SVG with your own image

## File Structure

```
portfolio-landing/
├── index.html      # Main HTML structure
├── styles.css      # Apple-inspired styling
├── script.js       # Minimal interactions
├── vercel.json     # Vercel configuration
└── README.md       # This file
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Free to use and modify for personal projects.
