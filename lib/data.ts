export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  fullDetails: string;
  iconName: string;
  features: string[];
  imageUrl: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  subtext: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating: number;
}

export interface SuccessStoryItem {
  id: string;
  number: string;
  category: string;
  date: string;
  title: string;
  description: string;
  metrics: string;
  imageUrl: string;
}

export const firmDetails = {
  name: "Narhari V.Dixit & Co.",
  shortName: "Narhari V.Dixit & Co.",
  type: "Chartered Accountants",
  registrationNo: "ICAIR-FRN 108954W",
  tagline: "Clarity in Numbers. Confidence in Business.",
  eyebrow: "CHARTERED ACCOUNTANTS • TAX • ADVISORY",
  phone: "+91 84462 18093",
  secondaryPhone: "+91 20 2991 3947",
  email: " canvdixit@gmail.com",
  secondaryEmail: "naraharivdixitandco@gmail.com ",
  address: "Suite 602, Apex Corporate Towers, Senapati Bapat Road, Pune, Maharashtra 411016",
  mumbaiAddress: "Level 14, Maker Chambers VI, Nariman Point, Mumbai, Maharashtra 400021",
  officeHours: "Monday – Saturday: 9:30 AM – 7:00 PM",
  socials: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Our Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const statsData: StatItem[] = [
  {
    id: "exp",
    value: 14,
    suffix: "+",
    label: "Years of Experience",
    subtext: "Delivering institutional-grade financial guidance since 2011",
  },
  {
    id: "served",
    value: 500,
    suffix: "+",
    label: "Businesses Served",
    subtext: "Across technology, manufacturing & retail",
  },
  {
    id: "tax",
    value: 2000,
    suffix: "+",
    label: "Tax Returns Managed",
    subtext: "With 100% statutory compliance accuracy",
  },
  {
    id: "corporate",
    value: 150,
    suffix: "+",
    label: "Corporate Clients",
    subtext: "Ongoing retainer audit & advisory contracts",
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: "income-tax",
    number: "01",
    title: "GST & Indirect Tax",
    description: "Strategic tax structuring, corporate filings, advance tax computations, and representation during tax assessments.",
    fullDetails: "Navigate complex tax regulations with confidence. We design tailored tax structures that legally optimize liability while maintaining total regulatory compliance for individuals and corporations.",
    iconName: "FileText",
    features: [
      "Corporate & Personal Income Tax Returns",
      "Advance Tax Planning & Computation",
      "Assessment Representation & Appeal Support",
      "Transfer Pricing & International Taxation"
    ],
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gst-taxation",
    number: "02",
    title: "GST & Indirect Taxation",
    description: "Complete GST registration, monthly GSTR filings, input tax credit reconciliation, GST audits, and advisory.",
    fullDetails: "End-to-end GST management ensuring seamless reconciliation between books and portal data, maximizing eligible ITC while safeguarding your business against statutory penalties.",
    iconName: "Receipt",
    features: [
      "Monthly GSTR-1, 3B & Annual GSTR-9 Returns",
      "Input Tax Credit (ITC) 2B Reconciliation",
      "GST Departmental Audits & Notice Resolutions",
      "Cross-Border E-Commerce GST Guidance"
    ],
    imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "audit-assurance",
    number: "03",
    title: "Audit & Assurance",
    description: "Statutory audits, tax audits, internal control reviews, and risk assessments to ensure pristine financial integrity.",
    fullDetails: "Independent and rigorous audit methodologies that enhance stakeholder trust, strengthen internal controls, and present an undeniable true-and-fair view of your financial standing.",
    iconName: "ShieldCheck",
    features: [
      "Statutory Financial Statement Audits",
      "Tax Audits under Section 44AB",
      "Internal Audits & Risk Assessment",
      "Stock & Physical Asset Verification"
    ],
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "accounting-bookkeeping",
    number: "04",
    title: "Accounting & Bookkeeping",
    description: "Robust ledger management, automated financial reporting, MIS generation, and cloud accounting migration.",
    fullDetails: "Real-time accounting infrastructure that gives company directors immediate clarity on cash flows, operational expenses, profit margins, and balance sheet health.",
    iconName: "Calculator",
    features: [
      "Cloud-based Accounting (Tally, Zoho, Quickbooks)",
      "Monthly Financial Statement Preparation",
      "Accounts Receivable & Payable Ledger Management",
      "Customized Director Level MIS Dashboards"
    ],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "corporate-compliance",
    number: "05",
    title: "Corporate Compliance",
    description: "Company Secretarial support, MCA annual filings, director disclosures, board resolutions, and ROC governance.",
    fullDetails: "Protect your corporate entity from regulatory defaults. We oversee all Registrar of Companies (ROC) obligations, secretarial records, and annual statutory documentation.",
    iconName: "Building2",
    features: [
      "ROC Annual Returns (AOC-4 & MGT-7)",
      "Director KYC & DIN Management",
      "Share Allotment & Board Resolution Documentation",
      "LLP & Company Statutory Register Maintenance"
    ],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "business-advisory",
    number: "06",
    title: "Business Advisory",
    description: "Strategic financial consulting, fundraising readiness, valuation models, financial restructuring, and M&A due diligence.",
    fullDetails: "Actionable strategic intelligence designed for growth-phase enterprises, helping founders raise capital, optimize working capital, evaluate mergers, and scale operations smoothly.",
    iconName: "TrendingUp",
    features: [
      "Business Valuation & Financial Modeling",
      "Investor Due Diligence & Term Sheet Support",
      "Capital Structuring & Debt Syndication",
      "Feasibility Reports & Growth Strategy"
    ],
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "payroll-tds",
    number: "07",
    title: "Payroll & TDS Compliance",
    description: "Automated salary processing, Form 16 issuance, quarterly TDS return filings, PF, ESI, and Professional Tax compliance.",
    fullDetails: "End-to-end employee compensation structuring and statutory withholding management, ensuring precise monthly salary disbursals and flawless quarterly TDS returns.",
    iconName: "Users",
    features: [
      "Monthly Salary Computation & Disbursal Schedules",
      "TDS Filing (Form 24Q, 26Q, 27Q) & Form 16 Generation",
      "Provident Fund (PF) & ESI Monthly Compliance",
      "Employee Tax Deduction Optimization"
    ],
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "financial-planning",
    number: "08",
    title: "Financial Planning",
    description: "Corporate liquidity management, capital expenditure forecasting, asset allocation, and wealth preservation strategy.",
    fullDetails: "Institutional financial planning that protects capital, optimizes treasury yields, and prepares corporate budgets for market volatility and long-term expansion.",
    iconName: "PieChart",
    features: [
      "Cash Flow Forecasting & Working Capital Management",
      "Capital Expenditure (CapEx) Planning",
      "Corporate Treasury & Liquid Asset Allocation",
      "Promoter Wealth Protection & Trust Structuring"
    ],
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "business-registration",
    number: "09",
    title: "Business Registration",
    description: "Private Limited, LLP, Partnership, OPC, MSME, Startup India, and Section 8 non-profit company incorporations.",
    fullDetails: "Launch your corporate entity with bulletproof legal foundation. Fast-track company registration, PAN/TAN allocation, bank account opening, and essential startup licenses.",
    iconName: "Briefcase",
    features: [
      "Pvt Ltd Company & LLP Incorporation",
      "Startup India Recognition & Tax Exemption Exemption",
      "MSME (Udyam) & Import-Export Code (IEC)",
      "Trademark & Intellectual Property Filing Support"
    ],
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "virtual-cfo",
    number: "10",
    title: "Virtual CFO Services",
    description: "Executive-level financial leadership without the cost of a full-time CFO. High-level financial governance for growing businesses.",
    fullDetails: "Gain a dedicated senior Chartered Accountant as your strategic CFO. Drive financial discipline, investor communications, board presentations, and scalable financial systems.",
    iconName: "UserCheck",
    features: [
      "Strategic Financial Leadership & Governance",
      "Monthly Board Decks & Investor Reporting",
      "Budgeting vs Actual Variance Analysis",
      "Banking & Financial Partner Relations"
    ],
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
  },
];

export interface ServiceSubGroup {
  title: string;
  items: string[];
}

export interface DetailedServiceCard {
  id: string;
  title: string;
  iconName: string;
  badge: string;
  accent: "gold" | "blue";
  groups: ServiceSubGroup[];
}

export const detailedServices: DetailedServiceCard[] = [
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    iconName: "ClipboardCheck",
    badge: "Audit & Assurance Practice",
    accent: "gold",
    groups: [
      {
        title: "AUDIT SERVICES",
        items: [
          "Statutory Audit",
          "Tax Audit",
          "GST Audit & GST Compliance Review",
          "Internal Audit",
          "Stock Audit",
          "Accounting & Financial Statement Review",
          "Internal Control Review",
        ],
      },
    ],
  },

  {
    id: "taxation-regulatory-compliance",
    title: "Taxation & Regulatory Compliance",
    iconName: "FileText",
    badge: "Taxation & Regulatory Compliance Practice",
    accent: "blue",
    groups: [
      {
        title: "INCOME TAX",
        items: [
          "Income Tax Return Filing",
          "Income Tax Assessments & Notices",
          "Income Tax Appeals & Representation",
        ],
      },
      {
        title: "GST & OTHER COMPLIANCE",
        items: [
          "GST Return Filing",
          "GST Notices, Audits & Assessments",
          "GST Refunds & Refund Assistance",
          "TDS Compliance",
          "Professional Tax Compliance",
          "Regulatory & Statutory Compliance Support",
        ],
      },
    ],
  },

  {
    id: "gst-advisory",
    title: "GST Advisory",
    iconName: "Receipt",
    badge: "GST Advisory Practice",
    accent: "gold",
    groups: [
      {
        title: "GST ADVISORY & REVIEW",
        items: [
          "GST Compliance Review",
          "GST Audit Support",
          "Input Tax Credit Review",
          "GST Classification & Taxability Advisory",
          "GST Notices & Litigation Support",
          "GST Refund Advisory",
          "GST Process & Documentation Review",
        ],
      },
    ],
  },

  {
    id: "virtual-cfo-mis",
    title: "Virtual CFO & MIS Services",
    iconName: "BarChart3",
    badge: "Virtual CFO & MIS Practice",
    accent: "blue",
    groups: [
      {
        title: "CFO & MANAGEMENT SERVICES",
        items: [
          "Virtual CFO Services",
          "Monthly / Quarterly MIS",
          "Management Reporting",
          "Financial Performance Analysis",
          "Cash Flow Monitoring",
          "Working Capital Management",
          "Budgeting & Forecasting",
          "Variance Analysis",
          "Financial Ratios & Business Performance Review",
          "Management Decision Support",
        ],
      },
    ],
  },

  {
    id: "business-financial-advisory",
    title: "Business & Financial Advisory",
    iconName: "TrendingUp",
    badge: "Business & Financial Advisory Practice",
    accent: "gold",
    groups: [
      {
        title: "BUSINESS ADVISORY",
        items: [
          "Business Performance Advisory",
          "Financial Planning & Analysis",
          "Business Structuring Advisory",
          "Working Capital & Funding Advisory",
          "Cost & Profitability Analysis",
          "Business Process Review",
          "Internal Control & Risk Review",
          "Business Growth & Financial Strategy",
        ],
      },
    ],
  },

  {
    id: "project-reports-feasibility",
    title: "Project Reports & Business Feasibility",
    iconName: "FileBarChart",
    badge: "Project Reports & Feasibility Practice",
    accent: "blue",
    groups: [
      {
        title: "PROJECT & FINANCIAL REPORTING",
        items: [
          "Bank Loan Project Reports",
          "CMA / Financial Projections",
          "Project Feasibility Reports",
          "Business Plan & Financial Projections",
          "Funding & Finance Documentation Support",
          "Financial Viability Analysis",
          "Ratio & Performance Analysis",
        ],
      },
    ],
  },

  {
    id: "accounting-compliance-support",
    title: "Accounting & Compliance Support",
    iconName: "Calculator",
    badge: "Accounting & Compliance Practice",
    accent: "gold",
    groups: [
      {
        title: "ACCOUNTING & COMPLIANCE",
        items: [
          "Accounting & Book Finalisation",
          "Financial Statement Preparation",
          "TDS & Payroll Compliance",
          "Payroll-related Statutory Compliance",
          "Company / LLP Annual Compliance Support",
          "Process & Accounting System Review",
        ],
      },
    ],
  },

  {
    id: "business-setup-professional-services",
    title: "Business Setup & Other Professional Services",
    iconName: "Building2",
    badge: "Business Setup & Professional Services",
    accent: "blue",
    groups: [
      {
        title: "BUSINESS SETUP & REGISTRATION",
        items: [
          "PAN / TAN Services",
          "Shop & Establishment Registration",
          "Business Registration & Structuring Support",
          "Professional Registrations",
          "Other Statutory & Compliance Assistance",
        ],
      },
    ],
  },
];

export const whyChooseUsPillars = [
  {
    number: "01",
    title: "Uncompromising Accuracy & Compliance",
    description: "We deploy multi-tier audit verification checklists, ensuring zero penalty risks and flawless adherence to regulatory laws.",
    iconName: "CheckCircle2",
  },
  {
    number: "02",
    title: "Strategic Financial Guidance",
    description: "Beyond routine filing, we act as proactive advisors who analyze data patterns to unlock cash flow savings and tax efficiencies.",
    iconName: "LineChart",
  },
  {
    number: "03",
    title: "Punctual & Predictable Reporting",
    description: "Never miss a deadline. Our automated project tracking system ensures quarterly and monthly filings are delivered ahead of statutory due dates.",
    iconName: "Clock",
  },
  {
    number: "04",
    title: "Business-Focused Advisory",
    description: "We speak the language of business founders. Our recommendations balance regulatory requirements with practical operational execution.",
    iconName: "Award",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Deep Business Diagnostics",
    description: "We review your company structure, existing accounting systems, revenue model, and immediate tax exposure to identify compliance bottlenecks.",
    iconName: "Search",
  },
  {
    number: "02",
    title: "Analyze",
    subtitle: "Financial Audit & Modeling",
    description: "Our team analyzes ledger entries, past filings, and cash flow cycles to craft a customized roadmap for tax optimization and internal controls.",
    iconName: "BarChart3",
  },
  {
    number: "03",
    title: "Plan",
    subtitle: "Strategic Framework & Systems",
    description: "We establish clear schedules, assign dedicated senior CA managers, and setup automated compliance calendars aligned with your operational rhythm.",
    iconName: "Sliders",
  },
  {
    number: "04",
    title: "Execute",
    subtitle: "Seamless Ongoing Governance",
    description: "Rigorous execution of tax returns, statutory audits, MIS reporting, and continuous CFO advisory to power your growth uninterrupted.",
    iconName: "Zap",
  },
];

export const industriesData: IndustryItem[] = [
  {
    id: "startups",
    title: "Startups & Tech",
    tag: "High Growth",
    description: "Cap-table management, ESOP tax advisory, R&D tax credits, and investor financial due diligence.",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    tag: "Supply Chain",
    description: "Cost accounting, inventory valuation under Ind AS, GST multi-state reconciliation, and CapEx tax planning.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "retail",
    title: "Retail & FMCG",
    tag: "High Volume",
    description: "High-volume transaction reconciliation, multi-store GST accounting, and franchise tax structuring.",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "real-estate",
    title: "Real Estate & Infrastructure",
    tag: "Capital Intensive",
    description: "RERA financial compliance, joint development agreement (JDA) tax, and project-wise revenue recognition.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "healthcare",
    title: "Healthcare & Pharma",
    tag: "Strict Compliance",
    description: "Hospital inventory management, doctor TDS reconciliation, equipment lease tax compliance, and clinical audits.",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "it-software",
    title: "IT Services & SaaS",
    tag: "Global Trade",
    description: "Export of services under GST (LUT), transfer pricing for foreign subsidiaries, and double tax avoidance (DTAA).",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "professional-services",
    title: "Professional Consultancies",
    tag: "Presumptive Tax",
    description: "Presumptive taxation under 44ADA, partner capital accounts, dividend distribution strategy, and billing compliance.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "e-commerce",
    title: "E-Commerce Enterprises",
    tag: "Digital Commerce",
    description: "TCS & TDS under e-commerce provisions, payment gateway reconciliations, and multi-state warehouse GST.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0a670fc80782?auto=format&fit=crop&w=800&q=80",
  },
];

// export const insightsData: InsightArticle[] = [
//   {
//     id: "tax-planning-2026",
//     title: "Navigating Corporate Income Tax Changes for the New Financial Year",
//     category: "Income Tax",
//     date: "Sep 18, 2026",
//     readTime: "5 min read",
//     description: "Key statutory amendments, modified tax slabs, and actionable strategies for corporate tax optimization prior to year-end.",
//     imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "gst-itc-reconciliation",
//     title: "Eliminating GST Notices: Mandatory ITC Reconciliation best practices",
//     category: "GST & Tax",
//     date: "Aug 30, 2026",
//     readTime: "4 min read",
//     description: "How automated GSTR-2B matching protects your cash flow against blocked credits and automated departmental mismatch notices.",
//     imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "startup-valuation-rules",
//     title: "Understanding Angel Tax Regulations & DCF Valuation Principles",
//     category: "Business Advisory",
//     date: "Aug 12, 2026",
//     readTime: "7 min read",
//     description: "A guide for founders raising Series A funding on compliant Discounted Cash Flow (DCF) valuation reports.",
//     imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "virtual-cfo-scaling",
//     title: "When Should Your Business Transition to a Virtual CFO Framework?",
//     category: "Financial Leadership",
//     date: "Jul 25, 2026",
//     readTime: "6 min read",
//     description: "Discover how fractional CFO leadership provides institutional governance without the overhead of executive hiring.",
//     imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
//   },
// ];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    quote:
      "Narhari V. Dixit & Co. has been a dependable partner for our accounting, taxation, and compliance requirements. Their team is professional, responsive, and ensures that our financial and statutory matters are handled accurately and on time.",
    clientName: "Rahul Deshmukh",
    role: "Managing Director",
    company: "Deshmukh Industries",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "The team at Narhari V. Dixit & Co. has provided excellent guidance on GST, income tax, and financial matters. Their practical approach and timely support have made our compliance processes much more structured and manageable.",
    clientName: "Neha Kulkarni",
    role: "Director",
    company: "Kulkarni Enterprises",
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "We appreciate the thoroughness and professionalism of Narhari V. Dixit & Co. in handling our audit and accounting requirements. Their attention to detail and clear communication gives us confidence in our financial reporting and compliance.",
    clientName: "Amit Patil",
    role: "Chief Financial Officer",
    company: "Patil Engineering Works",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "Our association with Narhari V. Dixit & Co. has been extremely positive. From statutory compliance and tax matters to ongoing financial advice, their team provides reliable guidance with a strong focus on accuracy, transparency, and timely execution.",
    clientName: "Priya Shah",
    role: "Business Owner",
    company: "Shah Trading & Services",
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    rating: 5,
  },
];


export const successStoriesData: SuccessStoryItem[] = [
  {
    id: "story-1",
    number: "01",
    category: "Tax Planning & Optimization",
    date: "Q2 2026",
    title: "Corporate Tax Restructuring for Multi-Entity Engineering Enterprise",
    description: "Re-engineered inter-company transfer pricing and capital expenditure depreciation schedules for a group company operating across 4 states.",
    metrics: "Saved ₹68 Lakhs annually in legal tax exposure",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "story-2",
    number: "02",
    category: "Compliance Transformation",
    date: "Q1 2026",
    title: "GST Input Credit Recovery & Department Audit Clearance",
    description: "Successfully reconciled 3 years of mismatched GSTR-2B entries, representing the client before the GST authority to unlock blocked input credits.",
    metrics: "Recovered ₹1.4 Crores in blocked ITC",
    imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "story-3",
    number: "03",
    category: "Financial Reporting Improvement",
    date: "Q4 2025",
    title: "Real-Time Cloud MIS Infrastructure for SaaS Enterprise",
    description: "Implemented automated Tally-to-Cloud financial pipeline with customized director dashboards providing daily cash burn and unit economics metrics.",
    metrics: "Reduced monthly closing time from 18 days to 2 days",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "story-4",
    number: "04",
    category: "Accounting Process Transformation",
    date: "Q3 2025",
    title: "Cross-Border M&A Financial Due Diligence & Valuation",
    description: "Conducted comprehensive buy-side audit and valuation analysis for a strategic acquisition in the healthcare software sector.",
    metrics: "Identified ₹2.1 Cr unrecorded liability in target books",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
];

export interface TeamMember {
  id: string;
  name: string;
  qualification: string;
  role: string;
  experience: string;
  bio: string;
  expertise: string[];
  imageUrl: string;
  linkedin: string;
  email: string;
}

export const teamData: TeamMember[] = [
  {
    id: "ca-1",
    name: "Narahari V. Dixit",
    qualification: "Chartered Accountant",
    role: "Proprietor",
    experience: "14+ Years Experience",
    bio: "Approximately 14 years of experience in chartered accountancy and financial services. Based in Akurdi, Pimpri-Chinchwad, serving clients in-person, online and via doorstep services across Nigdi and surrounding areas.",
    expertise: ["GST Compliance & Advisory" , "Income Tax Planning" , "Tax Audit & ITR Filing" , "Statutory Audit" , "Internal Audit" , "TDS Returns" , "Project Reports" , "Bank Finance Reports" , "RERA Certifications" , "Management Consultancy"],
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com",
    email: "rajesh.kulkarni@apexca-advisory.com",
  },
];


