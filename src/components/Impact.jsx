function Impact() {
  return (
    <section className="relative py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/30 rounded-full">
          <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
            Impact
          </span>
        </div>
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Impact and <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Ongoing Development</span>
        </h2>
        
        {/* Content */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-12">
          <p>
            For people who cannot or do not yet want to enter formal therapy, a well-run peer community offers an alternative way to process appearance-related experiences: it can turn private shame into shared language, transform "I'm overreacting" into "this is a pattern other people see too," and provide scripts and strategies that can be tested in the real world (Smit et al.).
          </p>
          
          <p>
            At the same time, this platform is not a clinical intervention. It cannot replace structured treatment for severe anxiety or depression, and it should not present itself as doing so. A long-term version of the project would involve collaborating with clinicians and researchers who study online interventions to refine prompts, content warnings, and escalation pathways for users who may need more intensive support (Smit et al.).
          </p>
        </div>
        
        {/* Key Outcomes */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-colors">
            <h3 className="text-xl font-semibold text-cyan-200 mb-3">Transform Isolation</h3>
            <p className="text-gray-400">Private shame becomes shared language and collective understanding</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/5 to-green-500/5 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-colors">
            <h3 className="text-xl font-semibold text-blue-200 mb-3">Validate Experiences</h3>
            <p className="text-gray-400">"I'm overreacting" transforms into "this is a pattern others recognize too"</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/5 to-cyan-500/5 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-colors">
            <h3 className="text-xl font-semibold text-green-200 mb-3">Practical Tools</h3>
            <p className="text-gray-400">Scripts and strategies that can be tested in real-world situations</p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-500/5 to-green-500/5 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-colors">
            <h3 className="text-xl font-semibold text-cyan-200 mb-3">Bridge to Care</h3>
            <p className="text-gray-400">Support during periods when formal help isn't accessible</p>
          </div>
        </div>
        
        {/* Ongoing Development */}
        <div className="bg-gradient-to-br from-cyan-500/5 to-green-500/5 border border-cyan-500/20 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Continuous Improvement</h3>
          <p className="text-gray-300 leading-relaxed">
            The site is meant to stay experimental and responsive: moderation rules, reflection prompts, and interface choices would be updated based on what users report as helpful or harmful, as well as on outcome measures like engagement, self-reported confidence in social situations, and perceived sense of community. In this way, the project frames "judgment-free" not as a static promise, but as a standard the community continually works toward through design, enforcement, and collective learning (Wachs).
          </p>
        </div>

        {/* Visual with actual image */}
        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/5 to-green-500/5 border border-cyan-500/20">
          <img 
            src="https://images.unsplash.com/photo-1667669290669-aa37f48728ed?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Stepping stones symbolism"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Impact;
