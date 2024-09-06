import LazyImage from "@/components/LazyImage";
import ButtonContent_2 from "@/components/button/ButtonContent_2";

interface AreasBlockOneProps {
  title: string;
  text: string;
  nameBtn: string;
  image: string;
}

const AreasBlockOne: React.FC<AreasBlockOneProps> = ({
  title,
  text,
  nameBtn,
  image,
}: AreasBlockOneProps) => {
  return (
    <div className="flex flex-wrap md:w-[80%] mx-auto w-[95%] md:py-10 py-6">
      <div className="md:w-[50%] md:p-8 p-3 w-full">
        <LazyImage
          src={image}
          alt={title}
          className="w-screen rounded-tl-xl rounded-tr-xl object-cover aspect-auto"
        />
      </div>
      <div className="md:w-[50%] md:p-8 p-3 w-full flex flex-col self-center gap-2">
        <h2 className="text-3xl font-bold text-primary capitalize pb-5 text-center md:text-start">
          {title}
        </h2>
        <p>{text}</p>
        <ButtonContent_2 titleBtn={nameBtn} />
      </div>
    </div>
  );
};

export default AreasBlockOne;
