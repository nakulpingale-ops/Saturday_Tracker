import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Ads: React.FC = () => {
    const [isReady, setIsReady] = useState(false);
    const location = useLocation();

    // Feature Flag: Ads disabled by default until approval
    const adsEnabled = (import.meta as any).env.VITE_ADS_ENABLED === 'true';

    useEffect(() => {
        if (!adsEnabled) return;

        // Delay script injection until main content is likely mounted/interactive
        // and avoid checking during hydration if this were SSR (though this is Vite Client-Side)
        const timer = setTimeout(() => {
            setIsReady(true);
        }, 1500); // 1.5s delay to ensure content is visible first

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isReady) return;

        // Allowlist/Denylist logic
        // We generally allow ads on content-rich pages.
        // For now, simpler: prevent on specialized tool-only routes if they existed.
        // Current routes seem to be: /, /india/..., /us/... which are content-heavy or result-heavy.
        // We will stick to the default injection for now but wrapped in 'isReady'.

        const existingScript = document.querySelector('script[src*="adsbygoogle.js"]');
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5013551171853082";
            script.async = true;
            script.crossOrigin = "anonymous";
            document.head.appendChild(script);
        }
    }, [isReady, location]);

    return null; // This component handles script injection logic only
};

export default Ads;
