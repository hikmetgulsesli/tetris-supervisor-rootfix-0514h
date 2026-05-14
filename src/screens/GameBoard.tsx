// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, Circle, Gamepad2, RotateCw, Settings } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "reboot-sequence-3" | "button-4-4" | "button-5-5" | "button-6-6" | "button-7-7" | "button-8-8" | "button-9-9" | "command-10" | "database-11" | "system-12";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface text-primary dark:text-primary fixed top-0 left-0 w-full z-50 flex justify-between items-center px-gutter h-target-min border-b border-outline-variant dark:border-outline-variant flat no shadows">
      <div className="flex items-center gap-3">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary text-xl" aria-hidden={true} focusable="false" />
      <h1 className="text-headline-md font-headline-md font-bold tracking-tighter text-primary dark:text-primary uppercase">TETRIS SUPERVISOR</h1>
      </div>
      <div className="flex items-center gap-2">
      <button aria-label="settings" className="w-target-min h-target-min flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded active:scale-95 duration-100" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings  data-icon="settings" aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="terminal" className="w-target-min h-target-min flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded active:scale-95 duration-100" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle  data-icon="terminal" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Workspace */}
      <main className="flex-1 mt-target-min mb-16 md:mb-0 pt-4 md:pt-8 px-4 flex flex-col md:flex-row justify-center items-start gap-6 max-w-[1400px] mx-auto w-full">
      {/* Left Panel: Status & Hold (Desktop) / Top Bar (Mobile) */}
      <aside className="w-full md:w-[260px] flex flex-row md:flex-col gap-4 order-2 md:order-1 flex-shrink-0">
      {/* Hold Queue */}
      <div className="flex-1 md:flex-none bg-surface-container border border-outline-variant rounded relative p-4 pt-8">
      <div className="absolute top-2 left-3 flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
      <span className="text-label-caps font-label-caps text-on-surface-variant tracking-widest uppercase">HELD ASSET</span>
      </div>
      <div className="h-24 md:h-32 flex items-center justify-center bg-surface-container-low border border-outline-variant/50 rounded inner-shadow">
      {/* Placeholder for held piece */}
      <div className="grid grid-cols-4 grid-rows-2 gap-[1px]">
      <div className="w-5 h-5 bg-tertiary border border-surface shadow-[0_0_8px_theme('colors.tertiary')]"></div>
      <div className="w-5 h-5 bg-tertiary border border-surface shadow-[0_0_8px_theme('colors.tertiary')]"></div>
      <div className="w-5 h-5 bg-tertiary border border-surface shadow-[0_0_8px_theme('colors.tertiary')]"></div>
      <div className="w-5 h-5 bg-transparent"></div>
      <div className="w-5 h-5 bg-transparent"></div>
      <div className="w-5 h-5 bg-transparent"></div>
      <div className="w-5 h-5 bg-tertiary border border-surface shadow-[0_0_8px_theme('colors.tertiary')]"></div>
      <div className="w-5 h-5 bg-transparent"></div>
      </div>
      </div>
      </div>
      {/* Telemetry / Stats */}
      <div className="hidden md:flex flex-col bg-surface-container border border-outline-variant rounded relative p-4 pt-8 gap-4">
      <div className="absolute top-2 left-3 flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
      <span className="text-label-caps font-label-caps text-on-surface-variant tracking-widest uppercase">TELEMETRY</span>
      </div>
      <div className="flex flex-col gap-1 border-b border-outline-variant/30 pb-2">
      <span className="text-label-caps font-label-caps text-on-surface-variant">LINES CLEARED</span>
      <span className="text-headline-lg font-headline-lg text-primary tracking-tight">1,402</span>
      </div>
      <div className="flex flex-col gap-1 border-b border-outline-variant/30 pb-2">
      <span className="text-label-caps font-label-caps text-on-surface-variant">TETRIS RATE</span>
      <span className="text-headline-md font-headline-md text-secondary tracking-tight">24.5%</span>
      </div>
      <div className="flex flex-col gap-1">
      <span className="text-label-caps font-label-caps text-on-surface-variant">EFFICIENCY</span>
      <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden mt-1">
      <div className="bg-primary w-[88%] h-full rounded-full"></div>
      </div>
      </div>
      </div>
      </aside>
      {/* Center: Active Matrix */}
      <section className="order-1 md:order-2 flex flex-col items-center flex-shrink-0 w-full md:w-auto relative">
      {/* Game Over / Pause Overlay (Hidden by default, shown for styling example) */}
      {/* <div className="absolute inset-0 z-20 backdrop-blur-md bg-surface/60 flex flex-col items-center justify-center border border-outline-variant">
                      <h2 className="text-display-score font-display-score text-error tracking-tighter mb-4">SYSTEM HALTED</h2>
                      <button className="border border-primary text-primary px-6 py-2 rounded text-terminal-sm font-terminal-sm hover:bg-primary hover:text-on-primary transition-colors" type="button" data-action-id="reboot-sequence-3" onClick={actions?.["reboot-sequence-3"]}>REBOOT SEQUENCE</button>
                  </div> */}
      <div className="bg-outline-variant p-[1px] shadow-[0_0_30px_rgba(0,0,0,0.5)] rounded-sm">
      {/* 10x20 Grid Simulation using CSS Grid */}
      {/* Cells are approx 28px square on desktop, smaller on mobile */}
      <div className="grid grid-cols-10 grid-rows-[repeat(20,minmax(0,1fr))] gap-[1px] bg-surface border-[4px] border-surface-container w-[280px] h-[560px] md:w-[320px] md:h-[640px]">
      {/* Row 1-15: Mostly empty background cells with faint inner stroke */}
      {/* Simulating a few rows using a repeating background pattern to save DOM nodes in this mockup, 
                               but normally this would be 200 divs. I will generate a structural representation. */}
      {/* Top section empty */}
      <div className="col-span-10 row-span-14 grid grid-cols-10 grid-rows-[repeat(14,minmax(0,1fr))] gap-[1px]">
      {/* Example of empty cell styling, repeated via CSS background for visual accuracy in mockup */}
      <div className="col-span-10 row-span-14 bg-[linear-gradient(to_right,theme('colors.surface-container-high')_1px,transparent_1px),linear-gradient(to_bottom,theme('colors.surface-container-high')_1px,transparent_1px)] bg-[size:10%_7.14%] border border-surface-container-low/20"></div>
      </div>
      {/* Active falling piece (Level 2 Elevation) */}
      <div className="col-start-4 row-start-6 w-full h-full bg-primary border-[0.5px] border-surface-container shadow-[0_0_12px_theme('colors.primary')] z-10 relative"></div>
      <div className="col-start-5 row-start-6 w-full h-full bg-primary border-[0.5px] border-surface-container shadow-[0_0_12px_theme('colors.primary')] z-10 relative"></div>
      <div className="col-start-6 row-start-6 w-full h-full bg-primary border-[0.5px] border-surface-container shadow-[0_0_12px_theme('colors.primary')] z-10 relative"></div>
      <div className="col-start-7 row-start-6 w-full h-full bg-primary border-[0.5px] border-surface-container shadow-[0_0_12px_theme('colors.primary')] z-10 relative"></div>
      {/* Stacked blocks at bottom */}
      <div className="col-span-10 row-span-6 grid grid-cols-10 grid-rows-6 gap-[1px]">
      {/* Row 15 */}
      <div className="col-start-1 col-span-10 h-full bg-transparent"></div>
      {/* Row 16 */}
      <div className="col-start-2 bg-secondary border border-surface-container"></div>
      <div className="col-start-3 bg-secondary border border-surface-container"></div>
      <div className="col-start-4 bg-secondary border border-surface-container"></div>
      {/* Row 17 */}
      <div className="col-start-1 bg-tertiary-container border border-surface-container"></div>
      <div className="col-start-2 bg-tertiary-container border border-surface-container"></div>
      <div className="col-start-3 bg-secondary border border-surface-container"></div>
      <div className="col-start-8 bg-error border border-surface-container"></div>
      <div className="col-start-9 bg-error border border-surface-container"></div>
      {/* Row 18 */}
      <div className="col-start-1 bg-tertiary-container border border-surface-container"></div>
      <div className="col-start-4 bg-primary border border-surface-container"></div>
      <div className="col-start-5 bg-primary border border-surface-container"></div>
      <div className="col-start-7 bg-error border border-surface-container"></div>
      <div className="col-start-8 bg-error border border-surface-container"></div>
      <div className="col-start-10 bg-secondary border border-surface-container"></div>
      {/* Row 19 */}
      <div className="col-start-1 bg-tertiary-container border border-surface-container"></div>
      <div className="col-start-2 bg-secondary border border-surface-container"></div>
      <div className="col-start-3 bg-secondary border border-surface-container"></div>
      <div className="col-start-4 bg-primary border border-surface-container"></div>
      <div className="col-start-5 bg-primary border border-surface-container"></div>
      <div className="col-start-6 bg-secondary border border-surface-container"></div>
      <div className="col-start-9 bg-error border border-surface-container"></div>
      <div className="col-start-10 bg-secondary border border-surface-container"></div>
      {/* Row 20 (Bottom) */}
      <div className="col-start-1 bg-secondary border border-surface-container"></div>
      <div className="col-start-2 bg-secondary border border-surface-container"></div>
      <div className="col-start-3 bg-secondary border border-surface-container"></div>
      <div className="col-start-5 bg-tertiary-container border border-surface-container"></div>
      <div className="col-start-6 bg-tertiary-container border border-surface-container"></div>
      <div className="col-start-7 bg-secondary border border-surface-container"></div>
      <div className="col-start-8 bg-error border border-surface-container"></div>
      <div className="col-start-9 bg-error border border-surface-container"></div>
      <div className="col-start-10 bg-secondary border border-surface-container"></div>
      </div>
      </div>
      </div>
      </section>
      {/* Right Panel: Next Queue & Score */}
      <aside className="w-full md:w-[260px] flex flex-col gap-4 order-3 flex-shrink-0">
      {/* Score & Level (Prominent) */}
      <div className="bg-surface-container border border-outline-variant rounded relative p-6 pt-8 flex flex-col gap-6">
      <div className="absolute top-2 left-3 flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
      <span className="text-label-caps font-label-caps text-on-surface-variant tracking-widest uppercase">PERFORMANCE</span>
      </div>
      <div>
      <span className="text-label-caps font-label-caps text-on-surface-variant block mb-1">CURRENT SCORE</span>
      <div className="text-display-score font-display-score text-primary tracking-tighter leading-none">04,829,100</div>
      </div>
      <div className="flex items-end justify-between border-t border-outline-variant/30 pt-4">
      <div>
      <span className="text-label-caps font-label-caps text-on-surface-variant block mb-1">OPERATING LEVEL</span>
      <div className="text-headline-lg font-headline-lg text-secondary leading-none">18</div>
      </div>
      {/* Badge */}
      <div className="bg-error-container text-on-error-container text-label-caps font-label-caps px-2 py-1 rounded-sm border border-error/50 tracking-widest">
                              MAX GRAVITY
                          </div>
      </div>
      </div>
      {/* Next Queue */}
      <div className="flex-1 bg-surface-container border border-outline-variant rounded relative p-4 pt-8">
      <div className="absolute top-2 left-3 flex items-center gap-2">
      <span className="text-label-caps font-label-caps text-on-surface-variant tracking-widest uppercase">INCOMING ASSETS</span>
      </div>
      <div className="flex flex-col gap-4">
      {/* Next 1 (Largest) */}
      <div className="h-24 flex items-center justify-center bg-surface-container-low border border-outline-variant/50 rounded inner-shadow">
      <div className="grid grid-cols-3 grid-rows-2 gap-[1px]">
      <div className="w-5 h-5 bg-transparent"></div>
      <div className="w-5 h-5 bg-error border border-surface shadow-[0_0_6px_theme('colors.error')]"></div>
      <div className="w-5 h-5 bg-error border border-surface shadow-[0_0_6px_theme('colors.error')]"></div>
      <div className="w-5 h-5 bg-error border border-surface shadow-[0_0_6px_theme('colors.error')]"></div>
      <div className="w-5 h-5 bg-error border border-surface shadow-[0_0_6px_theme('colors.error')]"></div>
      <div className="w-5 h-5 bg-transparent"></div>
      </div>
      </div>
      {/* Next 2 & 3 (Smaller) */}
      <div className="flex gap-4 h-16">
      <div className="flex-1 flex items-center justify-center bg-surface-container-lowest border border-outline-variant/30 rounded opacity-70">
      <div className="grid grid-cols-2 grid-rows-2 gap-[1px] scale-75">
      <div className="w-5 h-5 bg-secondary border border-surface"></div>
      <div className="w-5 h-5 bg-secondary border border-surface"></div>
      <div className="w-5 h-5 bg-secondary border border-surface"></div>
      <div className="w-5 h-5 bg-secondary border border-surface"></div>
      </div>
      </div>
      <div className="flex-1 flex items-center justify-center bg-surface-container-lowest border border-outline-variant/30 rounded opacity-50">
      <div className="grid grid-cols-3 grid-rows-2 gap-[1px] scale-75">
      <div className="w-5 h-5 bg-tertiary border border-surface"></div>
      <div className="w-5 h-5 bg-transparent"></div>
      <div className="w-5 h-5 bg-transparent"></div>
      <div className="w-5 h-5 bg-tertiary border border-surface"></div>
      <div className="w-5 h-5 bg-tertiary border border-surface"></div>
      <div className="w-5 h-5 bg-tertiary border border-surface"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </aside>
      </main>
      {/* Mobile Touch Controls (Visible only on mobile) */}
      <section className="md:hidden w-full flex-shrink-0 bg-surface-container border-t border-outline-variant p-4 flex justify-between items-end pb-24"> {/* pb-24 clears the BottomNavBar */}
      {/* D-Pad Left/Right/Down */}
      <div className="grid grid-cols-3 grid-rows-2 gap-2">
      <div className="col-start-2">
      <button aria-label="Hard Drop" className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant active:bg-primary active:text-on-primary transition-colors bg-surface-container-high" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Circle  data-icon="keyboard_double_arrow_down" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="col-start-1 row-start-2">
      <button aria-label="Move Left" className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant active:bg-primary active:text-on-primary transition-colors bg-surface-container-high" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <ArrowLeft  data-icon="arrow_back" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="col-start-2 row-start-2">
      <button aria-label="Soft Drop" className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant active:bg-primary active:text-on-primary transition-colors bg-surface-container-high" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}>
      <ArrowDown  data-icon="arrow_downward" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="col-start-3 row-start-2">
      <button aria-label="Move Right" className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant active:bg-primary active:text-on-primary transition-colors bg-surface-container-high" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}>
      <ArrowRight  data-icon="arrow_forward" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Action Buttons Rotate/Hold */}
      <div className="flex gap-3 pb-2">
      <button aria-label="Hold Piece" className="w-12 h-12 rounded-full border border-outline flex items-center justify-center text-secondary active:bg-secondary active:text-on-secondary transition-colors bg-surface-container-high mb-6" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}>
      <Circle  data-icon="swap_vert" className="text-lg" aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Rotate Right" className="w-16 h-16 rounded-full border border-primary flex items-center justify-center text-primary active:bg-primary active:text-on-primary shadow-[0_0_15px_theme('colors.primary')_inset] bg-surface-container-high" type="button" data-action-id="button-9-9" onClick={actions?.["button-9-9"]}>
      <RotateCw  data-icon="rotate_right" className="text-2xl" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </section>
      {/* Supervisor Feed (Desktop Footer) */}
      <footer className="hidden md:flex fixed bottom-0 left-0 w-full h-8 bg-surface border-t border-outline-variant items-center px-4 overflow-hidden z-40">
      <div className="flex gap-8 text-terminal-sm font-terminal-sm text-secondary/70 whitespace-nowrap opacity-80">
      <span>&gt; SYSTEM.LOG: Matrix stabilized.</span>
      <span>&gt; EVENT: I-Tetromino dispatched.</span>
      <span>&gt; PERFORMANCE: APM 104.</span>
      <span className="text-primary">&gt; NOTIFICATION: Level 18 Gravity threshold reached. User input latency optimal.</span>
      <span>&gt; CACHE: Hold queue updated.</span>
      </div>
      </footer>
      {/* BottomNavBar (Mobile Shell Navigation) */}
      <nav className="md:hidden bg-surface-container dark:bg-surface-container fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 pb-safe border-t border-outline-variant dark:border-outline-variant flat no shadows">
      {/* Active Tab: COMMAND (Gameplay) */}
      <button className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-none px-4 py-1 border-b-2 border-primary active:opacity-80 duration-75 w-full h-full" type="button" data-action-id="command-10" onClick={actions?.["command-10"]}>
      <Gamepad2  data-icon="videogame_asset" style={{fontVariationSettings: "'FILL' 1"}} className="mb-1 text-xl" aria-hidden={true} focusable="false" />
      <span className="text-label-caps font-label-caps">COMMAND</span>
      </button>
      {/* Inactive Tab: DATABASE */}
      <button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-bright transition-colors active:opacity-80 duration-75 w-full h-full" type="button" data-action-id="database-11" onClick={actions?.["database-11"]}>
      <Circle  data-icon="analytics" className="mb-1 text-xl" aria-hidden={true} focusable="false" />
      <span className="text-label-caps font-label-caps">DATABASE</span>
      </button>
      {/* Inactive Tab: SYSTEM */}
      <button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-bright transition-colors active:opacity-80 duration-75 w-full h-full" type="button" data-action-id="system-12" onClick={actions?.["system-12"]}>
      <Settings  data-icon="settings" className="mb-1 text-xl" aria-hidden={true} focusable="false" />
      <span className="text-label-caps font-label-caps">SYSTEM</span>
      </button>
      </nav>
    </>
  );
}
