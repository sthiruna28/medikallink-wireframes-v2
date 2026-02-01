import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 py-5 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-headline font-medium text-text-primary">
            MedikaLLInk Copilot
          </h1>
          <p className="text-ui text-text-secondary mt-1">
            Design Evolution: V1 → V2
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-content text-text-primary leading-relaxed">
            A complete redesign focused on <strong>speed, clarity, and minimalism</strong> for busy doctors. 
            Voice-first. Touch-optimized. Zero cognitive overhead.
          </p>
        </section>

        {/* Design Principles */}
        <section className="mb-12">
          <h2 className="text-content font-medium text-text-primary mb-4">
            Key Design Principles
          </h2>
          <div className="grid gap-4">
            <div className="p-5 bg-background-secondary rounded-lg">
              <h3 className="text-ui font-medium text-primary mb-1">1. Command-Focused, Not Chat</h3>
              <p className="text-ui text-text-secondary">
                Show only last command + current response. No conversation history. Old commands fade after 3 seconds.
              </p>
            </div>
            <div className="p-5 bg-background-secondary rounded-lg">
              <h3 className="text-ui font-medium text-primary mb-1">2. Giant Touch Targets</h3>
              <p className="text-ui text-text-secondary">
                Mic button: 80% width. Confirmation buttons: 50% of modal height. Designed for walking-between-rooms use.
              </p>
            </div>
            <div className="p-5 bg-background-secondary rounded-lg">
              <h3 className="text-ui font-medium text-primary mb-1">3. Solution-First Errors</h3>
              <p className="text-ui text-text-secondary">
                Lead with the fix (&quot;Tap to retry&quot;). One primary action, always. Subtext explains why, not what went wrong.
              </p>
            </div>
            <div className="p-5 bg-background-secondary rounded-lg">
              <h3 className="text-ui font-medium text-primary mb-1">4. Flatten Visual Hierarchy</h3>
              <p className="text-ui text-text-secondary">
                Remove 50% of borders. Whitespace instead of boxes. One accent color. Two font weights only.
              </p>
            </div>
            <div className="p-5 bg-background-secondary rounded-lg">
              <h3 className="text-ui font-medium text-primary mb-1">5. Smart Defaults</h3>
              <p className="text-ui text-text-secondary">
                Pre-highlight 90%+ matches. Collapsed details, tap to expand. Auto-rotate ONE voice hint.
              </p>
            </div>
          </div>
        </section>

        {/* V2 Screens */}
        <section className="mb-12">
          <h2 className="text-content font-medium text-text-primary mb-4">
            V2 Screens
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              href="/v2/copilot"
              className="group p-5 bg-white border border-gray-100 rounded-lg hover:border-primary transition-colors duration-fast"
            >
              <h3 className="text-content font-medium text-text-primary group-hover:text-primary">
                Main Panel
              </h3>
              <p className="text-ui text-text-secondary mt-2">
                Giant mic button, single rotating hint, minimal chrome
              </p>
            </Link>
            <Link 
              href="/v2/confirm"
              className="group p-5 bg-white border border-gray-100 rounded-lg hover:border-primary transition-colors duration-fast"
            >
              <h3 className="text-content font-medium text-text-primary group-hover:text-primary">
                Confirmation
              </h3>
              <p className="text-ui text-text-secondary mt-2">
                One-line decision, collapsible details, massive buttons
              </p>
            </Link>
            <Link 
              href="/v2/disambiguate"
              className="group p-5 bg-white border border-gray-100 rounded-lg hover:border-primary transition-colors duration-fast"
            >
              <h3 className="text-content font-medium text-text-primary group-hover:text-primary">
                Disambiguation
              </h3>
              <p className="text-ui text-text-secondary mt-2">
                Big cards, full-width targets, pre-highlighted match
              </p>
            </Link>
            <Link 
              href="/v2/error"
              className="group p-5 bg-white border border-gray-100 rounded-lg hover:border-primary transition-colors duration-fast"
            >
              <h3 className="text-content font-medium text-text-primary group-hover:text-primary">
                Error Recovery
              </h3>
              <p className="text-ui text-text-secondary mt-2">
                Headline is the action, one primary button, no choices
              </p>
            </Link>
            <Link 
              href="/v2/success"
              className="group p-5 bg-white border border-gray-100 rounded-lg hover:border-primary transition-colors duration-fast"
            >
              <h3 className="text-content font-medium text-text-primary group-hover:text-primary">
                Success State
              </h3>
              <p className="text-ui text-text-secondary mt-2">
                Brief confirmation, auto-dismiss, clean
              </p>
            </Link>
          </div>
        </section>

        {/* Visual Specs */}
        <section>
          <h2 className="text-content font-medium text-text-primary mb-4">
            Visual Specifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-background-secondary rounded-lg">
              <h3 className="text-ui font-medium text-text-primary mb-3">Colors</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-[#4a90d9]"></div>
                  <span className="text-ui text-text-secondary">Primary #4a90d9</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-[#10b981]"></div>
                  <span className="text-ui text-text-secondary">Success #10b981</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-[#ef4444]"></div>
                  <span className="text-ui text-text-secondary">Error #ef4444</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-[#1e293b]"></div>
                  <span className="text-ui text-text-secondary">Text #1e293b</span>
                </div>
              </div>
            </div>
            <div className="p-5 bg-background-secondary rounded-lg">
              <h3 className="text-ui font-medium text-text-primary mb-3">Typography</h3>
              <div className="space-y-2 text-ui text-text-secondary">
                <p>Font: System UI stack</p>
                <p>Weights: 400 (normal), 500 (medium)</p>
                <p>Sizes: 14px UI, 16px content, 24px headlines</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
