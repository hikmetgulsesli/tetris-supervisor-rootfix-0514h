// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Settings } from "lucide-react";


export type GameOverActionId = "button-1-1" | "button-2-2" | "play-again-3" | "leaderboard-4" | "exit-menu-5";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-gutter h-target-min bg-surface dark:bg-surface border-b border-outline-variant dark:border-outline-variant">
      <div className="flex items-center gap-4">
      <span className="text-headline-md font-headline-md font-bold tracking-tighter text-primary dark:text-primary uppercase">TETRIS SUPERVISOR</span>
      </div>
      <div className="flex items-center gap-2">
      <button className="h-target-min w-target-min flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors active:scale-95 duration-100 rounded" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="h-target-min w-target-min flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors active:scale-95 duration-100 rounded" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Content Area: Game Over Overlay */}
      <main className="flex-grow flex items-center justify-center pt-target-min pb-16 md:pb-0 px-gutter relative overflow-hidden">
      {/* Faint Grid Background to represent terminal deep background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{backgroundImage: "radial-gradient(circle at center, #334155 1px, transparent 1px)", backgroundSize: "24px 24px"}}></div>
      {/* Backdrop Filter for Depth */}
      <div className="relative z-10 w-full max-w-md bg-surface-container-low/80 backdrop-blur-md border border-outline-variant rounded-lg shadow-2xl p-6 md:p-8 flex flex-col gap-8">
      {/* Header Section */}
      <div className="text-center space-y-2">
      <h1 className="text-display-score font-display-score text-error animate-pulse">GAME OVER</h1>
      <p className="text-terminal-sm font-terminal-sm text-on-surface-variant">BLOCK PLACEMENT FAILED. TERMINAL LOCKED.</p>
      </div>
      {/* Stats Container */}
      <div className="bg-surface border border-outline-variant rounded p-4 flex flex-col gap-4 relative overflow-hidden">
      {/* Decorative Top Left Label */}
      <div className="absolute top-0 left-0 bg-outline-variant text-on-surface-variant px-2 py-1 flex items-center gap-1 rounded-br">
      <span className="h-1.5 w-1.5 rounded-full bg-error animate-ping"></span>
      <span className="text-[10px] font-label-caps uppercase tracking-widest">SYS_RPT_FINAL</span>
      </div>
      <div className="pt-6 space-y-4">
      {/* Final Score */}
      <div className="flex justify-between items-end border-b border-surface-container-highest pb-2">
      <span className="text-label-caps font-label-caps text-on-surface-variant">FINAL SCORE</span>
      <div className="flex items-center gap-2">
      <span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">NEW HIGH</span>
      <span className="text-headline-lg font-headline-lg text-primary">1,245,900</span>
      </div>
      </div>
      {/* Lines Cleared */}
      <div className="flex justify-between items-end border-b border-surface-container-highest pb-2">
      <span className="text-label-caps font-label-caps text-on-surface-variant">LINES CLEARED</span>
      <span className="text-headline-md font-headline-md text-on-surface">142</span>
      </div>
      {/* Level Reached */}
      <div className="flex justify-between items-end">
      <span className="text-label-caps font-label-caps text-on-surface-variant">LEVEL REACHED</span>
      <span className="text-headline-md font-headline-md text-on-surface">15</span>
      </div>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
      <button className="w-full h-target-min flex items-center justify-center gap-2 bg-primary text-on-primary font-label-caps text-label-caps rounded border border-primary hover:bg-primary-fixed transition-colors active:scale-95 duration-100" type="button" data-action-id="play-again-3" onClick={actions?.["play-again-3"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                          PLAY AGAIN
                      </button>
      <div className="grid grid-cols-2 gap-3">
      <button className="w-full h-target-min flex items-center justify-center gap-2 bg-transparent text-primary border border-outline-variant rounded font-label-caps text-label-caps hover:bg-surface-container-highest hover:border-primary transition-colors active:scale-95 duration-100" type="button" data-action-id="leaderboard-4" onClick={actions?.["leaderboard-4"]}>
      <Circle aria-hidden={true} focusable="false" />
                              LEADERBOARD
                          </button>
      <button className="w-full h-target-min flex items-center justify-center gap-2 bg-transparent text-on-surface-variant border border-outline-variant rounded font-label-caps text-label-caps hover:bg-surface-container-highest hover:text-error hover:border-error transition-colors active:scale-95 duration-100" type="button" data-action-id="exit-menu-5" onClick={actions?.["exit-menu-5"]}>
      <Circle aria-hidden={true} focusable="false" />
                              EXIT MENU
                          </button>
      </div>
      </div>
      {/* Mini Supervisor Feed */}
      <div className="mt-2 p-2 bg-surface-dim border-t border-outline-variant text-terminal-sm font-terminal-sm text-on-surface-variant opacity-70">
      <div className="flex items-center gap-2">
      <span className="text-error">&gt;</span>
      <span className="typing-animation">CRITICAL FAILURE AT ROW 20. SESSION TERMINATED.</span>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
