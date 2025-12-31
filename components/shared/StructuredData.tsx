export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fajrsoft AE',
    url: 'https://fajrsoft.ae',
    logo: 'https://fajrsoft.ae/logo.png',
    description:
      'VIP-level technology solutions for businesses. Over 7 years of excellence in web development, mobile apps, and business automation.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abu Dhabi',
      addressCountry: 'AE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971-58-579-4475',
      contactType: 'Customer Service',
      email: 'info@fajrsoft.ae',
    },
    sameAs: ['https://fajrsoft.ae'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const services = [
    {
      '@type': 'Service',
      name: 'Web Development',
      description: 'Custom, high-performance websites built with cutting-edge technologies',
      provider: {
        '@type': 'Organization',
        name: 'Fajrsoft AE',
      },
    },
    {
      '@type': 'Service',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      provider: {
        '@type': 'Organization',
        name: 'Fajrsoft AE',
      },
    },
    {
      '@type': 'Service',
      name: 'Business Process Automation',
      description: 'Intelligent automation solutions customized for your workflow',
      provider: {
        '@type': 'Organization',
        name: 'Fajrsoft AE',
      },
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: service,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
