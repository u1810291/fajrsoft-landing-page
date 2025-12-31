import { MetadataRoute } from 'next';
import { caseStudies } from '@/data/caseStudies';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fajrsoft.ae';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];

  // Dynamic case study pages
  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/case-study/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...caseStudyPages];
}
