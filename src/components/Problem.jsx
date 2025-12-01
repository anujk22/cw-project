function Problem() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-pink-500/10 to-red-500/10 border border-pink-500/30 rounded-full">
          <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
            The Problem
          </span>
        </div>
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Everyday Harm and <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">Limited Support</span>
        </h2>
        
        {/* Content */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            Many people are referred to therapy when their appearance-related distress becomes overwhelming, but cost, location, and the vulnerability of talking face-to-face keep a lot of them from ever making that first appointment. Losing the ability to "blend in" can make every social interaction feel like a test, so even seeking help starts to feel like another risk instead of a relief (Norman).
          </p>
          
          <p>
            Research on ableist microaggressions shows that people with visible differences are routinely read as angry, drunk, unstable, or morally suspect based purely on how their faces move or sit at rest. These patterns are especially sharp in conditions like acquired synkinesis, where involuntary facial movements are misread as hostility or disrespect, and that misreading then gets blamed on the person instead of the impairment. Any online space meant to offer support has to recognize this background harm and make sure it is not quietly reproduced inside the community (Heung et al.).
          </p>
        </div>
        
        {/* Key Issues Highlight */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-pink-500/5 to-red-500/5 border border-pink-500/20 rounded-xl p-6 backdrop-blur-sm hover:border-pink-500/40 transition-colors">
            <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-pink-500/20 to-red-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Cost Barriers</h3>
            <p className="text-gray-400">Therapy and formal support are often financially out of reach</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/5 to-yellow-500/5 border border-orange-500/20 rounded-xl p-6 backdrop-blur-sm hover:border-orange-500/40 transition-colors">
            <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Access Issues</h3>
            <p className="text-gray-400">Geographic distance and scheduling make help hard to reach</p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-500/5 to-green-500/5 border border-yellow-500/20 rounded-xl p-6 backdrop-blur-sm hover:border-yellow-500/40 transition-colors">
            <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-yellow-500/20 to-green-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Vulnerability</h3>
            <p className="text-gray-400">Face-to-face help requires exposing oneself to more judgment</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problem;
