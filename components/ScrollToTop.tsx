import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * 
 * In Single Page Applications (SPAs) like React Router, changing the route
 * does not automatically reload the page or reset the scroll position.
 * This component listens for location changes and manually scrolls the window
 * to the top (or to a hash anchor) to mimic standard browser navigation behavior.
 */
const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there is a hash (e.g., #section-id), try to scroll to it
        if (hash) {
            // We use a small timeout to ensure the DOM has rendered the new content
            const timer = setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    // Fallback to top if element not found
                    window.scrollTo(0, 0);
                }
            }, 0);
            return () => clearTimeout(timer);
        }

        // Otherwise, simply scroll to the top
        else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]); // Re-run effect when path or hash changes

    return null;
};

export default ScrollToTop;
