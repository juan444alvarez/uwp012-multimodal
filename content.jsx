/* global window */
// Card content + shared references data.

const PALETTES = {
  "meet-the-genre": {
    name: "",
    swatch: "#c026d3",
    blobs: [
      { color: "#c026d3", pos: { top: "-15%", left: "-10%" }, size: "85%" },
      { color: "#7c3aed", pos: { top: "30%", left: "40%" }, size: "70%" },
      { color: "#f472b6", pos: { top: "55%", left: "-5%" }, size: "55%" },
    ],
  },
  "30-seconds": {
    name: "",
    swatch: "#22d3ee",
    blobs: [
      { color: "#06b6d4", pos: { top: "-10%", left: "-5%" }, size: "75%" },
      { color: "#1e40af", pos: { top: "40%", left: "45%" }, size: "80%" },
      { color: "#67e8f9", pos: { top: "60%", left: "10%" }, size: "50%" },
    ],
  },
  "results-first": {
    name: "",
    swatch: "#fb923c",
    blobs: [
      { color: "#f59e0b", pos: { top: "-10%", left: "-8%" }, size: "80%" },
      { color: "#fb7185", pos: { top: "35%", left: "42%" }, size: "72%" },
      { color: "#fbbf24", pos: { top: "62%", left: "-2%" }, size: "52%" },
    ],
  },
  "hook-and-preview": {
    name: "",
    swatch: "#34d399",
    blobs: [
      { color: "#10b981", pos: { top: "-12%", left: "-6%" }, size: "78%" },
      { color: "#0d9488", pos: { top: "42%", left: "40%" }, size: "75%" },
      { color: "#6ee7b7", pos: { top: "58%", left: "8%" }, size: "48%" },
    ],
  },
  "your-turn": {
    name: "",
    swatch: "#9a3412",
    blobs: [
      { color: "#7f1d1d", pos: { top: "-15%", left: "-10%" }, size: "82%" },
      { color: "#db60bc", pos: { top: "40%", left: "42%" }, size: "70%" },
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
    blurb: "A UX case study overview is the opening section of a portfolio project page. It is closer to an executive summary than an introduction.",
    palette: PALETTES["meet-the-genre"],
    summary: "A UX case study overview is the opening section of a portfolio project page. It is closer to an executive summary than an introduction.",
    detail: {
      explanationHeading: "What an overview actually is",
      examplesHeading: "In a real portfolio",
      explanation: [
        "Every UX portfolio project page opens with an overview. It's usually the first screen you see when you click into a designer's project: a headline, a hero image, a few tight blocks of metadata, and a short paragraph or two summarizing what the project was and what it accomplished.",
        "The overview is doing the heaviest rhetorical lifting on the page. It tells a recruiter whether the project is worth their attention, signals the designer's seniority, and frames everything that follows. The full case study below it can run thousands of words, but the overview decides whether those words ever get read.",
        "Think of an overview as something closer to an executive summary, or the abstract of a research paper. They communicate the idea of something longer in a small amount of space, so a reader can walk away with the main idea even if they never read past the opening. IxDF describes it as \"an introduction, or 'exposition,' that sets the scene for the rest of the case study\"<sup>1</sup>. The overview sets up the project, names the stakes, and gives the reader enough to decide whether to keep going.",
      ],
      bulletsHeading: "What lives inside an overview",
      bullets: [
        { b: "A project name", t: "and a short frame of the problem." },
        { b: "Role", t: "so the reader can locate the designer's contribution." },
        { b: "Top-line outcomes", t: "(metrics, ship dates, business impact) presented before the process." },
        { b: "A main visual or text block", t: "that previews the work without explaining it." },
      ],
      reveal: "Once you see overviews as a genre, you stop asking \"how do I describe my project?\" and start asking \"what does this genre expect, and how do I make my project legible inside it?\"",
      citations: [
        { num: "1", text: "Teo, Y. S. and Newhook, J. (2024, November 1). How to Write UX/UI Design Case Studies That Boost Your Portfolio and Get You Hired. IxDF - Interaction Design Foundation. https://ixdf.org/literature/article/how-to-write-great-case-studies-for-your-ux-design-portfolio" },
        { num: "2", text: "https://jasonspielman.com/notebooklm" },
        { num: "3", text: "https://www.elainewu.design/mongodb-v4" },
      ],
      examples: [
        { label: "Portfolio Example A — overview block",
          image: "img/example-a.png",
          caption: "Designer's portfolio overview showing project name, role, and metadata in a single hero section stacked above the process narrative. From: https://jasonspielman.com/notebooklm" },
        { label: "Portfolio Example A — overview block",
          image: "img/example-b.png",
          caption: "Portfolio overview for MongoDB's AI Response project. Brand identity, hero image, and labeled metadata sit above the process write-up. From: https://www.elainewu.design/mongodb-v4" },
      ],
    },
  },
  {
  id: "30-seconds",
  num: "02",
  eyebrow: "Rhetorical situation",
  tag: "Participants",
  title: "Read while hiring.",
  blurb: "Overviews are shaped by who reads them, how fast, and why. The overview is engineered for short windows of attention.",
  palette: PALETTES["30-seconds"],
  summary: "Overviews are shaped by who reads them, how fast, and why. The overview is engineered for short windows of attention.",
  detail: {
    explanationHeading: "What is the situation?",
    explanation: [
      "The situation is hiring. Portfolio sites work as professional infrastructure inside a competitive labor market. The UX industry treats them as the primary evidence of a designer's skill, taste, and judgment. Readers reach the page through a hiring channel of some kind. Whether its through an application, link, or search. The page is read on the job, by someone whose own time is being measured.",
    ],

    extraSections: [
      {
        heading: "Participants",
        paragraphs: [
          "Rachel Krause at the Nielsen Norman Group names three participant reading groups. \"The 'users' of your portfolio will be hiring managers, recruiters, or fellow UX professionals.\"<sup>1</sup>. Each group reads with a different motive, so your presentation style needs to address their individual priorities.",
        ],
        bullets: [
          { b: "Recruiters are filtering.", t: "They are looking for reasons to advance a candidate to the next stage, or reasons to cut them. Most overviews they open will not get a second look." },
          { b: "Hiring managers are evaluating.", t: "They want to know whether the work matches the role, whether the designer worked at the right level, and whether the impact is real." },
          { b: "Fellow designers are studying.", t: "They read more slowly, often to learn how other designers write about their own work, or to assess a peer." },
        ],
      },
      {
    heading: "Purpose",
    paragraphs: [
      "Readers come to the page to make a decision. The Nielsen Norman Group's eyetracking research found that \"79 percent of our test users always scanned any new page they came across; only 16 percent read word-by-word\"<sup>2</sup>. Scanning happens because the brain conserves attention by default. When it lands on an unfamiliar page, it sweeps the surface first, focusing only on elements that catch the eye. This is the standard mode for reading anything on a screen.",
    ],
    examples: [
    { label: "Hero shot", image: "img/example-c.png", width: "50%", caption: "Eyetracking heatmap of a typical web page. (Nielsen Norman Group)" },
  ],
  trailingParagraphs: [
    "The eyetracking data shows the pattern clearly. Eyes start at the top-left of the page, drift across the first line, drop down a few lines, and scan down the left margin. Headlines, opening words of paragraphs, and visually distinct elements get attention. The middle of paragraphs gets ignored.",
    "For hiring contexts, the pattern intensifies. Krause is specific about hiring readers. \"Very rarely will hiring managers take the time to read your entire portfolio word for word\"<sup>1</sup>. A recruiter looking at fifty portfolios in a day has built habits to extract a verdict in seconds. Skimming is how they keep up with the volume.",
  ],
  },
    ],

    reveal: "The reader's purpose is to extract a verdict quickly. The writer's purpose is to make that verdict favorable. To do that, the writing has to be \"universal and relatable, so busy hiring managers can immediately understand what they're reading\" ³. Think about how to communicate competence in the time it takes someone to skim.",
    citations: [
      { num: "1", text: "Krause, Rachel. \“5 Steps to Creating a UX-Design Portfolio.\” Nielsen Norman Group, 4 Aug. 2019, www.nngroup.com/articles/ux-design-portfolios/." },
      { num: "2", text: "Pernice, Kara, et al. How People Read on the Web: The Eyetracking Evidence. Nielsen Norman Group, 2014." },
      { num: "3", text: "Teo, Y. S. and Newhook, J. (2024, November 1). How to Write UX/UI Design Case Studies That Boost Your Portfolio and Get You Hired. IxDF - Interaction Design Foundation. https://ixdf.org/literature/article/how-to-write-great-case-studies-for-your-ux-design-portfolio" },
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
    summary: "The inverted pyramid, borrowed from journalism. Strong overviews lead with outcomes before walking through process.",
detail: {
    explanationHeading: "The pattern expanded:",
    explanation: [
      "Students trained on narrative essays expect to set the scene, walk through a journey, and end with a conclusion. This genre inverts the structure so that the conclusion comes first. This is the inverted pyramid, lifted from journalism and web writing. The most important information sits at the top: what was the impact, what was your role, how big a thing was this. The process (discovery, ideation, testing) comes after.",
    ],

    extraSections: [
      {
    heading: "The inverted pyramid",
    paragraphs: [
      "Picture a triangle balanced on its point. The broad facts sit at the top. Smaller and more specific details stack below, narrowing as they go down. The shape gives the structure its name.",
    ],
    examples: [
    { label: "Hero shot", image: "img/example-d.jpg", width: "80%", caption: "The inverted pyramid structure used in journalism. Broadest facts at the top, narrowing details below. (NMU Writing Center)" },
  ],
  trailingParagraphs: [
    "The pyramid is built for readers who do not finish what they start. Some read the first sentence, others read the first paragraph, and only a few read the whole thing. The structure works for all of them. NN/g writes that with this style, \"readers can stop reading at any point on the page and still come away with the main point\"<sup>1</sup>.",
    "Academic writing works differently. An academic paper saves its conclusion for the end, so a reader who quits halfway through misses the point entirely. UX overviews follow the journalism model instead, which is imporant because a recruiter often makes a decision on the role and impact alone. The pyramid keeps the overview useful no matter where the reader stops..",
  ],
  },
    ],

    reveal: "The genre treats reading order as a hiring tool. By putting the verdict first, the writer is doing two things at once. They are giving the scanner everything they need to make a fast judgment. Secondly, they are signaling confidence in the work itself, since only a designer who is sure of their outcomes leads with them.",
    citations: [
      { num: "1", text: "Schade, Amy. “Inverted Pyramid: Writing for Comprehension.” Nielsen Norman Group, 12 Feb. 2018, www.nngroup.com/articles/inverted-pyramid/. " },
      { num: "2", text: "“News Article Structure.” NMU Writing Center, Northern Michigan University, nmu.edu/writingcenter/inverted-pyramid. " },
    ],
  },
},  {
    id: "hook-and-preview",
    num: "04",
    eyebrow: "Pattern · Visual rhetoric",
    tag: "Pattern 2",
    title: "Hook and preview.",
    blurb: "A single striking visual sits above a tight headline. Together, they do work that text alone can't do fast enough and engage readers.",
    palette: PALETTES["hook-and-preview"],
    summary: "A single striking visual sits above a tight headline. Together, they do work that text alone can't do fast enough and engage readers.",
    detail: {
      explanation: [
        "Open almost any strong portfolio and the first thing you see is a single, deliberate image: a hero shot of the product, a prototype mid-interaction, or piece of branded artwork.",
        "Pair the hook with a tight headline. The headline frames the problem in a sentence or fragment in a way that is short enough to read in passing, and sharp enough to make the reader want the next line.",
        "Visual rhetoric is doing a lot of work here. The image establishes tone, signals craft, and communicates the project's visual identity before a single paragraph is read. Huei-Hsin Wang at NN/g writes that \"the content above the fold serves as a gatekeeper, determining whether users will engage further with your site\"<sup>1</sup>. For a UX overview, the hook is that gatekeeper. If the visual fails, the writing may not get a chance to recover the reader's attention.",
      ],
  extraSections: [
      {
    heading: "In practice",
    paragraphs: [
      "The hook for this Handshake project does multiple jobs as a main section. The headline names the problem and the outcome at the same time. \"Redesigning the weekly job digest to increase student engagement by ~22%\" tells the reader what was being designed and what changed because of it, all in a single line. A recruiter who reads only this headline still walks away with the project's main claim.",
    ],
    examples: [
    { label: "Hero shot", image: "img/example-e.png", caption: "Handshake case study portfolio hook. Headline, labeled metadata, and hero image stack into a single overview block. From: https://www.justinmasondesign.com/projects/handshake-email" },
  ],
  trailingParagraphs: [
    "Below the headline, the role, context, and timeline sit in a clean horizontal grid. These three fields answer the questions a recruiter asks first: who did this work, in what setting, and over how long. The reader can scan them in under 5 seconds.",
    "Visual evidence has to land first because the reader may never get to the words. Kathryn Whitenton at NN/g writes that \"compelling images have a unique ability to inspire and engage your audience\"<sup>2</sup>, drawing on Don Norman's work on visceral response.",
    "By the time the reader reaches the first paragraph of writing, the image has primed them at the visceral level. Don Norman describes this as the fastest layer of cognitive processing, the one that \"makes rapid judgments of what is good or bad, safe or dangerous\"<sup>3</sup>. The visceral response forms in milliseconds and then shapes the slower layers above it (behavioral and reflective). In Norman's model, critical thinking cannot bypass the first impression. It can only try to bias what comes next.",
    "For a hiring manager scanning dozens of portfolios in a day, the consequences are direct. A positive visceral response buys the writing time to make its case. A negative one means the reader is reading against their own first impression, and that is hard work most will not bother to do.",
  ],
  
  },
    ],
      reveal: "The genre doesn't tolerate slow-burning tension or a chronological reveal of the solution. A successful overview compresses the entire narrative arc (the action taken and the impact) into a single, punchy headline. It acknowledges that the reader might only read that one line, so that line must contain the ultimate proof of value.",
      citations: [
        { num: "1", text: "Wang, Huei-Hsin. “Homepage Design: 5 Fundamental Principles.” Nielsen Norman Group, 15 Mar. 2024, www.nngroup.com/articles/homepage-design-principles/." },
        { num: "2", text: "Whitenton, Kathryn. “Image-Focused Design: Is Bigger Better?” Nielsen Norman Group, 28 Sept. 2014, www.nngroup.com/articles/image-focused-design/." },
        { num: "3", text: "Norman, Donald. (2002). Emotion & Design: Attractive Things Work Better. Interactions Magazine. 9. 36-42. 10.1145/543434.543435." },
        { num: "4", text: "https://www.justinmasondesign.com/projects/handshake-email" },
      ],
    },
  },
  {
    id: "your-turn",
    num: "05",
    eyebrow: "Advice",
    tag: "Takeaway",
    title: "Writing your own.",
    blurb: "What the rhetorical situation and recurring features point to when you sit down to write your own.",
    palette: PALETTES["your-turn"],
    summary: "What the rhetorical situation and recurring features point to when you sit down to write your own.",
    detail: {
      explanationHeading: "From analysis to advice",
      explanation: [
        "The earlier cards described the rhetorical situation and the recurring features that situation produced. The guidelines below all serve the same purpose: keeping the writing legible to a reader who is tired, busy, and looking for a reason to keep reading.",
        "What follows is a short, ordered checklist of advice to keep in mind when you write your own overview. Each one names the card it follows from, so you can trace back the logic. The order matters: start at the top, work down, and don't discard what might feel obvious (those are usually the ones designers get wrong!)",
      ],
      bulletsHeading: "Guidelines, and what they follow from",
      bullets: [
        { b: "Borrow existing conventions.", t: "Card 1 framed the overview as closer to an executive summary than an essay. Think of it as a hybrid that draws on résumé and web-article conventions at once. Reach for those conventions deliberately, because your reader has both habits." },
        { b: "Write for the reader you actually have.", t: "Card 2 named the split: recruiters scanning in thirty seconds, designers reading more carefully later. Stack a scanner-friendly summary on top, a richer prose layer below. The page should reward both, but never make the scanner work for the basics." },
        { b: "Lead with the result.", t: "Card 3 established the inverted pyramid. Write the punchline first (a metric, a shipped outcome, a clear role) before any process narrative. Readers who don't find the result up top usually won't stay long enough to find it lower down." },
        { b: "The hook image is load-bearing.", t: "Card 4 frames visual rhetoric as one of the most crisitcal aspects of the overview. One deliberate image sets tone and frames the work before the reader has read a single sentence." },
      ],
      reveal: "Good advice for any genre comes from looking at who the genre is for and what those readers reward. The overview is no different, aim to write toward the reader you actually have, not an imaginary audience.",
      citations: [
        { num: "", text: "" },
      ],
    },
  },
];

const REFERENCES = [
  {
    text: "Krause, Rachel. \"5 Steps to Creating a UX-Design Portfolio.\" <em>Nielsen Norman Group</em>, 4 Aug. 2019, nngroup.com/articles/ux-design-portfolios/.",
  },
  {
    text: "\"News Article Structure.\" <em>NMU Writing Center</em>, Northern Michigan University, nmu.edu/writingcenter/inverted-pyramid.",
  },
  {
    text: "Norman, Donald. \"Emotion & Design: Attractive Things Work Better.\" <em>Interactions</em>, vol. 9, no. 4, 2002, pp. 36–42, doi.org/10.1145/543434.543435.",
  },
  {
    text: "Pernice, Kara, et al. <em>How People Read on the Web: The Eyetracking Evidence</em>. Nielsen Norman Group, 2014.",
  },
  {
    text: "Schade, Amy. \"Inverted Pyramid: Writing for Comprehension.\" <em>Nielsen Norman Group</em>, 12 Feb. 2018, nngroup.com/articles/inverted-pyramid/.",
  },
  {
    text: "Teo, Y. S., and J. Newhook. \"How to Write UX/UI Design Case Studies That Boost Your Portfolio and Get You Hired.\" <em>Interaction Design Foundation</em>, 1 Nov. 2024, ixdf.org/literature/article/how-to-write-great-case-studies-for-your-ux-design-portfolio.",
  },
  {
    text: "Wang, Huei-Hsin. \"Homepage Design: 5 Fundamental Principles.\" <em>Nielsen Norman Group</em>, 15 Mar. 2024, nngroup.com/articles/homepage-design-principles/.",
  },
  {
    text: "Whitenton, Kathryn. \"Image-Focused Design: Is Bigger Better?\" <em>Nielsen Norman Group</em>, 28 Sept. 2014, nngroup.com/articles/image-focused-design/.",
  },
];

const PORTFOLIO_EXAMPLES = [
  { id: "A", name: "Elaine Wu - MongoDB", note: "https://www.elainewu.design/mongodb-v4" },
  { id: "B", name: "Jason Spielman - NotebookLM", note: "https://jasonspielman.com/notebooklm" },
  { id: "C", name: "Justin Mason - Handshake", note: "https://justinmason.com/projects/handshake-email" },
];

Object.assign(window, { CARDS, PALETTES, REFERENCES, PORTFOLIO_EXAMPLES });
