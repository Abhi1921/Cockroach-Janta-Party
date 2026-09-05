export interface MediaOutlet {
  id: string;
  name: string;
  category: 'Global & Wires' | 'National Dailies & Digital' | 'TV Networks & Regional';
  domain: string;
  url: string;
  country: string;
  language: string;
  syndicatedFrom?: string;
  verifiedStatus: 'VERIFIED CJP COVERAGE' | 'SYNDICATED DISPATCH';
}

export const mediaOutletsData: MediaOutlet[] = [
  // Global & Wires (14)
  {
    id: 'reuters',
    name: 'Reuters',
    category: 'Global & Wires',
    domain: 'reuters.com',
    url: 'https://www.reuters.com',
    country: 'International / UK',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'ap',
    name: 'Associated Press (AP)',
    category: 'Global & Wires',
    domain: 'apnews.com',
    url: 'https://apnews.com',
    country: 'USA / Global',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'the-guardian',
    name: 'The Guardian',
    category: 'Global & Wires',
    domain: 'theguardian.com',
    url: 'https://www.theguardian.com',
    country: 'United Kingdom',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'financial-times',
    name: 'Financial Times',
    category: 'Global & Wires',
    domain: 'ft.com',
    url: 'https://www.ft.com',
    country: 'United Kingdom',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'nytimes',
    name: 'The New York Times',
    category: 'Global & Wires',
    domain: 'nytimes.com',
    url: 'https://www.nytimes.com',
    country: 'USA',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'bloomberg',
    name: 'Bloomberg',
    category: 'Global & Wires',
    domain: 'bloomberg.com',
    url: 'https://www.bloomberg.com',
    country: 'USA / Global',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'bbc',
    name: 'BBC News',
    category: 'Global & Wires',
    domain: 'bbc.com',
    url: 'https://www.bbc.com',
    country: 'United Kingdom',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'al-jazeera',
    name: 'Al Jazeera',
    category: 'Global & Wires',
    domain: 'aljazeera.com',
    url: 'https://www.aljazeera.com',
    country: 'Qatar / International',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'abc-australia',
    name: 'ABC News Australia',
    category: 'Global & Wires',
    domain: 'abc.net.au',
    url: 'https://www.abc.net.au/news',
    country: 'Australia',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'latimes',
    name: 'Los Angeles Times',
    category: 'Global & Wires',
    domain: 'latimes.com',
    url: 'https://www.latimes.com',
    country: 'USA',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'wtop-news',
    name: 'WTOP News',
    category: 'Global & Wires',
    domain: 'wtop.com',
    url: 'https://wtop.com',
    country: 'USA (AP Wire)',
    language: 'English',
    syndicatedFrom: 'Associated Press',
    verifiedStatus: 'SYNDICATED DISPATCH'
  },
  {
    id: 'yahoo-news',
    name: 'Yahoo News',
    category: 'Global & Wires',
    domain: 'news.yahoo.com',
    url: 'https://news.yahoo.com',
    country: 'Global (AP Wire)',
    language: 'English',
    syndicatedFrom: 'Associated Press',
    verifiedStatus: 'SYNDICATED DISPATCH'
  },
  {
    id: 'the-hour',
    name: 'The Hour',
    category: 'Global & Wires',
    domain: 'thehour.com',
    url: 'https://www.thehour.com',
    country: 'USA (AP Syndicate)',
    language: 'English',
    syndicatedFrom: 'Associated Press',
    verifiedStatus: 'SYNDICATED DISPATCH'
  },
  {
    id: 'inshorts',
    name: 'Inshorts',
    category: 'Global & Wires',
    domain: 'inshorts.com',
    url: 'https://inshorts.com',
    country: 'Global Briefs',
    language: 'English / Hindi',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },

  // National Dailies & Digital Portals (26)
  {
    id: 'the-hindu',
    name: 'The Hindu',
    category: 'National Dailies & Digital',
    domain: 'thehindu.com',
    url: 'https://www.thehindu.com',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'indian-express',
    name: 'The Indian Express',
    category: 'National Dailies & Digital',
    domain: 'indianexpress.com',
    url: 'https://indianexpress.com',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'hindustan-times',
    name: 'Hindustan Times',
    category: 'National Dailies & Digital',
    domain: 'hindustantimes.com',
    url: 'https://www.hindustantimes.com',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'times-of-india',
    name: 'Times of India',
    category: 'National Dailies & Digital',
    domain: 'timesofindia.indiatimes.com',
    url: 'https://timesofindia.indiatimes.com',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'telegraph-india',
    name: 'The Telegraph India',
    category: 'National Dailies & Digital',
    domain: 'telegraphindia.com',
    url: 'https://www.telegraphindia.com',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'the-tribune',
    name: 'The Tribune',
    category: 'National Dailies & Digital',
    domain: 'tribuneindia.com',
    url: 'https://www.tribuneindia.com',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'business-today',
    name: 'Business Today',
    category: 'National Dailies & Digital',
    domain: 'businesstoday.in',
    url: 'https://www.businesstoday.in',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'new-indian-express',
    name: 'The New Indian Express',
    category: 'National Dailies & Digital',
    domain: 'newindianexpress.com',
    url: 'https://www.newindianexpress.com',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'livemint',
    name: 'LiveMint',
    category: 'National Dailies & Digital',
    domain: 'livemint.com',
    url: 'https://www.livemint.com',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'moneycontrol',
    name: 'Moneycontrol',
    category: 'National Dailies & Digital',
    domain: 'moneycontrol.com',
    url: 'https://www.moneycontrol.com',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'economic-times',
    name: 'Economic Times',
    category: 'National Dailies & Digital',
    domain: 'economictimes.indiatimes.com',
    url: 'https://economictimes.indiatimes.com',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'financial-express',
    name: 'Financial Express',
    category: 'National Dailies & Digital',
    domain: 'financialexpress.com',
    url: 'https://www.financialexpress.com',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'theprint',
    name: 'ThePrint',
    category: 'National Dailies & Digital',
    domain: 'theprint.in',
    url: 'https://theprint.in',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'the-wire',
    name: 'TheWire.in',
    category: 'National Dailies & Digital',
    domain: 'thewire.in',
    url: 'https://thewire.in',
    country: 'India',
    language: 'English / Hindi',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'the-quint',
    name: 'The Quint',
    category: 'National Dailies & Digital',
    domain: 'thequint.com',
    url: 'https://www.thequint.com',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'scroll-in',
    name: 'Scroll.in',
    category: 'National Dailies & Digital',
    domain: 'scroll.in',
    url: 'https://scroll.in',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'mid-day',
    name: 'Mid-Day',
    category: 'National Dailies & Digital',
    domain: 'mid-day.com',
    url: 'https://www.mid-day.com',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'dt-next',
    name: 'DT Next',
    category: 'National Dailies & Digital',
    domain: 'dtnext.in',
    url: 'https://www.dtnext.in',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'india-com',
    name: 'India.com',
    category: 'National Dailies & Digital',
    domain: 'india.com',
    url: 'https://www.india.com',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'rediff',
    name: 'Rediff News',
    category: 'National Dailies & Digital',
    domain: 'rediff.com',
    url: 'https://www.rediff.com/news',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'newslaundry',
    name: 'Newslaundry',
    category: 'National Dailies & Digital',
    domain: 'newslaundry.com',
    url: 'https://www.newslaundry.com',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'alt-news',
    name: 'Alt News',
    category: 'National Dailies & Digital',
    domain: 'altnews.in',
    url: 'https://www.altnews.in',
    country: 'India Fact Check Desk',
    language: 'English / Hindi',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'bar-and-bench',
    name: 'Bar & Bench',
    category: 'National Dailies & Digital',
    domain: 'barandbench.com',
    url: 'https://www.barandbench.com',
    country: 'India Legal Desk',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'live-law',
    name: 'Live Law',
    category: 'National Dailies & Digital',
    domain: 'livelaw.in',
    url: 'https://www.livelaw.in',
    country: 'India Legal Desk',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'bu-today',
    name: 'BU Today (Boston University)',
    category: 'National Dailies & Digital',
    domain: 'bu.edu/today',
    url: 'https://www.bu.edu/today',
    country: 'USA Academic Desk',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'careers360',
    name: 'Careers360',
    category: 'National Dailies & Digital',
    domain: 'careers360.com',
    url: 'https://www.careers360.com',
    country: 'India Education Bureau',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'times-group',
    name: 'Times Group Network',
    category: 'National Dailies & Digital',
    domain: 'timesgroup.com',
    url: 'https://www.timesgroup.com',
    country: 'India Corporate Desk',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },

  // TV Networks & Regional (24)
  {
    id: 'ndtv',
    name: 'NDTV',
    category: 'TV Networks & Regional',
    domain: 'ndtv.com',
    url: 'https://www.ndtv.com',
    country: 'India',
    language: 'English / Hindi',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'india-today-tv',
    name: 'India Today TV',
    category: 'TV Networks & Regional',
    domain: 'indiatoday.in',
    url: 'https://www.indiatoday.in',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'republic-world',
    name: 'Republic World / Republic TV',
    category: 'TV Networks & Regional',
    domain: 'republicworld.com',
    url: 'https://www.republicworld.com',
    country: 'India',
    language: 'English / Hindi',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'times-now',
    name: 'Times Now',
    category: 'TV Networks & Regional',
    domain: 'timesnownews.com',
    url: 'https://www.timesnownews.com',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'mirror-now',
    name: 'Mirror Now',
    category: 'TV Networks & Regional',
    domain: 'timesnownews.com/mirror-now',
    url: 'https://www.timesnownews.com/mirror-now',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'news18',
    name: 'News18 Network',
    category: 'TV Networks & Regional',
    domain: 'news18.com',
    url: 'https://www.news18.com',
    country: 'India',
    language: 'English / Hindi',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'wion',
    name: 'WION',
    category: 'TV Networks & Regional',
    domain: 'wionews.com',
    url: 'https://www.wionews.com',
    country: 'India / Global',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'cnbc-tv18',
    name: 'CNBC TV18',
    category: 'TV Networks & Regional',
    domain: 'cnbctv18.com',
    url: 'https://www.cnbctv18.com',
    country: 'India',
    language: 'English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'aaj-tak',
    name: 'Aaj Tak',
    category: 'TV Networks & Regional',
    domain: 'aajtak.in',
    url: 'https://aajtak.in',
    country: 'India',
    language: 'Hindi',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'abp-news',
    name: 'ABP News',
    category: 'TV Networks & Regional',
    domain: 'abplive.com',
    url: 'https://www.abplive.com',
    country: 'India',
    language: 'Hindi',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'zee-news',
    name: 'Zee News',
    category: 'TV Networks & Regional',
    domain: 'zeenews.india.com',
    url: 'https://zeenews.india.com',
    country: 'India',
    language: 'Hindi / English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'india-tv',
    name: 'India TV',
    category: 'TV Networks & Regional',
    domain: 'indiatvnews.com',
    url: 'https://www.indiatvnews.com',
    country: 'India',
    language: 'Hindi / English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'tv9-bharatvarsh',
    name: 'TV9 Bharatvarsh',
    category: 'TV Networks & Regional',
    domain: 'tv9hindi.com',
    url: 'https://www.tv9hindi.com',
    country: 'India',
    language: 'Hindi',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'news24',
    name: 'News24',
    category: 'TV Networks & Regional',
    domain: 'news24online.com',
    url: 'https://news24online.com',
    country: 'India',
    language: 'Hindi',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'etv-bharat',
    name: 'ETV Bharat',
    category: 'TV Networks & Regional',
    domain: 'etvbharat.com',
    url: 'https://www.etvbharat.com',
    country: 'India (Multi-State)',
    language: 'English / Hindi / Regional',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'ians',
    name: 'IANS Wire Service',
    category: 'TV Networks & Regional',
    domain: 'ians.in',
    url: 'https://ians.in',
    country: 'India Wire Agency',
    language: 'English / Hindi',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'mathrubhumi',
    name: 'Mathrubhumi',
    category: 'TV Networks & Regional',
    domain: 'mathrubhumi.com',
    url: 'https://www.mathrubhumi.com',
    country: 'Kerala, India',
    language: 'English / Malayalam',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'manorama-online',
    name: 'Manorama Online',
    category: 'TV Networks & Regional',
    domain: 'manoramaonline.com',
    url: 'https://www.manoramaonline.com',
    country: 'Kerala, India',
    language: 'Malayalam / English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'asianet-news',
    name: 'Asianet News',
    category: 'TV Networks & Regional',
    domain: 'asianetnews.com',
    url: 'https://www.asianetnews.com',
    country: 'Kerala, India',
    language: 'Malayalam / English',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'loksatta',
    name: 'Loksatta',
    category: 'TV Networks & Regional',
    domain: 'loksatta.com',
    url: 'https://www.loksatta.com',
    country: 'Maharashtra, India',
    language: 'Marathi',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'maharashtra-times',
    name: 'Maharashtra Times',
    category: 'TV Networks & Regional',
    domain: 'maharashtratimes.com',
    url: 'https://maharashtratimes.com',
    country: 'Maharashtra, India',
    language: 'Marathi',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'abp-majha',
    name: 'ABP Majha',
    category: 'TV Networks & Regional',
    domain: 'marathi.abplive.com',
    url: 'https://marathi.abplive.com',
    country: 'Maharashtra, India',
    language: 'Marathi',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'tv9-marathi',
    name: 'TV9 Marathi',
    category: 'TV Networks & Regional',
    domain: 'tv9marathi.com',
    url: 'https://www.tv9marathi.com',
    country: 'Maharashtra, India',
    language: 'Marathi',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'amar-ujala',
    name: 'Amar Ujala',
    category: 'TV Networks & Regional',
    domain: 'amarujala.com',
    url: 'https://www.amarujala.com',
    country: 'North India',
    language: 'Hindi',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'dainik-bhaskar',
    name: 'Dainik Bhaskar',
    category: 'TV Networks & Regional',
    domain: 'bhaskar.com',
    url: 'https://www.bhaskar.com',
    country: 'National / Hindi Belt',
    language: 'Hindi',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  },
  {
    id: 'dainik-jagran',
    name: 'Dainik Jagran',
    category: 'TV Networks & Regional',
    domain: 'jagran.com',
    url: 'https://www.jagran.com',
    country: 'National / Hindi Belt',
    language: 'Hindi',
    verifiedStatus: 'VERIFIED CJP COVERAGE'
  }
];
