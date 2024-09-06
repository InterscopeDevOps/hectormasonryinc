import type { Blogs, Description } from "@/interfaces/dbBlog";
import React from "react";

interface BlogPageProps {
  blog: Blogs;
  blogs: Blogs[];
  data: any;
}

const BlogDetail: React.FC<BlogPageProps> = ({ blog, blogs, data }) => {
  const formatDate = (isoDate: string | Date): string => {
    const monthNames = [
      "ENE",
      "FEB",
      "MAR",
      "ABR",
      "MAY",
      "JUN",
      "JUL",
      "AGO",
      "SEP",
      "OCT",
      "NOV",
      "DIC",
    ];
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${day} ${monthNames[monthIndex]}, ${year}`;
  };

  const recentBlogs = blogs.filter((b) => b._id !== blog._id).slice(0, 3);

  const renderDescriptionContent = (desc: Description) => {
    switch (desc.type) {
      case "titleh1":
        return <h1 className="text-4xl font-bold my-4">{desc.value}</h1>;
      case "titleh2":
        return <h2 className="text-3xl font-semibold my-3">{desc.value}</h2>;
      case "titleh3":
        return <h3 className="text-2xl font-medium my-2">{desc.value}</h3>;
      case "text":
        return <p className="text-base my-1">{desc.value}</p>;
      case "img":
        return (
          <img
            src={desc.value as string}
            alt="Blog Image"
            className="w-full h-auto object-contain rounded-xl my-2"
            loading="lazy"
          />
        );
      case "list":
        return (
          <ul className="list-disc ml-5 my-2">
            {(desc.value as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      case "video":
        return <p className="my-2">Video: {desc.value}</p>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto py-10 mx:px-2 px-6">
      <main className="flex-grow md:pr-4 gap-6 flex flex-col md:w-[80%]">
        {blog.description.map((desc, index) => (
          <React.Fragment key={index}>
            {renderDescriptionContent(desc)}
          </React.Fragment>
        ))}
      </main>
      <aside className="w-full md:pl-4 mt-10 md:mt-0 md:w-[20%]">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: data.colors.primaryColor }}
        >
          Recent Blogs
        </h2>
        {recentBlogs.map((blog, index) => (
          <a
          href={`/blog/${blog.slug}`}
          >
            <div key={index} className="mb-4 text-center w-full">
              <img
                src={blog.featureimage}
                alt={blog.seoTitle}
                className="w-full h-20 object-cover rounded-xl mb-2"
              />
              <h3 className="text-[12px] font-semibold mb-1">
                {blog.seoTitle}
              </h3>
              <span className="text-[12px]">{formatDate(blog.date)}</span>
            </div>
          </a>
        ))}
      </aside>
    </div>
  );
};

export default BlogDetail;