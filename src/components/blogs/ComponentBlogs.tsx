import type { Blogs } from "@/interfaces/dbBlog";
import LazyImage from "../LazyImage";
import { useEffect, useState } from "react";

interface ComponentBlogsProps {
    dataBlog: Blogs[];
}

const ComponentBlogs: React.FC<ComponentBlogsProps> = ({ dataBlog }) => {

    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    // const [categoryCounts, setCategoryCounts] = useState<{ [category: string]: number }>({});


    // Filtrar los blogs según la categoría seleccionada
    const filteredBlogs = selectedCategory === 'All' ? dataBlog : dataBlog.filter(blog => blog.category === selectedCategory);

    // Ordenar los blogs por fecha
    const sortedBlogs = dataBlog.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const recentBlogs = sortedBlogs.slice(0, 7);

    // Function to format date
    const formatDate = (dateString: any) => {
        const dateObject = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            day: "2-digit",
            month: "long",
            year: "numeric",
        };
        return dateObject.toLocaleDateString("en-US", options);
    };


    const getCategoryCounts = () => {
        const counts: { [category: string]: number } = {};
        dataBlog.forEach(blog => {
            counts[blog.category] = (counts[blog.category] || 0) + 1;
        });
        return counts;
    };

    const categoryCounts = getCategoryCounts();

    return (
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="w-full md:w-[65%]">
                {
                    filteredBlogs.length > 0 ? (
                        filteredBlogs.map((blog, index) => {
                            const textDescription = blog.description.find(
                                (desc) => desc.type === "text",
                            );
                            const firstTextValue = textDescription
                                ? textDescription.value
                                : "";
                            return (
                                <div key={index} className="flex flex-col md:flex-row items-center gap-10 bg-[#FCFAF7] rounded-2xl px-5 md:pl-16 md:pr-5 py-8 shadow mb-10">
                                    <a
                                        href={`/blog/${blog.slug}`}
                                        className="w-full md:w-1/2 h-full"
                                        aria-label="blog image link"
                                    >
                                        <LazyImage
                                            src={blog.featureimage}
                                            alt={blog.seoTitle}
                                            className="w-full h-[300px] md:h-[350px] object-cover rounded-xl"

                                        />
                                    </a>
                                    <div className="w-full md:w-1/2">
                                        <div className="bg-white flex flex-col md:flex-row items-center gap-2 border border-primary rounded-xl px-5 py-2 mb-5">
                                            <p className="text-primary text-lg font-medium ">
                                                {formatDate(blog.date)}
                                            </p>
                                            <div className="w-2 h-2 rounded-full bg-gray-400/70 mx-2" />
                                            <span className="text-primary text-lg font-medium capitalize">
                                                {blog.category}
                                            </span>
                                        </div>
                                        <a
                                            href={`/blog/${blog.slug}`}
                                            className="text-2xl text-primary font-bold hover:text-btnHover transition-all duration-300 ease-in-out"
                                            aria-label="blog title link"
                                        >
                                            {blog.seoTitle}
                                        </a>
                                        {/* <div className="flex gap-2 items-center pt-5">
                                            <div className="rounded-full shadow-sm border bg-white px-4 py-2.5">
                                                <i className="fa-solid fa-user-hair" />
                                            </div>
                                            <span className="text-primary flex gap-1 text-xl">
                                                <span>By</span>
                                                <span className="capitalize font-semibold">
                                                    {blog.autor}
                                                </span>
                                            </span>
                                        </div> */}
                                        <p className="text-lg text-primary mt-5">
                                            {firstTextValue.slice(0, 100)}
                                            <a
                                                href={`/blog/${blog.slug}`}
                                                className="text-primary font-semibold hover:text-btnHover transition-all duration-300 ease-in-out"
                                                aria-label="blog read more link"
                                            >
                                                ...Read More
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div className="text-primary text-lg my-2">
                            No blogs created yet.
                        </div>
                    )
                }
            </div>
            <div className="w-full md:w-[35%]">
                <div className="bg-[#FCFAF7] rounded-2xl border shadow px-5 py-4 mb-10">
                    <p
                        className="text-center md:text-start text-xl font-semibold py-5 capitalize"
                    >
                        Category
                    </p>
                    <div
                        className="border-b-2 border-[#EBECE9] mb-5 relative before:absolute before:w-1/3 before:bg-secondary before:h-1 before:left-0 before:top-0"
                    >
                    </div>
                    <ul className="flex flex-col gap-5 py-5">
                        <li
                            className={`text-lg font-semibold  ${selectedCategory === 'All' ? 'bg-btnHover border-none rounded-xl px-5' : 'text-primary'} py-3 border-b hover:border-btnHover transition-all duration-300 ease-in-out`}
                        >
                            <button
                                onClick={() => setSelectedCategory('All')}
                                className="w-full flex justify-between items-center "
                                aria-label="all category link"
                            >
                                <span className="capitalize">All - {`(${dataBlog.length})`}</span>
                                <i className="fa-solid fa-chevrons-right"></i>
                            </button>
                        </li>
                        {
                            dataBlog.length > 0 && (
                                dataBlog.map((blog, index) => (
                                    <li
                                        key={index}
                                        className={`text-lg font-semibold  ${selectedCategory === blog.category ? 'bg-btnHover border-none rounded-xl px-5' : 'text-primary'} py-3 border-b hover:border-btnHover transition-all duration-300 ease-in-out`}
                                    >
                                        <button
                                            onClick={() => setSelectedCategory(blog.category)}
                                            className="w-full flex justify-between items-center "
                                            aria-label={`category ${blog.category}  link`}
                                        >
                                            <span className="capitalize">{blog.category} - {`(${categoryCounts[blog.category]})`} </span>
                                            <i className="fa-solid fa-chevrons-right" />
                                        </button>
                                    </li>
                                ))
                            )
                        }
                    </ul>
                </div>

                <div className="rounded-2xl border shadow px-5 py-4">
                    <p
                        className="text-center md:text-start text-xl font-semibold py-5 capitalize"
                    >
                        Recent News
                    </p>
                    <div
                        className="border-b-2 border-[#EBECE9] mb-5 relative before:absolute before:w-1/3 before:bg-secondary before:h-1 before:left-0 before:top-0"
                    >
                    </div>
                    <ul className="p-0 md:p-5">
                        {recentBlogs.length > 0 ? (
                            recentBlogs.map((blog, index) => (
                                <li key={index} className={`flex justify-center items-center gap-5 py-5 mb-5 ${index !== recentBlogs.length - 1 ? 'border-b' : ''}`}>
                                    <a
                                        href={`/${blog.slug}`}
                                        className="w-auto h-full"
                                        aria-label={`read more about ${blog.seoTitle}`}
                                    >
                                        <LazyImage
                                            src={blog.featureimage}
                                            alt={blog.seoTitle}
                                            className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full shadow-sm object-cover"
                                        />
                                    </a>
                                    <div className="w-2/3">
                                        <p className="text-primary text-lg my-2">
                                            {formatDate(blog.date)}
                                        </p>
                                        <a
                                            href={`/blog/${blog.slug}`}
                                            className="text-xl text-primary font-bold hover:text-btnHover transition-all duration-300 ease-in-out"
                                            aria-label={`read more about ${blog.seoTitle}`}
                                        >
                                            {blog.seoTitle}
                                        </a>
                                        <div>
                                            <a
                                                href={`/blog/${blog.slug}`}
                                                className="text-primary font-semibold hover:text-btnHover transition-all duration-300 ease-in-out capitalize"
                                                aria-label={`read more about ${blog.seoTitle}`}
                                            >
                                                View details
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li className="text-primary text-lg my-2">
                                No recent blogs available.
                            </li>
                        )}
                    </ul>


                </div>
            </div>
        </div>
    );
};

export default ComponentBlogs;