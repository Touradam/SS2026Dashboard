// Solar Sense Pro - China Launch Execution Plan Data
// Focus: Research institutions, universities, and academic partnerships

const executionPlan = {
  timeline: {
    startDate: '2026-07-01',
    endDate: '2026-12-31',
    totalWeeks: 24,
    totalMonths: 6,
    totalPhases: 6
  },

  monthlyObjectives: [
    {
      month: 'July',
      focus: 'China Entry & Research Market Mapping',
      pilotGoal: 'Identify 100 target organizations (universities, research labs)',
      manufacturingGoal: 'Initial manufacturing prospect list (15-20 partners)',
      criticalDeliverable: 'China Market Opportunity Map completed'
    },
    {
      month: 'August',
      focus: 'Market Entry & POC Development',
      pilotGoal: 'Secure 2-3 pilot agreements with research institutions',
      manufacturingGoal: 'Manufacturing shortlist (3-5 partners evaluated)',
      criticalDeliverable: 'Signed pilot deployment contracts'
    },
    {
      month: 'September',
      focus: 'Manufacturing Kickoff & Pilot Validation',
      pilotGoal: '2-3 pilots operational at research sites',
      manufacturingGoal: 'Manufacturing feasibility assessment completed',
      criticalDeliverable: 'China Market Validation Report'
    },
    {
      month: 'October',
      focus: 'Hardware Ingestion & Investor Readiness',
      pilotGoal: 'Pilot validation data documented and analyzed',
      manufacturingGoal: 'Manufacturing partnership roadmap completed',
      criticalDeliverable: 'Investor pitch deck and financial model'
    },
    {
      month: 'November',
      focus: 'Field Deployment & Fundraising Acceleration',
      pilotGoal: 'Research collaborations formalized (3-5 partnerships)',
      manufacturingGoal: 'Manufacturing partner finalization underway',
      criticalDeliverable: '15-20 investor meetings completed'
    },
    {
      month: 'December',
      focus: 'Scale, Showcase & Graduation',
      pilotGoal: 'University partnerships established (3-5 institutions)',
      manufacturingGoal: 'Manufacturing partner finalized',
      criticalDeliverable: 'Demo Day presentation and 12-month growth plan'
    }
  ],

  weeks: [
    // Phase 1: Land & Launch (July 2026, Weeks 1-4)
    {
      weekNumber: 1,
      dates: 'July 1-10, 2026',
      month: 'July',
      phase: 'Land & Launch',
      topic: 'China Entry & Founder Orientation',
      priority: 'Critical',
      hours: { adama: 40, jordan: 4 },
      technicalTrack: 'Create Solar Sense Pro China Market Opportunity Framework and define customer segmentation. Review SEPT product documentation and value proposition materials for research market entry.',
      relationshipTrack: 'Complete Plug and Play founder onboarding sessions and cohort introductions. Participate in Shanghai ecosystem visits and map key solar industry stakeholders. Conduct preliminary market research on Chinese universities, research institutes, and solar testing facilities.',
      jordanTrack: 'Weekly alignment: Review market opportunity framework structure, target organization criteria, and communication protocols.',
      deliverables: ['China market opportunity framework completed', 'Initial list of 30-40 target organizations identified', 'Stakeholder map of key solar ecosystem players developed', 'Solar Sense Pro China market-entry assumptions documented'],
      successMetrics: ['100% operational setup complete', 'Initial contact database of professors and lab directors established']
    },
    {
      weekNumber: 2,
      dates: 'July 13-17, 2026',
      month: 'July',
      phase: 'Land & Launch',
      topic: 'Legal, Financial & Operational Setup',
      priority: 'High',
      hours: { adama: 40, jordan: 3 },
      technicalTrack: 'Begin localization of marketing materials, website content, and product positioning for Chinese academic audiences. Draft Chinese company introduction and product one-pager.',
      relationshipTrack: 'Participate in banking, taxation, and financial workshops to establish China operating structure. Attend Shanghai ecosystem trip to meet universities, innovation centers, solar companies, and research organizations. Conduct customer discovery interviews with researchers, professors, and solar testing professionals.',
      jordanTrack: 'Asynchronous review: Check Chinese product materials for technical accuracy and appropriate academic positioning.',
      deliverables: ['China banking and financial setup roadmap completed', '15-20 customer discovery conversations conducted', 'Chinese company introduction and product one-pager drafted', 'Target organization database expanded to 60 organizations'],
      successMetrics: ['Banking infrastructure path clear', 'Initial research-sector value proposition validated']
    },
    {
      weekNumber: 3,
      dates: 'July 20-24, 2026',
      month: 'July',
      phase: 'Land & Launch',
      topic: 'Talent Access & Government Incentives',
      priority: 'Critical',
      hours: { adama: 35, jordan: 5 },
      technicalTrack: 'Prepare technical documentation and product specifications for manufacturing partner discussions. Identify Chinese manufacturers capable of producing Solar Sense Pro hardware.',
      relationshipTrack: 'Attend government grants, subsidies, talent program, and visa workshops. Meet district officials from NETDA, NID, and NHIZ to understand funding opportunities for foreign technology companies. Continue outreach to universities, national laboratories, renewable energy research centers, and testing facilities.',
      jordanTrack: 'Design review: Confirm product specifications are suitable for Chinese manufacturing and research institution requirements.',
      deliverables: ['Government incentive strategy developed', 'Manufacturing partner long list of 15-20 companies created', '80 target organizations identified and prioritized', 'At least 5 qualified partnership discussions initiated', 'Research collaboration opportunity report completed'],
      successMetrics: ['Government funding opportunities mapped', 'Manufacturing feasibility confirmed']
    },
    {
      weekNumber: 4,
      dates: 'July 27-31, 2026',
      month: 'July',
      phase: 'Land & Launch',
      topic: 'Ecosystem Integration & POC Preparation',
      priority: 'High',
      hours: { adama: 42, jordan: 4 },
      technicalTrack: 'Adapt Solar Sense Pro pitch deck, pricing assumptions, and market messaging for Chinese academic and research customers. Complete Chinese-language marketing materials.',
      relationshipTrack: 'Participate in Nantong ecosystem integration activities and business community introductions. Conduct follow-up meetings with high-priority universities, laboratories, and research institutes. Participate in Wenzhou business trip to expand partnership and manufacturing opportunities.',
      jordanTrack: 'Review Chinese pitch deck and validate technical claims for research audience.',
      deliverables: ['China Market Opportunity Map completed', 'Database of 100 target organizations finalized', 'Chinese pitch deck, company profile, and product materials completed', 'Manufacturing partner prospect list completed', 'Minimum 10 qualified partnership discussions underway', 'Phase 2 customer validation and POC engagement plan prepared'],
      successMetrics: ['Phase 1 complete', 'Initial university pipeline established', 'Phase 2 POC plan prepared']
    },
    // Phase 2: Market Entry (August 2026, Weeks 5-8)
    {
      weekNumber: 5,
      dates: 'August 3-7, 2026',
      month: 'August',
      phase: 'Market Entry',
      topic: 'From Technology to Real Use Cases',
      priority: 'Critical',
      hours: { adama: 38, jordan: 4 },
      technicalTrack: 'Develop pilot program packages, pilot objectives, evaluation metrics, and draft collaboration proposals. Prioritize top 15-20 organizations from Phase 1 pipeline.',
      relationshipTrack: 'Participate in Market Entry Workshop and refine China go-to-market strategy focused on universities and research institutions. Attend IP, patent, and data compliance workshops and develop a China IP protection roadmap. Begin structured pilot discussions with top research institutions.',
      jordanTrack: 'Monthly review: Evaluate July progress, refine pilot technical requirements, and approve collaboration frameworks.',
      deliverables: ['China market-entry strategy completed', 'China IP and patent strategy documented', 'Pilot partner shortlist finalized', '5-8 active pilot discussions underway', 'Draft pilot agreement package created'],
      successMetrics: ['Market entry framework validated', 'Pilot proposal package ready']
    },
    {
      weekNumber: 6,
      dates: 'August 10-14, 2026',
      month: 'August',
      phase: 'Market Entry',
      topic: 'POC Kickoff & Corporate Matchmaking',
      priority: 'Critical',
      hours: { adama: 45, jordan: 5 },
      technicalTrack: 'Prepare Solar Sense Pro technical demonstrations. Conduct technical meetings with prospective pilot partners to define pilot scope and research objectives. Document pilot deployment requirements.',
      relationshipTrack: 'Present Solar Sense Pro during POC Kickoff Event and showcase research use cases. Participate in closed-door matchmaking sessions with universities, laboratories, and innovation centers. Initiate discussions with manufacturers and electronics suppliers identified through Plug and Play network.',
      jordanTrack: 'Asynchronous technical support: Review pilot technical requirements and provide guidance on research use cases.',
      deliverables: ['10-15 strategic matchmaking meetings completed', '2-4 pilot candidates formally shortlisted', 'Initial MOUs or letters of intent signed', 'Manufacturing partner evaluation process initiated', 'Pilot deployment requirements documented'],
      successMetrics: ['Strong pilot candidate pipeline established', 'First LOIs signed']
    },
    {
      weekNumber: 7,
      dates: 'August 17-21, 2026',
      month: 'August',
      phase: 'Market Entry',
      topic: 'Negotiations, Go-to-Market & Pilot Testing',
      priority: 'High',
      hours: { adama: 40, jordan: 3 },
      technicalTrack: 'Launch initial pilot testing activities with selected research partners. Define pilot deployment requirements and success criteria. Establish product performance feedback process.',
      relationshipTrack: 'Negotiate pilot terms, deployment scope, data-sharing protocols, and success metrics. Participate in China market case-study sessions and incorporate localization lessons into the product roadmap. Conduct supplier and manufacturing assessments for pilot-scale production.',
      jordanTrack: 'Asynchronous review: Check pilot deployment parameters and validate technical approach.',
      deliverables: ['2-3 pilot agreements in final negotiation', 'At least one pilot deployment initiated', 'Product performance feedback process established', 'Preliminary manufacturing shortlist created', 'China-specific localization requirements identified'],
      successMetrics: ['Pilot agreements advancing to signature', 'Manufacturing options validated']
    },
    {
      weekNumber: 8,
      dates: 'August 24-28, 2026',
      month: 'August',
      phase: 'Market Entry',
      topic: 'Business Model Validation & Deal Closing',
      priority: 'Critical',
      hours: { adama: 46, jordan: 6 },
      technicalTrack: 'Continue product testing and collect structured feedback from pilot participants. Complete supplier matching and develop a China manufacturing and localization roadmap.',
      relationshipTrack: 'Participate in Business Model Validation Workshop and refine pricing, customer acquisition, and partnership models. Finalize pilot agreements and formal research collaborations.',
      jordanTrack: 'Technical sign-off: Validate business model assumptions and pilot technical configurations.',
      deliverables: ['2-3 pilot agreements signed', '1-2 active pilot deployments initiated', 'China business model validated', 'Manufacturing partner shortlist completed', 'Product localization roadmap created', 'Commercialization plan prepared for Phase 3 execution'],
      successMetrics: ['Phase 2 complete: Pilots secured', 'Business model validated for research sector']
    },
    // Phase 3: Manufacturing Kickoff (September 2026, Weeks 9-12)
    {
      weekNumber: 9,
      dates: 'August 31 - September 4, 2026',
      month: 'September',
      phase: 'Manufacturing Kickoff',
      topic: 'Month 3 Transition — Localization & Validation',
      priority: 'Critical',
      hours: { adama: 40, jordan: 5 },
      technicalTrack: 'Install and commission Solar Sense Pro at pilot partner sites. Train researchers, professors, and laboratory staff on system operation and dashboard usage. Establish pilot success metrics, reporting protocols, and feedback collection processes.',
      relationshipTrack: 'Coordinate with pilot site teams to ensure successful deployments. Begin Chinese IP and patent filing assessment based on technology deployment strategy.',
      jordanTrack: 'Asynchronous support: Monitor pilot installations and provide remote technical guidance.',
      deliverables: ['1-2 pilot sites fully operational', 'Pilot monitoring and reporting framework established', 'Customer feedback process documented', 'Initial China IP strategy update completed'],
      successMetrics: ['Pilots operational and collecting data', 'Feedback collection process active']
    },
    {
      weekNumber: 10,
      dates: 'September 7-11, 2026',
      month: 'September',
      phase: 'Manufacturing Kickoff',
      topic: 'Deep POC Execution — Supply Chain Integration',
      priority: 'Medium',
      hours: { adama: 35, jordan: 8 },
      technicalTrack: 'Translate dashboard interface, reports, alerts, and user documentation into Chinese. Conduct user experience interviews with pilot participants. Assess certification, sourcing, and assembly requirements for China-based production.',
      relationshipTrack: 'Visit and evaluate shortlisted manufacturing partners. Assess certification, sourcing, and assembly requirements for China-based production.',
      jordanTrack: 'Localization review: Validate Chinese interface translations and technical documentation for accuracy.',
      deliverables: ['Chinese dashboard beta version completed', 'Chinese user documentation drafted', 'Manufacturing evaluation report completed', 'Product localization requirements identified'],
      successMetrics: ['Chinese product experience validated by pilot users', 'Manufacturing feasibility confirmed']
    },
    {
      weekNumber: 11,
      dates: 'September 14-18, 2026',
      month: 'September',
      phase: 'Manufacturing Kickoff',
      topic: 'Localized Software & Integration Validation',
      priority: 'High',
      hours: { adama: 38, jordan: 4 },
      technicalTrack: 'Validate localized dashboard, reports, and integration workflows with pilot participants. Expand pilot network and explore opportunities for joint publications, student projects, and grant collaborations.',
      relationshipTrack: 'Present pilot progress to universities, laboratories, and renewable energy research centers. Conduct site visits with prospective research collaborators. Engage faculty members and graduate researchers interested in using Solar Sense Pro for research projects.',
      jordanTrack: 'Review academic collaboration proposals and validate technical approach for research applications.',
      deliverables: ['3-5 new research partnership opportunities identified', 'Additional pilot candidates added to pipeline', 'Academic collaboration framework developed', 'Expanded university engagement network established', 'Localized software integration validated'],
      successMetrics: ['Research ecosystem presence growing', 'Academic interest validated', 'Chinese dashboard validated in field use']
    },
    {
      weekNumber: 12,
      dates: 'September 21-25, 2026',
      month: 'September',
      phase: 'Manufacturing Kickoff',
      topic: 'Pre-Installation Site Preparation',
      priority: 'High',
      hours: { adama: 40, jordan: 5 },
      technicalTrack: 'Prepare additional pilot sites for installation. Collect and analyze pilot performance data and customer feedback. Evaluate pricing assumptions, deployment models, and support requirements.',
      relationshipTrack: 'Conduct structured interviews with pilot stakeholders and decision-makers. Prepare China market validation report and commercialization recommendations. Complete pre-installation site assessments for pipeline expansion.',
      jordanTrack: 'Monthly review: Evaluate Q3 progress, validate market assumptions, and prepare Q4 fundraising strategy.',
      deliverables: ['China Market Validation Report completed', 'Product-market fit assessment documented', 'Commercialization assumptions validated or revised', 'Priority market segments ranked for future expansion', 'Pre-installation site readiness assessments completed'],
      successMetrics: ['Phase 3 complete: Market demand validated', 'Product localized for Chinese market', 'Pipeline sites prepared for expansion']
    },
    // Phase 4: Hardware Ingestion (October 2026, Weeks 13-16)
    {
      weekNumber: 13,
      dates: 'September 28 - October 2, 2026',
      month: 'October',
      phase: 'Hardware Ingestion',
      topic: 'Month 4 Transition — Investor Readiness',
      priority: 'Critical',
      hours: { adama: 38, jordan: 4 },
      technicalTrack: 'Build comprehensive investor pipeline and outreach strategy. Develop Solar Sense Pro China growth story using pilot results, research partnerships, and manufacturing strategy.',
      relationshipTrack: 'Define fundraising objectives, target round size, capital allocation, and 24-month milestones. Identify target investor profiles including climate-tech VCs, strategic corporate investors, government funds, and family offices.',
      jordanTrack: 'Strategy review: Validate fundraising approach and investment narrative from technical perspective.',
      deliverables: ['Fundraising strategy completed', 'Investment thesis finalized', 'Target investor database containing 75-100 investors', 'China growth narrative documented'],
      successMetrics: ['Clear fundraising roadmap established', 'Investor targeting strategy validated']
    },
    {
      weekNumber: 14,
      dates: 'October 5-9, 2026',
      month: 'October',
      phase: 'Hardware Ingestion',
      topic: 'Golden Week — Internal Validation & Bench Burn-In',
      priority: 'Critical',
      hours: { adama: 35, jordan: 8 },
      technicalTrack: 'Conduct internal product validation and bench burn-in testing during Golden Week. Develop five-year financial model including revenue, gross margin, operating expenses, and cash flow. Validate pricing assumptions using pilot feedback and market interviews.',
      relationshipTrack: 'Build scenario analyses for Research Edition, Enterprise Edition, and Manufacturing Licensing opportunities. Calculate customer acquisition cost, lifetime value, and unit economics with financial advisors.',
      jordanTrack: 'Financial model review: Validate technical assumptions, cost structures, and revenue projections during internal validation period.',
      deliverables: ['Five-year financial model completed', 'Revenue scenarios documented', 'Unit economics validated', 'Capital deployment plan finalized', 'Internal validation and bench burn-in report completed'],
      successMetrics: ['Financial model demonstrates clear path to profitability', 'Unit economics validated', 'Product performance validated under extended testing']
    },
    {
      weekNumber: 15,
      dates: 'October 12-16, 2026',
      month: 'October',
      phase: 'Hardware Ingestion',
      topic: 'Investor Materials & Growth Narrative Refinement',
      priority: 'High',
      hours: { adama: 40, jordan: 4 },
      technicalTrack: 'Organize secure data room containing financials, pilot reports, IP documentation, market research, and technical materials. Develop standardized due diligence responses.',
      relationshipTrack: 'Design bilingual (English/Chinese) investor pitch deck. Prepare executive summary, one-page investment memo, and technology overview with translation support. Refine China growth narrative for investor audiences.',
      jordanTrack: 'Data room review: Ensure technical documentation is investor-ready and accurately represents capabilities.',
      deliverables: ['Investor deck completed', 'Executive summary completed', 'Data room fully organized', 'Bilingual investor materials finalized', 'China growth narrative refined for investor outreach'],
      successMetrics: ['Professional investor package ready', 'Due diligence materials organized']
    },
    {
      weekNumber: 16,
      dates: 'October 19-23, 2026',
      month: 'October',
      phase: 'Hardware Ingestion',
      topic: 'Bilateral Presentation Tuning',
      priority: 'High',
      hours: { adama: 36, jordan: 3 },
      technicalTrack: 'Finalize China expansion strategy including commercialization roadmap, manufacturing partnerships, and research ecosystem growth. Tune presentations for both Chinese and international investor audiences.',
      relationshipTrack: 'Conduct mock investor presentations with Plug and Play mentors and industry advisors. Refine investment messaging based on mentor feedback. Begin warm introductions to Plug and Play investors, strategic partners, and government investment funds.',
      jordanTrack: 'Presentation review: Validate technical claims and ensure investor messaging is accurate and compelling.',
      deliverables: ['Investor presentation validated', 'China Growth Strategy completed', 'Investor outreach pipeline activated', 'Due diligence package finalized'],
      successMetrics: ['Phase 4 complete: Ready for active fundraising', 'Investor meetings scheduled for November']
    },
    // Phase 5: Field Deployment (November 2026, Weeks 17-20)
    {
      weekNumber: 17,
      dates: 'October 26-30, 2026',
      month: 'November',
      phase: 'Field Deployment',
      topic: 'Regional Ecosystem Structuring',
      priority: 'Critical',
      hours: { adama: 40, jordan: 4 },
      technicalTrack: 'Present Solar Sense Pro China commercialization strategy and pilot validation results. Qualify investors based on sector focus, investment stage, strategic value, and geographic interests.',
      relationshipTrack: 'Participate in Plug and Play investor roundtables and climate-tech networking events. Conduct targeted investor outreach to venture funds, corporate investors, and strategic partners. Structure regional ecosystem relationships for scale.',
      jordanTrack: 'Investor support: Provide technical answers to investor due diligence questions.',
      deliverables: ['5-7 investor meetings completed', 'Investor qualification matrix created', 'Initial investor feedback report completed', 'High-priority investor pipeline established'],
      successMetrics: ['Strong investor engagement', 'Multiple follow-up meetings scheduled']
    },
    {
      weekNumber: 18,
      dates: 'November 2-6, 2026',
      month: 'November',
      phase: 'Field Deployment',
      topic: 'Month 5 Transition — Fundraising Acceleration',
      priority: 'High',
      hours: { adama: 38, jordan: 5 },
      technicalTrack: 'Address investor questions regarding technology, manufacturing, commercialization, and China expansion. Organize and validate all due diligence documentation.',
      relationshipTrack: 'Conduct one-on-one meetings with climate-tech VCs, strategic corporate investors, and government-backed funds. Customize investment presentations based on investor interests.',
      jordanTrack: 'Due diligence support: Provide technical validation and documentation for investor inquiries.',
      deliverables: ['5-6 additional investor meetings completed', 'Due diligence checklist finalized', 'Investor-specific follow-up materials prepared', '2-3 investors express strong interest'],
      successMetrics: ['Deep investor engagement', 'Due diligence processes beginning']
    },
    {
      weekNumber: 19,
      dates: 'November 9-13, 2026',
      month: 'November',
      phase: 'Field Deployment',
      topic: 'Closed-Door Investor Roundtables & Field Validation',
      priority: 'High',
      hours: { adama: 36, jordan: 4 },
      technicalTrack: 'Explore non-dilutive funding opportunities, grants, and joint development agreements. Document partnership investment opportunities. Validate field deployment data for investor presentations.',
      relationshipTrack: 'Meet government investment agencies and innovation funds supporting climate technology and advanced manufacturing. Present Solar Sense Pro alignment with China renewable energy, AI, and smart infrastructure priorities. Engage solar manufacturers, research organizations, and energy companies for potential strategic investment.',
      jordanTrack: 'Strategic review: Evaluate different funding options and provide technical perspective.',
      deliverables: ['Government funding opportunities identified', 'Strategic investor discussions initiated', 'Partnership investment opportunities documented', 'Non-dilutive funding roadmap completed'],
      successMetrics: ['Diverse funding pipeline established', 'Strategic partnerships progressing']
    },
    {
      weekNumber: 20,
      dates: 'November 16-20, 2026',
      month: 'November',
      phase: 'Field Deployment',
      topic: 'Commercial Pipeline Scaling',
      priority: 'Critical',
      hours: { adama: 40, jordan: 3 },
      technicalTrack: 'Respond to due diligence requests and provide additional technical and financial information. Refine fundraising strategy based on investor insights and market response.',
      relationshipTrack: 'Conduct second-round investor meetings and follow-up discussions. Update fundraising CRM with investor feedback, timelines, and next steps. Scale commercial pipeline based on validated demand.',
      jordanTrack: 'Monthly review: Evaluate fundraising progress, validate technical responses to investors, and prepare for Demo Day.',
      deliverables: ['Fundraising pipeline actively managed', 'Second-round meetings completed', 'Due diligence processes initiated', 'Next-stage fundraising strategy finalized', 'Research customer pipeline expanded and documented'],
      successMetrics: ['Phase 5 complete: Active fundraising underway', '15-20 investor meetings total', 'Multiple due diligence processes active']
    },
    // Phase 6: Scale, Showcase & Graduation (December 2026, Weeks 21-24)
    {
      weekNumber: 21,
      dates: 'November 23-27, 2026',
      month: 'December',
      phase: 'Scale, Showcase & Graduation',
      topic: 'Supply Chain Hardening & Scale Contract Optimization',
      priority: 'Critical',
      hours: { adama: 38, jordan: 4 },
      technicalTrack: 'Update pitch with pilot performance metrics, customer testimonials, and commercialization milestones. Develop tailored messaging for investors, universities, manufacturers, and government stakeholders. Harden supply chain for scale production.',
      relationshipTrack: 'Refine Demo Day presentation using investor and mentor feedback. Schedule Demo Day meetings with priority investors and strategic partners. Optimize scale contract terms with manufacturing partners.',
      jordanTrack: 'Presentation review: Final validation of technical claims and performance metrics for Demo Day.',
      deliverables: ['Demo Day presentation finalized', 'Executive presentation script completed', 'Priority meeting schedule confirmed', 'Strategic messaging aligned across all audiences', 'Supply chain hardening plan completed'],
      successMetrics: ['Demo Day presentation ready', 'Key stakeholder meetings scheduled', 'Scale contracts under negotiation']
    },
    {
      weekNumber: 22,
      dates: 'November 30 - December 4, 2026',
      month: 'December',
      phase: 'Scale, Showcase & Graduation',
      topic: 'Month 6 Transition — Demo Day & Graduation Prep',
      priority: 'High',
      hours: { adama: 36, jordan: 3 },
      technicalTrack: 'Identify internship and graduate research opportunities supporting product development. Establish local talent pipeline.',
      relationshipTrack: 'Finalize collaboration agreements with universities and renewable energy research centers. Conduct meetings with shortlisted manufacturing and supply chain partners. Participate in university recruitment and talent networking activities.',
      jordanTrack: 'Partnership review: Validate technical aspects of university and manufacturing partnerships.',
      deliverables: ['University collaboration framework established', 'Manufacturing partnership roadmap finalized', 'Local talent pipeline identified', 'Research collaboration opportunities expanded'],
      successMetrics: ['Partnership foundation strengthened', 'Long-term ecosystem relationships established', 'Demo Day prep complete']
    },
    {
      weekNumber: 23,
      dates: 'December 7-11, 2026',
      month: 'December',
      phase: 'Scale, Showcase & Graduation',
      topic: 'Pilot Pipeline Expansion Sprints & Demo Day',
      priority: 'Critical',
      hours: { adama: 45, jordan: 4 },
      technicalTrack: 'Showcase pilot results, localization progress, and manufacturing strategy. Collect investor feedback and identify next-step actions. Execute pilot pipeline expansion sprints.',
      relationshipTrack: 'Present Solar Sense Pro to investors, corporates, government representatives, and Plug and Play partners at Demo Day. Conduct one-on-one meetings with interested investors immediately following presentations.',
      jordanTrack: 'Demo Day support: Available for technical questions and investor discussions.',
      deliverables: ['Successful Demo Day presentation delivered', '8-10 investor and strategic partner follow-up meetings completed', 'New partnership opportunities identified', 'Investor interest and feedback documented', 'Pilot pipeline expansion targets advanced'],
      successMetrics: ['Demo Day milestone: Compelling presentation delivered', 'Strong investor and partner response']
    },
    {
      weekNumber: 24,
      dates: 'December 14-18, 2026',
      month: 'December',
      phase: 'Scale, Showcase & Graduation',
      topic: 'Flagship Demo Day Showcase & Graduation',
      priority: 'Critical',
      hours: { adama: 40, jordan: 6 },
      technicalTrack: 'Define fundraising milestones, pilot expansion targets, hiring priorities, and manufacturing objectives for the next 12 months.',
      relationshipTrack: 'Complete structured follow-up with all investors, partners, universities, and government contacts. Finalize Solar Sense Pro 12-month China operating plan and commercialization roadmap. Join Plug and Play alumni network and establish ongoing engagement with mentors and ecosystem partners.',
      jordanTrack: 'Strategic planning: Review 12-month roadmap, validate technical milestones, and establish post-program operating priorities.',
      deliverables: ['Post-program operating plan completed', 'Investor follow-up system implemented', 'China growth roadmap finalized', 'Alumni engagement plan established', '12-month operating plan completed'],
      successMetrics: ['Program complete', 'Clear path forward established', 'Launch readiness achieved']
    }
  ],

  relationships: {
    pnpCore: [
      {
        role: 'Program Lead',
        name: 'TBD',
        organization: 'Plug and Play China (Nantong Hub)',
        whyItMatters: 'Connects Solar Sense Pro to universities, research institutions, and government innovation programs; manages ecosystem introductions',
        sourcingPath: 'PnP intro',
        nextAction: 'Execute 1-on-1 alignment session in Week 1 to detail research partnership criteria',
        firstAsk: 'Connect us with universities, national laboratories, and renewable energy research centers',
        status: 'Intro pending'
      },
      {
        role: 'Operations Lead',
        name: 'Aboli',
        organization: 'Plug and Play China',
        whyItMatters: 'Manages local onboarding logistics, housing, local payment setups, and hub resource access',
        sourcingPath: 'Named in inputs',
        nextAction: 'Connect via WeChat to finalize apartment contracts and secure desk space allocations',
        firstAsk: 'Help identify bilingual cohort members to assist with university outreach and translation',
        status: 'Named in inputs'
      },
      {
        role: 'Corporate BD Lead',
        name: 'TBD',
        organization: 'Plug and Play China Partners Network',
        whyItMatters: 'Direct broker for matchmaking with research institutions, universities, and strategic partners',
        sourcingPath: 'PnP intro',
        nextAction: 'Deliver research-focused presentation in Week 4 ahead of matching sessions',
        firstAsk: 'Introduce us to professors, lab directors, and research institute administrators',
        status: 'Intro pending'
      },
      {
        role: 'Venture & Investor Lead',
        name: 'TBD',
        organization: 'Plug and Play China Venture Team',
        whyItMatters: 'Coordinates investor roundtables, evaluates fundraising readiness, and facilitates warm introductions',
        sourcingPath: 'PnP intro',
        nextAction: 'Present investor materials during Month 4 to prepare for Month 5 fundraising acceleration',
        firstAsk: 'Identify climate-tech VCs, strategic corporate investors, and government innovation funds',
        status: 'Intro pending'
      }
    ],
    researchPartners: [
      {
        role: 'University Research Laboratory Director',
        name: 'TBD',
        organization: 'Leading Chinese University - Renewable Energy Lab',
        whyItMatters: 'Provides research validation, academic credibility, and potential pilot deployment site',
        sourcingPath: 'PnP university network',
        nextAction: 'Present Solar Sense Pro during Week 6 matchmaking sessions',
        firstAsk: 'Deploy pilot installation on your outdoor test array for comparative research data',
        status: 'Unknown'
      },
      {
        role: 'National Laboratory Principal Investigator',
        name: 'TBD',
        organization: 'National Renewable Energy Research Institute',
        whyItMatters: 'Gateway to government-funded research programs and joint publication opportunities',
        sourcingPath: 'Government research network',
        nextAction: 'Conduct technical presentation during Week 11 research partnership expansion',
        firstAsk: 'Explore collaboration on photovoltaic monitoring research and joint grant applications',
        status: 'Unknown'
      },
      {
        role: 'Solar Testing Laboratory Manager',
        name: 'TBD',
        organization: 'Regional PV Testing and Certification Center',
        whyItMatters: 'Provides testing infrastructure, certification support, and industry connections',
        sourcingPath: 'Industry referral',
        nextAction: 'Schedule facility visit during Week 7 to explore pilot opportunities',
        firstAsk: 'Integrate Solar Sense Pro into your testing protocols for performance validation',
        status: 'Unknown'
      }
    ],
    manufacturing: [
      {
        role: 'Electronics Manufacturing Partner',
        name: 'TBD',
        organization: 'Yangtze River Delta EMS Provider',
        whyItMatters: 'Handles localized production, component sourcing, and manufacturing scale-up',
        sourcingPath: 'PnP intro',
        nextAction: 'Conduct manufacturing evaluation during Week 10',
        firstAsk: 'Provide manufacturing feasibility assessment and preliminary pricing for pilot-scale production',
        status: 'Unknown'
      },
      {
        role: 'Component Supply Chain Partner',
        name: 'TBD',
        organization: 'Regional Electronics Distributor',
        whyItMatters: 'Ensures local component availability and reduces cross-border logistics dependencies',
        sourcingPath: 'Supplier network',
        nextAction: 'Map BOM components during Week 3',
        firstAsk: 'Validate component availability and provide localized part numbers',
        status: 'Unknown'
      }
    ]
  },

  readinessChecklist: {
    marketDevelopment: [
      {
        id: 'market-1',
        description: '100+ Target Organizations Identified: Complete database of universities, research institutes, testing laboratories segmented with decision-makers',
        verification: 'China Market Opportunity Map with contacts and categorization',
        targetDate: 'Week 4 (July 27-31, 2026)',
        owner: 'Adama',
        completed: false
      },
      {
        id: 'market-2',
        description: 'Customer Discovery Complete: 20+ structured customer interviews with researchers, professors, and solar testing professionals',
        verification: 'Interview summaries and value proposition validation documentation',
        targetDate: 'Week 4 (July 27-31, 2026)',
        owner: 'Adama',
        completed: false
      },
      {
        id: 'market-3',
        description: 'Chinese Localization Complete: Chinese pitch deck, marketing materials, website content, and product documentation',
        verification: 'Complete Chinese-language collateral package',
        targetDate: 'Week 8 (August 24-28, 2026)',
        owner: 'Adama with translation support',
        completed: false
      }
    ],
    pilotDevelopment: [
      {
        id: 'pilot-1',
        description: '2-3 Pilot Agreements Signed: Formal agreements with universities or research institutions for Solar Sense Pro deployment',
        verification: 'Signed pilot agreements with research partners',
        targetDate: 'Week 8 (August 24-28, 2026)',
        owner: 'Adama',
        completed: false
      },
      {
        id: 'pilot-2',
        description: 'Active Pilot Deployments: 1-2 pilot installations operational at research sites collecting data',
        verification: 'Pilot site operational logs and data streams',
        targetDate: 'Week 9 (August 31 - September 4, 2026)',
        owner: 'Adama with Jordan review',
        completed: false
      },
      {
        id: 'pilot-3',
        description: 'Pilot Validation Report: Comprehensive performance report from pilot sites with user feedback',
        verification: 'China Market Validation Report with pilot data',
        targetDate: 'Week 12 (September 21-25, 2026)',
        owner: 'Adama with Jordan analysis',
        completed: false
      },
      {
        id: 'pilot-4',
        description: 'Research Partnerships Established: 3-5 university or lab collaborations for ongoing research',
        verification: 'Partnership agreements or collaboration frameworks',
        targetDate: 'Week 11 (September 14-18, 2026)',
        owner: 'Adama',
        completed: false
      }
    ],
    fundraising: [
      {
        id: 'fund-1',
        description: 'Investor Materials Complete: Bilingual pitch deck, executive summary, financial model, and data room',
        verification: 'Complete investor package with all required materials',
        targetDate: 'Week 16 (October 19-23, 2026)',
        owner: 'Adama with Jordan input',
        completed: false
      },
      {
        id: 'fund-2',
        description: 'Investor Pipeline Active: 75-100 target investors identified and 15-20 meetings completed',
        verification: 'Investor CRM with meeting logs and follow-up status',
        targetDate: 'Week 20 (November 16-20, 2026)',
        owner: 'Adama',
        completed: false
      },
      {
        id: 'fund-3',
        description: 'Due Diligence Processes: 2-3 active investor due diligence processes underway',
        verification: 'Due diligence request logs and responses documented',
        targetDate: 'Week 20 (November 16-20, 2026)',
        owner: 'Adama with Jordan support',
        completed: false
      }
    ],
    manufacturing: [
      {
        id: 'mfg-1',
        description: 'Manufacturing Partner Shortlist: 3-5 qualified Chinese manufacturing partners evaluated',
        verification: 'Manufacturing evaluation report with assessments',
        targetDate: 'Week 10 (September 7-11, 2026)',
        owner: 'Adama with Jordan technical review',
        completed: false
      },
      {
        id: 'mfg-2',
        description: 'Manufacturing Feasibility Confirmed: Technical and economic feasibility assessment completed',
        verification: 'Manufacturing feasibility report with pricing estimates',
        targetDate: 'Week 12 (September 21-25, 2026)',
        owner: 'Adama',
        completed: false
      },
      {
        id: 'mfg-3',
        description: 'Product Localization Complete: Chinese dashboard, documentation, and user interface validated',
        verification: 'Localized product tested with Chinese research users',
        targetDate: 'Week 10 (September 7-11, 2026)',
        owner: 'Adama with Jordan validation',
        completed: false
      }
    ],
    strategic: [
      {
        id: 'strat-1',
        description: 'Demo Day Success: Compelling Demo Day presentation delivered to investors and partners',
        verification: 'Demo Day completion with investor meeting logs',
        targetDate: 'Week 23 (December 7-11, 2026)',
        owner: 'Adama',
        completed: false
      }
    ]
  },

  milestones: {
    q3: {
      date: 'September 30, 2026',
      title: 'Q3 2026 - Manufacturing Kickoff & Market Validation',
      criteria: [
        {
          category: 'Market Development',
          target: '100+ target organizations',
          successCriteria: 'Complete database of universities, research institutes, and laboratories',
          completed: false
        },
        {
          category: 'Pilot Agreements',
          target: '2-3 pilot deployments',
          successCriteria: 'Signed agreements with research institutions for pilot installations',
          completed: false
        },
        {
          category: 'Product Localization',
          target: 'Chinese product ready',
          successCriteria: 'Dashboard, documentation, and marketing materials localized and validated',
          completed: false
        },
        {
          category: 'Manufacturing Kickoff',
          target: 'Manufacturing feasibility confirmed',
          successCriteria: '3-5 manufacturing partners evaluated and shortlisted',
          completed: false
        },
        {
          category: 'Market Validation',
          target: 'Product-market fit validated',
          successCriteria: 'China Market Validation Report completed with pilot feedback',
          completed: false
        }
      ]
    },
    q4: {
      date: 'December 31, 2026',
      title: 'Q4 2026 - Hardware Ingestion, Field Deployment & Graduation',
      criteria: [
        {
          category: 'Fundraising',
          target: '15-20 investor meetings',
          successCriteria: 'Active investor pipeline with multiple due diligence processes underway',
          completed: false
        },
        {
          category: 'Hardware Ingestion',
          target: 'Complete investor package',
          successCriteria: 'Bilingual pitch deck, financial model, data room, and China growth strategy',
          completed: false
        },
        {
          category: 'Research Partnerships',
          target: '3-5 university collaborations',
          successCriteria: 'Formal partnerships with leading Chinese research institutions',
          completed: false
        },
        {
          category: 'Manufacturing Partnership',
          target: 'Manufacturing roadmap finalized',
          successCriteria: 'Clear manufacturing strategy with partner relationships established',
          completed: false
        },
        {
          category: 'Demo Day',
          target: 'Successful Demo Day presentation',
          successCriteria: 'Compelling presentation delivered with strong investor and partner response',
          completed: false
        },
        {
          category: 'Post-Program Readiness',
          target: '12-month growth plan',
          successCriteria: 'Clear commercialization roadmap and operating plan for 2027',
          completed: false
        }
      ]
    }
  },

  keyDates: [
    { date: '2026-07-01', dateEnd: '2026-07-10', event: 'China Entry & Founder Orientation', type: 'Program', priority: 'Critical', location: 'Nantong' },
    { date: '2026-07-13', dateEnd: '2026-07-17', event: 'Shanghai Ecosystem Trip', type: 'Travel', priority: 'High', location: 'Shanghai' },
    { date: '2026-07-27', dateEnd: '2026-07-31', event: 'Wenzhou Business Trip', type: 'Travel', priority: 'High', location: 'Wenzhou' },
    { date: '2026-08-03', dateEnd: '2026-08-07', event: 'Market Entry & IP Workshop', type: 'Program', priority: 'Critical', location: 'Nantong' },
    { date: '2026-08-10', dateEnd: '2026-08-14', event: 'POC Kickoff & Corporate Matchmaking', type: 'Program', priority: 'Critical', location: 'Nantong' },
    { date: '2026-08-24', dateEnd: '2026-08-28', event: 'Business Model Validation Workshop', type: 'Program', priority: 'Critical', location: 'Nantong' },
    { date: '2026-09-30', dateEnd: '2026-09-30', event: 'Q3 Milestone Deadline', type: 'Milestone', priority: 'Critical', location: '—' },
    { date: '2026-10-05', dateEnd: '2026-10-09', event: 'Golden Week — Internal Validation & Bench Burn-In', type: 'Holiday', priority: '—', location: 'China (Nationwide)' },
    { date: '2026-10-19', dateEnd: '2026-10-23', event: 'Bilateral Presentation Tuning — Mock Investor Presentations', type: 'Fundraising', priority: 'High', location: 'Nantong' },
    { date: '2026-11-02', dateEnd: '2026-11-06', event: 'Fundraising Acceleration — Investor Roundtables', type: 'Fundraising', priority: 'Critical', location: 'Nantong' },
    { date: '2026-11-09', dateEnd: '2026-11-13', event: 'Closed-Door Investor Roundtables & Government Fund Meetings', type: 'Fundraising', priority: 'High', location: 'Nantong' },
    { date: '2026-12-07', dateEnd: '2026-12-11', event: 'PnP Demo Day', type: 'Program', priority: 'Critical', location: 'Nantong' },
    { date: '2026-12-14', dateEnd: '2026-12-18', event: 'Program Graduation & Alumni Integration', type: 'Program', priority: 'High', location: 'Nantong' },
    { date: '2026-12-31', dateEnd: '2026-12-31', event: 'Q4 Milestone Deadline', type: 'Milestone', priority: 'Critical', location: '—' }
  ],

  glossary: {
    'BOM': { full: 'Bill of Materials', definition: 'Complete list of raw materials, components, and assemblies required to manufacture a product' },
    'DFA': { full: 'Design for Assembly', definition: 'Engineering practice optimizing product design for ease of manufacturing' },
    'DFM': { full: 'Design for Manufacturing', definition: 'Engineering practice ensuring a design can be reliably manufactured' },
    'EMS': { full: 'Electronic Manufacturing Service', definition: 'Third-party company that provides electronics manufacturing services' },
    'EPC': { full: 'Engineering, Procurement, and Construction', definition: 'Companies that design, procure equipment for, and construct solar facilities' },
    'Gerber': { full: 'Gerber Files', definition: 'Standard file format for printed circuit board (PCB) design data' },
    'NETDA': { full: 'Nantong Economic and Technological Development Area', definition: 'Government-managed industrial development zone in Nantong' },
    'NHIZ': { full: 'Nantong Hi-Tech Industrial Zone', definition: 'Technology-focused industrial park in Nantong' },
    'NID': { full: 'Nantong Industrial District', definition: 'General industrial development area in Nantong' },
    'PCBA': { full: 'Printed Circuit Board Assembly', definition: 'The process of soldering or assembly of electronic components to a PCB' },
    'PI': { full: 'Principal Investigator', definition: 'Lead researcher of a laboratory or research project' },
    'PnP': { full: 'Plug and Play', definition: 'Global innovation platform and venture capital firm' },
    'POC': { full: 'Proof of Concept', definition: 'Demonstration to verify that certain concepts have the potential for real-world application' },
    'RFQ': { full: 'Request for Quotation', definition: 'Business process in which a company solicits quotes from suppliers' }
  },

  contacts: {
    aboli: {
      name: 'Aboli',
      role: 'Operations Lead, Plug and Play China',
      communication: 'WeChat',
      responsibilities: 'Local logistics, housing, hub resource access, translation support sourcing'
    },
    jordan: {
      name: 'Jordan',
      role: 'Technical Lead (US-based)',
      communication: 'Notion workspace',
      responsibilities: 'Architecture sign-offs, DFM feedback, system logs review, firmware validation'
    },
    pnp: {
      organization: 'Plug and Play China - Nantong Hub',
      location: 'Nantong, Jiangsu Province, China',
      program: 'Cross-Border Acceleration Camp - Summer Cohort 2026'
    }
  },

  roadmapPhases: [
    {
      id: 1,
      month: 'July',
      tag: 'Phase 1',
      title: 'Land & Launch',
      lead: 'Establish Solar Sense Pro China Presence & Research Market Mapping',
      outcome: 'Identify 100 target organizations (universities, research labs)',
      weeks: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      weekRange: '1-4',
      deliverables: [
        'Solar Sense Pro operational in Nantong with WFOE registration underway',
        'China Market Opportunity Map completed',
        '100 target organizations identified',
        'Chinese marketing materials and pitch deck',
        'Initial manufacturing prospect list (15-20 partners)'
      ],
      criticalMilestone: 'Week 4: Market opportunity map & university pipeline established',
      keyActivities: [
        'Complete Plug and Play founder onboarding and ecosystem mapping',
        'Build market opportunity framework targeting research institutions',
        'Conduct 15-20 customer discovery interviews',
        'Localize product positioning for academic market',
        'Identify initial manufacturing partners'
      ]
    },
    {
      id: 2,
      month: 'August',
      tag: 'Phase 2',
      title: 'Market Entry',
      lead: 'Secure Pilot Partnerships & Validate Go-to-Market',
      outcome: 'Secure 2-3 pilot agreements with research institutions',
      weeks: ['Week 5', 'Week 6', 'Week 7', 'Week 8'],
      weekRange: '5-8',
      deliverables: [
        '2-3 signed pilot agreements',
        '1-2 active pilot deployments initiated',
        'China business model validated',
        'Manufacturing partner shortlist (3-5 partners)',
        'Product localization roadmap'
      ],
      criticalMilestone: 'Week 6: First pilot LOIs signed during POC Kickoff',
      keyActivities: [
        'Present at POC Kickoff and corporate matchmaking events',
        'Negotiate pilot terms with research partners',
        'Validate business model for Chinese market',
        'Assess manufacturing feasibility',
        'Launch initial pilot testing'
      ]
    },
    {
      id: 3,
      month: 'September',
      tag: 'Phase 3',
      title: 'Manufacturing Kickoff',
      lead: 'Execute Pilots, Localize Product & Validate Manufacturing',
      outcome: 'Evidence that Solar Sense Pro works in China and can be manufactured locally',
      weeks: ['Week 9', 'Week 10', 'Week 11', 'Week 12'],
      weekRange: '9-12',
      deliverables: [
        'China Market Validation Report',
        'Chinese dashboard and documentation',
        'Manufacturing evaluation completed',
        '3-5 new research partnership opportunities',
        'Product-market fit documented'
      ],
      criticalMilestone: 'Week 12: Market validation report demonstrates research demand',
      keyActivities: [
        'Execute pilot installations at research sites',
        'Translate dashboard and materials to Chinese',
        'Evaluate manufacturing partners and supply chain',
        'Expand research partnership network',
        'Collect structured customer feedback'
      ]
    },
    {
      id: 4,
      month: 'October',
      tag: 'Phase 4',
      title: 'Hardware Ingestion',
      lead: 'Build Investment Case & Investor-Ready Materials',
      outcome: 'Convert pilot results and market traction into investor-ready materials',
      weeks: ['Week 13', 'Week 14', 'Week 15', 'Week 16'],
      weekRange: '13-16',
      deliverables: [
        'Bilingual investor pitch deck (EN/CN)',
        'Five-year financial model',
        'Executive summary and data room',
        'Target investor database (75-100 investors)',
        'China growth strategy'
      ],
      criticalMilestone: 'Week 16: Investor materials validated and outreach initiated',
      keyActivities: [
        'Develop fundraising strategy and investment thesis',
        'Build financial model with unit economics during Golden Week',
        'Create bilingual investor materials',
        'Organize secure due diligence data room',
        'Conduct mock presentations with mentors'
      ]
    },
    {
      id: 5,
      month: 'November',
      tag: 'Phase 5',
      title: 'Field Deployment',
      lead: 'Active Fundraising & Strategic Capital Engagement',
      outcome: '15-20 investor meetings with active pipeline and due diligence',
      weeks: ['Week 17', 'Week 18', 'Week 19', 'Week 20'],
      weekRange: '17-20',
      deliverables: [
        '15-20 investor meetings completed',
        'Active fundraising pipeline managed',
        'Multiple due diligence processes initiated',
        'Government funding opportunities identified',
        'Strategic investor relationships established'
      ],
      criticalMilestone: 'Week 20: Multiple investors in active due diligence',
      keyActivities: [
        'Structure regional ecosystem for scale',
        'Conduct one-on-one VC and strategic investor meetings',
        'Engage government investment funds',
        'Respond to due diligence requests',
        'Scale commercial pipeline based on validated demand'
      ]
    },
    {
      id: 6,
      month: 'December',
      tag: 'Phase 6',
      title: 'Scale, Showcase & Graduation',
      lead: 'Demo Day Execution & Post-Program Planning',
      outcome: 'Successful graduation with sustainable China operating strategy',
      weeks: ['Week 21', 'Week 22', 'Week 23', 'Week 24'],
      weekRange: '21-24',
      deliverables: [
        'Successful Demo Day presentation',
        '3-5 university partnerships formalized',
        'Manufacturing partner finalized',
        '12-month growth plan',
        'Alumni network integration'
      ],
      criticalMilestone: 'Week 23: Demo Day presentation to investors and partners',
      keyActivities: [
        'Harden supply chain and optimize scale contracts',
        'Establish university collaboration frameworks',
        'Deliver Demo Day pitch and follow-up meetings',
        'Build 12-month commercialization roadmap',
        'Join Plug and Play alumni network'
      ]
    }
  ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = executionPlan;
}
