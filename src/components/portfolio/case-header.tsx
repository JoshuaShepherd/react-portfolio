"use client"

import { WorkItem } from '@/lib/portfolio-data'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CaseHeaderProps {
  work: WorkItem
  className?: string
}

export function CaseHeader({ work, className }: CaseHeaderProps) {
  return (
    <header className={cn("space-y-8", className)}>
      {/* Navigation */}
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Work
      </Link>

      {/* Title Section */}
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full uppercase tracking-wider">
              {work.category}
            </span>
            <span className="text-sm text-muted-foreground">
              {work.year}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {work.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {work.description}
          </p>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-border">
          {work.client && (
            <div>
              <dt className="text-sm font-medium text-muted-foreground mb-2">Client</dt>
              <dd className="text-foreground">{work.client}</dd>
            </div>
          )}
          
          {work.role && (
            <div>
              <dt className="text-sm font-medium text-muted-foreground mb-2">Role</dt>
              <dd className="text-foreground">{work.role}</dd>
            </div>
          )}
          
          <div>
            <dt className="text-sm font-medium text-muted-foreground mb-2">Year</dt>
            <dd className="text-foreground">{work.year}</dd>
          </div>
          
          {work.technologies && work.technologies.length > 0 && (
            <div>
              <dt className="text-sm font-medium text-muted-foreground mb-2">Technologies</dt>
              <dd className="space-y-1">
                {work.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block mr-2 mb-1 px-2 py-1 text-xs bg-muted rounded"
                  >
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
