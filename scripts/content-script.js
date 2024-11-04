const skipAds = () => {
    const adElements = document.querySelectorAll('[id*="ad-"], [id*="-ad"], [class*="ad-"], [class*="-ad"], video');
    
    adElements.forEach(element => {
        if (element instanceof HTMLVideoElement) {
            if (isFinite(element.duration)) {
                element.currentTime = element.duration; 
            }
        } else {
            const videos = element.getElementsByTagName('video');
            for (let video of videos) {
                if (isFinite(element.duration)) {
                    video.currentTime = video.duration;
                }
            }
        }
    });
};


const observer = new MutationObserver(skipAds);
observer.observe(document.body, { childList: true, subtree: true });

skipAds();