import React, { useState } from 'react';
import { X, Share2, Copy, Check, ExternalLink, MessageCircle, Send, Sparkles, TrendingUp } from 'lucide-react';

interface SocialShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  url?: string;
}

export const SocialShareModal: React.FC<SocialShareModalProps> = ({
  isOpen,
  onClose,
  title = "Cockroach Janta Party Wale — Independent Commentary & Updates",
  url = "https://cockroachjantapartywale.com/"
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const shareText = `Check out ${title}! Independent youth civic movement, municipal ward audits, School Thik Karo campaign & satire. #CockroachJantaParty`;

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareText}\n${url}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const platforms = [
    {
      name: 'Twitter (X)',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: 'bg-black hover:bg-zinc-800 text-white',
      badge: 'Trending #CockroachJantaParty',
      link: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5 text-white" />,
      color: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      badge: 'Send to Groups & Status',
      link: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}\n${url}`)}`
    },
    {
      name: 'Reddit',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.11 3.11 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.182 1.207.49 1.18-.842 2.834-1.404 4.646-1.488l.943-4.419 3.26.687a1.247 1.247 0 0 1 1.172-.772z" />
        </svg>
      ),
      color: 'bg-orange-600 hover:bg-orange-700 text-white',
      badge: 'Post to r/CockroachJantaParty09',
      link: `https://www.reddit.com/submit?title=${encodeURIComponent("Cockroach Janta Party — Official Website & Satire Movement")}&url=${encodeURIComponent(url)}`
    },
    {
      name: 'Telegram',
      icon: <Send className="w-5 h-5 text-white" />,
      color: 'bg-sky-500 hover:bg-sky-600 text-white',
      badge: 'Broadcast Channel Share',
      link: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'bg-blue-600 hover:bg-blue-700 text-white',
      badge: 'Share to Timeline & Groups',
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#FAF6F0] border-2 border-[#16120D] rounded-2xl shadow-[6px_6px_0px_0px_#16120D] overflow-hidden text-[#16120D]">
        {/* Header */}
        <div className="bg-[#D97706] text-white p-5 flex items-center justify-between border-b-2 border-[#16120D]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black/20 flex items-center justify-center border border-white/20">
              <Share2 className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <h2 className="font-extrabold text-xl tracking-wide flex items-center gap-2 font-['Bebas_Neue'] text-2xl tracking-wider">
                <span>Promote Cockroach Janta Party</span>
                <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
              </h2>
              <p className="text-xs text-amber-100 font-medium">Drive Free Social Traffic &amp; Viral Reach</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-black/20 hover:bg-black/40 text-white transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="bg-amber-100/60 border border-amber-300 rounded-xl p-4 text-xs leading-relaxed font-sans text-amber-950 flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">फ्री SEO &amp; सोशल मीडिया ट्रैफिक टिप्स:</span> Twitter (X), WhatsApp Groups, Reddit, और Facebook पर <strong>#CockroachJantaParty</strong> हैशटैग के साथ लिंक शेयर करें ताकि Google और Social Algorithms पर ट्रेंड हो सके!
            </div>
          </div>

          {/* Social Platforms List */}
          <div className="space-y-2.5">
            {platforms.map((platform, idx) => (
              <a
                key={idx}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-3.5 rounded-xl border-2 border-[#16120D] transition-all transform hover:-translate-y-0.5 shadow-[3px_3px_0px_0px_#16120D] ${platform.color}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    {platform.icon}
                  </div>
                  <div>
                    <span className="font-bold text-sm block">{platform.name}</span>
                    <span className="text-[11px] opacity-90 block">{platform.badge}</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>
            ))}
          </div>

          {/* Copy Direct Link Section */}
          <div className="pt-2 border-t border-amber-200">
            <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-zinc-700">
              Share Custom URL / Copy Link
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={url}
                className="flex-1 bg-white border-2 border-[#16120D] rounded-xl px-3 py-2 text-xs font-mono text-zinc-800 focus:outline-none"
              />
              <button
                onClick={handleCopy}
                className={`px-4 py-2.5 rounded-xl border-2 border-[#16120D] font-bold text-xs flex items-center gap-2 transition-all shadow-[2px_2px_0px_0px_#16120D] ${
                  copied
                    ? 'bg-emerald-500 text-white'
                    : 'bg-[#F59E0B] hover:bg-[#D97706] text-black'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
