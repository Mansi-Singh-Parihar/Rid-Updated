const mongoose = require("mongoose");
const ExamGuide = require("../models/examGuideNew"); // adjust path as needed

// ── MongoDB connect ───────────────────────────────────────────
mongoose.connect(
  "mongodb+srv://Gulshan:Gulshan%407061@cluster0.ydtrjhh.mongodb.net/sarkari_tracker?retryWrites=true&w=majority")
.then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ Mongo Error:", err));
const exams = [

  // ════════════════════════════════════════════════════════════
  // 1. UPSC CSE
  // ════════════════════════════════════════════════════════════
  {
    slug:     "upsc-cse-2025",
    title:    "UPSC CSE 2025",
    category: "UPSC",
    featured: true,
    active:   true,
    isPublished: true,

    overview: `The Union Public Service Commission Civil Services Examination (UPSC CSE) is India's most prestigious competitive exam. Conducted annually by UPSC, it recruits officers for the Indian Administrative Service (IAS), Indian Police Service (IPS), Indian Foreign Service (IFS), and 20+ other Group A & B Central Services.\n\nThe exam has three stages — Preliminary (objective), Mains (descriptive), and Personality Test (Interview). Only about 1000 candidates are finally selected out of nearly 10 lakh applicants each year.`,

    alertNote: "UPSC CSE 2025 notification is expected in February 2025. Prelims will be held in June 2025.",

    stages: [
      { name: "Prelims",   type: "Objective",   papers: "2 Papers (GS + CSAT)", totalMarks: "400", nature: "Qualifying" },
      { name: "Mains",     type: "Descriptive", papers: "9 Papers",              totalMarks: "1750", nature: "Merit-based" },
      { name: "Interview", type: "Personality Test", papers: "1",               totalMarks: "275",  nature: "Merit-based" },
    ],
    structureNote: "CSAT (Paper 2 in Prelims) is qualifying in nature — minimum 33% required. Only GS Paper 1 marks count for Prelims cut-off.",

    roadmap: [
      { step: 1, title: "Understand the Syllabus",       desc: "Download official UPSC syllabus. Map each topic to standard books. Do not skip optional subject selection for Mains.", tag: "Foundation" },
      { step: 2, title: "Build NCERT Base",              desc: "Read NCERT books from Class 6–12 for History, Geography, Polity, Economics, and Science. This forms the backbone of GS preparation.", tag: "3–4 Months" },
      { step: 3, title: "Standard Reference Books",      desc: "Move to Laxmikanth for Polity, Bipin Chandra for Modern History, Spectrum for Freedom Struggle, and Ramesh Singh for Economy.", tag: "6–8 Months" },
      { step: 4, title: "Current Affairs & Newspapers",  desc: "Read The Hindu or Indian Express daily. Make notes on government schemes, international affairs, and science & tech developments.", tag: "Daily" },
      { step: 5, title: "Answer Writing Practice",       desc: "Start writing 2–3 Mains answers daily from Month 4 onwards. Focus on structure: introduction, body with points, and conclusion.", tag: "Mains Prep" },
      { step: 6, title: "Mock Tests & PYQs",             desc: "Solve previous 10 years' Prelims and Mains papers. Attempt full-length mock tests every Sunday from 6 months before Prelims.", tag: "Revision" },
    ],

    syllabus: [
      {
        paperName:  "GS Paper I — History, Geography & Society",
        marks:      250,
        colorClass: "gs1",
        topics:     ["Indian History & Culture", "Modern India & Freedom Struggle", "World History (post-1900)", "Indian Geography", "World Physical Geography", "Indian Society", "Urbanisation", "Globalisation", "Women Issues", "Communalism & Regionalism"],
      },
      {
        paperName:  "GS Paper II — Polity, Governance & IR",
        marks:      250,
        colorClass: "gs2",
        topics:     ["Indian Constitution", "Parliament & State Legislatures", "Executive & Judiciary", "Federalism", "Panchayati Raj", "Public Policy", "Rights Issues", "Governance & Transparency", "India & Its Neighbours", "International Relations & Organisations"],
      },
      {
        paperName:  "GS Paper III — Economy, Environment & Science",
        marks:      250,
        colorClass: "gs3",
        topics:     ["Indian Economy & Planning", "Agriculture & Food Security", "Land Reforms", "Infrastructure", "Science & Technology", "Space & Defence", "Environment & Biodiversity", "Climate Change", "Disaster Management", "Internal Security"],
      },
      {
        paperName:  "GS Paper IV — Ethics & Integrity",
        marks:      250,
        colorClass: "gs4",
        topics:     ["Ethics in Human Actions", "Attitude & Aptitude", "Emotional Intelligence", "Moral Thinkers", "Civil Service Values", "Probity in Governance", "Case Studies"],
      },
      {
        paperName:  "Essay Paper",
        marks:      250,
        colorClass: "essay",
        topics:     ["2 Essays from different themes", "Philosophy & Social Issues", "Governance & Ethics", "Economy & Development"],
      },
    ],

    books: [
      { title: "Indian Polity",              author: "M. Laxmikanth",         subject: "Polity",   color: "#6366f1" },
      { title: "Certificate Physical & Human Geography", author: "G.C. Leong", subject: "Geography", color: "#0ea5e9" },
      { title: "India's Struggle for Independence", author: "Bipin Chandra",   subject: "History",  color: "#f59e0b" },
      { title: "Indian Economy",             author: "Ramesh Singh",           subject: "Economy",  color: "#10b981" },
      { title: "Environment",                author: "Shankar IAS",            subject: "Environment", color: "#84cc16" },
      { title: "CSAT Paper 2",               author: "Arihant Publications",   subject: "CSAT",     color: "#8b5cf6" },
    ],

    eligibility: {
      nationality:          "Indian Citizen",
      ageMin:               21,
      ageMax:               32,
      ageRelaxation:        { sc_st: 5, obc: 3, pwd: 10, ews: 0 },
      education:            "Bachelor's Degree in any discipline from a recognised university",
      qualificationRequired: ["Graduation"],
      categoryEligibility:  ["General", "OBC", "SC", "ST", "EWS"],
      genderEligibility:    "All",
      stateEligibility:     ["All India"],
      attemptsGen:          "6 attempts",
      attemptsOBC:          "9 attempts",
      attemptsScSt:         "Unlimited (till age limit)",
      ageRelaxNote:         "Age relaxation as per GoI rules. PwBD: +10 yrs (Gen), +13 yrs (OBC), +15 yrs (SC/ST)",
    },

    salaryRange:    { min: 56100, max: 250000, grade: "Level 10–17 (7th CPC)" },
    examType:       "National",
    examFrequency:  "Yearly",
    totalVacancies: 1056,
    tags:           ["IAS", "IPS", "IFS", "Civil Services", "UPSC", "Group A"],
    officialSite:   "https://upsc.gov.in",
    applyLink:      "https://upsconline.nic.in",
    notificationPdfLink: "https://upsc.gov.in/examinations/active-examinations",
    tips: "Start your preparation with NCERT books before moving to standard references. Consistency of 6–8 hours daily over 12–18 months is the key to cracking UPSC CSE.",
  },

  // ════════════════════════════════════════════════════════════
  // 2. SSC CGL
  // ════════════════════════════════════════════════════════════
  {
    slug:     "ssc-cgl-2025",
    title:    "SSC CGL 2025",
    category: "SSC",
    featured: true,
    active:   true,
    isPublished: true,

    overview: `The Staff Selection Commission Combined Graduate Level (SSC CGL) examination is one of India's most popular government recruitment exams. It recruits candidates for Group B and Group C posts in various Central Government Ministries, Departments, and Offices — including Income Tax Inspector, CBI Sub-Inspector, Auditor, Accountant, and more.\n\nSSC CGL 2025 is expected to fill 14,000+ vacancies across 50+ departments. The exam is conducted in two tiers — Tier 1 (Computer Based Test) and Tier 2 (CBT with multiple sessions).`,

    alertNote: "SSC CGL 2025 notification expected in April 2025. Tier 1 likely in June–July 2025.",

    stages: [
      { name: "Tier 1", type: "CBT Objective", papers: "4 Sections",  totalMarks: "200", nature: "Qualifying + Merit" },
      { name: "Tier 2", type: "CBT Objective", papers: "3 Papers",    totalMarks: "390", nature: "Merit-based" },
    ],
    structureNote: "Tier 1 score is used for shortlisting to Tier 2. Final merit is based on Tier 2 marks only. There is negative marking of 0.50 marks in Tier 1.",

    roadmap: [
      { step: 1, title: "Master Quantitative Aptitude", desc: "Focus on Arithmetic (Percentage, Profit-Loss, SI/CI, Time-Speed), Algebra, Geometry, and Data Interpretation. Practice 50+ questions daily.", tag: "High Weightage" },
      { step: 2, title: "English Language & Comprehension", desc: "Work on grammar rules, vocabulary (synonyms, antonyms, one-word substitution), reading comprehension, and error spotting.", tag: "Daily Practice" },
      { step: 3, title: "General Intelligence & Reasoning", desc: "Analogy, Classification, Series, Coding-Decoding, Blood Relations, Syllogism, and Non-Verbal Reasoning are scoring areas.", tag: "Speed Focus" },
      { step: 4, title: "General Awareness",              desc: "Static GK (History, Geography, Polity, Science) + Current Affairs of last 6 months. Focus on SSC-specific GK topics.", tag: "Daily 1 Hour" },
      { step: 5, title: "Full-Length Mock Tests",          desc: "Attempt at least 30 full-length Tier 1 mock tests. Analyse mistakes after each test. Time management is critical — 60 mins for 100 Qs.", tag: "Last 2 Months" },
    ],

    syllabus: [
      {
        paperName:  "Tier 1 — General Intelligence & Reasoning",
        marks:      50,
        colorClass: "gs1",
        topics:     ["Analogy", "Classification", "Series", "Coding-Decoding", "Blood Relations", "Direction Sense", "Syllogism", "Venn Diagrams", "Non-Verbal Reasoning", "Matrix", "Word Formation"],
      },
      {
        paperName:  "Tier 1 — General Awareness",
        marks:      50,
        colorClass: "gs2",
        topics:     ["History of India", "Indian Geography", "Indian Polity & Constitution", "Indian Economy", "General Science (Physics/Chemistry/Biology)", "Current Affairs", "Static GK"],
      },
      {
        paperName:  "Tier 1 — Quantitative Aptitude",
        marks:      50,
        colorClass: "gs3",
        topics:     ["Number System", "Percentage & Ratio", "Profit & Loss", "SI & CI", "Time & Work", "Speed & Distance", "Mensuration", "Geometry", "Trigonometry", "Algebra", "Data Interpretation"],
      },
      {
        paperName:  "Tier 1 — English Language",
        marks:      50,
        colorClass: "gs4",
        topics:     ["Reading Comprehension", "Cloze Test", "Para Jumbles", "Error Spotting", "Fill in the Blanks", "Vocabulary", "Idioms & Phrases", "One-Word Substitution"],
      },
      {
        paperName:  "Tier 2 — Paper 1 (Maths + Reasoning + English + GK)",
        marks:      390,
        colorClass: "essay",
        topics:     ["Module 1: Maths & Reasoning (90 Qs)", "Module 2: English (45 Qs)", "Module 3: General Awareness (25 Qs)", "Paper 2: Statistics (for JSO post)", "Paper 3: General Studies Finance & Economics (for AAO post)"],
      },
    ],

    books: [
      { title: "Quantitative Aptitude",     author: "R.S. Aggarwal",       subject: "Maths",    color: "#6366f1" },
      { title: "A Modern Approach to Verbal & Non-Verbal Reasoning", author: "R.S. Aggarwal", subject: "Reasoning", color: "#0ea5e9" },
      { title: "Objective General English", author: "S.P. Bakshi",         subject: "English",  color: "#f59e0b" },
      { title: "Lucent's General Knowledge", author: "Lucent",             subject: "GK",       color: "#10b981" },
      { title: "SSC CGL Tier 2 Mathematics", author: "Arihant",            subject: "Maths",    color: "#8b5cf6" },
    ],

    eligibility: {
      nationality:          "Indian Citizen",
      ageMin:               18,
      ageMax:               32,
      ageRelaxation:        { sc_st: 5, obc: 3, pwd: 10, ews: 0 },
      education:            "Bachelor's Degree in any discipline from a recognised university",
      qualificationRequired: ["Graduation"],
      categoryEligibility:  ["General", "OBC", "SC", "ST", "EWS"],
      genderEligibility:    "All",
      stateEligibility:     ["All India"],
      attemptsGen:          "No limit",
      attemptsOBC:          "No limit",
      attemptsScSt:         "No limit",
      ageRelaxNote:         "Age limit varies by post: 18–27 for some posts, 20–30 for others. Check official notification.",
    },

    salaryRange:    { min: 25500, max: 81100, grade: "Level 4–8 (7th CPC)" },
    examType:       "National",
    examFrequency:  "Yearly",
    totalVacancies: 14582,
    tags:           ["SSC", "CGL", "Income Tax Inspector", "CBI", "Auditor", "Group B", "Group C"],
    officialSite:   "https://ssc.gov.in",
    applyLink:      "https://ssc.gov.in",
    notificationPdfLink: "https://ssc.gov.in",
    tips: "Focus heavily on Quantitative Aptitude and Reasoning as they carry maximum weightage in Tier 2. Solve SSC CGL previous year papers from 2015 onwards — many questions are repeated with slight variations.",
  },

  // ════════════════════════════════════════════════════════════
  // 3. IBPS PO
  // ════════════════════════════════════════════════════════════
  {
    slug:     "ibps-po-2025",
    title:    "IBPS PO 2025",
    category: "Banking",
    featured: true,
    active:   true,
    isPublished: true,

    overview: `The Institute of Banking Personnel Selection (IBPS) conducts the Probationary Officer (PO) exam to recruit officers for 11 Public Sector Banks including Punjab National Bank, Bank of Baroda, Canara Bank, Union Bank, and others.\n\nIBPS PO is a 3-stage exam — Prelims, Mains, and Interview. Selected candidates join as Probationary Officers in Scale I and are placed across India. IBPS PO 2025 is expected to notify around 4000+ vacancies.`,

    alertNote: "IBPS PO 2025 notification expected in July–August 2025. Prelims likely in October 2025.",

    stages: [
      { name: "Prelims",   type: "CBT Objective", papers: "3 Sections",  totalMarks: "100", nature: "Qualifying" },
      { name: "Mains",     type: "CBT Objective + Descriptive", papers: "5 Sections + Essay/Letter", totalMarks: "225", nature: "Merit-based" },
      { name: "Interview", type: "Personal Interview", papers: "1",      totalMarks: "100", nature: "Final Selection" },
    ],
    structureNote: "Final merit = 80% Mains + 20% Interview. Prelims is only qualifying — marks not counted in final merit.",

    roadmap: [
      { step: 1, title: "Quantitative Aptitude Foundation", desc: "Master Data Interpretation (DI) sets — pie charts, bar graphs, tables. Also focus on Number Series, Quadratic Equations, and Approximation.", tag: "High Priority" },
      { step: 2, title: "Reasoning Ability",               desc: "Puzzles and Seating Arrangements are the highest-scoring topics. Practice at least 5 sets daily. Also cover Inequality, Syllogism, and Input-Output.", tag: "Daily Sets" },
      { step: 3, title: "English Language",                desc: "Reading comprehension forms 30–40% of English section. Practice RC passages daily. Also work on fillers, error detection, and sentence rearrangement.", tag: "RC Focus" },
      { step: 4, title: "Banking & Financial Awareness",   desc: "Mains has a separate General/Economy/Banking Awareness section. Cover RBI policies, banking terms, financial news of last 6 months, and static banking GK.", tag: "Mains Special" },
      { step: 5, title: "Descriptive Writing",             desc: "Mains includes a 30-minute Letter & Essay writing section (50 marks). Practice formal/informal letters and essay writing on banking/economic topics.", tag: "Mains" },
    ],

    syllabus: [
      {
        paperName:  "Prelims — Quantitative Aptitude",
        marks:      35,
        colorClass: "gs3",
        topics:     ["Number Series", "Simplification", "Data Interpretation", "Quadratic Equations", "Approximation", "Word Problems (Time-Work, Profit-Loss, SI/CI)", "Data Sufficiency"],
      },
      {
        paperName:  "Prelims — Reasoning Ability",
        marks:      35,
        colorClass: "gs1",
        topics:     ["Puzzles & Seating Arrangement", "Inequality", "Syllogism", "Coding-Decoding", "Blood Relations", "Order & Ranking", "Direction Sense", "Input-Output"],
      },
      {
        paperName:  "Prelims — English Language",
        marks:      30,
        colorClass: "gs4",
        topics:     ["Reading Comprehension", "Cloze Test", "Para Jumbles", "Error Detection", "Sentence Improvement", "Fill in the Blanks"],
      },
      {
        paperName:  "Mains — General/Economy/Banking Awareness",
        marks:      40,
        colorClass: "gs2",
        topics:     ["RBI & Monetary Policy", "Banking Terms & Acts", "Government Schemes", "Financial Awareness", "Static Banking GK", "International Organisations", "Current Affairs"],
      },
    ],

    books: [
      { title: "Quantitative Aptitude for Competitive Examinations", author: "R.S. Aggarwal", subject: "Quant",    color: "#6366f1" },
      { title: "A New Approach to Reasoning",                        author: "B.S. Sijwali",   subject: "Reasoning", color: "#0ea5e9" },
      { title: "Objective English",                                  author: "S.P. Bakshi",    subject: "English",  color: "#f59e0b" },
      { title: "Banking Awareness",                                  author: "Arihant",        subject: "Banking",  color: "#10b981" },
      { title: "IBPS PO Previous Papers",                            author: "Kiran Publications", subject: "PYQs", color: "#8b5cf6" },
    ],

    eligibility: {
      nationality:          "Indian Citizen",
      ageMin:               20,
      ageMax:               30,
      ageRelaxation:        { sc_st: 5, obc: 3, pwd: 10, ews: 0 },
      education:            "Bachelor's Degree (any discipline) from a UGC-recognised University. Proficiency in official language of the State/UT preferred.",
      qualificationRequired: ["Graduation"],
      categoryEligibility:  ["General", "OBC", "SC", "ST", "EWS"],
      genderEligibility:    "All",
      stateEligibility:     ["All India"],
      attemptsGen:          "No limit (within age)",
      attemptsOBC:          "No limit (within age)",
      attemptsScSt:         "No limit (within age)",
      ageRelaxNote:         "Ex-Servicemen: actual service + 3 years. Widows/divorcees not remarried: +9 yrs (Gen), +12 yrs (OBC), +14 yrs (SC/ST).",
    },

    salaryRange:    { min: 36000, max: 63840, grade: "JMG Scale I (with DA & allowances ~₹52,000 CTC)" },
    examType:       "Bank",
    examFrequency:  "Yearly",
    totalVacancies: 4455,
    tags:           ["Banking", "IBPS", "PO", "Probationary Officer", "PSB", "Scale I"],
    officialSite:   "https://ibps.in",
    applyLink:      "https://ibps.in",
    notificationPdfLink: "https://ibps.in",
    tips: "Puzzles and Data Interpretation are the game-changers in IBPS PO. Spend 60% of your preparation time on these two topics. Attempt Prelims mock tests with strict 20-minute per-section timer.",
  },

  // ════════════════════════════════════════════════════════════
  // 4. SSC CHSL
  // ════════════════════════════════════════════════════════════
  {
    slug:     "ssc-chsl-2025",
    title:    "SSC CHSL 2025",
    category: "SSC",
    featured: false,
    active:   true,
    isPublished: true,

    overview: `SSC Combined Higher Secondary Level (CHSL) exam recruits candidates for Lower Division Clerk (LDC), Data Entry Operator (DEO), Postal/Sorting Assistant, and Junior Secretariat Assistant posts in Central Government offices. The minimum qualification is 12th Pass, making it one of the most accessible central government exams.\n\nSSC CHSL 2025 is expected to notify 3000+ vacancies.`,

    alertNote: "SSC CHSL 2025 notification expected in May 2025. Tier 1 likely in July–August 2025.",

    stages: [
      { name: "Tier 1", type: "CBT Objective", papers: "4 Sections", totalMarks: "200", nature: "Qualifying + Shortlisting" },
      { name: "Tier 2", type: "CBT Objective + Skill Test", papers: "2 Sessions + Skill", totalMarks: "200+", nature: "Merit-based" },
    ],
    structureNote: "Typing Test/Skill Test is mandatory for LDC/DEO posts. English typing: 35 WPM; Hindi typing: 30 WPM on computer.",

    roadmap: [
      { step: 1, title: "12th Level Mathematics",  desc: "SSC CHSL Quant is easier than CGL. Focus on Arithmetic — Percentage, Ratio, Profit-Loss, SI/CI, Time-Work. Geometry basics also important.", tag: "Foundation" },
      { step: 2, title: "English Grammar & Vocab", desc: "Spotting errors, filling blanks, and vocabulary are key scoring areas. Make a daily word list of 10 new words.", tag: "Daily" },
      { step: 3, title: "Typing Speed Practice",   desc: "Start typing practice from Day 1. Use online typing tools. Aim for 40+ WPM English and 35+ WPM Hindi to have a comfortable buffer.", tag: "Daily 30 Mins" },
      { step: 4, title: "General Awareness",       desc: "Static GK + current affairs of last 4 months. SSC CHSL GK questions are more static and fact-based.", tag: "1 Hr Daily" },
    ],

    syllabus: [
      {
        paperName:  "Tier 1 — All 4 Sections",
        marks:      200,
        colorClass: "gs1",
        topics:     ["General Intelligence & Reasoning (50 marks)", "General Awareness (50 marks)", "Quantitative Aptitude (50 marks)", "English Language (50 marks)"],
      },
    ],

    books: [
      { title: "SSC CHSL Guide",            author: "Kiran Publications",  subject: "Complete Prep", color: "#6366f1" },
      { title: "Quantitative Aptitude",     author: "R.S. Aggarwal",       subject: "Maths",         color: "#0ea5e9" },
      { title: "Objective General English", author: "S.P. Bakshi",         subject: "English",       color: "#f59e0b" },
    ],

    eligibility: {
      nationality:          "Indian Citizen",
      ageMin:               18,
      ageMax:               27,
      ageRelaxation:        { sc_st: 5, obc: 3, pwd: 10, ews: 0 },
      education:            "12th Pass (10+2) from a recognised board",
      qualificationRequired: ["12th"],
      categoryEligibility:  ["General", "OBC", "SC", "ST", "EWS"],
      genderEligibility:    "All",
      stateEligibility:     ["All India"],
      attemptsGen:          "No limit",
      attemptsOBC:          "No limit",
      attemptsScSt:         "No limit",
      ageRelaxNote:         "Age limit: 18–27 for most posts. Postal Assistant/DEO posts may have different limits — check notification.",
    },

    salaryRange:    { min: 19900, max: 63200, grade: "Level 2–4 (7th CPC)" },
    examType:       "National",
    examFrequency:  "Yearly",
    totalVacancies: 3712,
    tags:           ["SSC", "CHSL", "LDC", "DEO", "12th Pass", "Postal Assistant", "Clerk"],
    officialSite:   "https://ssc.gov.in",
    applyLink:      "https://ssc.gov.in",
    tips: "Focus on typing speed from Day 1 — many candidates fail at the Skill Test despite clearing the written exam. Aim for 40+ WPM to be safe.",
  },

  // ════════════════════════════════════════════════════════════
  // 5. RRB NTPC
  // ════════════════════════════════════════════════════════════
  {
    slug:     "rrb-ntpc-2025",
    title:    "RRB NTPC 2025",
    category: "Railway",
    featured: true,
    active:   true,
    isPublished: true,

    overview: `Railway Recruitment Board Non-Technical Popular Categories (RRB NTPC) is one of the largest government recruitment exams in India. It recruits candidates for posts like Junior Clerk cum Typist, Accounts Clerk cum Typist, Junior Time Keeper, Trains Clerk, Commercial cum Ticket Clerk, Station Master, Goods Guard, and Senior Commercial cum Ticket Clerk.\n\nRRB NTPC 2025 cycle is expected to notify 10,000+ vacancies across 21 Railway Recruitment Boards.`,

    alertNote: "RRB NTPC 2025 notification is awaited. Previous cycle (2024) had 11,558 vacancies. Keep checking rrbapply.gov.in.",

    stages: [
      { name: "CBT 1",       type: "CBT Objective", papers: "3 Sections",  totalMarks: "100", nature: "Qualifying + Shortlisting" },
      { name: "CBT 2",       type: "CBT Objective", papers: "3 Sections",  totalMarks: "120", nature: "Merit-based" },
      { name: "Typing/Skill Test", type: "Skill Test", papers: "As applicable", totalMarks: "Qualifying", nature: "Qualifying" },
      { name: "Document Verification", type: "DV",    papers: "—",         totalMarks: "—",   nature: "Final" },
    ],
    structureNote: "CBT 1 shortlists 20x candidates for CBT 2. Final merit is based on CBT 2 marks. Negative marking: 1/3rd mark for wrong answer.",

    roadmap: [
      { step: 1, title: "Mathematics",            desc: "Number System, Decimals, Fractions, LCM/HCF, Ratio-Proportion, Percentage, Mensuration, Time & Work, Time-Speed-Distance, Algebra, Geometry — all at 10th level.", tag: "Core Topic" },
      { step: 2, title: "General Intelligence",   desc: "Analogies, Alphabetical Series, Number Series, Coding-Decoding, Mathematical Operations, Syllogism, Venn Diagrams, Jumbling, Data Sufficiency.", tag: "Scoring" },
      { step: 3, title: "General Awareness",      desc: "Railways-specific GK (Indian Railways history, zones, types of trains, railway budget), Science, Current Affairs, Geography, History, Polity.", tag: "Railway GK Important" },
      { step: 4, title: "CBT 2 Advanced Prep",    desc: "CBT 2 has slightly higher difficulty. Computer Basics is an additional topic. Also covers Economics (basic) and CM/Governor related questions.", tag: "After CBT 1" },
    ],

    syllabus: [
      {
        paperName:  "CBT 1 — Mathematics",
        marks:      30,
        colorClass: "gs3",
        topics:     ["Number System", "Bodmas", "Decimals & Fractions", "LCM & HCF", "Ratio & Proportion", "Percentage", "Mensuration", "Time & Work", "Time-Speed-Distance", "Elementary Algebra", "Geometry & Trigonometry", "Elementary Statistics"],
      },
      {
        paperName:  "CBT 1 — General Intelligence & Reasoning",
        marks:      30,
        colorClass: "gs1",
        topics:     ["Analogies", "Alphabetical & Number Series", "Coding & Decoding", "Mathematical Operations", "Relationships", "Syllogism", "Jumbling", "Venn Diagrams", "Data Interpretation & Sufficiency", "Conclusions & Decision Making"],
      },
      {
        paperName:  "CBT 1 — General Awareness",
        marks:      40,
        colorClass: "gs2",
        topics:     ["Current Affairs", "Indian Railways (History, Zones, Organisation)", "General Science (Physics, Chemistry, Biology)", "Indian Geography", "Indian History", "Indian Polity & Constitution", "Indian Economy", "Environment"],
      },
    ],

    books: [
      { title: "RRB NTPC CBT 1 & 2 Guide", author: "Arihant Publications",  subject: "Complete Prep", color: "#f59e0b" },
      { title: "Quantitative Aptitude",     author: "R.S. Aggarwal",          subject: "Maths",         color: "#6366f1" },
      { title: "Lucent's GK",               author: "Lucent",                 subject: "GK",            color: "#10b981" },
      { title: "RRB NTPC Previous Papers",  author: "Kiran Publications",     subject: "PYQs",          color: "#0ea5e9" },
    ],

    eligibility: {
      nationality:          "Indian Citizen",
      ageMin:               18,
      ageMax:               33,
      ageRelaxation:        { sc_st: 5, obc: 3, pwd: 10, ews: 0 },
      education:            "12th Pass or Graduation depending on the post applied for",
      qualificationRequired: ["12th", "Graduation"],
      categoryEligibility:  ["General", "OBC", "SC", "ST", "EWS"],
      genderEligibility:    "All",
      stateEligibility:     ["All India"],
      attemptsGen:          "No limit",
      attemptsOBC:          "No limit",
      attemptsScSt:         "No limit",
      ageRelaxNote:         "Age limit varies by post: Graduate posts (21–33), 12th Pass posts (18–33). Women: +5 yrs for widowed/divorced.",
    },

    salaryRange:    { min: 19900, max: 47600, grade: "Level 2–6 (7th CPC)" },
    examType:       "National",
    examFrequency:  "Bi-Yearly",
    totalVacancies: 11558,
    tags:           ["Railway", "RRB", "NTPC", "Station Master", "Goods Guard", "Clerk", "12th Pass", "Graduate"],
    officialSite:   "https://indianrailways.gov.in",
    applyLink:      "https://rrbapply.gov.in",
    tips: "Indian Railways GK is unique to RRB exams — cover railway zones, types of coaches, Vande Bharat, railway budget highlights. This gives you an edge over general candidates.",
  },

  // ════════════════════════════════════════════════════════════
  // 6. SBI PO
  // ════════════════════════════════════════════════════════════
  {
    slug:     "sbi-po-2025",
    title:    "SBI PO 2025",
    category: "Banking",
    featured: true,
    active:   true,
    isPublished: true,

    overview: `State Bank of India Probationary Officer (SBI PO) is the most prestigious banking exam in India. SBI PO recruits officers for Junior Management Grade Scale I across all SBI branches nationwide. The exam is conducted by SBI itself and is considered tougher than IBPS PO due to its difficulty level and competition.\n\nSBI PO selected candidates get a starting salary of ~₹41,000 plus allowances, with rapid promotion opportunities. SBI PO 2025 notification is expected in March 2025.`,

    alertNote: "SBI PO 2025 notification expected in March 2025. Prelims likely in April–May 2025.",

    stages: [
      { name: "Prelims",   type: "CBT Objective",      papers: "3 Sections", totalMarks: "100", nature: "Qualifying" },
      { name: "Mains",     type: "CBT Objective + Descriptive", papers: "4 Sections + Essay/Letter", totalMarks: "250", nature: "Merit-based" },
      { name: "GD + Interview", type: "Group Discussion + Interview", papers: "—", totalMarks: "50", nature: "Final Selection" },
    ],
    structureNote: "Final merit = 75% Mains + 25% GD/Interview. SBI PO Mains is tougher than IBPS — reasoning and quant are at a higher difficulty level.",

    roadmap: [
      { step: 1, title: "Data Analysis & Interpretation", desc: "SBI PO Mains has a dedicated DA&I section. Practice advanced DI — missing data tables, caselet DI, radar charts. This is where toppers score.", tag: "Mains Focus" },
      { step: 2, title: "High-Level Reasoning",           desc: "SBI PO is known for complex puzzles. Practice 7–8 puzzle sets daily. Input-Output, Machine Input, and critical reasoning are important.", tag: "Daily" },
      { step: 3, title: "Reading Comprehension",          desc: "SBI PO English has RC passages from The Economist and Harvard Business Review level. Read quality English content daily.", tag: "Advanced" },
      { step: 4, title: "Economy & Banking Awareness",    desc: "Focus on RBI Annual Report, Economic Survey highlights, monetary policy, banking regulations, and international financial bodies.", tag: "Mains" },
      { step: 5, title: "Group Discussion Preparation",   desc: "Practice GD on banking/economic topics. Stay updated on current issues. Be confident, let others speak — don't interrupt.", tag: "Final Round" },
    ],

    syllabus: [
      {
        paperName:  "Mains — Data Analysis & Interpretation",
        marks:      60,
        colorClass: "gs3",
        topics:     ["Tabular DI", "Bar/Line/Pie Charts", "Caselet DI", "Missing Data DI", "Probability", "Permutation & Combination", "Data Sufficiency"],
      },
      {
        paperName:  "Mains — Reasoning & Computer Aptitude",
        marks:      60,
        colorClass: "gs1",
        topics:     ["Puzzles & Seating Arrangement", "Logical Reasoning", "Input-Output", "Data Sufficiency", "Coding-Decoding", "Syllogism", "Computer Fundamentals", "MS Office", "Internet & Networking"],
      },
      {
        paperName:  "Mains — General/Economy/Banking Awareness",
        marks:      40,
        colorClass: "gs2",
        topics:     ["Current Affairs (last 6 months)", "Banking & Financial Awareness", "RBI Policies", "Government Schemes", "Capital Markets", "International Organisations", "Static GK"],
      },
    ],

    books: [
      { title: "Data Interpretation & Data Analysis", author: "Arun Sharma",    subject: "DI",       color: "#6366f1" },
      { title: "How to Prepare for Logical Reasoning", author: "Arun Sharma",   subject: "Reasoning", color: "#0ea5e9" },
      { title: "Banking Awareness",                    author: "Arihant",        subject: "Banking",  color: "#10b981" },
      { title: "SBI PO Previous Papers",               author: "Kiran Publications", subject: "PYQs", color: "#8b5cf6" },
    ],

    eligibility: {
      nationality:          "Indian Citizen",
      ageMin:               21,
      ageMax:               30,
      ageRelaxation:        { sc_st: 5, obc: 3, pwd: 10, ews: 0 },
      education:            "Graduation in any discipline from a recognised university",
      qualificationRequired: ["Graduation"],
      categoryEligibility:  ["General", "OBC", "SC", "ST", "EWS"],
      genderEligibility:    "All",
      stateEligibility:     ["All India"],
      attemptsGen:          "4 attempts",
      attemptsOBC:          "7 attempts",
      attemptsScSt:         "No limit (within age)",
      ageRelaxNote:         "SBI PO has attempt limits unlike IBPS PO. Check latest notification for current attempt count.",
    },

    salaryRange:    { min: 41960, max: 63840, grade: "JMGS-I (with DA, HRA & allowances ~₹64,000 CTC)" },
    examType:       "Bank",
    examFrequency:  "Yearly",
    totalVacancies: 600,
    tags:           ["Banking", "SBI", "PO", "Probationary Officer", "Scale I", "Nationalised Bank"],
    officialSite:   "https://sbi.co.in/careers",
    applyLink:      "https://sbi.co.in/careers",
    tips: "SBI PO is harder than IBPS PO — don't prepare both at the same level. Give extra time to DA&I and high-level reasoning. Past toppers recommend solving DI for 2 hours daily for 3 months.",
  },

  // ════════════════════════════════════════════════════════════
  // 7. RRB Group D
  // ════════════════════════════════════════════════════════════
  {
    slug:     "rrb-group-d-2025",
    title:    "RRB Group D 2025",
    category: "Railway",
    featured: false,
    active:   true,
    isPublished: true,

    overview: `RRB Group D (Level 1 posts) is the entry-level railway recruitment exam conducted by Railway Recruitment Boards. It recruits for posts like Track Maintainer Grade IV, Helper/Assistant in various technical departments (Electrical, Mechanical, S&T), Assistant Pointsman, and Level 1 posts.\n\nWith 10th Pass as the minimum qualification, RRB Group D sees the highest number of applicants — over 1 crore candidates. RRB Group D 2025 is expected to announce 20,000+ vacancies.`,

    stages: [
      { name: "CBT",          type: "CBT Objective",  papers: "4 Sections",      totalMarks: "100", nature: "Merit-based" },
      { name: "PET",          type: "Physical Efficiency Test", papers: "Running/Weight Lifting", totalMarks: "Qualifying", nature: "Qualifying" },
      { name: "Document Verification", type: "DV",    papers: "—",               totalMarks: "—",   nature: "Final" },
    ],
    structureNote: "Male: Run 1000m in 4 min 15 sec, lift & carry 35 kg for 100m in 2 min. Female: Run 1000m in 5 min 40 sec, lift & carry 20 kg for 100m in 2 min.",

    roadmap: [
      { step: 1, title: "10th Level Mathematics",  desc: "Number System, BODMAS, Decimals, Fractions, LCM-HCF, Ratio-Proportion, Percentage, Mensuration, Time-Work, SI/CI, Algebra basics.", tag: "Core" },
      { step: 2, title: "General Science",          desc: "Physics (Force, Motion, Electricity, Magnetism), Chemistry (Acids-Bases, Metals, Carbon Compounds), Biology (Cell, Diseases, Nutrition). 10th NCERT is sufficient.", tag: "Important" },
      { step: 3, title: "Physical Fitness Training", desc: "Start running daily from Day 1 of preparation. Build stamina for 1000m run. Practice carrying weights gradually.", tag: "PET Prep" },
    ],

    syllabus: [
      {
        paperName:  "CBT — All 4 Sections",
        marks:      100,
        colorClass: "gs1",
        topics:     ["Mathematics (25 Qs): Number System, Mensuration, SI/CI, Statistics", "General Intelligence & Reasoning (30 Qs): Analogies, Series, Coding, Syllogism", "General Science (25 Qs): Physics, Chemistry, Biology — 10th level", "General Awareness (20 Qs): Current Affairs, Railway GK, History, Geography"],
      },
    ],

    books: [
      { title: "RRB Group D Guide",         author: "Arihant",             subject: "Complete Prep", color: "#f59e0b" },
      { title: "NCERT Science Class 10",    author: "NCERT",               subject: "Science",       color: "#10b981" },
      { title: "Lucent's GK",               author: "Lucent",              subject: "GK",            color: "#0ea5e9" },
    ],

    eligibility: {
      nationality:          "Indian Citizen",
      ageMin:               18,
      ageMax:               33,
      ageRelaxation:        { sc_st: 5, obc: 3, pwd: 10, ews: 0 },
      education:            "10th Pass (Matriculation) + ITI from recognised institute, OR National Apprenticeship Certificate (NAC) granted by NCVT",
      qualificationRequired: ["10th"],
      categoryEligibility:  ["General", "OBC", "SC", "ST", "EWS"],
      genderEligibility:    "All",
      stateEligibility:     ["All India"],
      attemptsGen:          "No limit",
      attemptsOBC:          "No limit",
      attemptsScSt:         "No limit",
    },

    salaryRange:    { min: 18000, max: 56900, grade: "Level 1 (7th CPC)" },
    examType:       "National",
    examFrequency:  "Bi-Yearly",
    totalVacancies: 32438,
    tags:           ["Railway", "RRB", "Group D", "Level 1", "10th Pass", "Track Maintainer", "Helper"],
    officialSite:   "https://indianrailways.gov.in",
    applyLink:      "https://rrbapply.gov.in",
    tips: "Start physical training alongside written exam prep. Many candidates clear the CBT but fail PET. Don't neglect General Science — it has 25 marks and 10th NCERT is fully sufficient.",
  },

  // ════════════════════════════════════════════════════════════
  // 8. NDA
  // ════════════════════════════════════════════════════════════
  {
    slug:     "nda-2025",
    title:    "NDA 2025",
    category: "Defence",
    featured: true,
    active:   true,
    isPublished: true,

    overview: `The National Defence Academy (NDA) exam is conducted twice a year by UPSC to recruit candidates into the Army, Navy, and Air Force wings of the National Defence Academy and the Indian Naval Academy Course (INAC).\n\nNDA is one of the most aspirational defence exams in India. Selected candidates undergo 3-year training at NDA, Khadakwasla (Pune) followed by further training at respective service academies. NDA 2025 (I) notification was released in December 2024.`,

    alertNote: "NDA 2025 (I) exam date: April 13, 2025. NDA 2025 (II) notification expected in June 2025.",

    stages: [
      { name: "Written Exam",  type: "Objective",     papers: "2 Papers (Maths + GAT)", totalMarks: "900", nature: "Merit-based" },
      { name: "SSB Interview", type: "5-Day Process", papers: "Psychological + GTO + Interview", totalMarks: "900", nature: "Final Selection" },
    ],
    structureNote: "Written: Maths (300 marks, 120 Qs), GAT (600 marks, 150 Qs). SSB: Stage 1 (OIR + PPDT) → Stage 2 (Psychology, GTO, Interview, Conference). Total: 1800 marks.",

    roadmap: [
      { step: 1, title: "Mathematics (11th–12th Level)", desc: "Algebra, Matrices, Trigonometry, Analytical Geometry, Differential Calculus, Integral Calculus, Vector Algebra, Statistics, Probability — all at 11th/12th level.", tag: "300 Marks" },
      { step: 2, title: "General Ability Test",          desc: "English (200 marks): Grammar, vocabulary, comprehension. GK (400 marks): Physics, Chemistry, Biology, History, Geography, Current Affairs.", tag: "600 Marks" },
      { step: 3, title: "Physical Fitness",              desc: "NDA has strict physical standards. Daily running, push-ups, pull-ups are essential. Medical standards (height, eyesight, weight) must be met.", tag: "Essential" },
      { step: 4, title: "SSB Preparation",               desc: "Read about OIR tests, PPDT, TAT, WAT, SRT, and Group Discussion. Practice leadership in group activities. Read 'SSB Interview' by SS Bhui.", tag: "After Written" },
    ],

    syllabus: [
      {
        paperName:  "Mathematics (Paper 1)",
        marks:      300,
        colorClass: "gs3",
        topics:     ["Algebra", "Matrices & Determinants", "Trigonometry", "Analytical Geometry (2D & 3D)", "Differential Calculus", "Integral Calculus & Differential Equations", "Vector Algebra", "Statistics & Probability"],
      },
      {
        paperName:  "GAT — English (Paper 2)",
        marks:      200,
        colorClass: "gs4",
        topics:     ["Grammar & Usage", "Vocabulary", "Comprehension & Cohesion", "Spotting Errors", "Sentence Completion"],
      },
      {
        paperName:  "GAT — General Knowledge (Paper 2)",
        marks:      400,
        colorClass: "gs2",
        topics:     ["Physics", "Chemistry", "Biology/General Science", "History of India & Freedom Struggle", "Geography", "Current Events & Defence Affairs"],
      },
    ],

    books: [
      { title: "Mathematics for NDA & NA",      author: "R.S. Aggarwal",    subject: "Mathematics", color: "#ef4444" },
      { title: "NDA/NA General Ability Test",   author: "Arihant",          subject: "GAT",         color: "#6366f1" },
      { title: "SSB Interview",                 author: "SS Bhui",          subject: "SSB",         color: "#f59e0b" },
      { title: "NDA Previous Year Papers",      author: "Kiran Publications", subject: "PYQs",      color: "#0ea5e9" },
    ],

    eligibility: {
      nationality:          "Indian Citizen / Subjects of Nepal or Bhutan",
      ageMin:               16,
      ageMax:               19,
      ageRelaxation:        { sc_st: 0, obc: 0, pwd: 0, ews: 0 },
      education:            "12th Pass (or appearing) from a recognised board. For Air Force/Navy: Physics & Maths compulsory in 12th.",
      qualificationRequired: ["12th"],
      categoryEligibility:  ["General", "OBC", "SC", "ST", "EWS"],
      genderEligibility:    "Male",
      stateEligibility:     ["All India"],
      attemptsGen:          "No limit (within age)",
      attemptsOBC:          "No limit (within age)",
      attemptsScSt:         "No limit (within age)",
      ageRelaxNote:         "Age: 16.5 to 19.5 years on the first day of the month the course commences. No age relaxation for any category.",
    },

    salaryRange:    { min: 56100, max: 177500, grade: "Lieutenant onwards after commissioning" },
    examType:       "Defense",
    examFrequency:  "Bi-Yearly",
    totalVacancies: 404,
    tags:           ["Defence", "NDA", "Army", "Navy", "Air Force", "12th Pass", "UPSC", "Commissioned Officer"],
    officialSite:   "https://upsc.gov.in",
    applyLink:      "https://upsconline.nic.in",
    tips: "For NDA, mathematics preparation must start from 11th standard. Many aspirants fail because they start too late. Aim to complete the written exam syllabus 3 months before the exam and focus on SSB preparation.",
  },

  // ════════════════════════════════════════════════════════════
  // 9. CTET
  // ════════════════════════════════════════════════════════════
  {
    slug:     "ctet-2025",
    title:    "CTET 2025",
    category: "Teaching",
    featured: false,
    active:   true,
    isPublished: true,

    overview: `The Central Teacher Eligibility Test (CTET) is conducted by CBSE to certify candidates who want to teach in Central Government Schools (KVS, NVS, Army Schools, Tibetan Schools) for Classes 1–8. CTET qualification is also accepted by many state governments and private schools.\n\nCTET has two papers — Paper I for Class 1–5 teachers (Primary) and Paper II for Class 6–8 teachers (Upper Primary). A candidate can appear in both papers. CTET certificate is valid for lifetime (made permanent in 2021).`,

    alertNote: "CTET 2025 notification expected in September 2025. Exam likely in December 2025.",

    stages: [
      { name: "Paper I",  type: "Objective", papers: "5 Sections", totalMarks: "150", nature: "Pass/Fail (60% required)" },
      { name: "Paper II", type: "Objective", papers: "4 Sections", totalMarks: "150", nature: "Pass/Fail (60% required)" },
    ],
    structureNote: "Minimum 60% marks (90/150) required to pass. SC/ST/OBC/PwBD: 55% (82/150). CTET is qualifying — not merit-based. No negative marking.",

    roadmap: [
      { step: 1, title: "Child Development & Pedagogy", desc: "Most important section — 30 marks in both papers. Cover Piaget, Vygotsky, Kohlberg theories. Learning, motivation, individual differences, inclusive education.", tag: "Highest Priority" },
      { step: 2, title: "Language I & II",              desc: "Choose your language carefully. Pedagogy of language teaching carries more marks than grammar. Focus on comprehension and pedagogy questions.", tag: "30+30 Marks" },
      { step: 3, title: "Subject Knowledge",            desc: "Paper I: Maths + Environmental Studies (EVS). Paper II: Choose one from Maths/Science or Social Studies. NCERT books Class 1–8 are sufficient.", tag: "Paper Specific" },
      { step: 4, title: "Practice Mock Tests",          desc: "CTET has no negative marking — attempt all questions. Build speed. Previous year papers are very useful as question patterns repeat.", tag: "Last Month" },
    ],

    syllabus: [
      {
        paperName:  "Paper I — Primary (Class 1–5)",
        marks:      150,
        colorClass: "gs1",
        topics:     ["Child Development & Pedagogy (30 Qs)", "Language I — Hindi/English (30 Qs)", "Language II (30 Qs)", "Mathematics (30 Qs)", "Environmental Studies — EVS (30 Qs)"],
      },
      {
        paperName:  "Paper II — Upper Primary (Class 6–8)",
        marks:      150,
        colorClass: "gs2",
        topics:     ["Child Development & Pedagogy (30 Qs)", "Language I (30 Qs)", "Language II (30 Qs)", "Mathematics & Science OR Social Studies/Social Science (60 Qs)"],
      },
    ],

    books: [
      { title: "CTET & TETs Child Development & Pedagogy", author: "Arihant",          subject: "CDP",         color: "#8b5cf6" },
      { title: "CTET Paper 1 Success Master",              author: "Arihant",          subject: "Paper I",     color: "#6366f1" },
      { title: "CTET Paper 2 (Social Science)",            author: "Kiran Publications", subject: "Social Sci", color: "#0ea5e9" },
      { title: "NCERT Books Class 1–8",                    author: "NCERT",            subject: "Subject Knowledge", color: "#10b981" },
    ],

    eligibility: {
      nationality:          "Indian Citizen",
      ageMin:               17,
      ageMax:               null,
      ageRelaxation:        { sc_st: 0, obc: 0, pwd: 0, ews: 0 },
      education:            "Paper I: 12th Pass with 50% marks + 2-year D.El.Ed OR Graduation + B.Ed. Paper II: Graduation with 50% marks + B.Ed OR D.El.Ed special.",
      qualificationRequired: ["12th", "Graduation"],
      categoryEligibility:  ["General", "OBC", "SC", "ST", "EWS"],
      genderEligibility:    "All",
      stateEligibility:     ["All India"],
      attemptsGen:          "No limit",
      attemptsOBC:          "No limit",
      attemptsScSt:         "No limit",
      ageRelaxNote:         "No maximum age limit for CTET. Candidates appearing in final year of qualifying exam can also apply.",
    },

    salaryRange:    { min: 35400, max: 112400, grade: "Depends on school (KVS/NVS pay scales)" },
    examType:       "National",
    examFrequency:  "Yearly",
    totalVacancies: 0,
    tags:           ["Teaching", "CTET", "CBSE", "Teacher Eligibility", "KVS", "NVS", "Primary Teacher", "TGT"],
    officialSite:   "https://ctet.nic.in",
    applyLink:      "https://ctet.nic.in",
    tips: "Child Development & Pedagogy is the most scoring section — it's the same in both papers. Master CDP thoroughly and you're already 20% done for both papers. NCERT Class 1–8 textbooks are your best resource.",
  },

  // ════════════════════════════════════════════════════════════
  // 10. SSC GD Constable
  // ════════════════════════════════════════════════════════════
  {
    slug:     "ssc-gd-2025",
    title:    "SSC GD Constable 2025",
    category: "Police",
    featured: false,
    active:   true,
    isPublished: true,

    overview: `SSC General Duty (GD) Constable exam recruits constables for Central Armed Police Forces — BSF, CRPF, CISF, ITBP, SSB, NIA, SSF, and Rifleman in Assam Rifles. It is one of the most popular exams among 10th Pass candidates seeking a government job with uniform.\n\nSSC GD 2025 is expected to notify 50,000+ vacancies. The exam involves a written test, physical standard test, physical efficiency test, and medical examination.`,

    alertNote: "SSC GD Constable 2025 notification expected in Q3 2025. Previous cycle (2024) had 39,481 vacancies.",

    stages: [
      { name: "CBT",             type: "CBT Objective",  papers: "4 Sections", totalMarks: "160", nature: "Merit-based" },
      { name: "PET/PST",         type: "Physical Test",  papers: "Running + Height/Weight/Chest", totalMarks: "Qualifying", nature: "Qualifying" },
      { name: "Medical Exam",    type: "Medical",        papers: "—",          totalMarks: "Qualifying", nature: "Qualifying" },
      { name: "Document Verification", type: "DV",       papers: "—",          totalMarks: "—",  nature: "Final" },
    ],
    structureNote: "Male: Run 5 km in 24 min, Height 170 cm (165 cm for hill states), Chest 80–85 cm. Female: Run 1.6 km in 8.5 min, Height 157 cm (155 cm for hill states).",

    roadmap: [
      { step: 1, title: "10th Level Written Exam",  desc: "CBT covers elementary Maths, Reasoning, GK/General Awareness, and English/Hindi. Standard is 10th class. Focus on speed — 60 minutes for 80 questions.", tag: "Written" },
      { step: 2, title: "Physical Training",         desc: "Running is the biggest eliminator in PET. Start training 3 months before exam. Male: run 5 km in 24 mins. Build stamina gradually with interval training.", tag: "Most Important" },
      { step: 3, title: "Medical Standards",         desc: "Check eyesight (6/6 in better eye, 6/9 in worse), hearing, and overall medical fitness well in advance. Correct any deficiencies before appearing.", tag: "Check Early" },
    ],

    syllabus: [
      {
        paperName:  "CBT — All 4 Sections",
        marks:      160,
        colorClass: "gs1",
        topics:     ["Elementary Mathematics (40 Qs): Number System, Operations, Mensuration, Statistics", "General Intelligence & Reasoning (40 Qs): Analogies, Coding, Series, Non-Verbal", "General Knowledge & Awareness (40 Qs): History, Geography, Polity, Science, Current Affairs", "English/Hindi (40 Qs): Grammar, Vocabulary, Comprehension"],
      },
    ],

    books: [
      { title: "SSC GD Constable Guide",    author: "Arihant Publications", subject: "Complete Prep", color: "#0ea5e9" },
      { title: "Lucent's General Knowledge", author: "Lucent",              subject: "GK",            color: "#10b981" },
      { title: "SSC GD Previous Papers",    author: "Kiran Publications",   subject: "PYQs",          color: "#6366f1" },
    ],

    eligibility: {
      nationality:          "Indian Citizen",
      ageMin:               18,
      ageMax:               23,
      ageRelaxation:        { sc_st: 5, obc: 3, pwd: 10, ews: 0 },
      education:            "10th Pass (Matriculation) from a recognised board",
      qualificationRequired: ["10th"],
      categoryEligibility:  ["General", "OBC", "SC", "ST", "EWS"],
      genderEligibility:    "All",
      stateEligibility:     ["All India"],
      attemptsGen:          "No limit (within age)",
      attemptsOBC:          "No limit (within age)",
      attemptsScSt:         "No limit (within age)",
      ageRelaxNote:         "Age: 18–23 for General/EWS. Upper age relaxation: OBC +3, SC/ST +5, Ex-Servicemen as per rules.",
    },

    salaryRange:    { min: 21700, max: 69100, grade: "Level 3 (7th CPC) + CAPF allowances" },
    examType:       "National",
    examFrequency:  "Yearly",
    totalVacancies: 39481,
    tags:           ["Police", "SSC GD", "Constable", "CRPF", "BSF", "CISF", "ITBP", "10th Pass", "Uniform"],
    officialSite:   "https://ssc.gov.in",
    applyLink:      "https://ssc.gov.in",
    tips: "Physical preparation is equally important as written exam for SSC GD. Start running from Day 1. Many candidates crack the written test but fail PET due to lack of physical training. Don't make this mistake.",
  },

];

// ── Seed function ─────────────────────────────────────────────
async function seedExamGuides() {
  try {
    console.log("🚀 Starting seed...\n");

    for (const exam of exams) {
      const existing = await ExamGuide.findOne({ slug: exam.slug });

      if (existing) {
        await ExamGuide.updateOne({ slug: exam.slug }, { $set: exam });
        console.log(`✅ Updated : ${exam.title}`);
      } else {
        await ExamGuide.create(exam);
        console.log(`🆕 Created : ${exam.title}`);
      }
    }

    console.log("\n✅ All 10 exams seeded successfully!");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Seed Error:", err.message);
    mongoose.disconnect();
  }
}

seedExamGuides();