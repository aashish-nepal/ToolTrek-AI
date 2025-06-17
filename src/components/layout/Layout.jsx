import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import SEO from '../common/SEO';
import AdSenseBanner from '../ads/AdSenseBanner';

const Layout = ({ children, seoProps }) => {
  return (
    <>
      <SEO {...seoProps} />
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <AdSenseBanner />
        <main className="flex-grow container mx-auto px-4 py-8 flex flex-col md:flex-row">
          <div className="w-full md:w-3/4 md:pr-8">
            {children}
          </div>
          <aside className="w-full md:w-1/4 mt-8 md:mt-0">
            <Sidebar />
          </aside>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;