# Saim Mobilephysio Website

## Project Overview
This is a Next.js-based website for Saim Mobilephysio, a mobile physiotherapy service. The site is designed to provide information about services, pricing, and contact details for potential clients.

## Tech Stack
- **Framework**: Next.js 16.0.1
- **React**: 19.2.0
- **Node Runtime**: Bun (based on bun.lock presence)
- **Styling**: CSS (styles directory)
- **Icons**: FontAwesome 7.1.0
- **Deployment**: Netlify
- **Image Optimization**: Sharp 0.34.4

## Project Structure
```
/
├── pages/              # Next.js pages
│   ├── _app.js        # Custom App component
│   ├── _document.js   # Custom Document component
│   ├── index.js       # Homepage
│   ├── privacy.js     # Privacy policy page
│   └── terms.js       # Terms of service page
├── components/        # React components
│   ├── Contact.js     # Contact section
│   ├── Footer.js      # Footer component
│   ├── Form.js        # Contact/appointment form
│   ├── Header.js      # Header section
│   ├── Intro.js       # Introduction section
│   ├── Layout.js      # Main layout wrapper
│   ├── Navbar.js      # Navigation bar
│   ├── Price.js       # Pricing section
│   └── Services.js    # Services section
├── public/            # Static assets
├── styles/            # CSS stylesheets
└── next.config.js     # Next.js configuration
```

## Development Commands
- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint

## Configuration Notes

### Next.js Configuration (next.config.js)
- React Strict Mode enabled
- Compression enabled
- Image optimization configured for AVIF and WebP formats
- Responsive image sizes configured for various devices
- Minimum cache TTL set to 60 seconds

### Deployment
- Deployed on Netlify
- Uses @netlify/plugin-nextjs for Next.js support
- Configuration in netlify.toml

## Performance Considerations
- Image optimization with multiple format support (AVIF, WebP)
- Lazy loading of images where appropriate
- LCP (Largest Contentful Paint) optimizations
- Font loading optimizations

## Coding Standards
- ESLint configured with Next.js recommended settings
- React 19 features available
- Functional components preferred

## Key Features
1. **Service Information**: Detailed information about mobile physiotherapy services
2. **Pricing**: Transparent pricing structure for services
3. **Contact Form**: User contact/appointment booking functionality
4. **Responsive Design**: Mobile-first approach for various device sizes
5. **Legal Pages**: Privacy policy and terms of service

## Important Files
- `netlify.toml` - Netlify deployment configuration
- `next.config.js` - Next.js and image optimization settings
- `_document.js` - Custom HTML document structure
- `_app.js` - Global application wrapper

## Development Guidelines
1. **Performance**: Always consider performance implications, especially for images
2. **Accessibility**: Ensure components are accessible
3. **Mobile-First**: Design and test for mobile devices first
4. **SEO**: Consider SEO implications for content changes
5. **Build Verification**: Always run `bun build` before committing major changes

## Common Tasks
- Adding new pages: Create files in `/pages` directory
- Adding new components: Create files in `/components` directory
- Styling: Modify files in `/styles` directory
- Static assets: Add to `/public` directory

## Git Workflow
- Work on feature branches prefixed with `claude/`
- Branch names should end with the session ID
- Commit messages should be clear and descriptive
- Always push to the designated branch before creating PRs
