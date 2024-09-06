/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_7b01ba6d.mjs';
import 'html-escaper';
import 'clsx';
import { T as TransparentHeader } from './_slug__5bac7061.mjs';
import { L as LazyImage, E as EliminarCaracteresEspeciales, B as ButtonContent_2, $ as $$Layout } from './404_094f2332.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
/* empty css                            *//* empty css                            */import '../index.84c178bf_4b9a37ec.mjs';

const SliderServices = ({ dbServices, landingServices, slidesPerView = 4, onePage, dataGeneral }) => {
  return /* @__PURE__ */ jsx(
    Swiper,
    {
      modules: [Navigation, Autoplay],
      navigation: true,
      spaceBetween: 20,
      autoplay: {
        delay: 8e3,
        disableOnInteraction: false
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView
        }
      },
      children: dbServices.map((service, index) => /* @__PURE__ */ jsxs(SwiperSlide, { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative ", children: [
          /* @__PURE__ */ jsx("div", { className: "w-full mx-auto", children: /* @__PURE__ */ jsx(
            LazyImage,
            {
              src: service.description[0].image,
              alt: service.title,
              height: 245,
              className: "w-screen h-[250px] rounded-tl-xl rounded-tr-xl object-cover aspect-auto"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: `${onePage ? `tel:${dataGeneral?.phones[0].number}` : landingServices ? `/services/${EliminarCaracteresEspeciales(service.title)}` : "/services"}`,
              "aria-label": "Learn More",
              className: "text-2xl bg-white text-secondary rounded-full absolute -bottom-5 left-8 px-5 py-3.5 hover:bg-secondary hover:shadow-md hover:text-white transition-all duration-300 ease-in-out",
              children: onePage ? /* @__PURE__ */ jsx("i", { className: "fa-solid fa-phone" }) : /* @__PURE__ */ jsx("i", { className: "fa-regular fa-arrow-up-right" })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "py-8 px-5 bg-[#FCFAF7] rounded-bl-xl rounded-br-xl ", children: [
          /* @__PURE__ */ jsx("h3", { className: `text-secondary font-bold capitalize  ${onePage ? "text-center text-xl" : "text-lg"}`, children: service.title }),
          !onePage && /* @__PURE__ */ jsx("p", { children: service.description[0].text.slice(0, 80) + "..." })
        ] })
      ] }, index))
    }
  );
};

const ValuesAbout = ({ dataAbout, nameCompany, valueContent }) => {
  return /* @__PURE__ */ jsxs("div", { className: "w-4/5 mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-10 ", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-5 items-center", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-helmet-safety text-4xl text-primary -rotate-90" }),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-medium text-primary capitalize", children: nameCompany })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-primary mt-5 mb-0 md:my-5 capitalize text-center md:text-start", children: dataAbout[0].title }),
        dataAbout[0].list.length > 0 && /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside md:grid grid-cols-1 md:grid-cols-2 hidden", children: dataAbout[0].list.map((item, index) => /* @__PURE__ */ jsx("li", { className: "text-lg pb-3 font-semibold", children: item }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-center md:text-justify pb-3", children: [
          " ",
          dataAbout[0].text,
          " "
        ] }),
        dataAbout[0].list.length > 0 && /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside grid grid-cols-1 md:grid-cols-2 md:hidden", children: dataAbout[0].list.map((item, index) => /* @__PURE__ */ jsx("li", { className: "text-lg pb-3 font-semibold", children: item }, index)) }),
        /* @__PURE__ */ jsx("div", { className: "text-center md:text-start py-5", children: /* @__PURE__ */ jsx(ButtonContent_2, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full h-full grid grid-cols-1 md:grid-cols-3 gap-10", children: valueContent.additionalImages.slice(0, 3).map((item, index) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(LazyImage, { src: `${item}`, alt: "Values Image", height: 300, className: `w-full h-[300px] md:h-[350px] object-cover shadow ${index === 0 ? "block" : "hidden md:block"}` }) }, index)) }),
    /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[85%] mx-auto bg-[#FCFAF7] shadow-md grid grid-cols-1 md:grid-cols-3 gap-10 py-10 px-5 md:py-10 md:px-20 -mt-10 md:-mt-24 mb-28 relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("i", { className: "fa-light fa-wreath-laurel text-5xl text-btnHover mx-auto my-5" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-secondary capitalize text-center pb-3", children: "mission" }),
        /* @__PURE__ */ jsx("p", { className: "text-center", children: valueContent.mission })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "relative border aspect-auto rounded-2xl before:absolute before:w-full before:h-full before:rounded-2xl before:bg-primary before:top-0 before:left-0",
          style: {
            backgroundImage: `url(${valueContent.additionalImages[3]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          },
          children: /* @__PURE__ */ jsxs("div", { className: "text-center relative p-5", children: [
            /* @__PURE__ */ jsx("i", { className: "fa-light fa-eye text-5xl text-white mx-auto my-5" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-white capitalize text-center pb-3", children: "vision" }),
            /* @__PURE__ */ jsx("p", { className: "text-center text-white", children: valueContent.vision })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("i", { className: "fa-light fa-hand-heart text-5xl text-btnHover mx-auto my-5" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-secondary capitalize text-center pb-3", children: "why choose us" }),
        /* @__PURE__ */ jsx("p", { className: "text-center", children: valueContent.whychooseUs })
      ] })
    ] })
  ] });
};

const AboutsBlocks = ({ dataAbout, dbPhone }) => {
  const primaryPhone = dbPhone[0].number;
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full h-full", children: /* @__PURE__ */ jsx(
      LazyImage,
      {
        src: dataAbout[1].additionalImages[0],
        alt: dataAbout[1].additionalImages[0],
        className: "w-full md:w-[70%] h-[350px] md:h-[700px] object-cover object-center shadow border-none md:border-r-[30px] border-btnHover"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "md:absolute right-0 -bottom-10 bg-primary w-full  md:w-[60%]  flex items-center px-5 md:pr-0 md:pl-20 py-10 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "w-4/5 mx-auto md:ml-0 md:mr-auto h-full", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-5 capitalize text-center md:text-start", children: dataAbout[1].title }),
      /* @__PURE__ */ jsxs("p", { className: "text-center md:text-justify pb-3 text-white", children: [
        " ",
        dataAbout[1].text,
        " "
      ] }),
      dataAbout[1].list.length > 0 && /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside grid grid-cols-1 md:grid-cols-2 md:hidden", children: dataAbout[1].list.map((item, index) => /* @__PURE__ */ jsx("li", { className: "text-lg pb-3 font-semibold text-white", children: item }, index)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-center items-center md:justify-start gap-10 py-5", children: [
        /* @__PURE__ */ jsx(ButtonContent_2, { btnstyle: "btnStyle3 hidden md:block" }),
        /* @__PURE__ */ jsx(ButtonContent_2, { btnstyle: "btnStyle3", titleBtn: "Call us now", linkBtn: `tel:+1${primaryPhone}` })
      ] })
    ] }) })
  ] });
};

const $$Astro = createAstro("https://qualitymatterspaintingllc.com/");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "Ox3V7QC54CEIUk8vmpKU";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const aboutSection = data?.sectionsHomeAbout.filter(
    (section) => section.section === "about"
  );
  const dataBlocks = data?.sectionsHomeAbout.filter(
    (section) => section.section === "blocks"
  );
  const nameCompany = data?.name;
  const dbPhone = data.dataGeneral.phones;
  const landingServices = data.widgets.landingServices;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${data.name} | About Us`, "description": aboutSection[0].text, "favicon": data.logos.secondary, "featuredImage": data.logos.favicon, "keywords": data.services.map((service) => service.title).join(", ") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TransparentHeader", TransparentHeader, { "bgImages": data.gallery[4], "title": dataBlocks[1]?.title || "About Us", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/TransparentHeader/TransparentHeader", "client:component-export": "default" })} ${maybeRenderHead()}<div class="pb-10 pt-32"> ${renderComponent($$result2, "ValuesAbout", ValuesAbout, { "dataAbout": aboutSection, "nameCompany": nameCompany, "valueContent": data.valuesContent, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Blocks/about/ValuesAbout", "client:component-export": "default" })} </div> ${renderComponent($$result2, "AboutsBlocks", AboutsBlocks, { "dataAbout": aboutSection, "dbPhone": dbPhone, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Blocks/about/AboutBlocks", "client:component-export": "default" })} <div class="w-4/5 mx-auto pt-14 pb-24 md:py-44"> <div class="flex justify-center items-center gap-2 pb-2"> <i class="fa-solid fa-house-tree text-4xl md:text-5xl text-secondary"></i> <p class="text-2xl md:text-3xl font-semibold capitalize text-secondary">
our Services
</p> </div> <h2 class="text-3xl md:text-4xl text-primary font-bold text-center pb-10 capitalize">
We offer a wide range of services
</h2> ${renderComponent($$result2, "SliderServices", SliderServices, { "dbServices": data.services, "landingServices": landingServices, "slidesPerView": 3, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/Sliders/SliderServices", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/about.astro", void 0);

const $$file = "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { SliderServices as S, about as a };
