'use client';

import React, { useState, useEffect } from 'react';
import { sound } from '@/utils/audio';

export function AIMLSection() {
  // Gradient Descent Interactive Simulation
  const [theta, setTheta] = useState(2.8);
  const [learningRate, setLearningRate] = useState(0.12);
  const [lossHistory, setLossHistory] = useState<number[]>([]);
  const [isAutoRunning, setIsAutoRunning] = useState(false);

  // Objective function: L(theta) = 0.4 * theta^2 - cos(theta * 1.5) + 1
  const lossFn = (t: number) => 0.4 * t * t - Math.cos(t * 1.5) + 1;
  const gradFn = (t: number) => 0.8 * t + 1.5 * Math.sin(t * 1.5);
  // Map mathematical loss value to SVG inverted Y-coordinates (valley bowl shape)
  const mapY = (loss: number) => Math.max(0.3, Math.min(3.5, 3.4 - loss * 0.65));

  const stepOptimization = () => {
    setTheta((prev) => {
      const grad = gradFn(prev);
      const next = prev - learningRate * grad;
      sound.playClick(600 + Math.abs(grad) * 200, 0.03);
      setLossHistory((h) => [...h.slice(-15), lossFn(next)]);
      return next;
    });
  };

  const resetOptimization = () => {
    setTheta(2.8);
    setLossHistory([]);
    setIsAutoRunning(false);
    sound.playPowerUp();
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoRunning) {
      timer = setInterval(() => {
        setTheta((prev) => {
          const grad = gradFn(prev);
          if (Math.abs(grad) < 0.02) {
            setIsAutoRunning(false);
            sound.playPowerUp();
            return prev;
          }
          const next = prev - learningRate * grad;
          sound.playClick(700 + Math.abs(grad) * 150, 0.02);
          setLossHistory((h) => [...h.slice(-15), lossFn(next)]);
          return next;
        });
      }, 120);
    }
    return () => clearInterval(timer);
  }, [isAutoRunning, learningRate]);

  return (
    <section id="aiml" className="w-full px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex items-center justify-between border-b border-[#1f2228] pb-6 font-mono text-xs text-[#9ca3af]">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#4B7BFF]" />
            <span className="tracking-widest uppercase font-semibold text-white">02 // ACADEMIC RIGOR & ALGORITHMS</span>
          </div>
          <span>B.TECH CSE · AIML</span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Academic Credentials & Philosophy */}
          <div className="lg:col-span-6">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#4B7BFF] uppercase">
              Foundational Focus
            </span>
            <h2 className="mt-3 font-sans text-4xl font-black tracking-tight text-white sm:text-6xl">
              AI / ML & SYSTEMS
            </h2>

            <p className="mt-4 font-mono text-base font-semibold text-[#FCDD0D]">
              B.Tech Computer Science & Engineering (AIML)
            </p>

            <p className="mt-6 font-sans text-sm leading-relaxed text-[#9ca3af] md:text-base">
              Rejecting shallow wrapper engineering in favor of deep mathematical and algorithmic foundations. My curriculum and research focus are centered on numerical optimization, computational geometry, memory-efficient data structures in C++, and the linear algebra backing neural architectures.
            </p>

            {/* Core Competency Matrix */}
            <div className="mt-10 grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="rounded-lg border border-[#27272a] bg-[#0c0d10] p-4">
                <span className="text-[10px] text-[#6b7280] block uppercase">LANGUAGE & MEMORY</span>
                <span className="mt-1 block font-bold text-white">C++ / C / Python</span>
                <span className="mt-1 block text-[11px] text-[#9ca3af]">Pointers, memory layout, STL</span>
              </div>
              <div className="rounded-lg border border-[#27272a] bg-[#0c0d10] p-4">
                <span className="text-[10px] text-[#6b7280] block uppercase">ALGORITHMS</span>
                <span className="mt-1 block font-bold text-white">DSA Specialization</span>
                <span className="mt-1 block text-[11px] text-[#9ca3af]">Graphs, DP, Trees, Asymptotics</span>
              </div>
              <div className="rounded-lg border border-[#27272a] bg-[#0c0d10] p-4">
                <span className="text-[10px] text-[#6b7280] block uppercase">MATHEMATICAL ENGINE</span>
                <span className="mt-1 block font-bold text-white">Linear Algebra & Calc</span>
                <span className="mt-1 block text-[11px] text-[#9ca3af]">Matrices, Gradients, Jacobians</span>
              </div>
              <div className="rounded-lg border border-[#27272a] bg-[#0c0d10] p-4">
                <span className="text-[10px] text-[#6b7280] block uppercase">GRAPHICS MATH</span>
                <span className="mt-1 block font-bold text-white">3D Transformations</span>
                <span className="mt-1 block text-[11px] text-[#9ca3af]">Quaternions, Projections, Shaders</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Algorithmic Laboratory */}
          <div className="flex flex-col justify-between rounded-xl border border-[#27272a] bg-[#0a0b0e] p-6 shadow-2xl lg:col-span-6 md:p-8">
            <div>
              <div className="flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold text-white">ALGORITHMIC LAB: GRADIENT DESCENT</span>
                </div>
                <span className="text-[#FCDD0D]">REAL-TIME STEPPER</span>
              </div>
              <p className="mt-2 font-mono text-[11px] text-[#6b7280]">
                Objective: Minimize loss surface L(θ) = 0.4θ² - cos(1.5θ) + 1 via gradient descent.
              </p>

              {/* Visual Curve Simulation Canvas */}
              <div className="relative mt-6 h-48 w-full rounded-lg border border-[#1f2228] bg-[#050608] p-4 flex flex-col justify-end">
                {/* SVG Curve Visualization */}
                <svg className="h-full w-full overflow-visible" viewBox="-3.5 -0.5 7 4">
                  {/* Grid Lines */}
                  <line x1="-3.5" y1="0" x2="3.5" y2="0" stroke="#1f2228" strokeWidth="0.05" />
                  <line x1="0" y1="-0.5" x2="0" y2="3.5" stroke="#1f2228" strokeWidth="0.05" />

                  {/* Parametric Curve Path (Bowl valley shape) */}
                  <path
                    d={`M -3.2 ${mapY(lossFn(-3.2))} ${Array.from({ length: 64 })
                      .map((_, i) => {
                        const x = -3.2 + (i / 63) * 6.4;
                        return `L ${x.toFixed(2)} ${mapY(lossFn(x)).toFixed(2)}`;
                      })
                      .join(' ')}`}
                    fill="none"
                    stroke="#4B7BFF"
                    strokeWidth="0.1"
                  />

                  {/* Active Parameter Point (Theta) */}
                  <circle
                    cx={theta}
                    cy={mapY(lossFn(theta))}
                    r="0.2"
                    fill="#FCDD0D"
                    className="transition-all duration-75 shadow-lg"
                  />
                </svg>

                {/* Live Floating Loss Metric */}
                <div className="absolute top-3 right-3 font-mono text-xs">
                  <span className="text-[#6b7280]">CURRENT LOSS:</span>{' '}
                  <span className="font-bold text-[#FCDD0D]">{lossFn(theta).toFixed(4)}</span>
                </div>
              </div>

              {/* Lab Controls */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="text-[#6b7280]">LEARNING RATE (η):</span>
                  {[0.05, 0.12, 0.25].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => {
                        setLearningRate(rate);
                        sound.playClick(800, 0.02);
                      }}
                      className={`rounded px-2 py-1 font-bold ${
                        learningRate === rate ? 'bg-[#4B7BFF] text-white' : 'bg-[#18191e] text-[#9ca3af]'
                      }`}
                    >
                      {rate}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={stepOptimization}
                    className="rounded border border-[#3f3f46] bg-[#18191e] px-3 py-1.5 font-bold text-white transition-colors hover:bg-white hover:text-black"
                  >
                    STEP ∇L(θ)
                  </button>
                  <button
                    onClick={() => {
                      setIsAutoRunning(!isAutoRunning);
                      sound.playClick(900, 0.03);
                    }}
                    className={`rounded px-3 py-1.5 font-bold transition-all ${
                      isAutoRunning ? 'bg-rose-500 text-white animate-pulse' : 'bg-[#FCDD0D] text-black'
                    }`}
                  >
                    {isAutoRunning ? 'STOP' : 'AUTO RUN'}
                  </button>
                  <button
                    onClick={resetOptimization}
                    className="text-[#6b7280] hover:text-white"
                  >
                    RESET
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-[#1f2228] pt-4 font-mono text-[11px] text-[#6b7280]">
              PARAMETER THETA: <span className="text-white font-bold">{theta.toFixed(4)}</span> · GRADIENT: <span className="text-white font-bold">{gradFn(theta).toFixed(4)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
