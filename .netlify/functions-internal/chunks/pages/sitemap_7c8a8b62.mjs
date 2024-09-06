import fetch from 'node-fetch';

function formatDomain(domain) {
  let formattedDomain = domain;
  if (!formattedDomain.startsWith("http://") && !formattedDomain.startsWith("https://")) {
    formattedDomain = `https://${formattedDomain}`;
  }
  if (!formattedDomain.endsWith("/")) {
    formattedDomain = `${formattedDomain}/`;
  }
  return formattedDomain;
}

async function fetchApiData() {
  const apiUrl = `${"https://reaktorx-4b9e4f65e617.herokuapp.com/app"}/${"Ox3V7QC54CEIUk8vmpKU"}`;
  const apiUrlBlogs = `${"https://api-blogs-reaktor-3ff9ba7a526a.herokuapp.com/api/blogs"}/${"Ox3V7QC54CEIUk8vmpKU"}`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Error al obtener datos de la API");
  }
  const apiResponse = await response.json();
  const formattedDomain = formatDomain(apiResponse.domain);
  const currentDateISO = (/* @__PURE__ */ new Date()).toISOString();
  const paths = ["/", "/about", "/services", "/gallery", "/contact"];
  const sitemapEntries = paths.map((path, index) => ({
    domain: `${formattedDomain}${path.substring(1)}`,
    modifiedDate: currentDateISO,
    priority: index === 0 ? 1 : 0.8
  }));
  const formatTitleToPathServices = (title) => `services/${title.replace(/\s+/g, "-").toLowerCase()}`;
  const formatTitleToPathGallery = (title) => `portfolio/${title.replace(/\s+/g, "-").toLowerCase()}`;
  if (apiResponse.widgets?.landingServices) {
    apiResponse.services.forEach((service) => {
      const servicePath = formatTitleToPathServices(service.title);
      sitemapEntries.push({
        domain: `${formattedDomain}${servicePath}`,
        modifiedDate: currentDateISO,
        priority: 0.8
      });
    });
  }
  if (apiResponse.widgets?.areasweserve) {
    apiResponse.landingLocations?.forEach((location) => {
      const locationPath = `areas-we-serve/${location.slug}`;
      sitemapEntries.push({
        domain: `${formattedDomain}${locationPath}`,
        modifiedDate: currentDateISO,
        priority: 0.8
      });
    });
  }
  if (apiResponse.widgets?.landingGallery) {
    apiResponse.landingsGallery.forEach((gallery) => {
      const galleryPath = formatTitleToPathGallery(gallery.nameLanding);
      sitemapEntries.push({
        domain: `${formattedDomain}${galleryPath}`,
        modifiedDate: currentDateISO,
        priority: 0.8
      });
    });
  }
  const responseBlogs = await fetch(apiUrlBlogs);
  if (responseBlogs.ok) {
    const apiResponseBlogs = await responseBlogs.json();
    if (apiResponseBlogs.length > 0) {
      apiResponseBlogs.forEach((blog) => {
        const blogPath = `blog/${blog.slug}`;
        sitemapEntries.push({
          domain: `${formattedDomain}${blogPath}`,
          modifiedDate: currentDateISO,
          priority: 0.8
        });
      });
    } else {
      console.log("No se encontraron blogs para incluir en el sitemap.");
    }
  } else {
    console.error("Error al obtener datos de blogs de la API");
  }
  return sitemapEntries;
}

async function generateSitemapXml() {
  const posts = await fetchApiData();
  const urls = posts?.map(
    (post) => {
      return `
            <url>
            <loc>${post.domain}</loc>
            <lastmod>${post.modifiedDate}</lastmod>
            <priority>${post.priority}</priority>
            </url>
        `;
    }
  ).join("");
  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>
  `.trim();
}

const get = async () => {
  const sitemap = await generateSitemapXml();
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};

export { get };
