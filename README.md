# My Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a beautiful dark/light theme toggle and smooth animations.

## Features

- 🎨 **Modern Design**: Clean and professional design with glassmorphic effects
- 🌓 **Theme Toggle**: Switch between dark and light modes
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with Next.js for optimal performance
- 🎯 **Easy Navigation**: Separate cards for each section with hover effects
- 🔧 **Easy to Customize**: Well-structured code that's easy to modify

## Sections

1. **Home**: Welcome page with hero section and navigation cards
2. **About**: Personal information and background
3. **Projects**: Showcase of projects with technology tags
4. **Achievements**: Awards, recognitions, and inspirational quotes
5. **Education & Certifications**: Academic background and professional certifications
6. **Contact**: Contact information and contact form

## Technologies Used

- **Next.js 15**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Beautiful icons for the interface
- **Zustand**: Lightweight state management
- **AOS**: Animate On Scroll library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
my-portfolio/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx           # Home page
│   │   ├── projects/          # Projects page
│   │   ├── achievements/      # Achievements page
│   │   ├── education-certifications/ # Education page
│   │   ├── contact/           # Contact page
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── HoverCards.tsx     # Navigation cards
│   │   ├── ThemeToggle.tsx    # Theme switcher
│   │   └── TypingEffect.tsx   # Typing animation
│   ├── lib/                   # Utility functions
│   │   └── theme.ts           # Theme management
│   └── styles/                # Global styles
│       └── globals.css        # CSS styles
├── public/                    # Static assets
└── package.json              # Dependencies and scripts
```

## Customization

### Personal Information
- Update personal details in each page component
- Replace placeholder images in the `public/` directory
- Modify contact information in the contact page

### Styling
- Colors and themes can be modified in `src/styles/globals.css`
- Component-specific styles are in the respective component files
- Tailwind classes can be customized in `tailwind.config.js`

### Content
- Each page component can be easily modified to add your own content
- The HoverCards component can be updated to include different sections
- Navigation items can be modified in the Header component

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, feel free to reach out through the contact form on the website. 