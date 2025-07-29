// src/global.d.ts
export {};

declare global {
  interface Window {
    Tally: {
      loadEmbeds: () => void;
    };
  }
}
