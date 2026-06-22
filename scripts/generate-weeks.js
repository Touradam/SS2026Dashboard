// Generates weeks array from Notion plan - run once to patch data.js
const fs = require('fs');
const path = require('path');

const weeks = [
  {
    weekNumber: 1, dates: 'July 1-10, 2026', month: 'July', phase: 'Land & Launch',
    topic: 'China Entry & Founder Orientation', priority: 'Critical', hours: { adama: 40, jordan: 4 },
    objective: 'Build a strong understanding of the Chinese solar ecosystem, Plug and Play resources, and the research and education market opportunity for Solar Sense Research Edition.',
    keyActivities: [
      'Complete Plug and Play founder onboarding sessions and cohort introductions.',
      'Participate in Shanghai ecosystem visits and map key solar industry stakeholders.',
      'Conduct preliminary market research on Chinese universities, research institutes, and solar testing facilities.',
      'Create SEPT China Market Opportunity Framework and define customer segmentation.'
    ],
    resourcesRequired: ['Plug and Play mentor network', 'Industry reports and China solar market data', 'SEPT product documentation and value proposition materials'],
    deliverables: ['China market opportunity framework completed', 'Initial list of 30-40 target organizations identified', 'Stakeholder map of key solar ecosystem players developed', 'SEPT China market-entry assumptions documented'],
    successMetrics: ['Operational presence established in Nantong', 'Initial target organization pipeline created']
  },
  {
    weekNumber: 2, dates: 'July 13-17, 2026', month: 'July', phase: 'Land & Launch',
    topic: 'Legal, Financial & Operational Setup', priority: 'High', hours: { adama: 40, jordan: 3 },
    objective: "Develop a deeper understanding of China's business environment while validating demand within the research and education sector.",
    keyActivities: [
      "Participate in banking, taxation, and financial workshops to establish SEPT's China operating structure.",
      'Attend the Shanghai ecosystem trip and meet universities, innovation centers, solar companies, and research organizations.',
      'Conduct customer discovery interviews with researchers, professors, and solar testing professionals.',
      'Begin localization of marketing materials, website content, and product positioning for Chinese audiences.'
    ],
    resourcesRequired: ['Plug and Play Shanghai partner network', 'Translation and localization support', 'Customer discovery interview templates'],
    deliverables: ['China banking and financial setup roadmap completed', '15-20 customer discovery conversations conducted', 'Chinese company introduction and product one-pager drafted', 'Target organization database expanded to 60 organizations', 'Initial research-sector value proposition validated'],
    successMetrics: ['Banking and financial setup path defined', 'Research-sector demand signals captured']
  },
  {
    weekNumber: 3, dates: 'July 20-24, 2026', month: 'July', phase: 'Land & Launch',
    topic: 'Talent Access & Government Incentives', priority: 'Critical', hours: { adama: 35, jordan: 5 },
    objective: 'Build strategic relationships with government stakeholders while identifying potential research collaborators and manufacturing partners.',
    keyActivities: [
      'Attend government grants, subsidies, talent program, and visa workshops.',
      'Meet district officials from NETDA, NID, and NHIZ to understand funding opportunities for foreign technology companies.',
      'Identify Chinese manufacturers capable of producing Solar Sense Research Edition hardware.',
      'Continue outreach to universities, national laboratories, renewable energy research centers, and testing facilities.'
    ],
    resourcesRequired: ['Government program advisors', 'Manufacturing databases and supplier networks', 'Plug and Play introductions and mentor support'],
    deliverables: ['Government incentive strategy developed', 'Manufacturing partner long list of 15-20 companies created', '80 target organizations identified and prioritized', 'At least 5 qualified partnership discussions initiated', 'Research collaboration opportunity report completed'],
    successMetrics: ['Government funding pathways mapped', 'Manufacturing long list established']
  },
  {
    weekNumber: 4, dates: 'July 27-31, 2026', month: 'July', phase: 'Land & Launch',
    topic: 'Ecosystem Integration & POC Preparation', priority: 'High', hours: { adama: 42, jordan: 4 },
    objective: 'Convert market research and networking activities into a qualified partnership pipeline and prepare for customer validation activities.',
    keyActivities: [
      'Participate in Nantong ecosystem integration activities and business community introductions.',
      'Adapt SEPT pitch deck, pricing assumptions, and market messaging for Chinese academic and research customers.',
      'Conduct follow-up meetings with high-priority universities, laboratories, and research institutes.',
      'Participate in the Wenzhou business trip to expand partnership and manufacturing opportunities.'
    ],
    resourcesRequired: ['Plug and Play ecosystem partners', 'Chinese-language marketing materials', 'CRM and partnership tracking system'],
    deliverables: ['China Market Opportunity Map completed', 'Database of 100 target organizations finalized', 'Chinese pitch deck, company profile, and product materials completed', 'Manufacturing partner prospect list completed', 'Minimum 10 qualified partnership discussions underway', 'Initial university and research institute pipeline established', 'Phase 2 customer validation and POC engagement plan prepared'],
    successMetrics: ['Phase 1 complete: 100+ organizations mapped', 'POC engagement plan ready for Phase 2']
  },
  {
    weekNumber: 5, dates: 'August 3-7, 2026', month: 'August', phase: 'Market Entry',
    topic: 'From Technology to Real Use Cases', priority: 'Critical', hours: { adama: 38, jordan: 4 },
    objective: "Convert Phase 1 relationships into qualified pilot opportunities and establish Solar Sense's China market-entry strategy for the research sector.",
    keyActivities: [
      'Participate in Market Entry Workshop and refine China go-to-market strategy focused on universities and research institutions.',
      'Attend IP, patent, and data compliance workshops and develop a China IP protection roadmap.',
      'Prioritize the top 15-20 organizations from the Phase 1 pipeline and begin structured pilot discussions.',
      'Develop pilot program packages, pilot objectives, evaluation metrics, and draft collaboration proposals.'
    ],
    resourcesRequired: ['Plug and Play market-entry mentors', 'China IP and legal advisors', 'Pilot proposal templates and technical documentation'],
    deliverables: ['China market-entry strategy completed', 'China IP and patent strategy documented', 'Pilot partner shortlist finalized', '5-8 active pilot discussions underway', 'Draft pilot agreement package created'],
    successMetrics: ['Pilot shortlist finalized', 'IP and market-entry strategies documented']
  },
  {
    weekNumber: 6, dates: 'August 10-14, 2026', month: 'August', phase: 'Market Entry',
    topic: 'POC Kickoff & Corporate Matchmaking', priority: 'Critical', hours: { adama: 45, jordan: 5 },
    objective: 'Secure commitments from high-priority research partners and establish the pilot deployment pipeline.',
    keyActivities: [
      'Present Solar Sense Research Edition during the POC Kickoff Event and showcase research use cases.',
      'Participate in closed-door matchmaking sessions with universities, laboratories, and innovation centers.',
      'Conduct technical meetings with prospective pilot partners to define pilot scope and research objectives.',
      "Initiate discussions with manufacturers and electronics suppliers identified through Plug and Play's network."
    ],
    resourcesRequired: ['Plug and Play matchmaking team', 'Technical demonstration materials', 'Pilot deployment framework and evaluation criteria'],
    deliverables: ['10-15 strategic matchmaking meetings completed', '2-4 pilot candidates formally shortlisted', 'Initial MOUs or letters of intent signed', 'Manufacturing partner evaluation process initiated', 'Pilot deployment requirements documented'],
    successMetrics: ['Pilot candidates shortlisted', 'Initial LOIs or MOUs signed']
  },
  {
    weekNumber: 7, dates: 'August 17-21, 2026', month: 'August', phase: 'Market Entry',
    topic: 'Negotiations, Go-to-Market & Pilot Testing', priority: 'High', hours: { adama: 40, jordan: 3 },
    objective: 'Finalize pilot agreements and begin product validation with early research partners.',
    keyActivities: [
      'Negotiate pilot terms, deployment scope, data-sharing protocols, and success metrics.',
      'Participate in China market case-study sessions and incorporate localization lessons into the product roadmap.',
      'Launch initial pilot testing activities with selected research partners.',
      'Conduct supplier and manufacturing assessments for pilot-scale production.'
    ],
    resourcesRequired: ['Pilot partners and technical teams', 'Product validation protocols', 'Manufacturing and supply chain advisors'],
    deliverables: ['2-3 pilot agreements in final negotiation', 'At least one pilot deployment initiated', 'Product performance feedback process established', 'Preliminary manufacturing shortlist created', 'China-specific localization requirements identified'],
    successMetrics: ['Pilot agreements advancing to signature', 'First pilot deployment initiated']
  },
  {
    weekNumber: 8, dates: 'August 24-28, 2026', month: 'August', phase: 'Market Entry',
    topic: 'Business Model Validation & Deal Closing', priority: 'Critical', hours: { adama: 46, jordan: 6 },
    objective: "Validate Solar Sense's China business model using pilot feedback and prepare for commercialization and scaling.",
    keyActivities: [
      'Participate in Business Model Validation Workshop and refine pricing, customer acquisition, and partnership models.',
      'Finalize pilot agreements and formal research collaborations.',
      'Continue product testing and collect structured feedback from pilot participants.',
      'Complete supplier matching and develop a China manufacturing and localization roadmap.'
    ],
    resourcesRequired: ['Plug and Play commercialization mentors', 'Pilot performance data', 'Manufacturing and localization partners'],
    deliverables: ['2-3 pilot agreements signed', '1-2 active pilot deployments initiated', 'China business model validated', 'Manufacturing partner shortlist completed', 'Product localization roadmap created', 'Research customer pipeline expanded and documented', 'Commercialization plan prepared for Phase 3 execution'],
    successMetrics: ['Phase 2 complete: signed pilot agreements', 'Business model validated for research sector']
  },
  {
    weekNumber: 9, dates: 'August 31 - September 4, 2026', month: 'September', phase: 'Manufacturing Kickoff',
    topic: 'Month 3 Transition — Localization & Validation', priority: 'Critical', hours: { adama: 40, jordan: 5 },
    objective: 'Launch and stabilize pilot deployments while establishing a structured process for collecting customer feedback and validation data.',
    keyActivities: [
      'Install and commission Solar Sense Research Edition at pilot partner sites.',
      'Train researchers, professors, and laboratory staff on system operation and dashboard usage.',
      'Establish pilot success metrics, reporting protocols, and feedback collection processes.',
      'Begin Chinese IP and patent filing assessment based on technology deployment strategy.'
    ],
    resourcesRequired: ['Solar Sense team (Adama and Jordan)', 'Pilot partner technical staff', 'Product training materials and user guides'],
    deliverables: ['1-2 pilot sites fully operational', 'Pilot monitoring and reporting framework established', 'Customer feedback process documented', 'Initial China IP strategy update completed'],
    successMetrics: ['Pilot sites operational and collecting data', 'Feedback framework active']
  },
  {
    weekNumber: 10, dates: 'September 7-11, 2026', month: 'September', phase: 'Manufacturing Kickoff',
    topic: 'Deep POC Execution — Supply Chain Integration', priority: 'Medium', hours: { adama: 35, jordan: 8 },
    objective: 'Localize the product experience for Chinese users and evaluate manufacturing feasibility.',
    keyActivities: [
      'Translate dashboard interface, reports, alerts, and user documentation into Chinese.',
      'Conduct user experience interviews with pilot participants.',
      'Visit and evaluate shortlisted manufacturing partners.',
      'Assess certification, sourcing, and assembly requirements for China-based production.'
    ],
    resourcesRequired: ['Translation and localization specialists', 'Manufacturing partners', 'Pilot user feedback data'],
    deliverables: ['Chinese dashboard beta version completed', 'Chinese user documentation drafted', 'Manufacturing evaluation report completed', 'Product localization requirements identified'],
    successMetrics: ['Chinese dashboard beta completed', 'Manufacturing feasibility assessed']
  },
  {
    weekNumber: 11, dates: 'September 14-18, 2026', month: 'September', phase: 'Manufacturing Kickoff',
    topic: 'Localized Software & Integration Validation', priority: 'High', hours: { adama: 38, jordan: 4 },
    objective: "Expand Solar Sense's presence within China's research ecosystem and increase pilot opportunities.",
    keyActivities: [
      'Present pilot progress to universities, laboratories, and renewable energy research centers.',
      'Conduct site visits with prospective research collaborators.',
      'Engage faculty members and graduate researchers interested in using Solar Sense for research projects.',
      'Explore opportunities for joint publications, student projects, and grant collaborations.'
    ],
    resourcesRequired: ['Plug and Play introductions', 'Academic partnership materials', 'Pilot performance summaries'],
    deliverables: ['3-5 new research partnership opportunities identified', 'Additional pilot candidates added to pipeline', 'Academic collaboration framework developed', 'Expanded university engagement network established'],
    successMetrics: ['Research partnership pipeline expanded', 'Academic collaboration framework in place']
  },
  {
    weekNumber: 12, dates: 'September 21-25, 2026', month: 'September', phase: 'Manufacturing Kickoff',
    topic: 'Pre-Installation Site Preparation', priority: 'High', hours: { adama: 40, jordan: 5 },
    objective: 'Analyze pilot results, validate market demand, and prepare commercialization recommendations.',
    keyActivities: [
      'Collect and analyze pilot performance data and customer feedback.',
      'Conduct structured interviews with pilot stakeholders and decision-makers.',
      'Evaluate pricing assumptions, deployment models, and support requirements.',
      'Prepare China market validation report and commercialization recommendations.'
    ],
    resourcesRequired: ['Pilot performance data', 'Customer interview results', 'Market analysis and commercialization framework'],
    deliverables: ['China Market Validation Report completed', 'Product-market fit assessment documented', 'Commercialization assumptions validated or revised', 'Priority market segments ranked for future expansion'],
    successMetrics: ['Phase 3 complete: market demand validated', 'China Market Validation Report delivered']
  },
  {
    weekNumber: 13, dates: 'September 28 - October 2, 2026', month: 'October', phase: 'Hardware Ingestion',
    topic: 'Month 4 Transition — Investor Readiness', priority: 'Critical', hours: { adama: 38, jordan: 4 },
    objective: "Develop Solar Sense's fundraising strategy and establish a compelling investment narrative centered on China's rapidly growing solar infrastructure market.",
    keyActivities: [
      'Define fundraising objectives, target round size, capital allocation, and 24-month milestones.',
      "Develop Solar Sense's China growth story using pilot results, research partnerships, and manufacturing strategy.",
      'Identify target investor profiles including climate-tech VCs, strategic corporate investors, government funds, and family offices.',
      'Build a comprehensive investor pipeline and outreach strategy.'
    ],
    resourcesRequired: ['Plug and Play venture mentors', 'Climate-tech investment benchmarks', 'Pilot validation metrics and market research'],
    deliverables: ['Fundraising strategy completed', 'Investment thesis finalized', 'Target investor database containing 75-100 investors', 'China growth narrative documented'],
    successMetrics: ['Fundraising strategy and investor database complete', 'Investment thesis finalized']
  },
  {
    weekNumber: 14, dates: 'October 5-9, 2026', month: 'October', phase: 'Hardware Ingestion',
    topic: 'Golden Week — Internal Validation & Bench Burn-In', priority: 'Critical', hours: { adama: 35, jordan: 8 },
    objective: "Build a scalable financial model demonstrating Solar Sense's commercialization potential in China and international markets.",
    keyActivities: [
      'Develop a five-year financial model including revenue, gross margin, operating expenses, and cash flow.',
      'Build scenario analyses for Research Edition, Enterprise Edition, and Manufacturing Licensing opportunities.',
      'Validate pricing assumptions using pilot feedback and market interviews.',
      'Calculate customer acquisition cost, lifetime value, and unit economics.'
    ],
    resourcesRequired: ['Financial modeling templates', 'Market validation data', 'Manufacturing cost estimates'],
    deliverables: ['Five-year financial model completed', 'Revenue scenarios documented', 'Unit economics validated', 'Capital deployment plan finalized'],
    successMetrics: ['Financial model completed', 'Unit economics validated']
  },
  {
    weekNumber: 15, dates: 'October 12-16, 2026', month: 'October', phase: 'Hardware Ingestion',
    topic: 'Investor Materials & Growth Narrative Refinement', priority: 'High', hours: { adama: 40, jordan: 4 },
    objective: 'Prepare investor-ready materials and refine the China growth narrative for fundraising outreach.',
    keyActivities: [
      'Design bilingual (English/Chinese) investor pitch deck and executive summary.',
      'Organize secure data room containing financials, pilot reports, IP documentation, and market research.',
      'Prepare one-page investment memo and technology overview with translation support.',
      'Refine China growth narrative and standardize due diligence responses.'
    ],
    resourcesRequired: ['Translation and localization support', 'Pilot validation reports', 'Financial model and market research'],
    deliverables: ['Investor deck completed', 'Executive summary completed', 'Data room fully organized', 'Bilingual investor materials finalized', 'China growth narrative refined for investor outreach'],
    successMetrics: ['Investor materials package complete', 'Data room organized and ready']
  },
  {
    weekNumber: 16, dates: 'October 19-23, 2026', month: 'October', phase: 'Hardware Ingestion',
    topic: 'Bilateral Presentation Tuning', priority: 'High', hours: { adama: 36, jordan: 3 },
    objective: 'Validate investor messaging and prepare Solar Sense for venture capital conversations and strategic fundraising.',
    keyActivities: [
      'Conduct mock investor presentations with Plug and Play mentors and industry advisors.',
      'Refine investment messaging based on mentor feedback.',
      'Finalize China expansion strategy including commercialization roadmap, manufacturing partnerships, and research ecosystem growth.',
      'Begin warm introductions to Plug and Play investors, strategic partners, and government investment funds.'
    ],
    resourcesRequired: ['Plug and Play venture team', 'Industry mentors', 'Investor presentation materials'],
    deliverables: ['Investor presentation validated', 'China Growth Strategy completed', 'Investor outreach pipeline activated', 'Due diligence package finalized'],
    successMetrics: ['Phase 4 complete: investor-ready', 'Outreach pipeline activated']
  },
  {
    weekNumber: 17, dates: 'October 26-30, 2026', month: 'November', phase: 'Field Deployment',
    topic: 'Regional Ecosystem Structuring', priority: 'Critical', hours: { adama: 40, jordan: 4 },
    objective: "Launch Solar Sense's fundraising campaign and establish strong relationships with strategic investors.",
    keyActivities: [
      'Participate in Plug and Play investor roundtables and climate-tech networking events.',
      'Conduct targeted investor outreach to venture funds, corporate investors, and strategic partners.',
      "Present Solar Sense's China commercialization strategy and pilot validation results.",
      'Qualify investors based on sector focus, investment stage, strategic value, and geographic interests.'
    ],
    resourcesRequired: ['Investor pitch deck', 'Executive summary and investment memo', 'Plug and Play venture team introductions'],
    deliverables: ['5-7 investor meetings completed', 'Investor qualification matrix created', 'Initial investor feedback report completed', 'High-priority investor pipeline established'],
    successMetrics: ['Fundraising campaign launched', '5-7 investor meetings completed']
  },
  {
    weekNumber: 18, dates: 'November 2-6, 2026', month: 'November', phase: 'Field Deployment',
    topic: 'Month 5 Transition — Fundraising Acceleration', priority: 'High', hours: { adama: 38, jordan: 5 },
    objective: 'Deepen investor engagement and prepare Solar Sense for formal due diligence.',
    keyActivities: [
      'Conduct one-on-one meetings with climate-tech VCs, strategic corporate investors, and government-backed funds.',
      'Customize investment presentations based on investor interests.',
      'Organize and validate all due diligence documentation.',
      'Address investor questions regarding technology, manufacturing, commercialization, and China expansion.'
    ],
    resourcesRequired: ['Data room', 'Financial model and pilot reports', 'Legal and technical documentation'],
    deliverables: ['5-6 additional investor meetings completed', 'Due diligence checklist finalized', 'Investor-specific follow-up materials prepared', '2-3 investors express strong interest'],
    successMetrics: ['Due diligence preparation complete', '2-3 investors express strong interest']
  },
  {
    weekNumber: 19, dates: 'November 9-13, 2026', month: 'November', phase: 'Field Deployment',
    topic: 'Closed-Door Investor Roundtables & Field Validation', priority: 'High', hours: { adama: 36, jordan: 4 },
    objective: 'Expand fundraising beyond venture capital by engaging government funds and strategic industry investors.',
    keyActivities: [
      'Meet government investment agencies and innovation funds supporting climate technology and advanced manufacturing.',
      "Present Solar Sense's alignment with China's renewable energy, AI, and smart infrastructure priorities.",
      'Engage solar manufacturers, research organizations, and energy companies for potential strategic investment.',
      'Explore non-dilutive funding opportunities, grants, and joint development agreements.'
    ],
    resourcesRequired: ['Government funding guides', 'Strategic partnership proposals', 'China market validation report'],
    deliverables: ['Government funding opportunities identified', 'Strategic investor discussions initiated', 'Partnership investment opportunities documented', 'Non-dilutive funding roadmap completed'],
    successMetrics: ['Government and strategic investor pipeline established', 'Non-dilutive funding roadmap completed']
  },
  {
    weekNumber: 20, dates: 'November 16-20, 2026', month: 'November', phase: 'Field Deployment',
    topic: 'Commercial Pipeline Scaling', priority: 'Critical', hours: { adama: 40, jordan: 3 },
    objective: 'Convert investor interest into structured fundraising opportunities and establish a repeatable fundraising process.',
    keyActivities: [
      'Conduct second-round investor meetings and follow-up discussions.',
      'Respond to due diligence requests and provide additional technical and financial information.',
      'Update fundraising CRM with investor feedback, timelines, and next steps.',
      'Refine fundraising strategy based on investor insights and market response.'
    ],
    resourcesRequired: ['Investor CRM', 'Due diligence documentation', 'Plug and Play mentor support'],
    deliverables: ['Fundraising pipeline actively managed', 'Second-round meetings completed', 'Due diligence processes initiated', 'Next-stage fundraising strategy finalized'],
    successMetrics: ['Phase 5 complete: active fundraising pipeline', 'Due diligence processes initiated']
  },
  {
    weekNumber: 21, dates: 'November 23-27, 2026', month: 'December', phase: 'Scale, Showcase & Graduation',
    topic: 'Supply Chain Hardening & Scale Contract Optimization', priority: 'Critical', hours: { adama: 38, jordan: 4 },
    objective: "Finalize Solar Sense's Demo Day presentation and communicate a compelling vision for becoming China's leading AI-powered solar research and safety platform.",
    keyActivities: [
      'Refine Demo Day presentation using investor and mentor feedback.',
      'Update pitch with pilot performance metrics, customer testimonials, and commercialization milestones.',
      'Develop tailored messaging for investors, universities, manufacturers, and government stakeholders.',
      'Schedule Demo Day meetings with priority investors and strategic partners.'
    ],
    resourcesRequired: ['Plug and Play Demo Day coaches', 'Pilot validation reports', 'Investor presentation materials'],
    deliverables: ['Demo Day presentation finalized', 'Executive presentation script completed', 'Priority meeting schedule confirmed', 'Strategic messaging aligned across all audiences'],
    successMetrics: ['Demo Day presentation finalized', 'Priority stakeholder meetings scheduled']
  },
  {
    weekNumber: 22, dates: 'November 30 - December 4, 2026', month: 'December', phase: 'Scale, Showcase & Graduation',
    topic: 'Month 6 Transition — Demo Day & Graduation Prep', priority: 'High', hours: { adama: 36, jordan: 3 },
    objective: 'Strengthen Solar Sense China ecosystem by expanding research, manufacturing, and talent partnerships.',
    keyActivities: [
      'Finalize collaboration agreements with universities and renewable energy research centers.',
      'Conduct meetings with shortlisted manufacturing and supply chain partners.',
      'Participate in university recruitment and talent networking activities.',
      'Identify internship and graduate research opportunities supporting product development.'
    ],
    resourcesRequired: ['University partnership proposals', 'Manufacturing evaluation reports', 'Talent recruitment materials'],
    deliverables: ['University collaboration framework established', 'Manufacturing partnership roadmap finalized', 'Local talent pipeline identified', 'Research collaboration opportunities expanded'],
    successMetrics: ['University and manufacturing partnerships advanced', 'Talent pipeline identified']
  },
  {
    weekNumber: 23, dates: 'December 7-11, 2026', month: 'December', phase: 'Scale, Showcase & Graduation',
    topic: 'Pilot Pipeline Expansion Sprints', priority: 'Critical', hours: { adama: 45, jordan: 4 },
    objective: 'Deliver a high-impact Demo Day presentation and maximize investor and strategic partnership opportunities.',
    keyActivities: [
      'Present Solar Sense to investors, corporates, government representatives, and Plug and Play partners.',
      'Conduct one-on-one meetings with interested investors immediately following presentations.',
      'Showcase pilot results, localization progress, and manufacturing strategy.',
      'Collect investor feedback and identify next-step actions for each opportunity.'
    ],
    resourcesRequired: ['Demo Day presentation', 'Investor data room', 'Product demonstration and pilot results'],
    deliverables: ['Successful Demo Day presentation delivered', '8-10 investor and strategic partner follow-up meetings completed', 'New partnership opportunities identified', 'Investor interest and feedback documented'],
    successMetrics: ['Demo Day presentation delivered', '8-10 follow-up meetings completed']
  },
  {
    weekNumber: 24, dates: 'December 14-18, 2026', month: 'December', phase: 'Scale, Showcase & Graduation',
    topic: 'Flagship Demo Day Showcase', priority: 'Critical', hours: { adama: 40, jordan: 6 },
    objective: 'Transition from accelerator participant to an independently operating company with a clear China expansion strategy.',
    keyActivities: [
      'Complete structured follow-up with all investors, partners, universities, and government contacts.',
      "Finalize Solar Sense's 12-month China operating plan and commercialization roadmap.",
      'Join Plug and Play alumni network and establish ongoing engagement with mentors and ecosystem partners.',
      'Define fundraising milestones, pilot expansion targets, hiring priorities, and manufacturing objectives for the next year.'
    ],
    resourcesRequired: ['CRM and partnership management tools', 'Growth strategy framework', 'Plug and Play alumni network'],
    deliverables: ['Post-program operating plan completed', 'Investor follow-up system implemented', 'China growth roadmap finalized', 'Alumni engagement plan established'],
    successMetrics: ['Program graduation complete', '12-month China operating plan finalized']
  }
];

// Add derived track fields
weeks.forEach(w => {
  w.technicalTrack = w.keyActivities.slice(0, 2).join(' ');
  w.relationshipTrack = w.keyActivities.slice(2).join(' ');
  w.jordanTrack = `Weekly review and technical support aligned to: ${w.objective}`;
});

const dataPath = path.join(__dirname, '..', 'data.js');
let content = fs.readFileSync(dataPath, 'utf8');
const match = content.match(/  weeks: \[[\s\S]*?\n  ],\r?\n\r?\n  relationships: \{/);
if (!match) throw new Error('Could not find weeks array bounds');

const weeksJson = JSON.stringify(weeks, null, 4)
  .split('\n')
  .map((line, i) => (i === 0 ? '  weeks: ' + line : '  ' + line))
  .join('\n');

content = content.replace(match[0], weeksJson + ',\n\n  relationships: {');
fs.writeFileSync(dataPath, content);
console.log('Updated', weeks.length, 'weeks in data.js');
