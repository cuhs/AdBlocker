
const skipAds = () => {
    const adElements = document.querySelectorAll('[id*="ad-"] video, [id*="-ad"] video, [class*="ad-"] video, [class*="-ad"] video');
        
    adElements.forEach(element => {
        if (element instanceof HTMLVideoElement) {
            if (isFinite(element.duration)) {
                element.currentTime += 3; 
            }
        } else {
            const videos = element.getElementsByTagName('video');
            for (let video of videos) {
                if (isFinite(element.duration)) {                        
                    video.currentTime += 3;
                }
            }
        }
    });

};


const observer = new MutationObserver(skipAds);
observer.observe(document.body, { childList: true, subtree: true });

skipAds();