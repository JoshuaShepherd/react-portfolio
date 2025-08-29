"use client"

interface CreditsListProps {
  credits: Array<{
    role: string
    name: string
    url?: string
  }>
  className?: string
}

export function CreditsList({ credits, className }: CreditsListProps) {
  if (credits.length === 0) return null

  return (
    <section className={className}>
      <h3 className="text-lg font-semibold text-foreground mb-4">Credits</h3>
      <dl className="space-y-3">
        {credits.map((credit, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:gap-8">
            <dt className="text-sm font-medium text-muted-foreground min-w-[120px]">
              {credit.role}
            </dt>
            <dd>
              {credit.url ? (
                <a
                  href={credit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-portfolio-primary transition-colors focus-ring rounded"
                >
                  {credit.name}
                </a>
              ) : (
                <span className="text-foreground">{credit.name}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
