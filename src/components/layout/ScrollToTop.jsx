import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Disable smooth behavior temporarily
        const originalScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        
        // Scroll to top immediately
        window.scrollTo(0, 0);
        
        // Restore original scroll behavior after a small delay
        setTimeout(() => {
            document.documentElement.style.scrollBehavior = originalScrollBehavior;
        }, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;