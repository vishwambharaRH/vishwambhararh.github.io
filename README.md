# Portfolio Website

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
