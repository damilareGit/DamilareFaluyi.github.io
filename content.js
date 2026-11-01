/* =====================================================================
   SITE CONTENT — this is the only file you need to edit.
   ---------------------------------------------------------------------
   To ADD A PROJECT: copy one { ... } block inside PROJECTS, paste it at
   the top of the list, and change the text. Save, commit, push. Done.

   Fields:
     title     (required) project name
     category  (required) one of: "Credit Risk", "BI & Dashboards",
               "Engineering", "Quant & Research"  (add new ones freely —
               the filter buttons are built automatically)
     year      e.g. "2026"
     summary   (required) one or two sentences shown on the card
     problem / approach / impact   optional longer text shown when the
               card is opened. Leave out any you don't need.
     tools     list of tools/tech, e.g. ["SQL", "Power BI"]
     metric    optional headline number, e.g. { value: "47%", label: "of Tier 1 declines explained" }
     links     list of buttons, e.g. [{ label: "Live report", url: "https://..." }]
     image     optional path to a screenshot in your repo, e.g. "images/my-shot.png".
               Without one, the card gets a generated cover in its category colour.
     featured  true to show it larger at the top
     confidential  true for employer work you can't link to (adds a small note)
   ===================================================================== */

window.SITE = {
  name: "Damilare Faluyi",
  role: "Portfolio Risk Analyst",
  location: "Lagos, Nigeria",
  headline: "I measure how loan books behave, then turn it into rules, prices and early warnings that protect them.",
  intro:
    "Credit risk and portfolio analytics in consumer lending: IFRS 9 expected credit loss, decision-engine rules, NPL migration, first-payment-default diagnostics, stress testing and risk-based pricing. Studying for an MSc in Financial Engineering at WorldQuant University.",
  email: "faluyidamilare95@gmail.com",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/damilarefaluyi/" },
    { label: "GitHub", url: "https://github.com/damilareGit" },
    { label: "X / Twitter", url: "https://twitter.com/MistaFaluyi" }
  ],
  // Optional: put your CV PDF in the repo and set its path here, e.g. "cv.pdf"
  cv: "",

  focus: [
    { term: "ECL / IFRS 9", note: "PD, LGD and EAD staging for unsecured consumer loans" },
    { term: "Migration & roll rates", note: "Cohort roll-forward triangles, cure and default tracking" },
    { term: "Decision engines", note: "Approval rules, cut-offs and policy back-testing" },
    { term: "Pricing & stress", note: "Risk-based pricing layers and macro stress scenarios" },
    { term: "ICAAP", note: "Capital adequacy and capital risk assessment" }
  ],

  skills: {
    "Analysis": ["SQL (PostgreSQL, Redshift/Athena, MySQL)", "Python (pandas, SQLAlchemy)", "R", "Excel"],
    "Reporting": ["Power BI (DAX, data modelling)", "Executive decks and one-pagers"],
    "Building": ["React / Next.js", "FastAPI", "ETL pipelines", "LLM-assisted tooling"]
  },

  experience: [
    // period is optional — add e.g. "2024 – present" and it will show
    { org: "Oxygen X Finance", role: "Portfolio Risk Analyst", period: "", note: "Consumer lending risk: ECL, NPL migration monitoring, FPD diagnostics, decision rules, pricing." },
    { org: "Carrot", role: "Senior Portfolio Risk & Analytics Consultant", period: "", note: "Portfolio risk analytics engagement and Power BI model rebuild." },
    { org: "Loft Africa", role: "", period: "", note: "" },
    { org: "Al Ahli Plastics, UAE", role: "", period: "", note: "" }
  ],

  education: [
    { org: "WorldQuant University", award: "MSc Financial Engineering (in progress)" },
    { org: "ICAAP", award: "Certification" }
  ]
};

window.PROJECTS = [
  {
    title: "NPL Migration Monitor",
    category: "Credit Risk",
    year: "2026",
    featured: true,
    confidential: true,
    summary: "A cohort roll-forward tool that tracks every loan's movement into, through and out of non-performing status, month by month.",
    problem: "Point-in-time NPL ratios hid whether the book was getting worse or simply growing. Management needed to see flows, not just stock.",
    approach: "Built vintage triangles in SQL on the data warehouse and surfaced them in Power BI. Each loan is classed each month as New NPL migration, Still in NPL, or Cured from NPL, so roll-forward and cure rates can be read by disbursement cohort.",
    impact: "Gives the risk team an early read on deteriorating cohorts and a consistent input for provisioning discussions.",
    tools: ["SQL", "Redshift / Athena", "Power BI", "DAX"],
    links: []
  },
  {
    title: "Risk-Based Pricing Engine",
    category: "Credit Risk",
    year: "2026",
    featured: true,
    confidential: true,
    summary: "An interactive pricing model for personal and SME loans that builds a rate from six layers and tests it under Nigerian macro stress.",
    problem: "Flat pricing meant low-risk customers subsidised high-risk ones, and nobody could see how a shock would change margins.",
    approach: "Implemented six pricing layers (funding cost, expected loss, operating cost, capital charge, risk premium and margin) against scorecard bands, with stress scenarios calibrated to past Nigerian economic events.",
    impact: "Lets product and risk agree on price by band and see margin erosion under stress before launch.",
    tools: ["React", "Scorecards", "Stress testing"],
    metric: { value: "6", label: "pricing layers" },
    links: []
  },
  {
    title: "Credit-Eligible Declines Segmentation",
    category: "Credit Risk",
    year: "2026",
    confidential: true,
    summary: "Found creditworthy applicants being declined for non-credit reasons and sized the opportunity for Marketing.",
    approach: "Segmented declined applications by decline reason and credit tier, then packaged the findings as a deck and one-page brief.",
    impact: "Low residual balance turned out to drive about 47% of Tier 1 declines, the single largest lever.",
    tools: ["SQL", "Python", "PowerPoint"],
    metric: { value: "47%", label: "of Tier 1 declines from one rule" },
    links: []
  },
  {
    title: "First-Payment Default Diagnostics",
    category: "Credit Risk",
    year: "2026",
    confidential: true,
    summary: "A root-cause framework for rising first-payment defaults: measurement integrity first, then decomposition, then affordability.",
    approach: "Checked the FPD definition and data for errors, decomposed the rate by channel, product and cohort, and tested residual-income affordability as the remaining driver.",
    tools: ["SQL", "Excel", "Power BI"],
    links: []
  },
  {
    title: "Power BI Model Audit with Claude",
    category: "BI & Dashboards",
    year: "2026",
    confidential: true,
    summary: "Connected a production Power BI model to an AI assistant through an Analysis Services MCP server and audited it end to end.",
    approach: "Reviewed 13 tables, 21 relationships and 60 measures, fixed date-table relationships, and added report-page tooltips driven by a metric-description table.",
    tools: ["Power BI", "DAX", "MCP", "Claude"],
    metric: { value: "60", label: "measures audited" },
    links: []
  },
  {
    title: "myFinance",
    category: "Engineering",
    year: "2026",
    summary: "A personal finance app that reads PDF bank statements, categorises transactions and removes duplicates.",
    approach: "Next.js front end with a FastAPI and PostgreSQL back end. A statement parser combines pdfplumber with an LLM for messy layouts, then keyword rules categorise each transaction.",
    tools: ["Next.js", "FastAPI", "PostgreSQL", "SQLAlchemy", "Claude API"],
    links: [{ label: "GitHub", url: "https://github.com/damilareGit" }]
  },
  {
    title: "Collections ETL Pipeline",
    category: "Engineering",
    year: "2026",
    confidential: true,
    summary: "Python pipelines that load collections and liquidation files into PostgreSQL reliably at full scale.",
    approach: "Chunked processing to fix memory errors, cascading date-format parsing for mixed timestamps, and a clean SQLAlchemy engine setup.",
    tools: ["Python", "pandas", "PostgreSQL"],
    links: []
  },
  {
    title: "MavenMarket Dashboard",
    category: "BI & Dashboards",
    year: "2023",
    summary: "Retail performance report covering revenue, profit, returns and transactions across stores and products.",
    tools: ["Power BI", "DAX"],
    image: "MavenMarket.jpg",
    links: [{ label: "Live report", url: "https://app.powerbi.com/view?r=eyJrIjoiYWRiZGI1NDItZjNjNi00NGEyLTk3Y2YtZmM0M2ZhMjgxOTRkIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9" }]
  },
  {
    title: "Sales Performance Analysis",
    category: "BI & Dashboards",
    year: "2023",
    summary: "Sales performance report tracking revenue trends, targets and product mix.",
    tools: ["Power BI"],
    image: "images/bg.jpg",
    links: [{ label: "Live report", url: "https://app.powerbi.com/view?r=eyJrIjoiNDZjYjQ4NzktZWQxMi00ODBlLTg1YzMtNDM2NTJkYmJlYTQyIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9" }]
  },
  {
    title: "Divvy Bike-Share Transformation",
    category: "Quant & Research",
    year: "2023",
    summary: "Google Data Analytics capstone: how do members and casual riders use Divvy bikes differently?",
    approach: "Consolidated a year of monthly trip files into one clean data frame in R, then compared ride length, timing and station patterns by rider type.",
    tools: ["R", "tidyverse"],
    image: "images/Data%20Transformation.png",
    links: [{ label: "Code", url: "https://github.com/damilareGit/Google-Data-Analyst-Case-Study/blob/main/CaseStudy%20-%20DivvyBike-Sharing.R" }]
  },
  {
    title: "Store Data Exploration in SQL",
    category: "BI & Dashboards",
    year: "2023",
    summary: "Exploratory SQL on a DVD rental store database: customers, inventory, rentals and revenue.",
    tools: ["MySQL"],
    image: "images/LocalStore.jfif",
    links: [{ label: "Code", url: "https://github.com/damilareGit/MySql_code/blob/main/MavenMovies_Final_Course_Project.sql" }]
  }
];
