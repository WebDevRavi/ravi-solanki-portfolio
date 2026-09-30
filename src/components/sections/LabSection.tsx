interface LabExperiment {
  name: string;
  year: string;
  focus: string;
  status: string;
  link?: string;
}

const EXPERIMENTS: LabExperiment[] = [
  {
    name: 'Vortex Decagonal Tunnel Generator',
    year: '2026',
    focus: 'Procedural Mesh Extrusion / Memory Recycling',
    status: 'Merged in Vortex Glide',
  },
  {
    name: 'Mechanical Keystroke Synthesizer',
    year: '2026',
    focus: 'Zero-Latency Web Audio Oscillator Envelopes',
    status: 'Merged in TypeRush',
  },
  {
    name: 'Stroop Interference Matrix',
    year: '2026',
    focus: 'Cognitive Reaction Curve Calibration',
    status: 'Complete',
  },
  {
    name: 'Ascending Number Chime Ladder',
    year: '2026',
    focus: 'Procedural Audio Harmonic Feedback',
    status: 'Complete',
  },
  {
    name: 'Responsive Touch Drag Normalizer',
    year: '2026',
    focus: 'Multi-touch Delta Velocity Smoothing',
    status: 'Complete',
  },
];

export function LabSection() {
  return (
    <section id="lab" className="w-full border-b border-[var(--border)] px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs tracking-widest text-[var(--blue)] uppercase">
              Section // 03
            </span>
            <h2 className="mt-1 font-sans text-3xl font-extrabold tracking-tight text-[var(--text)] md:text-5xl">
              THE LAB
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-[var(--muted)]">
            Algorithmic tests, audio synthesizers, and mechanical interaction prototypes.
          </p>
        </div>

        {/* Experiment list */}
        <div className="divide-y divide-[var(--border)] rounded-xl border border-[var(--border)] bg-[var(--surface)]">
          {EXPERIMENTS.map((exp) => (
            <div
              key={exp.name}
              className="flex flex-col justify-between gap-3 p-5 transition-colors hover:bg-[var(--surface-raised)] sm:flex-row sm:items-center sm:p-6"
            >
              <div className="flex flex-col">
                <span className="font-sans text-base font-bold text-[var(--text)]">
                  {exp.name}
                </span>
                <span className="font-mono text-xs text-[var(--muted)]">
                  {exp.focus}
                </span>
              </div>

              <div className="flex items-center gap-6 font-mono text-xs">
                <span className="text-[var(--muted-dark)]">{exp.year}</span>
                <span className="rounded bg-[var(--surface-elevated)] px-2.5 py-1 text-[11px] text-[var(--text)]">
                  {exp.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
