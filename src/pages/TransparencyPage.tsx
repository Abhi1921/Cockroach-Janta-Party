import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Scale } from 'lucide-react';

export const TransparencyPage: React.FC = () => {
  const { lang } = useLanguage();

  const auditRows = [
    { item: "Website Domain & Cloud Hosting (Vercel/CDN)", amount: "₹4,200 / year", source: "Independent Developer Voluntary Tips", status: "VERIFIED OPEN" },
    { item: "RTI Application Filing Fees (Central & State Desks)", amount: "₹1,850 / month", source: "Student Volunteer Micro-Contributions", status: "VERIFIED OPEN" },
    { item: "Ground Protest Banners & Wooden Emblems", amount: "₹8,400 / event", source: "Local Swarm Member Pooling", status: "VERIFIED OPEN" },
    { item: "Electoral Political Party Funding", amount: "₹0.00 (ZERO)", source: "NOT APPLICABLE — Non-ECI Satire Movement", status: "ZERO FUNDING" }
  ];

  return (
    <div className="transparency-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'कानूनी स्थिति व वित्तीय पारदर्शिता | कॉकरोच जनता पार्टी' : 'Legal Status & Financial Transparency | Cockroach Janta Party'}
        description="Statutory legal disclosures, non-ECI party declaration under ECI rules, open source audit logs, and zero corporate sponsorship pledge for CJP."
        canonicalUrl="https://cockroachjantapartywale.com/transparency"
      />

      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            OPEN GOVERNANCE &amp; AUDIT LOGS
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-3 uppercase tracking-tight">
            LEGAL &amp; FINANCIAL TRANSPARENCY
          </h1>
          <p className="text-sm text-[#3A332B] font-extrabold uppercase tracking-wider max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'कॉकरोच जनता पार्टी का वैधानिक प्रकटीकरण और खुला वित्तीय लेखा-जोखा।'
              : 'Full statutory disclosures, non-ECI party declaration, and open-source hosting cost transparency.'}
          </p>
        </div>

        {/* Legal Status Notice */}
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 shadow-2xl mb-16 space-y-6">
          <div className="flex items-center gap-3 border-b-2 border-[#16120D] pb-3">
            <Scale size={28} className="text-[#D9572B]" />
            <div>
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block">
                STATUTORY DISCLOSURE UNDER ECI RULES
              </span>
              <h2 className="font-serif font-black text-2xl text-[#16120D] uppercase">
                NON-ECI REGISTERED CIVIC SATIRE MOVEMENT
              </h2>
            </div>
          </div>

          <div className="space-y-3 text-xs text-[#3A332B] font-medium leading-relaxed">
            <p>
              <strong>Cockroach Janta Party Wale (CJP)</strong> is an independent student-led civic movement utilizing satire, parody, and civic research. It is <strong>NOT</strong> registered as a political party under Section 29A of the Representation of the People Act, 1951.
            </p>
            <p>
              CJP does not collect election donations, endorse parliamentary candidates, or contest municipal/state elections. All digital tools, RTI drives, and ground rallies are financed through transparent open micro-contributions by volunteers.
            </p>
          </div>
        </div>

        {/* Audit Table */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 shadow-xl space-y-6">
          <div className="flex justify-between items-end border-b-2 border-[#16120D] pb-3">
            <div>
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block">
                FINANCIAL LEDGER V2026.8
              </span>
              <h3 className="font-serif font-black text-2xl text-[#16120D] uppercase">
                OPEN SOURCE AUDIT LOGS
              </h3>
            </div>
            <span className="bg-[#16120D] text-[#F5EFE6] text-[10px] font-extrabold px-3 py-1 uppercase">
              ZERO CORPORATE SPONSORSHIP
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#16120D] text-[#F5EFE6] uppercase text-[10px] font-extrabold tracking-wider">
                <tr>
                  <th className="p-3">Expenditure Line Item</th>
                  <th className="p-3">Cost / Budget</th>
                  <th className="p-3">Funding Source</th>
                  <th className="p-3">Audit Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#16120D]/20 font-medium text-[#3A332B]">
                {auditRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-[#EADBCE]/50' : 'bg-transparent'}>
                    <td className="p-3 font-bold text-[#16120D]">{row.item}</td>
                    <td className="p-3 font-mono font-bold text-[#D9572B]">{row.amount}</td>
                    <td className="p-3">{row.source}</td>
                    <td className="p-3">
                      <span className="bg-[#16120D] text-[#F5EFE6] text-[9px] font-black px-2 py-0.5 uppercase">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
