import React, { useState } from "react";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import Navigation from './Navigation';


export default function PortfolioContainer() {
    // const [currentPage, setCurrentPage] = useState('About');
    const [currentPage, setCurrentPage] = useState('Resume');
  
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      return <Resume />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </div>
    );
  }