export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Score Changelog Entries<br />
          <span className="text-[#58a6ff]">by User Impact</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Paste your changelog, get AI-powered impact scores and categories instantly.
          Prioritize what matters most to your users — no manual triage needed.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $14/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">For product managers &amp; developer relations teams</p>
      </section>

      {/* How it works */}
      <section className="mb-24">
        <h2 className="text-xl font-semibold text-white text-center mb-10">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Paste Changelog", desc: "Drop in raw changelog text from any source — GitHub, Notion, Jira, or plain text." },
            { step: "2", title: "AI Scores Entries", desc: "Each item is analyzed and rated by user impact: Critical, High, Medium, or Low." },
            { step: "3", title: "Export Summary", desc: "Download a prioritized summary ready for customer emails, release notes, or Slack." }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-2xl font-bold mb-3">{step}</div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-xl font-semibold text-white text-center mb-10">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$14</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited changelog analyses",
              "AI impact scoring (Critical → Low)",
              "Category tagging per entry",
              "Exportable prioritized summaries",
              "Email-ready customer communication drafts"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "What changelog formats are supported?",
              a: "Any plain text format works — Markdown, bullet lists, numbered entries, or raw paragraphs. The AI parses structure automatically."
            },
            {
              q: "How is impact score determined?",
              a: "The AI evaluates each entry based on user-facing visibility, frequency of use, and potential disruption, then assigns Critical, High, Medium, or Low."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Changelog Impact Scorer. All rights reserved.
      </footer>
    </main>
  )
}
