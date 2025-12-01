function Design() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
            Design & Safeguards
          </span>
        </div>
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Balancing Openness and <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Protection</span>
        </h2>
        
        {/* Intro */}
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          The site's structure would be built around three layers of protection that work together to serve the community.
        </p>
        
        {/* Three Layers */}
        <div className="space-y-8 mb-12">
          {/* Layer 1 */}
          <div className="relative pl-8 border-l-4 border-pink-500/50">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">
              1
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Pre-posting filters</h3>
            <p className="text-gray-300 leading-relaxed">
              Automated filters flag or block slurs, appearance-shaming language, and obvious harassment before a post or comment goes live. This reduces the chance that the most direct forms of abuse ever reach their target (Dobson).
            </p>
          </div>
          
          {/* Layer 2 */}
          <div className="relative pl-8 border-l-4 border-orange-500/50">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white text-sm font-bold">
              2
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Explicit community norms</h3>
            <p className="text-gray-300 leading-relaxed">
              The site publishes clear expectations around how to talk about appearance, disability, and distress. Users agree to these norms during onboarding; examples and "do/don't" language make the expectations concrete instead of vague (Dobson).
            </p>
          </div>
          
          {/* Layer 3 */}
          <div className="relative pl-8 border-l-4 border-purple-500/50">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
              3
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Reputation-based moderators</h3>
            <p className="text-gray-300 leading-relaxed">
              Moderators are drawn from active community members who have consistently modeled empathy and careful reading of context. They review reports, step into heated threads, and make removal or ban decisions using public guidelines so enforcement feels predictable instead of arbitrary (Wachs).
            </p>
          </div>
        </div>
        
        {/* Anonymity Tradeoff */}
        <div className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">The Anonymity Tradeoff</h3>
              <p className="text-gray-300 leading-relaxed">
                Because anonymity can make it easier to harm others, the platform is honest about the tradeoff: privacy is preserved through pseudonyms and limited data collection, but accountability is sustained through report tools, escalating consequences, and, in severe cases, permanent removal (Dobson; Wachs).
              </p>
            </div>
          </div>
        </div>
        
        {/* Visual with actual image */}
        <div className="mt-12 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20">
          <img 
            src="https://images.unsplash.com/photo-1763944101661-2908ade7e077?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="White mask resting on dead branches"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Design;
