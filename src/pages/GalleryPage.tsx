import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PosterCard } from '../components/PosterCard';
import { MemeCard } from '../components/MemeCard';
import { VideoCard } from '../components/VideoCard';
import { postersData } from '../data/postersData';
import { memesData } from '../data/memesData';
import { videosData } from '../data/videosData';
import { Image, X, Download } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'posters' | 'memes' | 'videos' | 'photos'>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const mediaPhotos = [
    { title: 'MOJO STORY SPECIAL TEAM COVERAGE', tag: 'MEDIA FEATURE', src: '/cjp_mo_team_photo.jpg', desc: 'Gen Z student delegates and secretariat convenors assembled during media interview.' },
    { title: 'CONSTITUTION CLUB PRESS CONFERENCE', tag: 'PRESSER PHOTO', src: '/cjp_press_conference_photo.jpg', desc: 'Founding convenor Abhijeet Dipke addressing national press correspondents.' },
    { title: 'TOI DISPATCH: GEN Z CIVIC AGITATION', tag: 'NEWSPAPER CLIPPING', src: '/cjp_toi_genz_news.jpg', desc: 'Times of India news commentary on youth ward audit agitation.' },
    { title: 'SYSTEM CHANGE DECLARATION', tag: 'STATEMENT PHOTO', src: '/cjp_system_change_quote.jpg', desc: 'Voice of Youth quote graphic calling for transparent municipal water & road contracts.' }
  ];

  return (
    <div className="gallery-page py-14 bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white">
      <SEOHead
        title="CJP Master Media Gallery | Posters, Memes, Videos & Photos"
        description="Explore the Cockroach Janata Party (CJP) official visual gallery: campaign posters, satirical memes, video dispatches, press coverage, and photo archives."
        canonicalUrl="https://cockroachjantapartywale.com/gallery"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        <Breadcrumbs items={[{ label: 'MASTER MEDIA GALLERY' }]} />

        {/* Header Hero */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest">
            <Image size={14} className="text-[#D9572B]" /> OFFICIAL MEDIA ARCHIVE
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-[#16120D] uppercase leading-none font-black">
            CJP MASTER MEDIA GALLERY
          </h1>
          <p className="text-sm sm:text-base text-[#3A332B] font-medium leading-relaxed">
            Filter through original graphic posters, satirical memes, video broadcasts, press photos, and campaign media.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`btn-brutal h-9 px-4 text-xs font-black uppercase cursor-pointer ${
              activeTab === 'all' ? 'bg-[#D9572B] text-white shadow-[3px_3px_0px_0px_#16120D]' : 'bg-[#F5EFE6] text-[#16120D] hover:bg-[#16120D] hover:text-white shadow-[2px_2px_0px_0px_#16120D]'
            }`}
          >
            ALL MEDIA
          </button>
          <button
            onClick={() => setActiveTab('posters')}
            className={`btn-brutal h-9 px-4 text-xs font-black uppercase cursor-pointer ${
              activeTab === 'posters' ? 'bg-[#D9572B] text-white shadow-[3px_3px_0px_0px_#16120D]' : 'bg-[#F5EFE6] text-[#16120D] hover:bg-[#16120D] hover:text-white shadow-[2px_2px_0px_0px_#16120D]'
            }`}
          >
            🪧 POSTERS ({postersData.length})
          </button>
          <button
            onClick={() => setActiveTab('memes')}
            className={`btn-brutal h-9 px-4 text-xs font-black uppercase cursor-pointer ${
              activeTab === 'memes' ? 'bg-[#D9572B] text-white shadow-[3px_3px_0px_0px_#16120D]' : 'bg-[#F5EFE6] text-[#16120D] hover:bg-[#16120D] hover:text-white shadow-[2px_2px_0px_0px_#16120D]'
            }`}
          >
            😂 MEMES ({memesData.length})
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`btn-brutal h-9 px-4 text-xs font-black uppercase cursor-pointer ${
              activeTab === 'videos' ? 'bg-[#D9572B] text-white shadow-[3px_3px_0px_0px_#16120D]' : 'bg-[#F5EFE6] text-[#16120D] hover:bg-[#16120D] hover:text-white shadow-[2px_2px_0px_0px_#16120D]'
            }`}
          >
            📺 VIDEOS ({videosData.length})
          </button>
          <button
            onClick={() => setActiveTab('photos')}
            className={`btn-brutal h-9 px-4 text-xs font-black uppercase cursor-pointer ${
              activeTab === 'photos' ? 'bg-[#D9572B] text-white shadow-[3px_3px_0px_0px_#16120D]' : 'bg-[#F5EFE6] text-[#16120D] hover:bg-[#16120D] hover:text-white shadow-[2px_2px_0px_0px_#16120D]'
            }`}
          >
            📸 PRESS PHOTOS ({mediaPhotos.length})
          </button>
        </div>

        {/* Media Grids */}
        {(activeTab === 'all' || activeTab === 'photos') && (
          <div className="space-y-6 mb-16">
            <div className="border-b-4 border-[#16120D] pb-3">
              <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest block">PRESS &amp; EVENTS ARCHIVE</span>
              <h2 className="font-display text-3xl text-[#16120D] uppercase font-black">DOCUMENTARY PHOTOS</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaPhotos.map((photo, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxImage(photo.src)}
                  className="bg-[#F5EFE6] border-4 border-[#16120D] p-4 shadow-[5px_5px_0px_0px_#16120D] hover:border-[#D9572B] transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="aspect-video bg-[#16120D] border-2 border-[#16120D] overflow-hidden mb-3">
                    <img src={photo.src} alt={photo.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div>
                    <span className="bg-[#D9572B] text-white text-[9px] font-black px-2 py-0.5 uppercase tracking-widest block w-fit mb-1">{photo.tag}</span>
                    <h3 className="font-display text-lg text-[#16120D] uppercase font-black leading-tight mb-1">{photo.title}</h3>
                    <p className="text-[11px] text-[#3A332B] font-medium leading-snug">{photo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'videos') && (
          <div className="space-y-6 mb-16">
            <div className="border-b-4 border-[#16120D] pb-3">
              <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest block">VIDEO DISPATCHES &amp; EXPLAINERS</span>
              <h2 className="font-display text-3xl text-[#16120D] uppercase font-black">VIDEO MEDIA HUB</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videosData.map((vid) => (
                <VideoCard key={vid.id} video={vid} />
              ))}
            </div>
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'posters') && (
          <div className="space-y-6 mb-16">
            <div className="border-b-4 border-[#16120D] pb-3">
              <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest block">CAMPAIGN &amp; PROTEST POSTERS</span>
              <h2 className="font-display text-3xl text-[#16120D] uppercase font-black">GRAPHIC POSTER GALLERY</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {postersData.slice(0, 8).map((post) => (
                <PosterCard key={post.id} poster={post} />
              ))}
            </div>
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'memes') && (
          <div className="space-y-6 mb-16">
            <div className="border-b-4 border-[#16120D] pb-3">
              <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest block">CIVIC SATIRE &amp; HUMOR</span>
              <h2 className="font-display text-3xl text-[#16120D] uppercase font-black">MEME GALLERY</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {memesData.slice(0, 6).map((meme) => (
                <MemeCard key={meme.id} meme={meme} />
              ))}
            </div>
          </div>
        )}

        {/* Lightbox Image Preview Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="bg-[#F5EFE6] border-4 border-[#16120D] p-6 max-w-3xl w-full shadow-[12px_12px_0px_0px_#16120D] relative animate-dropdown text-[#16120D]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 btn-brutal p-2 bg-[#EADBCE] text-[#16120D] hover:bg-[#D9572B] hover:text-white"
              >
                <X size={20} />
              </button>
              <div className="aspect-video bg-black border-2 border-[#16120D] overflow-hidden mb-4 flex items-center justify-center">
                <img src={lightboxImage} alt="Fullscreen Media Preview" className="max-w-full max-h-full object-contain mx-auto" />
              </div>
              <div className="flex justify-end">
                <a
                  href={lightboxImage}
                  download="cjp_media_photo.jpg"
                  className="btn-brutal py-2 px-4 bg-[#D9572B] text-white hover:bg-[#16120D] text-xs font-black uppercase flex items-center gap-2"
                >
                  <Download size={14} /> DOWNLOAD PHOTO
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
