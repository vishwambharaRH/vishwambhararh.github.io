# vishwambhararh.github.io
Click [here](https://vishwambhararh.github.io/) to go to my website.

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features beautiful animations from React Bits and is optimized for deployment on Vercel.

## Features

- **Responsive Design**: Works seamlessly across all devices
- **Modern UI**: Clean, professional design with dark theme
- **Animations**: Light rays background animation from React Bits
- **TypeScript**: Full type safety
- **Fast**: Built with Vite for optimal performance

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Vite
- React Bits (for animations)
- Lucide React (icons)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

```bash
npm run build
```

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically or manually

The build output will be in the `dist` folder.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### GitHub Pages with Secrets (EmailJS)

For the contact form to work on GitHub Pages static deployment:

1. **Get EmailJS Credentials**:
   - Sign up at [emailjs.com](https://www.emailjs.com)
   - Create a service, email template, and get your public key

2. **Add GitHub Secrets**:
   - Go to repository Settings → Secrets and variables → Actions
   - Add these secrets:
     - `EMAILJS_SERVICE_ID` - Your EmailJS service ID
     - `EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
     - `EMAILJS_PUBLIC_KEY` - Your EmailJS public key

3. **Local Development**:
   - Copy `.env.local.example` to `.env.local`
   - Fill in your EmailJS credentials
   - `.env.local` is ignored by git (never commit secrets!)

4. **Automatic Deployment**:
   - Push to `main` or `master` branch
   - GitHub Actions automatically builds and deploys to GitHub Pages
   - Check Actions tab to see build status

### Environment Variables

- `VITE_EMAILJS_SERVICE_ID` - EmailJS service ID (required for contact form)
- `VITE_EMAILJS_TEMPLATE_ID` - EmailJS template ID (required for contact form)  
- `VITE_EMAILJS_PUBLIC_KEY` - EmailJS public key (required for contact form)

## Project Structure

```
src/
├── components/
│   ├── Background.tsx    # Animated background with light rays
│   ├── Navbar.tsx        # Navigation component
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Projects showcase
│   ├── Contact.tsx       # Contact form and info
│   └── Footer.tsx        # Footer component
├── App.tsx               # Main app component
├── main.tsx              # App entry point
└── index.css             # Global styles
```

## Customization

- Update personal information in the components
- Modify the projects array in `Projects.tsx`
- Adjust colors and styling in the Tailwind classes
- Add more animations from React Bits as needed

## License

This project is open source and available under the [MIT License](LICENSE).
