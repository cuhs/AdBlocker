(function() {
    'use strict';

    // Function to remove video ads
    function removeAds() {
        const adSelectors = [
            'video-ad', // Example selector for video ads
            '.ad-container', // Example selector for ad containers
            '.ytp-ad-module' // Example selector for YouTube ads
        ];

        adSelectors.forEach(selector => {
            const ads = document.querySelectorAll(selector);
            ads.forEach(ad => ad.remove());
        });
    }

    // Observe changes in the DOM to catch dynamically loaded ads
    const observer = new MutationObserver(removeAds);
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial call to remove ads
    removeAds();
})();