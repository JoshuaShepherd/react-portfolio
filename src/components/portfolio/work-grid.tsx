"use client"

import { WorkItem } from '@/lib/portfolio-data'
import { WorkCard } from './work-card'
import { cn } from '@/lib/utils'

interface WorkGridProps {
  works: WorkItem[]
  className?: string
  variant?: 'default' | 'large'
}

export function WorkGrid({ works, className, variant = 'default' }: WorkGridProps) {
  if (works.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground">No works found matching your criteria.</p>
      </div>
    )
  }

  return (
    <div 
      className={cn(
        variant === 'large' ? 'portfolio-grid-large' : 'portfolio-grid',
        className
      )}
    >
      {works.map((work) => (
        <WorkCard 
          key={work.id} 
          work={work}
          className="animate-fade-in"
        />
      ))}
    </div>
  )
}
