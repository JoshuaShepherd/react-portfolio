"use client"

import { useState } from 'react'
import { mockWorks, mockCategories } from '@/lib/portfolio-data'
import { WorkGrid } from '@/components/portfolio/work-grid'
import { CategoryFilter } from '@/components/portfolio/category-filter'

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const filteredWorks = selectedCategory === 'all' 
    ? mockWorks 
    : mockWorks.filter(work => work.category === selectedCategory)

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            All Work
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive collection of my design and development projects, 
            spanning brand identity, user interfaces, and full-stack applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <CategoryFilter
            categories={mockCategories}
            activeCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Work Grid */}
        <WorkGrid works={filteredWorks} />
        
        {/* Results Count */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Showing {filteredWorks.length} of {mockWorks.length} projects
          </p>
        </div>
      </div>
    </div>
  )
}
