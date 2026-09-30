export interface ProjectSystem {
  name: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: 'Game Development' | 'AI / ML' | 'Software / Web' | 'Creative / Blue3D';
  tags: string[];
  status: string;
  featured: boolean;
  heroMedia: {
    type: 'video' | 'image';
    src: string;
    poster?: string;
  };
  overview: string;
  whatIBuilt: string[];
  systems: ProjectSystem[];
  challenge: {
    title: string;
    description: string;
  };
  decision: {
    title: string;
    description: string;
  };
  result: {
    title: string;
    description: string;
  };
  githubUrl?: string;
  liveUrl?: string;
  metrics?: { label: string; value: string }[];
  snapshot: {
    role: string;
    platform: string;
    type: string;
    tech: string;
    status: string;
  };
}

export const PROJECTS: Project[] = [
  {
    slug: 'vortex-glide',
    title: 'Vortex Glide',
    tagline: '3D Browser Arcade with Procedural Tunnel Architecture',
    category: 'Game Development',
    tags: ['3D', 'WebGL', 'Three.js', 'Procedural Gen', 'Web Audio'],
    status: 'Playable Web Game',
    featured: true,
    heroMedia: {
      type: 'video',
      src: '/games/vortex-glide.mp4',
    },
    overview:
      'A high-speed 3D tunnel arcade game built with Three.js and WebGL. Features continuous forward acceleration, modular decagonal track geometry, seeded procedural generation, and real-time obstacle reachability validation.',
    whatIBuilt: [
      'Modular 10-sided tunnel geometry generated dynamically along the forward camera path',
      'Continuous acceleration velocity curve scaling speed from 45 m/s to 135+ m/s',
      'Deterministic seeded procedural dispatcher ensuring all obstacle configurations are strictly solvable',
      'Dual-input flight controller supporting low-latency keyboard steering and touch drag gestures',
      'Synthesized Web Audio sound design with pitch shifting tied directly to player acceleration',
    ],
    systems: [
      {
        name: 'Procedural Dispatcher',
        description: 'Seeded pseudo-random generator calculating obstacle placement with reachability lookahead.',
      },
      {
        name: 'Segment Ring Recycling',
        description: 'Object pool of modular tunnel rings recycled to the horizon to prevent garbage collection spikes.',
      },
      {
        name: 'Collision Matrix',
        description: 'Continuous raycasting and bounding-cylinder checks tuned for high velocities up to 135 m/s.',
      },
      {
        name: 'Dynamic Audio Bus',
        description: 'Audio node network altering filter cutoffs and frequencies based on vehicle velocity.',
      },
    ],
    challenge: {
      title: 'Eliminating GC Stutter at 135 m/s',
      description:
        'Continuous creation and destruction of tunnel mesh segments at top speeds triggered garbage collector pauses, dropping framerates below 40 FPS.',
    },
    decision: {
      title: 'Deterministic Ring Buffer Pooling',
      description:
        'Replaced mesh allocation with a fixed pool of 40 decagonal rings shifted forward mathematically as the craft advances.',
    },
    result: {
      title: 'Stable 60 FPS High-Speed Flow',
      description:
        'Zero memory allocations inside the 60 Hz animation loop, maintaining fluid framerates on both mobile and desktop browsers.',
    },
    githubUrl: 'https://github.com/WebDevRavi/VortexGlide',
    metrics: [
      { label: 'Speed Range', value: '45 → 135+ m/s' },
      { label: 'Tunnel Geometry', value: 'Decagonal (10-sided)' },
      { label: 'Framerate Target', value: '60 FPS' },
    ],
    snapshot: {
      role: 'Game Designer & WebGL Developer',
      platform: 'Modern Web / HTML5',
      type: '3D Arcade Runner',
      tech: 'Three.js, WebGL, Web Audio, JavaScript',
      status: 'Active Prototype / Playable',
    },
  },
  {
    slug: 'typerush',
    title: 'TypeRush',
    tagline: 'Minimalist Typewriter-Inspired Speed Typing Arcade',
    category: 'Game Development',
    tags: ['React', 'TypeScript', 'Vite', 'Web Audio API'],
    status: 'Playable Web Game',
    featured: true,
    heroMedia: {
      type: 'image',
      src: '/games/type-rush.png',
    },
    overview:
      'A tactile, typewriter-inspired typing speed game built with React and TypeScript. Focuses on typographic clarity, non-repeating vocabulary streaming, mechanical acoustic feedback, and strict anti-cheat verification.',
    whatIBuilt: [
      '60-second focused session architecture with instantaneous restart loop',
      'Curated lexicon of 550+ non-repeating English words streamed dynamically',
      'Zero-latency mechanical keystroke acoustic synthesizer built on Web Audio oscillators',
      'Clipboard and drag-and-drop interception guards preventing automated input injection',
      'Real-time WPM, accuracy %, streak multipliers, and local persistence storage',
    ],
    systems: [
      {
        name: 'Lexicon Streamer',
        description: 'Fisher-Yates shuffled queue preventing duplicate words within consecutive sessions.',
      },
      {
        name: 'Acoustic Synthesizer',
        description: 'Micro-envelope Web Audio clicks imitating physical mechanical keyboard switches.',
      },
      {
        name: 'Anti-Cheat Boundary',
        description: 'Blocks paste and clipboard events, requiring individual character keydown sequences.',
      },
      {
        name: 'Streak Metric Engine',
        description: 'Dynamic WPM and accuracy calculation refreshed per keystroke without layout reflow.',
      },
    ],
    challenge: {
      title: 'Physical Tactile Audio Without Audio Latency',
      description:
        'Pre-recorded MP3 audio files caused audible latency and audio bus clipping during high typing speeds (>100 WPM).',
    },
    decision: {
      title: 'Synthesized Web Audio Micro-Bursts',
      description:
        'Generated synthetic 12 ms noise bursts and bandpass clicks imperatively on AudioContext, bypassing file decode delays.',
    },
    result: {
      title: 'Instantaneous Physical Feel',
      description:
        'Immediate acoustic response at any typing cadence with zero external audio assets loaded over the network.',
    },
    githubUrl: 'https://github.com/WebDevRavi/Type_Dash',
    metrics: [
      { label: 'Session Length', value: '60 Seconds' },
      { label: 'Lexicon', value: '550+ Curated Words' },
      { label: 'Audio Latency', value: '< 5 ms (Synthesized)' },
    ],
    snapshot: {
      role: 'Full Stack Engineer & Audio Designer',
      platform: 'Web Desktop & Mobile',
      type: 'Tactile Typing Game',
      tech: 'React, TypeScript, Vite, Web Audio',
      status: 'Complete & Playable',
    },
  },
  {
    slug: 'math-dash',
    title: 'MathDash',
    tagline: 'High-Tempo Binary Arithmetic Reaction Challenge',
    category: 'Game Development',
    tags: ['React', 'TypeScript', 'Game Dev', 'Cognitive'],
    status: 'Playable Web Game',
    featured: false,
    heroMedia: {
      type: 'image',
      src: '/games/math-dash.png',
    },
    overview:
      'A fast-paced mental arithmetic reflex game. Features instant two-choice answer selection, progressive difficulty scaling, streak multipliers, time bonus replenishment, and 5-star ranking evaluation.',
    whatIBuilt: [
      'High-cadence two-choice answer evaluation designed for instinctive split-second decisions',
      'Dynamic expression generator scaling operand sizes and operators based on current streak',
      'Time bonus replenishment system rewarding rapid consecutive correct answers',
      'Multi-tier 5-star performance rating matrix evaluating speed vs accuracy',
    ],
    systems: [
      {
        name: 'Expression Generator',
        description: 'Synthesizes clean integer equations with controlled distractor answers.',
      },
      {
        name: 'Time Replenishment',
        description: 'Dynamically extends countdown time on rapid streak milestones.',
      },
      {
        name: 'Performance Grading',
        description: 'Calculates star ratings using weighted speed, correct totals, and error penalties.',
      },
    ],
    challenge: {
      title: 'Preventing Trivial Guessing in Two-Choice Setup',
      description:
        'A binary answer choice risks 50% random guessing success if distractor values are mathematically obvious.',
    },
    decision: {
      title: 'Targeted Near-Miss Distractor Heuristics',
      description:
        'Crafted distractor numbers using common mental arithmetic miscalculations (e.g. carry errors, off-by-one or inverted operators).',
    },
    result: {
      title: 'High Mental Engagement',
      description:
        'Players must genuinely compute answers within fractions of a second rather than relying on magnitude heuristics.',
    },
    githubUrl: 'https://github.com/WebDevRavi/Math_Dash',
    metrics: [
      { label: 'Decision Window', value: '< 1.5s per question' },
      { label: 'Performance Tiers', value: '5-Star Rating Matrix' },
    ],
    snapshot: {
      role: 'Designer & Frontend Developer',
      platform: 'Web Browsers',
      type: 'Cognitive Math Arcade',
      tech: 'React, TypeScript, CSS',
      status: 'Complete & Playable',
    },
  },
  {
    slug: 'find-the-number',
    title: 'Find the Number',
    tagline: 'Tactile Visual Search Challenge with Dual Theme Architecture',
    category: 'Game Development',
    tags: ['Vanilla JS', 'Web Audio', 'CrazyGames SDK', 'Tactile UI'],
    status: 'Playable Web Game',
    featured: false,
    heroMedia: {
      type: 'image',
      src: '/games/color-trap.png',
    },
    overview:
      'A tactile number-search puzzle game. Built with vanilla modern JavaScript, procedural Web Audio, and support for CrazyGames SDK. Offers Easy, Medium, and Hard grid configurations with dark chalkboard and editorial themes.',
    whatIBuilt: [
      'Responsive numeric grid layout maintaining square cell geometry across all viewport ratios',
      'Deterministic number placement shuffler ensuring uniform spatial distribution',
      'Procedural audio chime feedback scaled in frequency as player climbs the number ladder',
      'Dual visual themes: high-contrast dark chalkboard and clean light editorial',
    ],
    systems: [
      {
        name: 'Spatial Grid Shuffler',
        description: 'Distributes numbers across grid cells with randomized visual offsets.',
      },
      {
        name: 'Ladder Frequency Chime',
        description: 'Ascending audio frequency scale reinforcing search progression.',
      },
      {
        name: 'Platform Integration',
        description: 'Hooked into CrazyGames SDK event lifecycle for responsive gameplay states.',
      },
    ],
    challenge: {
      title: 'Density Scaling Across Screen Sizes',
      description:
        'Higher difficulty grids (50–100 numbers) become illegible on small mobile screens if rendered as uniform squares.',
    },
    decision: {
      title: 'Aspect-Ratio Clamped Typography & Dynamic Touch Margins',
      description:
        'Implemented viewport-clamped CSS font sizing and optimized minimum touch target boundaries.',
    },
    result: {
      title: 'Instant Tactile Legibility',
      description:
        'Flawless touch interaction on smartphones up to ultra-wide desktop displays.',
    },
    githubUrl: 'https://github.com/WebDevRavi/FInd_Number',
    metrics: [
      { label: 'Difficulty Modes', value: 'Easy / Medium / Hard' },
      { label: 'Stack', value: 'Zero Dependency Vanilla JS' },
    ],
    snapshot: {
      role: 'Game Developer',
      platform: 'Web / CrazyGames Compatible',
      type: 'Visual Search Puzzle',
      tech: 'HTML5, CSS3, Modern JavaScript, Web Audio',
      status: 'Complete & Playable',
    },
  },
  {
    slug: 'color-trap',
    title: 'Color Trap',
    tagline: 'Cognitive Reflex Arcade Based on the Stroop Effect',
    category: 'Game Development',
    tags: ['JavaScript', 'Cognitive', 'Arcade', 'Reflex'],
    status: 'Playable Web Game',
    featured: false,
    heroMedia: {
      type: 'image',
      src: '/games/color-trap.png',
    },
    overview:
      'A cognitive reflex game built around the psychological Stroop effect: "DON\'T READ IT. SEE IT." Challenges the player\'s brain by creating conflict between semantic text meanings and ink colors under time pressure.',
    whatIBuilt: [
      'Strict color-semantic interference generator causing maximum cognitive friction',
      'Microsecond-calibrated countdown timer punishing hesitation and misclicks',
      'Instant reset flow designed for continuous rapid retry sessions',
      'Clean typography-driven visual system avoiding distracting decorative elements',
    ],
    systems: [
      {
        name: 'Conflict Matrix',
        description: 'Guarantees randomized distribution of matched and mismatched color-word pairs.',
      },
      {
        name: 'Decay Timer',
        description: 'Decreasing reaction threshold that speeds up as player score climbs.',
      },
    ],
    challenge: {
      title: 'Tuning Cognitive Load Curve',
      description:
        'If mismatch frequency is 100%, the brain adapts to purely ignore the word text. If too low, tension disappears.',
    },
    decision: {
      title: 'Dynamic Congruency Ratio',
      description:
        'Tuned a 70/30 incongruent-to-congruent ratio with unexpected streak changes that keep cognitive reflexes off-balance.',
    },
    result: {
      title: 'Intense Arcade Tension',
      description:
        'Instant comprehension within 3 seconds of play, driving competitive high-score sessions.',
    },
    githubUrl: 'https://github.com/WebDevRavi/Color_Trap',
    metrics: [
      { label: 'Rule Set', value: '3-Second Instant Learning' },
      { label: 'Principle', value: 'Stroop Effect Reflex' },
    ],
    snapshot: {
      role: 'Game Developer',
      platform: 'Web Browsers',
      type: 'Reflex Cognitive Arcade',
      tech: 'JavaScript, CSS, HTML5',
      status: 'Complete & Playable',
    },
  },
  {
    slug: 'tower-game',
    title: 'Tower Game (Stack Up!)',
    tagline: 'Classic 3D Tower Block Stacking Arcade Game',
    category: 'Game Development',
    tags: ['Three.js', 'Physics', '3D WebGL', 'Arcade'],
    status: 'Live & Playable',
    featured: true,
    heroMedia: {
      type: 'image',
      src: '/games/type-rush.png',
    },
    overview:
      'A physics-driven 3D isometric tower stacking arcade game built with Three.js. Players stack moving cubic blocks with precise timing. Perfect placements maintain the stack footprint, while overhangs are cleaved by rigid-body physics slicing.',
    whatIBuilt: [
      'Isometric orthographic camera rig providing classic arcade perspective',
      'Rigid-body slicing algorithm calculating split geometry and dropping cutoff pieces',
      'Dynamic color progression shifting ambient hue across stack elevation milestones',
      'Combo streak multiplier rewarding successive precise placements with footprint expansion',
      'Responsive touch and spacebar one-tap control with zero input delay',
    ],
    systems: [
      {
        name: 'Block Slicing Engine',
        description: 'Computes intersection between previous top layer and active oscillating block.',
      },
      {
        name: 'Physics Dropper',
        description: 'Simulates gravity and angular impulse on sheared remainder blocks.',
      },
      {
        name: 'Elevation Hue Shifter',
        description: 'Interpolates HSL palette through celestial and twilight gradients as tower ascends.',
      },
    ],
    challenge: {
      title: 'Precision Slicing Without Mesh Degeneracy',
      description:
        'Sub-millimeter misalignment between blocks caused floating point rounding artifacts and geometry tears.',
    },
    decision: {
      title: 'Tolerance Snapping Threshold',
      description:
        'Engineered an auto-snap threshold (< 3px) rewarding near-perfect placements with combo sound chime and pristine alignment.',
    },
    result: {
      title: 'Satisfying Tactile Rhythm',
      description:
        'Smooth 60 FPS isometric stacking with delightful physics drops and instant replay flow.',
    },
    githubUrl: 'https://github.com/WebDevRavi/tower-game',
    liveUrl: 'https://tower-games.vercel.app/',
    metrics: [
      { label: 'Rendering', value: 'Three.js Orthographic' },
      { label: 'Live Deployment', value: 'Vercel Edge' },
      { label: 'Framerate Target', value: '60 FPS' },
    ],
    snapshot: {
      role: 'Game Developer & 3D Engineer',
      platform: 'Web Browsers & Mobile',
      type: '3D Physics Arcade',
      tech: 'Three.js, WebGL, JavaScript',
      status: 'Live on Vercel',
    },
  },
];

export const CLIENT_WORK = [
  {
    slug: 'shreeplys',
    title: 'ShreePlys',
    tagline: 'Commercial digital presence for architectural plywood and interior solutions.',
    category: 'Software / Web',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    summary:
      'A modern commercial web showcase designed for a hardware, plywood, and architectural interior solution provider. Focused on clean product discovery, material catalogs, and responsive performance.',
    githubUrl: 'https://github.com/WebDevRavi/Shreeplys',
    liveUrl: 'https://shreeplys.vercel.app',
  },
];

export const ACADEMIC_AIML = {
  degree: 'B.Tech Computer Science & Engineering',
  specialization: 'Artificial Intelligence & Machine Learning',
  status: 'Active Undergraduate',
  currentFocus: 'Data Structures & Algorithms (C++) · Discrete Mathematics',
  exploring: 'Machine Learning Foundations · Statistical Analysis',
  statement:
    'Dedicated to rigorous fundamentals in algorithmic complexity, data structures, and mathematical foundations before claiming premature milestones.',
};


export interface CreativeVideo {
  id: string;
  title: string;
  category: string;
  src: string;
  channel: '@blue3d_' | '@ravi_solanki_1567';
  channelUrl: string;
  aspectRatio: '9:16' | '16:9';
  resolution: '4K UHD' | '1080p FHD' | '1080p Vertical';
  duration: string;
  description: string;
  badge?: string;
}

export interface CreativeImage {
  id: string;
  title: string;
  category: string;
  src: string;
  dimensions: string;
  description: string;
}

export interface InstagramChannel {
  handle: '@blue3d_' | '@ravi_solanki_1567';
  name: string;
  label: string;
  url: string;
  focus: string;
  bio: string;
  badge: string;
}

export const CREATIVE_BLUE3D = {
  brand: 'Blue3D',
  tagline: '3D · VFX · PHOTO · FILM',
  accentColor: '#FCDD0D', // Sampled directly from ref/blue logo .jpg
  description:
    "Ravi's creative sub-brand exploring spatial forms, 3D modeling, lighting, visual effects, and cinematic film/photography across both official Instagram handles.",
  instagramChannels: [
    {
      handle: '@blue3d_',
      name: 'Blue3D · Spatial Studio',
      label: '@blue3d_',
      url: 'https://www.instagram.com/blue3d_/',
      focus: '3D, VFX, Motion & Renders',
      bio: 'Spatial 3D animation, lighting experiments, procedural geometry, and VFX motion.',
      badge: '3D & MOTION ARCHIVE',
    },
    {
      handle: '@ravi_solanki_1567',
      name: 'Ravi Solanki · Films & Visuals',
      label: '@ravi_solanki_1567',
      url: 'https://www.instagram.com/ravi_solanki_1567/',
      focus: 'Cinematic Film, Reels & Photography',
      bio: 'Cinematic video storytelling, spoken-word reels, street photography, and visual studies.',
      badge: 'FILM & EDITORIAL ARCHIVE',
    },
  ] as InstagramChannel[],
  gallery: [
    { id: '1', title: 'Architectural Shadowplay', category: '3D / Editorial', src: '/creative/1.png', dimensions: '1920 × 1080', description: 'Hard angular light falloff across geometric structures.' },
    { id: '2', title: 'Atmospheric Silhouette', category: '3D / Lighting', src: '/creative/2.png', dimensions: '1920 × 1080', description: 'High-contrast backlight revealing volumetric contours.' },
    { id: '3', title: 'High-Contrast Monolith', category: 'Spatial Form', src: '/creative/3.png', dimensions: '1920 × 1080', description: 'Brutalist massing study with calibrated surface roughness.' },
    { id: '4', title: 'Minimalist Horizon', category: 'Editorial Frame', src: '/creative/4.png', dimensions: '1920 × 1080', description: 'Restrained composition emphasizing negative space.' },
    { id: '5', title: 'Sacred Proportions', category: 'Spatial Study', src: '/creative/5.png', dimensions: '1920 × 1080', description: 'Pillar alignment and golden-ratio spatial harmony.' },
    { id: '6', title: 'Specular Refraction', category: 'Material Study', src: '/creative/6.png', dimensions: '1920 × 1080', description: 'Subsurface scattering and metallic Fresnel reflections.' },
    { id: '7', title: 'Nocturnal Spatial Study', category: 'Cinematic Still', src: '/creative/7.png', dimensions: '1920 × 1080', description: 'Low-key exposure capturing ambient dusk tones.' },
  ] as CreativeImage[],
  videos: [
    {
      id: 'arz-kiya-hai',
      title: 'Arz Kiya Hai',
      category: 'Spoken Word Reel',
      src: '/videos/arz-kiya-hai.mp4',
      channel: '@ravi_solanki_1567',
      channelUrl: 'https://www.instagram.com/ravi_solanki_1567/',
      aspectRatio: '9:16',
      resolution: '1080p Vertical',
      duration: '0:20',
      description: 'Poetic monologue reel with custom atmospheric color grade and voiceover.',
      badge: 'FEATURED REEL',
    },
    {
      id: 'what-you-want-to-be',
      title: 'What You Want To Be',
      category: 'Cinematic Short',
      src: '/videos/what-you-want-to-be.mov',
      channel: '@ravi_solanki_1567',
      channelUrl: 'https://www.instagram.com/ravi_solanki_1567/',
      aspectRatio: '16:9',
      resolution: '4K UHD',
      duration: '0:10',
      description: '4K ultra-definition visual edit with dynamic rhythm and narrative pacing.',
      badge: '4K MASTER',
    },
    {
      id: 'consistency',
      title: 'Consistency',
      category: 'Mindset Reel',
      src: '/videos/consistency.mov',
      channel: '@ravi_solanki_1567',
      channelUrl: 'https://www.instagram.com/ravi_solanki_1567/',
      aspectRatio: '9:16',
      resolution: '1080p Vertical',
      duration: '0:13',
      description: 'Vertical micro-narrative exploring creative discipline and repetition.',
      badge: 'FEATURED REEL',
    },
    {
      id: 'compilation',
      title: 'Creative Reel Compilation',
      category: 'Motion Reel',
      src: '/videos/compilation.mp4',
      channel: '@blue3d_',
      channelUrl: 'https://www.instagram.com/blue3d_/',
      aspectRatio: '9:16',
      resolution: '1080p Vertical',
      duration: '0:25',
      description: 'Curated montage of spatial 3D animations, camera moves, and cuts.',
      badge: 'BLUE3D REEL',
    },
    {
      id: 'too-consumed',
      title: 'Too Consumed',
      category: 'Cinematic Narrative',
      src: '/videos/too-consumed.mov',
      channel: '@ravi_solanki_1567',
      channelUrl: 'https://www.instagram.com/ravi_solanki_1567/',
      aspectRatio: '16:9',
      resolution: '1080p FHD',
      duration: '0:12',
      description: 'Moody visual piece examining sensory overstimulation and modern focus.',
    },
    {
      id: 'wasted-potential',
      title: 'Wasted Potential',
      category: 'Cinematic Narrative',
      src: '/videos/wasted-potential.mov',
      channel: '@ravi_solanki_1567',
      channelUrl: 'https://www.instagram.com/ravi_solanki_1567/',
      aspectRatio: '16:9',
      resolution: '1080p FHD',
      duration: '0:13',
      description: 'Fast-cut cinematic study of ambition, tension, and latent creative capacity.',
    },
    {
      id: 'loop',
      title: 'Graded Cinematic Loop',
      category: 'VFX / Motion',
      src: '/videos/loop.mp4',
      channel: '@blue3d_',
      channelUrl: 'https://www.instagram.com/blue3d_/',
      aspectRatio: '16:9',
      resolution: '1080p FHD',
      duration: '0:08',
      description: 'Seamless high-contrast color grade and 3D surface reflection loop.',
    },
    {
      id: 'temple',
      title: 'Atmospheric Spatial Study',
      category: 'Environment / 3D',
      src: '/videos/temple.mp4',
      channel: '@blue3d_',
      channelUrl: 'https://www.instagram.com/blue3d_/',
      aspectRatio: '16:9',
      resolution: '1080p FHD',
      duration: '0:18',
      description: 'Volumetric light shafts, classical architectural pillars, and solemn spatial mood.',
    },
    {
      id: 'edited-vihar',
      title: 'Vihar',
      category: 'Cinematic Film',
      src: '/videos/edited-vihar.mov',
      channel: '@ravi_solanki_1567',
      channelUrl: 'https://www.instagram.com/ravi_solanki_1567/',
      aspectRatio: '16:9',
      resolution: '1080p FHD',
      duration: '0:15',
      description: 'Graded architectural visual study exploring calm and spatial harmony.',
    },
    {
      id: 'test-abc-2',
      title: 'Spatial Sequence 4K',
      category: 'VFX / Motion',
      src: '/videos/test-abc-2.mov',
      channel: '@blue3d_',
      channelUrl: 'https://www.instagram.com/blue3d_/',
      aspectRatio: '16:9',
      resolution: '4K UHD',
      duration: '0:16',
      description: 'Ultra-high definition camera motion and surface detail test.',
    },
  ] as CreativeVideo[],
};

