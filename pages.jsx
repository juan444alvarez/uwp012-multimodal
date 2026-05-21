/* global React, ReactDOM, window */
const { useEffect, useState, useRef, useCallback } = React;

// ============================================================
// Home
// ============================================================
function HomePage({ navigate }) {
  const { CARDS, CarouselCard, ArrowLeft, ArrowRight } = window;
  const carouselRef = useRef(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const total = CARDS.length;

  // padding-left of carousel (must match `pl-` / `scroll-pl-` utilities)
  const getPad = () => (window.innerWidth >= 768 ? 40 : 22);

  // Track scroll position to update active + progress
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const cards = Array.from(el.querySelectorAll(".card"));
        if (!cards.length) return;
        const pad = getPad();
        const containerLeft = el.getBoundingClientRect().left;
        let bestIdx = 0;
        let bestDist = Infinity;
        cards.forEach((c, i) => {
          const d = Math.abs(c.getBoundingClientRect().left - containerLeft - pad);
          if (d < bestDist) { bestDist = d; bestIdx = i; }
        });
        setActive(bestIdx);
        const maxScroll = el.scrollWidth - el.clientWidth;
        const ratio = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
        setProgress(ratio);
      });
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => { el.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  // Drag-to-pan on desktop (pointer events; 8px threshold)
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const THRESHOLD = 8;
    let pointerId = null;
    let startX = 0;
    let startScroll = 0;
    let dragging = false;

    const onDown = (e) => {
      if (e.pointerType === "touch") return;
      if (e.button !== 0) return;
      pointerId = e.pointerId;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      dragging = false;
    };
    const onMove = (e) => {
      if (pointerId === null || e.pointerId !== pointerId) return;
      const walk = startX - e.clientX;
      if (!dragging && Math.abs(walk) > THRESHOLD) {
        dragging = true;
        el.classList.add("is-grabbing");
        try { el.setPointerCapture(pointerId); } catch (_) {}
      }
      if (dragging) {
        el.scrollLeft = startScroll + walk;
        e.preventDefault();
      }
    };
    const finish = () => {
      if (pointerId === null) return;
      const wasDragging = dragging;
      try { el.releasePointerCapture(pointerId); } catch (_) {}
      pointerId = null;
      dragging = false;
      el.classList.remove("is-grabbing");
      if (wasDragging) {
        const block = (ev) => { ev.stopPropagation(); ev.preventDefault(); };
        el.addEventListener("click", block, { capture: true, once: true });
        setTimeout(() => el.removeEventListener("click", block, { capture: true }), 0);
      }
    };
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", finish);
    el.addEventListener("pointercancel", finish);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", finish);
      el.removeEventListener("pointercancel", finish);
    };
  }, []);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowRight") { e.preventDefault(); scrollTo(Math.min(active + 1, total - 1)); }
      if (e.key === "ArrowLeft") { e.preventDefault(); scrollTo(Math.max(active - 1, 0)); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, total]);

  const scrollTo = (i) => {
    const el = carouselRef.current;
    if (!el) return;
    const target = el.querySelectorAll(".card")[i];
    if (target) {
      el.scrollTo({ left: target.offsetLeft - getPad(), behavior: "smooth" });
    }
  };

  return (
    <div className="pt-20 pb-20" data-screen-label="Home">
      {/* meta header */}
      <div className="px-[22px] md:px-10 flex items-end justify-between gap-8 flex-wrap mb-9">
        <div className="animate-fade-up">
          <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink-muted">
            UWP012 A01 / Multimodal Genre Analysis
          </div>
          <h1 className="mt-3.5 mb-0 font-medium text-ink-strong tracking-tightest leading-[1.02] max-w-[12ch] text-[clamp(38px,5.4vw,72px)]">
            The UX case study{" "}
            <em className="font-serif italic font-normal tracking-[-0.02em]">overview</em>,
            read as a genre.
          </h1>
        </div>
        <p className="max-w-[38ch] text-ink-muted text-[15px] leading-[1.55] animate-fade-up delay-1">
          Six cards on a single genre:{" "}
          <strong className="text-ink font-medium">the overview section</strong>{" "}
          at the top of UX portfolio case studies. What it is, who it's for,
          why it looks the way it does, and how to write your own.
        </p>
      </div>

      {/* controls row */}
      <div className="flex items-center gap-3.5 px-[22px] md:px-10 mb-[22px] animate-fade-up delay-2">
        <div className="flex-auto mr-1.5 h-px bg-white/[0.08] rounded-[1px] overflow-hidden relative" aria-hidden="true">
          <div
            className="absolute inset-0 w-full bg-ink-strong origin-left transition-transform duration-[220ms] ease-out-quart"
            style={{ transform: `scaleX(${progress})` }}
          ></div>
        </div>
        <button
          className="w-[38px] h-[38px] rounded-full border border-white/[0.08] inline-flex items-center justify-center text-ink transition-[border-color,background-color,opacity] duration-150 hover:border-white/[0.22] hover:bg-white/[0.03] disabled:opacity-[0.35] disabled:cursor-not-allowed"
          onClick={() => scrollTo(Math.max(active - 1, 0))}
          aria-label="Previous card"
          disabled={active === 0}
        >
          <ArrowLeft />
        </button>
        <button
          className="w-[38px] h-[38px] rounded-full border border-white/[0.08] inline-flex items-center justify-center text-ink transition-[border-color,background-color,opacity] duration-150 hover:border-white/[0.22] hover:bg-white/[0.03] disabled:opacity-[0.35] disabled:cursor-not-allowed"
          onClick={() => scrollTo(Math.min(active + 1, total - 1))}
          aria-label="Next card"
          disabled={active === total - 1}
        >
          <ArrowRight />
        </button>
      </div>

      {/* carousel */}
      <div
        ref={carouselRef}
        className="flex gap-[22px] px-[22px] md:px-10 pt-2 pb-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide animate-fade-up delay-3 scroll-pl-[22px] md:scroll-pl-10"
        role="list"
        aria-label="Genre patterns"
      >
        {CARDS.map((c, i) => (
          <CarouselCard
            key={c.id}
            card={c}
            idx={i}
            total={total}
            onOpen={(id) => navigate(`/patterns/${id}`)}
          />
        ))}
      </div>
    </div>
  );
}

window.HomePage = HomePage;

// ============================================================
// Detail (per-card) page
// ============================================================

// shared atoms used across pages
const monoEyebrow = "font-mono text-[11px] tracking-mono uppercase";
const monoEyebrowWide = "font-mono text-[11px] tracking-monoWide uppercase";
const sectionH2 = monoEyebrow + " text-ink-muted m-0 mb-[22px] font-medium";

function BackLink({ navigate, children = "Back to overview" }) {
  const { ArrowLeft } = window;
  return (
    <a
      className="inline-flex items-center gap-2 font-mono text-[11px] tracking-mono uppercase text-white mb-9 transition-opacity duration-150 hover:opacity-75 group/back animate-fade-up"
      href="#/"
      onClick={(e) => { e.preventDefault(); navigate("/"); }}
    >
      <ArrowLeft size={14} className="transition-transform duration-200 group-hover/back:-translate-x-[3px]" />
      {children}
    </a>
  );
}

function DetailPage({ cardId, navigate }) {
  const { CARDS, ExamplePlaceholder, RevealBox, ArrowLeft, ArrowRight, HTMLProse } = window;
  const idx = CARDS.findIndex((c) => c.id === cardId);
  const card = CARDS[idx];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [cardId]);

  if (!card) {
    return (
      <div className="max-w-read mx-auto px-[22px] md:px-8 pt-20 pb-32" data-screen-label="Not Found">
        <h1 className="text-[44px] font-medium text-ink-strong tracking-tightest leading-[1.05] m-0 mb-4">
          Not found.
        </h1>
        <p className="text-[17px] text-ink-muted m-0 mb-14 max-w-[56ch] leading-[1.55]">
          The pattern you're looking for doesn't exist.
        </p>
        <BackLink navigate={navigate} />
      </div>
    );
  }

  const prev = idx > 0 ? CARDS[idx - 1] : null;
  const next = idx < CARDS.length - 1 ? CARDS[idx + 1] : null;
  const d = card.detail;

  return (
    <div
      key={cardId}
      className="relative min-h-[calc(100vh-64px)]"
      data-screen-label={`Detail ${card.num}`}
    >
      {/* gradient wash at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[520px] pointer-events-none z-0 overflow-hidden
                   after:content-[''] after:absolute after:inset-0
                   after:bg-[linear-gradient(180deg,rgba(10,10,10,0)_30%,rgba(10,10,10,0.85)_80%,#0a0a0a_100%)]"
        aria-hidden="true"
      >
        {card.palette.blobs.map((b, i) => (
          <div
            key={i}
            className="absolute w-[70%] h-full opacity-[0.55]"
            style={{
              background: b.color,
              top: i === 0 ? "-30%" : i === 1 ? "-10%" : "10%",
              left: i === 0 ? "-15%" : i === 1 ? "30%" : "65%",
              filter: "blur(80px) saturate(1.15)",
            }}
          />
        ))}
      </div>

      <article className="relative z-[1] max-w-read mx-auto px-[22px] md:px-8 pt-20 pb-32">
        <BackLink navigate={navigate} />

        <div className={monoEyebrowWide + " text-white mb-[18px] flex items-center gap-2.5 animate-fade-up delay-1"}>
          <span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ background: card.palette.swatch }}
          ></span>
          {card.eyebrow} &nbsp;·&nbsp; Card {card.num}
        </div>

        <h1 className="m-0 font-medium text-ink-strong tracking-tightest leading-[1.04] [text-wrap:balance] max-w-[18ch] text-[clamp(34px,4.8vw,56px)] animate-fade-up delay-1">
          {card.title}
        </h1>
        <p className="mt-5 text-[19px] leading-[1.5] text-ink max-w-[56ch] [text-wrap:pretty] tracking-[-0.01em] animate-fade-up delay-2">
          {card.summary}
        </p>

        <div className="h-px bg-white/[0.08] my-10"></div>

        <section className="animate-fade-up">
          <h2 className={sectionH2}>{d.explanationHeading || "The pattern, expanded"}</h2>
          <div className="prose">
            {d.explanation.map((p, i) => (
              <HTMLProse key={i} html={p} />
            ))}
          </div>
        </section>

        {d.contextParagraphs && (
  <>
    <div className="h-px bg-white/[0.08] my-10"></div>
    <section className="animate-fade-up">
      <h2 className={sectionH2}>{d.contextHeading || "Context"}</h2>
      <div className="prose">
        {d.contextParagraphs.map((p, i) => (
          <HTMLProse key={i} html={p} />
        ))}
      </div>
    </section>
  </>
)}

        <div className="h-px bg-white/[0.08] my-10"></div>

        

        <section>
          <h2 className={sectionH2}>{d.examplesHeading || "How it looks in the wild"}</h2>
          {d.examples.map((ex, i) => (
            <ExamplePlaceholder key={i} label={ex.label} caption={ex.caption} image={ex.image} />
          ))}
        </section>

        <div className="h-px bg-white/[0.08] my-12"></div>

        <section>
          <h2 className={sectionH2}>{d.bulletsHeading}</h2>
          <ul className="m-0 p-0 list-none flex flex-col gap-3.5">
            {d.bullets.map((b, i) => (
              <li
                key={i}
                className="flex gap-3.5 text-[16px] leading-[1.55] text-ink
                           before:content-[''] before:shrink-0 before:basis-1.5 before:h-1.5
                           before:rounded-full before:bg-ink-muted before:mt-2.5"
              >
                <span>
                  <b className="text-ink-strong font-medium mr-1.5">{b.b}</b>
                  {b.t}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <div className="h-px bg-white/[0.08] my-12"></div>

        <section>
          <RevealBox>{d.reveal}</RevealBox>
        </section>

        <section className="mt-4 pt-[22px] border-t border-white/[0.08]">
          <h3 className={monoEyebrowWide + " text-ink-muted m-0 mb-3.5 font-medium"}>
            Sources cited on this page
          </h3>
          <ul className="cites flex flex-col gap-3 list-none m-0 p-0 text-[13px] text-ink-muted leading-[1.55]">
            {d.citations.map((c, i) => (
              <li key={i} className="flex gap-3.5">
                <span className="font-mono text-[11px] text-ink-faint shrink-0 basis-[22px] pt-px">
                  [{c.num}]
                </span>
                <span dangerouslySetInnerHTML={{ __html: c.text }}></span>
              </li>
            ))}
          </ul>
        </section>

        {/* prev / next */}
        <nav className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20" aria-label="More patterns">
          <PagerCard
            navigate={navigate}
            target={prev}
            direction="prev"
          />
          <PagerCard
            navigate={navigate}
            target={next}
            direction="next"
          />
        </nav>
      </article>
    </div>
  );
}

function PagerCard({ navigate, target, direction }) {
  const { ArrowLeft, ArrowRight } = window;
  const isNext = direction === "next";
  const disabled = !target;
  return (
    <a
      href={target ? `#/patterns/${target.id}` : "#"}
      onClick={(e) => { e.preventDefault(); if (target) navigate(`/patterns/${target.id}`); }}
      aria-disabled={disabled}
      className={[
        "border border-white/[0.08] rounded-[14px] px-6 py-[22px]",
        "flex flex-col gap-1.5 relative overflow-hidden",
        "transition-[border-color,transform] duration-200",
        "hover:border-white/[0.14]",
        isNext ? "text-right items-end" : "",
        disabled ? "opacity-[0.32] pointer-events-none" : "",
      ].join(" ")}
    >
      <span className={monoEyebrow + " text-ink-muted inline-flex items-center gap-1.5"}>
        {isNext ? null : <ArrowLeft size={12} />}
        {isNext ? "Next" : "Previous"}
        {isNext ? <ArrowRight size={12} /> : null}
      </span>
      <span className="text-[17px] font-medium text-ink-strong tracking-[-0.015em] leading-[1.25]">
        {target ? target.title : "—"}
      </span>
    </a>
  );
}

window.DetailPage = DetailPage;

// ============================================================
// References page
// ============================================================
function ReferencesPage({ navigate }) {
  const { REFERENCES, PORTFOLIO_EXAMPLES } = window;

  const refLi =
    "refs grid grid-cols-[38px_1fr] gap-[18px] py-[22px] border-t border-white/[0.08] " +
    "text-[15px] leading-[1.55] text-ink last:border-b last:border-white/[0.08]";

  return (
    <div className="max-w-read mx-auto px-[22px] md:px-8 pt-20 pb-32" data-screen-label="References">
      <BackLink navigate={navigate} />
      <h1 className="text-[clamp(34px,4.6vw,52px)] leading-[1.05] tracking-tightest font-medium text-ink-strong m-0 mb-4 animate-fade-up delay-1">
        References.
      </h1>
      <p className="text-[17px] text-ink-muted m-0 mb-14 max-w-[56ch] leading-[1.55] animate-fade-up delay-2">
        Sources cited across the site, plus the analyzed portfolio examples. Formatted in MLA style, ordered alphabetically by author or publisher.
      </p>

      <h2 className={monoEyebrowWide + " text-ink-muted mt-14 mb-3.5 font-medium"}>
        Published sources
      </h2>
      <ol className="list-none p-0 m-0 flex flex-col">
        {REFERENCES.map((r, i) => (
          <li key={i} className={refLi}>
            <span className="font-mono text-[11px] text-ink-faint tracking-[0.06em] pt-[3px]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>
              <span dangerouslySetInnerHTML={{ __html: r.text }}></span>
              <span className="block mt-1.5 text-ink-muted text-[13px] font-mono tracking-[0.02em]">
                {r.meta}
              </span>
            </span>
          </li>
        ))}
      </ol>

      <h2 className={monoEyebrowWide + " text-ink-muted mt-14 mb-3.5 font-medium"}>
        Analyzed portfolio examples
      </h2>
      <ol className="list-none p-0 m-0 flex flex-col">
        {PORTFOLIO_EXAMPLES.map((p) => (
          <li key={p.id} className={refLi}>
            <span className="font-mono text-[11px] text-ink-faint tracking-[0.06em] pt-[3px]">
              {p.id}
            </span>
            <span>
              <em className="text-ink-strong italic not-italic-fallback" style={{ fontStyle: "italic" }}>
                {p.name}
              </em>
              <span className="block mt-1.5 text-ink-muted text-[13px] font-mono tracking-[0.02em]">
                Placeholder · designer name, portfolio URL, and access date pending.
              </span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

// ============================================================
// AI Use page
// ============================================================
function AIUsePage({ navigate }) {
  return (
    <div className="declaration max-w-read mx-auto px-[22px] md:px-8 pt-20 pb-32" data-screen-label="AI Use">
      <BackLink navigate={navigate} />
      <h1 className="text-[clamp(34px,4.6vw,52px)] leading-[1.05] tracking-tightest font-medium text-ink-strong m-0 mb-4 animate-fade-up delay-1">
        AI use.
      </h1>
      <p className="text-[17px] text-ink-muted m-0 mb-14 max-w-[56ch] leading-[1.55] animate-fade-up delay-2">
        GenAI declaration for this composition. The rubric requires transparency; this page provides it in one place.
      </p>

      <div className="prose animate-fade-up delay-3">
        <p><em className="callout">Declaration.</em></p>

      </div>
    </div>
  );
}

Object.assign(window, { ReferencesPage, AIUsePage, BackLink, PagerCard });

// ============================================================
// App shell + hash router
// ============================================================
function parseHash() {
  const raw = (window.location.hash || "#/").replace(/^#/, "");
  return raw.startsWith("/") ? raw : "/" + raw;
}

function App() {
  const { SiteFooter, HomePage, DetailPage, ReferencesPage, AIUsePage } = window;
  const [route, setRoute] = useState(parseHash());

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = useCallback((path) => {
    window.location.hash = "#" + path;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  let view;
  if (route === "/" || route === "") {
    view = <HomePage navigate={navigate} />;
  } else if (route.startsWith("/patterns/")) {
    const id = route.replace("/patterns/", "");
    view = <DetailPage cardId={id} navigate={navigate} />;
  } else if (route === "/references") {
    view = <ReferencesPage navigate={navigate} />;
  } else if (route === "/ai-use") {
    view = <AIUsePage navigate={navigate} />;
  } else {
    view = <HomePage navigate={navigate} />;
  }

  return (
    <>
      <main key={route}>{view}</main>
      <SiteFooter route={route} navigate={navigate} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
