import { X, Linkedin, Github, Mail, MessageSquare, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">

        <header className="text-center mb-20">
          <div className="-mx-6 mb-10 bg-slate-200 px-6 py-6 shadow-sm">
            <h1 className="text-6xl md:text-5xl font-bold text-slate-700 tracking-tight">
              CogniStark
            </h1>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.3em] text-slate-600">
              Nicko Stark
            </p>
          </div>
          <div className="mx-auto mb-12 grid gap-6 text-left md:grid-cols-1">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 md:p-10 shadow-lg ring-1 ring-slate-100 md:flex md:items-center md:justify-between md:gap-10">
              <div className="space-y-4 md:max-w-xl">
                <div className="flex items-start gap-4">
                  <span className="mt-1 h-12 w-1 rounded-full bg-[#800020]" aria-hidden />
                  <p className="text-2xl md:text-3xl font-semibold text-slate-900 leading-tight uppercase tracking-[0.05em]">
                    How much is inefficiency costing you per month?
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="h-1 flex-1 rounded-full bg-slate-200" aria-hidden />
                  <span className="h-1 w-10 rounded-full bg-slate-300" aria-hidden />
                </div>
                {/* <p className="text-sm text-slate-600 leading-relaxed">
                  Get a ballpark of the resources you lose each month to unnoticed workflow drag
                </p> */}
              </div>
              <div className="mt-6 flex items-center justify-center md:mt-0 md:min-w-[220px]">
                <a
                  href="https://calendly.com/cognistark/20min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#800020] px-6 py-5 text-center text-l font-semibold uppercase tracking-[0.2em] text-white shadow-sm transition hover:bg-slate-700">
                  Get an estimate
                </a>
              </div>
            </div>
            {/* <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Subscribe to my newsletter
              </p>
              <a
                href="https://nickostark.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-sm transition hover:bg-[#660019]"
              >
                Subscribe
              </a>
            </div> */}
          </div>

        </header>

        <main className="space-y-16">
          <section className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200">
            
            <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.4em] text-slate-400">
              <p className="text-xl font-semibold text-slate-900 mb-6">What I do At CogniStark</p>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              I help small and mid-sized businesses figure out where AI can actually make a
              difference in their operations, whether that means finding the right solution and setting it
              up, or fixing what’s not working in their current AI systems. There are 2 steps to this:
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 text-slate-500">
              <div className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-4 py-2 text-slate-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#800020]" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-800">
                  Discover
                </span>
                <span className="text-sm md:text-base font-medium text-slate-700">
                  Identify AI-shaped gaps
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.4em] text-slate-400">
                <span className="h-px w-16 bg-slate-200" />
                ↓↓↓↓↓↓
                <span className="h-px w-16 bg-slate-200" />
              </div>
              <div className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-4 py-2 text-slate-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#800020]" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-800">
                  Build
                </span>
                <span className="text-sm md:text-base font-medium text-slate-700">
                  Prototype → Deploy → Maintain
                </span>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200">
          
            <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.4em] text-slate-400">
              <p className="text-xl font-semibold text-slate-900 mb-6">What I Write in CogniStark</p>
            </div>
            <div className="mx-auto max-w-2xl text-center space-y-4">
              <p className="text-lg text-slate-800 leading-relaxed font-semibold">
                How we should think with AI, not through it.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Get bi-weekly breakdowns on AI, automation, and critical thinking
              </p>
              <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-[#800020] font-semibold">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-slate-700 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#800020]" />
                  Actionable
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-slate-700 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#800020]" />
                  2x a month
                </span>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <a
                href="https://nickostark.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#800020] px-6 py-5 text-center text-l font-semibold uppercase tracking-[0.2em] text-white shadow-sm transition hover:bg-slate-700"
              >
                Subscribe
              </a>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200">
            
            <div className="flex items-center justify-center gap-2 text-xs font-medium tracking-[0.2em] text-slate-400">
                <p className="text-xl font-semibold text-slate-900 mb-6">Connect with me/Follow my work</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <a
                href="https://nickostark.substack.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all group">
                <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors">
                  <Mail className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Newsletter (Substack)</div>
                  <div className="text-sm text-slate-600">Publish at most 2x a month</div>
                </div>
              </a>

              <a
                href="https://x.com/CogniStark"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors">
                  <X className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">X (Twitter)</div>
                  <div className="text-sm text-slate-600">Daily thoughts and updates</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/nicko-stark-37a688394"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors">
                  <Linkedin className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">LinkedIn</div>
                  <div className="text-sm text-slate-600">Professional network</div>
                </div>
              </a>

              <a
                href="https://github.com/nickostark"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors">
                  <Github className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">GitHub</div>
                  <div className="text-sm text-slate-600">Code and projects</div>
                </div>
              </a>

              <a
                href="https://senja.io/p/nickostark/y6CFdg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors">
                  <MessageSquare className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">What People Are Saying</div>
                  <div className="text-sm text-slate-600">Testimonials & reviews</div>
                </div>
              </a>

              <a
                href="https://huggingface.co/nickostark"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors">
                  <Sparkles className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Hugging Face</div>
                  <div className="text-sm text-slate-600">Models, demos, and spaces</div>
                </div>
              </a>
            </div>
          </section>

          {/* <section className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200">
            
            <div className="flex items-center justify-center gap-2 text-xs font-medium tracking-[0.1em] text-slate-400">
                  <p className="text-xl font-semibold text-slate-900 mb-6">A bit about me</p>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed">
              ...
            </p>
          </section> */}
        </main>

        <footer className="mt-16 text-center text-slate-500 text-sm">
          <p>© 2025 CogniStark. Building bridges between AI and business.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
