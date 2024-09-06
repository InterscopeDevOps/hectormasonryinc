import LazyImage from "../LazyImage";

interface TransparentHeaderProps {
    bgImages: string;
    title: string;

}

const TransparentHeader: React.FC<TransparentHeaderProps> = ({ bgImages, title }) => {
    return (
        <div
            className="w-full h-[400px] md:h-[500px] md:px-2 px-4 md:py-2 py-6 relative before:absolute before:z-10 before:w-full before:h-full before:top-0 before:left-0 before:bg-black/60 flex flex-col justify-center items-center"
        >
            <div className="absolute w-full h-full">
                <LazyImage
                    src={bgImages}
                    alt={"images about"}
                    height={350}
                    className="w-full h-[350px] md:h-[500px] object-cover object-center"
                    imgLoading="eager"
                />
            </div>
            <h1 className="md:text-5xl text-4xl font-bold text-white relative z-10 capitalize text-center">
                {title}
            </h1>
            <div className="w-4/5 md:w-1/2 mx-auto bg-primary rounded-full p-5  absolute z-10 bottom-0 right-0 left-0 flex items-center justify-center gap-5">
                <a
                    href="/" className="text-gray-300 font-bold text-sm md:text-lg  hover:text-tertiary transition-all duration-300 ease-in-out"
                    aria-label="Home Page"
                >
                    Home
                </a>
                <i className="fa-light fa-circle-o text-white"></i>
                <p className="text-white font-bold text-sm md:text-lg  underline underline-offset-8 capitalize">
                    {title}
                </p>
            </div>
        </div>
    );
}


export default TransparentHeader;