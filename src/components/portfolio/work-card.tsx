"use client"

import { useState } from 'react'
import { WorkItem } from '@/lib/portfolio-data'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface WorkCardProps {
  work: WorkItem
  className?: string
}

export function WorkCard({ work, className }: WorkCardProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Link 
      href={`/work/${work.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-lg bg-muted/20 transition-all duration-300",
        "hover:scale-[1.02] hover:shadow-lg focus-ring",
        className
      )}
    >
      <div className="aspect-portfolio relative overflow-hidden">
        <Image
          src={work.thumbnailUrl}
          alt={work.title}
          fill
          className={cn(
            "object-cover transition-all duration-700 group-hover:scale-110",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {!isLoaded && (
          <div className="absolute inset-0 bg-muted/50 animate-pulse" />
        )}
      </div>
      
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {work.category}
          </span>
          <span className="text-xs text-muted-foreground">
            {work.year}
          </span>
        </div>
        
        <h3 className="font-semibold text-foreground group-hover:text-portfolio-primary transition-colors">
          {work.title}
        </h3>
        
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {work.description}
        </p>
        
        {work.client && (
          <p className="mt-3 text-xs text-muted-foreground">
            Client: {work.client}
          </p>
        )}
        
        {work.technologies && work.technologies.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {work.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded bg-muted px-2 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {work.technologies.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{work.technologies.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}
