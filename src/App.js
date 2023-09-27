import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import GalleryPage from './pages/Gallery.js';
import BlogPage from './pages/Blog.js';
import ContactPage from './pages/Contact.js';
import ServicesPage from './pages/Services.js';
import BlogArticlePagePage from './pages/Blog_article_page.js';
import PrivacyPolicyPage from './pages/PrivacyPolicy.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/gallery" element={<GalleryPage />} />
         
      <Route path="/blog" element={<BlogPage />} />
         
      <Route path="/contact" element={<ContactPage />} />
         
      <Route path="/services" element={<ServicesPage />} />
         
      <Route path="/blogarticlepage" element={<BlogArticlePagePage />} />

      <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
    </Routes>
  );
}

export default App;
