# Portfolio Style Guide

## Overview

This portfolio is built with a focus on showcasing creative work through a clean, modern design system that prioritizes visual content while maintaining excellent performance and accessibility.

## Design System

### Color Palette

- **Primary**: Deep blue-gray (`hsl(222.2 47.4% 11.2%)`) - Used for primary actions and headings
- **Secondary**: Light gray (`hsl(220 14.3% 95.9%)`) - Background accents and subtle elements
- **Background**: Pure white (`hsl(0 0% 100%)`) - Main background
- **Foreground**: Dark blue-gray (`hsl(222.2 84% 4.9%)`) - Primary text
- **Muted**: Light gray (`hsl(215.4 16.3% 46.9%)`) - Secondary text and subtle elements

### Typography

- **Primary Font**: Inter - Clean, modern sans-serif for body text
- **Monospace Font**: JetBrains Mono - For code examples and technical content
- **Heading Scale**: 
  - H1: 4xl-7xl (responsive)
  - H2: 3xl-4xl (responsive)
  - H3: lg-xl
  - Body: base (16px)
  - Small: sm (14px)

### Layout Grid

- **Container**: Max-width of 7xl (80rem) for full-width sections
- **Content**: Max-width of 4xl (56rem) for reading content
- **Portfolio Grid**: Responsive CSS Grid with auto-fill and minmax
  - Default: `minmax(280px, 1fr)` - 280px minimum width
  - Large: `minmax(360px, 1fr)` - 360px minimum width for featured content

## Media Block System

### Block Types

The portfolio uses a flexible media block system that supports multiple content types:

#### 1. Image Block
```typescript
{
  type: 'image',
  content: string, // Image URL
  caption?: string,
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide'
}
```

#### 2. Video Block
```typescript
{
  type: 'video',
  content: string, // Video URL
  caption?: string,
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide'
}
```

#### 3. Embed Block
```typescript
{
  type: 'embed',
  content: string, // Embed URL (iframe)
  caption?: string,
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide'
}
```

#### 4. Text Block
```typescript
{
  type: 'text',
  content: string // Plain text content
}
```

### Aspect Ratios

- **Square**: `1:1` - Profile images, logos
- **Portrait**: `3:4` - Mobile screens, vertical compositions
- **Landscape**: `4:3` - Traditional photo format
- **Wide**: `16:9` - Desktop screens, hero images

### Adding New Block Types

To add a new media block type:

1. **Update the MediaBlock interface** in `/src/lib/portfolio-data.ts`:
```typescript
export interface MediaBlock {
  id: string
  type: 'image' | 'video' | 'embed' | 'text' | 'NEW_TYPE'
  // ... other properties
}
```

2. **Add handler in MediaBlockComponent** (`/src/components/portfolio/media-block.tsx`):
```typescript
if (block.type === 'NEW_TYPE') {
  return (
    <div className={cn("your-custom-styles", className)}>
      {/* Your custom rendering logic */}
    </div>
  )
}
```

3. **Update styling** if needed in global CSS or component-specific styles.

## Performance Optimizations

### Image Handling

- **Next.js Image Component**: Automatic optimization with WebP/AVIF formats
- **Lazy Loading**: All images load lazily with loading states
- **Responsive Images**: Proper `sizes` attribute for different viewports
- **Device Pixel Ratio (DPR)**: Images adapt to high-DPI displays
- **Loading States**: Smooth fade-in animations when images load

### Code Splitting

- **Route-based Splitting**: Each page loads independently
- **Component Lazy Loading**: Heavy components can be lazy-loaded
- **Dynamic Imports**: Use for non-critical functionality

## Accessibility Features

### Focus Management

- **Focus Rings**: Custom focus styling with `.focus-ring` utility class
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Skip Links**: Implement for better screen reader navigation

### ARIA Labels

- **Images**: Proper alt text for all images
- **Buttons**: Descriptive aria-labels for icon buttons
- **Landmarks**: Semantic HTML structure with proper headings

### Color Contrast

- **WCAG AA Compliance**: All text meets minimum contrast ratios
- **Dark Mode Ready**: Color system supports dark mode implementation

## Animation Guidelines

### Principles

- **Subtle Motion**: Hover effects should be subtle and purposeful
- **Performance First**: Use transform and opacity for animations
- **Respect Preferences**: Honor `prefers-reduced-motion` settings

### Animation Classes

```css
.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.5s ease-out;
}

.animate-scale-in {
  animation: scale-in 0.3s ease-out;
}
```

### Hover Effects

- **Work Cards**: Scale (1.02) + shadow on hover
- **Images**: Subtle scale (1.1) on hover
- **Links**: Color transitions with focus rings

## Content Guidelines

### Work Item Structure

Each work item should include:
- **High-quality thumbnail** (4:3 aspect ratio recommended)
- **Clear title** and description
- **Categorization** (design, development, branding)
- **Year** and client information
- **Technology stack** for development work
- **Multiple media blocks** for detailed case study

### Category System

Currently supports:
- **Design**: UI/UX, visual design, design systems
- **Development**: Full-stack projects, frontend applications
- **Branding**: Logo design, brand identity, visual identity

### SEO Optimization

- **Descriptive URLs**: Use kebab-case slugs
- **Meta Descriptions**: Unique for each work item
- **Image Alt Text**: Descriptive and contextual
- **Structured Data**: Consider implementing for rich snippets

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **Progressive Enhancement**: Core functionality works without JavaScript
- **CSS Grid**: Used extensively, with fallbacks where needed
- **Modern CSS**: Custom properties, clamp(), aspect-ratio

## Deployment Considerations

### Static Generation

- **Build-time Rendering**: All pages are statically generated
- **Dynamic Routes**: Work detail pages use `generateStaticParams`
- **Image Optimization**: Built-in Next.js image optimization

### Performance Metrics

Target metrics:
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

### Content Delivery

- **Image CDN**: Consider using a CDN for images
- **Edge Deployment**: Deploy to edge locations for global performance
- **Caching**: Implement proper cache headers for static assets
