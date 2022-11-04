export declare var EVENT_PREFIX: string;
export declare var SpatialNavigation: {
  init(): void;
  uninit(): void;
  clear(): void;
  reset(sectionId?: string): void;
  set(config?: object);
  set(sectionId?: string, config?: object): void;
  add(config?: object): string;
  add(sectionId?: string, config?: object): string;
  remove(sectionId?: string): boolean;
  disable(sectionId?: string): boolean;
  enable(sectionId?: string): boolean;
  pause(): void;
  resume(): void;
  focus(silent: boolean = false);
  focus(sectionId?: string, silent: boolean = false);
  focus(extSelector?: unknown, silent: boolean = false): HTMLElement;
  move(direction: "left" | "up" | "right" | "down", selector?: HTMLElement): boolean | HTMLElement;
  makeFocusable(sectionId?: string): void;
  setDefaultSection(sectionId?: string): void;
};

export { };
