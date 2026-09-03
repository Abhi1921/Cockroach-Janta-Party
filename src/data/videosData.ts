export interface VideoItem {
  id: string;
  title: string;
  category: 'CJP News' | 'Satire Desk' | 'Founder Talks' | 'Campaign Videos' | 'Explainers' | 'Shorts';
  url: string;
  embedUrl: string;
  thumbnail: string;
  duration: string;
  publishDate: string;
  badge: string;
  description: string;
  attribution: string;
}

export const videosData: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'NDTV Report: CJP Calls Off Sept 5 Delhi Protest After SC Orders FIRs Quashed',
    category: 'CJP News',
    url: 'https://www.facebook.com/watch/?v=911189544963956',
    embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D911189544963956',
    thumbnail: '/cjp_sc_fir_quash_poster.png',
    duration: '4:15',
    publishDate: 'SEP 01, 2026',
    badge: 'BREAKING NEWS',
    description: 'Supreme Court invokes Article 142 to quash FIRs against student protesters; CJP calls off planned September 5 march.',
    attribution: 'NDTV News Broadcast / Public Domain Embed'
  },
  {
    id: 'vid-2',
    title: 'CJP Youth Broadcast: Student Protesters Demand NEET Exam Fairness',
    category: 'Campaign Videos',
    url: 'https://youtu.be/wjpWvd6vLrs?si=NPogL-EaWDds50zh',
    embedUrl: 'https://www.youtube.com/embed/wjpWvd6vLrs',
    thumbnail: '/cjp_sep5_protest_poster.png',
    duration: '6:42',
    publishDate: 'AUG 28, 2026',
    badge: 'TRENDING',
    description: 'Youth delegates address press on competitive exam normalization transparency and paper leak safeguards.',
    attribution: 'CJP Official Media Channel'
  },
  {
    id: 'vid-3',
    title: 'Supreme Court Article 142 Order Analysis: CJP Legal Cell Presser',
    category: 'Explainers',
    url: 'https://youtu.be/Y8ZsDEn3JOM?si=rDfvbzF5I2EQhAjh',
    embedUrl: 'https://www.youtube.com/embed/Y8ZsDEn3JOM',
    thumbnail: '/cjp_school_thik_karo_poster.png',
    duration: '8:10',
    publishDate: 'AUG 25, 2026',
    badge: 'SC VERDICT',
    description: 'Legal analysis breaking down constitutional protections for student activists and peaceful assembly.',
    attribution: 'CJP Legal Cell Archive'
  },
  {
    id: 'vid-4',
    title: 'School Thik Karo: Physical Inspection of Municipal School Classrooms',
    category: 'Campaign Videos',
    url: 'https://youtu.be/5yDi6qd16SE?si=zXeGUf4fjkTIOhi0',
    embedUrl: 'https://www.youtube.com/embed/5yDi6qd16SE',
    thumbnail: '/cjp_school_thik_karo_poster.png',
    duration: '5:30',
    publishDate: 'AUG 20, 2026',
    badge: 'EDUCATION',
    description: 'Ward audit team inspects leaking roofs, broken benches, and missing public library facilities.',
    attribution: 'CJP School Audit Team'
  },
  {
    id: 'vid-5',
    title: 'Subterranean Drain Audit & Public RTI Transparency Report',
    category: 'Explainers',
    url: 'https://youtu.be/u1Gu5kl8IIA?si=X6uYjHRsAwiRy8Ji',
    embedUrl: 'https://www.youtube.com/embed/u1Gu5kl8IIA',
    thumbnail: '/cjp_dispatch_paying_attention_poster.png',
    duration: '7:15',
    publishDate: 'AUG 15, 2026',
    badge: 'CIVIC AUDIT',
    description: 'Step-by-step explainer showing how geotagged sewer depth measurements are verified using RTI Section 4.',
    attribution: 'CJP Research Desk'
  },
  {
    id: 'vid-6',
    title: 'Kya Bolti Public: CJP Special Coverage on Student Rights & FIR Quashing',
    category: 'Satire Desk',
    url: 'https://youtu.be/G9VZrhJkQkQ?si=Kt0f7DKE31g-uiOS',
    embedUrl: 'https://www.youtube.com/embed/G9VZrhJkQkQ',
    duration: '9:05',
    thumbnail: '/cjp_black_monday_poster.png',
    publishDate: 'AUG 10, 2026',
    badge: 'FEATURED',
    description: 'Street interviews capturing public humor and reactions to municipal road melting incidents.',
    attribution: 'CJP Street VoxPop Guild'
  },
  {
    id: 'vid-7',
    title: 'Road Paving Warranty Notice Board Audit: On-Site Video Verification',
    category: 'Explainers',
    url: 'https://youtu.be/ixONTJgLuS4?si=CTb1diTx0yaH0Dn0',
    embedUrl: 'https://www.youtube.com/embed/ixONTJgLuS4',
    thumbnail: '/cjp_dispatch_paying_attention_poster.png',
    duration: '4:50',
    publishDate: 'AUG 05, 2026',
    badge: 'RTI AUDIT',
    description: 'Checking whether contractors installed required 3-year warranty boards on newly paved arterial roads.',
    attribution: 'CJP Public Works Cell'
  },
  {
    id: 'vid-8',
    title: 'Abhijeet Dipke Founder Keynote: Why the Cockroach Symbol?',
    category: 'Founder Talks',
    url: 'https://youtu.be/4MKIOz8SqnQ?si=LoEd_0EqkeeJCSXr',
    embedUrl: 'https://www.youtube.com/embed/4MKIOz8SqnQ',
    thumbnail: '/cjp_banner.png',
    duration: '11:20',
    publishDate: 'JUL 30, 2026',
    badge: 'FOUNDER KEYNOTE',
    description: 'Founder Abhijeet Dipke delivers the opening convention address on resilience, RTI activism, and humor.',
    attribution: 'CJP Secretariat Archives'
  },
  {
    id: 'vid-9',
    title: 'Black Monday Pothole Warranty Movement Timeline',
    category: 'Campaign Videos',
    url: 'https://youtu.be/Tcqkuk60hLI?si=2-B2gMAfw0DazA4e',
    embedUrl: 'https://www.youtube.com/embed/Tcqkuk60hLI',
    thumbnail: '/cjp_black_monday_poster.png',
    duration: '6:10',
    publishDate: 'JUL 21, 2026',
    badge: 'BLACK MONDAY',
    description: 'Recap of thousands of citizens wearing black clothing to work in protest of crumbling asphalt paving.',
    attribution: 'CJP Black Monday Guild'
  },
  {
    id: 'vid-10',
    title: 'School Thik Karo: Quick Classroom Roof Audit',
    category: 'Shorts',
    url: 'https://youtube.com/shorts/0Vo0Y2041Ew?si=2r2c0UwUSkeahGpo',
    embedUrl: 'https://www.youtube.com/embed/0Vo0Y2041Ew',
    thumbnail: '/cjp_school_thik_karo_poster.png',
    duration: '0:58',
    publishDate: 'AUG 12, 2026',
    badge: 'SHORTS',
    description: '60-second video report highlighting leaking classroom ceilings during pre-monsoon rains.',
    attribution: 'CJP Mobile Dispatches'
  },
  {
    id: 'vid-11',
    title: 'Subterranean Sewer Audit Short Report',
    category: 'Shorts',
    url: 'https://youtube.com/shorts/O749QR5KxD8?si=P9-2fBCI71iSJPiR',
    embedUrl: 'https://www.youtube.com/embed/O749QR5KxD8',
    thumbnail: '/cjp_dispatch_paying_attention_poster.png',
    duration: '0:45',
    publishDate: 'AUG 18, 2026',
    badge: 'SHORTS',
    description: 'Quick check measuring drain desilting depth in ward 14.',
    attribution: 'CJP Mobile Dispatches'
  },
  {
    id: 'vid-12',
    title: 'Public Library Demand Short',
    category: 'Shorts',
    url: 'https://youtube.com/shorts/zeHWLyUw4XU?si=U8hFaxmn6C-PH9UY',
    embedUrl: 'https://www.youtube.com/embed/zeHWLyUw4XU',
    thumbnail: '/cjp_sep5_protest_poster.png',
    duration: '0:50',
    publishDate: 'AUG 22, 2026',
    badge: 'SHORTS',
    description: 'Students voicing demands for free ward study libraries and high-speed Wi-Fi.',
    attribution: 'CJP Youth Dispatches'
  }
];
