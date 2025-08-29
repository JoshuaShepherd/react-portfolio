"use client"

import { useState } from 'react'
import { MediaBlock } from '@/lib/portfolio-data'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface MediaBlockProps {
  block: MediaBlock
  className?: string
}

export function MediaBlockComponent({ block, className }: MediaBlockProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const getAspectRatioClass = (aspectRatio?: string) => {
    switch (aspectRatio) {
      case 'square':
        return 'aspect-square'
      case 'portrait':
        return 'aspect-[3/4]'
      case 'landscape':
        return 'aspect-[4/3]'
      case 'wide':
        return 'aspect-[16/9]'
      default:
        return 'aspect-[4/3]'
    }
  }

  if (block.type === 'text') {
    return (
      <div className={cn("prose max-w-none", className)}>
        <p className="text-muted-foreground leading-relaxed">
          {block.content}
        </p>
      </div>
    )
  }

  if (block.type === 'image') {
    return (
      <figure className={cn("group", className)}>
        <div className={cn(
          "relative overflow-hidden rounded-lg bg-muted/20",
          getAspectRatioClass(block.aspectRatio)
        )}>
          <Image
            src={block.content}
            alt={block.caption || 'Project image'}
            fill
            className={cn(
              "object-cover transition-opacity duration-700",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setIsLoaded(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-muted/50 animate-pulse" />
          )}
        </div>
        {block.caption && (
          <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">
            {block.caption}
          </figcaption>
        )}
      </figure>
    )
  }

  if (block.type === 'video') {
    return (
      <figure className={cn("group", className)}>
        <div className={cn(
          "relative overflow-hidden rounded-lg bg-muted/20",
          getAspectRatioClass(block.aspectRatio)
        )}>
          <video
            src={block.content}
            controls
            className="w-full h-full object-cover"
            preload="metadata"
          />
        </div>
        {block.caption && (
          <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">
            {block.caption}
          </figcaption>
        )}
      </figure>
    )
  }

  if (block.type === 'embed') {
    return (
      <figure className={cn("group", className)}>
        <div className={cn(
          "relative overflow-hidden rounded-lg bg-muted/20",
          getAspectRatioClass(block.aspectRatio)
        )}>
          <iframe
            src={block.content}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
        {block.caption && (
          <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">
            {block.caption}
          </figcaption>
        )}
      </figure>
    )
  }

  return null
}
