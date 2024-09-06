import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_63c4dc69.mjs';

const _page0  = () => import('./chunks/generic_2e2cf092.mjs');
const _page1  = () => import('./chunks/index_1a32a0f7.mjs');
const _page2  = () => import('./chunks/index_37fca2b6.mjs');
const _page3  = () => import('./chunks/_slug__e7abd8f5.mjs');
const _page4  = () => import('./chunks/colorpalette_98040720.mjs');
const _page5  = () => import('./chunks/sitemap_34d9ca18.mjs');
const _page6  = () => import('./chunks/index_fc8c1df9.mjs');
const _page7  = () => import('./chunks/_slug__d9150827.mjs');
const _page8  = () => import('./chunks/contact_a66a3231.mjs');
const _page9  = () => import('./chunks/index_6ebf42d5.mjs');
const _page10  = () => import('./chunks/_slug__bda32f64.mjs');
const _page11  = () => import('./chunks/reviews_25c71856.mjs');
const _page12  = () => import('./chunks/videos_ca5ff318.mjs');
const _page13  = () => import('./chunks/about_52efa8f8.mjs');
const _page14  = () => import('./chunks/index_4062e122.mjs');
const _page15  = () => import('./chunks/_slug__60844135.mjs');
const _page16  = () => import('./chunks/404_e5ebcf47.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/areas-we-serve/index.astro", _page2],["src/pages/areas-we-serve/[slug].astro", _page3],["src/pages/colorpalette.astro", _page4],["src/pages/sitemap.xml.ts", _page5],["src/pages/services/index.astro", _page6],["src/pages/services/[slug].astro", _page7],["src/pages/contact.astro", _page8],["src/pages/gallery/index.astro", _page9],["src/pages/gallery/[slug].astro", _page10],["src/pages/reviews.astro", _page11],["src/pages/videos.astro", _page12],["src/pages/about.astro", _page13],["src/pages/blog/index.astro", _page14],["src/pages/blog/[slug].astro", _page15],["src/pages/404.astro", _page16]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
