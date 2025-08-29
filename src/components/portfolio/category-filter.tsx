"use client"

import { useState } from 'react'
import { Category } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

interface CategoryFilterProps {
  categories: Category[]
  activeCategory: string
  onCategoryChange: (categorySlug: string) => void
  className?: string
}

export function CategoryFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  className 
}: CategoryFilterProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {categories.map((category) => {
        const isActive = activeCategory === category.slug
        
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.slug)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 focus-ring",
              isActive
                ? "bg-portfolio-primary text-white shadow-md"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            )}
          >
            {category.name}
            {category.slug !== 'all' && (
              <span className="ml-2 text-xs opacity-70">
                {category.count}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
