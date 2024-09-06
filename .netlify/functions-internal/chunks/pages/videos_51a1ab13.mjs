/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent } from '../astro_7b01ba6d.mjs';
import 'html-escaper';
import 'clsx';
import { T as TransparentHeader } from './_slug__5bac7061.mjs';
import { $ as $$Layout } from './404_094f2332.mjs';

const $$Astro = createAstro("https://qualitymatterspaintingllc.com/");
const $$Videos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Videos;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "Ox3V7QC54CEIUk8vmpKU";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const dataBlocks = data?.sectionsHomeAbout.filter(
    (section) => section.section === "blocks"
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${data.name} | Reviews`, "description": dataBlocks[6]?.text, "favicon": data.logos.secondary, "featuredImage": data.logos.favicon, "keywords": "reviews, testimonials, feedback, comments, ratings, stars, testimonials, customer reviews, customer feedback, customer comments, customer ratings, customer stars" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TransparentHeader", TransparentHeader, { "bgImages": dataBlocks[6]?.additionalImages[0], "title": dataBlocks[6]?.title || "Our Videos", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/TransparentHeader/TransparentHeader", "client:component-export": "default" })} ` })}`;
}, "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/videos.astro", void 0);

const $$file = "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/videos.astro";
const $$url = "/videos";

export { $$Videos as default, $$file as file, $$url as url };
