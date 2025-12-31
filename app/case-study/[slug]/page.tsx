import { notFound } from 'next/navigation';
import { getCaseStudyBySlug, caseStudies } from '@/data/caseStudies';
import { CaseStudyContent } from '@/components/sections/CaseStudyContent';
import type { Metadata } from 'next';

// Generate static params for all case studies
export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

// Generate metadata for each case study
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.title} - ${caseStudy.category} | Fajrsoft AE`,
    description: caseStudy.overview,
    openGraph: {
      title: `${caseStudy.title} - Fajrsoft AE`,
      description: caseStudy.overview,
      images: [caseStudy.heroImage],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} - Fajrsoft AE`,
      description: caseStudy.overview,
      images: [caseStudy.heroImage],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyContent caseStudy={caseStudy} />;
}

// Enable static generation with revalidation
export const revalidate = 86400; // 24 hours
