/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent } from '../astro_7b01ba6d.mjs';
import 'html-escaper';
import 'clsx';
import { T as TransparentHeader } from './_slug__5bac7061.mjs';
import { $ as $$Layout } from './404_094f2332.mjs';

const $$Astro = createAstro("https://qualitymatterspaintingllc.com/");
const $$Colorpalette = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Colorpalette;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "Ox3V7QC54CEIUk8vmpKU";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const valuesMision = data.valuesContent.mission;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${data.name} | Color Palette`, "description": valuesMision, "favicon": data.logos.secondary, "featuredImage": data.logos.favicon, "keywords": "Color Palette, Design, Web Development" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TransparentHeader", TransparentHeader, { "bgImages": data.gallery[0], "title": "Color Palette", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/TransparentHeader/TransparentHeader", "client:component-export": "default" })} ` })}`;
}, "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/colorpalette.astro", void 0);

const $$file = "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/colorpalette.astro";
const $$url = "/colorpalette";

export { $$Colorpalette as default, $$file as file, $$url as url };
