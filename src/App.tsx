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

import { FloatingWidgets } from './components/FloatingWidgets';

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

// Additional Policy & Community Pages
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { EditorialPolicyPage } from './pages/EditorialPolicyPage';
import { AccessibilityPage } from './pages/AccessibilityPage';
import { CommunityGuidelinesPage } from './pages/CommunityGuidelinesPage';
import { MemesPage } from './pages/MemesPage';
import { RaiseVoicePage } from './pages/RaiseVoicePage';
import { LeaveSwarmPage } from './pages/LeaveSwarmPage';
import { DonateAbdulPage } from './pages/DonateAbdulPage';
import { MasterArchivePage } from './pages/MasterArchivePage';
import { InternalDisputesPage } from './pages/InternalDisputesPage';
import { FactCheckPage } from './pages/FactCheckPage';
import { DomainsPage } from './pages/DomainsPage';
import { YouTubeDirectoryPage } from './pages/YouTubeDirectoryPage';
import { SocialDirectoryPage } from './pages/SocialDirectoryPage';
import { DocumentArchivePage } from './pages/DocumentArchivePage';
import { PersonDetailPage } from './pages/PersonDetailPage';
import { ResearchDashboardPage } from './pages/ResearchDashboardPage';
import { CanonicalSpellingPage } from './pages/CanonicalSpellingPage';

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
              <Route path="/cocroach-janata-party" element={<HomePage />} />
              <Route path="/cockroach-janata-party" element={<HomePage />} />
              <Route path="/cockroach-janta-party" element={<HomePage />} />
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
              <Route path="/campaign/donate-to-abdul" element={<DonateAbdulPage />} />
              <Route path="/donate-to-abdul" element={<DonateAbdulPage />} />
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

              {/* Information & Research Archive */}
              <Route path="/archive" element={<MasterArchivePage />} />
              <Route path="/master-archive" element={<MasterArchivePage />} />
              <Route path="/digital-archive" element={<MasterArchivePage />} />
              <Route path="/sources" element={<MasterArchivePage />} />
              <Route path="/cockroach-janta-party" element={<CanonicalSpellingPage />} />
              <Route path="/cockroach-janata-party" element={<CanonicalSpellingPage />} />
              <Route path="/what-is-cjp" element={<CanonicalSpellingPage />} />
              <Route path="/internal-disputes" element={<InternalDisputesPage />} />
              <Route path="/fact-check" element={<FactCheckPage />} />
              <Route path="/domains" element={<DomainsPage />} />
              <Route path="/youtube" element={<YouTubeDirectoryPage />} />
              <Route path="/videos" element={<YouTubeDirectoryPage />} />
              <Route path="/social" element={<SocialDirectoryPage />} />
              <Route path="/x-twitter" element={<SocialDirectoryPage />} />
              <Route path="/instagram" element={<SocialDirectoryPage />} />
              <Route path="/facebook" element={<SocialDirectoryPage />} />
              <Route path="/telegram" element={<SocialDirectoryPage />} />
              <Route path="/documents" element={<DocumentArchivePage />} />
              <Route path="/people/:personId" element={<PersonDetailPage />} />
              <Route path="/people/abhijeet-dipke" element={<PersonDetailPage />} />
              <Route path="/people/ashutosh-ranka" element={<PersonDetailPage />} />
              <Route path="/people/saurav-das" element={<PersonDetailPage />} />
              <Route path="/people/manish-brahmbhatt" element={<PersonDetailPage />} />
              <Route path="/admin" element={<ResearchDashboardPage />} />
              <Route path="/research-dashboard" element={<ResearchDashboardPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/tracker" element={<TrackerPage />} />

              {/* Legal & Policies */}
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/editorial-policy" element={<EditorialPolicyPage />} />
              <Route path="/accessibility" element={<AccessibilityPage />} />
              <Route path="/community-guidelines" element={<CommunityGuidelinesPage />} />
              <Route path="/memes" element={<MemesPage />} />
              <Route path="/raise-voice" element={<RaiseVoicePage />} />
              <Route path="/leave-swarm" element={<LeaveSwarmPage />} />

              {/* 404 Fallback */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWidgets />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
