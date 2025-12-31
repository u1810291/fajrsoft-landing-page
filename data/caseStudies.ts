export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  timeline: string;
  heroImage: string;
  overview: string;
  challenge: string[];
  solution: string;
  metrics: {
    value: string;
    label: string;
    icon: string;
  }[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  techStack: {
    category: string;
    technologies: string[];
  }[];
  showcase: {
    images: string[];
    description: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  relatedProjects: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    client: 'Retail Company',
    timeline: '4 months',
    heroImage: '/images/case-studies/ecommerce-hero.jpg',
    overview: 'A comprehensive e-commerce solution built for a growing retail business, featuring advanced inventory management, payment gateway integration, and a seamless shopping experience optimized for conversions.',
    challenge: [
      'Complex inventory management across multiple warehouses',
      'Integration with legacy payment and shipping systems',
      'High traffic handling during seasonal sales',
      'Mobile-first experience for on-the-go shoppers'
    ],
    solution: 'We developed a scalable, cloud-based platform using modern web technologies with real-time inventory synchronization, secure payment processing, and a responsive design that works flawlessly across all devices. The solution included automated order processing, customer relationship management, and comprehensive analytics.',
    metrics: [
      { value: '250%', label: 'Increase in Online Sales', icon: '📈' },
      { value: '3x', label: 'Faster Checkout Process', icon: '⚡' },
      { value: '45%', label: 'Reduction in Cart Abandonment', icon: '🛒' },
      { value: '99.9%', label: 'Uptime Reliability', icon: '✓' }
    ],
    features: [
      {
        title: 'Smart Inventory Management',
        description: 'Real-time stock tracking across multiple locations with automated reorder alerts',
        icon: '📦'
      },
      {
        title: 'Multi-Currency Support',
        description: 'Accept payments in 15+ currencies with automatic conversion',
        icon: '💰'
      },
      {
        title: 'Advanced Analytics',
        description: 'Comprehensive dashboard with sales insights and customer behavior tracking',
        icon: '📊'
      },
      {
        title: 'Personalized Experience',
        description: 'AI-powered product recommendations based on browsing history',
        icon: '🎯'
      },
      {
        title: 'Secure Payments',
        description: 'PCI-DSS compliant payment processing with fraud detection',
        icon: '🔒'
      },
      {
        title: 'Mobile Optimized',
        description: 'Progressive web app with offline capabilities and push notifications',
        icon: '📱'
      }
    ],
    techStack: [
      {
        category: 'Frontend',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux']
      },
      {
        category: 'Backend',
        technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis']
      },
      {
        category: 'Infrastructure',
        technologies: ['AWS', 'Docker', 'Kubernetes', 'CloudFront']
      },
      {
        category: 'Tools',
        technologies: ['Stripe', 'SendGrid', 'Google Analytics', 'Sentry']
      }
    ],
    showcase: {
      images: [
        '/images/showcase/ecommerce-1.jpg',
        '/images/showcase/ecommerce-2.jpg',
        '/images/showcase/ecommerce-3.jpg'
      ],
      description: 'Modern, intuitive interface designed for maximum conversions'
    },
    testimonial: {
      quote: 'Fajrsoft AE transformed our online presence completely. The new platform not only looks amazing but has dramatically improved our sales and customer satisfaction. Their VIP-level support throughout the project was exceptional.',
      author: 'Sarah Johnson',
      role: 'CEO, Retail Company'
    },
    relatedProjects: ['2', '3']
  },
  {
    id: '2',
    slug: 'mobile-banking-app',
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    client: 'Financial Services Provider',
    timeline: '6 months',
    heroImage: '/images/case-studies/mobile-banking-hero.jpg',
    overview: 'A secure, feature-rich mobile banking application that brings modern banking services to users fingertips with biometric authentication, real-time transactions, and comprehensive account management.',
    challenge: [
      'Meeting stringent security and compliance requirements',
      'Real-time transaction processing and notifications',
      'Supporting both iOS and Android with native performance',
      'Seamless integration with legacy banking systems'
    ],
    solution: 'We built a cross-platform mobile banking solution with bank-grade security, featuring biometric authentication, end-to-end encryption, and real-time transaction updates. The app provides a full suite of banking services including transfers, bill payments, investment management, and 24/7 customer support.',
    metrics: [
      { value: '500K+', label: 'Active Users', icon: '👥' },
      { value: '4.8★', label: 'App Store Rating', icon: '⭐' },
      { value: '2sec', label: 'Average Transaction Time', icon: '⚡' },
      { value: 'Zero', label: 'Security Breaches', icon: '🔒' }
    ],
    features: [
      {
        title: 'Biometric Login',
        description: 'Face ID and fingerprint authentication for secure, password-less access',
        icon: '🔐'
      },
      {
        title: 'Instant Transfers',
        description: 'Transfer money between accounts and to other users in real-time',
        icon: '💸'
      },
      {
        title: 'Bill Payment',
        description: 'Schedule and automate bill payments with smart reminders',
        icon: '💳'
      },
      {
        title: 'Card Management',
        description: 'Freeze/unfreeze cards, set spending limits, and manage PINs instantly',
        icon: '💎'
      },
      {
        title: 'Investment Dashboard',
        description: 'Track investments, view market data, and manage your portfolio',
        icon: '📈'
      },
      {
        title: '24/7 Support',
        description: 'In-app chat with AI assistant and live customer support',
        icon: '💬'
      }
    ],
    techStack: [
      {
        category: 'Mobile',
        technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'Native Base']
      },
      {
        category: 'Backend',
        technologies: ['Node.js', 'NestJS', 'MongoDB', 'Redis']
      },
      {
        category: 'Security',
        technologies: ['OAuth 2.0', 'JWT', 'AES-256', 'SSL Pinning']
      },
      {
        category: 'Services',
        technologies: ['Firebase', 'Twilio', 'Socket.io', 'AWS']
      }
    ],
    showcase: {
      images: [
        '/images/showcase/mobile-banking-1.jpg',
        '/images/showcase/mobile-banking-2.jpg',
        '/images/showcase/mobile-banking-3.jpg'
      ],
      description: 'Intuitive interface designed for effortless banking on mobile'
    },
    testimonial: {
      quote: 'The mobile banking app developed by Fajrsoft AE has revolutionized how our customers interact with their finances. The security features are top-notch, and user feedback has been overwhelmingly positive.',
      author: 'Michael Chen',
      role: 'CTO, Financial Services Provider'
    },
    relatedProjects: ['1', '3']
  },
  {
    id: '3',
    slug: 'business-dashboard',
    title: 'Business Dashboard',
    category: 'Web Application',
    client: 'Enterprise Corporation',
    timeline: '5 months',
    heroImage: '/images/case-studies/business-dashboard-hero.jpg',
    overview: 'An advanced business intelligence dashboard that consolidates data from multiple sources, providing real-time insights and actionable analytics for data-driven decision making.',
    challenge: [
      'Integrating data from 15+ different source systems',
      'Processing and visualizing large datasets in real-time',
      'Creating customizable reports for different departments',
      'Ensuring data security and role-based access control'
    ],
    solution: 'We developed a comprehensive dashboard platform with powerful data aggregation, real-time visualization, and custom reporting capabilities. The system features automated data pipelines, interactive charts, customizable widgets, and advanced filtering options that enable stakeholders to gain insights quickly.',
    metrics: [
      { value: '70%', label: 'Faster Decision Making', icon: '⚡' },
      { value: '85%', label: 'Reduction in Manual Reporting', icon: '📊' },
      { value: '15+', label: 'Data Sources Integrated', icon: '🔗' },
      { value: '1000+', label: 'Daily Active Users', icon: '👥' }
    ],
    features: [
      {
        title: 'Real-Time Analytics',
        description: 'Live data visualization with automatic updates and trend detection',
        icon: '📈'
      },
      {
        title: 'Custom Dashboards',
        description: 'Drag-and-drop interface to create personalized dashboard layouts',
        icon: '🎨'
      },
      {
        title: 'Advanced Filtering',
        description: 'Multi-dimensional filtering and drill-down capabilities',
        icon: '🔍'
      },
      {
        title: 'Automated Reports',
        description: 'Schedule and distribute custom reports via email or Slack',
        icon: '📧'
      },
      {
        title: 'Data Export',
        description: 'Export data in multiple formats (PDF, Excel, CSV, JSON)',
        icon: '📤'
      },
      {
        title: 'Role-Based Access',
        description: 'Granular permissions and data visibility control',
        icon: '🔐'
      }
    ],
    techStack: [
      {
        category: 'Frontend',
        technologies: ['React', 'TypeScript', 'D3.js', 'Chart.js']
      },
      {
        category: 'Backend',
        technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Apache Kafka']
      },
      {
        category: 'Data Processing',
        technologies: ['Apache Spark', 'Pandas', 'NumPy', 'Celery']
      },
      {
        category: 'Infrastructure',
        technologies: ['AWS', 'Docker', 'Elasticsearch', 'Redis']
      }
    ],
    showcase: {
      images: [
        '/images/showcase/mobile-banking-2.jpg',
        '/images/showcase/ecommerce-1.jpg',
        '/images/showcase/dashboard-3.jpg'
      ],
      description: 'Powerful analytics platform with intuitive visualizations'
    },
    testimonial: {
      quote: 'This dashboard has become an indispensable tool for our entire organization. The insights we get from the real-time data have transformed how we make strategic decisions.',
      author: 'David Martinez',
      role: 'VP of Operations, Enterprise Corporation'
    },
    relatedProjects: ['1', '4']
  },
  {
    id: '4',
    slug: 'workflow-automation',
    title: 'Workflow Automation System',
    category: 'Business Automation',
    client: 'Manufacturing Company',
    timeline: '3 months',
    heroImage: '/images/case-studies/workflow-automation-hero.jpg',
    overview: 'A custom workflow automation solution that streamlines manufacturing operations, reduces manual tasks, and improves efficiency across the entire production cycle.',
    challenge: [
      'Complex approval workflows with multiple stakeholders',
      'Paper-based processes causing delays and errors',
      'Lack of visibility into workflow status and bottlenecks',
      'Integration with existing ERP and CRM systems'
    ],
    solution: 'We designed and implemented an intelligent automation platform that digitizes workflows, automates repetitive tasks, and provides real-time visibility into all processes. The system includes approval routing, document management, email notifications, and seamless integration with existing business systems.',
    metrics: [
      { value: '70%', label: 'Reduction in Manual Work', icon: '⚡' },
      { value: '5hrs', label: 'Time Saved Per Employee Daily', icon: '⏰' },
      { value: '90%', label: 'Faster Approval Process', icon: '✅' },
      { value: '$250K', label: 'Annual Cost Savings', icon: '💰' }
    ],
    features: [
      {
        title: 'Visual Workflow Builder',
        description: 'Drag-and-drop interface to create and modify workflows without coding',
        icon: '🔧'
      },
      {
        title: 'Smart Routing',
        description: 'Intelligent task routing based on rules, roles, and workload',
        icon: '🎯'
      },
      {
        title: 'Document Management',
        description: 'Centralized storage with version control and access tracking',
        icon: '📁'
      },
      {
        title: 'Email & Notifications',
        description: 'Automated alerts and reminders via email, SMS, and in-app',
        icon: '🔔'
      },
      {
        title: 'Audit Trail',
        description: 'Complete history of all actions and approvals for compliance',
        icon: '📋'
      },
      {
        title: 'API Integration',
        description: 'Connect with ERP, CRM, and other enterprise systems',
        icon: '🔗'
      }
    ],
    techStack: [
      {
        category: 'Frontend',
        technologies: ['Vue.js', 'TypeScript', 'Vuetify', 'Pinia']
      },
      {
        category: 'Backend',
        technologies: ['Node.js', 'Express', 'PostgreSQL', 'Bull Queue']
      },
      {
        category: 'Automation',
        technologies: ['n8n', 'Zapier', 'BPMN', 'Camunda']
      },
      {
        category: 'Integration',
        technologies: ['REST API', 'GraphQL', 'Webhooks', 'Message Queue']
      }
    ],
    showcase: {
      images: [
        '/images/showcase/workflow-1.jpg',
        '/images/showcase/workflow-2.jpg',
        '/images/showcase/workflow-3.jpg'
      ],
      description: 'Streamlined workflows with visual process management'
    },
    testimonial: {
      quote: 'The workflow automation system has been a game-changer for our operations. We have saved countless hours and significantly reduced errors. The ROI was evident within the first month.',
      author: 'Lisa Anderson',
      role: 'Operations Director, Manufacturing Company'
    },
    relatedProjects: ['2', '3']
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getRelatedCaseStudies(ids: string[]): CaseStudy[] {
  return caseStudies.filter((study) => ids.includes(study.id));
}
