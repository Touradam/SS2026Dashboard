// Solar Sense Pro - China Launch Execution Plan Data
// Extracted from china-launch-execution-plan.md

const executionPlan = {
  timeline: {
    startDate: '2026-07-01',
    endDate: '2026-12-31',
    totalWeeks: 26,
    totalMonths: 6,
    totalPhases: 6
  },

  monthlyObjectives: [
    {
      month: 'July',
      focus: 'Commercial Pipeline Seeding & Baseline Sourcing',
      pilotGoal: 'Build pipeline of 15 target partners',
      manufacturingGoal: 'Source pool of 5 EMS partners',
      criticalDeliverable: 'Operational Notion workspace'
    },
    {
      month: 'August',
      focus: 'On-Site Manufacturing Audits & Pilot Commitment Closure',
      pilotGoal: 'Secure 3 formal pilot agreements',
      manufacturingGoal: 'Narrow to 2 top candidates, conduct audits',
      criticalDeliverable: 'Signed pilot deployment contract'
    },
    {
      month: 'September',
      focus: 'Low-Volume Production Run & Site Readiness',
      pilotGoal: 'Finalize site preparation parameters',
      manufacturingGoal: 'Kick off 10-50 unit production run',
      criticalDeliverable: 'Hardware bring-up guide'
    },
    {
      month: 'October',
      focus: 'Hardware Ingestion, Testing & Logistics Clearance',
      pilotGoal: 'Pre-installation inspections',
      manufacturingGoal: 'Ingest and validate 10-50 unit batch',
      criticalDeliverable: 'Production batch validated'
    },
    {
      month: 'November',
      focus: 'Field Deployment & Active Data Acquisition',
      pilotGoal: 'Deploy live installation',
      manufacturingGoal: 'Lock pricing for 100-500+ units',
      criticalDeliverable: 'Live telemetry stream active'
    },
    {
      month: 'December',
      focus: 'Pipeline Expansion & Strategic Hand-Off',
      pilotGoal: 'Secure 2 additional Q1 2027 pilots',
      manufacturingGoal: 'Freeze production playbook',
      criticalDeliverable: 'Launch readiness certified'
    }
  ],

  weeks: [
    // July 2026
    {
      weekNumber: 1,
      dates: 'July 1-10, 2026',
      month: 'July',
      phase: 'Pipeline Seeding',
      topic: 'China Entry & Founder Orientation',
      priority: 'Critical',
      hours: { adama: 32, jordan: 4 },
      technicalTrack: 'Stand up the streamlined Notion workspace. Index all hardware schematics, pin configurations, and firmware boundaries for the current Solar Sense Pro design.',
      relationshipTrack: 'Onboard with Aboli and the PnP Program Lead. Pitch the Solar Sense Pro target profile to the PnP team during 1-on-1 sessions to seed the upcoming matching pipeline. Attend the Kickoff Roadshow to connect with NETDA, NID, and NHIZ officials.',
      jordanTrack: 'Weekly alignment check: baseline the Notion task parameters, confirm communication windows, and finalize document handling rules.',
      deliverables: ['Operational Notion workspace layout', 'Completed PnP onboarding profiling sheets'],
      successMetrics: ['100% of core technical baseline documents indexed', 'Early target requirements delivered to the PnP program lead']
    },
    {
      weekNumber: 2,
      dates: 'July 13-17, 2026',
      month: 'July',
      phase: 'Pipeline Seeding',
      topic: 'Legal, Financial & Operational Setup',
      priority: 'High',
      hours: { adama: 40, jordan: 3 },
      technicalTrack: 'Map the hardware Bill of Materials (BOM) to cross-reference component availability via local distributors. Highlight parts vulnerable to localized lead times.',
      relationshipTrack: 'Attend banking and taxation workshops to clear regulatory operational steps. Participate in Shanghai Business Trip to network with Yangtze River Delta innovation stakeholders and source early manufacturing leads.',
      jordanTrack: 'Asynchronous review: check localized component recommendations and sign off on alternative part tolerances via Notion.',
      deliverables: ['Preliminary localized component tracking database', 'Local bank setup documents'],
      successMetrics: ['Corporate banking infrastructure activated', 'Initial list of 3 potential regional component distributors established']
    },
    {
      weekNumber: 3,
      dates: 'July 20-24, 2026',
      month: 'July',
      phase: 'Pipeline Seeding',
      topic: 'Talent Access & Government Incentives',
      priority: 'Critical',
      hours: { adama: 30, jordan: 5 },
      technicalTrack: 'Group the localized BOM components into specific sourcing packages (PCBA, mechanical enclosure, terminal connectors). Prepare clean RFQ templates.',
      relationshipTrack: 'Interface with Technology Department officials during PnP grant workshops to assess regional test-bed availability. Ask the PnP Corporate BD Lead for a list of 5 small-to-mid-scale turnkey EMS providers located in the Jiangsu/Yangtze River Delta region.',
      jordanTrack: 'Design review: check connector footprints and mechanical tolerances to ensure compatibility with standard Chinese laboratory and industrial solar infrastructure.',
      deliverables: ['Production-ready RFQ package drafted in English and Chinese', 'Policy-matching log in Notion'],
      successMetrics: ['5 regional EMS manufacturing targets identified and logged with clear warm-introduction paths via PnP']
    },
    {
      weekNumber: 4,
      dates: 'July 27-31, 2026',
      month: 'July',
      phase: 'Pipeline Seeding',
      topic: 'Ecosystem Integration & POC Preparation',
      priority: 'High',
      hours: { adama: 42, jordan: 4 },
      technicalTrack: 'Configure firmware data-handling parameters to allow for complete offline operation or direct local server communication. Bypass external cloud dependencies for operation inside the Great Firewall.',
      relationshipTrack: 'Use the guided city tour and Wenzhou Business Trip to engage local business stakeholders. Work with PnP advisors and bilingual cohort members to adapt the Solar Sense Pro presentation deck for Chinese commercial buyers (EPCs, developers, and operators).',
      jordanTrack: 'Code review: verify the firmware\'s offline telemetry storage buffer sizes to prevent data loss inside the Great Firewall.',
      deliverables: ['Localized dual-language pitch deck focused on commercial validation', 'Updated offline firmware branch'],
      successMetrics: ['Commercial pitch presentation vetted by at least one native-speaking PnP advisor or cohort peer']
    },
    // August 2026
    {
      weekNumber: 5,
      dates: 'August 3-7, 2026',
      month: 'August',
      phase: 'Audits & Commitments',
      topic: 'From Technology to Real Use Cases',
      priority: 'Critical',
      hours: { adama: 34, jordan: 4 },
      technicalTrack: 'Standardize an engineering evaluation matrix in Notion to grade potential manufacturing partners across quality, scale flexibility, and component access.',
      relationshipTrack: 'Attend the Market Entry and IP Workshops. Present the finalized RFQ package to the PnP Corporate BD team to initiate warm supplier introductions. Screen the PnP network for local solar EPC firms, commercial operators, and research labs.',
      jordanTrack: 'Monthly review: evaluate July\'s pipeline progress, adjust target timelines, and approve the initial hardware fabrication budget.',
      deliverables: ['Finalized EMS Evaluation Rubric', 'Active Pilot Target Pipeline tracking sheet populated with 10+ entry rows in Notion'],
      successMetrics: ['3 target EMS partners engaged with active RFQs', '5 qualified pilot target organizations entered into the CRM funnel']
    },
    {
      weekNumber: 6,
      dates: 'August 10-14, 2026',
      month: 'August',
      phase: 'Audits & Commitments',
      topic: 'POC Kickoff & Corporate Matchmaking',
      priority: 'Critical',
      hours: { adama: 45, jordan: 5 },
      technicalTrack: 'Consolidate initial quotation responses, lead-time estimates, and component flags returned by the engaged manufacturing suppliers.',
      relationshipTrack: 'Pitch Solar Sense Pro at the flagship matchmaking event to corporate energy partners, industrial park representatives, and regional developers. Conduct private, 1-on-1 closed-door matchmaking sessions to source pilot sites.',
      jordanTrack: 'Asynchronous technical feedback: review manufacturing feedback and address vendor component substitution concerns via Notion.',
      deliverables: ['Matchmaking interaction summary', 'Initial manufacturing quotation comparison ledger in Notion'],
      successMetrics: ['At least 3 face-to-face pilot site leads advanced to formal proposal stages', '2 target EMS partners shortlisted for physical site audits']
    },
    {
      weekNumber: 7,
      dates: 'August 17-21, 2026',
      month: 'August',
      phase: 'Audits & Commitments',
      topic: 'Negotiations, Go-to-Market & Pilot Testing',
      priority: 'High',
      hours: { adama: 38, jordan: 3 },
      technicalTrack: 'Prepare a localized field testing protocol document mapping out safety parameters, mounting constraints, and grounding verifications for pilot installations.',
      relationshipTrack: 'Run active negotiations with shortlisted pilot partners, utilizing PnP bilingual support to define the scope of the field deployment. Join the regional industrial business trip to explore broader commercial solar operator networks.',
      jordanTrack: 'Asynchronous review: check safety and shutdown response parameters against regional electrical standards.',
      deliverables: ['Standardized Field Pilot Agreement template', 'Localized Installation Safety Checklist'],
      successMetrics: ['2 formal pilot deployment agreements advanced to the final signature phase with regional commercial or academic partners']
    },
    {
      weekNumber: 8,
      dates: 'August 24-28, 2026',
      month: 'August',
      phase: 'Audits & Commitments',
      topic: 'Business Model Validation & Deal Closing',
      priority: 'Critical',
      hours: { adama: 46, jordan: 6 },
      technicalTrack: 'Finalize structural layout optimizations for Solar Sense Pro based on the physical terminal box parameters observed in regional corporate partner data sheets.',
      relationshipTrack: 'Attend business model validation sessions to refine localized pricing structures. Finalize partnership terms and secure signed deployment contracts with primary pilot hosts. Run an on-site factory audit at the highest-rated EMS candidate facility (Full-Day Site Visit).',
      jordanTrack: 'Technical sign-off: execute the definitive design freeze for the 10 to 50 unit low-volume production batch.',
      deliverables: ['Signed Pilot Deployment Contract (Minimum of 1, Target of 2+)', 'Completed EMS Site Audit Report'],
      successMetrics: ['At least 1 binding pilot agreement signed with an operator, EPC, or lab', 'EMS partner validated and cleared for assembly']
    },
    // September 2026
    {
      weekNumber: 9,
      dates: 'August 31 - September 4, 2026',
      month: 'September',
      phase: 'Production Kickoff',
      topic: 'Month 3 Transition — Localization & Validation',
      priority: 'Critical',
      hours: { adama: 35, jordan: 5 },
      technicalTrack: 'Deliver production Gerber files, localized BOM components, and assembly specifications to the contracted EMS partner. Kick off the 10 to 50 unit manufacturing run.',
      relationshipTrack: 'Coordinate with the signed pilot host\'s engineering point person to map out physical mounting constraints and data-access parameters at the deployment site.',
      jordanTrack: 'Asynchronous tracking: monitor the factory floor\'s incoming component quality logs and design-for-assembly (DFA) inquiries.',
      deliverables: ['Open purchase order for the 10 to 50 unit production batch', 'Site Readiness Log in Notion'],
      successMetrics: ['Manufacturing run approved and scheduled by the EMS partner', 'Site parameters mapped']
    },
    {
      weekNumber: 10,
      dates: 'September 7-11, 2026',
      month: 'September',
      phase: 'Production Kickoff',
      topic: 'Deep POC Execution — Supply Chain Integration',
      priority: 'Medium',
      hours: { adama: 28, jordan: 8 },
      technicalTrack: 'Build a localized hardware bring-up and calibration checklist in Notion covering power rail verification, sensor gain adjustment, and flashing routines.',
      relationshipTrack: 'Maintain regular contact with the EMS facility production manager to monitor progress and build a long-term supply relationship.',
      jordanTrack: 'Hardware bring-up documentation: create a step-by-step video guide showing how to flash, calibrate, and test the platform using basic bench gear.',
      deliverables: ['Localized Hardware Bring-up & Verification Guide logged in Notion'],
      successMetrics: ['100% of the validation procedures documented, allowing Adama to execute testing independently at the PnP hub']
    },
    {
      weekNumber: 11,
      dates: 'September 14-18, 2026',
      month: 'September',
      phase: 'Production Kickoff',
      topic: 'Localized Software & Integration Validation',
      priority: 'High',
      hours: { adama: 32, jordan: 4 },
      technicalTrack: 'Configure localized user interface dashboards and test data telemetry pipelines inside the Great Firewall. Verify error-free communication with local receivers.',
      relationshipTrack: 'Update the PnP program lead on manufacturing progress to clear space within the hub\'s lab testing benches for incoming hardware.',
      jordanTrack: 'Firmware review: check the integration of localized data telemetry profiles and calibration math variables.',
      deliverables: ['Validated local UI dashboard', 'Active data ingestion channel on a local server instance'],
      successMetrics: ['Software telemetry verified to transmit data points within local network environments without dropped packets']
    },
    {
      weekNumber: 12,
      dates: 'September 21-25, 2026',
      month: 'September',
      phase: 'Production Kickoff',
      topic: 'Pre-Installation Site Preparation',
      priority: 'High',
      hours: { adama: 36, jordan: 5 },
      technicalTrack: 'Formulate the physical installation kit list (enclosures, outdoor-rated cable extensions, quick-disconnect couplings, terminal blocks) to match the selected pilot site.',
      relationshipTrack: 'Execute a physical walk-through and site parameter check at the confirmed pilot installation yard (Full-Day Site Visit). Coordinate directly with the site team to finalize the deployment window.',
      jordanTrack: 'Monthly review: evaluate September\'s low-volume production metrics, check the Q3 milestone completion state, and authorize October field integration assets.',
      deliverables: ['Q3 Strategic Milestone Performance Report', 'Signed Site Readiness Sign-off Sheet'],
      successMetrics: ['Physical pilot installation site verified as structurally and electrically ready for hardware integration']
    },
    // October 2026
    {
      weekNumber: 13,
      dates: 'September 28 - October 2, 2026',
      month: 'October',
      phase: 'Hardware Validation',
      topic: 'Month 4 Transition — Investor Readiness',
      priority: 'Critical',
      hours: { adama: 40, jordan: 4 },
      technicalTrack: 'Ingest the physical 10 to 50 unit production batch from the EMS partner. Unbox, catalog, and log the physical condition of all boards within the central Notion inventory module.',
      relationshipTrack: 'Invite the EMS production manager and senior engineers for a feedback review to debrief on assembly challenges. Discuss upcoming 100 to 500 unit scaling dynamics.',
      jordanTrack: 'Asynchronous support: review initial unboxing photography and stand by to cross-check any manufacturing quality anomalies.',
      deliverables: ['Production Batch Ingestion Log', 'Initial Manufacturing Yield Summary'],
      successMetrics: ['100% of manufactured units cataloged with serial numbers', 'Manufacturing yield metrics documented in Notion']
    },
    {
      weekNumber: 14,
      dates: 'October 5-9, 2026',
      month: 'October',
      phase: 'Hardware Validation',
      topic: 'National Holiday Week (Golden Week) — Internal Validation & Bench Burn-In',
      priority: 'Critical',
      hours: { adama: 30, jordan: 8 },
      technicalTrack: 'Set up a multi-unit testing array at the PnP hub workspace. Execute the localized bring-up checklist across the batch: flash firmware, check power rails, and verify base current/voltage sensing operation.',
      relationshipTrack: 'None (National Holiday closures across external offices and factories). Focus entirely on internal technical execution.',
      jordanTrack: 'Active asynchronous engineering support: audit early telemetry calibration logs uploaded by Adama. Provide remote debugging instructions for outlier boards.',
      deliverables: ['Batch Functional Testing Database', 'Serialized calibration logs'],
      successMetrics: ['At least 10 individual hardware units fully flashed, calibrated, and functionally validated on the test bench']
    },
    {
      weekNumber: 15,
      dates: 'October 12-16, 2026',
      month: 'October',
      phase: 'Hardware Validation',
      topic: 'Investor Materials & Growth Narrative Refinement',
      priority: 'High',
      hours: { adama: 34, jordan: 4 },
      technicalTrack: 'Subject the verified hardware batch to a continuous 72-hour automated load burn-in run to trigger and filter out infant mortality failures before field deployment.',
      relationshipTrack: 'Meet with PnP financial advisors to structure a multi-tier manufacturing economic roadmap tailored for commercial investors.',
      jordanTrack: 'Asynchronous review: analyze continuous long-run sensor data streams to identify parametric drift or thermal performance issues under load.',
      deliverables: ['Multi-Tier Economic Strategy Model (covering cost metrics across 10, 100, and 1,000+ unit runs)', 'Hardware Burn-In Stability Report'],
      successMetrics: ['At least 5 units completely clear the continuous stress testing run with zero component failures, certified ready for deployment']
    },
    {
      weekNumber: 16,
      dates: 'October 19-23, 2026',
      month: 'October',
      phase: 'Hardware Validation',
      topic: 'Bilateral Presentation Tuning',
      priority: 'High',
      hours: { adama: 32, jordan: 3 },
      technicalTrack: 'Assemble complete, outdoor-rated Pilot Installation Kits, enclosing verified boards into protective housings paired with matched terminal cabling.',
      relationshipTrack: 'Work alongside native-speaking cohort partners and PnP advisors to adapt the commercial growth narrative into a clear, data-backed pitch presentation.',
      jordanTrack: 'Narrative alignment: confirm that the technical performance boundaries, safety ratings, and diagnostic accuracy values shown in the deck match verified laboratory test logs.',
      deliverables: ['Finalized Dual-Language Commercial Pitch Presentation', 'Complete Pilot Installation Kits staged for transit'],
      successMetrics: ['Pitch presentation cleared of language anomalies by native-speaking industry peers', 'Kits packed']
    },
    {
      weekNumber: 17,
      dates: 'October 26-30, 2026',
      month: 'October',
      phase: 'Hardware Validation',
      topic: 'Regional Ecosystem Structuring',
      priority: 'Critical',
      hours: { adama: 35, jordan: 5 },
      technicalTrack: 'Run a pre-deployment loop check on the kitted pilot hardware to confirm the firmware\'s offline data-logging fail-safes are active.',
      relationshipTrack: 'Connect with local incubator or industrial park managers via PnP introductions to evaluate post-program landing opportunities. Present the economic roadmap to the PnP Investor Lead for feedback.',
      jordanTrack: 'Monthly review: evaluate October\'s hardware validation runs, finalize November\'s installation scheduling, and approve on-site integration configurations.',
      deliverables: ['Monthly Performance Variance Audit', 'Finalized Field Deployment Work Plan'],
      successMetrics: ['Final approval secured from the pilot site team for the upcoming field installation window']
    },
    // November 2026
    {
      weekNumber: 18,
      dates: 'November 2-6, 2026',
      month: 'November',
      phase: 'Field Deployment',
      topic: 'Month 5 Transition — Fundraising Acceleration',
      priority: 'Critical',
      hours: { adama: 45, jordan: 6 },
      technicalTrack: 'Transport hardware kits to the primary deployment yard. Install Solar Sense Pro onto the active photovoltaic infrastructure following the localized installation checklist (Full-Day On-Site Deployment).',
      relationshipTrack: 'Execute the physical installation in cooperation with the host site\'s operations staff, building deep rapport with the field engineering crew. Participate in initial PnP investor roundtable events.',
      jordanTrack: 'Standby remote technical coverage: remain online during the installation window to review early over-the-air parameter checks.',
      deliverables: ['Field Installation Log', 'Active live site monitoring stream initialized in Notion'],
      successMetrics: ['At least 1 Solar Sense Pro monitoring node physically mounted, electrically integrated, and actively running on a live system in China']
    },
    {
      weekNumber: 19,
      dates: 'November 9-13, 2026',
      month: 'November',
      phase: 'Field Deployment',
      topic: 'Closed-Door Investor Roundtables & Field Validation',
      priority: 'High',
      hours: { adama: 34, jordan: 5 },
      technicalTrack: 'Monitor incoming telemetry streams from the live site (current, voltage, temperature, diagnostic flags). Cross-reference the data points against local weather and system tracking metrics.',
      relationshipTrack: 'Pitch Solar Sense Pro\'s real-world field validation metrics to venture capital partners and investment representatives during private PnP roundtables.',
      jordanTrack: 'Asynchronous telemetry audit: run performance evaluations on the live field data to verify current/voltage tracking precision under variable environmental conditions.',
      deliverables: ['Initial Field Telemetry Analysis Report', 'Localized investment interest tracker'],
      successMetrics: ['5 continuous days of clean data ingestion captured and archived inside the Notion platform']
    },
    {
      weekNumber: 20,
      dates: 'November 16-20, 2026',
      month: 'November',
      phase: 'Field Deployment',
      topic: 'Commercial Pipeline Scaling',
      priority: 'Critical',
      hours: { adama: 36, jordan: 4 },
      technicalTrack: 'Implement localized dashboard interface refinements based on direct feedback and visibility choices requested by the active pilot host\'s engineering team.',
      relationshipTrack: 'Leverage the active, data-producing China site installation as live leverage. Invite secondary pipeline prospects (EPCs, developers) to review the live dashboard data during follow-up meetings.',
      jordanTrack: 'Software optimization: refine analytics data parsing algorithms to optimize memory consumption on the local server container.',
      deliverables: ['Refined User Dashboard (v1.1)', 'Secondary pilot proposal letters dispatched'],
      successMetrics: ['Telemetry data successfully packaged into active sales collateral to drive pipeline conversions']
    },
    {
      weekNumber: 21,
      dates: 'November 23-27, 2026',
      month: 'November',
      phase: 'Field Deployment',
      topic: 'Supply Chain Hardening & Scale Contract Optimization',
      priority: 'High',
      hours: { adama: 38, jordan: 6 },
      technicalTrack: 'Refine the hardware design documentation to incorporate assembly insights from October\'s run. Create a finalized package optimized for larger-scale production.',
      relationshipTrack: 'Convene with the primary EMS provider to negotiate structured pricing, lead-time guarantees, and component buffers across 100 to 500 unit and 1,000+ unit commercial scales.',
      jordanTrack: 'Monthly review: evaluate live system data, analyze EMS scale pricing tiers, and sign off on the definitive production design files.',
      deliverables: ['Finalized High-Volume Production Design Archive', 'Validated Scale Pricing Contract Agreement draft'],
      successMetrics: ['Written manufacturing pricing structures locked and documented for multi-tier scaling paths']
    },
    // December 2026
    {
      weekNumber: 22,
      dates: 'November 30 - December 4, 2026',
      month: 'December',
      phase: 'Scale & Graduation',
      topic: 'Month 6 Transition — Demo Day & Graduation Prep',
      priority: 'High',
      hours: { adama: 35, jordan: 4 },
      technicalTrack: 'Compile a comprehensive field performance report covering the first 3 weeks of active live-site operations. Detail energy safety, diagnostic accuracy, and hardware reliability.',
      relationshipTrack: 'Work alongside PnP presentation advisors to integrate the live field data and multi-tier manufacturing agreements into a high-impact Demo Day pitch.',
      jordanTrack: 'Data verification: audit the cumulative field telemetry records to verify the platform\'s diagnostic performance claims.',
      deliverables: ['Solar Sense Pro Field Performance Report', 'Finalized Demo Day presentation asset files'],
      successMetrics: ['21 days of continuous, uninterrupted field monitoring data captured and compiled into the commercial presentation']
    },
    {
      weekNumber: 23,
      dates: 'December 7-11, 2026',
      month: 'December',
      phase: 'Scale & Graduation',
      topic: 'Pilot Pipeline Expansion Sprints',
      priority: 'High',
      hours: { adama: 38, jordan: 3 },
      technicalTrack: 'Maintain data monitoring on the primary pilot node while packaging a second hardware kit for a secondary expansion deployment.',
      relationshipTrack: 'Execute follow-up verification pitches to secondary pipeline candidates. Use the field performance report to convert leads into committed Q1 2027 pilot sites.',
      jordanTrack: 'Asynchronous technical oversight: review secondary site installation layouts and confirm system parameter limits.',
      deliverables: ['Pipeline Conversion Dashboard', 'Updated Q1 2027 Deployment Strategy roadmap'],
      successMetrics: ['At least 2 additional qualified pilot organizations committed to hardware integration for Q1 2027']
    },
    {
      weekNumber: 24,
      dates: 'December 14-18, 2026',
      month: 'December',
      phase: 'Scale & Graduation',
      topic: 'Flagship Demo Day Showcase',
      priority: 'Critical',
      hours: { adama: 40, jordan: 4 },
      technicalTrack: 'Ensure stable, live, real-time data connectivity between the active field installation site and the presentation screens at the PnP graduation venue.',
      relationshipTrack: 'Present Solar Sense Pro at the final PnP Demo Day to cross-border investors, corporate energy partners, and government leaders. Collect and organize follow-up contacts during post-presentation networking sessions.',
      jordanTrack: 'Asynchronous infrastructure support: monitor server performance during live demo presentation windows.',
      deliverables: ['Executed Demo Day Presentation', 'Centralized Lead Tracking Database populated with graduation contacts'],
      successMetrics: ['High-impact pitch delivery', 'At least 3 high-value investor or corporate follow-up requests secured and logged']
    },
    {
      weekNumber: 25,
      dates: 'December 21-25, 2026',
      month: 'December',
      phase: 'Scale & Graduation',
      topic: 'Post-Camp Ecosystem Integration & Operational Hand-off',
      priority: 'High',
      hours: { adama: 30, jordan: 5 },
      technicalTrack: 'Package all regional component supply logs, factory test parameters, and firmware deployment steps into a repeatable localized manufacturing playbook in Notion.',
      relationshipTrack: 'Distribute formal follow-up messages and thank-you notes to all key program contacts, advisors, the EMS team, and pilot hosts to cement the local support network.',
      jordanTrack: 'Technical handover review: audit the completed manufacturing playbook to ensure clear documentation of all specialized production knowledge.',
      deliverables: ['Localized Manufacturing Playbook', 'Post-Camp Ecosystem Network Register'],
      successMetrics: ['100% of the active supplier and ecosystem paths documented with role-based responsibilities in Notion']
    },
    {
      weekNumber: 26,
      dates: 'December 28 - January 1, 2027',
      month: 'December',
      phase: 'Scale & Graduation',
      topic: 'Definitive Launch Readiness Audit & Sign-Off',
      priority: 'Critical',
      hours: { adama: 24, jordan: 4 },
      technicalTrack: 'Run a comprehensive performance check across the live pilot system to verify steady-state sensor metrics and safe operation under load.',
      relationshipTrack: 'Confirm post-program communication cadences with local pilot hosts, EMS partners, and advisory contacts to maintain momentum into Q1 2027.',
      jordanTrack: 'Definitive Launch Readiness Sign-off: run a final evaluation of the Notion workspace, review manufacturing economics, and transition day-to-day project execution entirely to Adama\'s localized framework.',
      deliverables: ['Completed Solar Sense Pro Launch Readiness Checklist', 'Signed Q4 Milestone Performance Document'],
      successMetrics: ['100% completion across all operational tracks, establishing a credible, validated market-ready position']
    }
  ],

  relationships: {
    pnpCore: [
      {
        role: 'Program Lead',
        name: 'TBD',
        organization: 'Plug and Play China (Nantong Hub)',
        whyItMatters: 'Connects the team to regional industrial parks, handles program evaluations, and acts as the primary link for ecosystem introductions',
        sourcingPath: 'PnP intro',
        nextAction: 'Execute 1-on-1 alignment session in Week 1 to detail pilot pipeline criteria',
        firstAsk: 'Connect us with the corporate partnerships team to pinpoint regional solar EPCs and developers',
        status: 'Intro pending'
      },
      {
        role: 'Operations Lead',
        name: 'Aboli',
        organization: 'Plug and Play China',
        whyItMatters: 'Manages local onboarding logistics, housing arrangements, local payment setups, and hub resource access',
        sourcingPath: 'Named in inputs',
        nextAction: 'Connect via WeChat to finalize apartment contracts and secure desk space allocations at the hub',
        firstAsk: 'Help identify a bilingual cohort member or local intern to assist with translation during early supplier outreach',
        status: 'Named in inputs'
      },
      {
        role: 'Corporate BD Lead',
        name: 'TBD',
        organization: 'Plug and Play China Partners Network',
        whyItMatters: 'Direct broker for matchmaking tracks; provides access to utility operators, commercial solar entities, and industrial parks',
        sourcingPath: 'PnP intro',
        nextAction: 'Deliver the dual-language presentation pack in Week 4 ahead of matching sessions',
        firstAsk: 'Introduce us to the operations managers of signed industrial parks and utility developers for potential field testing',
        status: 'Intro pending'
      },
      {
        role: 'Venture & Investor Lead',
        name: 'TBD',
        organization: 'Plug and Play China Venture Team',
        whyItMatters: 'Evaluates performance for seed funding considerations and coordinates closed-door roundtable matching sessions',
        sourcingPath: 'PnP intro',
        nextAction: 'Present the localized multi-tier economic strategy model during Month 4 reviews',
        firstAsk: 'Identify regional angel networks or energy-focused funds participating in the Month 5 roundtables',
        status: 'Intro pending'
      }
    ],
    manufacturing: [
      {
        role: 'Tier 1 Turnkey EMS Factory Manager',
        name: 'TBD',
        organization: 'Small-to-Mid Scale Electronics Assembly Provider (Yangtze River Delta)',
        whyItMatters: 'Handles low-volume assembly (10 to 50 units) and manages components sourcing and pricing scaling for high-volume commercial production',
        sourcingPath: 'PnP intro',
        nextAction: 'Run an on-site factory floor audit in Week 8 prior to contracting the low-volume run',
        firstAsk: 'Provide a detailed manufacturing quote broken down by 50, 500, and 1,000+ unit runs, along with component substitution suggestions',
        status: 'Unknown'
      },
      {
        role: 'Quick-Turn PCB Fabrication Specialist',
        name: 'TBD',
        organization: 'Regional Prototype Circuit Board Manufacturer',
        whyItMatters: 'Delivers bare board fabrication for initial low-volume prototyping loops and engineering changes',
        sourcingPath: 'Supplier visit',
        nextAction: 'Upload Gerber engineering files to the local digital interface in Week 3 to verify manufacturing tolerances',
        firstAsk: 'Run an immediate DFM trace check to confirm component layout spacing matches your automated pick-and-place lines',
        status: 'Unknown'
      }
    ],
    pilotChampions: [
      {
        role: 'Commercial Solar EPC Director',
        name: 'TBD',
        organization: 'Regional Photovoltaic Systems Integration Firm',
        whyItMatters: 'Acts as a gatekeeper for large-scale rooftops; possesses authority to deploy monitoring tech onto active customer arrays',
        sourcingPath: 'PnP matchmaking event',
        nextAction: 'Pitch the high-resolution diagnostic value proposition during Week 6 matching panels',
        firstAsk: 'Authorize a zero-cost pilot installation of 5 units on an active commercial rooftop project to run field performance tracking',
        status: 'Unknown'
      },
      {
        role: 'Industrial Park Microgrid Operations Manager',
        name: 'TBD',
        organization: 'Local High-Tech Zone Clean Energy Demonstration Project (NETDA, NID, or NHIZ District)',
        whyItMatters: 'Controls regional distributed energy resources and testing beds; provides direct access to high-visibility hardware deployment sites',
        sourcingPath: 'PnP government relations track',
        nextAction: 'Deliver a localized field pilot proposal during Week 7 regional industrial park tours',
        firstAsk: 'Provide data-sharing access to integrate 3 monitoring nodes onto the park\'s solar array',
        status: 'Unknown'
      },
      {
        role: 'Photovoltaic Research Laboratory PI',
        name: 'TBD',
        organization: 'Regional Engineering University Power Electronics Lab',
        whyItMatters: 'Delivers baseline validation data, technical feedback, and research exposure within the local solar ecosystem',
        sourcingPath: 'Cohort referral',
        nextAction: 'Present the academic version of the technical presentation deck during Week 6 closed-door sessions',
        firstAsk: 'Deploy our data acquisition platform onto your outdoor test array to collect comparative tracking logs',
        status: 'Unknown'
      }
    ]
  },

  readinessChecklist: {
    pilot: [
      {
        id: 'pilot-1',
        description: 'Live Installation Active: At least 1 Solar Sense Pro hardware node is physically mounted and operating on a live photovoltaic array in China',
        verification: 'Physical installation log with geo-tagged photos, site contact confirmation',
        targetDate: 'Week 18 (November 2-6, 2026)',
        owner: 'Adama',
        completed: false
      },
      {
        id: 'pilot-2',
        description: 'Telemetry Pipeline Verified: Live data streams (voltage, current, temperature, diagnostic flags) are successfully transmitting to local servers inside the Great Firewall',
        verification: 'Continuous 24-hour data log showing successful packet transmission',
        targetDate: 'Week 18 (November 2-6, 2026)',
        owner: 'Adama with Jordan review',
        completed: false
      },
      {
        id: 'pilot-3',
        description: 'Data Validation Compiled: A performance report capturing at least 21 days of continuous field operation data is indexed in Notion to serve as active sales collateral',
        verification: 'Comprehensive field performance report with graphs and analysis',
        targetDate: 'Week 22 (November 30 - December 4, 2026)',
        owner: 'Adama with Jordan data verification',
        completed: false
      },
      {
        id: 'pilot-4',
        description: 'Expansion Pipeline Secured: At least 2 additional qualified pilot organizations are locked in writing via executed agreements for Q1 2027 installations',
        verification: 'Signed agreements or formal commitment letters',
        targetDate: 'Week 23 (December 7-11, 2026)',
        owner: 'Adama',
        completed: false
      }
    ],
    manufacturing: [
      {
        id: 'mfg-1',
        description: 'EMS Partner Contracted: A long-term manufacturing agreement is executed with a verified Yangtze River Delta turnkey EMS partner',
        verification: 'Signed manufacturing services agreement',
        targetDate: 'Week 9 (August 31 - September 4, 2026)',
        owner: 'Adama with Jordan technical review',
        completed: false
      },
      {
        id: 'mfg-2',
        description: '10-50 units (Prototyping/Pilot baseline tier)',
        verification: 'Written quotation with line-item breakdown',
        targetDate: 'Week 8 (August 24-28, 2026)',
        owner: 'Adama',
        completed: false
      },
      {
        id: 'mfg-3',
        description: '100-500 units (Commercial beta validation tier)',
        verification: 'Written quotation with volume discount structure',
        targetDate: 'Week 21 (November 23-27, 2026)',
        owner: 'Adama',
        completed: false
      },
      {
        id: 'mfg-4',
        description: '1,000+ units (Full market launch tier)',
        verification: 'Written quotation with scaled manufacturing plan',
        targetDate: 'Week 21 (November 23-27, 2026)',
        owner: 'Adama',
        completed: false
      },
      {
        id: 'mfg-5',
        description: 'Sourcing Risks Mapped: 100% of the active BOM components are mapped to localized part numbers available via regional electronics distributors, eliminating cross-border logistics blockers',
        verification: 'Complete BOM with local supplier part numbers and lead times',
        targetDate: 'Week 3 (July 20-24, 2026)',
        owner: 'Adama with Jordan technical approval',
        completed: false
      },
      {
        id: 'mfg-6',
        description: 'Secure Factory Flashing Active: Production floor firmware flashing protocols are verified, ensuring code is loaded securely via encrypted binaries at the factory line',
        verification: 'Factory floor flashing procedure documentation with test results',
        targetDate: 'Week 13 (September 28 - October 2, 2026)',
        owner: 'Adama with Jordan firmware review',
        completed: false
      }
    ],
    network: [
      {
        id: 'net-1',
        description: 'Notion Operating System Finalized: All relationship logs, factory test parameters, calibration records, and site integration steps are documented within the workspace',
        verification: 'Complete Notion workspace audit showing all documentation indexed',
        targetDate: 'Week 25 (December 21-25, 2026)',
        owner: 'Adama',
        completed: false
      },
      {
        id: 'net-2',
        description: 'Ecosystem Network Anchored: Active post-program communication loops are established with PnP advisors, factory managers, and pilot site coordinators to sustain independent operations',
        verification: 'Contact registry with confirmed communication cadences',
        targetDate: 'Week 26 (December 28 - January 1, 2027)',
        owner: 'Adama',
        completed: false
      },
      {
        id: 'net-3',
        description: 'Jordan Technical Hand-off Complete: Asynchronous verification playbooks are locked, allowing Adama to execute daily commercial and manufacturing tasks on the ground with minimal interactive technical support from Jordan',
        verification: 'Complete manufacturing playbook reviewed and signed off by Jordan',
        targetDate: 'Week 26 (December 28 - January 1, 2027)',
        owner: 'Jordan with Adama confirmation',
        completed: false
      }
    ]
  },

  milestones: {
    q3: {
      date: 'September 30, 2026',
      title: 'Q3 2026 - Commercial Commitments & Production Kickoff',
      criteria: [
        {
          category: 'Pilot Pipeline',
          target: '15+ target partners',
          successCriteria: 'Diverse mix of EPCs, operators, and labs',
          completed: false
        },
        {
          category: 'Signed Agreements',
          target: '3+ pilot deployments',
          successCriteria: 'At least 3 formal, zero-cost installation agreements with data-sharing rights',
          completed: false
        },
        {
          category: 'Manufacturing Partner',
          target: '1 audited EMS provider',
          successCriteria: 'Primary Yangtze River Delta EMS partner audited, selected, and contracted',
          completed: false
        },
        {
          category: 'Production Run',
          target: '10-50 units initiated',
          successCriteria: 'Components cleared for regional sourcing',
          completed: false
        },
        {
          category: 'Technical Infrastructure',
          target: 'Notion workspace operational',
          successCriteria: 'All hardware documentation indexed and accessible',
          completed: false
        }
      ]
    },
    q4: {
      date: 'December 31, 2026',
      title: 'Q4 2026 - Live Field Operations & Scale Readiness',
      criteria: [
        {
          category: 'Live Installation',
          target: '1+ active deployment',
          successCriteria: 'Solar Sense Pro fully operational in China, capturing high-resolution telemetry inside the Great Firewall',
          completed: false
        },
        {
          category: 'Field Data',
          target: '21+ days continuous',
          successCriteria: 'Validated performance data compiled into commercial sales collateral',
          completed: false
        },
        {
          category: 'Manufacturing Economics',
          target: 'Multi-tier pricing locked',
          successCriteria: 'Verified pricing matrix for 10, 100, and 1,000+ unit scales signed by EMS partner',
          completed: false
        },
        {
          category: 'Pipeline Expansion',
          target: '2+ Q1 2027 pilots secured',
          successCriteria: 'Additional committed pilot organizations for Q1 2027 deployment',
          completed: false
        },
        {
          category: 'Post-Program Network',
          target: 'Ecosystem established',
          successCriteria: 'Active relationships with PnP advisors, factory managers, and pilot coordinators',
          completed: false
        },
        {
          category: 'Launch Readiness',
          target: '100% certification',
          successCriteria: 'All readiness checklist items complete, positioning Adama to scale independently',
          completed: false
        }
      ]
    }
  },

  keyDates: [
    { date: '2026-07-01', dateEnd: '2026-07-10', event: 'China Entry & Founder Orientation', type: 'Program', priority: 'Critical', location: 'Nantong' },
    { date: '2026-07-13', dateEnd: '2026-07-17', event: 'Shanghai Business Trip', type: 'Travel', priority: 'High', location: 'Shanghai' },
    { date: '2026-07-27', dateEnd: '2026-07-31', event: 'Wenzhou Business Trip', type: 'Travel', priority: 'High', location: 'Wenzhou' },
    { date: '2026-08-10', dateEnd: '2026-08-14', event: 'POC Kickoff & Corporate Matchmaking', type: 'Program', priority: 'Critical', location: 'Nantong' },
    { date: '2026-08-24', dateEnd: '2026-08-28', event: 'Factory Site Audit (Full-Day)', type: 'Manufacturing', priority: 'Critical', location: 'Yangtze River Delta' },
    { date: '2026-09-21', dateEnd: '2026-09-25', event: 'Pilot Site Walk-Through (Full-Day)', type: 'Deployment', priority: 'High', location: 'Pilot Site Location' },
    { date: '2026-09-30', dateEnd: '2026-09-30', event: 'Q3 Milestone Deadline', type: 'Milestone', priority: 'Critical', location: '—' },
    { date: '2026-10-05', dateEnd: '2026-10-09', event: 'Golden Week (National Holiday)', type: 'Holiday', priority: '—', location: 'China (Nationwide)' },
    { date: '2026-11-02', dateEnd: '2026-11-06', event: 'Field Installation Deployment (Full-Day)', type: 'Deployment', priority: 'Critical', location: 'Pilot Site Location' },
    { date: '2026-12-14', dateEnd: '2026-12-18', event: 'PnP Demo Day', type: 'Program', priority: 'Critical', location: 'Nantong' },
    { date: '2026-12-31', dateEnd: '2026-12-31', event: 'Q4 Milestone Deadline', type: 'Milestone', priority: 'Critical', location: '—' },
    { date: '2027-01-01', dateEnd: '2027-01-01', event: 'Launch Readiness Certification Deadline', type: 'Milestone', priority: 'Critical', location: '—' }
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

  // Roadmap Phases for Landing Page
  roadmapPhases: [
    {
      id: 1,
      month: 'July',
      tag: 'Phase 1',
      title: 'Pipeline Seeding',
      lead: 'Commercial Pipeline Seeding & Baseline Sourcing',
      outcome: 'Build pipeline of 15 target partners',
      weeks: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      weekRange: '1-4',
      deliverables: [
        'Operational Notion workspace',
        'EMS partner list (5 targets)',
        'RFQ packages in English and Chinese',
        'Localized component tracking database'
      ],
      criticalMilestone: 'Week 3: 5 EMS partners identified',
      keyActivities: [
        'Stand up Notion workspace with technical baseline',
        'Onboard with PnP and seed matching pipeline',
        'Map hardware BOM to local component availability',
        'Source 5 regional EMS manufacturing targets'
      ]
    },
    {
      id: 2,
      month: 'August',
      tag: 'Phase 2',
      title: 'Audits & Commitments',
      lead: 'On-Site Manufacturing Audits & Pilot Commitment Closure',
      outcome: 'Secure 3 formal pilot agreements',
      weeks: ['Week 5', 'Week 6', 'Week 7', 'Week 8'],
      weekRange: '5-8',
      deliverables: [
        'Signed pilot deployment contract',
        'On-site EMS audit reports (2 facilities)',
        'Gerber files and production documentation package',
        'Finalized manufacturing partner selection'
      ],
      criticalMilestone: 'Week 6: First pilot commitment secured',
      keyActivities: [
        'Narrow EMS candidates to 2 top choices',
        'Conduct on-site manufacturing audits',
        'Close 3 pilot agreement commitments',
        'Deliver complete production documentation to EMS partner'
      ]
    },
    {
      id: 3,
      month: 'September',
      tag: 'Phase 3',
      title: 'Production Kickoff',
      lead: 'Low-Volume Production Run & Site Readiness',
      outcome: 'Kick off 10-50 unit production run',
      weeks: ['Week 9', 'Week 10', 'Week 11', 'Week 12'],
      weekRange: '9-12',
      deliverables: [
        'Hardware bring-up guide',
        'Production batch initiated (10-50 units)',
        'Site preparation parameters finalized',
        'Installation and commissioning roadmap'
      ],
      criticalMilestone: 'Week 10: Production run officially started',
      keyActivities: [
        'Officially kick off 10-50 unit production batch',
        'Finalize site preparation and installation parameters',
        'Conduct hardware bring-up validation',
        'Weekly Jordan sync on production milestones'
      ]
    },
    {
      id: 4,
      month: 'October',
      tag: 'Phase 4',
      title: 'Hardware Validation',
      lead: 'Hardware Ingestion, Testing & Logistics Clearance',
      outcome: 'Ingest and validate 10-50 unit batch',
      weeks: ['Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
      weekRange: '13-17',
      deliverables: [
        'Production batch validated',
        'QA test reports (100% batch coverage)',
        'Pre-installation inspection completed',
        'Deployment logistics plan finalized'
      ],
      criticalMilestone: 'Week 15: Full batch validation complete',
      keyActivities: [
        'Ingest 10-50 unit production batch',
        'Conduct full QA testing and hardware validation',
        'Complete pre-installation site inspections',
        'Clear logistics and regulatory requirements'
      ]
    },
    {
      id: 5,
      month: 'November',
      tag: 'Phase 5',
      title: 'Field Deployment',
      lead: 'Field Deployment & Active Data Acquisition',
      outcome: 'Deploy live installation',
      weeks: ['Week 18', 'Week 19', 'Week 20', 'Week 21'],
      weekRange: '18-21',
      deliverables: [
        'Live telemetry stream active',
        'Deployed and commissioned installation',
        'Pricing locked for 100-500+ units',
        'Field operations documentation'
      ],
      criticalMilestone: 'Week 19: Live installation deployed',
      keyActivities: [
        'Deploy live field installation at pilot site',
        'Activate telemetry and data acquisition systems',
        'Lock pricing for next production scale (100-500+ units)',
        'Monitor live performance and collect initial data'
      ]
    },
    {
      id: 6,
      month: 'December',
      tag: 'Phase 6',
      title: 'Scale & Graduation',
      lead: 'Pipeline Expansion & Strategic Hand-Off',
      outcome: 'Secure 2 additional Q1 2027 pilots',
      weeks: ['Week 22', 'Week 23', 'Week 24', 'Week 25', 'Week 26'],
      weekRange: '22-26',
      deliverables: [
        'Launch readiness certified',
        'Frozen production playbook',
        '2 additional Q1 2027 pilot commitments',
        'PnP Demo Day presentation'
      ],
      criticalMilestone: 'Week 24: Demo Day presentation',
      keyActivities: [
        'Secure 2 additional Q1 2027 pilot agreements',
        'Freeze and document production playbook',
        'Present at PnP Demo Day',
        'Achieve launch readiness certification by Dec 31'
      ]
    }
  ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = executionPlan;
}
