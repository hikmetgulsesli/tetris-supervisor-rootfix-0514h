// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, MousePointerClick } from "lucide-react";


export type ControlsHelpActionId = "acknowledge-and-close-1";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* Supressed Global Nav (TopAppBar/BottomNavBar) per Conflict Resolution Protocol -> Automatic Suppression for task-focused modal/screen */}
      <main className="w-full max-w-3xl bg-surface/95 backdrop-blur-md border border-outline-variant flex flex-col max-h-[921px] shadow-2xl relative overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-outline-variant bg-surface-container-lowest">
      <div className="flex items-center gap-3">
      <Circle className="text-primary" aria-hidden={true} focusable="false" />
      <h1 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight">System Manual</h1>
      </div>
      <div className="flex items-center gap-2 text-primary">
      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
      <span className="font-label-caps text-label-caps uppercase">Online</span>
      </div>
      </header>
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
      {/* Section: Keyboard Controls */}
      <section>
      <div className="flex items-center gap-2 mb-4 border-b border-surface-container-highest pb-2">
      <Circle className="text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-primary uppercase">Input_Method: Keyboard</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
      <div className="flex justify-between items-center p-2 rounded hover:bg-surface-container transition-colors">
      <span className="font-terminal-sm text-terminal-sm text-on-surface-variant">Move Left / Right</span>
      <div className="flex gap-1">
      <kbd className="min-w-[28px] h-7 flex items-center justify-center bg-surface-container border border-outline-variant rounded font-terminal-sm text-terminal-sm text-on-surface px-1">←</kbd>
      <kbd className="min-w-[28px] h-7 flex items-center justify-center bg-surface-container border border-outline-variant rounded font-terminal-sm text-terminal-sm text-on-surface px-1">→</kbd>
      </div>
      </div>
      <div className="flex justify-between items-center p-2 rounded hover:bg-surface-container transition-colors">
      <span className="font-terminal-sm text-terminal-sm text-on-surface-variant">Rotate</span>
      <kbd className="min-w-[28px] h-7 flex items-center justify-center bg-surface-container border border-outline-variant rounded font-terminal-sm text-terminal-sm text-on-surface px-2">↑</kbd>
      </div>
      <div className="flex justify-between items-center p-2 rounded hover:bg-surface-container transition-colors">
      <span className="font-terminal-sm text-terminal-sm text-on-surface-variant">Soft Drop</span>
      <kbd className="min-w-[28px] h-7 flex items-center justify-center bg-surface-container border border-outline-variant rounded font-terminal-sm text-terminal-sm text-on-surface px-2">↓</kbd>
      </div>
      <div className="flex justify-between items-center p-2 rounded hover:bg-surface-container transition-colors">
      <span className="font-terminal-sm text-terminal-sm text-on-surface-variant">Hard Drop</span>
      <kbd className="h-7 flex items-center justify-center bg-surface-container border border-outline-variant rounded font-terminal-sm text-terminal-sm text-on-surface px-4">Space</kbd>
      </div>
      <div className="flex justify-between items-center p-2 rounded hover:bg-surface-container transition-colors">
      <span className="font-terminal-sm text-terminal-sm text-on-surface-variant">Hold Piece</span>
      <kbd className="min-w-[28px] h-7 flex items-center justify-center bg-surface-container border border-outline-variant rounded font-terminal-sm text-terminal-sm text-on-surface px-2">C</kbd>
      </div>
      <div className="flex justify-between items-center p-2 rounded hover:bg-surface-container transition-colors">
      <span className="font-terminal-sm text-terminal-sm text-on-surface-variant">Pause System</span>
      <kbd className="min-w-[28px] h-7 flex items-center justify-center bg-surface-container border border-outline-variant rounded font-terminal-sm text-terminal-sm text-on-surface px-2">P</kbd>
      </div>
      </div>
      </section>
      {/* Section: Touch Controls */}
      <section>
      <div className="flex items-center gap-2 mb-4 border-b border-surface-container-highest pb-2">
      <MousePointerClick className="text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-primary uppercase">Input_Method: Touch Interface</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-surface-container p-4 border border-outline-variant flex items-start gap-3">
      <Circle className="text-secondary" aria-hidden={true} focusable="false" />
      <div>
      <h3 className="font-terminal-sm text-terminal-sm text-on-surface mb-1">Swipe L/R</h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm">Translate active unit laterally across the grid.</p>
      </div>
      </div>
      <div className="bg-surface-container p-4 border border-outline-variant flex items-start gap-3">
      <Circle className="text-secondary" aria-hidden={true} focusable="false" />
      <div>
      <h3 className="font-terminal-sm text-terminal-sm text-on-surface mb-1">Tap Screen</h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm">Rotate active unit clockwise 90 degrees.</p>
      </div>
      </div>
      <div className="bg-surface-container p-4 border border-outline-variant flex items-start gap-3">
      <Circle className="text-secondary" aria-hidden={true} focusable="false" />
      <div>
      <h3 className="font-terminal-sm text-terminal-sm text-on-surface mb-1">Swipe Down</h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm">Initiate Soft Drop (accelerated descent).</p>
      </div>
      </div>
      <div className="bg-surface-container p-4 border border-outline-variant flex items-start gap-3">
      <Circle className="text-secondary" aria-hidden={true} focusable="false" />
      <div>
      <h3 className="font-terminal-sm text-terminal-sm text-on-surface mb-1">Swipe Up</h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-sm">Execute Hard Drop (instant lock sequence).</p>
      </div>
      </div>
      </div>
      </section>
      {/* Section: Rules & Scoring */}
      <section>
      <div className="flex items-center gap-2 mb-4 border-b border-surface-container-highest pb-2">
      <Circle className="text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-primary uppercase">Protocol_Parameters: Scoring &amp; Levels</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
      <div className="bg-surface-container-high border-l-2 border-primary p-3 flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant">SINGLE</span>
      <span className="font-terminal-sm text-terminal-sm text-on-surface">100 pts</span>
      </div>
      <div className="bg-surface-container-high border-l-2 border-primary p-3 flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant">DOUBLE</span>
      <span className="font-terminal-sm text-terminal-sm text-on-surface">300 pts</span>
      </div>
      <div className="bg-surface-container-high border-l-2 border-primary p-3 flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant">TRIPLE</span>
      <span className="font-terminal-sm text-terminal-sm text-on-surface">500 pts</span>
      </div>
      <div className="bg-surface-container-high border-l-2 border-tertiary p-3 flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-tertiary/10"></div>
      <span className="font-label-caps text-label-caps text-tertiary relative z-10">TETRIS</span>
      <span className="font-terminal-sm text-terminal-sm text-on-surface relative z-10">800 pts</span>
      </div>
      </div>
      <div className="bg-surface-container border border-outline-variant p-4">
      <p className="font-terminal-sm text-terminal-sm text-on-surface-variant leading-relaxed">
      <span className="text-primary font-bold">LEVEL PROGRESSION:</span> System gravity increments exponentially. Advancement occurs upon clearing 10 lines. Back-to-Back Tetris or T-Spin executions yield a 1.5x score multiplier.
                          </p>
      </div>
      </section>
      </div>
      {/* Footer / Action */}
      <footer className="p-6 border-t border-outline-variant bg-surface">
      <button className="w-full flex items-center justify-center gap-2 py-3 border border-primary text-primary font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background h-target-min" type="button" data-action-id="acknowledge-and-close-1" onClick={actions?.["acknowledge-and-close-1"]}>
      <span>Acknowledge &amp; Close</span>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </footer>
      </main>
    </>
  );
}
