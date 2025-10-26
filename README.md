# SKATMA Holdings Website

A modern, stunning website for SKATMA Holdings built with Next.js 16, showcasing excellence across multiple industries including farming, hospitality, construction, and automotive services.

## 🚀 Features

- ✨ **Modern Design**: Clean, professional interface with smooth animations
- 🎨 **Dark/Light Mode**: Full theme support for user preference
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Optimized Performance**: Fast loading times and SEO-optimized
- 🎭 **Framer Motion Animations**: Engaging scroll animations and transitions
- 🎯 **shadcn/ui Components**: Beautiful, accessible UI components
- 🌊 **Animated Background**: Dynamic geometric shapes and particles
- 📊 **Interactive Sections**: Animated counters, moving cards, and more

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **TypeScript**: Full type safety

## 📦 Installation & Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

The page auto-updates as you edit the files.

## 🌐 Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
stockholdings/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── header.tsx      # Navigation header
│   │   ├── footer.tsx      # Footer with contact info
│   │   ├── animated-background.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── services-section.tsx
│   │   ├── subsidiaries-section.tsx
│   │   └── news-section.tsx
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── data/
│   │   └── company-data.ts # All company information
│   └── utils.ts
└── public/
    └── images/             # Image assets
```

## 🎨 Customization

### Colors
The site uses a red theme (#dc2626) as the primary color. Update in `lib/data/company-data.ts`.

### Content
All content is centralized in `lib/data/company-data.ts`:
- Company information
- Services
- Subsidiaries  
- Blog posts
- Statistics

### Images
Place your images in `public/images/` and update the paths in the data file.

## 📸 Required Images

Add the following images to `public/images/`:
- `hero-bg.jpg` - Hero section background
- Subsidiary images: `cabal-villa.jpg`, `msta-holdings.jpg`, `lumveleni.jpg`, `agri-nema.jpg`
- Service images: `farming.jpg`, `carwash.jpg`, `restaurant.jpg`, `bricks.jpg`
- Blog images: `blog-agriculture.jpg`, `blog-hospitality.jpg`, `blog-construction.jpg`

## 📞 Contact

- **Email**: enquiries@skatmaholdings.co.za
- **Phone**: 067 625 4207
- **Address**: Manini Block L, Thohoyandou – L EXT 0968

## 📄 License

Copyright © 2025 SKATMA Holdings | Reg No: 2019/537731/07

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Built with ❤️ using Next.js
