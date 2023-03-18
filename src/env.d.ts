/// <reference path="../.astro/types.d.ts" />

declare module 'astro-imagetools/components';
declare module '*.svg?raw' {
  const content: string;
  export default content;
}
