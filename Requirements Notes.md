# Business Chemistry prototype: requirements (from Frames 9–12)

## Global
- Remove eyebrow text ("Step 01 · …") from every screen.
- Navbar: logo → home; "You are [Style]" dropdown top-right to switch style.

## Frame 9: Pick your style
- Lede copy: "Pick the one that fits you best, and we'll show you how to work with everyone else."

## Frame 10: Onboarding part two (new screen, after picking style)
- Name field, Division (free text), 1–2 sentences about yourself
- Hello-style drawing card: DROPPED (per user)
- Continue → brief loading spinner (≤2s) → dashboard

### Data capture (KEEP)
- All onboarding data should be captured into a JS data structure and used to populate the dashboard.
- Multiple users will be on at once. Constraint: plain HTML/CSS/JS only, no complex backend calls.
- Demo fallback: OK to stop after onboarding and show dashboard with dummy data.
- Note: true multi-user sharing needs a shared store (e.g. hosted JSON/Sheet/Firebase). Plain static HTML can only persist per-browser (localStorage).

## Frame 11: Dashboard
- Hero summary line for your style.
- Pairings list (left) + tall vertical 2×2 map (right), both always visible. No toggle, no "plot team" switch; people always shown.

## Roster
- Keep as-is (division of 10, filter chips).

## Frame 12: Member profile
- Keep current build's look exactly: left bio panel (bars + voice sections), whiteboard top-right, "Build [their] skills as a [you]" bottom-right, current flat style.
- Dummy data for all 10 teammates, each with their own individual bio ("In my words").

## Current data handling (demo)
- Onboarding saves { name, division, about, style, savedAt } to localStorage key "bc-user" and window.BC_USER.
- Teammates are dummy data (chemistry-data.js). Shared multi-user store is planned for later.
