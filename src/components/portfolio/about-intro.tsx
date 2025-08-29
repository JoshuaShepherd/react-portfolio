"use client"

import { cn } from '@/lib/utils'

interface AboutIntroProps {
  className?: string
}

export function AboutIntro({ className }: AboutIntroProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Creative Designer & Developer
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm a multidisciplinary creative professional with over 5 years of experience 
            crafting digital experiences that bridge the gap between beautiful design and 
            functional technology.
          </p>
          
          <p className="text-muted-foreground">
            My work spans across brand identity, user interface design, and full-stack 
            development. I believe in creating solutions that are not only visually 
            compelling but also accessible, performant, and meaningful.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-border">
        <div>
          <h3 className="font-semibold text-foreground mb-3">Design</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Brand Identity</li>
            <li>UI/UX Design</li>
            <li>Design Systems</li>
            <li>Prototyping</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-foreground mb-3">Development</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>React/Next.js</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Database Design</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-foreground mb-3">Tools</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Figma</li>
            <li>VS Code</li>
            <li>Git</li>
            <li>Adobe Creative Suite</li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-border">
        <h3 className="font-semibold text-foreground mb-4">Let's Connect</h3>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:hello@example.com"
            className="px-6 py-3 bg-portfolio-primary text-white rounded-lg hover:opacity-90 transition-opacity focus-ring"
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border rounded-lg hover:bg-muted/50 transition-colors focus-ring"
          >
            View Resume
          </a>
        </div>
        
        <div className="mt-6 flex gap-6">
          <a
            href="https://linkedin.com/in/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded"
          >
            GitHub
          </a>
          <a
            href="https://dribbble.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded"
          >
            Dribbble
          </a>
          <a
            href="https://twitter.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  )
}
