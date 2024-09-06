import fetch from 'node-fetch';
import type { Service, LandingLocation, LandingsGallery, ApiData } from '../interfaces/dbData';
import { formatDomain } from './formatDomain';
import type { Blogs } from '@/interfaces/dbBlog';

interface SitemapEntry {
  domain: string;
  modifiedDate: string;
  priority: number;
}

export async function fetchApiData(): Promise<SitemapEntry[]> {
  const apiUrl = `${import.meta.env.API_URL}/${import.meta.env.API_KEY}`;
  const apiUrlBlogs = `${import.meta.env.API_URL_BLOG}/${import.meta.env.API_KEY}`;

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Error al obtener datos de la API');
  }
  const apiResponse = (await response.json()) as ApiData;
  const formattedDomain = formatDomain(apiResponse.domain);
  const currentDateISO = new Date().toISOString();

  const paths = ['/', '/about', '/services', '/gallery', '/contact'];
  const sitemapEntries: SitemapEntry[] = paths.map((path, index) => ({
    domain: `${formattedDomain}${path.substring(1)}`,
    modifiedDate: currentDateISO,
    priority: index === 0 ? 1.0 : 0.8,
  }));

  // Funciones auxiliares para formatear títulos a URLs amigables
  const formatTitleToPathServices = (title: string) =>
    `services/${title.replace(/\s+/g, '-').toLowerCase()}`;
  const formatTitleToPathGallery = (title: string) =>
    `portfolio/${title.replace(/\s+/g, '-').toLowerCase()}`;

  // Añadir rutas de servicios
  if (apiResponse.widgets?.landingServices) {
    apiResponse.services.forEach((service: Service) => {
      const servicePath = formatTitleToPathServices(service.title);
      sitemapEntries.push({
        domain: `${formattedDomain}${servicePath}`,
        modifiedDate: currentDateISO,
        priority: 0.8,
      });
    });
  }

  // Añadir rutas de áreas que sirves
  if (apiResponse.widgets?.areasweserve) {
    apiResponse.landingLocations?.forEach((location: LandingLocation) => {
      const locationPath = `areas/${location.slug}`;
      sitemapEntries.push({
        domain: `${formattedDomain}${locationPath}`,
        modifiedDate: currentDateISO,
        priority: 0.8,
      });
    });
  }

  // Añadir rutas de la galería de aterrizaje
  if (apiResponse.widgets?.landingGallery) {
    apiResponse.landingsGallery.forEach((gallery: LandingsGallery) => {
      const galleryPath = formatTitleToPathGallery(gallery.nameLanding);
      sitemapEntries.push({
        domain: `${formattedDomain}${galleryPath}`,
        modifiedDate: currentDateISO,
        priority: 0.8,
      });
    });
  }

  // Manejo de blogs
  const responseBlogs = await fetch(apiUrlBlogs);
  if (responseBlogs.ok) {
    const apiResponseBlogs = (await responseBlogs.json()) as Blogs[];
    if (apiResponseBlogs.length > 0) {
      apiResponseBlogs.forEach((blog: any) => {
        const blogPath = `blog/${blog.slug}`;
        sitemapEntries.push({
          domain: `${formattedDomain}${blogPath}`,
          modifiedDate: currentDateISO,
          priority: 0.8,
        });
      });
    } else {
      console.log("No se encontraron blogs para incluir en el sitemap.");
    }
  } else {
    console.error('Error al obtener datos de blogs de la API');
  }

  return sitemapEntries;
}
