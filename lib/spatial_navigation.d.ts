/// <reference lib="dom" />

interface SpatialNavigation {
  init(): void;
  uninit(): void;
  clear(): void;
  reset(sectionId?: string): void;
  set(config?: object): void;
  set(sectionId?: string, config?: object): void;
  add(config?: object): string;
  add(sectionId?: string, config?: object): string;
  remove(sectionId?: string): boolean;
  disable(sectionId?: string): boolean;
  enable(sectionId?: string): boolean;
  pause(): void;
  resume(): void;
  focus(silent?: boolean): boolean;
  focus(sectionId?: string, silent?: boolean): boolean;
  focus(extSelector?: unknown, silent?: boolean): boolean;
  move(direction: 'left' | 'up' | 'right' | 'down', selector?: HTMLElement): boolean;
  makeFocusable(sectionId?: string): void;
  setDefaultSection(sectionId?: string): void;
  getCurrentFocusedElement(): HTMLElement;
}

declare const SpatialNavigation: SpatialNavigation;

export const EVENT_PREFIX: string;
export default SpatialNavigation;
