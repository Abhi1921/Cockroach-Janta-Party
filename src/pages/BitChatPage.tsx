import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { ShieldCheck, WifiOff, Lock, Radio, AlertTriangle, Terminal } from 'lucide-react';

export const BitChatPage: React.FC = () => {
  const { lang } = useLanguage();

  const specs = [
    {
      title: 'BLE Mesh Architecture',
      desc: 'Operates over Bluetooth Low Energy (BLE 5.0+). Nodes automatically discover adjacent devices within 50-100m and relay encrypted payloads without cellular towers or internet service.',
      icon: Radio
    },
    {
      title: 'End-to-End Encryption',
      desc: 'Utilizes Elliptic Curve Cryptography (Curve25519) and AES-256-GCM. Messages are encrypted locally on device prior to BLE broadcast; intermediate mesh relay nodes cannot inspect payload content.',
      icon: Lock
    },
    {
      title: 'Zero Internet Dependency',
      desc: 'Functionality remains 100% operational during government Internet blackouts, cell tower throttling, or high-density crowd network collapse.',
      icon: WifiOff
    },
    {
      title: 'Protest Panic Broadcast',
      desc: 'One-touch emergency alert broadcasts location coordinates and de-escalation status to all peer nodes within a 500m mesh radius.',
      icon: AlertTriangle
    }
  ];

  const usageRules = [
    "Do NOT use BitChat for commercial advertising or illegal non-peaceful activities.",
    "Keep device Bluetooth active and set BitChat to 'Relay Mode' during ground rallies to strengthen mesh coverage for fellow students.",
    "Verify emergency broadcast pins with nearby marshals before forwarding ground alerts.",
    "BitChat stores zero server logs — all messages auto-expire from local RAM storage after 24 hours."
  ];

  return (
    <div className="bitchat-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'BitChat P2P मेष प्रोटोकॉल | कॉकरोच जनता पार्टी' : 'BitChat P2P Mesh Protocol & Usage Rules | Cockroach Janta Party'}
        description="Technical specification and protocol guidelines for CJP BitChat — Bluetooth P2P encrypted mesh network for offline ground protest communications without internet."
        canonicalUrl="https://cockroachjantapartywale.com/bitchat"
      />

      <div className="max-w-5xl mx-auto px-4">
        
        {/* Hero Banner */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            OPEN SOURCE P2P MESH PROTOCOL · SPEC V1.4
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-3 uppercase tracking-tight">
            COCKROACH JANTA PARTY BITCHAT P2P MESH
          </h1>
          <p className="text-sm text-[#3A332B] font-extrabold uppercase tracking-wider max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'बिना इंटरनेट या मोबाइल नेटवर्क के जमीनी विरोध प्रदर्शनों के लिए एनक्रिप्टेड मैसेजिंग नेटवर्क।'
              : 'Encrypted offline communication for ground assemblies, rallies, and civic monitoring when cellular networks fail.'}
          </p>
        </div>

        {/* Status Callout Box */}
        <div className="bg-[#16120D] text-[#F5EFE6] p-8 border-4 border-[#16120D] shadow-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest">
                PROTOCOL STATUS: ACTIVE STABLE
              </span>
            </div>
            <h2 className="font-serif font-black text-2xl md:text-3xl uppercase">
              BITCHAT ANDROID &amp; WEB MESH DEMO
            </h2>
            <p className="text-xs text-[#EADBCE] max-w-xl font-medium">
              Designed specifically for multi-thousand student gatherings during Delhi marches where network congestion disables standard messaging apps.
            </p>
          </div>
        </div>

        {/* Specifications Grid */}
        <div className="mb-16">
          <h2 className="font-serif font-black text-2xl md:text-3xl text-[#16120D] uppercase mb-8 border-b-4 border-[#16120D] pb-2">
            TECHNICAL SPECIFICATIONS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-lg space-y-3">
                  <div className="w-10 h-10 bg-[#16120D] text-[#D9572B] flex items-center justify-center border border-[#16120D]">
                    <IconComp size={20} />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#16120D] uppercase">{item.title}</h3>
                  <p className="text-xs text-[#3A332B] font-medium leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Architecture Specs Diagram / Code Box */}
        <div className="bg-[#231F1A] text-[#F5EFE6] border-4 border-[#16120D] p-6 md:p-8 font-mono text-xs shadow-2xl mb-16 space-y-4">
          <div className="flex items-center justify-between border-b border-white/20 pb-3">
            <div className="flex items-center gap-2">
              <Terminal size={16} className="text-[#D9572B]" />
              <span className="font-bold uppercase tracking-wider text-[#F5EFE6]">
                BITCHAT PROTOCOL HOOK SPECIFICATION
              </span>
            </div>
            <span className="text-[10px] text-[#D9572B] uppercase">AES-256-GCM / CURVE25519</span>
          </div>

          <pre className="overflow-x-auto text-[11px] text-[#EADBCE] leading-relaxed p-4 bg-[#16120D] border border-white/10">
{`struct BitChatMessage {
    uint64_t msg_id;          // Unique cryptographic hash
    uint8_t  ttl;             // Max multi-hop relays (default: 7 hops)
    uint8_t  sender_pubkey[32];// Curve25519 public key
    uint8_t  nonce[12];        // AES-GCM IV
    uint16_t payload_len;     // Max 512 bytes per packet
    uint8_t  encrypted_payload[512];
    uint8_t  auth_tag[16];     // Integrity verification
};`}
          </pre>

          <p className="text-[11px] text-[#EADBCE] font-sans">
            Every BitChat peer acts as a stateless relay node. Messages travel dynamically across participant phones in the rally crowd, enabling communication spanning over 2 kilometers without cell tower signal.
          </p>
        </div>

        {/* Usage Rules */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <ShieldCheck size={28} className="text-[#D9572B]" />
            <div>
              <h3 className="font-serif font-black text-2xl text-[#16120D] uppercase">
                COMMUNITY MESH USAGE RULES
              </h3>
              <p className="text-xs text-[#3A332B] font-bold uppercase">
                CODE OF CONDUCT FOR FIELD MARSHALS &amp; VOLUNTEERS
              </p>
            </div>
          </div>

          <ul className="space-y-3 text-xs text-[#3A332B] font-semibold">
            {usageRules.map((rule, index) => (
              <li key={index} className="flex items-start gap-3 bg-[#EADBCE] p-3 border border-[#16120D]">
                <span className="bg-[#D9572B] text-white text-[10px] font-black px-2 py-0.5 mt-0.5">
                  {index + 1}
                </span>
                <span className="leading-relaxed">{rule}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};
