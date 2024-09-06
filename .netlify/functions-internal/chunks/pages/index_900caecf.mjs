/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_7b01ba6d.mjs';
import 'html-escaper';
import 'clsx';
import { L as LazyImage, B as ButtonContent_2, $ as $$Layout } from './404_094f2332.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
/* empty css                            */import '../index.84c178bf_4b9a37ec.mjs';
import { S as SliderServices } from './about_67c8ca5f.mjs';
/* empty css                            */import { C as ContentContact } from './contact_4b574135.mjs';
import { T as TransparentHeader, G as GalleryComponent } from './_slug__5bac7061.mjs';
import { useState } from 'react';

const SlidesShow = ({
  dataBlocks,
  dataPhone,
  data
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "relative h-full overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute z-10 w-full h-full", children: /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Autoplay],
        autoplay: {
          delay: 8e3,
          disableOnInteraction: false
        },
        className: "w-full h-full border-none",
        children: dataBlocks[0]?.additionalImages.map((imag, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: "w-full h-full", children: /* @__PURE__ */ jsx(
          LazyImage,
          {
            src: imag,
            alt: dataBlocks[0]?.title,
            className: "w-full h-full object-cover"
          }
        ) }, index))
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "absolute w-full h-full top-0 left-0 z-20 bg-black/70" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-20  h-[85%] flex justify-between items-center gap-2 lg:gap-20 py-20 lg:py-[200px] md:w-[65%] mx-auto w-[95%]", children: data?.landingLocations?.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-white text-4xl md:text-7xl font-bold  capitalize pb-5", children: data?.landingLocations?.[0].description[0].title }),
      /* @__PURE__ */ jsx("p", { className: "text-white text-lg", children: data?.landingLocations?.[0].description[0].text }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center items-centern gap-5 py-10", children: /* @__PURE__ */ jsx(
        ButtonContent_2,
        {
          btnstyle: "btnStyle3",
          titleBtn: data?.landingLocations?.[0].description[0].textbutton,
          linkBtn: `tel:+1${dataPhone ? dataPhone[0].number : "Contact Us"}`
        }
      ) })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-white text-4xl md:text-7xl font-bold  capitalize pb-5", children: dataBlocks[0]?.title }),
      /* @__PURE__ */ jsx("p", { className: "text-white text-lg", children: dataBlocks[0]?.text }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center items-centern gap-5 py-10", children: /* @__PURE__ */ jsx(
        ButtonContent_2,
        {
          btnstyle: "btnStyle3",
          titleBtn: dataPhone ? dataPhone[0].number : "Contact Us",
          linkBtn: `tel:+1${dataPhone ? dataPhone[0].number : "Contact Us"}`
        }
      ) })
    ] }) })
  ] });
};

const ServicesHome = ({ dataGlobal, homeSection, landingServices, dbServices }) => {
  return /* @__PURE__ */ jsxs("div", { className: "w-4/5 mx-auto py-20 md:pb-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-10 pb-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-5 items-center", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-helmet-safety text-4xl text-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-medium text-primary capitalize", children: dataGlobal.name })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-primary my-5 capitalize text-center md:text-start", children: homeSection[1].title })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2", children: [
        /* @__PURE__ */ jsx("p", { className: "text-center md:text-justify pb-3", children: (() => {
          const text = homeSection[1].text;
          const firstPointIndex = text.indexOf(".");
          if (firstPointIndex === -1) {
            return text;
          }
          const secondPointIndex = text.indexOf(".", firstPointIndex + 1);
          if (secondPointIndex === -1) {
            return text;
          }
          return text.slice(0, secondPointIndex + 1);
        })() }),
        !dataGlobal.widgets.onePages && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center md:justify-start gap-1", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/services",
            className: "flex items-center gap-1 text-secondary font-bold capitalize underline",
            "aria-label": "see all the services we provide",
            children: [
              /* @__PURE__ */ jsx("span", { children: "see all the services we provide " }),
              /* @__PURE__ */ jsx("i", { className: "fa-solid fa-chevrons-right text-sm" })
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SliderServices, { dbServices, landingServices, onePage: dataGlobal.widgets.onePages, dataGeneral: dataGlobal.dataGeneral })
  ] });
};

const AboutBlocks = ({ dataGlobal }) => {
  const aboutSection = dataGlobal?.sectionsHomeAbout.filter(
    (section) => section.section === "about"
  );
  return /* @__PURE__ */ jsxs("div", { className: "w-4/5 mx-auto md:w-11/12 md:mr-auto md:ml-0 h-full flex flex-col md:flex-row justify-between", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "aspect-auto h-[300px] md:h-[110vh] w-full md:w-1/2 rounded-3xl md:rounded-tl-none md:rounded-bl-none md:rounded-tr-3xl md:rounded-br-3xl shadow-2xl ",
        style: {
          backgroundImage: `url("${aboutSection[0].additionalImages[0]}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 px-5 py-10 md:pt-0 md:pl-20 flex flex-col justify-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "pb-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center md:items-end gap-5 md:gap-1", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-light fa-helmet-safety text-5xl text-secondary" }),
          /* @__PURE__ */ jsxs("p", { className: "text-2xl font-medium text-secondary capitalize", children: [
            "About ",
            dataGlobal.name
          ] })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-primary mt-5 text-center md:text-start", children: aboutSection[0].title }),
        /* @__PURE__ */ jsx("p", { className: "text-center md:text-justify mt-5", children: aboutSection[0].text })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-[60%] pb-8 md:pb-0", children: [
          /* @__PURE__ */ jsx("ul", { className: "pb-5", children: aboutSection[0].list.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-primary font-medium py-2", children: [
            /* @__PURE__ */ jsx("i", { className: "fa-solid fa-check bg-secondary rounded-full text-white p-2" }),
            /* @__PURE__ */ jsx("p", { children: item })
          ] }, index)) }),
          /* @__PURE__ */ jsx("div", { className: "text-center md:text-start", children: dataGlobal.widgets.onePages ? /* @__PURE__ */ jsx(ButtonContent_2, { titleBtn: "Contact Us", linkBtn: `tel:+1${dataGlobal.dataGeneral.phones[0].number}` }) : /* @__PURE__ */ jsx(ButtonContent_2, {}) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full lg:w-[40%] h-full flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#FCFAF7] border-t-[3px] border-primary rounded-b-full h-full px-12 w-4/5 flex flex-col justify-center  ", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-center text-secondary font-bold py-2 text-4xl", children: [
            dataGlobal.yearsExperience,
            "+"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-center text-primary font-bold ", children: "Years of Experience" }),
          !dataGlobal.widgets.onePages && /* @__PURE__ */ jsx("div", { className: "flex justify-center py-5", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/about",
              className: "bg-primary text-white font-bold p-4 px-5 rounded-full hover:bg-btnHover hover:text-primary transition-all duration-300 ease-in-out",
              "aria-label": "Read more about us",
              children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right" })
            }
          ) })
        ] }) })
      ] })
    ] })
  ] });
};

const ValuesContent = ({ dataGlobal }) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-primary -mt-0 lg:-mt-20", children: [
    /* @__PURE__ */ jsx("div", { className: " w-11/12 mx-auto flex justify-center md:pt-32 pt-20", children: /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center md:items-center ", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-5", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-2xl md:text-5xl font-medium text-tertiary capitalize flex gap-2 text-white", children: [
        /* @__PURE__ */ jsx("i", { className: "fa-light fa-helmet-safety" }),
        /* @__PURE__ */ jsx("span", { children: "Our Values" })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-3xl font-bold text-white capitalize text-center", children: dataGlobal.slogan[0] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "w-[70%] mx-auto  pb-5 md:pb-14 grid grid-cols-1 lg:grid-cols-3 gap-5 relative mt-0 md:mt-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-5 shadow-sm shadow-white text-center md:text-start", children: [
        /* @__PURE__ */ jsx("i", { className: "fa-light fa-person-circle-exclamation text-5xl text-btnHover" }),
        /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-secondary capitalize px-2 pb-3", children: "mission" }),
        /* @__PURE__ */ jsx("p", { children: dataGlobal.valuesContent.mission })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-5 shadow-sm shadow-white text-center md:text-start", children: [
        /* @__PURE__ */ jsx("i", { className: "fa-light fa-bullseye text-5xl text-btnHover" }),
        /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-secondary capitalize px-2 pb-3", children: "Vision" }),
        /* @__PURE__ */ jsx("p", { children: dataGlobal.valuesContent.vision })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-5 shadow-sm shadow-white text-center md:text-start", children: [
        /* @__PURE__ */ jsx("i", { className: "fa-light fa-handshake text-5xl text-btnHover" }),
        /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-secondary capitalize px-2 pb-3", children: "Why Choose Us" }),
        /* @__PURE__ */ jsx("p", { children: dataGlobal.valuesContent.whychooseUs })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "-mt-40", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/assets/images/404Img/leaf-3.png",
        alt: "Leaf",
        loading: "lazy",
        className: "w-full h-[200px] md:h-full object-cover object-center aspect-auto",
        width: 500,
        height: 500
      }
    ) }) })
  ] });
};

const HomeBlocks = ({
  homeSection,
  dataPhone,
  onePages,
  data
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full md:w-4/5 mx-auto flex flex-col-reverse md:flex-row gap-5 py-10 md:py-28", children: [
    data?.landingLocations?.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 flex flex-col justify-center px-10 md:pr-10 md:pl-0", children: [
      /* @__PURE__ */ jsx("i", { className: "fa-solid fa-construction text-4xl text-primary text-center md:text-start" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-primary capitalize pb-5 text-center md:text-start", children: data?.landingLocations?.[0].description[1].title }),
      /* @__PURE__ */ jsx("p", { className: "text-center md:text-justify pb-3", children: data?.landingLocations?.[0].description[1].text }),
      /* @__PURE__ */ jsx("div", { className: "py-5 text-center md:text-start", children: onePages ? /* @__PURE__ */ jsx(
        ButtonContent_2,
        {
          titleBtn: data?.landingLocations?.[0].description[1].textbutton,
          linkBtn: `tel:+1${dataPhone[0].number}`
        }
      ) : /* @__PURE__ */ jsx(ButtonContent_2, {}) })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 flex flex-col justify-center px-10 md:pr-10 md:pl-0", children: [
      /* @__PURE__ */ jsx("i", { className: "fa-solid fa-construction text-4xl text-primary text-center md:text-start" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-primary capitalize pb-5 text-center md:text-start", children: homeSection[0].title }),
      /* @__PURE__ */ jsx("p", { className: "text-center md:text-justify pb-3", children: homeSection[0].text }),
      /* @__PURE__ */ jsx("div", { className: "py-5 text-center md:text-start", children: onePages ? /* @__PURE__ */ jsx(
        ButtonContent_2,
        {
          titleBtn: "Contact Us",
          linkBtn: `tel:+1${dataPhone[0].number}`
        }
      ) : /* @__PURE__ */ jsx(ButtonContent_2, {}) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/2 pb-10 md:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "w-full flex items-center gap-5 relative", children: [
      data?.landingLocations?.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-[55%] shadow-md h-[450px] md:h-[70vh] aspect-auto",
            style: {
              backgroundImage: `url("${data?.landingLocations?.[0].description[1].image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-[45%] h-[350px] md:h-[50vh] shadow-md aspect-auto",
            style: {
              backgroundImage: `url("${data?.gallery[3]}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }
          }
        )
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-[55%] shadow-md h-[450px] md:h-[70vh] aspect-auto",
            style: {
              backgroundImage: `url("${homeSection[0].additionalImages[0]}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-[45%] h-[350px] md:h-[50vh] shadow-md aspect-auto",
            style: {
              backgroundImage: `url("${homeSection[0].additionalImages[1]}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute flex justify-center items-center w-full", children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-full p-4 shadow", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: `tel:+1${dataPhone[0].number}`,
          className: "bg-white rounded-full w-36 h-36 md:w-52 md:h-52 border-2 border-spacing-5 border-dashed border-secondary flex flex-col justify-center items-center gap-2 md:gap-5",
          children: [
            /* @__PURE__ */ jsx("i", { className: "fa-solid fa-phone-rotary text-secondary text-5xl" }),
            /* @__PURE__ */ jsx("p", { className: "text-secondary text-center font-bold capitalize text-lg md:text-2xl", children: "Call us now" })
          ]
        }
      ) }) })
    ] }) })
  ] });
};

const SocialMediaHome = ({ dataGlobal }) => {
  return /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "border-t w-3/4 mx-auto flex flex-col md:flex-row justify-between items-center pb-10 md:pb-0", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: dataGlobal.gmb.length ? dataGlobal.gmb : "/",
          "aria-label": "Google my Business",
          target: dataGlobal.gmb.length ? "_blank" : "_self",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://firebasestorage.googleapis.com/v0/b/clientesimages.appspot.com/o/directorios%2Fgmb-reviews.png?alt=media&token=791a077e-6f07-4a18-9226-32c0bf9cb2d1",
              alt: "Google my Business",
              loading: "lazy",
              className: "w-52 h-52 object-contain aspect-auto",
              width: 200,
              height: 200
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "pb-5", children: /* @__PURE__ */ jsx("h2", { className: "text-5xl font-bold capitalize", children: "Find Us on" }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ButtonContent_2, { titleBtn: "Write A Review", gmbUrl: true, linkBtn: dataGlobal.gmb.length ? dataGlobal.gmb : "/" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "-mt-14 w-11/12 md:w-3/4 mx-auto flex justify-center items-center", children: /* @__PURE__ */ jsxs(
      Swiper,
      {
        modules: [
          // Navigation, 
          Autoplay
        ],
        spaceBetween: 20,
        autoplay: {
          delay: 3e3,
          disableOnInteraction: false
        },
        breakpoints: {
          320: {
            slidesPerView: 2
          },
          640: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 4
          },
          1024: {
            slidesPerView: 6
          }
        },
        children: [
          dataGlobal.directorios.length > 0 ? dataGlobal.directorios.map((directorio, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: `flex items-center gap-10 `, children: /* @__PURE__ */ jsx("a", { href: `${directorio.link}`, target: "_blank", className: "flex items-center h-full p-3", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: directorio.logo,
              alt: directorio.name,
              className: "w-full h-[150px] rounded-tl-xl rounded-tr-xl object-contain aspect-auto",
              loading: "lazy"
            }
          ) }) }, index)) : null,
          dataGlobal.redesSociales.length > 0 ? dataGlobal.redesSociales.map((redesSociales, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: `flex items-center gap-10`, children: /* @__PURE__ */ jsx("a", { href: `${redesSociales.link}`, target: "_blank", className: "flex items-center h-full p-3", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: redesSociales.logo,
              alt: redesSociales.name,
              className: "w-full h-[150px] rounded-tl-xl rounded-tr-xl object-contain aspect-auto",
              loading: "lazy"
            }
          ) }) }, index)) : null
        ]
      }
    ) })
  ] });
};

const CallToAction = ({ homeSection, nameCompany, dataPhone }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "aspect-auto w-full h-full py-24 md:py-32 relative flex justify-center items-center before:absolute before:w-full before:h-full before:top-0 before:bg-primary",
      style: {
        backgroundImage: `url(${homeSection?.[1]?.additionalImages?.[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      },
      children: /* @__PURE__ */ jsxs("div", { className: "w-11/12 md:w-[70%] mx-auto relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center md:items-end gap-5 md:gap-1", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-light fa-helmet-safety text-5xl text-white" }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-medium text-gray-200 capitalize", children: nameCompany })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl capitalize font-bold text-white mt-5 text-center", children: homeSection?.[1]?.title }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white w-full h-full rounded-xl flex flex-col-reverse md:flex-row gap-5 md:gap-10 mt-10 px-5 py-10 md:px-10 md:py-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[60%] h-full", children: [
            /* @__PURE__ */ jsx("p", { className: "text-center md:text-justify px-5 pt-0 md:pt-5 pb-10", children: homeSection?.[1]?.text }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center md:justify-start", children: /* @__PURE__ */ jsxs("div", { className: "w-full grid grid-cols-2 md:grid-cols-3 gap-5", children: [
              homeSection[1].additionalImages.slice(2).map((item, index) => /* @__PURE__ */ jsx("div", { className: index === 0 ? "block" : "hidden sm:block", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: item,
                  alt: "image",
                  className: "w-full h-48 object-cover shadow-md rounded-b-full aspect-auto",
                  loading: "lazy"
                }
              ) }, index)),
              /* @__PURE__ */ jsx("div", { className: "w-full h-48 bg-[#FCFAF7] flex items-center justify-center rounded-b-full border-secondary border-t-[5px]", children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `tel:+1${dataPhone[0].number}`,
                  className: "bg-primary text-white font-bold p-4 px-5 rounded-full hover:bg-btnHover hover:text-primary transition-all duration-300 ease-in-out",
                  children: "Call Us Now"
                }
              ) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-full md:w-[40%] h-[250px] md:h-auto rounded-xl shadow-md aspect-auto",
              style: {
                backgroundImage: `url("${homeSection?.[1]?.additionalImages?.[1]}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }
            }
          )
        ] })
      ] })
    }
  );
};

const ServicesComponent = ({ dataServices, onePages, dataPhone }) => {
  let lastFlexClass = "flex-col-reverse md:flex-row ";
  let lastRoundedClass = "rounded-t-full border-b-[20px] border-btnHover";
  return /* @__PURE__ */ jsxs("div", { className: "w-4/5 mx-auto pt-10 pb-28", children: [
    /* @__PURE__ */ jsxs("div", { className: "my-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-5xl font-bold text-center mb-5", children: "Our Services" }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "border-b-2 border-[#EBECE9] mb-5 relative before:absolute before:w-1/3 before:mx-auto before:bg-btnHover before:h-1 before:left-0 before:right-0 before:top-0"
        }
      )
    ] }),
    dataServices.map((service, serviceIndex) => /* @__PURE__ */ jsx("div", { children: service.description.map((desc, descIndex, descArray) => {
      const isLastDescription = descIndex === descArray.length - 1;
      let flexClass;
      let roundedClass;
      if (isLastDescription) {
        flexClass = lastFlexClass === "flex-col-reverse md:flex-row " ? "flex-col-reverse md:flex-row-reverse" : "flex-col-reverse md:flex-row ";
        roundedClass = lastRoundedClass === "rounded-t-full border-b-[20px] border-btnHover" ? "rounded-t-full border-b-[20px] md:rounded-b-full md:border-t-[20px] md:rounded-t-none md:border-b-0  border-btnHover" : "rounded-t-full border-b-[20px] border-btnHover";
        lastFlexClass = flexClass;
        lastRoundedClass = roundedClass;
      } else {
        flexClass = descIndex % 2 === 0 ? "flex-col-reverse md:flex-row " : "flex-col-reverse md:flex-row-reverse";
        roundedClass = descIndex % 2 === 0 ? "rounded-t-full border-b-[20px] border-btnHover" : "rounded-t-full border-b-[20px] md:rounded-b-full md:border-t-[20px] md:rounded-t-none md:border-b-0  border-btnHover";
      }
      const titleVisibility = descIndex === 0 ? "block" : "hidden";
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `flex ${flexClass} items-center  md:p-0 px-2 my-[100px] gap-10`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: `md:w-[50%] md:self-center md:my-[-40px] md:p-10 p-4 `, children: [
              /* @__PURE__ */ jsxs("div", { className: `${titleVisibility} flex flex-col md:flex-row justify-center md:justify-start items-center gap-2 pb-5 `, children: [
                /* @__PURE__ */ jsx("span", { className: "text-4xl text-btnHover hidden md:block", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-pipe " }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-center md:text-start capitalize text-secondary text-3xl font-semibold ", children: service.title }),
                /* @__PURE__ */ jsxs("span", { className: "text-4xl text-btnHover block md:hidden -mt-3", children: [
                  " ",
                  /* @__PURE__ */ jsx("i", { className: "fa-solid fa-horizontal-rule" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-center md:text-justify", children: desc.text }),
              /* @__PURE__ */ jsx("div", { className: "py-5 flex justify-center md:justify-start", children: onePages ? /* @__PURE__ */ jsx(ButtonContent_2, { titleBtn: "Contact Us", linkBtn: `tel:+1${dataPhone && dataPhone[0].number}` }) : /* @__PURE__ */ jsx(ButtonContent_2, {}) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "md:w-[50%] w-full flex self-center", children: /* @__PURE__ */ jsx("div", { className: `w-full md:h-[500px] h-[350px]`, children: /* @__PURE__ */ jsx(
              LazyImage,
              {
                src: desc.image,
                alt: "Placeholder",
                className: `w-full h-full object-cover ${roundedClass}`
              }
            ) }) })
          ]
        },
        descIndex
      );
    }) }, serviceIndex))
  ] });
};

const AreasBlockOne = ({
  title,
  text,
  nameBtn,
  image
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap md:w-[80%] mx-auto w-[95%] md:py-10 py-6", children: [
    /* @__PURE__ */ jsx("div", { className: "md:w-[50%] md:p-8 p-3 w-full", children: /* @__PURE__ */ jsx(
      LazyImage,
      {
        src: image,
        alt: title,
        className: "w-screen rounded-tl-xl rounded-tr-xl object-cover aspect-auto"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "md:w-[50%] md:p-8 p-3 w-full flex flex-col self-center gap-2", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-primary capitalize pb-5 text-center md:text-start", children: title }),
      /* @__PURE__ */ jsx("p", { children: text }),
      /* @__PURE__ */ jsx(ButtonContent_2, { titleBtn: nameBtn })
    ] })
  ] });
};

const $$Astro$4 = createAstro("https://qualitymatterspaintingllc.com/");
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$4;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "Ox3V7QC54CEIUk8vmpKU";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const homeSection = data?.sectionsHomeAbout.filter(
    (section) => section.section === "home"
  );
  const dataBlocks = data?.sectionsHomeAbout.filter(
    (section) => section.section === "blocks"
  );
  const dataPhone = data.dataGeneral.phones;
  const nameCompany = data.name;
  const landingServices = data.widgets.landingServices;
  const onePages = data.widgets.onePages;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `
  ${data.landingLocations?.length > 0 ? ` ${data.landingLocations?.[0].seoTitle}` : `${data.name} | Home`}
  `, "description": `
    ${data.landingLocations?.length > 0 ? ` ${data.landingLocations?.[0].metadescription}` : `${homeSection[0].text}`}
    `, "favicon": data.logos.secondary, "featuredImage": `
    ${data.landingLocations?.length > 0 ? ` ${data.landingLocations?.[0].feactureimage}` : `${data.logos.secondary}`}
    `, "keywords": `
    ${data.landingLocations?.length > 0 ? ` ${data.landingLocations?.[0].keywords}` : `${data.services.map((service) => service.title).join(", ")}`}
    ` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SlideShow", SlidesShow, { "dataBlocks": dataBlocks, "dataPhone": dataPhone, "data": data, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/TransparentHeader/SlideShow", "client:component-export": "default" })} ${renderComponent($$result2, "ServicesHome", ServicesHome, { "dataGlobal": data, "homeSection": homeSection, "landingServices": landingServices, "dbServices": data.services, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Blocks/home/ServicesHome", "client:component-export": "default" })} ${renderComponent($$result2, "HomeBlocks", HomeBlocks, { "homeSection": homeSection, "dataPhone": dataPhone, "onePages": onePages, "data": data })} ${data.landingLocations?.length > 0 ? renderTemplate`${renderComponent($$result2, "AreasBlockOne", AreasBlockOne, { "title": data.landingLocations?.[0].description[2].title, "text": data.landingLocations?.[0].description[2].text, "nameBtn": data.landingLocations?.[0].description[2].textbutton, "image": data.landingLocations?.[0].description[2].image, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/components/Blocks/areas-we-serve/AreasBlockOne", "client:component-export": "default" })}` : null}${renderComponent($$result2, "AboutBlocks", AboutBlocks, { "dataGlobal": data })} ${renderComponent($$result2, "ValuesContent", ValuesContent, { "dataGlobal": data })} ${renderComponent($$result2, "SocialMediaHome", SocialMediaHome, { "dataGlobal": data, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Blocks/home/SocialMediaHome", "client:component-export": "default" })} ${renderComponent($$result2, "CallToAction", CallToAction, { "homeSection": homeSection, "nameCompany": nameCompany, "dataPhone": dataPhone })} ${onePages && renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result2, "ServicesComponent", ServicesComponent, { "dataServices": data.services, "dataPhone": dataPhone, "onePages": onePages, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Blocks/services/ServicesComponent", "client:component-export": "default" })} <div class="relative"> <div class="bg-btnHover rounded-t-full w-11/12 md:w-1/3 py-28 md:py-32 mx-auto"></div> <div class="bg-primary py-10 w-full"></div> <div class="absolute top-0 right-0 left-0"> ${renderComponent($$result2, "LazyImage", LazyImage, { "src": data.logos.secondary, "alt": data.name, "className": "w-4/5 md:w-1/4 mx-auto", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/LazyImage", "client:component-export": "default" })} </div> </div> </div>`}${renderComponent($$result2, "ContentContact", ContentContact, { "dataGlobal": data, "bgImage": data.gallery[0], "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Blocks/home/ContenctContact", "client:component-export": "default" })} ` })}`;
}, "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/index.astro", void 0);

const $$file$4 = "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/index.astro";
const $$url$4 = "";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://qualitymatterspaintingllc.com/");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "Ox3V7QC54CEIUk8vmpKU";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const dataBlocks = data?.sectionsHomeAbout.filter(
    (section) => section.section === "blocks"
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${data.name} | Areas We Serve`, "description": dataBlocks[8]?.text, "favicon": data.logos.secondary, "featuredImage": data.logos.favicon, "keywords": data.services.map((service) => service.title).join(", ") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TransparentHeader", TransparentHeader, { "bgImages": dataBlocks[8]?.additionalImages[0], "title": dataBlocks[8]?.title || "Areas We Serve", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/components/TransparentHeader/TransparentHeader", "client:component-export": "default" })} ${maybeRenderHead()}<div class="pt-10 pb-36 w-4/5 mx-auto"> <h2 class="text-center text-5xl font-bold mt-10 mb-5">Our Areas We Serve</h2> </div> ` })}`;
}, "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/areas-we-serve/index.astro", void 0);

const $$file$3 = "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/areas-we-serve/index.astro";
const $$url$3 = "/areas-we-serve";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://qualitymatterspaintingllc.com/");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "Ox3V7QC54CEIUk8vmpKU";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  data?.services.filter(
    (service) => service.description
  );
  const dataBlocks = data?.sectionsHomeAbout.filter(
    (section) => section.section === "blocks"
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${data?.name} | Services`, "description": dataBlocks[2]?.text, "favicon": data.logos.secondary, "featuredImage": data.logos.favicon, "keywords": data.services.map((service) => service.title).join(", ") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TransparentHeader", TransparentHeader, { "bgImages": dataBlocks[2]?.additionalImages[0], "title": dataBlocks[2]?.title || "Services", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/TransparentHeader/TransparentHeader", "client:component-export": "default" })} ${renderComponent($$result2, "ServicesComponent", ServicesComponent, { "dataServices": data.services, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Blocks/services/ServicesComponent", "client:component-export": "default" })} ` })}`;
}, "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/services/index.astro", void 0);

const $$file$2 = "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/services/index.astro";
const $$url$2 = "/services";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://qualitymatterspaintingllc.com/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "Ox3V7QC54CEIUk8vmpKU";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const dataBlocks = data?.sectionsHomeAbout.filter(
    (section) => section.section === "blocks"
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${data.name} | Gallery`, "description": data.sectionsHomeAbout[0].text, "favicon": data.logos.secondary, "featuredImage": data.logos.favicon, "keywords": data.services.map((service) => service.title).join(", ") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TransparentHeader", TransparentHeader, { "bgImages": data.gallery[6], "title": dataBlocks[3]?.title || "Gallery", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/TransparentHeader/TransparentHeader", "client:component-export": "default" })} ${maybeRenderHead()}<div class="pt-10 pb-36 w-4/5 mx-auto"> <h2 class="text-center text-5xl font-bold mt-10 mb-5">Our Gallery</h2> <div class="border-b-2 border-[#EBECE9] mb-5 relative before:absolute before:w-1/3 before:mx-auto before:bg-btnHover before:h-1 before:left-0 before:right-0 before:top-0"></div> <div class="py-10"> ${renderComponent($$result2, "GalleryComponent", GalleryComponent, { "dataGallery": data.gallery, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Blocks/gallery/GalleryComponent", "client:component-export": "default" })} </div> </div> ` })}`;
}, "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/gallery/index.astro", void 0);

const $$file$1 = "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/gallery/index.astro";
const $$url$1 = "/gallery";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const ComponentBlogs = ({ dataBlog }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredBlogs = selectedCategory === "All" ? dataBlog : dataBlog.filter((blog) => blog.category === selectedCategory);
  const sortedBlogs = dataBlog.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const recentBlogs = sortedBlogs.slice(0, 7);
  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const options = {
      day: "2-digit",
      month: "long",
      year: "numeric"
    };
    return dateObject.toLocaleDateString("en-US", options);
  };
  const getCategoryCounts = () => {
    const counts = {};
    dataBlog.forEach((blog) => {
      counts[blog.category] = (counts[blog.category] || 0) + 1;
    });
    return counts;
  };
  const categoryCounts = getCategoryCounts();
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start gap-10", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full md:w-[65%]", children: filteredBlogs.length > 0 ? filteredBlogs.map((blog, index) => {
      const textDescription = blog.description.find(
        (desc) => desc.type === "text"
      );
      const firstTextValue = textDescription ? textDescription.value : "";
      return /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-10 bg-[#FCFAF7] rounded-2xl px-5 md:pl-16 md:pr-5 py-8 shadow mb-10", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `/blog/${blog.slug}`,
            className: "w-full md:w-1/2 h-full",
            "aria-label": "blog image link",
            children: /* @__PURE__ */ jsx(
              LazyImage,
              {
                src: blog.featureimage,
                alt: blog.seoTitle,
                className: "w-full h-[300px] md:h-[350px] object-cover rounded-xl"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white flex flex-col md:flex-row items-center gap-2 border border-primary rounded-xl px-5 py-2 mb-5", children: [
            /* @__PURE__ */ jsx("p", { className: "text-primary text-lg font-medium ", children: formatDate(blog.date) }),
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-gray-400/70 mx-2" }),
            /* @__PURE__ */ jsx("span", { className: "text-primary text-lg font-medium capitalize", children: blog.category })
          ] }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `/blog/${blog.slug}`,
              className: "text-2xl text-primary font-bold hover:text-btnHover transition-all duration-300 ease-in-out",
              "aria-label": "blog title link",
              children: blog.seoTitle
            }
          ),
          /* @__PURE__ */ jsxs("p", { className: "text-lg text-primary mt-5", children: [
            firstTextValue.slice(0, 100),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `/blog/${blog.slug}`,
                className: "text-primary font-semibold hover:text-btnHover transition-all duration-300 ease-in-out",
                "aria-label": "blog read more link",
                children: "...Read More"
              }
            )
          ] })
        ] })
      ] }, index);
    }) : /* @__PURE__ */ jsx("div", { className: "text-primary text-lg my-2", children: "No blogs created yet." }) }),
    /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[35%]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#FCFAF7] rounded-2xl border shadow px-5 py-4 mb-10", children: [
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-center md:text-start text-xl font-semibold py-5 capitalize",
            children: "Category"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "border-b-2 border-[#EBECE9] mb-5 relative before:absolute before:w-1/3 before:bg-secondary before:h-1 before:left-0 before:top-0"
          }
        ),
        /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-5 py-5", children: [
          /* @__PURE__ */ jsx(
            "li",
            {
              className: `text-lg font-semibold  ${selectedCategory === "All" ? "bg-btnHover border-none rounded-xl px-5" : "text-primary"} py-3 border-b hover:border-btnHover transition-all duration-300 ease-in-out`,
              children: /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setSelectedCategory("All"),
                  className: "w-full flex justify-between items-center ",
                  "aria-label": "all category link",
                  children: [
                    /* @__PURE__ */ jsxs("span", { className: "capitalize", children: [
                      "All - ",
                      `(${dataBlog.length})`
                    ] }),
                    /* @__PURE__ */ jsx("i", { className: "fa-solid fa-chevrons-right" })
                  ]
                }
              )
            }
          ),
          dataBlog.length > 0 && dataBlog.map((blog, index) => /* @__PURE__ */ jsx(
            "li",
            {
              className: `text-lg font-semibold  ${selectedCategory === blog.category ? "bg-btnHover border-none rounded-xl px-5" : "text-primary"} py-3 border-b hover:border-btnHover transition-all duration-300 ease-in-out`,
              children: /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setSelectedCategory(blog.category),
                  className: "w-full flex justify-between items-center ",
                  "aria-label": `category ${blog.category}  link`,
                  children: [
                    /* @__PURE__ */ jsxs("span", { className: "capitalize", children: [
                      blog.category,
                      " - ",
                      `(${categoryCounts[blog.category]})`,
                      " "
                    ] }),
                    /* @__PURE__ */ jsx("i", { className: "fa-solid fa-chevrons-right" })
                  ]
                }
              )
            },
            index
          ))
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border shadow px-5 py-4", children: [
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-center md:text-start text-xl font-semibold py-5 capitalize",
            children: "Recent News"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "border-b-2 border-[#EBECE9] mb-5 relative before:absolute before:w-1/3 before:bg-secondary before:h-1 before:left-0 before:top-0"
          }
        ),
        /* @__PURE__ */ jsx("ul", { className: "p-0 md:p-5", children: recentBlogs.length > 0 ? recentBlogs.map((blog, index) => /* @__PURE__ */ jsxs("li", { className: `flex justify-center items-center gap-5 py-5 mb-5 ${index !== recentBlogs.length - 1 ? "border-b" : ""}`, children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `/${blog.slug}`,
              className: "w-auto h-full",
              "aria-label": `read more about ${blog.seoTitle}`,
              children: /* @__PURE__ */ jsx(
                LazyImage,
                {
                  src: blog.featureimage,
                  alt: blog.seoTitle,
                  className: "w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full shadow-sm object-cover"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "w-2/3", children: [
            /* @__PURE__ */ jsx("p", { className: "text-primary text-lg my-2", children: formatDate(blog.date) }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `/blog/${blog.slug}`,
                className: "text-xl text-primary font-bold hover:text-btnHover transition-all duration-300 ease-in-out",
                "aria-label": `read more about ${blog.seoTitle}`,
                children: blog.seoTitle
              }
            ),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: `/blog/${blog.slug}`,
                className: "text-primary font-semibold hover:text-btnHover transition-all duration-300 ease-in-out capitalize",
                "aria-label": `read more about ${blog.seoTitle}`,
                children: "View details"
              }
            ) })
          ] })
        ] }, index)) : /* @__PURE__ */ jsx("li", { className: "text-primary text-lg my-2", children: "No recent blogs available." }) })
      ] })
    ] })
  ] });
};

const $$Astro = createAstro("https://qualitymatterspaintingllc.com/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let UrlApi = "https://reaktorx-4b9e4f65e617.herokuapp.com/app";
  let KetApi = "Ox3V7QC54CEIUk8vmpKU";
  let UrlAPiBlog = "https://api-blogs-reaktor-3ff9ba7a526a.herokuapp.com/api/blogs";
  const response = await fetch(`${UrlApi}/${KetApi}`);
  const data = await response.json();
  const responseBlog = await fetch(`${UrlAPiBlog}/${KetApi}`);
  const dataBlog = await responseBlog.json();
  const dataBlocks = data?.sectionsHomeAbout.filter(
    (section) => section.section === "blocks"
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${data.name} | Blogs`, "description": dataBlocks[7]?.text, "favicon": data.logos.secondary, "featuredImage": data.logos.favicon, "keywords": data.services.map((service) => service.title).join(", ") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TransparentHeader", TransparentHeader, { "bgImages": data.gallery[8], "title": dataBlocks[7]?.title || "Blogs", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/TransparentHeader/TransparentHeader", "client:component-export": "default" })} ${maybeRenderHead()}<div class="pt-10 pb-36 w-4/5 mx-auto"> <div class="mt-10 mb-20"> <h2 class="text-center text-5xl font-bold mb-5">Our Blogs</h2> <div class="border-b-2 border-[#EBECE9] mb-5 relative before:absolute before:w-1/3 before:mx-auto before:bg-btnHover before:h-1 before:left-0 before:right-0 before:top-0"></div> </div> ${renderComponent($$result2, "ComponentBlogs", ComponentBlogs, { "dataBlog": dataBlog, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/blogs/ComponentBlogs", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/video/Desktop/SEO cliente/qualitymatterspaintingllc-seo/src/pages/blog/index.astro";
const $$url = "/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$3 as a, index$2 as b, index$1 as c, index as d, index$4 as i };
