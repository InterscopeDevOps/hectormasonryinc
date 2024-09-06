/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_7b01ba6d.mjs';
import 'html-escaper';
import { T as TransparentHeader } from './_slug__5bac7061.mjs';
import { $ as $$Layout } from './404_094f2332.mjs';

const $$Astro = createAstro("https://qualitymatterspaintingllc.com/");
const $$Reviews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Reviews;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "Ox3V7QC54CEIUk8vmpKU";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const dataBlocks = data?.sectionsHomeAbout.filter(
    (section) => section.section === "blocks"
  );
  const dataReviews = data.reviews;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${data.name} | Reviews`, "description": dataBlocks[5]?.text, "favicon": data.logos.secondary, "featuredImage": data.logos.favicon, "keywords": "reviews, testimonials, feedback, comments, ratings, stars, testimonials, customer reviews, customer feedback, customer comments, customer ratings, customer stars" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TransparentHeader", TransparentHeader, { "bgImages": dataBlocks[5]?.additionalImages[0], "title": dataBlocks[5]?.title || "Our Reviews", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/TransparentHeader/TransparentHeader", "client:component-export": "default" })} ${maybeRenderHead()}<div class="pt-20 pb-28 w-4/5 mx-auto"> <h2 class="text-3xl md:text-5xl font-bold text-center mb-5 capitalize">
What our customers say
</h2> <div class="border-b-2 border-[#EBECE9] mb-5 relative before:absolute before:w-1/3 before:mx-auto before:bg-btnHover before:h-1 before:left-0 before:right-0 before:top-0"></div> ${dataReviews.urlReviews.length > 0 ? renderTemplate`<div${addAttribute(`${dataReviews.urlReviews} py-10`, "class")}></div>` : renderTemplate`<p class="text-center text-2xl capitalize font-bold py-10">
No customer comments yet
</p>`} </div> ` })}`;
}, "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/reviews.astro", void 0);

const $$file = "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/reviews.astro";
const $$url = "/reviews";

export { $$Reviews as default, $$file as file, $$url as url };
