function Introduction() {
  return (
    <section className="relative py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Label with subtle gradient */}
        <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
            Introduction
          </span>
        </div>
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Why This Platform <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Should Exist</span>
        </h2>
        
        {/* Content */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            People with visible facial differences often move through the world knowing that strangers will react to their appearance before anything is said. Those snap judgments can shape job interviews, casual conversations, bus rides, and everyday errands in ways that are exhausting and hard to explain to others. When support is expensive, hard to reach, or emotionally intimidating, many people are left trying to manage this constant pressure alone (Norman).
          </p>
          
          <p>
            This project proposes a moderated, semi-anonymous online peer community for people with disfigurement. The site is meant to sit between "no help at all" and formal therapy: a place to tell the truth about daily experiences, learn specific coping strategies, and feel less alone, without having to walk into a clinic or reveal one's full identity (Smit et al.).
          </p>
        </div>
        
        {/* Visual with actual image */}
        <div className="mt-12 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20">
          <img 
            src="https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Silhouette of people gathered together against blue sky"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
