import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import ServicesPage from './pages/servicesPage/ServicesPage';
import ProjectsPage from './pages/projectsPage/ProjectsPage';
import ProjectPage from './pages/projectsPage/projectPage/ProjectPage';
import ServiceDetails from "./pages/servicesPage/servicePage/ServiceDetails";
import ContactPage from "./pages/contactPage/ContactPage";
import NewsletterPage from "./pages/newsletterPage/NewsletterPage";
import ShopPage from "./pages/shopPage/ShopPage";
import ProductPage from "./pages/shopPage/productPage/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:productId" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;