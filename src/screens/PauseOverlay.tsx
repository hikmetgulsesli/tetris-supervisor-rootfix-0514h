// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Gamepad2, Settings } from "lucide-react";


export type PauseOverlayActionId = "button-1-1" | "button-2-2" | "command-3" | "database-4" | "system-5" | "resume-6" | "restart-7" | "quit-to-menu-8";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* Top Navigation Shell */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-gutter h-target-min bg-surface border-b border-outline-variant">
      <div className="text-headline-md font-headline-md font-bold tracking-tighter text-primary uppercase">
            TETRIS SUPERVISOR
          </div>
      <div className="flex items-center gap-2 hidden md:flex">
      <button className="text-on-surface-variant hover:bg-surface-container-highest transition-colors active:scale-95 duration-100 w-target-min h-target-min flex items-center justify-center rounded" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-highest transition-colors active:scale-95 duration-100 w-target-min h-target-min flex items-center justify-center rounded" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Game Canvas (Background Layer) */}
      <main className="pt-[60px] pb-[80px] min-h-screen flex flex-col md:flex-row items-center justify-center gap-gutter px-gutter">
      {/* Left Stats Panel */}
      <aside className="flex flex-row md:flex-col gap-gutter w-full md:w-auto justify-center md:justify-start order-2 md:order-1">
      {/* Hold Queue */}
      <div className="bg-surface-container border border-outline-variant p-gutter w-[120px] h-[120px] flex flex-col relative">
      <div className="font-label-caps text-label-caps text-on-surface-variant absolute top-unit left-unit">HOLD</div>
      </div>
      {/* Score Display */}
      <div className="bg-surface-container border border-outline-variant p-gutter w-[120px] flex flex-col relative mt-auto md:mt-0">
      <div className="font-label-caps text-label-caps text-on-surface-variant mb-2">SCORE</div>
      <div className="font-display-score text-display-score text-primary">024K</div>
      <div className="font-label-caps text-label-caps text-on-surface-variant mt-4 mb-2">LEVEL</div>
      <div className="font-headline-lg text-headline-lg text-on-surface">12</div>
      </div>
      </aside>
      {/* Game Grid (10x20) */}
      <div className="order-1 md:order-2 bg-surface border border-outline-variant w-[260px] h-[520px] relative overflow-hidden flex items-center justify-center">
      {/* Simulated grid pattern using repeating gradients to save DOM nodes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--tw-colors-outline-variant)_1px,transparent_1px),linear-gradient(to_bottom,var(--tw-colors-outline-variant)_1px,transparent_1px)] bg-[size:26px_26px] opacity-20"></div>
      {/* Faint pieces representation */}
      <div className="absolute bottom-0 left-[26px] w-[78px] h-[26px] bg-secondary-container/30 border border-secondary/20"></div>
      <div className="absolute bottom-[26px] left-[52px] w-[52px] h-[52px] bg-tertiary-container/30 border border-tertiary/20"></div>
      <div className="absolute bottom-0 right-[26px] w-[104px] h-[52px] bg-primary-container/30 border border-primary/20"></div>
      </div>
      {/* Right Stats Panel */}
      <aside className="flex flex-row md:flex-col gap-gutter w-full md:w-auto justify-center md:justify-start order-3">
      {/* Next Queue */}
      <div className="bg-surface-container border border-outline-variant p-gutter w-[120px] h-[300px] flex flex-col relative">
      <div className="font-label-caps text-label-caps text-on-surface-variant absolute top-unit left-unit">NEXT</div>
      {/* Mock next pieces */}
      <div className="mt-8 mx-auto w-[52px] h-[52px] bg-surface-bright/50 border border-outline-variant/50"></div>
      <div className="mt-8 mx-auto w-[78px] h-[26px] bg-surface-bright/50 border border-outline-variant/50"></div>
      <div className="mt-8 mx-auto w-[52px] h-[78px] bg-surface-bright/50 border border-outline-variant/50"></div>
      </div>
      </aside>
      </main>
      {/* Bottom Navigation Shell (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 pb-safe bg-surface-container border-t border-outline-variant">
      <button className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-none px-4 py-1 border-b-2 border-primary w-full h-full hover:bg-surface-bright transition-colors active:opacity-80 duration-75" type="button" data-action-id="command-3" onClick={actions?.["command-3"]}>
      <Gamepad2 className="text-[24px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps mt-1">COMMAND</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 w-full h-full hover:bg-surface-bright transition-colors active:opacity-80 duration-75" type="button" data-action-id="database-4" onClick={actions?.["database-4"]}>
      <Circle className="text-[24px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps mt-1">DATABASE</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 w-full h-full hover:bg-surface-bright transition-colors active:opacity-80 duration-75" type="button" data-action-id="system-5" onClick={actions?.["system-5"]}>
      <Settings className="text-[24px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps mt-1">SYSTEM</span>
      </button>
      </nav>
      {/* ========================================== */}
      {/* PAUSE OVERLAY (Primary Focus of this Task) */}
      {/* ========================================== */}
      <div className="fixed inset-0 z-[100] bg-background/70 backdrop-blur-md flex items-center justify-center p-gutter">
      <div className="bg-surface-container border border-outline-variant w-full max-w-[360px] flex flex-col shadow-2xl">
      {/* Modal Header */}
      <div className="px-panel-padding py-6 border-b border-outline-variant flex justify-center items-center relative">
      <div className="absolute left-6 top-6 w-2 h-2 rounded-full bg-error animate-pulse"></div>
      <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-widest">GAME PAUSED</h2>
      </div>
      {/* Modal Body (Actions) */}
      <div className="p-panel-padding flex flex-col gap-4">
      <button className="group relative w-full flex items-center justify-center bg-surface border border-primary h-target-min hover:bg-primary transition-colors active:scale-[0.98]" type="button" data-action-id="resume-6" onClick={actions?.["resume-6"]}>
      <span className="font-label-caps text-label-caps text-primary group-hover:text-on-primary uppercase transition-colors">RESUME</span>
      </button>
      <button className="group relative w-full flex items-center justify-center bg-surface border border-outline h-target-min hover:border-primary hover:bg-surface-bright transition-colors active:scale-[0.98]" type="button" data-action-id="restart-7" onClick={actions?.["restart-7"]}>
      <span className="font-label-caps text-label-caps text-on-surface group-hover:text-primary uppercase transition-colors">RESTART</span>
      </button>
      <button className="group relative w-full flex items-center justify-center bg-surface border border-error h-target-min hover:bg-error transition-colors active:scale-[0.98]" type="button" data-action-id="quit-to-menu-8" onClick={actions?.["quit-to-menu-8"]}>
      <span className="font-label-caps text-label-caps text-error group-hover:text-on-error uppercase transition-colors">QUIT TO MENU</span>
      </button>
      </div>
      {/* Supervisor Feed (Ambient Tech Flavour) */}
      <div className="px-panel-padding pb-6 flex items-center gap-2 opacity-50">
      <Circle className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      <div className="font-terminal-sm text-terminal-sm text-on-surface-variant overflow-hidden whitespace-nowrap text-ellipsis">
                Supervisor thread interrupted. Waiting for command input...
              </div>
      </div>
      </div>
      </div>
    </>
  );
}
