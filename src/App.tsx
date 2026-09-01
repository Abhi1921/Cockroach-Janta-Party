import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

// Shared Layout Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Existing Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { VisionPage } from './pages/VisionPage';
import { ManifestoPage } from './pages/ManifestoPage';
import { IssuesPage } from './pages/IssuesPage';
import { CampaignsPage } from './pages/CampaignsPage';
import { PostersPage } from './pages/PostersPage';
import { GalleryPage } from './pages/GalleryPage';
import { UpdatesPage } from './pages/UpdatesPage';
import { NewsPage } from './pages/NewsPage';
import { ProtestsPage } from './pages/ProtestsPage';
import { BlackMondayPage } from './pages/BlackMondayPage';
import { MembersPage } from './pages/MembersPage';
import { JoinPage } from './pages/JoinPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Additional & Unrouted Pages
import { ArticlesPage } from './pages/ArticlesPage';
import { FAQPage } from './pages/FAQPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { TrackerPage } from './pages/TrackerPage';

// New Missing Pages from Google Index
import { FounderPage } from './pages/FounderPage';
import { BitChatPage } from './pages/BitChatPage';
import { DimagiNaxalPage } from './pages/DimagiNaxalPage';
import { SchoolThikKaroPage } from './pages/SchoolThikKaroPage';
import { ParodyHistoryPage } from './pages/ParodyHistoryPage';
import { ProtestGuidelinesPage } from './pages/ProtestGuidelinesPage';
import { QuotesPage } from './pages/QuotesPage';
import { PressKitPage } from './pages/PressKitPage';
import { TransparencyPage } from './pages/TransparencyPage';
import { SupportDevPage } from './pages/SupportDevPage';
import { MemberPortalPage } from './pages/MemberPortalPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { RefundPolicyPage } from './pages/RefundPolicyPage';
import { PrivacyPage } from './pages/PrivacyPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="app-root min-h-screen flex flex-col bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Core & Vision */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/vision" element={<VisionPage />} />
              <Route path="/manifesto" element={<ManifestoPage />} />

              {/* Founder & Explanations */}
              <Route path="/founder" element={<FounderPage />} />
              <Route path="/abhijeet-dipke" element={<FounderPage />} />
              <Route path="/dimagi-naxal" element={<DimagiNaxalPage />} />
              <Route path="/school-thik-karo" element={<SchoolThikKaroPage />} />
              <Route path="/parody-history" element={<ParodyHistoryPage />} />

              {/* Tech, Ground Action & Guidelines */}
              <Route path="/bitchat" element={<BitChatPage />} />
              <Route path="/protest-guidelines" element={<ProtestGuidelinesPage />} />
              <Route path="/quotes" element={<QuotesPage />} />
              <Route path="/press-kit" element={<PressKitPage />} />
              <Route path="/media-kit" element={<PressKitPage />} />

              {/* Portal, Transparency & Dev Support */}
              <Route path="/transparency" element={<TransparencyPage />} />
              <Route path="/support-dev" element={<SupportDevPage />} />
              <Route path="/donate" element={<SupportDevPage />} />
              <Route path="/portal" element={<MemberPortalPage />} />
              <Route path="/member-portal" element={<MemberPortalPage />} />

              {/* Campaigns, News & Issues */}
              <Route path="/issues" element={<IssuesPage />} />
              <Route path="/campaigns" element={<CampaignsPage />} />
              <Route path="/posters" element={<PostersPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/updates" element={<UpdatesPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/*" element={<NewsPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/protests" element={<ProtestsPage />} />
              <Route path="/black-monday" element={<BlackMondayPage />} />

              {/* Swarm & Contact */}
              <Route path="/members" element={<MembersPage />} />
              <Route path="/join" element={<JoinPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Information & Resources */}
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/tracker" element={<TrackerPage />} />

              {/* Legal & Policies */}
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />

              {/* 404 Fallback */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
