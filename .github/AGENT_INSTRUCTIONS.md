# Agent Instructions for explooosion.github.io

## Project Overview

This is **Robby Wu's personal portfolio website** hosted on GitHub Pages at `https://robby570.tw/`. The repository follows a unique structure where the actual development happens in a subdirectory and build outputs are manually deployed to the root.

### Key Information
- **Repository**: `explooosion/explooosion.github.io`
- **Domain**: robby570.tw (configured via CNAME)
- **Deployment Branch**: `master` (GitHub Pages serves from root of master branch)
- **Development Branch**: Feature branches like `feat/1.7.0`
- **Node.js Version**: v22.12.0
- **npm Version**: 11.7.0

---

## Project Architecture

### Directory Structure

```
explooosion.github.io/          # Repository root (GitHub Pages serves from here)
├── CNAME                        # Domain configuration: robby570.tw
├── index.html                   # Built production HTML (copied from web/dist/)
├── assets/                      # Built production assets (copied from web/dist/)
├── locales/                     # Built i18n files (copied from web/dist/)
├── manifest.json                # PWA manifest
├── sitemap.xml                  # SEO sitemap
├── robots.txt                   # SEO robots
├── avatar.png, favicon.png      # Static images
├── resume.pdf                   # Resume document
└── web/                         # **Development workspace**
    ├── package.json             # Project dependencies (THE source of truth)
    ├── vite.config.ts           # Vite configuration
    ├── tsconfig.json            # TypeScript configuration
    ├── tailwind.config.js       # Tailwind CSS configuration
    ├── src/                     # Source code
    │   ├── main.tsx             # Application entry point
    │   ├── App.tsx              # Root component
    │   ├── i18n.ts              # i18next configuration
    │   ├── components/          # Reusable components (CodeBlock)
    │   ├── containers/          # Page sections (Header, Footer, Content)
    │   └── styles/              # SCSS stylesheets
    └── public/                  # Static assets for development
```

### Technology Stack

**Frontend Framework:**
- React 18.3.1 with TypeScript
- Vite 5.4.2 (build tool with SWC plugin for fast compilation)
- React DOM 18.3.1

**Styling:**
- Tailwind CSS 3.4.10 (utility-first CSS)
- SASS/SCSS (custom styles)
- PostCSS with Autoprefixer
- Taipei Sans TC font (台北黑體)
- CSS Shake animations

**Internationalization:**
- i18next 23.14.0
- react-i18next 14.1.2
- i18next-http-backend (load translations from `/locales`)
- i18next-browser-languagedetector
- Supported languages: English (en), Traditional Chinese (zh)

**UI & Utilities:**
- react-icons 5.3.0 (icon library)
- Prism.js 1.29.0 (code syntax highlighting)
- DOMPurify 3.1.6 (XSS protection for HTML sanitization)

**Development Tools:**
- TypeScript 5.5.4
- ESLint 8.57.0 with TypeScript and React plugins
- Vite plugin React SWC for fast refresh

---

## Development Workflow

### 1. Development Environment

All development work happens in the `/web` directory:

```bash
cd /Users/robby/Desktop/repo/explooosion.github.io/web
```

**Available Scripts** (from web/package.json):
- `npm run dev` - Start development server
- `npm run build` - Build for production (outputs to `web/dist/`)
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview production build locally

### 2. Build Process

**Current Manual Process:**
1. Navigate to `/web` directory
2. Run `npm run build` (executes `tsc && vite build`)
3. Vite generates optimized output in `web/dist/`
4. **Manually copy** entire `web/dist/` contents to repository root
5. This overwrites `index.html`, `assets/`, `locales/` in root
6. Commit and push to `master` branch for deployment

**Build Output:**
- HTML files with asset hashing
- Minified and bundled JavaScript (e.g., `index-DwTgaw7x.js`)
- Optimized CSS (e.g., `index-pWX-EypC.css`)
- Static assets and locales

### 3. Deployment

**GitHub Pages Configuration:**
- Source: `master` branch, root directory
- Domain: Custom domain via CNAME → robby570.tw
- Static files served directly from repository root

**Critical Files in Root (must be preserved):**
- `CNAME` - Domain configuration
- `favicon.png`, `avatar.png` - Identity assets
- `resume.pdf` - Resume document
- `manifest.json` - PWA manifest
- `robots.txt`, `sitemap.xml` - SEO files

### 4. Version Management

**Package Version Location:** `web/package.json` → `"version": "1.7.0"`

**Versioning Strategy:**
- Follow Semantic Versioning (MAJOR.MINOR.PATCH)
- Update version in `web/package.json` for each release
- Create feature branches like `feat/1.7.0` for development
- Merge to `master` for deployment

---

## Code Architecture

### Component Structure

**App.tsx** - Root layout:
```tsx
<Header />    // Avatar, profile info, social icons
<Content />   // Main content sections
<Footer />    // Footer information
```

**Content Sections** (in `src/containers/Content/`):
- `Intro.tsx` - Introduction
- `Skill.tsx` - Technical skills
- `Work.tsx` - Work experience
- `Case.tsx` - Project cases
- `Blog.tsx` - Blog posts
- `Commit.tsx` - GitHub commit activity
- `Activity.tsx` - Recent activities
- `Analysis.tsx` - Analytics or insights

**Shared Components:**
- `CodeBlock.tsx` - Syntax-highlighted code blocks using Prism.js
- Styled with Tailwind utility classes and custom SCSS

### Styling Approach

**Utility-First with Tailwind:**
- Responsive design: `lg:flex-row`, `w-[80vw]`, etc.
- Customized via `tailwind.config.js`

**Custom SCSS Modules** (in `src/styles/`):
- `_fade.scss` - Fade animations
- `_jello.scss` - Jello animations (likely with csshake)
- `_sticky.scss` - Sticky positioning
- `_tracking.scss` - Letter spacing effects

### i18n Configuration

**Setup** (`src/i18n.ts`):
- Language detection via browser
- Fallback to English
- Translations loaded from `/locales/{lng}/translation.json`

**Translation Files:**
- Development: `web/public/locales/en/translation.json`, `web/public/locales/zh/translation.json`
- Production (root): `locales/en/translation.json`, `locales/zh/translation.json`

---

## Important Constraints & Rules

### ⚠️ Critical Principles

1. **DO NOT modify the architecture** - This structure has been stable for years
2. **Manual deployment process** - Keep the manual copy from `web/dist/` to root
3. **Root files are sacred** - CNAME, avatars, PDFs must be preserved
4. **Master is production** - Only merge to master when ready to deploy
5. **Web is development** - All code changes happen in `/web`

### Development Guidelines

**When Making Code Changes:**
- Only modify files in `/web/src/`
- Update dependencies in `/web/package.json`
- Test with `npm run dev` in `/web` directory
- Build with `npm run build` before deployment
- Verify build output in `web/dist/` before copying to root

**When Updating Dependencies:**
- Consider Node.js v22.12.0 compatibility
- React ecosystem should be primary focus
- Be cautious with breaking changes (especially SASS/styling)
- Always test build after updates
- Update version in `web/package.json` appropriately

**When Adding Features:**
- Follow existing TypeScript patterns
- Use Tailwind for styling when possible
- Support both EN/ZH languages
- Maintain responsive design
- Keep accessibility in mind

### File Handling Rules

**Never Commit to Root:**
- Don't create files directly in root during development
- Don't modify root HTML/assets manually
- Root files should only be updated via build process

**Lock Files:**
- `package-lock.json` in `/web` directory
- May need cleanup during major dependency updates
- Regenerate with `npm install` after clearing cache

---

## Common Tasks Reference

### Starting Development
```bash
cd /Users/robby/Desktop/repo/explooosion.github.io/web
npm run dev
```

### Building for Production
```bash
cd /Users/robby/Desktop/repo/explooosion.github.io/web
npm run build
# Output will be in web/dist/
```

### Checking Build Output
```bash
cd /Users/robby/Desktop/repo/explooosion.github.io/web
npm run preview
```

### Linting Code
```bash
cd /Users/robby/Desktop/repo/explooosion.github.io/web
npm run lint
```

### Deploying to Production
```bash
# 1. Build in web directory
cd /Users/robby/Desktop/repo/explooosion.github.io/web
npm run build

# 2. Manually copy web/dist/* to root directory
# (preserve CNAME, avatars, resume.pdf)

# 3. Commit and push to master
git add .
git commit -m "chore: deploy version x.x.x"
git push origin master
```

---

## Troubleshooting

### Build Fails
- Check Node.js version compatibility (should be v22.12.0)
- Clear `node_modules` and `package-lock.json`, reinstall
- Check for TypeScript errors with `tsc --noEmit`
- Verify all dependencies are installed

### Styling Issues
- SASS compilation issues - check `sass` package version
- Tailwind not working - verify PostCSS configuration
- Run `npm run build` to see specific errors

### i18n Not Loading
- Check locale files exist in `web/public/locales/`
- Verify build copies locales to `web/dist/locales/`
- Ensure backend path matches in `i18n.ts`: `/locales/{{lng}}/{{ns}}.json`

### GitHub Pages Not Updating
- Ensure changes are pushed to `master` branch
- Verify CNAME file still exists in root
- Check GitHub Pages settings in repository
- Wait a few minutes for Pages to rebuild

---

## Version History Context

Current version: **1.7.0** (feat/1.7.0 branch)

Previous backup branches visible:
- backup-1.2.4
- backup-1.2.6
- backup-1.5.0
- backup-1.6.6

This indicates a pattern of creating backup branches before major version updates.

---

## Agent Workflow Recommendations

When working on this project:

1. **Always start in `/web` directory** for any code-related tasks
2. **Read package.json first** to understand current dependencies
3. **Test changes locally** with `npm run dev` before building
4. **Build and verify** output in `web/dist/` before deployment
5. **Consider impact** on both languages (EN/ZH) for content changes
6. **Preserve stability** - this is a production personal website
7. **Version appropriately** - update package.json version for releases
8. **Document changes** - especially for breaking changes or major updates

---

## Additional Notes

- This is a personal portfolio/resume website
- Performance and SEO are important (static site on GitHub Pages)
- Mobile-responsive design is critical
- The site represents professional work - quality over speed
- The ASCII art in HTML header is a personal touch - preserve it! 🦊
