/* global window */
// Card content + shared references data.

const PALETTES = {
  "meet-the-genre": {
    name: "Magenta + violet",
    swatch: "#c026d3",
    blobs: [
      { color: "#c026d3", pos: { top: "-15%", left: "-10%" }, size: "85%" },
      { color: "#7c3aed", pos: { top: "30%", left: "40%" }, size: "70%" },
      { color: "#f472b6", pos: { top: "55%", left: "-5%" }, size: "55%" },
    ],
  },
  "30-seconds": {
    name: "Cyan + deep blue",
    swatch: "#22d3ee",
    blobs: [
      { color: "#06b6d4", pos: { top: "-10%", left: "-5%" }, size: "75%" },
      { color: "#1e40af", pos: { top: "40%", left: "45%" }, size: "80%" },
      { color: "#67e8f9", pos: { top: "60%", left: "10%" }, size: "50%" },
    ],
  },
  "results-first": {
    name: "Amber + coral",
    swatch: "#fb923c",
    blobs: [
      { color: "#f59e0b", pos: { top: "-10%", left: "-8%" }, size: "80%" },
      { color: "#fb7185", pos: { top: "35%", left: "42%" }, size: "72%" },
      { color: "#fbbf24", pos: { top: "62%", left: "-2%" }, size: "52%" },
    ],
  },
  "hook-and-preview": {
    name: "Emerald + teal",
    swatch: "#34d399",
    blobs: [
      { color: "#10b981", pos: { top: "-12%", left: "-6%" }, size: "78%" },
      { color: "#0d9488", pos: { top: "42%", left: "40%" }, size: "75%" },
      { color: "#6ee7b7", pos: { top: "58%", left: "8%" }, size: "48%" },
    ],
  },
  "scannable-architecture": {
    name: "Indigo + soft pink",
    swatch: "#818cf8",
    blobs: [
      { color: "#4f46e5", pos: { top: "-10%", left: "-8%" }, size: "82%" },
      { color: "#f9a8d4", pos: { top: "38%", left: "44%" }, size: "70%" },
      { color: "#a5b4fc", pos: { top: "60%", left: "5%" }, size: "55%" },
    ],
  },
  "your-turn": {
    name: "Maroon + dark red-orange",
    swatch: "#9a3412",
    blobs: [
      { color: "#7f1d1d", pos: { top: "-15%", left: "-10%" }, size: "82%" },
      { color: "#9a3412", pos: { top: "40%", left: "42%" }, size: "70%" },
      { color: "#b91c1c", pos: { top: "58%", left: "0%" }, size: "60%" },
    ],
  },
};

const CARDS = [
  {
    id: "meet-the-genre",
    num: "01",
    eyebrow: "Identify the genre",
    tag: "Setting",
    title: "Meet the genre.",
    blurb: "A UX case study overview is the opening section of a portfolio project page — closer to an executive summary than an introduction.",
    palette: PALETTES["meet-the-genre"],
    summary: "The UX case study overview is a distinct text-based genre that lives at the top of portfolio project pages. It establishes context, results, and stakes before the process walkthrough begins.",
    detail: {
      explanation: [
        "Designers don't write overviews the way essayists write introductions. An overview is closer to an executive summary, a film logline, or the abstract of a research paper — a self-contained unit that has to do real work on its own.",
        "The setting is specific: a designer's personal portfolio website, sitting inside the broader UX hiring and recruitment ecosystem. The reader is almost always there because of a job — either deciding to hire someone, or studying how someone better than them tells their story.",
        "Recognizing it as a genre, not just a paragraph at the top of a page, is the first move. Genres carry expectations. Break them and your work reads as confused; meet them well and your work reads as fluent.",
      ],
      bulletsHeading: "What lives inside an overview",
      bullets: [
        { b: "A project name", t: "and a one-line frame of the problem." },
        { b: "Role and timeline", t: "so the reader can locate the designer's contribution." },
        { b: "Top-line outcomes", t: "(metrics, ship dates, business impact) presented before the process." },
        { b: "A hero visual", t: "that previews the work without explaining it." },
      ],
      reveal: "Once you see overviews as a genre, you stop asking \"how do I describe my project?\" and start asking \"what does this genre expect, and how do I make my project legible inside it?\"",
      citations: [
        { num: "1", text: "Interaction Design Foundation. \"How to Write Great Case Studies for Your UX Design Portfolio.\" Accessed May 2026." },
        { num: "2", text: "Bawarshi, Anis S., and Mary Jo Reiff. \"Guidelines for Analyzing Genres.\" Genre: An Introduction to History, Theory, Research, and Pedagogy. Parlor Press, 2010." },
      ],
      examples: [
        { label: "Portfolio Example A — overview block", caption: "Designer's portfolio overview showing project name, role, timeline, and a single hero visual stacked above the process narrative." },
      ],
    },
  },
  {
    id: "30-seconds",
    num: "02",
    eyebrow: "Rhetorical situation",
    tag: "Participants",
    title: "Your reader has 30 seconds.",
    blurb: "Recruiters scan, designers read. Both groups want impact fast. The overview is engineered for that gap in attention.",
    palette: PALETTES["30-seconds"],
    summary: "Overviews exist because their two audiences read differently. The genre is calibrated to survive a scan first, and to reward a deeper read second.",
    detail: {
      explanation: [
        "There are two main participant groups. Writers are designers building a portfolio to get hired, promoted, or recognized. Readers split: hiring managers and recruiters who scan in seconds, and fellow designers who read more carefully to learn craft.",
        "The purposes follow from that split. Past the screening pile. Demonstrated competence. A clear sense of impact in the shortest possible time. None of these purposes survive a slow, narrative opener.",
        "Nielsen Norman Group's eyetracking research found that 79% of web users scan, and only 16% read word-by-word. The overview is a load-bearing concession to that finding.",
      ],
      bulletsHeading: "Who's actually in the room",
      bullets: [
        { b: "Recruiters", t: "scanning dozens of portfolios. They want signal, not story." },
        { b: "Hiring managers", t: "deciding whether to schedule an interview. They want a confident summary." },
        { b: "Senior designers", t: "reading carefully to evaluate craft. They want depth — but only after the summary earns it." },
        { b: "Peers and students", t: "reading to learn. They benefit from the same clarity." },
      ],
      reveal: "The patterns in cards three through five all exist because of this card. Once you accept that your reader has thirty seconds, the rest of the genre's choices make sense.",
      citations: [
        { num: "1", text: "Pernice, Kara, et al. How People Read on the Web: The Eyetracking Evidence. Nielsen Norman Group, 2014." },
        { num: "2", text: "Nielsen Norman Group. \"UX Portfolios.\" Accessed May 2026." },
      ],
      examples: [
        { label: "Portfolio Example B — above-the-fold scan", caption: "Heatmap-style placeholder showing where the eye lands first: hero image, then role chunk, then results — text body almost untouched on the first pass." },
      ],
    },
  },
  {
    id: "results-first",
    num: "03",
    eyebrow: "Pattern · Structure",
    tag: "Pattern 1",
    title: "Results before the story.",
    blurb: "The inverted pyramid, borrowed from journalism. Strong overviews lead with outcomes before walking through process.",
    palette: PALETTES["results-first"],
    summary: "Strong overviews put outcomes — metrics, role, impact — at the top, and save the chronological process for the body below.",
    detail: {
      explanation: [
        "Students trained on narrative essays expect to set the scene, walk through a journey, and end with a conclusion. The genre inverts all three. The conclusion comes first.",
        "This is the inverted pyramid, lifted from journalism and web writing. The most important information sits at the top: what was the impact, what was your role, how big a thing was this. The process — discovery, ideation, testing — comes after.",
        "The Interaction Design Foundation recommends including a results summary before the full case study begins, for exactly this reason. <cite>— IxDF</cite>",
      ],
      bulletsHeading: "What \"results first\" actually looks like",
      bullets: [
        { b: "Lead with a number", t: "if you have one. \"Reduced support tickets by 38%.\" Concrete beats abstract." },
        { b: "Name your role", t: "before naming the team. \"Lead designer\" is a result." },
        { b: "Surface the stakes", t: "before the strategy. What changed because the work shipped?" },
        { b: "Keep the process below", t: "It still matters — just not at the top." },
      ],
      reveal: "The genre privileges efficiency over chronology because readers may bounce in seconds. Putting the punchline first is not a stylistic flourish; it's a survival strategy.",
      citations: [
        { num: "1", text: "Interaction Design Foundation. \"How to Write Great Case Studies for Your UX Design Portfolio.\" Accessed May 2026." },
        { num: "2", text: "Pernice, Kara, et al. How People Read on the Web: The Eyetracking Evidence. Nielsen Norman Group, 2014." },
      ],
      examples: [
        { label: "Portfolio Example C — results module", caption: "Three-up metrics row above the process narrative, each metric paired with one sentence of context." },
      ],
    },
  },
  {
    id: "hook-and-preview",
    num: "04",
    eyebrow: "Pattern · Visual rhetoric",
    tag: "Pattern 2",
    title: "The hook and the preview.",
    blurb: "A single striking visual sits above a tight headline. Together they do work text alone can't do fast enough.",
    palette: PALETTES["hook-and-preview"],
    summary: "Overviews lead with a hero image or prototype frame and a tight headline. The visual grabs attention; the headline names the problem.",
    detail: {
      explanation: [
        "Open almost any strong portfolio and the first thing you see is a single, deliberate image: a hero shot of the product, a prototype mid-interaction, a piece of branded artwork. Not three thumbnails. Not a slideshow. One image, doing one job.",
        "Pair the hook with a tight headline. The headline frames the problem in a sentence or fragment — short enough to read in passing, sharp enough to make the reader want the next line.",
        "Visual rhetoric is doing real work here. It's establishing tone, telegraphing craft, and committing to a specific kind of project before a single body paragraph appears.",
      ],
      bulletsHeading: "Anatomy of a hook",
      bullets: [
        { b: "One image", t: "not five. Restraint signals confidence." },
        { b: "A noun-phrase headline", t: "that names the problem or the outcome." },
        { b: "A subhead", t: "of one to two lines — context, not narrative." },
        { b: "Whitespace around it", t: "so the eye can actually rest on what you chose." },
      ],
      reveal: "The genre treats attention as the scarce resource. The hook does work text alone cannot do fast enough — it earns the reader's next three seconds.",
      citations: [
        { num: "1", text: "Nielsen Norman Group. \"UX Portfolios.\" Accessed May 2026." },
      ],
      examples: [
        { label: "Portfolio Example D — hero composition", caption: "Single full-bleed product visual with a short noun-phrase headline beneath. No carousel, no thumbnails." },
      ],
    },
  },
  {
    id: "scannable-architecture",
    num: "05",
    eyebrow: "Pattern · Format + diction",
    tag: "Pattern 3",
    title: "Scannable architecture.",
    blurb: "Sub-headings, chunked sections, bolded keywords, short noun-phrase headers. Every chunk answers one recruiter question.",
    palette: PALETTES["scannable-architecture"],
    summary: "Overviews chunk information into labeled blocks — Role, Timeline, Team, Tools — and write in short noun phrases rather than full sentences.",
    detail: {
      explanation: [
        "The body of an overview is rarely prose. It's a grid of labeled chunks: Role, Timeline, Team, Tools, Platform, Outcome. Each chunk is a tiny answer to a question a recruiter would have asked.",
        "Diction is tight. Noun phrases, not sentences. \"Lead product designer\" instead of \"I served as the lead product designer on this project.\" Bullets get bolded keywords so the eye finds them.",
        "The format is a hybrid. It borrows résumé conventions — chunked credentials — and web-article conventions — scannable headers and bolded keys — at the same time. Both because its readers come from both worlds.",
      ],
      bulletsHeading: "Conventions you'll see again and again",
      bullets: [
        { b: "Labeled chunks", t: "Role · Timeline · Team · Tools · Outcome. Recognizable at a glance." },
        { b: "Noun-phrase headers", t: "\"The problem,\" not \"What was the problem we were trying to solve?\"" },
        { b: "Bolded keys", t: "for product names, metrics, and role titles." },
        { b: "Short paragraphs", t: "Two lines, then air. Anything longer gets skipped." },
      ],
      reveal: "The overview is a hybrid genre because its readers are hybrid. Recruiters bring résumé-reading habits; designers bring web-reading habits; the format is doing both jobs at once.",
      citations: [
        { num: "1", text: "Pernice, Kara, et al. How People Read on the Web: The Eyetracking Evidence. Nielsen Norman Group, 2014." },
        { num: "2", text: "Bickmore, Lisa. \"Genre in the Wild: Understanding Genre Within Rhetorical (Eco)Systems.\" Open English @ SLCC, 2016." },
      ],
      examples: [
        { label: "Portfolio Example E — chunked credentials", caption: "Four-column row: Role, Timeline, Team, Tools. Each column is two lines max, no full sentences." },
      ],
    },
  },
  {
    id: "your-turn",
    num: "06",
    eyebrow: "Advice",
    tag: "Takeaway",
    title: "Your turn: writing your own.",
    blurb: "Five concrete moves for writing an overview that survives a thirty-second scan and rewards a careful read.",
    palette: PALETTES["your-turn"],
    summary: "The patterns above point to a small set of moves. Make them on purpose, and your overview reads as fluent in the genre instead of confused by it.",
    detail: {
      explanation: [
        "If the cards before this one are the analysis, this one is the payoff. Five concrete moves to make when you sit down to write your own overview.",
        "None of these are about being clever. They're about being legible inside a genre whose readers are tired, busy, and looking for a reason to keep reading.",
      ],
      bulletsHeading: "Five moves to make",
      bullets: [
        { b: "Lead with results.", t: "A metric, a role, a shipped outcome. If you can't name one, start there before you start writing." },
        { b: "Design for the scanner first.", t: "Labeled chunks, bolded keys, short noun-phrase headers. Then add prose for the careful reader." },
        { b: "Write half the words.", t: "Then half again. Brevity in this genre reads as confidence." },
        { b: "Treat the hook image as load-bearing.", t: "Pick one. Make it good. It's earning your next three seconds." },
        { b: "Write two versions and layer them.", t: "One for the scanner, one for the reader. Stack the scanner version on top." },
      ],
      reveal: "An overview isn't a creative writing exercise. It's a small, well-designed object that has to survive a glance and reward a read. Both jobs. Same paragraph.",
      citations: [
        { num: "1", text: "Interaction Design Foundation. \"How to Write Great Case Studies for Your UX Design Portfolio.\" Accessed May 2026." },
        { num: "2", text: "Nielsen Norman Group. \"UX Portfolios.\" Accessed May 2026." },
      ],
      examples: [
        { label: "Portfolio Example F — before & after", caption: "Side-by-side placeholder: a verbose narrative opener on the left, a chunked results-first rewrite on the right." },
      ],
    },
  },
];

const REFERENCES = [
  {
    text: "Bawarshi, Anis S., and Mary Jo Reiff. \"Guidelines for Analyzing Genres.\" <em>Genre: An Introduction to History, Theory, Research, and Pedagogy</em>. Parlor Press, 2010.",
    meta: "Scholarly chapter · Course reading",
  },
  {
    text: "Bickmore, Lisa. \"Genre in the Wild: Understanding Genre Within Rhetorical (Eco)Systems.\" <em>Open English @ SLCC</em>, 2016.",
    meta: "Open-access chapter · Course reading",
  },
  {
    text: "Interaction Design Foundation. \"How to Write Great Case Studies for Your UX Design Portfolio.\" <em>interaction-design.org</em>. Accessed May 2026.",
    meta: "Practitioner article · interaction-design.org",
  },
  {
    text: "Nielsen Norman Group. \"UX Portfolios.\" <em>nngroup.com</em>. Accessed May 2026.",
    meta: "Research article · nngroup.com",
  },
  {
    text: "Pernice, Kara, et al. <em>How People Read on the Web: The Eyetracking Evidence</em>. Nielsen Norman Group, 2014.",
    meta: "Research report · NN/g",
  },
];

const PORTFOLIO_EXAMPLES = [
  { id: "A", name: "Portfolio Example A", note: "Placeholder for first analyzed portfolio overview." },
  { id: "B", name: "Portfolio Example B", note: "Placeholder for second analyzed portfolio overview." },
  { id: "C", name: "Portfolio Example C", note: "Placeholder for third analyzed portfolio overview." },
  { id: "D", name: "Portfolio Example D", note: "Optional fourth analyzed portfolio overview." },
];

Object.assign(window, { CARDS, PALETTES, REFERENCES, PORTFOLIO_EXAMPLES });
