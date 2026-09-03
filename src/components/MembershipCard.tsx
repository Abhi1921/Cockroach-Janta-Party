import { ShieldCheck, Printer } from 'lucide-react';

export interface MembershipCardData {
  fullName: string;
  memberId: string;
  city: string;
  state: string;
  joinDate: string;
  occupation?: string;
  roleBadge?: string;
  photoUrl?: string;
}

interface MembershipCardProps {
  data: MembershipCardData;
  onPrint?: () => void;
  showActions?: boolean;
}

export const MembershipCard: React.FC<MembershipCardProps> = ({
  data,
  onPrint,
  showActions = true
}) => {
  const handlePrint = () => {
    if (onPrint) {
      onPrint();
    } else {
      window.print();
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Target Container for Print CSS Isolation */}
      <div 
        id="cjp-membership-card"
        className="w-full max-w-[620px] bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] p-5 sm:p-7 shadow-[10px_10px_0px_0px_#16120D] relative overflow-hidden select-none font-sans"
      >
        {/* Decorative Top Accent Bar */}
        <div className="h-2 bg-[#D9572B] -mx-5 sm:-mx-7 -mt-5 sm:-mt-7 mb-5 border-b-2 border-[#16120D]" />

        {/* Card Header Emblem & Party Title */}
        <div className="flex items-center justify-between border-b-2 border-white/20 pb-4 mb-5 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#EADBCE] text-[#16120D] border-2 border-white flex items-center justify-center p-1 shadow-md flex-shrink-0">
              <img
                src="/cjp_logo_emblem.svg"
                alt="CJP Mascot Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest block leading-none mb-1">
                OFFICIAL PARODY SWARM MEMBERSHIP
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white uppercase leading-none tracking-wide font-black">
                COCKROACH JANTA PARTY
              </h3>
              <span className="text-[10px] text-[#EADBCE] font-bold uppercase tracking-wider block mt-0.5">
                HAR GHAR KI SARKAR 🪳
              </span>
            </div>
          </div>

          <div className="hidden sm:flex flex-col items-end">
            <span className="bg-[#D9572B] text-white text-[9px] font-black px-2.5 py-1 uppercase tracking-widest border border-white">
              {data.roleBadge || 'SWARM CITIZEN'}
            </span>
            <span className="text-[9px] font-mono text-[#EADBCE] mt-1 font-bold">EST. 2026</span>
          </div>
        </div>

        {/* Card Main Body */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-center my-2">
          {/* Avatar / Photo Slot */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 bg-[#231F1A] border-3 border-[#D9572B] p-1 shadow-inner relative flex items-center justify-center overflow-hidden">
              {data.photoUrl ? (
                <img
                  src={data.photoUrl}
                  alt={data.fullName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#16120D] text-[#EADBCE] flex flex-col items-center justify-center p-2 text-center">
                  <span className="text-4xl mb-1">🪳</span>
                  <span className="text-[9px] font-black uppercase text-[#D9572B] tracking-wider">CJP MEMBER</span>
                </div>
              )}
              <div className="absolute bottom-0 inset-x-0 bg-[#D9572B] text-white text-[8px] font-black text-center py-0.5 uppercase tracking-widest">
                VERIFIED SWARM
              </div>
            </div>
          </div>

          {/* Member Details */}
          <div className="sm:col-span-2 space-y-2.5 text-xs font-bold">
            <div>
              <span className="text-[9.5px] font-mono text-[#EADBCE] uppercase tracking-wider block text-opacity-80">MEMBER NAME</span>
              <span className="text-lg sm:text-xl font-black text-white uppercase tracking-wide block leading-tight">
                {data.fullName}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-2">
              <div>
                <span className="text-[9px] font-mono text-[#EADBCE] uppercase tracking-wider block">SWARM ID</span>
                <span className="font-mono text-sm text-[#FFB703] font-black block">{data.memberId}</span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#EADBCE] uppercase tracking-wider block">LOCATION</span>
                <span className="text-xs text-white uppercase font-extrabold block truncate">{data.city}, {data.state}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-2">
              <div>
                <span className="text-[9px] font-mono text-[#EADBCE] uppercase tracking-wider block">JOINING DATE</span>
                <span className="text-xs text-white font-extrabold block">{data.joinDate}</span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#EADBCE] uppercase tracking-wider block">OCCUPATION</span>
                <span className="text-xs text-white font-extrabold block truncate">{data.occupation || 'Civic Observer'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Footer Disclaimer & QR Decorative Strip */}
        <div className="mt-5 pt-3 border-t-2 border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[9.5px] text-[#EADBCE] font-medium leading-tight max-w-sm">
            <span className="text-[#D9572B] font-black uppercase flex items-center gap-1">
              <ShieldCheck size={11} /> FICTIONAL PARODY DISCLAIMER:
            </span>
            <span>Issued for creative civic humor. Not an official election authority document.</span>
          </div>

          {/* Decorative Barcode / QR Visual */}
          <div className="flex items-center gap-2 bg-white text-[#16120D] px-2.5 py-1.5 border border-[#16120D]">
            <div className="font-mono text-[9px] font-black tracking-tighter leading-none">
              ||| | |||| | ||| ||||<br />
              {data.memberId}
            </div>
            <span className="text-base">🪳</span>
          </div>
        </div>
      </div>

      {/* Action Buttons (Hidden during printing via CSS) */}
      {showActions && (
        <div className="mt-6 flex items-center gap-3 no-print">
          <button
            onClick={handlePrint}
            className="btn-brutal py-3 px-6 bg-[#D9572B] text-white hover:bg-[#16120D] text-xs font-black uppercase flex items-center gap-2 cursor-pointer shadow-[4px_4px_0px_0px_#16120D]"
          >
            <Printer size={16} /> PRINT MEMBERSHIP CARD
          </button>
        </div>
      )}
    </div>
  );
};
