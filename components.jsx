/* global React, window */
const { useEffect, useState, useRef, useCallback } = React;

// ---------- Icon helpers ----------
function ArrowRight({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}
function ArrowLeft({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="11 6 5 12 11 18" />
    </svg>
  );
}

// ---------- Bottom footer ----------
function SiteFooter({ route, navigate }) {
  const linkBase = "text-[13px] text-ink-muted transition-colors duration-150 hover:text-ink-strong tracking-[-0.005em]";
  const isActive = (path) => (route === path ? " text-ink-strong" : "");
  return (
    <footer
      className="border-t border-white/[0.08] px-[22px] pb-7 pt-7 md:px-10 md:pb-9 md:pt-7 mt-16 flex items-center justify-end bg-bg"
      data-screen-label="Footer"
    >
      <nav className="inline-flex items-center gap-3.5" aria-label="Primary">
        <a
          href="#/references"
          className={linkBase + isActive("/references")}
          onClick={(e) => { e.preventDefault(); navigate("/references"); }}
        >
          References
        </a>
        <span className="text-ink-faint text-[13px]" aria-hidden="true">·</span>
        <a
          href="#/ai-use"
          className={linkBase + isActive("/ai-use")}
          onClick={(e) => { e.preventDefault(); navigate("/ai-use"); }}
        >
          AI Use
        </a>
      </nav>
    </footer>
  );
}

// ---------- Blob stage ----------
function BlobStage({ palette, intensity = 1 }) {
  return (
    <div
      className="absolute -inset-[10%] z-0 overflow-hidden pointer-events-none"
      style={{ transform: "translateZ(0)" }}
      aria-hidden="true"
    >
      {palette.blobs.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full transition-[opacity,filter] duration-[400ms] ease-linear"
          style={{
            background: b.color,
            top: b.pos.top,
            left: b.pos.left,
            width: b.size,
            height: b.size,
            opacity: 0.85 * intensity,
            filter: "blur(36px) saturate(1.15)",
          }}
        />
      ))}
    </div>
  );
}

// ---------- Card (carousel tile) ----------
function CarouselCard({ card, idx, total, onOpen }) {
  return (
    <article
      className={[
        // base layout & sizing
        "card group relative overflow-hidden shrink-0 cursor-pointer isolate",
        "basis-[84vw] md:basis-[380px] h-[460px] md:h-[480px]",
        "rounded-[22px] border border-white/[0.08] bg-bg-card",
        // perf hints
        "[contain:paint] [transform:translateZ(0)] [will-change:transform]",
        // motion
        "transition-[transform,border-color] duration-300 ease-out-quart",
        "snap-start hover:-translate-y-[3px] hover:border-white/[0.14]",
      ].join(" ")}
      data-screen-label={`Card ${card.num}`}
      onClick={() => onOpen(card.id)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(card.id); }
      }}
      aria-label={`${card.title} — read more`}
    >
      <BlobStage palette={card.palette} />

      {/* dark gradient overlay over the blob */}
      <div
        className="absolute inset-0 z-[1]"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.42) 0%, rgba(10,10,10,0.72) 55%, rgba(10,10,10,0.92) 100%)",
        }}
      ></div>

      <div className="relative z-[2] h-full p-7 pb-[26px] flex flex-col justify-between">
        {/* top row */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-monoWide uppercase text-ink-muted">
            {card.num} / {String(total).padStart(2, "0")}
          </span>
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase px-[9px] py-[5px] rounded-full border border-white/[0.14] text-ink bg-white/[0.04]">
            {card.tag}
          </span>
        </div>

        {/* mid */}
        <div className="mt-auto flex flex-col gap-3.5">
          <span className="font-mono text-[11px] tracking-mono uppercase text-ink-muted">
            {card.eyebrow}
          </span>
          <h2 className="m-0 text-[30px] leading-[1.08] tracking-tightish font-medium text-ink-strong [text-wrap:balance]">
            {card.title}
          </h2>
          <p className="m-0 text-ink-muted text-[14px] leading-[1.55] [text-wrap:pretty]">
            {card.blurb}
          </p>
        </div>

        {/* foot */}
        <div className="mt-6 flex items-center justify-between pt-[18px] border-t border-white/[0.08]">
          <span className="inline-flex items-center gap-2 text-[13px] text-ink-strong font-medium">
            Read more
            <ArrowRight className="transition-transform duration-[240ms] ease-out-quart group-hover:translate-x-1" />
          </span>
          <span className="font-mono text-[11px] tracking-[0.06em] text-ink-faint">
            {card.palette.name}
          </span>
        </div>
      </div>
    </article>
  );
}

// ---------- Reusable: example placeholder + reveal box ----------
function ExamplePlaceholder({ label, caption }) {
  return (
    <figure className="mt-[22px] mb-0 border border-white/[0.08] rounded-[14px] overflow-hidden bg-bg-elev">
      <div
        className="aspect-[16/9] flex flex-col items-center justify-center gap-2.5 text-ink-muted"
        style={{
          background:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 14px), #141414",
        }}
      >
        <span className="font-mono text-[11px] tracking-monoWide uppercase">{label}</span>
        <span className="text-[12px] text-ink-faint font-mono">screenshot placeholder</span>
      </div>
      <figcaption className="px-[18px] py-3.5 text-[13px] text-ink-muted italic border-t border-white/[0.08] bg-white/[0.015]">
        {caption}
      </figcaption>
    </figure>
  );
}

function RevealBox({ children }) {
  return (
    <div className="border-y border-white/[0.08] py-7 relative">
      <div className="font-mono text-[11px] tracking-mono uppercase text-ink-muted mb-3.5">
        What this reveals
      </div>
      <div className="text-[18px] leading-[1.5] text-ink-strong font-serif italic tracking-[-0.005em] max-w-[50ch] [text-wrap:pretty]">
        {children}
      </div>
    </div>
  );
}

// Renders a chunk of text that may contain inline <cite> tags via HTML strings.
function HTMLProse({ html }) {
  return <p dangerouslySetInnerHTML={{ __html: html }} />;
}

Object.assign(window, {
  SiteFooter,
  BlobStage,
  CarouselCard,
  ExamplePlaceholder,
  RevealBox,
  HTMLProse,
  ArrowRight,
  ArrowLeft,
});
