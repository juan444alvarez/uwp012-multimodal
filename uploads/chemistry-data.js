/* ============ ARCHETYPE BASE DATA ============ */
const ARCHETYPES = {
  driver:     { code: 'dr', name: 'Driver',     tagline: 'Quantitative, logical',     adj: 'driven',         skillNoun: 'Drive' },
  guardian:   { code: 'gu', name: 'Guardian',   tagline: 'Methodical, reserved',      adj: 'methodical',     skillNoun: 'Rigor' },
  pioneer:    { code: 'pi', name: 'Pioneer',    tagline: 'Imaginative, spontaneous',  adj: 'imaginative',    skillNoun: 'Vision' },
  integrator: { code: 'in', name: 'Integrator', tagline: 'Empathic, diplomatic',      adj: 'empathic',       skillNoun: 'Connection' }
};

const KEYS = ['driver','guardian','pioneer','integrator'];

/* Bar-chart score profile per archetype (out of 100). Primary is highest. */
const BASE_SCORES = {
  driver:     { driver: 70, pioneer: 52, integrator: 42, guardian: 35 },
  guardian:   { guardian: 67, integrator: 54, driver: 46, pioneer: 33 },
  pioneer:    { pioneer: 71, driver: 52, integrator: 48, guardian: 31 },
  integrator: { integrator: 66, guardian: 55, pioneer: 49, driver: 40 }
};

/* ============ TEAM ROSTER ============ */
const TEAM = [
  { id: 'alex',   first: 'Alex',   name: 'Alex M.',   initials: 'AM', archetype: 'driver',     varSeed: 1 },
  { id: 'sam',    first: 'Sam',    name: 'Sam K.',    initials: 'SK', archetype: 'guardian',   varSeed: 2 },
  { id: 'jordan', first: 'Jordan', name: 'Jordan L.', initials: 'JL', archetype: 'pioneer',    varSeed: 3 },
  { id: 'taylor', first: 'Taylor', name: 'Taylor R.', initials: 'TR', archetype: 'integrator', varSeed: 4 },
  { id: 'morgan', first: 'Morgan', name: 'Morgan P.', initials: 'MP', archetype: 'driver',     varSeed: 5 },
  { id: 'casey',  first: 'Casey',  name: 'Casey W.',  initials: 'CW', archetype: 'guardian',   varSeed: 6 },
  { id: 'riley',  first: 'Riley',  name: 'Riley N.',  initials: 'RN', archetype: 'pioneer',    varSeed: 7 },
  { id: 'avery',  first: 'Avery',  name: 'Avery B.',  initials: 'AB', archetype: 'integrator', varSeed: 8 },
  { id: 'drew',   first: 'Drew',   name: 'Drew H.',   initials: 'DH', archetype: 'guardian',   varSeed: 9 },
  { id: 'quinn',  first: 'Quinn',  name: 'Quinn F.',  initials: 'QF', archetype: 'pioneer',    varSeed: 10 }
];

/* ============ VOICE SECTIONS (THEM speaking) ============
   Each "them" archetype has 4 first-person sections.
   Section 4 ("How I work with you") is keyed by YOU archetype.
*/
const VOICE = {
  driver: {
    sections: [
      {
        title: "I'm your teammate.",
        body: "Treat me like a peer, not a finish line. I push hard because I care about shipping, not because I want to win the room. Push back when I'm wrong — I respect it more than agreement."
      },
      {
        title: "Lead with the bottom line.",
        body: "I read fast. Tell me the decision you want before the context — I'll ask for the supporting data if I need it. Long preambles make me suspicious that the answer is weak."
      },
      {
        title: "Disagreement is data, not damage.",
        body: "If I challenge your point, I'm stress-testing it, not you. Hold your ground if you believe it — capitulation tells me you didn't think it through."
      }
    ],
    pairTitle: "Working with you",
    pairBody: {
      driver:     "Two Drivers can sharpen each other or grind. Pick a tiebreaker upfront so we don't both push on the same call. I'll match your pace.",
      guardian:   "I move fast, but I trust your read. When I get ahead of the data, slow me down — I want the rigor, even when I don't ask for it.",
      pioneer:    "Your ideas energize me. I'll channel them into a concrete ask, but help me focus before I cut you off. Land one before chasing the next.",
      integrator: "I sometimes forget the human read. Tell me when I'm steamrolling — directly, not diplomatically. I respect the call-out more than the cushion."
    }
  },
  guardian: {
    sections: [
      {
        title: "I'm your teammate.",
        body: "I'm a peer, not a checkpoint. I care about the work being right because I care about the people relying on it — including you. Pull me in early; my best work is preventive, not reactive."
      },
      {
        title: "I socialize issues to understand them.",
        body: "When I ask questions, I'm not auditing you — I'm building a model. The more context I have, the better I can spot what's missing. Treat my questions as collaboration, not interrogation."
      },
      {
        title: "Recognition matters.",
        body: "I won't ask for credit, but I notice when careful work goes unseen. A short acknowledgment lands harder for me than a public moment. Small, specific, in private."
      }
    ],
    pairTitle: "Working with you",
    pairBody: {
      driver:     "Your speed is useful, but I need a beat to verify before I co-sign. Give me the headline, then the data — and a window to push back. I'll move fast once I trust the shape.",
      guardian:   "We both like the slow lane. Two Guardians can stall on consensus — name a tiebreaker upfront and a deadline for when we commit, even if the data isn't perfect.",
      pioneer:    "Your ideas are bigger than my comfort. Bring me one well-formed proposal at a time, not a brainstorm — I'll be a better collaborator than skeptic.",
      integrator: "You read the room; I read the risk. Loop me in early on people questions and I'll surface the structural ones. We make each other less brittle."
    }
  },
  pioneer: {
    sections: [
      {
        title: "I'm your teammate.",
        body: "I bring options. Sometimes more than you want. Don't read my tangents as scatter — they're the way I find the thing worth building. Pull me back when you've heard enough."
      },
      {
        title: "Ideas are how I think out loud.",
        body: "When I float something half-formed, I'm not committing — I'm exploring. Engage with it before you evaluate it. The third or fourth idea is usually the one worth keeping."
      },
      {
        title: "I energize, sometimes too much.",
        body: "I'll match the room's energy and then some. If that's too much, just say so — I'd rather know I'm overshooting than wonder why you're quiet. I won't take it personally."
      }
    ],
    pairTitle: "Working with you",
    pairBody: {
      driver:     "I'll bring options; you'll cut to one. That works — just give me thirty seconds to land an idea before you make the call. Sometimes the messy version contains the answer.",
      guardian:   "I know my ideas can feel like noise. I'll bring you fewer, more-formed proposals — meet me with structured questions and we'll both move further than apart.",
      pioneer:    "Two Pioneers means the deck is full of possibility and the calendar is full of nothing shipped. Pick a north star with me and resist the next shiny thing.",
      integrator: "You ground my ideas in people; I keep yours from getting too cautious. Tell me when I'm running ahead — I'd rather pace with you than win alone."
    }
  },
  integrator: {
    sections: [
      {
        title: "I'm your teammate.",
        body: "I pay attention to how the team is doing, not just what it's producing. If I'm checking in on you, it's because I see something — take the question at face value."
      },
      {
        title: "Consensus is the long game.",
        body: "I'll push for inclusion because decisions land better when people feel heard. But I'm not avoiding the call — I'm building the conditions for it to stick."
      },
      {
        title: "Trust compounds.",
        body: "Small, consistent reliability is how I read you. Show up when you said you would; tell me when you can't. I'll do the same. That's the foundation everything else sits on."
      }
    ],
    pairTitle: "Working with you",
    pairBody: {
      driver:     "Your directness is a feature; just give me a beat to bring others along. I can move fast when the team is in formation — and slow when they're not.",
      guardian:   "We're both careful — but you're careful about evidence, I'm careful about people. Loop me in on the social read and I'll handle the warm-up while you handle the rigor.",
      pioneer:    "Your energy needs a landing strip. I'll help your ideas connect with the team — bring me in early, not after the room cooled off.",
      integrator: "Two Integrators can over-accommodate. Be honest with me about your real take; harmony only matters when it's earned."
    }
  }
};

/* ============ ENGAGE / LOSE (advice TO you, ABOUT them) ============
   Indexed [you][them] — what YOU do to engage/lose THEM.
*/
const ENGAGE = {
  driver: {
    driver: [
      { title: "Bring a position, not a question.", body: "Drivers respect peers who arrive with a clear take and the case to back it. Open with the decision you want, then defend it." },
      { title: "Pick the tiebreaker upfront.", body: "Two Drivers without a defined decision-maker grind. Name it before the meeting and you'll move twice as fast inside it." },
      { title: "Argue the work, not the person.", body: "Hot disagreement is how Drivers stress-test. Stay in the substance and they'll thank you for the sharpening — even when they lose the point." }
    ],
    guardian: [
      { title: "Lead with the headline, back with the data.", body: "Tell them your conclusion first, then walk them through the evidence. Guardians can absorb a strong claim if the proof is visible." },
      { title: "Show your homework.", body: "Anticipate the risk questions and answer them before they're asked. They'll trust your speed once they see your rigor." },
      { title: "Build in a verify window.", body: "Don't ask for a yes on the spot. Give them a beat to pressure-test — they'll come back faster than you'd expect." }
    ],
    pioneer: [
      { title: "Match their energy first.", body: "Open with the upside before the constraint. A Pioneer who feels your enthusiasm will engage twice as deeply when you bring them back to ground." },
      { title: "Channel ideas into one ask.", body: "Don't shut down tangents — funnel them. Restate their best riff as a concrete proposal and they'll feel heard and pointed at once." },
      { title: "Stay open to the third option.", body: "Pioneers often arrive at the right answer after they've burned through two wrong ones. Hold the spec loosely for the first ten minutes." }
    ],
    integrator: [
      { title: "Acknowledge the relationship first.", body: "A line of warmth before the ask isn't padding — it's the trust deposit Integrators need to engage fully with the content." },
      { title: "Frame the human stake.", body: "Tell them who's affected and how. Outcomes land harder when you name the people inside them." },
      { title: "Ask for their read on the room.", body: "Integrators carry information about team state that Drivers miss. Pull it out of them before you finalize the call." }
    ]
  },
  guardian: {
    driver: [
      { title: "Lead with the punchline.", body: "Drivers want the conclusion in the first sentence. Give them the headline; let them ask for the evidence." },
      { title: "Be prepared to defend in real time.", body: "If you bring data, expect challenge. Stand behind your numbers — Drivers test conviction, not just accuracy." },
      { title: "Offer a fast, contained next step.", body: "Don't leave a Driver with 'I'll get back to you.' Name what you'll verify and when — concrete deadline, contained scope." }
    ],
    guardian: [
      { title: "Align on assumptions early.", body: "Two Guardians can spend the meeting verifying each other's verification. Surface your priors first and you'll move faster than either of you alone." },
      { title: "Name a tiebreaker before you need one.", body: "Both seeking consensus stalls the call. Pick who decides if the data is split — and stick to it." },
      { title: "Trade rigor for a deadline.", body: "Set a 'good-enough by Friday' commitment. The risk of an imperfect decision usually beats the risk of no decision at all." }
    ],
    pioneer: [
      { title: "Hold space for the unstructured part.", body: "Don't cut a Pioneer off mid-riff. Their best ideas surface after a few false starts — let the messy version play out." },
      { title: "Offer to handle the follow-through.", body: "Pioneers generate; Guardians ship. Make that split explicit and you'll get the best of both without the friction." },
      { title: "Translate enthusiasm into checkpoints.", body: "Convert their energy into specific milestones. They'll feel supported, not slowed down." }
    ],
    integrator: [
      { title: "Build trust through small commitments.", body: "Integrators read consistency, not credentials. Three small things delivered on time matter more than one big proposal." },
      { title: "Share your thinking, not just your output.", body: "Walk them through your reasoning. They want to understand you, not just review your work." },
      { title: "Surface team impact early.", body: "Frame your work in terms of who it helps. They'll co-own it from there." }
    ]
  },
  pioneer: {
    driver: [
      { title: "Lead with the bottom line.", body: "Open with the decision you want and the number that proves it. Drivers will engage with the wild parts once the spine is solid." },
      { title: "Channel ideas into a single ask.", body: "Don't pitch the whole brainstorm. Funnel your three favorites into one clean recommendation and offer the rest as reading." },
      { title: "Bring the risk frame, not just the upside.", body: "Drivers respect Pioneers who've already thought through the downside. Name it before they have to." }
    ],
    guardian: [
      { title: "Provide structure before pitching.", body: "A Guardian needs to see the frame before the idea fits. Open with the problem, scope, and constraints — then the leap." },
      { title: "Slow the cadence.", body: "Pause where you'd usually press on. Guardians process out loud less than you do — give them silence to think." },
      { title: "Bring proof, not just promise.", body: "One reference case beats three speculative scenarios. Anchor your vision to something real and they'll meet you halfway." }
    ],
    pioneer: [
      { title: "Pick a north star before brainstorming.", body: "Two Pioneers means infinite options. Name what you're optimizing for and put the rest in the parking lot." },
      { title: "Schedule decision moments.", body: "Brainstorms feel productive but don't ship. Block time for choosing, not just generating." },
      { title: "Hold each other accountable to the last idea.", body: "Resist the urge to abandon a good thing for a shinier one. Ask each other: are we improving or escaping?" }
    ],
    integrator: [
      { title: "Slow down enough to connect.", body: "Don't launch into the idea. A real check-in costs ninety seconds and earns you their full attention for the next thirty." },
      { title: "Frame ideas in people-terms.", body: "An Integrator engages with 'who this helps' before 'what this is.' Lead with the human, not the concept." },
      { title: "Ask how they're feeling, not just thinking.", body: "Integrators carry the team's emotional weather. Make space for it and they'll bring the rest of the team with them." }
    ]
  },
  integrator: {
    driver: [
      { title: "Skip the warm-up.", body: "Open with the ask. Drivers read efficiency as respect — small talk before the point reads as hedging." },
      { title: "Be direct, not diplomatic.", body: "If you have a hard read, say it plainly. They'll trust the soft version less than the honest one." },
      { title: "Lead with outcomes, not feelings.", body: "Frame your read on the team as a business risk, not a vibe. Same content, language they engage with." }
    ],
    guardian: [
      { title: "Present clear options.", body: "Don't pitch a single path. Lay out two or three with tradeoffs and let them weigh in — they engage with structure, not enthusiasm." },
      { title: "Build in think time.", body: "Don't push for a same-meeting decision. Send the proposal ahead and let them sit with it." },
      { title: "Reliability over warmth.", body: "Your warmth lands, but consistency lands deeper. Show up on the small things and you'll have their trust for the big ones." }
    ],
    pioneer: [
      { title: "Match their enthusiasm, then focus.", body: "Don't dampen the energy — direct it. Mirror their excitement for thirty seconds, then gently bring them back to the question." },
      { title: "Help them land an idea.", body: "Pioneers chase the next thing. Be the one who says 'this one — let's finish it.' They'll thank you in retrospect." },
      { title: "Translate their ideas to the team.", body: "You hear what they mean. Be the bridge between their pitch and the rest of the room — they'll lean on you for it." }
    ],
    integrator: [
      { title: "Don't co-defer the call.", body: "Two Integrators can spend a meeting making room and never make a decision. Take turns being the one who says 'let's commit.'" },
      { title: "Use shared empathy to mediate, not avoid.", body: "When friction shows up on the team, lean in together. Don't both rely on the other to address it." },
      { title: "Be honest about your real take.", body: "Diplomatic vagueness reads as alignment when it isn't. Tell them where you actually land." }
    ]
  }
};

const LOSE = {
  driver: {
    driver: [
      { title: "Hedge.", body: "If you walk in equivocating, they'll fill the vacuum with their own answer. Bring a position even if you're 60% sure." },
      { title: "Take disagreement personally.", body: "When they push back, they're sharpening the work. Treat it as an attack and you'll lose the working relationship along with the point." },
      { title: "Stall on the call.", body: "'Let me get back to you' from another Driver reads as ducking. Decide in the room or commit to a hard deadline." }
    ],
    guardian: [
      { title: "Demand a decision on the spot.", body: "Guardians can't validate fast. Pressing for yes-or-yes in the meeting will get you no, or a soft yes they later renege on." },
      { title: "Skip the supporting data.", body: "'Trust me on this' is the fastest way to lose a Guardian. They need to see the floor before they step on it." },
      { title: "Dismiss their risk questions.", body: "When they probe edge cases, that's the engagement, not the obstacle. Brushing past it tells them you haven't thought hard enough." }
    ],
    pioneer: [
      { title: "Steamroll their tangents.", body: "Cutting off the riff cuts off the idea. Pioneers shut down fast when they feel managed." },
      { title: "Anchor too hard on the spec.", body: "If you treat the first version of the plan as final, you'll miss the better version they were about to land." },
      { title: "Be all process, no upside.", body: "Pioneers tune out timeline talk that isn't tethered to what's exciting. Frame the work, not just the milestones." }
    ],
    integrator: [
      { title: "Skip the warm-up.", body: "Launching straight into the ask reads as transactional. Sixty seconds of human connection earns you the rest of the meeting." },
      { title: "Pitch on logic alone.", body: "Humanize your proposals by naming who's affected and how. A spreadsheet without a face won't move them." },
      { title: "Ignore the team read.", body: "If they tell you something feels off, take it seriously even when the data doesn't show it yet. Their early signal is usually right." }
    ]
  },
  guardian: {
    driver: [
      { title: "Bury the headline.", body: "If a Driver has to wait three slides for the point, they've already decided you don't have one. Start with the answer." },
      { title: "Treat their pushback as disrespect.", body: "Drivers test the work by attacking it. Stand your ground on the substance — folding loses them faster than fighting back." },
      { title: "Over-qualify your conclusions.", body: "'It might be that possibly, in some cases…' reads as no conviction. State the call, then footnote the caveats." }
    ],
    guardian: [
      { title: "Wait for full certainty.", body: "Two Guardians waiting for perfect data wait forever. Commit at 'good enough' or you'll both miss the window." },
      { title: "Re-litigate settled assumptions.", body: "If you agreed on the foundation last week, don't re-open it this week. Trade verification for momentum." },
      { title: "Talk only in caveats.", body: "Caveat-stacking is how Guardians sound thorough to themselves and indecisive to each other. Pick a call and stand on it." }
    ],
    pioneer: [
      { title: "Kill the idea before it's formed.", body: "Pioneers think out loud. If you evaluate the half-formed version, they'll stop bringing you the next one." },
      { title: "Demand structure first.", body: "Asking for a Gantt chart before they've finished the sentence shuts down the part of the conversation you actually need." },
      { title: "Frame everything as risk.", body: "Constant 'what could go wrong' reads as 'I don't believe in this.' Mix in the upside — Pioneers need to feel the why before they care about the how." }
    ],
    integrator: [
      { title: "Stay all-business.", body: "If every interaction is content with no warmth, Integrators read you as cold. A small personal check-in shifts the whole working dynamic." },
      { title: "Hide your reasoning.", body: "Delivering conclusions without the process feels opaque. Walk them through how you got there — they want to see you, not just your output." },
      { title: "Decide without consulting them.", body: "Integrators carry context about the team that doesn't show up in your data. Cutting them out costs you signal you needed." }
    ]
  },
  pioneer: {
    driver: [
      { title: "Bury the ask in the brainstorm.", body: "A Driver doesn't want to wade through three ideas to find your recommendation. Lead with one, footnote the rest." },
      { title: "Romance the upside, skip the math.", body: "Vision without numbers reads as a pitch deck. Anchor at least one claim to a measurable outcome." },
      { title: "Take their cuts personally.", body: "When they shrink your scope, they're betting on you, not against you. Argue the scope on merits — sulking loses them." }
    ],
    guardian: [
      { title: "Pitch before you scope.", body: "Hitting a Guardian with a fully-formed dream before you've named the problem reads as missing context. Frame, then leap." },
      { title: "Run past their questions.", body: "When they probe, that's them engaging. Slowing down to answer is how the idea gets built — not a delay." },
      { title: "Change the idea every meeting.", body: "Guardians track. If the proposal mutates each week, they stop investing in any version of it. Lock the spine, vary the surface." }
    ],
    pioneer: [
      { title: "Brainstorm without deciding.", body: "Two Pioneers can produce a hundred ideas and ship zero. Schedule the decide-or-die conversation and protect it." },
      { title: "Abandon the last good thing.", body: "Switching to a shinier idea two weeks before the deadline loses both ideas. Stay with the boring middle." },
      { title: "Both go after the shiny object.", body: "If you both bite on the new thing, the team has no anchor. Designate who holds the original goal." }
    ],
    integrator: [
      { title: "Launch in without checking in.", body: "Skipping the human moment makes the idea feel like a transaction. Sixty seconds of connection earns you their full engagement." },
      { title: "Pitch the concept, ignore the people.", body: "If you only talk about the what, an Integrator can't help you map it onto who. Frame the human stake." },
      { title: "Push past their hesitation.", body: "If they pause on something, the pause is the data. Roll over it and you'll lose their trust, not just their input." }
    ]
  },
  integrator: {
    driver: [
      { title: "Soft-pedal the ask.", body: "Diplomatic phrasing makes a Driver wonder what you really mean. Just say it." },
      { title: "Lead with the human stake.", body: "Save the emotional frame for after the outcome. Drivers tune out 'how it feels' until they understand 'what it costs.'" },
      { title: "Mediate when they want resolution.", body: "If a decision is needed and you keep building consensus, they'll move without you. Name the call when the call is ready." }
    ],
    guardian: [
      { title: "Push for a decision in the meeting.", body: "Guardians need to sit with material. Demanding a yes on the spot will get you a no or a reversal." },
      { title: "Be vague about scope.", body: "'We'll figure it out as we go' is comfort to you and dread to a Guardian. Tighten the scope before you ask." },
      { title: "Rely on warmth alone.", body: "Charm earns the first meeting; consistency earns the rest. If you're not reliable in the small things, the rapport stops working." }
    ],
    pioneer: [
      { title: "Manage the energy down.", body: "If you dampen a Pioneer's excitement, they'll find another room. Channel it instead — your job is the funnel, not the brake." },
      { title: "Treat ideas as commitments.", body: "When they float something, they're exploring, not promising. Holding them to the half-formed version costs you the formed one." },
      { title: "Be the polite no.", body: "Polite vagueness reads as lack of belief. If you don't think the idea works, tell them — they'd rather know." }
    ],
    integrator: [
      { title: "Both wait for the other to call it.", body: "Two Integrators can spend an hour making space. Take turns being the one who says 'we're deciding now.'" },
      { title: "Use agreement to avoid the issue.", body: "When you both agree to revisit later, the issue compounds. Lean into the friction in the moment." },
      { title: "Trade honesty for harmony.", body: "If you smooth over your real take to keep things easy, they'll do the same. Now neither of you knows where the other actually stands." }
    ]
  }
};

/* ============ BUILD (skill development band) ============
   Build [their] skills as a [you] — two of YOUR traits combine into a behavior tuned to THEM.
*/
const BUILD = {
  driver: {
    driver: {
      yourStrength: { title: "Conviction", body: "You bring a clear position and defend it well." },
      theirStrength: { title: "Tempo", body: "You both run the same fast clock — use it." },
      result: { title: "Channel conviction into a clean tiebreaker.", body: "Two Drivers without a decision protocol fight the same hill. Pair your conviction with a pre-agreed tiebreaker and turn collisions into momentum." }
    },
    guardian: {
      yourStrength: { title: "Decisiveness", body: "You move when others would deliberate." },
      theirStrength: { title: "Speed", body: "You absorb information fast and act on it." },
      result: { title: "Channel Decisiveness into Calibrated Patience.", body: "Pair your speed with a built-in verify window. A Driver who pauses for evidence reads to a Guardian as the most trustworthy kind of fast." }
    },
    pioneer: {
      yourStrength: { title: "Focus", body: "You cut through optionality to the next step." },
      theirStrength: { title: "Directness", body: "You name what you want without flourish." },
      result: { title: "Channel Focus into Generative Pressure.", body: "Pair your directness with one open question per meeting. A Driver who asks 'what else could work?' unlocks the Pioneer's best — without losing the timeline." }
    },
    integrator: {
      yourStrength: { title: "Clarity", body: "You make outcomes legible and concrete." },
      theirStrength: { title: "Conviction", body: "You stand behind your read of the data." },
      result: { title: "Channel Clarity into Connection.", body: "Pair your conviction with one minute of human read at the start of each meeting. An Integrator who sees you care about people engages with everything else — including the hard call." }
    }
  },
  guardian: {
    driver: {
      yourStrength: { title: "Rigor", body: "Your work is thorough and defensible." },
      theirStrength: { title: "Composure", body: "You don't rattle when challenged." },
      result: { title: "Channel Rigor into Punchline-First Delivery.", body: "Pair your composure with the conclusion up front. A Guardian who leads with the headline gets Driver speed without sacrificing depth." }
    },
    guardian: {
      yourStrength: { title: "Verification", body: "You sanity-check what others assume." },
      theirStrength: { title: "Consistency", body: "You don't move on shaky ground." },
      result: { title: "Channel Verification into a Shared Decision Floor.", body: "Pair your rigor with a pre-set 'good enough' bar. Two Guardians who agree on the threshold ship together instead of stalling together." }
    },
    pioneer: {
      yourStrength: { title: "Pattern Recognition", body: "You see what's worked and what hasn't." },
      theirStrength: { title: "Reliability", body: "You finish the things you start." },
      result: { title: "Channel Pattern Recognition into Idea Curation.", body: "Pair your reliability with playful 'what if' framing. A Guardian who can riff for ten minutes before evaluating gets the Pioneer's best work — and keeps the structure intact." }
    },
    integrator: {
      yourStrength: { title: "Trust", body: "You deliver what you said you would." },
      theirStrength: { title: "Care", body: "You think about the people behind the work." },
      result: { title: "Channel Trust into Visible Reasoning.", body: "Pair your reliability with sharing the 'why' behind your work. An Integrator who sees your thinking — not just your output — co-owns the result." }
    }
  },
  pioneer: {
    driver: {
      yourStrength: { title: "Vision", body: "You see paths others haven't mapped." },
      theirStrength: { title: "Energy", body: "You bring momentum into the room." },
      result: { title: "Channel Vision into a Single Clean Ask.", body: "Pair your energy with one funneled recommendation. A Pioneer who lands one idea cleanly earns the right to bring the next three." }
    },
    guardian: {
      yourStrength: { title: "Curiosity", body: "You ask the questions that open new ground." },
      theirStrength: { title: "Range", body: "You hold the big picture and the small one." },
      result: { title: "Channel Curiosity into Connection.", body: "Pair detail-oriented curiosity with structured framing. Combining a Pioneer's range with a Guardian's rigor mirrors their methodical nature — and earns deep buy-in." }
    },
    pioneer: {
      yourStrength: { title: "Generativity", body: "You produce options others wouldn't think of." },
      theirStrength: { title: "Optimism", body: "You believe the next thing will work." },
      result: { title: "Channel Generativity into Decision Discipline.", body: "Pair your optimism with a 'choose by Friday' commitment. Two Pioneers who block decide-time ship together instead of brainstorming together forever." }
    },
    integrator: {
      yourStrength: { title: "Openness", body: "You take in inputs from everywhere." },
      theirStrength: { title: "Energy", body: "Your enthusiasm is contagious." },
      result: { title: "Channel Openness into Grounded Pitching.", body: "Pair your energy with a sixty-second check-in before any pitch. A Pioneer who connects first lands ideas that an Integrator carries to the team." }
    }
  },
  integrator: {
    driver: {
      yourStrength: { title: "Read", body: "You pick up on what isn't being said." },
      theirStrength: { title: "Diplomacy", body: "You translate hard truths into useful ones." },
      result: { title: "Channel Read into Direct Delivery.", body: "Pair your read of the room with the directness Drivers respect. An Integrator who skips the hedge and names the call earns the kind of credibility consensus can't buy." }
    },
    guardian: {
      yourStrength: { title: "Empathy", body: "You see the people inside the process." },
      theirStrength: { title: "Patience", body: "You're willing to do the slow work of trust." },
      result: { title: "Channel Empathy into Quiet Consistency.", body: "Pair your warmth with rigorous reliability. An Integrator who delivers on the small things builds trust with a Guardian no amount of charm can." }
    },
    pioneer: {
      yourStrength: { title: "Mediation", body: "You bridge between people and ideas." },
      theirStrength: { title: "Curiosity", body: "You meet new ideas with interest first." },
      result: { title: "Channel Mediation into Idea Translation.", body: "Pair your curiosity with translation muscle. An Integrator who turns a Pioneer's pitch into team-readable language is the difference between an idea heard and an idea executed." }
    },
    integrator: {
      yourStrength: { title: "Care", body: "You hold the team's wellbeing as a priority." },
      theirStrength: { title: "Trust", body: "People feel safe being honest with you." },
      result: { title: "Channel Care into Decisive Mediation.", body: "Pair your trust with the willingness to make the call. Two Integrators who don't outsource the hard call to each other build the kind of safety that actually moves." }
    }
  }
};
