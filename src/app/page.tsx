"use client"

import { mockWorks, mockCategories } from '@/lib/portfolio-data'
import { WorkGrid } from '@/components/portfolio/work-grid'
import { CategoryFilter } from '@/components/portfolio/category-filter'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const featuredWorks = mockWorks.filter(work => work.featured)
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const filteredWorks = selectedCategory === 'all' 
    ? featuredWorks 
    : featuredWorks.filter(work => work.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Creative Design &{" "}
              <span className="text-portfolio-primary">Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Crafting digital experiences that bridge beautiful design with functional technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-8 py-4 bg-portfolio-primary text-white rounded-lg hover:opacity-90 transition-opacity focus-ring"
              >
                View Work
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-lg hover:bg-muted/50 transition-colors focus-ring"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of recent projects showcasing design, development, and branding work.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <CategoryFilter
              categories={[
                { id: 'all', name: 'All', slug: 'all', count: featuredWorks.length },
                ...mockCategories.slice(1).map(cat => ({
                  ...cat,
                  count: featuredWorks.filter(work => work.category === cat.slug).length
                }))
              ]}
              activeCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Work Grid */}
          <WorkGrid works={filteredWorks} variant="large" />

          {/* View All Link */}
          <div className="text-center mt-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-portfolio-primary hover:underline focus-ring rounded"
            >
              View All Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brief About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Passionate About Craft
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            With over 5 years of experience in design and development, I help brands 
            and businesses create meaningful digital experiences. From initial concept 
            to final implementation, I focus on creating solutions that are both 
            beautiful and functional.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-portfolio-primary text-white rounded-lg hover:opacity-90 transition-opacity focus-ring"
          >
            Learn More About Me
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
