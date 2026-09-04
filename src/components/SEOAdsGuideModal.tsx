import React, { useState } from 'react';
import { X, Search, DollarSign, CheckCircle2, Zap, Target, Globe, BookOpen } from 'lucide-react';

interface SEOAdsGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SEOAdsGuideModal: React.FC<SEOAdsGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'free_seo' | 'google_ads'>('free_seo');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#FAF6F0] border-2 border-[#16120D] rounded-2xl shadow-[8px_8px_0px_0px_#16120D] overflow-hidden text-[#16120D] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#16120D] text-white p-5 flex items-center justify-between border-b-2 border-[#16120D] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-extrabold text-2xl font-['Bebas_Neue'] tracking-wider text-amber-400">
                SEO &amp; Google Ads Promotion Guide
              </h2>
              <p className="text-xs text-amber-100/80">वेबसाइट को टॉप रैंक और लाखों ट्रैफिक दिलाने की पूरी गाइड</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b-2 border-[#16120D] bg-[#EADBCE] shrink-0">
          <button
            onClick={() => setActiveTab('free_seo')}
            className={`flex-1 py-3 px-4 font-bold text-sm flex items-center justify-center gap-2 border-r-2 border-[#16120D] transition-colors ${
              activeTab === 'free_seo'
                ? 'bg-[#FAF6F0] text-emerald-900 border-b-4 border-b-emerald-600'
                : 'text-zinc-700 hover:bg-[#FAF6F0]/60'
            }`}
          >
            <Search className="w-4 h-4 text-emerald-600" />
            <span>1. Free SEO (फ्री ऑर्गेनिक ट्रैफिक)</span>
          </button>
          <button
            onClick={() => setActiveTab('google_ads')}
            className={`flex-1 py-3 px-4 font-bold text-sm flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'google_ads'
                ? 'bg-[#FAF6F0] text-amber-900 border-b-4 border-b-amber-600'
                : 'text-zinc-700 hover:bg-[#FAF6F0]/60'
            }`}
          >
            <DollarSign className="w-4 h-4 text-amber-600" />
            <span>2. Paid Google Ads (तुरंत टॉप स्पॉन्सर)</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm leading-relaxed">
          {activeTab === 'free_seo' ? (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-emerald-50 border-2 border-emerald-700/30 rounded-xl p-4 text-emerald-950 flex items-start gap-3">
                <Globe className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-base text-emerald-900 mb-1">Google में #1 फ्री रैंक पाने के लिए 4 मुख्य कदम:</h3>
                  <p className="text-xs text-emerald-800">
                    अपनी वेबसाइट <code className="bg-emerald-100 px-1 py-0.5 rounded font-mono">cockroachjantapartywale.com</code> को Google Search Engine के नियमों (SEO best practices) के अनुसार ऑप्टिमाइज किया गया है।
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-2 border-[#16120D] bg-white p-4 rounded-xl shadow-[3px_3px_0px_0px_#16120D]">
                  <div className="flex items-center gap-2 font-bold text-base mb-2 text-emerald-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Step 1: Meta Tags Optimization (शीर्षक और विवरण)</span>
                  </div>
                  <p className="text-xs text-zinc-700">
                    वेबसाइट के हर पेज पर मुख्य कीवर्ड्स जैसे <code className="bg-amber-100 px-1 rounded font-bold">Cockroach Janta Party Wale</code>, <code className="bg-amber-100 px-1 rounded font-bold">School Thik Karo</code>, और <code className="bg-amber-100 px-1 rounded font-bold">Abhijeet Dipke</code> का उपयोग किया गया है।
                  </p>
                </div>

                <div className="border-2 border-[#16120D] bg-white p-4 rounded-xl shadow-[3px_3px_0px_0px_#16120D]">
                  <div className="flex items-center gap-2 font-bold text-base mb-2 text-emerald-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Step 2: Google Search Console (GSC) में सबमिट करें</span>
                  </div>
                  <p className="text-xs text-zinc-700 mb-2">
                    Google आपकी साइट को जल्दी इंडेक्स करे, इसके लिए:
                  </p>
                  <ol className="list-decimal list-inside text-xs text-zinc-700 space-y-1 font-medium bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                    <li><a href="https://search.google.com/search-console" target="_blank" rel="noreferrer" className="text-blue-600 underline font-bold">Google Search Console</a> खोलें।</li>
                    <li>डोमेन <code className="font-mono bg-white px-1">cockroachjantapartywale.com</code> जोड़ें।</li>
                    <li>Sitemaps सेक्शन में <code className="font-mono bg-white px-1">https://cockroachjantapartywale.com/sitemap.xml</code> सबमिट करें।</li>
                  </ol>
                </div>

                <div className="border-2 border-[#16120D] bg-white p-4 rounded-xl shadow-[3px_3px_0px_0px_#16120D]">
                  <div className="flex items-center gap-2 font-bold text-base mb-2 text-emerald-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Step 3: Unique Content &amp; Satire Articles</span>
                  </div>
                  <p className="text-xs text-zinc-700">
                    साइट पर नए ब्लॉग, सुप्रीम कोर्ट FIR फैसला न्यूज़ आर्काइव और वार्ड ऑडिट रिपोर्ट नियमित डालें। यूनिक कंटेंट से गूगल आपकी साइट को अथॉरिटी रेटिंग देता है।
                  </p>
                </div>

                <div className="border-2 border-[#16120D] bg-white p-4 rounded-xl shadow-[3px_3px_0px_0px_#16120D]">
                  <div className="flex items-center gap-2 font-bold text-base mb-2 text-emerald-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Step 4: Social Media Viral Link Promotion</span>
                  </div>
                  <p className="text-xs text-zinc-700">
                    Twitter (X), Reddit (/r/CockroachJantaParty09), WhatsApp ग्रुप्स में मीम्स के साथ साइट लिंक कमेंट करें। सोशल बैकलिंक्स से सर्च रैंकिंग तेजी से बढ़ती है!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-amber-50 border-2 border-amber-600/40 rounded-xl p-4 text-amber-950 flex items-start gap-3">
                <Target className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-base text-amber-900 mb-1">Google Ads के जरिए तुरंत top 1 ad placement पाएं:</h3>
                  <p className="text-xs text-amber-800">
                    अगर आप विज्ञापन (Paid Ads) चलाकर Google पर सबसे ऊपर दिखना चाहते हैं, तो नीचे दिए गए 6 स्टेप्स फॉलो करें:
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-2 border-[#16120D] bg-white p-4 rounded-xl shadow-[3px_3px_0px_0px_#16120D]">
                  <div className="flex items-center gap-2 font-bold text-[#16120D] mb-1">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-black flex items-center justify-center font-extrabold text-xs">1</span>
                    <span>Google Ads अकाउंट बनाएं</span>
                  </div>
                  <p className="text-xs text-zinc-700 pl-8">
                    <a href="https://ads.google.com/" target="_blank" rel="noreferrer" className="text-blue-600 underline font-bold">ads.google.com</a> पर जाएं और Gmail से लॉगिन करके नया Campaign बनाएं।
                  </p>
                </div>

                <div className="border-2 border-[#16120D] bg-white p-4 rounded-xl shadow-[3px_3px_0px_0px_#16120D]">
                  <div className="flex items-center gap-2 font-bold text-[#16120D] mb-1">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-black flex items-center justify-center font-extrabold text-xs">2</span>
                    <span>Goal चुनें: Website Traffic</span>
                  </div>
                  <p className="text-xs text-zinc-700 pl-8">
                    कैंपेन का उद्देश्य <strong>"Website Traffic"</strong> और टाइप <strong>"Search"</strong> चुनें।
                  </p>
                </div>

                <div className="border-2 border-[#16120D] bg-white p-4 rounded-xl shadow-[3px_3px_0px_0px_#16120D]">
                  <div className="flex items-center gap-2 font-bold text-[#16120D] mb-1">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-black flex items-center justify-center font-extrabold text-xs">3</span>
                    <span>Target Keywords सेट करें</span>
                  </div>
                  <div className="pl-8 text-xs text-zinc-700">
                    कीवर्ड बॉक्स में ये सर्च टर्म डालें:
                    <div className="mt-1 flex flex-wrap gap-1 font-mono text-[11px]">
                      <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300">"Cockroach Janta Party"</span>
                      <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300">"Cockroach Janta Party Wale"</span>
                      <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300">"School Thik Karo"</span>
                      <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300">"Abhijeet Dipke CJP"</span>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-[#16120D] bg-white p-4 rounded-xl shadow-[3px_3px_0px_0px_#16120D]">
                  <div className="flex items-center gap-2 font-bold text-[#16120D] mb-1">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-black flex items-center justify-center font-extrabold text-xs">4</span>
                    <span>Attracting Headlines &amp; Description लिखें</span>
                  </div>
                  <ul className="pl-8 text-xs text-zinc-700 list-disc list-inside space-y-0.5 font-medium">
                    <li>Headline 1: Cockroach Janta Party Wale Official</li>
                    <li>Headline 2: Independent Civic &amp; Parody Movement</li>
                    <li>Description: Join CJP official website for School Thik Karo campaigns &amp; RTI transparency.</li>
                  </ul>
                </div>

                <div className="border-2 border-[#16120D] bg-white p-4 rounded-xl shadow-[3px_3px_0px_0px_#16120D]">
                  <div className="flex items-center gap-2 font-bold text-[#16120D] mb-1">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-black flex items-center justify-center font-extrabold text-xs">5</span>
                    <span>Budget &amp; Target Location</span>
                  </div>
                  <p className="text-xs text-zinc-700 pl-8">
                    डेली बजट (उदा. ₹200 – ₹500/दिन) सेट करें और Location में India या specific Metro cities select करें।
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#EADBCE] p-4 border-t-2 border-[#16120D] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>SEO &amp; Growth Engine Ready</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#16120D] text-white hover:bg-zinc-800 font-bold text-xs border-2 border-black transition-all shadow-[2px_2px_0px_0px_#D97706]"
          >
            Got it, Close
          </button>
        </div>
      </div>
    </div>
  );
};
