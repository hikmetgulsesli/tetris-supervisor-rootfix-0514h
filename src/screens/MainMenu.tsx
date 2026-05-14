// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type MainMenuActionId = "start-game-1" | "challenge-mode-2" | "controls-3" | "settings-4";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Blurred Background Grid */}
      <div className="absolute inset-0 z-0 bg-tetris-grid opacity-50 blur-[2px] transform scale-110"></div>
      {/* Central Vignette for Depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0e1416_70%)]"></div>
      {/* Main Content Container */}
      <main className="relative z-10 flex flex-col items-center w-full max-w-lg px-gutter">
      {/* Header Section */}
      <div className="text-center mb-12 flex flex-col items-center">
      <div className="flex items-center gap-2 mb-4 text-primary opacity-80">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(76,215,246,0.8)]"></span>
      <span className="text-terminal-sm font-terminal-sm uppercase">System Online</span>
      </div>
      <h1 className="text-display-score font-display-score text-primary uppercase tracking-tighter drop-shadow-[0_0_12px_rgba(76,215,246,0.3)]">
                      TETRIS SUPERVISOR
                  </h1>
      <p className="text-terminal-sm font-terminal-sm text-on-surface-variant mt-2 uppercase tracking-widest">
                      Command Terminal V.4.0
                  </p>
      </div>
      {/* Navigation / Action Menu */}
      <nav className="w-full flex flex-col gap-3 relative">
      {/* Decorative corner brackets */}
      <div className="absolute -top-4 -left-4 w-4 h-4 border-t-2 border-l-2 border-outline-variant"></div>
      <div className="absolute -top-4 -right-4 w-4 h-4 border-t-2 border-r-2 border-outline-variant"></div>
      <div className="absolute -bottom-4 -left-4 w-4 h-4 border-b-2 border-l-2 border-outline-variant"></div>
      <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b-2 border-r-2 border-outline-variant"></div>
      <button className="group w-full h-target-min bg-surface border border-outline-variant flex items-center justify-between px-6 transition-colors duration-150 hover:bg-primary hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background active:scale-[0.98]" type="button" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
      <span className="text-label-caps font-label-caps text-on-surface group-hover:text-on-primary tracking-widest uppercase">
                          START GAME
                      </span>
      <Play className="text-primary group-hover:text-on-primary text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="group w-full h-target-min bg-surface border border-outline-variant flex items-center justify-between px-6 transition-colors duration-150 hover:bg-primary hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background active:scale-[0.98]" type="button" data-action-id="challenge-mode-2" onClick={actions?.["challenge-mode-2"]}>
      <span className="text-label-caps font-label-caps text-on-surface group-hover:text-on-primary tracking-widest uppercase">
                          CHALLENGE MODE
                      </span>
      <Circle className="text-primary group-hover:text-on-primary text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="group w-full h-target-min bg-surface border border-outline-variant flex items-center justify-between px-6 transition-colors duration-150 hover:bg-primary hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background active:scale-[0.98]" type="button" data-action-id="controls-3" onClick={actions?.["controls-3"]}>
      <span className="text-label-caps font-label-caps text-on-surface group-hover:text-on-primary tracking-widest uppercase">
                          CONTROLS
                      </span>
      <Circle className="text-primary group-hover:text-on-primary text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="group w-full h-target-min bg-surface border border-outline-variant flex items-center justify-between px-6 transition-colors duration-150 hover:bg-primary hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background active:scale-[0.98]" type="button" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <span className="text-label-caps font-label-caps text-on-surface group-hover:text-on-primary tracking-widest uppercase">
                          SETTINGS
                      </span>
      <Settings className="text-primary group-hover:text-on-primary text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </nav>
      {/* Footer Log */}
      <div className="mt-12 text-center opacity-50">
      <p className="text-terminal-sm font-terminal-sm text-on-surface-variant">
                      &gt; AWAITING COMMAND INPUT...
                  </p>
      </div>
      </main>
    </>
  );
}
