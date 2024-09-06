import type { ApiData, Phone, SectionsHomeAbout } from "@/interfaces/dbData";

import ButtonContent2 from "@/components/button/ButtonContent_2";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import LazyImage from "../LazyImage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

interface SlidesShowProps {
  dataBlocks: SectionsHomeAbout[];
  dataPhone?: Phone[];
  data?: ApiData;
}

const SlidesShow: React.FC<SlidesShowProps> = ({
  dataBlocks,
  dataPhone,
  data,
}) => {
  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute z-10 w-full h-full">
        <Swiper
          modules={[Autoplay, Pagination]} // Añade Pagination a los módulos
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            //hacer mas grande los bullets
            bulletClass: "swiper-pagination-bullet",
            dynamicBullets: true,
            renderBullet: (index, className) => {
              return '<span class="' + className + '"></span>'; // Corregido
            },
          }}
          className="w-full h-full border-none"
        >
          {dataBlocks[0]?.additionalImages.map((image, index) => (
            <SwiperSlide key={index} className="w-full h-full relative">
              {/* Overlay dentro de cada SwiperSlide */}
              <div className="absolute inset-0 bg-black/70 z-10"></div>
              <LazyImage
                src={image}
                alt={dataBlocks[0]?.title}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* overlay */}

      {/* waves */}

      {/* content */}
      <div className="relative z-20  h-[85%] flex justify-between items-center gap-2 lg:gap-20 py-20 lg:py-[200px] md:w-[65%] mx-auto w-[95%]">
        {/* <button
                    onClick={prevImage}
                    className="prev-button border border-white rounded-full text-lg lg:text-3xl px-2.5 py-1 lg:px-4 lg:py-3 text-white font-bold hover:bg-btnHover hover:border-btnHover hover:text-primary transition-all duration-300 ease-in-out"
                    aria-label="Previous Slide"
                >
                    <i className="fa-solid fa-arrow-left"></i>
                </button> */}
        {data?.landingLocations?.length! > 0 ? (
          <div className="text-center">
            <h1 className="text-white text-4xl md:text-7xl font-bold  capitalize pb-5">
              {data?.landingLocations?.[0].description[0].title}
            </h1>
            <p className="text-white text-lg">
              {data?.landingLocations?.[0].description[0].text}
            </p>
            <div className="flex justify-center items-centern gap-5 py-10">
              <ButtonContent2
                btnstyle="btnStyle3"
                titleBtn={data?.landingLocations?.[0].description[0].textbutton}
                linkBtn={`tel:+1${
                  dataPhone ? dataPhone[0].number : "Contact Us"
                }`}
              />
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-white text-4xl md:text-7xl font-bold  capitalize pb-5">
              {dataBlocks[0]?.title}
            </h1>
            <p className="text-white text-lg">{dataBlocks[0]?.text}</p>
            <div className="flex justify-center items-centern gap-5 py-10">
              <ButtonContent2
                btnstyle="btnStyle3"
                titleBtn={dataPhone ? dataPhone[0].number : "Contact Us"}
                linkBtn={`tel:+1${
                  dataPhone ? dataPhone[0].number : "Contact Us"
                }`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlidesShow;
