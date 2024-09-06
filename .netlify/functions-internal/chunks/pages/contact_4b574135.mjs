/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_7b01ba6d.mjs';
import 'html-escaper';
import 'clsx';
import { C as ContactForm, T as TransparentHeader } from './_slug__5bac7061.mjs';
import { L as LazyImage, R as RedesIcons, $ as $$Layout } from './404_094f2332.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const ContentContact = ({ dataGlobal, bgImage }) => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[70%] mx-auto h-full flex flex-col md:flex-row gap-5 py-24 md:py-32 relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[70%]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center md:justify-start gap-3 text-secondary pb-3 w-4/5 mx-auto md:w-full", children: [
        /* @__PURE__ */ jsx("i", { className: "fa-solid fa-envelopes text-3xl" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold capitalize", children: "Contact Us" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-5xl font-bold text-primary capitalize text-center md:text-start", children: "Get in touch with us" }),
      /* @__PURE__ */ jsx("div", { className: "w-full h-full pt-10 pb-0 md:py-10", children: /* @__PURE__ */ jsx(
        LazyImage,
        {
          src: dataGlobal.gallery[10],
          alt: "Contact us",
          className: "w-full h-[300px] md:h-[650px] object-cover  shadow-xl border-r-0 border-b-[20px] md:border-b-0 md:border-r-[20px] border-secondary aspect-auto ",
          height: 300
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-4/5 mx-auto md:w-[50%] -mt-10  md:absolute md:right-0 md:top-20 md:mt-0", children: /* @__PURE__ */ jsx(ContactForm, { dataGlobal, formStyles: "bg-white shadow-sm rounded-t-0 rounded-b-xl md:rounded-xl p-5" }) })
  ] });
};

const ContactInfo = ({ dataGeneral, dataRedes }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: " bg-[#FBF9F6] rounded-xl grid grid-cols-1 lg:grid-cols-3",
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "border rounded-tl-none lg:rounded-tl-xl flex flex-col justify-start items-center py-10",
              children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "bg-white shadow w-28 h-28 rounded-b-full border-t-[10px] border-btnHover flex justify-center items-center text-4xl text-secondary",
                    children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-phone-volume" })
                  }
                ),
                /* @__PURE__ */ jsx("div", { children: dataGeneral.phones.map((phone, index) => /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: `tel:${phone.number}`,
                    className: "text-xl font-bold text-primary block border-b pb-2  gap-1 mt-4 hover:text-tertiary transition-all duration-300 ease-in-out",
                    children: [
                      phone.title.length > 0 && /* @__PURE__ */ jsx("span", { className: "text-[18px] text-secondary block text-center font-semibold", children: phone.title }),
                      phone.number
                    ]
                  },
                  index
                )) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "border flex flex-col justify-start items-center py-10",
              children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "bg-white shadow w-28 h-28 rounded-b-full border-t-[10px] border-btnHover flex justify-center items-center text-4xl text-secondary",
                    children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-envelope" })
                  }
                ),
                /* @__PURE__ */ jsx("div", { children: dataGeneral.emails.map((email, index) => /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: `mailto:${email.email}`,
                    className: "text-xl font-bold text-primary block border-b pb-2  gap-1 mt-4 hover:text-tertiary transition-all duration-300 ease-in-out",
                    children: [
                      email.title.length > 0 && /* @__PURE__ */ jsx("span", { className: "text-[18px] text-secondary block text-center font-semibold", children: email.title }),
                      email.email
                    ]
                  },
                  index
                )) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "border rounded-tr-none lg:rounded-tr-xl flex flex-col justify-start items-center py-10",
              children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "bg-white shadow w-28 h-28 rounded-b-full border-t-[10px] border-btnHover flex justify-center items-center text-4xl text-secondary",
                    children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-calendar-clock" })
                  }
                ),
                /* @__PURE__ */ jsx("div", { children: dataGeneral.openingHours.map((hour, index) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "text-xl font-bold text-primary block border-b pb-2  gap-1 mt-4 hover:text-tertiary transition-all duration-300 ease-in-out",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-secondary block text-center font-semibold capitalize", children: hour.days }),
                      /* @__PURE__ */ jsx("span", { className: "text-secondary text-[18px]  block text-center font-semibold capitalize", children: hour.hours })
                    ]
                  },
                  index
                )) })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "bg-primary w-full rounded-b-full flex flex-col justify-center items-center pt-10 pb-20 md:py-10 ", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-white text-3xl font-bold text-center pb-5 capitalize", children: "Follow us on" }),
      /* @__PURE__ */ jsx(RedesIcons, { redesSociales: dataRedes })
    ] })
  ] });
};

const MapaTab = ({ locations }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [showLocations, setShowLocations] = useState(false);
  const [animateMenu, setAnimateMenu] = useState("");
  const [locationName, setLocationName] = useState(locations[0].city);
  const handleTabClick = (index, title) => {
    setSelectedTab(index);
    setLocationName(title);
    setAnimateMenu("animate-slide-out-right");
    setTimeout(() => {
      setShowLocations(false);
    }, 500);
  };
  const toggleLocations = () => {
    setShowLocations((prevState) => !prevState);
    setAnimateMenu("animate-slide-in-right");
  };
  const handleClose = () => {
    setAnimateMenu("animate-slide-out-right");
    setTimeout(() => {
      setShowLocations(false);
    }, 500);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-semibold text-center text-white capitalize bg-secondary p-5", children: [
      "we cover the entire ",
      locationName
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full h-[500px] md:h-[650px] relative ", children: [
      /* @__PURE__ */ jsx(
        "iframe",
        {
          src: locations[selectedTab].urlCity,
          width: "100%",
          height: "100%",
          frameBorder: "0",
          style: { border: 0 },
          allowFullScreen: true,
          "aria-label": "Mapa de localidades"
        }
      ),
      showLocations ? /* @__PURE__ */ jsx(
        "button",
        {
          className: "absolute z-10 right-0 top-0 mt-2 mr-2 px-3 py-1 text-lg font-semibold text-white bg-gray-800 hover:bg-gray-600 rounded-full",
          onClick: handleClose,
          "arial-label": "Close locations",
          children: "X"
        }
      ) : /* @__PURE__ */ jsxs(
        "button",
        {
          className: "absolute right-0 top-0 px-4 py-2 text-lg font-semibold bg-btnHover hover:bg-secondary hover:text-white  rounded-bl-xl transition-all duration-300 ease-in-out capitalize",
          onClick: toggleLocations,
          "arial-label": "View locations",
          children: [
            /* @__PURE__ */ jsxs("span", { className: "mr-2", children: [
              " ",
              /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-up-right-and-arrow-down-left-from-center" })
            ] }),
            "view locations"
          ]
        }
      ),
      showLocations && /* @__PURE__ */ jsxs("div", { className: `${animateMenu} flex flex-col items-center justify-center absolute right-0 top-0 bottom-0  bg-green-950/80 shadow w-full h-[500px] md:h-[650px]`, children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-3xl font-semibold text-white text-center py-5 capitalize", children: "all the locations we cover " }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center items-end overflow-y-auto pb-10 gap-5", children: locations.map((location, index) => /* @__PURE__ */ jsxs(
          "button",
          {
            className: `flex flex-col justify-center items-center p-8 mb-2 text-lg font-semibold rounded-b-full shado-sm border-t-[10px] ${selectedTab === index ? "bg-btnHover  border-gray-200" : "bg-gray-100 border-btnHover hover:bg-btnHover hover:border-gray-200 hover:text-white transition-all duration-300 ease-in-out"}`,
            onClick: () => handleTabClick(index, location.city),
            "arial-label": `Select ${location.city}`,
            children: [
              /* @__PURE__ */ jsx("i", { className: "fa-solid fa-location-dot mr-1 text-2xl pb-1" }),
              /* @__PURE__ */ jsx("span", { children: location.city })
            ]
          },
          index
        )) })
      ] })
    ] })
  ] });
};

const $$Astro = createAstro("https://qualitymatterspaintingllc.com/");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${data.name} | Contact`, "description": aboutSection[0].text, "favicon": data.logos.secondary, "featuredImage": data.logos.favicon, "keywords": data.services.map((service) => service.title).join(", ") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TransparentHeader", TransparentHeader, { "bgImages": data.gallery[6], "title": dataBlocks[4]?.title || "Contact", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/TransparentHeader/TransparentHeader", "client:component-export": "default" })} ${maybeRenderHead()}<div class="w-full md:w-4/5 mx-auto my-20"> ${renderComponent($$result2, "ContactInfo", ContactInfo, { "dataGeneral": data.dataGeneral, "dataRedes": data.redesSociales })} </div> ${renderComponent($$result2, "MapaContent", MapaTab, { "locations": data.dataGeneral.location, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Blocks/contact/MapaContent", "client:component-export": "default" })} ${renderComponent($$result2, "ContentContact", ContentContact, { "dataGlobal": data, "bgImage": data.gallery[10], "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Blocks/home/ContenctContact", "client:component-export": "default" })} ` })}`;
}, "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/contact.astro", void 0);

const $$file = "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ContentContact as C, contact as c };
