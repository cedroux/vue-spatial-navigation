/// <reference lib="dom" />

declare namespace SpatialNavigation {
  function init(): void;
  function uninit(): void;
  function clear(): void;
  function reset(sectionId?: string): void;
  function set(config?: object): void;
  function set(sectionId?: string, config?: object): void;
  function add(config?: object): string;
  function add(sectionId?: string, config?: object): string;
  function remove(sectionId?: string): boolean;
  function disable(sectionId?: string): boolean;
  function enable(sectionId?: string): boolean;
  function pause(): void;
  function resume(): void;
  function focus(silent?: boolean): boolean;
  function focus(sectionId?: string, silent?: boolean): boolean;
  function focus(extSelector?: unknown, silent?: boolean): boolean;
  function move(direction: 'left' | 'up' | 'right' | 'down', selector?: HTMLElement): boolean;
  function makeFocusable(sectionId?: string): void;
  function setDefaultSection(sectionId?: string): void;
  function getCurrentFocusedElement(): HTMLElement;
}

export const EVENT_PREFIX: string;
export default SpatialNavigation;
