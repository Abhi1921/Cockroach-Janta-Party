import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

// Shared Layout Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
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
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/vision" element={<VisionPage />} />
              <Route path="/manifesto" element={<ManifestoPage />} />
              <Route path="/issues" element={<IssuesPage />} />
              <Route path="/campaigns" element={<CampaignsPage />} />
              <Route path="/posters" element={<PostersPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/updates" element={<UpdatesPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/*" element={<NewsPage />} />
              <Route path="/protests" element={<ProtestsPage />} />
              <Route path="/black-monday" element={<BlackMondayPage />} />
              <Route path="/members" element={<MembersPage />} />
              <Route path="/join" element={<JoinPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<TermsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
