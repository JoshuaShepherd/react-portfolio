import { notFound } from 'next/navigation'
import { mockWorks } from '@/lib/portfolio-data'
import { CaseHeader } from '@/components/portfolio/case-header'
import { MediaBlockComponent } from '@/components/portfolio/media-block'
import { CreditsList } from '@/components/portfolio/credits-list'
import { WorkGrid } from '@/components/portfolio/work-grid'

interface WorkDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params
  const work = mockWorks.find(w => w.slug === slug)
  
  if (!work) {
    notFound()
  }

  // Get related works (same category, excluding current)
  const relatedWorks = mockWorks
    .filter(w => w.category === work.category && w.id !== work.id)
    .slice(0, 3)

  // Mock credits for demo
  const credits = [
    { role: 'Design Lead', name: 'John Doe' },
    { role: 'Developer', name: 'Jane Smith', url: 'https://janesmith.dev' },
    { role: 'Project Manager', name: 'Mike Johnson' },
  ]

  return (
    <div className="min-h-screen">
      {/* Case Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <CaseHeader work={work} />
        </div>
      </section>

      {/* Media Blocks */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {work.blocks.map((block) => (
            <MediaBlockComponent key={block.id} block={block} />
          ))}
        </div>
      </section>

      {/* Credits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <CreditsList credits={credits} />
        </div>
      </section>

      {/* Related Work */}
      {relatedWorks.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
              More {work.category.charAt(0).toUpperCase() + work.category.slice(1)} Work
            </h2>
            <WorkGrid works={relatedWorks} />
          </div>
        </section>
      )}
    </div>
  )
}

// Generate static params for all work items
export async function generateStaticParams() {
  return mockWorks.map((work) => ({
    slug: work.slug,
  }))
}
