export interface WorkItem {
  id: string
  slug: string
  title: string
  category: 'design' | 'development' | 'branding'
  description: string
  thumbnailUrl: string
  images: string[]
  year: number
  client?: string
  role?: string
  technologies?: string[]
  featured: boolean
  blocks: MediaBlock[]
}

export interface MediaBlock {
  id: string
  type: 'image' | 'video' | 'embed' | 'text'
  content: string
  caption?: string
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide'
  width?: number
  height?: number
}

export interface Category {
  id: string
  name: string
  slug: string
  count: number
}

export const mockCategories: Category[] = [
  { id: '1', name: 'All Work', slug: 'all', count: 9 },
  { id: '2', name: 'Design', slug: 'design', count: 3 },
  { id: '3', name: 'Development', slug: 'development', count: 4 },
  { id: '4', name: 'Branding', slug: 'branding', count: 2 },
]

export const mockWorks: WorkItem[] = [
  {
    id: '1',
    slug: 'modern-ecommerce-platform',
    title: 'Modern E-commerce Platform',
    category: 'development',
    description: 'A full-stack e-commerce solution with React, Next.js, and Stripe integration.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop'
    ],
    year: 2024,
    client: 'TechCorp',
    role: 'Full Stack Developer',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
    featured: true,
    blocks: [
      {
        id: '1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
        caption: 'Homepage design with modern hero section',
        aspectRatio: 'wide'
      },
      {
        id: '2',
        type: 'text',
        content: 'This project involved creating a complete e-commerce solution from scratch, focusing on performance, accessibility, and user experience. The platform handles thousands of products with advanced filtering and search capabilities.'
      },
      {
        id: '3',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
        caption: 'Product detail page with interactive gallery',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '2',
    slug: 'brand-identity-redesign',
    title: 'Brand Identity Redesign',
    category: 'branding',
    description: 'Complete brand overhaul for a fintech startup, including logo, color system, and guidelines.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop'
    ],
    year: 2024,
    client: 'FinTech Innovations',
    role: 'Brand Designer',
    featured: true,
    blocks: [
      {
        id: '1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&h=800&fit=crop',
        caption: 'Logo variations and brand mark',
        aspectRatio: 'landscape'
      },
      {
        id: '2',
        type: 'text',
        content: 'The challenge was to create a modern, trustworthy brand identity that would appeal to both individual users and enterprise clients. The solution involved a clean, geometric approach with a sophisticated color palette.'
      }
    ]
  },
  {
    id: '3',
    slug: 'mobile-app-ui-design',
    title: 'Mobile App UI Design',
    category: 'design',
    description: 'User interface design for a productivity app with focus on accessibility and usability.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop'
    ],
    year: 2023,
    client: 'Productivity Plus',
    role: 'UI/UX Designer',
    technologies: ['Figma', 'Framer', 'Principle'],
    featured: true,
    blocks: [
      {
        id: '1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
        caption: 'Mobile screens showing the main user flow',
        aspectRatio: 'portrait'
      }
    ]
  },
  {
    id: '4',
    slug: 'dashboard-analytics-tool',
    title: 'Dashboard Analytics Tool',
    category: 'development',
    description: 'Real-time analytics dashboard built with React and D3.js for data visualization.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop'
    ],
    year: 2023,
    client: 'DataViz Corp',
    role: 'Frontend Developer',
    technologies: ['React', 'D3.js', 'TypeScript', 'WebSockets'],
    featured: false,
    blocks: [
      {
        id: '1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
        caption: 'Main dashboard with real-time charts',
        aspectRatio: 'wide'
      }
    ]
  },
  {
    id: '5',
    slug: 'restaurant-website',
    title: 'Restaurant Website',
    category: 'design',
    description: 'Modern website design for a fine dining restaurant with online reservation system.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop'
    ],
    year: 2023,
    client: 'Bistro Elite',
    role: 'Web Designer',
    featured: false,
    blocks: [
      {
        id: '1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop',
        caption: 'Homepage with elegant typography and imagery',
        aspectRatio: 'wide'
      }
    ]
  },
  {
    id: '6',
    slug: 'crypto-trading-platform',
    title: 'Crypto Trading Platform',
    category: 'development',
    description: 'Full-featured cryptocurrency trading platform with real-time price updates.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=800&fit=crop'
    ],
    year: 2022,
    client: 'CryptoTrade',
    role: 'Full Stack Developer',
    technologies: ['Vue.js', 'Node.js', 'WebSocket', 'MongoDB'],
    featured: false,
    blocks: [
      {
        id: '1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=800&fit=crop',
        caption: 'Trading interface with real-time charts',
        aspectRatio: 'wide'
      }
    ]
  },
  {
    id: '7',
    slug: 'startup-logo-design',
    title: 'Startup Logo Design',
    category: 'branding',
    description: 'Logo and visual identity design for a health tech startup.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop'
    ],
    year: 2022,
    client: 'HealthTech Solutions',
    role: 'Brand Designer',
    featured: false,
    blocks: [
      {
        id: '1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop',
        caption: 'Final logo design with variations',
        aspectRatio: 'square'
      }
    ]
  },
  {
    id: '8',
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'development',
    description: 'Personal portfolio website built with Next.js and modern web technologies.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop'
    ],
    year: 2022,
    client: 'Personal Project',
    role: 'Full Stack Developer',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    featured: false,
    blocks: [
      {
        id: '1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop',
        caption: 'Clean, minimal portfolio design',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '9',
    slug: 'ui-design-system',
    title: 'UI Design System',
    category: 'design',
    description: 'Comprehensive design system for a SaaS platform with components and guidelines.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&h=800&fit=crop'
    ],
    year: 2021,
    client: 'SaaS Startup',
    role: 'Design Systems Lead',
    technologies: ['Figma', 'Storybook', 'React'],
    featured: false,
    blocks: [
      {
        id: '1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&h=800&fit=crop',
        caption: 'Component library overview',
        aspectRatio: 'wide'
      }
    ]
  }
]
