/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, i as renderComponent } from '../astro_7b01ba6d.mjs';
import 'html-escaper';
import { L as LazyImage, B as ButtonContent_2, $ as $$Layout, E as EliminarCaracteresEspeciales } from './404_094f2332.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, A11y } from 'swiper/modules';
/* empty css                            *//* empty css                            */import '../index.84c178bf_4b9a37ec.mjs';
import 'clsx';
import { useState } from 'react';
import Masonry from 'react-masonry-css';
/* empty css                            *//* empty css                            */
const ContactForm = ({
  dataGlobal,
  formStyles
}) => {
  return /* @__PURE__ */ jsx("div", { className: formStyles, children: /* @__PURE__ */ jsx(
    "form-contact",
    {
      to: `${dataGlobal.dataGeneral.emails.map((email) => email.email).join(",")},santosinterscope@gmail.com`,
      services: (
        // anidarlos con un join
        dataGlobal.services.map((service) => service.title).join(",")
      ),
      server: "https://email-server-r-8fb46242f2ca.herokuapp.com/email",
      img: dataGlobal.logos.secondary,
      emailcolor: "1",
      isenglish: "true"
    }
  ) });
};

const TransparentHeader = ({ bgImages, title }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "w-full h-[400px] md:h-[500px] md:px-2 px-4 md:py-2 py-6 relative before:absolute before:z-10 before:w-full before:h-full before:top-0 before:left-0 before:bg-black/60 flex flex-col justify-center items-center",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute w-full h-full", children: /* @__PURE__ */ jsx(
          LazyImage,
          {
            src: bgImages,
            alt: "images about",
            height: 350,
            className: "w-full h-[350px] md:h-[500px] object-cover object-center",
            imgLoading: "eager"
          }
        ) }),
        /* @__PURE__ */ jsx("h1", { className: "md:text-5xl text-4xl font-bold text-white relative z-10 capitalize text-center", children: title }),
        /* @__PURE__ */ jsxs("div", { className: "w-4/5 md:w-1/2 mx-auto bg-primary rounded-t-xl p-5  absolute z-10 bottom-0 right-0 left-0 flex items-center justify-center gap-5", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/",
              className: "text-gray-300 font-bold text-sm md:text-lg  hover:text-tertiary transition-all duration-300 ease-in-out",
              "aria-label": "Home Page",
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsx("i", { className: "fa-light fa-circle-o text-gray-300" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300 font-bold text-sm md:text-lg  underline underline-offset-8 capitalize", children: title })
        ] })
      ]
    }
  );
};

const $$Astro$4 = createAstro("https://qualitymatterspaintingllc.com/");
const $$TransparentHeaderLocation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TransparentHeaderLocation;
  const { image, title, text, namebutton, btnNumber, btnStyle } = Astro2.props;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "Ox3V7QC54CEIUk8vmpKU";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  return renderTemplate`${maybeRenderHead()}<div class="py-10 relative"${addAttribute({
    backgroundImage: `url("${image}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }, "style")}> <div class="bg-black absolute z-10 inset-0 bg-opacity-50"></div> <div class="flex items-center justify-center md:p-2 p-4 self-center relative z-20"> <div class="flex md:w-[80%] mx-auto w-[95%] h-full items-center md:flex-row flex-col"> <div class="flex flex-col md:w-[50%] p-6 gap-6 md:text-start text-center"> <h1 class="md:text-[46px] text-[36px] font-bold text-white capitalize"> ${title} </h1> <p class="text-white"> ${text} </p> ${renderComponent($$result, "ButtonContent_2", ButtonContent_2, { "titleBtn": namebutton, "linkBtn": `tel:+1${data.dataGeneral.phones[0].number}` })} </div> <div class="md:w-[50%] w-full"> <div class="md:w-[75%] mx-auto bg-white rounded-lg py-4"> <h2 class="text-[24px] font-bold text-center">Get In Touch!</h2> ${renderComponent($$result, "ContactForm", ContactForm, { "dataGlobal": data })} </div> </div> </div> </div> </div>`;
}, "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/components/TransparentHeader/TransparentHeaderLocation.astro", void 0);

const $$Astro$3 = createAstro("https://qualitymatterspaintingllc.com/");
const $$slug$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$slug$3;
  const { slug } = Astro2.params;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "Ox3V7QC54CEIUk8vmpKU";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const location = data.landingLocations?.find(
    (location2) => location2.slug.replace(/\s+/g, "-").toLowerCase() === slug
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${location?.seoTitle}`, "description": location?.metadescription, "favicon": data.logos.secondary, "featuredImage": location?.feactureimage, "keywords": location?.keywords }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TransparentHeaderLocation", $$TransparentHeaderLocation, { "title": location?.seoTitle, "image": location?.description[0].image, "text": location?.description[0].text, "namebutton": location?.description[0].textbutton, "btnNumber": data.dataGeneral.phones[0].number, "btnStyle": data.colors.secondaryColor })} ${maybeRenderHead()}<div class="md:w-[70%] mx-auto w-[95%] md:py-24 py-4 flex flex-wrap"> <div class="md:w-[100%] w-full flex flex-col md:px-6 px-2"> ${location?.description.slice(1, 10).map((item, index) => {
    const isEven = index % 2 === 0;
    return renderTemplate`<div${addAttribute(`flex flex-wrap md:min-h-[70vh] py-10 ${isEven ? "md:flex-row flex-col-reverse" : "md:flex-row-reverse flex-col-reverse"}`, "class")}> <div class="md:w-[50%] w-full flex flex-col gap-6 self-center md:p-8"> <h2 class="md:text-[40px] text-[24px] font-bold"> ${item.title} </h2> <p>${item.text}</p> ${renderComponent($$result2, "ButtonContent_2", ButtonContent_2, { "titleBtn": item.textbutton, "linkBtn": `tel:+1${data.dataGeneral.phones[0].number}` })} </div> <div class="md:w-[50%] w-full flex items-center md:p-8"> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="w-full h-[400px] object-cover rounded-xl"> </div> </div>`;
  })} </div> <div class="w-full flex flex-col md:px-6 px-2 gap-6"> <div> <h2 class="md:text-[35px] text-[30px] font-bold text-center">
Areas we Serve
</h2> </div> <div class="flex justify-center flex-wrap text-[22px] gap-6"> ${data.landingLocations?.map((location2) => renderTemplate`<a${addAttribute(`/areas-we-serve/${location2.slug.replace(/\s+/g, "-").toLowerCase()}`, "href")}> <div class="flex flex-col py-4 px-4 rounded-xl"${addAttribute({
    color: location2.slug.replace(/\s+/g, "-").toLowerCase() === slug ? "#fff" : data.colors.primaryColor,
    backgroundColor: location2.slug.replace(/\s+/g, "-").toLowerCase() === slug ? data.colors.primaryColor : "#fff"
  }, "style")}> <span class="text-start font-bold capitalize"> ${location2.title} </span> </div> </a>`)} </div> </div> </div> ` })}`;
}, "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/areas-we-serve/[slug].astro", void 0);

const $$file$3 = "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/areas-we-serve/[slug].astro";
const $$url$3 = "/areas-we-serve/[slug]";

const _slug_$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const SliderServicesDetail = ({ dataServices, logoCompany }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Pagination, Autoplay],
        spaceBetween: 50,
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
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        },
        children: dataServices.map((service, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: "flex flex-col items-center group", children: /* @__PURE__ */ jsxs("div", { className: "relative z-20 w-full mx-auto", children: [
          /* @__PURE__ */ jsx(
            LazyImage,
            {
              src: service.description[0].image,
              alt: service.title,
              className: "w-screen h-[400px] rounded-xl object-cover shadow shadow-black aspect-auto cursor-pointer"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 w-full p-4 bg-secondary text-white rounded-bl-xl rounded-br-xl opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex justify-between items-center", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `/services/${EliminarCaracteresEspeciales(service.title)}`,
                className: "text-lg font-semibold capitalize hover:scale-105 transition-all duration-300",
                "aria-label": `More information on ${service.title}`,
                children: service.title
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `/services/${EliminarCaracteresEspeciales(service.title)}`,
                className: "font-bold bg-white text-primary text-xl rounded-full px-5 py-3.5 hover:scale-105 transition-all duration-300",
                "aria-label": `More information on ${service.title}`,
                children: /* @__PURE__ */ jsx("i", { className: "fa-regular fa-arrow-up-right" })
              }
            )
          ] })
        ] }) }, index))
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "h-[400px] md:h-screen bg-primary -mt-32 rounded-b-full px-[10%] md:px-[20%]", children: /* @__PURE__ */ jsx("div", { className: "bg-btnHover rounded-b-full w-full h-[90%] md:h-3/4 flex items-end  justify-center pb-5 md:pb-10", children: /* @__PURE__ */ jsx(
      LazyImage,
      {
        src: logoCompany,
        alt: "Logo de la empresa",
        className: "w-4/5 md:w-1/2 mx-auto"
      }
    ) }) })
  ] });
};

const $$Astro$2 = createAstro("https://qualitymatterspaintingllc.com/");
const $$slug$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$slug$2;
  const { slug } = Astro2.params;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "Ox3V7QC54CEIUk8vmpKU";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const dataServices = data?.services;
  const serviceInfo = data?.services.find((service) => {
    const serviceSlug = EliminarCaracteresEspeciales(service.title);
    const targetSlug = EliminarCaracteresEspeciales(slug || "");
    return serviceSlug === targetSlug;
  });
  const logoCompany = data?.logos.secondary;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${data?.name} | ${serviceInfo?.title}`, "description": `${serviceInfo?.description[0].text}]}`, "keywords": `${serviceInfo?.title}, ${data?.name}`, "favicon": data.logos.secondary, "featuredImage": serviceInfo?.description[0].image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TransparentHeader", TransparentHeader, { "bgImages": `${serviceInfo?.description[0].image}`, "title": `${serviceInfo?.title}`, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/TransparentHeader/TransparentHeader", "client:component-export": "default" })} ${maybeRenderHead()}<section class="w-4/5 mx-auto pt-20 pb-14 md:pb-28 flex flex-col md:flex-row justify-between gap-5 md:gap-10"> <div class="w-full mx-auto md:mx-0 md:w-[60%]"> <h2 class="text-2xl md:text-5xl font-bold mb-4 text-secondary py-5 capitalize text-center md:text-start"> ${serviceInfo?.title} </h2> <p class="text-center md:text-justify mb-4"> ${serviceInfo?.description[0].text} </p> ${serviceInfo?.description && serviceInfo?.description.length > 1 ? renderTemplate`${renderComponent($$result2, "LazyImage", LazyImage, { "src": `${serviceInfo?.description[1].image}`, "alt": `${serviceInfo?.title}`, "height": 350, "className": "w-full h-[350px] md:h-[500px] object-cover rounded-xl shadow-lg mb-4", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/LazyImage", "client:component-export": "default" })}` : renderTemplate`${renderComponent($$result2, "LazyImage", LazyImage, { "src": `${serviceInfo?.description[0].image}`, "alt": `${serviceInfo?.title}`, "height": 350, "className": "w-full h-[350px] md:h-[500px] object-cover rounded-xl shadow-lg mb-4", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/LazyImage", "client:component-export": "default" })}`} ${serviceInfo?.description && serviceInfo?.description.length > 1 ? renderTemplate`<p class="text-center md:text-justify mb-4"> ${serviceInfo?.description[1].text} </p>` : null} <div class="flex justify-center md:justify-start py-5"> ${renderComponent($$result2, "ButtonContent_2", ButtonContent_2, {})} </div> </div> <div class="w-full mx-auto md:mx-0 md:w-[40%]"> <div class="border rounded-xl bg-[#FCFAF7] px-2 md:px-8 py-5 mb-5"> <p class="text-center md:text-start text-xl font-semibold py-5">
Services List
</p> <div class="border-b-2 border-[#EBECE9] mb-5 relative before:absolute before:w-1/3 before:bg-secondary before:h-1 before:left-0 before:top-0"></div> <ul> ${dataServices.slice(0, 6).map((service) => renderTemplate`<li> <a${addAttribute(`/services/${EliminarCaracteresEspeciales(service.title)}`, "href")} class="flex justify-between items-center py-3.5 px-2.5 md:px-5 bg-[#EBECE9] text-primary font-semibold capitalize rounded-lg mb-3 transition-all duration-300 ease-in-out hover:bg-primary hover:text-white" aria-label="Service Link"> ${service.title} <span> <i class="fa-solid fa-chevrons-right"></i> </span> </a> </li>`)} </ul> </div> <div class="bg-primary rounded-xl px-2 md:px-8 py-5 mb-5"> <p class="text-center md:text-start text-2xl font-semibold text-white py-5 capitalize">
contact us
</p> <ul> <li> <a${addAttribute(`tel:+1${data.dataGeneral.phones[0].number}`, "href")} class="flex justify-between items-center py-3.5 px-2.5 md:px-5 bg-[#EBECE9] text-primary font-semibold rounded-lg mb-3 transition-all duration-300 ease-in-out hover:bg-btnHover hover:text-primary" aria-label="Phone principal"> <span>Phone</span> <span><i class="fa-solid fa-phone-volume"></i></span> </a> </li> <li> <a${addAttribute(`mailto:${data.dataGeneral.emails[0].email}`, "href")} class="flex justify-between items-center py-3.5 px-2.5 md:px-5 bg-[#EBECE9] text-primary font-semibold rounded-lg mb-3 transition-all duration-300 ease-in-out hover:bg-btnHover hover:text-primary" aria-label="Phone principal"> <span>Email</span> <span><i class="fa-solid fa-envelope"></i></span> </a> </li> </ul> </div> </div> </section> ${renderComponent($$result2, "SliderServicesDetail", SliderServicesDetail, { "dataServices": dataServices, "logoCompany": logoCompany, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Sliders/SliderServicesDetail", "client:component-export": "default" })} <div class="w-11/12 md:w-1/2 mx-auto bg-gray-400/50 rounded-xl px-5 py-10 mt-10 mb-20 md:-mt-44 md:mb-44 shadow"> <h2 class="text-3xl md:text-5xl font-bold mb-4 text-secondary md:text-btnHover text-center capitalize">
Get In Touch With Us
</h2> ${renderComponent($$result2, "ContactForm", ContactForm, { "dataGlobal": data })} </div> ` })}`;
}, "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/services/[slug].astro", void 0);

const $$file$2 = "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/services/[slug].astro";
const $$url$2 = "/services/[slug]";

const _slug_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const GalleryComponent = ({ dataGallery }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1
  };
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      Masonry,
      {
        breakpointCols: breakpointColumnsObj,
        className: "my-masonry-grid",
        columnClassName: "my-masonry-grid_column",
        children: dataGallery.map((item, index) => /* @__PURE__ */ jsx("div", { onClick: () => openModal(index), children: /* @__PURE__ */ jsx(
          LazyImage,
          {
            src: item,
            alt: `gallery-${index}`,
            className: "w-full h-auto object-cover cursor-pointer transition duration-300 transform hover:scale-105 hover:shadow-lg"
          }
        ) }, index))
      }
    ),
    isModalOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/90 flex justify-center items-center z-50", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg  max-w-2xl max-h-[80vh] overflow-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx("button", { onClick: closeModal, className: "m-2 rounded-full shadow shadow-white bg-zinc-700/60 text-white hover:bg-btnHover transition-all duration-300 ease-in-out font-bold py-2.5 px-4", children: "X" }) }),
      /* @__PURE__ */ jsx(
        Swiper,
        {
          modules: [Navigation, A11y],
          spaceBetween: 50,
          slidesPerView: 1,
          navigation: true,
          pagination: { clickable: true },
          scrollbar: { draggable: true },
          onSwiper: (swiper) => swiper.slideTo(selectedImageIndex),
          children: dataGallery.map((item, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("img", { src: item, alt: `Slide ${index}`, className: "w-11/12 mx-auto md:mx-0 md:w-full max-h-full md:max-h-[70vh] object-contain" }) }, index))
        }
      )
    ] }) })
  ] });
};

const $$Astro$1 = createAstro("https://qualitymatterspaintingllc.com/");
const $$slug$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$slug$1;
  const { slug } = Astro2.params;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "Ox3V7QC54CEIUk8vmpKU";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const whyChooseUsInfo = data.valuesContent.whychooseUs;
  const landingGalleryInfo = data?.landingsGallery.find(
    (gallery) => {
      const gallerySlug = EliminarCaracteresEspeciales(gallery.nameLanding);
      const targetSlug = EliminarCaracteresEspeciales(slug || "");
      return gallerySlug === targetSlug;
    }
  );
  const specificLandingName = landingGalleryInfo?.nameLanding;
  const specificLandingGallery = data.landingsGallery.find(
    (gallery) => gallery.nameLanding === specificLandingName
  );
  const imagesArray = specificLandingGallery ? specificLandingGallery.imgLanding : [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${data?.name} | ${landingGalleryInfo?.nameLanding}`, "description": `${whyChooseUsInfo}`, "keywords": `${landingGalleryInfo?.nameLanding}, ${data?.name}`, "featuredImage": `${landingGalleryInfo?.imgLanding[0]}`, "favicon": data.logos.secondary }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TransparentHeader", TransparentHeader, { "bgImages": `${landingGalleryInfo?.imgLanding[0]}`, "title": `${landingGalleryInfo?.nameLanding}`, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/TransparentHeader/TransparentHeader", "client:component-export": "default" })} ${maybeRenderHead()}<div class="pt-10 pb-36 w-4/5 mx-auto"> <h2 class="text-center text-5xl font-bold mt-10 mb-5">Our Gallery</h2> <div class="border-b-2 border-[#EBECE9] mb-5 relative before:absolute before:w-1/3 before:mx-auto before:bg-btnHover before:h-1 before:left-0 before:right-0 before:top-0"></div> <div class="py-10"> ${renderComponent($$result2, "GalleryComponent", GalleryComponent, { "dataGallery": imagesArray, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Blocks/gallery/GalleryComponent", "client:component-export": "default" })} </div> </div> ` })}`;
}, "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/gallery/[slug].astro", void 0);

const $$file$1 = "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/gallery/[slug].astro";
const $$url$1 = "/gallery/[slug]";

const _slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://qualitymatterspaintingllc.com/");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "Ox3V7QC54CEIUk8vmpKU";
  let UrlAPiBlog = "https://api-blogs-reaktor-3ff9ba7a526a.herokuapp.com/api/blogs";
  const { slug } = Astro2.params;
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const responseBlog = await fetch(`${UrlAPiBlog}/${KetApi}`);
  const dataBlog = await responseBlog.json();
  const blogInfo = dataBlog.find((b) => b.slug === slug);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${data.name} | ${blogInfo?.seoTitle}`, "description": blogInfo?.metadescription || data.sectionsHomeAbout[0].text, "favicon": data.logos.secondary, "featuredImage": blogInfo?.featureimage || data.gallery[0], "keywords": blogInfo?.keywords || data.services.map((service) => service.title).join(", ") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TransparentHeader", TransparentHeader, { "bgImages": data.gallery[0], "title": blogInfo?.seoTitle || "Blog", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/TransparentHeader/TransparentHeader", "client:component-export": "default" })} ${renderComponent($$result2, "BlogsDetail", null, { "blog": blogInfo, "blogs": dataBlog, "data": data, "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/components/blogs/BlogsDetail", "client:component-export": "default" })} ` })}`;
}, "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ContactForm as C, GalleryComponent as G, TransparentHeader as T, _slug_$3 as _, _slug_$2 as a, _slug_$1 as b, _slug_ as c };
