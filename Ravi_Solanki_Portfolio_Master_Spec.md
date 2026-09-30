# RAVI SOLANKI — PORTFOLIO MASTER SPEC
## Version 1.0 — Design, Content, Interaction, Technical & QA Source of Truth

> **Status:** Master design specification before implementation
>
> **Primary identity:** AI/ML + Game Development
>
> **Creative sub-brand:** Blue3D
>
> **Core rule:** The portfolio must feel human-designed, work-first, premium, restrained, and technically credible. It must **not** look AI-generated, AI-templated, generic, or like an AI-themed website.

---

# 0. EXECUTIVE DIRECTION

The website is a professional portfolio for Ravi Solanki.

It is **not** a 3D demo with a portfolio attached. It is **not** a generic developer template. It is **not** an AI landing page.

The work is the protagonist.

3D is an interaction and presentation layer used only when it makes a project, transition, or visual story more memorable.

The site should communicate within seconds:

1. Ravi Solanki
2. AI/ML + Game Development
3. He actually builds things
4. He also has a strong creative side

The visitor should leave remembering the name **Ravi Solanki**, not the framework, shader, or novelty of the website.

---

# 1. HARD NON-NEGOTIABLE RULES

## 1.1 No AI-slop aesthetic

Absolutely avoid:

- generic glowing neural-network backgrounds
- AI brain illustrations
- random particles everywhere
- floating holograms with no purpose
- generic futuristic dashboards
- cyberpunk cityscapes
- excessive neon
- overused purple/blue gradients
- decorative data streams
- fake technical jargon
- huge glassmorphism panels
- template-looking cards
- meaningless 3D objects
- auto-generated visual clutter
- stock-looking AI imagery
- sections created only to fill space

AI/ML is part of Ravi's professional direction. It is **not** the visual theme of the website.

## 1.2 No AI-assistance branding

Never publicly describe the portfolio, projects, or work as:

- AI-assisted
- AI-generated
- AI-powered
- built with AI
- made with AI
- generated with AI

Do not add badges, footer notes, or marketing copy about the AI tools used during development.

The implementation team may use coding assistants privately. That is irrelevant to the public brand.

## 1.3 No fake proof

Never invent:

- ML projects that do not exist
- internships
- collaborations
- clients
- users
- revenue
- download counts
- performance metrics
- awards
- publications
- testimonials
- competition wins
- employment experience

Only present work that exists and can be demonstrated.

## 1.4 No inflated claims

Do not use phrases such as:

- expert
- industry-leading
- world-class
- professional AI engineer
- senior game developer
- 10x developer

unless independently true and deliberately approved later.

## 1.5 Minimal text is a global rule

Visuals explain whenever possible.

Preferred order:

**work → visual proof → short label → optional explanation**

Avoid long paragraphs. Most sections should be understandable through titles, tags, visuals, diagrams, and interaction.

## 1.6 Website first, WebGL second

The site must remain a normal, usable website when 3D is disabled.

Important information must exist as actual HTML, not trapped inside canvas rendering.

## 1.7 No forced exploration

Visitors must not need WASD movement or a hidden game mechanic to understand or navigate the portfolio.

Scrolling, clicking, touch, normal navigation, direct URLs, keyboard navigation, and browser back must all work.

## 1.8 Work-first

The homepage must show work almost immediately.

Do not open with a long biography.

## 1.9 Visual hierarchy

The identity hierarchy is:

**Ravi Solanki → AI/ML + Game Development → Creative/Blue3D**

3D is a medium, not the identity.

---

# 2. BRAND ARCHITECTURE

## 2.1 Primary brand

# RAVI SOLANKI

Primary descriptor:

**AI/ML · GAME DEVELOPMENT**

Supporting language:

**Building · Learning · Experimenting**

Exact final hero copy can be refined during implementation, but it must remain short.

## 2.2 Coding identity

GitHub/coding identity is treated as an extension of Ravi, not a separate person or brand.

## 2.3 Blue3D

Blue3D is Ravi's creative sub-brand.

Use it for:

- 3D
- VFX
- animation
- photography
- film/video
- creative experiments

Blue3D should never replace the primary Ravi Solanki identity in the main header.

## 2.4 Blue3D logo

Use the provided real Blue3D logo as the canonical creative asset.

The geometric/cube-like form can become a recurring visual primitive.

Possible states:

- idle rotation
- hover deformation
- unfold/rebuild transition
- loading mark
- creative-section anchor

Do not repeat the complete logo excessively.

---

# 3. CORE EXPERIENCE MODEL

## 3.1 Interaction model

Use a **hybrid** model:

- normal page scroll
- direct interaction with selected 3D artifacts
- normal links and navigation
- optional small discoveries

No continuous avatar walking.

## 3.2 Project Universe

The site is visually organized as a project universe.

Projects themselves generate the visual language of the environment.

The environment should never feel like a prebuilt 3D room containing screenshots.

Instead:

**project identity → 3D behavior → interaction → case study**

## 3.3 Visitor feeling

Desired mental sequence:

**Who is this? → What has he built? → How did he build it? → What else does he do? → I remember him.**

---

# 4. INFORMATION ARCHITECTURE

Primary navigation:

```text
WORK   LAB   CREATIVE   ABOUT
```

Utility links:

```text
GITHUB   LINKEDIN
```

A contact action can live in the footer and/or utility navigation.

Proposed content structure:

```text
HOME
├── Selected Work
├── Games
├── AI / ML
├── Lab
├── Software / Web
├── Blue3D / Creative
├── About
└── Contact
```

Direct project routes:

```text
/games/vortex-glide
/games/typerush
/games/math-dash
/games/find-the-number
/games/color-trap
```

Future AI/ML routes can follow:

```text
/ai/project-name
```

Keep routes semantic and stable.

---

# 5. HOMEPAGE FLOW

## 5.1 Opening

The first screen is dark, calm, and extremely clean.

A subtle Blue3D geometric mark may appear as the opening transition device.

Then:

# RAVI SOLANKI

**AI/ML · GAME DEVELOPMENT**

Optional small line:

**BUILDING · LEARNING · EXPERIMENTING**

Immediately introduce the first major work.

## 5.2 First featured work

**Vortex Glide** should be considered the initial featured opening artifact because its 3D identity naturally supports the immersive presentation.

Do not recreate the entire game in the portfolio.

Show a stylized, optimized representation of the project.

Interaction:

- idle: slow motion
- hover: subtle response
- click: camera push / transition
- result: project page

## 5.3 Selected Work

The project order should create hierarchy rather than treating every project equally.

Initial presentation:

**Featured**

- Vortex Glide
- TypeRush

**Selected**

- MathDash
- Find the Number
- Color Trap

The final order can be adjusted after asset review, but no arbitrary ranking language should appear publicly.

## 5.4 Games

Most interactive section.

Use large visual artifacts and short labels.

Example:

```text
VORTEX GLIDE
3D · WEBGL · THREE.JS

[VISUAL]

PLAY ↗   GITHUB ↗
```

## 5.5 AI / ML

Current state is intentionally restrained.

Display:

```text
AI / ML

B.TECH CSE · AIML

NOW
DSA · C++

EXPLORING
MACHINE LEARNING
```

Do not imply existing ML project experience that is not present.

When real ML projects exist, they replace or expand this area naturally.

## 5.6 Lab

A place for:

- prototypes
- experiments
- small technical builds
- interaction tests
- unfinished but interesting explorations

Short metadata only:

```text
NAME · YEAR · STATUS
```

## 5.7 Software / Web

Secondary category.

Relevant real work includes the ShreePlys client website and selected earlier web/coding work.

Keep this section compact.

## 5.8 Blue3D

Major visual transition from technical work to creative work.

Suggested transition:

**code → geometry → Blue3D → image / motion**

Display:

```text
BLUE3D

3D · VFX · PHOTO · FILM
```

Then visual work.

## 5.9 About

Very short.

Example direction:

# RAVI

**B.TECH CSE · AIML**

**Curious. Quiet. Always experimenting.**

Then a tiny current-focus block.

## 5.10 Contact

Large negative space.

# LET'S BUILD SOMETHING.

Then simple links.

## 5.11 Footer

```text
RAVI SOLANKI
AI/ML · GAME DEVELOPMENT
BLUE3D
© 2026
```

---

# 6. VISUAL DESIGN SYSTEM

## 6.1 Base palette

Use a near-black graphite base.

Suggested initial tokens:

```css
--bg: #0B0B0C;
--surface: #111214;
--text: #F2F0EB;
--muted: #8B8B88;
--blue: #4B7BFF;
```

The exact Blue3D yellow should be sampled from the real supplied logo rather than approximated.

Blue3D yellow is a signature accent, not the general site palette.

## 6.2 Typography

Primary recommendation:

**Geist**

Technical/metadata:

**Geist Mono**

Do not introduce multiple font families unless there is a clear design reason.

## 6.3 Type scale

Use a small set of sizes rather than dozens of arbitrary values.

Conceptual levels:

- Hero
- Section
- Project title
- Metadata
- Micro utility

Typography should do most of the visual work.

## 6.4 Spacing

Use generous negative space.

Avoid overfilled sections.

The page should have room around projects and photography.

## 6.5 Borders

Prefer extremely thin, low-contrast borders.

Use borders to establish structure, not decoration.

## 6.6 Buttons

Prefer text actions:

```text
PLAY ↗
GITHUB ↗
VIEW →
BACK TO WORK
```

Avoid oversized glossy buttons.

## 6.7 Tags

Technical tags are small metadata, not decorative badges.

Example:

```text
GAME DEV · THREE.JS · WEBGL
```

## 6.8 Cards

Minimize traditional cards.

Projects should mainly be large compositions or media blocks.

Avoid SaaS-style card grids.

## 6.9 Materials

3D:

- graphite
- matte black
- subtle brushed metal
- restrained smoked glass

HTML UI:

Mostly flat.

Do not cover the whole website in glassmorphism.

---

# 7. 3D PROJECT UNIVERSE

## 7.1 General principle

3D must have a reason.

Each 3D object should either:

- represent a real project
- help the visitor understand a project
- create a meaningful transition
- improve orientation

If an object has no functional or storytelling role, remove it.

## 7.2 Camera states

Define explicit states:

```text
HERO       wide / calm
PROJECT    closer / focused
CASE STUDY stable / readable
GAMES      dynamic / energetic
AI / ML    precise / restrained
BLUE3D     cinematic / slow
ABOUT      quiet / nearly flat
```

No random orbiting camera.

## 7.3 Cursor response

Possible subtle reactions:

- camera offset
- lighting offset
- artifact rotation
- parallax
- material response

Keep amplitudes small.

## 7.4 Project artifacts

### Vortex Glide

Miniature tunnel-inspired artifact.

Elements may include:

- tunnel rings
- rails
- player craft
- obstacle silhouettes
- speed cues

Interaction:

hover → slight acceleration

click → camera enters tunnel → case study

### TypeRush

Use a typographic/mechanical interaction.

Possible artifact:

- word strip
- letter blocks
- mechanical type surface

Hovering over letters may subtly raise them.

Click opens the project.

### MathDash

Use a restrained number/equation field.

Avoid making the portfolio itself into a complete game.

### Find the Number

Use a number field.

One click can cause a short rearrangement.

Do not require solving 1–100 to navigate.

### Color Trap

Use a color/shape field derived from the game's visual identity.

Do not turn it into a generic rainbow or gradient showcase.

---

# 8. PROJECT CASE STUDY SYSTEM

All major project pages use a common information architecture while allowing project-specific visuals.

## 8.1 Structure

```text
PROJECT HERO
SNAPSHOT
OVERVIEW
WHAT I BUILT
SYSTEMS
VISUAL / GAMEPLAY
CHALLENGE
DECISION
RESULT / STATUS
LINKS
NEXT PROJECT
```

## 8.2 Text density

Default maximum:

- 1 short hero sentence
- 1–2 short paragraphs where truly necessary
- compact system labels
- short challenge/decision/result blocks

Never create a wall of text.

## 8.3 Hero

Example:

```text
VORTEX GLIDE
3D BROWSER ARCADE

[ LARGE VISUAL ]

PLAY ↗   GITHUB ↗
```

## 8.4 Snapshot

Compact metadata:

```text
ROLE
PLATFORM
TYPE
TECH
STATUS
```

Only include verified facts.

## 8.5 Technical proof

Use diagrams and visuals where possible.

Example:

```text
SEED
 ↓
PATTERN
 ↓
VALIDATE
 ↓
SPAWN
```

The animation is the explanation.

## 8.6 Challenge / Decision / Result

Each important project should have at least one concise example.

```text
CHALLENGE
...

DECISION
...

RESULT
...
```

Do not invent a result if it is unknown.

## 8.7 Links

Always make source and demo obvious.

```text
PLAY / LIVE ↗
GITHUB ↗
```

## 8.8 Project navigation

Persistent small action:

```text
← BACK TO WORK
```

End of page:

```text
NEXT
TYPE RUSH →
```

---

# 9. PROJECT CONTENT SOURCE OF TRUTH

Use GitHub repositories and actual project assets as the source of truth.

The selected portfolio projects are:

1. **Vortex Glide**
2. **TypeRush** / repository historically named Type_Dash
3. **MathDash** / repository `Math_Dash`
4. **Find the Number** / repository `FInd_Number`
5. **Color Trap** / repository `Color_Trap`

Do not add other past concepts or prototypes to the public portfolio unless they are intentionally selected and backed by real project files.

## 9.1 Vortex Glide known project material

The project documentation describes:

- browser-based 3D arcade gameplay
- Three.js / WebGL
- continuous forward acceleration
- a modular decagonal tunnel
- multiple obstacle families
- seeded procedural generation
- reachability validation
- collision systems
- keyboard and touch controls
- audio architecture
- score/save systems
- CrazyGames integration

Known speed progression documented by the project:

**45 m/s → 135+ m/s**

Use exact technical figures only where still accurate in the final build.

## 9.2 TypeRush known project material

The repository README describes:

- 60-second sessions
- 550+ curated English words
- non-repeating word selection
- real-time WPM and accuracy
- streak/score behavior
- Web Audio keyboard sounds
- persistence
- anti-cheat protections against clipboard/drag/drop insertion
- responsive behavior
- reduced-motion support
- React / TypeScript / Vite

Use the actual current repository as the final authority.

## 9.3 MathDash known project material

The repository README describes:

- multiple difficulties
- two-answer choice interaction
- streaks
- five-star performance
- 60-second sessions
- Time Bonus behavior
- onboarding
- audio
- responsive UI
- React / TypeScript / Vite

## 9.4 Find the Number known project material

The repository README describes:

- tactile number-search gameplay
- Easy / Medium / Hard modes
- dark chalkboard and light editorial themes
- procedural Web Audio
- local persistence
- responsive interaction
- vanilla HTML5/CSS/modern JavaScript
- CrazyGames SDK integration

The exact difficulty behavior shown by the current GitHub version should remain the source of truth during implementation.

## 9.5 Color Trap

Use only information confirmed from the current repository/build.

Do not infer features from the project name alone.

---

# 10. AI / ML CONTENT RULES

## 10.1 Current state

AIML is a current degree focus and future project direction.

The website must represent it honestly.

Current public content can focus on:

```text
B.TECH CSE · AIML
DSA · C++
MACHINE LEARNING — EXPLORING
```

## 10.2 Future growth

When real projects are created:

```text
PROBLEM
→ DATA
→ APPROACH
→ MODEL
→ EXPERIMENT
→ EVALUATION
→ RESULT
```

Use actual outputs, charts, images, metrics, and code links.

## 10.3 Visual language

AI/ML visuals should feel like data, mathematics, systems, or computation.

Avoid:

- AI brain
- robot head
- glowing neural web
- generic generative-art background
- synthetic futuristic dashboard

---

# 11. GAMES CONTENT RULES

Games are currently the strongest proof area.

Use larger media and deeper interaction here.

Each featured game should communicate:

```text
WHAT
HOW
SYSTEM
PLAY
SOURCE
```

Do not imply a game is publicly published unless that status is verified at the time of publication.

Do not use “published”, “launched”, “viral”, or platform-success claims without current evidence.

Past experience with CrazyGames can be referenced only as accurate project/platform experience, not as a claim that a current game is publicly live there.

---

# 12. SOFTWARE / WEB SECTION

Use selected real projects only.

Possible content categories:

- client website
- early web work
- programming foundations
- practical small tools

Avoid dumping every beginner exercise into the main navigation.

Older learning repositories can live in a compact archive if useful.

---

# 13. BLUE3D / CREATIVE SYSTEM

## 13.1 Entry

```text
BLUE3D
3D · VFX · PHOTO · FILM
```

## 13.2 3D

Visual hierarchy:

1. strongest environment/render
2. selected product visualization
3. supporting experiments

Each item needs only:

```text
TITLE
TOOL / CATEGORY
```

## 13.3 VFX / animation

Prefer video over explanation.

## 13.4 Photography

Large images.

Tiny captions.

Very little interface chrome.

Existing photography work can be linked to the extended photography portfolio.

## 13.5 Film/video

Use cinematic media with minimal controls.

The viewer should not be forced through lengthy descriptions.

---

# 14. ABOUT SYSTEM

Keep the About section small.

Recommended structure:

```text
RAVI SOLANKI
B.TECH CSE · AIML

CURIOUS. QUIET. ALWAYS EXPERIMENTING.

NOW
DSA · C++ · GAME DEV · AIML · EXPERIMENTS
```

A compact visual timeline can communicate the learning path:

```text
C
↓
PYTHON
↓
WEB
↓
GAME DEV
↓
3D
↓
AIML
```

Do not turn this into a personal essay.

---

# 15. NAVIGATION & SCROLL

## 15.1 Desktop

Persistent minimal navigation.

Scroll is the primary flow.

3D responds to scroll position where useful.

## 15.2 Section orientation

A small temporary indicator may appear:

```text
GAMES
```

or:

```text
AI / ML
```

Then fade away.

## 15.3 Project progress

Optional tiny indicator:

```text
01 / 05
```

Do not use a giant progress percentage.

## 15.4 Browser behavior

Normal browser behavior must remain valid:

- refresh
- back
- forward
- direct URL
- open new tab
- share URL

---

# 16. RESPONSIVE EXPERIENCE

## 16.1 Desktop

Full experience:

- richer 3D
- deeper camera transitions
- higher texture quality
- more visual layering

## 16.2 Tablet

Reduce:

- object count
- post-processing
- heavy animations
- simultaneous assets

## 16.3 Mobile

Curated experience:

- touch instead of pointer interaction
- simplified camera
- fewer objects
- shorter effects
- large readable content
- media remains primary

Do not simply shrink the desktop layout.

## 16.4 Low-end fallback

If capability is weak or WebGL fails:

- normal HTML content
- optimized images/video
- static project hero
- normal links

The site remains complete.

---

# 17. PERFORMANCE ARCHITECTURE

Recommended stack:

```text
Next.js
TypeScript
React
Three.js
React Three Fiber
GSAP (only where needed)
```

Avoid adding libraries for single small effects.

## 17.1 Loading order

```text
HTML
↓
Critical content
↓
Light visual layer
↓
Project media
↓
Heavy 3D assets
```

## 17.2 Lazy loading

Do not load all 3D scenes simultaneously.

Load assets near their viewport/interaction point.

## 17.3 Asset format

Prefer optimized:

- GLB / glTF
- WebP / AVIF images
- compressed video with appropriate poster frames

## 17.4 3D optimization

Control:

- triangle count
- draw calls
- texture dimensions
- texture count
- shader complexity
- shadow cost
- post-processing
- animation complexity

## 17.5 Adaptive quality

Quality tiers should adjust:

- DPR
- shadows
- anti-aliasing
- object density
- texture resolution
- post effects
- animation complexity

## 17.6 Animation rules

Prefer efficient transforms and opacity.

Avoid unnecessary per-frame DOM work.

---

# 18. ACCESSIBILITY

Required:

- semantic headings
- actual links
- keyboard navigation
- visible focus states
- sufficient text contrast
- meaningful alt text
- reduced-motion mode
- WebGL fallback
- no required sound

The immersive layer is optional.

The information is not.

---

# 19. SOUND

Sound is off by default.

Optional interaction sounds may exist for:

- hover
- click
- project transition
- selected game interactions

Never autoplay music without explicit user action.

Never make sound necessary to understand content.

---

# 20. SEO & SHAREABILITY

Every important page needs:

- unique title
- concise meta description
- Open Graph image
- semantic structure
- canonical URL
- stable project slug

The SEO copy should describe actual work rather than keyword-stuffed marketing text.

---

# 21. ANALYTICS

Analytics are optional and should be added only when there is a genuine reason.

Track useful events such as:

```text
project_open
live_demo_click
github_click
resume_click
contact_click
```

Do not track unnecessarily invasive personal behavior.

If analytics are later added, keep them lightweight and performance-conscious.

---

# 22. SECURITY / ENGINEERING QUALITY

Use sensible production hygiene:

- dependency auditing
- no exposed secrets
- environment variables for secrets
- sanitized external inputs
- safe external links
- no unnecessary client-side data collection
- strict build checks

The portfolio should be treated as a real software project.

---

# 23. COMPONENT ARCHITECTURE

Suggested conceptual structure:

```text
src/
├── app/
│   ├── page
│   ├── games/
│   ├── ai/
│   ├── work/
│   ├── lab/
│   ├── creative/
│   └── about/
│
├── components/
│   ├── Navigation
│   ├── ProjectHero
│   ├── ProjectArtifact
│   ├── ProjectMeta
│   ├── MediaGallery
│   ├── CaseStudySection
│   ├── SectionLabel
│   ├── ButtonLink
│   ├── Footer
│   └── WebGLFallback
│
├── 3d/
│   ├── Scene
│   ├── CameraController
│   ├── Lighting
│   ├── Materials
│   ├── Artifacts
│   └── Performance
│
├── data/
│   ├── projects
│   ├── creative
│   └── navigation
│
├── animations/
├── assets/
└── styles/
```

This is a reference structure, not an excuse to create unnecessary abstraction.

---

# 24. DATA-DRIVEN PROJECT SYSTEM

Project content should be separated from presentation.

Conceptual model:

```ts
Project {
  slug
  title
  category
  shortDescription
  technologies
  status
  heroAsset
  gallery
  github
  live
  systems
  challenge
  decision
  result
}
```

Only fields with real content should be rendered.

The system must allow a new project to be added without rewriting the site structure.

---

# 25. ASSET STRATEGY

## 25.1 Real work first

Use:

- actual game screenshots
- actual game footage
- actual 3D renders
- actual photography
- actual project UI
- actual logos and brand assets

## 25.2 Placeholder rule

Temporary generated placeholders may be used during development solely to establish layout.

They must not reach production as portfolio evidence.

## 25.3 No fake device mockups unless useful

Avoid placing every project inside the same generic laptop/phone frame.

The project should be shown naturally.

---

# 26. MICRO-INTERACTION LANGUAGE

Default:

- 150–300 ms small interface changes
- smooth easing
- low-amplitude transforms

Major transitions can be longer when they serve a spatial purpose.

Do not animate everything.

Desired rhythm:

```text
CALM
→ INTERACTION
→ RESPONSE
→ CALM
```

---

# 27. CURSOR SYSTEM

Desktop cursor should remain small and precise.

On interactive elements, it can switch state to indicate action.

Avoid giant follower cursors.

Possible labels:

```text
VIEW
PLAY
OPEN
```

Only where useful.

---

# 28. CASE STUDY VISUAL EXAMPLES

## Vortex Glide

```text
VORTEX GLIDE
3D · WEBGL · THREE.JS

[HERO VISUAL]

PLAY ↗   GITHUB ↗

SYSTEMS
PROCEDURAL GENERATION
COLLISION
CONTROLS
AUDIO

[ANIMATED SYSTEM DIAGRAM]

CHALLENGE
1 short statement

DECISION
1 short statement

RESULT
1 short statement
```

## TypeRush

```text
TYPERUSH
REACT · TYPESCRIPT

[TYPEWRITER VISUAL]

60 SEC · 550+ WORDS

[INPUT → CHECK → SCORE DIAGRAM]

PLAY ↗   GITHUB ↗
```

The other projects follow the same framework.

---

# 29. CONTACT SYSTEM

Default:

```text
LET'S BUILD SOMETHING.

EMAIL ↗
GITHUB ↗
LINKEDIN ↗
RESUME ↗
```

Avoid a long contact questionnaire unless a real need emerges.

---

# 30. EASTER EGG

One small Easter egg is allowed.

It should:

- reward curiosity
- be discoverable but not required
- not interfere with navigation
- not become the site's main gimmick

Do not finalize the exact trigger until the visual system is implemented.

---

# 31. COPY RULES

## Use

- short titles
- concrete labels
- real technical names
- simple verbs
- project-specific language

## Avoid

- “Welcome to my digital universe”
- “Where innovation meets creativity”
- “I transform ideas into experiences”
- “Passionate technologist”
- “Leveraging cutting-edge solutions”
- generic startup language
- generic AI language
- motivational filler

The portfolio should sound like a real person, not generated marketing copy.

---

# 32. CONTENT VOICE

Voice:

**quiet confidence**

Not arrogant.

Not corporate.

Not overly casual.

Not overly dramatic.

The website can have personality through visual decisions and concise phrases.

---

# 33. IMPLEMENTATION RULES FOR ANTIGRAVITY / GEMINI

The implementation agent must treat this document as the source of truth.

## Before coding

1. Read this specification fully.
2. Inspect the actual project repositories/assets available to the workspace.
3. Create an asset/content inventory.
4. Identify anything missing rather than inventing it.
5. Establish the design tokens and component structure.

## During coding

- do not redesign the information architecture without approval
- do not add sections just because a template normally has them
- do not invent project claims
- do not add AI-looking decoration
- do not add random particles
- do not add unnecessary dependencies
- do not make 3D mandatory for navigation
- do not sacrifice readability for effects
- keep project data separate from presentation
- keep the site functional if WebGL fails

## During visual work

Ask for every effect:

**What does this communicate?**

If the answer is “nothing, it just looks cool,” remove it unless it is a deliberate short interaction.

## During optimization

Measure performance rather than assuming it is fast.

---

# 34. QA CHECKLIST

## Design

- [ ] Identity visible immediately
- [ ] AI/ML + Game Development are dominant
- [ ] Blue3D remains secondary
- [ ] Minimal text throughout
- [ ] Strong visual hierarchy
- [ ] No clutter
- [ ] No generic AI aesthetic

## Content

- [ ] Every project is real
- [ ] Every claim is verified
- [ ] No fake metrics
- [ ] No fake internships/collaborations
- [ ] Project status is accurate
- [ ] Current AIML state is honest

## UX

- [ ] Navigation is obvious
- [ ] Browser back works
- [ ] Direct project URLs work
- [ ] Case-study entry/exit is clear
- [ ] Keyboard navigation works
- [ ] Mobile touch interaction works

## 3D

- [ ] Each object has a purpose
- [ ] No random decoration
- [ ] GPU cost is controlled
- [ ] Assets are lazy-loaded
- [ ] Low-quality mode exists
- [ ] WebGL fallback exists

## Performance

- [ ] Critical HTML appears quickly
- [ ] Heavy assets load progressively
- [ ] Images are optimized
- [ ] Video is optimized
- [ ] Mobile is tested
- [ ] Frame rate is monitored during key scenes

## Accessibility

- [ ] Semantic headings
- [ ] Focus states
- [ ] Alt text
- [ ] Reduced motion
- [ ] Keyboard support
- [ ] Readable contrast

## Final polish

- [ ] No placeholder images
- [ ] No lorem ipsum
- [ ] No template copy
- [ ] No console errors
- [ ] No broken links
- [ ] No layout shifts in core areas
- [ ] No accidental AI branding

---

# 35. DEFINITION OF DONE

The portfolio is ready for public launch only when:

1. A visitor understands Ravi's identity within the first screen.
2. Real work appears before biography.
3. Text remains minimal.
4. The 3D layer improves the experience instead of becoming the product.
5. Each selected project has credible visual proof.
6. GitHub and live/demo actions are easy to find.
7. AI/ML is represented honestly.
8. Blue3D feels like a coherent creative sub-brand.
9. The site remains usable without WebGL.
10. Mobile experience is intentionally designed.
11. Performance is measured and acceptable.
12. No visual element feels generically AI-generated or templated.
13. No unverified claims remain.

---

# 36. FINAL DESIGN STATEMENT

The finished website should feel like:

**a serious developer portfolio with an art-directed 3D layer.**

Not:

**a 3D website trying to prove it is impressive.**

The strongest moments should come from Ravi's real work.

The interface should get out of the way.

The work should stay memorable.

---

# 37. NEXT IMPLEMENTATION PHASE

After this specification is approved:

1. Create the implementation plan.
2. Audit available project assets and media.
3. Build the foundational layout without 3D.
4. Establish typography, spacing, navigation, and responsive behavior.
5. Add project data and case-study routes.
6. Add the first 3D artifact.
7. Add progressive loading and fallback.
8. Add project-specific interactions.
9. Add Blue3D creative layer.
10. Run full browser/performance/accessibility QA.
11. Remove anything that feels unnecessary.

**Do not start by building the flashy 3D scene. Build the portfolio system first.**

---

## MASTER RULE IN ONE LINE

> **Make the website memorable because Ravi's work is memorable — never because the website is trying too hard to be impressive.**
