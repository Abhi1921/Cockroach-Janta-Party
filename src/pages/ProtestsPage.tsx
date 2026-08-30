import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Calendar, ShieldAlert, Search, MapPin, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProtestsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const protestEntries = [
    {
      date: '5 September 2026 (UPCOMING)',
      title: '5 September Delhi March: Chalo Police HQ & India Gate',
      desc: 'CJP doubles down on its nationwide youth protest march to Delhi Police HQ over pending assurances on FIR quashing and compensation. "Be ready for cockroaches!"',
      location: 'India Gate / Delhi Police HQ'
    },
    {
      date: '29 August 2026 at 09:30 pm',
      title: 'When the Parent Organization Gets Sent to the Kids\' Table',
      desc: 'Abhijeet Dipke of CJP points out that the BJP might be outgrowing its ideological shadow, leaving the RSS to wonder if it\'s still the one holding the remote.',
      location: 'New Delhi'
    },
    {
      date: '26 August 2026 at 09:00 pm',
      title: 'FIRs and Education: The Maharashtra Field Trip Chronicles',
      desc: 'When a simple school visit becomes a legal battle, you know the system is running on pure, unfiltered anxiety.',
      location: 'Latur, MH'
    },
    {
      date: '25 August 2026 at 12:52 pm',
      title: 'Will The Cockroach Janta Party Actually Move The Needle?',
      desc: 'The IISS asks if our protests will produce change. We ask if the system can survive its own refusal to listen.',
      location: 'National'
    },
    {
      date: '25 August 2026 at 12:52 pm',
      title: 'School Inspections or State Security Threats? CJP Under Fire',
      desc: 'When checking on the state of local education earns you a police report, you know the system is working exactly as intended.',
      location: 'Maharashtra'
    },
    {
      date: '24 August 2026 at 11:31 am',
      title: 'The NDA Invite: When Your Identity Becomes a Strategic Asset',
      desc: 'A Union Minister has extended an offer for the Cockroach Janta Party to join the NDA. We examine the absurdity of this political courtship.',
      location: 'New Delhi'
    },
    {
      date: '23 August 2026 at 11:01 pm',
      title: 'School Inspections or Just Another Tuesday in the System?',
      desc: 'When the line between civic concern and trespassing blurs, the system reaches for its favorite weapon: the FIR.',
      location: 'Nagpur, MH'
    },
    {
      date: '22 August 2026 at 10:53 am',
      title: 'Stones, Smashed Glass, and the Same Old Script in India',
      desc: 'When the discourse turns from policy to pelted stones, we know exactly which playbook is being opened. A look at recent reported incidents.',
      location: 'Delhi'
    },
    {
      date: '22 August 2026 at 10:53 am',
      title: 'When the NDA Comes Knocking: Why Abhijeet Dipke Said No',
      desc: 'A Union Minister tried to recruit Abhijeet Dipke into the NDA fold, but the offer hit a wall. We break down the optics of this rejection.',
      location: 'New Delhi'
    },
    {
      date: '22 August 2026 at 10:53 am',
      title: 'The Curious Case of the Perpetual Student: A Ministerial Inquiry',
      desc: 'Union Minister Kiren Rijiju recently raised eyebrows by questioning the academic legitimacy of CJP founder Abhijeet Dipke. A classic move in the Indian political playbook.',
      location: 'New Delhi'
    },
    {
      date: '19 August 2026 at 05:53 pm',
      title: 'The NDA Wants Us: Why We Said No to the Golden Invitation',
      desc: 'When the establishment comes knocking with an invitation, you know you have successfully annoyed them enough to be considered a threat.',
      location: 'New Delhi'
    },
    {
      date: '19 August 2026 at 05:53 pm',
      title: 'The Classroom Litmus Test: Why Ministers Should Sit on Wooden Benches',
      desc: 'If the state education system is good enough for the masses, why are the architects of that system opting for private exits?',
      location: 'National'
    },
    {
      date: '17 August 2026 at 11:37 am',
      title: 'Abhijeet Dipke Picks Up a Broom: A Lesson in Radical Housekeeping',
      desc: 'When the system refuses to provide basic infrastructure, the Cockroach Janta Party decides to do the janitorial work themselves.',
      location: 'Delhi'
    },
    {
      date: '17 August 2026 at 11:37 am',
      title: 'When Silence Isn\'t an Option: Solidarity in a Fractured Bengal',
      desc: 'A reminder that political movements are built on the shoulders of individuals, not just slogans.',
      location: 'West Bengal'
    },
    {
      date: '17 August 2026 at 11:37 am',
      title: 'Booking a Hall for Cockroaches: The New National Sport',
      desc: 'When a political movement is so effective that even a local banquet hall owner fears for their business license, you are doing something right.',
      location: 'Delhi'
    },
    {
      date: '14 August 2026 at 09:21 pm',
      title: '37 Days at Jantar Mantar: The Cockroach Janta Party Isn\'t Done Yet',
      desc: 'Abhijeet Dipke confirms the next chapter is brewing after a 37-day stint at Jantar Mantar. We aren\'t going anywhere.',
      location: 'Jantar Mantar, Delhi'
    },
    {
      date: '14 August 2026 at 09:21 pm',
      title: 'Lathis and Logic: When the System Hits Back',
      desc: 'A video call between Abhijeet Dipke and Devendra Mahto brings the reality of state-sanctioned persuasion into sharp focus.',
      location: 'Ranchi, JH'
    },
    {
      date: '14 August 2026 at 09:21 pm',
      title: 'The IIT-CA Takeover: Why the Cockroach Janta Party is Overqualified',
      desc: 'A dozen professionals from IIT and CA backgrounds are leading the CJP. Overqualified activists choosing satire over boardrooms.',
      location: 'National'
    },
    {
      date: '12 August 2026 at 06:26 pm',
      title: 'Gen Alpha vs. The Potholes: A Road to School Protest',
      desc: 'When the government forgets the road, the children take to the streets. A look at the recent protest in UP.',
      location: 'Uttar Pradesh'
    },
    {
      date: '12 August 2026 at 06:26 pm',
      title: 'The Supreme Court vs. The Cockroach: A Legal Comedy of Errors',
      desc: 'When the highest court in the land takes notice of a viral political movement, satire has hit close to home.',
      location: 'Supreme Court, Delhi'
    },
    {
      date: '12 August 2026 at 06:25 pm',
      title: 'Abhijeet Dipke and the Art of Not Hijacking a Movement',
      desc: 'When the spotlight threatens to outshine the cause, sometimes the most radical act is staying home.',
      location: 'National'
    },
    {
      date: '12 August 2026 at 06:22 pm',
      title: 'Abhijeet Dipke and the Art of Weaponizing the Police Station',
      desc: 'When the internet decides to press charges instead of clicking the block button, discourse reaches peak Indian comedy.',
      location: 'Delhi'
    },
    {
      date: '11 August 2026 at 02:30 pm',
      title: 'Lathis Over Logic: The State\'s New Syllabus for Students',
      desc: 'When student leaders face physical force for simply speaking, democracy starts looking like a fragile glass house.',
      location: 'Ranchi, JH'
    },
    {
      date: '11 August 2026 at 02:29 pm',
      title: 'Abhijeet Dipke vs The Uniform: A Lesson in Bureaucratic Friction',
      desc: 'When the system meets a cockroach, it usually tries to stomp. This time, the cockroach decided to file a complaint instead.',
      location: 'Delhi'
    },
    {
      date: '10 August 2026 at 01:28 pm',
      title: 'The Cockroach Pivot: Jharkhand and the Art of Eating Wires',
      desc: 'As the CJP aligns with Jharkhand student protests, the real test of its survival as a movement begins.',
      location: 'Jharkhand'
    },
    {
      date: '9 August 2026 at 08:18 pm',
      title: 'Eggs, Courts, and the Art of Judicial Comedy',
      desc: 'When the highest court in the land decides to trade constitutional gravity for culinary critiques.',
      location: 'New Delhi'
    },
    {
      date: '8 August 2026 at 10:25 am',
      title: 'The Gen Z Divide: When the Sangh and the Party Lose the Plot',
      desc: 'RSS chief Mohan Bhagwat recently defended the youth, creating a rare moment of ideological friction.',
      location: 'Nagpur'
    },
    {
      date: '8 August 2026 at 10:25 am',
      title: 'From Exam Halls to Delivery Apps: The CJP’s Next Frontier',
      desc: 'As the dust settles on recent political noise, the focus shifts to civil service aspirants and delivery riders.',
      location: 'National'
    },
    {
      date: '7 August 2026 at 06:38 pm',
      title: 'Unemployment Isn\'t Just A Statistic, It\'s Our National Hobby',
      desc: 'As CJP founder Abhijeet Dipke takes the unemployment fight to a national stage, we look at empty promises.',
      location: 'National'
    },
    {
      date: '7 August 2026 at 06:38 pm',
      title: 'Jharkhand Protests: When the Student Movement Gets Picky',
      desc: 'As Jharkhand students gear up for a massive blockade on August 10, they make one thing clear: no external saviors.',
      location: 'Ranchi, JH'
    },
    {
      date: '6 August 2026 at 11:05 am',
      title: 'The Long March to Ranchi: Cockroaches Take the Streets',
      desc: 'As the Cockroach Janta Party pivots toward Jharkhand, the real test of movement-building begins.',
      location: 'Ranchi, JH'
    },
    {
      date: '6 August 2026 at 11:04 am',
      title: 'The Cockroach Janta Party: From Ballot Box to Pressure Cooker',
      desc: 'Trading electoral ambitions for the art of the nudge, proving that the best way to change the system is to be the bug in it.',
      location: 'National'
    },
    {
      date: '5 August 2026 at 02:07 pm',
      title: 'Jharkhand Exam Chaos: The Annual Ritual of Paper Leaks',
      desc: 'Jharkhand\'s youth are back on the streets, tired of the paper leak cycle.',
      location: 'Jharkhand'
    },
    {
      date: '5 August 2026 at 02:07 pm',
      title: 'Abhijeet Dipke and the Great US Education Funding Debate',
      desc: 'When the discourse shifts from local exam woes to international funding optics, things get predictably messy.',
      location: 'New Delhi'
    },
    {
      date: '5 August 2026 at 02:07 pm',
      title: 'Scholarships, Loans, and the RTI Audit of Our Collective Sanity',
      desc: 'When the paperwork of a private citizen becomes the national obsession, it is time to look at systemic gaps.',
      location: 'National'
    },
    {
      date: '4 August 2026 at 11:40 am',
      title: 'Beyond the Paper: Why the Cockroach Janta Party Keeps Crawling',
      desc: 'The paper leaks are just the tip of the iceberg; CJP reminds us that the system is broken from the floor up.',
      location: 'National'
    },
    {
      date: '4 August 2026 at 11:40 am',
      title: 'The Cockroach Janta Party: Will They Finally Crawl into the Ballot',
      desc: 'Facing the classic existential crisis of every grassroots movement: keep protesting or join the circus.',
      location: 'New Delhi'
    },
    {
      date: '4 August 2026 at 11:40 am',
      title: 'Abhijeet Dipke Takes a Break: Why Even Cockroaches Need Sleep',
      desc: 'When the man behind the movement is told to take a seat, it is a stark reminder that agitators are human.',
      location: 'Delhi'
    },
    {
      date: '3 August 2026 at 05:12 pm',
      title: 'Yoga, Ghee, and Governance: Why Baba Ramdev Should Stay in His Lane',
      desc: 'When the line between corporate profit and civic duty blurs, it is time for a reality check.',
      location: 'Haridwar'
    },
    {
      date: '3 August 2026 at 09:56 am',
      title: 'The Noida FIR: When Public Outbursts Become a Subscription Service',
      desc: 'When does a public outburst become a crime, and when does it become political discourse? Unpacking the Noida FIR.',
      location: 'Noida, UP'
    },
    {
      date: '3 August 2026 at 09:56 am',
      title: 'When Political Allegiance Becomes a Mandatory Subscription',
      desc: 'Highlighting a recurring theme in our democracy: the aggressive recruitment drive that feels like an ultimatum.',
      location: 'National'
    },
    {
      date: '3 August 2026 at 09:56 am',
      title: 'Three Faces, One Revolt: The Architects of the Cockroach Janta Party',
      desc: 'Meet the men behind the screen: Abhijeet Dipke, Ashutosh Ranka, and Saurav Das — unlikely architects of viral rage.',
      location: 'Delhi / Mumbai'
    },
    {
      date: '1 August 2026 at 03:23 pm',
      title: 'When the Party Door Knocks, It Usually Wants Your Soul',
      desc: 'A mother’s account of threats aimed at the CJP founder reminds us that the only thing worse than being ignored is being noticed.',
      location: 'Delhi'
    },
    {
      date: '1 August 2026 at 03:23 pm',
      title: 'The Cockroach Janta Party: Why Critics Fear the Floor',
      desc: 'Critics are busy counting legs while we are busy building a movement. Here is why the CJP protest is more than a nuisance.',
      location: 'National'
    },
    {
      date: '31 July 2026 at 10:26 am',
      title: 'Delhi Protesters Get A Reprieve: The System Blinks First',
      desc: 'Delhi authorities have signaled a retreat on legal action against CJP protesters, with a formal review underway.',
      location: 'Delhi'
    },
    {
      date: '31 July 2026 at 10:25 am',
      title: 'Abhijeet Dipke and the Ministerial Gaslight Special',
      desc: 'When a minister hits back at claims, the public gets a masterclass in deflection.',
      location: 'New Delhi'
    },
    {
      date: '31 July 2026 at 10:25 am',
      title: 'Abhijeet Dipke and the BJP\'s Very Polite Invitation',
      desc: 'When the establishment comes knocking with an offer you cannot refuse, the standard response is to go public.',
      location: 'New Delhi'
    },
    {
      date: '30 July 2026 at 10:09 am',
      title: 'Students Are Not Terrorists: The New Syllabus of State Paranoia',
      desc: 'When the state runs out of arguments, it reaches for the UAPA handbook.',
      location: 'Delhi'
    },
    {
      date: '30 July 2026 at 10:07 am',
      title: 'Abhijeet Dipke: The Student Witch-Hunt Has An Expiry Date',
      desc: 'Abhijeet Dipke fires a warning shot at the establishment, demanding an end to systemic harassment of students.',
      location: 'Delhi'
    },
    {
      date: '30 July 2026 at 10:07 am',
      title: 'Governance as Content: Why the PM is Just Another Influencer',
      desc: 'When the Prime Minister treats the nation like a vlog, perhaps it is time we treat the state like a brand deal.',
      location: 'National'
    },
    {
      date: '27 July 2026 at 06:03 pm',
      title: 'Abhijeet Dipke and the Art of Not Getting Comfortable',
      desc: 'A sobering reminder that while visibility is nice, systemic change requires more than soundbites.',
      location: 'Delhi'
    },
    {
      date: '26 July 2026 at 08:07 pm',
      title: 'Abhijeet Dipke and the Typhoid Irony: A Microbe vs. The Movement',
      desc: 'When the man who built a political identity on cockroach resilience gets sidelined by a basic waterborne pathogen.',
      location: 'Delhi'
    },
    {
      date: '25 July 2026 at 01:53 pm',
      title: 'When the Party of Order Needs a Few Goons to Keep Order',
      desc: 'If powers send local muscle to handle a few cockroaches, maybe we are finally getting under their skin.',
      location: 'Delhi'
    },
    {
      date: '25 July 2026 at 11:42 am',
      title: 'The BJP\'s Playbook: Why They Are Rattled by the Cockroach Janta Party',
      desc: 'When the establishment gets rattled by a few cockroaches, they reach for the agitprop handbook.',
      location: 'New Delhi'
    },
    {
      date: '18 July 2026 at 06:42 pm',
      title: 'Abhijeet Dipke Starts Hunger Strike After Wangchuk Hospitalized',
      desc: 'CJP\'s Abhijeet Dipke announces indefinite hunger strike after climate activist Sonam Wangchuk moved to hospital.',
      location: 'Jantar Mantar, Delhi'
    },
    {
      date: '18 July 2026 at 05:08 pm',
      title: 'Ladakh\'s Climate Fast: Govt\'s Silence Fuels Alarm',
      desc: 'The government\'s silence on Sonam Wangchuk\'s climate fast raises serious concerns about administration priorities.',
      location: 'Ladakh / Delhi'
    },
    {
      date: '18 July 2026 at 05:08 pm',
      title: 'Abhijeet Dipke Begins Hunger Strike as Protest Intensifies',
      desc: 'In solidarity with Sonam Wangchuk, CJP\'s Abhijeet Dipke begins a hunger strike.',
      location: 'Jantar Mantar, Delhi'
    },
    {
      date: '18 July 2026 at 05:08 pm',
      title: 'Ladakh\'s Climate Crisis: Wangchuk\'s Hunger Strike Exposes Government',
      desc: 'Sonam Wangchuk\'s hunger strike highlights government apathy, drawing sharp criticism from CJP.',
      location: 'Ladakh'
    },
    {
      date: '17 July 2026 at 02:48 pm',
      title: 'CJP Chief Dipke, Delhi Police Clash Over Protest Shade',
      desc: 'CJP Chief Abhijeet Dipke and Delhi Police trade barbs over a shade structure for Sonam Wangchuk\'s protest.',
      location: 'Jantar Mantar, Delhi'
    },
    {
      date: '17 July 2026 at 02:48 pm',
      title: 'Ambika Shukla Backs TCJP Protest, Amplifying Gen Z Discontent',
      desc: 'Ambika Shukla, sister of Maneka Gandhi, lends support to Cockroach Janta Party\'s Delhi protest.',
      location: 'Delhi'
    },
    {
      date: '17 July 2026 at 02:48 pm',
      title: 'Gen Z Demands Answers: JEE Protesters Confront Authorities',
      desc: 'Young Indians take to the streets demanding accountability for the JEE exam crisis. CJP stands in solidarity.',
      location: 'Delhi'
    },
    {
      date: '17 July 2026 at 02:48 pm',
      title: 'Congress Eyes CJP: A Strategic Hesitation',
      desc: 'Congress weighs the risks and rewards of backing the unconventional Cockroach Janta Party.',
      location: 'New Delhi'
    },
    {
      date: '15 July 2026 at 08:24 pm',
      title: 'Sonam Wangchuk\'s Climate Fast: 25 Days of Unanswered Calls',
      desc: 'Ladakh\'s future hangs in the balance as climate fast reaches 25 days, with CJP demanding government response.',
      location: 'Ladakh / Delhi'
    },
    {
      date: '15 July 2026 at 02:32 pm',
      title: 'Abhijeet Dipke Visits Mukherjee Nagar, Amplifies Gen Z Aspirations',
      desc: 'Gen Z\'s protest gains momentum as Abhijeet Dipke connects with aspiring civil servants in Mukherjee Nagar.',
      location: 'Mukherjee Nagar, Delhi'
    },
    {
      date: '15 July 2026 at 02:32 pm',
      title: 'Gen Z Demands Accountability: Exam Paper Leaks Ignite Youth Fury',
      desc: 'Gen Z\'s patience wears thin as exam paper leaks become a recurring crisis, prompting calls for systemic reform.',
      location: 'Delhi'
    },
    {
      date: '15 July 2026 at 12:41 am',
      title: 'Gen Z Parliament March: Dipke Calls for July 20 Protest, Ghosh Backs',
      desc: 'CJP founder Abhijeet Dipke calls for July 20 Parliament march; economist Jayati Ghosh backs student protest.',
      location: 'New Delhi'
    },
    {
      date: '12 July 2026 at 11:06 am',
      title: 'Cockroach Janta Party: From Meme to Movement on Campus',
      desc: 'Examining how a satirical emblem spread rapidly across college campuses in Delhi and Maharashtra.',
      location: 'Delhi / Campus'
    },
    {
      date: '10 July 2026 at 11:31 pm',
      title: 'CJP Founder Cautions Students Against Life-Threatening Protests',
      desc: 'Abhijeet Dipke references Sonam Wangchuk\'s fasting to urge students against dangerous protests.',
      location: 'Delhi'
    },
    {
      date: '10 July 2026 at 11:31 pm',
      title: 'Viral Clip: Dipke Clarifies \'Out of Context\' Eating Footage',
      desc: 'CJP\'s Abhijeet Dipke addresses a viral video of him eating during Sonam Wangchuk\'s fast, calling it out of context.',
      location: 'Delhi'
    },
    {
      date: '10 July 2026 at 10:22 am',
      title: 'Delhi HC Unblocks CJP\'s X Account: A Win for Digital Free Speech?',
      desc: 'Delhi High Court orders unblocking of CJP’s X account; Abhijeet Dipke calls it a big victory for free speech.',
      location: 'Delhi High Court'
    },
    {
      date: '8 July 2026 at 11:47 am',
      title: 'Delhi HC Orders Twitter Unblock for Cockroach Janata Party',
      desc: 'The Delhi High Court orders unblocking of CJP\'s Twitter account, a significant win for party leader Abhijeet Dipke.',
      location: 'Delhi High Court'
    },
    {
      date: '7 July 2026 at 11:24 am',
      title: 'NEET Row: CJP Founder\'s \'Birthday Gift\' to Education Minister',
      desc: 'Abhijeet Dipke addresses the ongoing NEET exam crisis, urging Education Minister Dharmendra Pradhan to take responsibility.',
      location: 'New Delhi'
    },
    {
      date: '7 July 2026 at 10:29 am',
      title: 'CJP Protest Day 17: Police Filming Allegations, Wangchuk\'s Fast',
      desc: 'CJP protest day 17: Abhijeet Dipke alleges police filming women volunteers; Sonam Wangchuk\'s fast enters 9th day.',
      location: 'Jantar Mantar, Delhi'
    },
    {
      date: '7 July 2026 at 10:27 am',
      title: 'TCJP Jantar Mantar Protest Gains Momentum: New Faces Join',
      desc: 'Demonstrations at Jantar Mantar draw student delegates and young professionals from across North India.',
      location: 'Jantar Mantar, Delhi'
    },
    {
      date: '2 July 2026 at 10:32 am',
      title: 'Gen Z Unemployment Fuels TCJP Protests: A Grim Reality',
      desc: 'Analyzing the youth jobs crisis fueling India\'s Cockroach Janta Party protests.',
      location: 'National'
    },
    {
      date: '30 June 2026 at 10:53 am',
      title: 'Sonam Wangchuk\'s Fast: Gen Z Demands Justice Amidst Exam Fiasco',
      desc: 'Sonam Wangchuk joins CJP protest, beginning indefinite fast over alleged exam irregularities in NEET and UGC-NET.',
      location: 'Jantar Mantar, Delhi'
    },
    {
      date: '26 June 2026 at 11:10 am',
      title: 'NEET Row: The Education Minister\'s Silent Tragedy',
      desc: 'CJP founder Abhijeet Dipke publicly condemns Education Minister Dharmendra Pradhan over NEET failures.',
      location: 'New Delhi'
    },
    {
      date: '25 June 2026 at 04:32 pm',
      title: 'Delhi Police Says No to CJP: The Art of Being Illegal',
      desc: 'Delhi Police officially designates site as illegal; CJP responds with satirical commentary.',
      location: 'Delhi'
    },
    {
      date: '25 June 2026 at 04:32 pm',
      title: 'Jantar Mantar Standoff: When the Minister Met the Roach',
      desc: 'CJP turns Jantar Mantar into a hub of resistance, refusing to vacate until education demands are addressed.',
      location: 'Jantar Mantar, Delhi'
    },
    {
      date: '24 June 2026 at 03:45 pm',
      title: 'CJP Protestors Denied Food, Water; Dipke Alleges Police Harassment',
      desc: 'Allegations of police harassment surface as Abhijeet Dipke claims protestors were denied basic provisions.',
      location: 'Mumbai'
    },
    {
      date: '23 June 2026 at 11:20 am',
      title: 'Gen Z Occupies Jantar Mantar: Abhijeet Dipke Demands Answers',
      desc: 'Jantar Mantar demonstration highlights Gen Z\'s demand for accountability in exam processes.',
      location: 'Jantar Mantar, Delhi'
    },
    {
      date: '22 June 2026 at 07:58 pm',
      title: 'NEET Paper Leak: CJP Rallies Farmer Unions for Broader Protest',
      desc: 'Abhijeet Dipke seeks support from farmer unions to amplify protests against paper leaks.',
      location: 'Delhi / Haryana'
    },
    {
      date: '22 June 2026 at 09:49 am',
      title: 'Jaipur Attackers Garlands Spark Outrage: A CJP Protest Aftermath',
      desc: 'Attackers who slapped Abhijeet Dipke at CJP protest in Jaipur garlanded after release.',
      location: 'Jaipur, RJ'
    },
    {
      date: '22 June 2026 at 09:49 am',
      title: 'Jaipur Protest: CJP Founder Abhijeet Dipke Allegedly Slapped',
      desc: 'Abhijeet Dipke slapped during Jaipur protest; CJP alleges intimidation tactics and demands accountability.',
      location: 'Jaipur, RJ'
    },
    {
      date: '20 June 2026 at 04:25 pm',
      title: 'NEET Aspirant\'s Father Meets TCJP Founder Amidst Exam Stress Crisis',
      desc: 'Abhijeet Dipke meets father of NEET aspirant, underscoring systemic crisis in India\'s education system.',
      location: 'New Delhi'
    },
    {
      date: '19 June 2026 at 10:37 am',
      title: 'Jaipur Protest Denied: TCJP Questions Rajasthan Police\'s \'Fear\'',
      desc: 'Cockroach Janta Party denied permission for Jaipur protest; asks what scared Rajasthan Police.',
      location: 'Jaipur, RJ'
    },
    {
      date: '19 June 2026 at 10:37 am',
      title: 'Jaipur Protest: Slap Incident Highlights Youth Frustration',
      desc: 'Physical assault on CJP founder Abhijeet Dipke at Jaipur protest brings youth frustrations to the forefront.',
      location: 'Jaipur, RJ'
    },
    {
      date: '18 June 2026 at 11:29 pm',
      title: 'Dipke in Nagpur: Anti-Pradhan Protest Follows Jaipur Slap',
      desc: 'Abhijeet Dipke in Nagpur for anti-Pradhan protest, highlighting student issues after Jaipur slap incident.',
      location: 'Nagpur, MH'
    },
    {
      date: '17 June 2026 at 11:27 pm',
      title: 'Satire: Protests Erupt as Youth Demand More Than Survival',
      desc: 'CJP Dispatch desk: The Cockroach Janta Party initiates a new wave of organized protests across major urban centers.',
      location: 'National'
    },
    {
      date: '16 June 2026 at 05:35 pm',
      title: 'CJP Founder Alleges RSS Link in Attack on Student Voices',
      desc: 'CJP founder Dipke alleges attack on student voices was orchestrated by RSS-linked individuals.',
      location: 'New Delhi'
    },
    {
      date: '16 June 2026 at 05:31 pm',
      title: 'Abhijeet Dipke Allegedly Slapped at Jaipur Protest',
      desc: 'CJP founder Abhijeet Dipke allegedly slapped during Jaipur protest. The Hindu reports on the incident.',
      location: 'Jaipur, RJ'
    }
  ];

  const filtered = protestEntries.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="protests-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title="CJP Protest News Timeline | Independent Satirical Coverage"
        description="Comprehensive date-wise protest timeline and satirical news coverage of Cockroach Janta Party from June 2026 to 29 August 2026."
        canonicalUrl="http://localhost:3000/protests"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            INDEPENDENT SATIRE · PROTEST COVERAGE
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-[#16120D] mb-4 uppercase">
            PROTEST NEWS TIMELINE
          </h1>
          <p className="text-[#3A332B] text-sm md:text-base leading-relaxed font-medium">
            Satirical news coverage and commentary about CJP-related protests across India — updated as articles are published.
          </p>
        </div>

        {/* UPCOMING FEATURED PROTEST BANNER: 5 SEPTEMBER DELHI MARCH */}
        <div className="bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-10 max-w-5xl mx-auto mb-16 shadow-2xl relative overflow-hidden">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Left Poster Image */}
            <div className="md:col-span-5 flex justify-center">
              <div className="border-2 border-[#EADBCE] bg-[#16120D] p-2 shadow-xl">
                <img
                  src="/cjp_sep5_protest_poster.png"
                  alt="5 September Delhi March Protest Poster - Cockroach Janta Party"
                  className="w-full max-h-[380px] object-contain mx-auto"
                />
              </div>
            </div>

            {/* Right Protest Details */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#D9572B] uppercase tracking-widest">
                <Megaphone size={16} /> <span>UPCOMING MAJOR PROTEST MARCH · 5 SEPTEMBER 2026</span>
              </div>

              <h2 className="font-display text-4xl md:text-6xl text-[#F5EFE6] uppercase leading-tight">
                5 SEPTEMBER DELHI MARCH
              </h2>

              <div className="flex items-center gap-4 text-xs font-bold text-[#EADBCE] bg-[#16120D]/60 p-3 border border-[#EADBCE]/30">
                <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#D9572B]" /> INDIA GATE → DELHI POLICE HQ</span>
                <span>·</span>
                <span>TIME: 09:00 AM IST</span>
              </div>

              <p className="text-xs md:text-sm text-[#EADBCE] leading-relaxed font-medium">
                CJP doubles down on its nationwide youth protest march to Delhi Police HQ over pending commitments regarding 2,700 student FIR quashings, contractor road warranty boards, and NEET exam fairness.
              </p>

              <div className="bg-[#D9572B] text-white p-3 text-xs font-extrabold uppercase tracking-wider">
                "BE READY FOR COCKROACHES ON SEPTEMBER 5!" — CJP SECRETARIAT
              </div>

              <div className="pt-2">
                <Link
                  to="/join"
                  className="inline-block bg-[#F5EFE6] text-[#16120D] text-xs font-extrabold uppercase tracking-wider px-6 py-3 border border-[#16120D] hover:bg-[#D9572B] hover:text-white transition-all shadow-md"
                >
                  REGISTER AS MARCH OBSERVER →
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 max-w-4xl mx-auto mb-12 shadow-md flex items-start gap-4">
          <ShieldAlert size={24} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-[#3A332B] font-medium leading-relaxed">
            <span className="font-extrabold text-[#16120D] block uppercase mb-1">EDITORIAL SATIRE NOTICE</span>
            Independent editorial satire on this website — not an official Cockroach Janta Party movement statement. Nothing here is an official CJP statement.
          </div>
        </div>

        {/* Timeline Search Bar */}
        <div className="max-w-4xl mx-auto bg-[#F5EFE6] border-2 border-[#16120D] p-4 mb-8 flex items-center gap-3">
          <Search size={16} className="text-[#3A332B]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search protest timeline by keyword, city (Jaipur, Delhi, Ranchi), or topic (NEET, Jantar Mantar)..."
            className="w-full bg-[#EADBCE] border border-[#16120D] px-3 py-2 text-xs font-bold text-[#16120D] outline-none"
          />
        </div>

        {/* Counter */}
        <div className="max-w-4xl mx-auto flex justify-between items-center mb-8 border-b-2 border-[#16120D] pb-3 text-xs font-extrabold uppercase">
          <span className="text-[#16120D] flex items-center gap-2">
            <Calendar size={14} className="text-[#D9572B]" /> SHOWING {filtered.length} PROTEST TIMELINE ENTRIES
          </span>
          <span className="text-[#D9572B]">JUNE 2026 – 5 SEPT 2026</span>
        </div>

        {/* Timeline List */}
        <div className="space-y-6 max-w-4xl mx-auto mb-20">
          {filtered.map((item, idx) => (
            <div key={idx} className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-xl hover:border-[#D9572B] transition-all">
              <div className="flex justify-between items-center border-b border-[#16120D]/20 pb-2 mb-3 text-[10px] font-extrabold">
                <span className="text-[#D9572B]">{item.date}</span>
                <span className="bg-[#16120D] text-[#F5EFE6] px-2.5 py-0.5 uppercase tracking-wider">{item.location}</span>
              </div>

              <h2 className="font-display text-2xl md:text-3xl text-[#16120D] uppercase mb-2 leading-tight">
                {item.title}
              </h2>

              <p className="text-xs text-[#3A332B] font-medium leading-relaxed mb-4">
                {item.desc}
              </p>

              <div className="pt-3 border-t border-[#16120D]/18 text-[10px] font-extrabold text-[#D9572B] uppercase">
                READ SATIRICAL COVERAGE →
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
