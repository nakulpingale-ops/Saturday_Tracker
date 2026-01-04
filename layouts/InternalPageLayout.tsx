import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface InternalPageLayoutProps {
    children: React.ReactNode;
}

/**
 * Shared layout for all internal pages (non-home).
 * Enforces a top padding of 115px to prevent content overlap with the fixed header.
 */
const InternalPageLayout: React.FC<InternalPageLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0a0514] font-sans text-slate-900 dark:text-white flex flex-col">
            {/* Header is fixed, so it doesn't take up flow space */}
            <Header isDarkMode={true} toggleTheme={() => { }} />

            {/* Main content with explicit 115px top padding */}
            <main className="flex-grow pt-[115px] pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default InternalPageLayout;
