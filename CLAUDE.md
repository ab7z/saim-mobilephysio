# Saim Mobilephysio Website

## Project Overview
This is a Bun + React 19 SSR website for Saim Mobilephysio, a mobile physiotherapy service. The site is designed to provide information about services, pricing, and contact details for potential clients.

## Tech Stack
- **Runtime**: Bun
- **Framework**: Custom React 19 SSR (Server-Side Rendering)
- **React**: 19.2.0
- **Styling**: Global CSS (styles directory)
- **Icons**: FontAwesome 7.1.0
- **Deployment**: Netlify (with serverless functions)

## Project Structure
```
/
├── src/
│   ├── pages/            # Route components
│   │   ├── Home.tsx      # Homepage
│   │   ├── Privacy.tsx   # Privacy policy page
│   │   └── Terms.tsx     # Terms of service page
│   ├── components/       # React components
│   │   ├── Contact.tsx   # Contact section
│   │   ├── Footer.tsx    # Footer component
│   │   ├── Form.tsx      # Contact/appointment form
│   │   ├── Header.tsx    # Header section
│   │   ├── Intro.tsx     # Introduction section
│   │   ├── Layout.tsx    # Main layout wrapper
│   │   ├── Navbar.tsx    # Navigation bar (homepage)
│   │   ├── SimpleNavbar.tsx # Navigation bar (other pages)
│   │   ├── Price.tsx     # Pricing section
│   │   └── Services.tsx  # Services section
│   ├── App.tsx           # Main app component with routing
│   └── client.tsx        # Client-side hydration entry point
├── netlify/
│   └── functions/
│       └── server.ts     # Netlify serverless function for SSR
├── server.tsx            # Bun SSR server (local development)
├── public/               # Static assets
├── styles/               # CSS stylesheets (loaded globally)
├── dist/                 # Built client bundle
├── package.json          # Project dependencies and scripts
└── netlify.toml          # Netlify deployment configuration
```

## Development Commands
- `bun dev` - Start development server with SSR (runs server.tsx)
- `bun build` - Build client bundle for production
- `bun start` - Start production SSR server

## Architecture

### Server-Side Rendering (SSR)
- Uses React 19's `renderToString` for server-side rendering
- Bun server handles SSR during development (`server.tsx`)
- Netlify serverless function handles SSR in production (`netlify/functions/server.ts`)

### Client-Side Hydration
- Client bundle built with Bun's bundler
- React 19's `hydrateRoot` for client-side hydration
- Minimal JavaScript footprint

### Routing
- Simple custom routing based on pathname
- Routes: `/` (home), `/privacy`, `/terms`
- Handled in `src/App.tsx`

### Styling
- Global CSS loaded in HTML template
- CSS modules syntax preserved but loaded globally
- No runtime CSS processing needed

## Deployment

### Netlify Configuration
- Bun installed during build process
- Client bundle built and served statically
- SSR handled by Netlify serverless function
- All routes redirect to serverless function for SSR

### Build Process
1. Install Bun
2. Install dependencies with `bun install`
3. Build client bundle with `bun run build`
4. Deploy serverless function and static assets

## Performance Considerations
- Server-side rendering for fast initial page load
- Client-side hydration for interactivity
- Minimal JavaScript bundle
- Static asset optimization
- Font loading optimizations with Google Fonts

## Coding Standards
- TypeScript for type safety
- React 19 features available
- Functional components preferred
- Server and client code separation

## Key Features
1. **Server-Side Rendering**: Fast initial page loads with SEO benefits
2. **Service Information**: Detailed information about mobile physiotherapy services
3. **Pricing**: Transparent pricing structure for services
4. **Contact Form**: User contact/appointment booking functionality (Netlify Forms)
5. **Responsive Design**: Mobile-first approach for various device sizes
6. **Legal Pages**: Privacy policy and terms of service

## Important Files
- `server.tsx` - Bun development SSR server
- `netlify/functions/server.ts` - Production SSR handler
- `src/App.tsx` - Main application with routing logic
- `src/client.tsx` - Client-side hydration entry point
- `netlify.toml` - Netlify deployment configuration
- `package.json` - Dependencies and build scripts

## Development Guidelines
1. **Performance**: SSR provides excellent initial load performance
2. **Accessibility**: Ensure components are accessible
3. **Mobile-First**: Design and test for mobile devices first
4. **SEO**: SSR ensures all content is available for search engines
5. **Build Verification**: Always test `bun build` before committing major changes

## Common Tasks
- **Adding new routes**:
  1. Create component in `/src/pages/`
  2. Add route case in `/src/App.tsx`
  3. Update server route handlers in `server.tsx` and `netlify/functions/server.ts`
- **Adding new components**: Create files in `/src/components/` directory
- **Styling**: Modify files in `/styles/` directory
- **Static assets**: Add to `/public/` directory

## Git Workflow
- Work on feature branches prefixed with `claude/`
- Branch names should end with the session ID
- Commit messages should be clear and descriptive
- Always push to the designated branch before creating PRs

## Migration from Next.js
This project was migrated from Next.js to Bun + React 19 SSR:
- Removed Next.js dependencies and framework
- Implemented custom SSR with Bun
- Preserved all routes and functionality
- Simplified architecture with minimal dependencies
- Improved performance with Bun's fast runtime
