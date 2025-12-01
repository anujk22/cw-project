function Solution() {
  return (
    <section className="relative py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-full">
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
            The Solution
          </span>
        </div>
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          A Semi-Anonymous, Moderated <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Peer Community</span>
        </h2>
        
        {/* Intro */}
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          The core idea is an online platform where people with visible differences can post about specific situations, receive responses from others with similar experiences, and gradually build a toolkit of language and strategies for difficult moments.
        </p>
        
        {/* Key Functions */}
        <div className="space-y-6 mb-12">
          <div className="flex gap-4 items-start bg-gradient-to-r from-pink-500/5 to-orange-500/5 border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/40 transition-colors">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-orange-500/20 flex items-center justify-center mt-1">
              <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Low-barrier access</h3>
              <p className="text-gray-400">
                Users can sign up under a pseudonym and participate without revealing legal names or identifiable details, lowering the emotional entry cost while still allowing some continuity over time.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start bg-gradient-to-r from-orange-500/5 to-yellow-500/5 border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/40 transition-colors">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center mt-1">
              <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Experience-centered posts</h3>
              <p className="text-gray-400">
                Members narrate concrete situations—such as a job interview, a medical waiting room, or a commute—rather than speaking only in abstractions about "confidence" or "self-esteem."
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start bg-gradient-to-r from-yellow-500/5 to-green-500/5 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-colors">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500/20 to-green-500/20 flex items-center justify-center mt-1">
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Practical skill-sharing</h3>
              <p className="text-gray-400">
                Replies focus on things like sample phrases, rehearsal techniques for anticipated questions, and ways to redirect or shut down intrusive comments without putting all the blame back on the person targeted.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start bg-gradient-to-r from-green-500/5 to-cyan-500/5 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-colors">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-cyan-500/20 flex items-center justify-center mt-1">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Guided reflection tools</h3>
              <p className="text-gray-400">
                Optional prompts help users move beyond venting into naming what happened, how it landed emotionally, and what they might want to try if a similar moment comes up again.
              </p>
            </div>
          </div>
        </div>
        
        {/* Moderation Philosophy */}
        <div className="bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 border border-cyan-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Moderation Philosophy</h3>
          <p className="text-gray-300 leading-relaxed">
            The moderation philosophy is guided by a question: how can a community spread knowledge and awareness without accidentally feeding new stereotypes or reinforcing harmful narratives about visibly different bodies? The platform's answer is to treat moderation as an ongoing practice, not a one-time rules page (Dobson; Wachs).
          </p>
        </div>
      </div>
    </section>
  );
}

export default Solution;
