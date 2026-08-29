export interface ManifestoPoint {
  id: number;
  slug: string;
  numberStr: string;
  title: string;
  summary: string;
  detailedExplanation: string[];
  keyDemands: string[];
  policyImpact: string;
  references: { title: string; publisher: string; year: string }[];
  category: "Sanitation" | "Governance" | "Public Health" | "Consumer Rights" | "Urban Environment";
}

export const manifestoData: ManifestoPoint[] = [
  {
    id: 1,
    slug: "civic-sanitation-and-drainage-rights",
    numberStr: "01",
    title: "Universal Civic Sanitation & Underground Drainage Accountability",
    summary: "Guaranteed quarterly cleaning and public inspection of all subterranean sewage lines, drain channels, and public waste dump sites.",
    category: "Sanitation",
    detailedExplanation: [
      "Urban sanitation is a fundamental right of every tax-paying citizen. Stagnant waste, broken sewer networks, and neglected drainage channels invite vector proliferation and degrade human living conditions.",
      "Our manifesto demands strict audit timelines for local municipal corporations. All cleaning contracts must enforce verified digital proof of completion prior to fund disbursement.",
      "Furthermore, workers engaged in civic cleaning must be provided mandatory modern mechanized equipment, personal protective gear (PPE), and comprehensive healthcare cover."
    ],
    keyDemands: [
      "Bi-weekly automated desilting of major stormwater drains prior to monsoon seasons.",
      "100% mechanization of sewer line clearance to eliminate manual exposure hazards.",
      "Live geographic portal tracking real-time status of municipal sanitation complaints."
    ],
    policyImpact: "Reduces waterlogging incidence by an estimated 65% and cuts vector breeding grounds across municipal sectors.",
    references: [
      {
        title: "National Urban Sanitation Policy Framework",
        publisher: "Ministry of Housing & Urban Affairs Reference Archive",
        year: "2020"
      },
      {
        title: "Model Municipal Solid Waste Management Guidelines",
        publisher: "Central Pollution Control Board",
        year: "2024"
      }
    ]
  },
  {
    id: 2,
    slug: "transparency-in-local-governance-and-tenders",
    numberStr: "02",
    title: "Total Open Data Transparency in Public Works Tenders",
    summary: "Mandatory public access to tender work orders, contractor performance history, project cost estimates, and inspection reports.",
    category: "Governance",
    detailedExplanation: [
      "Public funds belong to the citizens. Opaque tendering processes lead to low-quality road paving, incomplete drainage works, and repeated expenditure on identical repairs.",
      "We advocate for an unrestricted public disclosure rule: every civic infrastructure project exceeding ₹50,000 must publish its contract details, bill of quantities, vendor identity, and warranty duration online.",
      "Citizen audit committees comprising local resident representatives must have legal standing to inspect raw materials and register formal objections."
    ],
    keyDemands: [
      "Open API access to all municipal project work orders and payment vouchers.",
      "Mandatory 3-year warranty clauses on all newly paved municipal roads.",
      "Empowerment of RWA committees to sign off on local completion certificates."
    ],
    policyImpact: "Prevents duplicate expenditure and increases contractor accountability in local urban wards.",
    references: [
      {
        title: "Right to Information Act Section 4 Proactive Disclosure Protocols",
        publisher: "Central Information Commission",
        year: "2023"
      },
      {
        title: "Public Financial Management Transparency Review",
        publisher: "Governance Research Institute",
        year: "2025"
      }
    ]
  },
  {
    id: 3,
    slug: "public-health-and-pest-control-standards",
    numberStr: "03",
    title: "Scientific Public Health Pest Control & Anti-Larval Mandate",
    summary: "Standardized biological and chemical vector control regimens enforced across food markets, residential zones, and public transport hubs.",
    category: "Public Health",
    detailedExplanation: [
      "Pest infestation is not merely an inconvenience—it is a major vector for gastrointestinal and mosquito-borne illnesses in high-density urban areas.",
      "Municipal health departments must implement scheduled WHO-compliant anti-larval treatments and systematic pest suppression using eco-friendly biological control agents.",
      "Commercial food establishments and grocery markets must receive free periodic vector safety audits to maintain hygiene standards."
    ],
    keyDemands: [
      "Seasonal anti-vector biological spraying in stagnant water bodies.",
      "Free pest control assistance for economically vulnerable residential colonies.",
      "Regular hygiene certification of public food vending clusters."
    ],
    policyImpact: "Minimizes seasonal dengue, malaria, and foodborne illness outbreaks in residential sectors.",
    references: [
      {
        title: "World Health Organization Vector Management Guidelines",
        publisher: "WHO Public Health Series",
        year: "2024"
      },
      {
        title: "National Centre for Disease Control (NCDC) Reports",
        publisher: "Ministry of Health & Family Welfare",
        year: "2025"
      }
    ]
  },
  {
    id: 4,
    slug: "consumer-protection-against-adulteration",
    numberStr: "04",
    title: "Rigorous Food & Water Adulteration Testing Infrastructure",
    summary: "Free neighborhood rapid testing kits and localized public laboratories to verify food safety and drinking water purity.",
    category: "Consumer Rights",
    detailedExplanation: [
      "Adulterated drinking water and contaminated essential food items present severe chronic health risks to citizens across all income brackets.",
      "We mandate the creation of ward-level water sample testing stations where residents can submit piped drinking water for instant chemical and microbiological testing at zero charge.",
      "Swift penal action and license suspension for commercial suppliers found systematically adulterating basic sustenance."
    ],
    keyDemands: [
      "Ward-level free drinking water testing booths operating 6 days a week.",
      "Randomized weekly sampling of municipal water supply tanks.",
      "Mobile food testing units conducting spot inspections at grain markets."
    ],
    policyImpact: "Ensures clean drinking water delivery and reduces gastrointestinal hospital admissions.",
    references: [
      {
        title: "Food Safety and Standards Act Public Information Charter",
        publisher: "FSSAI Documentation Desk",
        year: "2024"
      },
      {
        title: "Bureau of Indian Standards Drinking Water Specifications (IS 10500)",
        publisher: "BIS Standards Manual",
        year: "2023"
      }
    ]
  },
  {
    id: 5,
    slug: "urban-infrastructure-and-green-spaces",
    numberStr: "05",
    title: "Protection of Urban Green Belts & Pothole-Free Roads",
    summary: "Legal protection for neighborhood parks, urban trees, and zero-tolerance policy for hazardous unfilled road potholes.",
    category: "Urban Environment",
    detailedExplanation: [
      "Rapid unorganized urban expansion strips cities of essential green lungs and leaves roadways riddled with dangerous potholes.",
      "Our charter establishes an emergency 48-hour repair mandate: reported hazardous road potholes must be filled by municipal quick-response units within two calendar days.",
      "Urban green belts, parks, and tree canopies must be protected against illegal encroachment and commercial dumping."
    ],
    keyDemands: [
      "48-hour SLA for filling reported road surface hazards.",
      "Protection and rejuvenation of community parks with solar lighting.",
      "Zero tolerance for illegal debris dumping on green belts."
    ],
    policyImpact: "Improves road safety, cuts commuter accidents, and preserves urban microclimates.",
    references: [
      {
        title: "National Urban Transport & Environmental Policy Guidelines",
        publisher: "Urban Environment Commission",
        year: "2024"
      },
      {
        title: "State Highway and Municipal Road Maintenance Manual",
        publisher: "Public Works Department",
        year: "2025"
      }
    ]
  }
];
