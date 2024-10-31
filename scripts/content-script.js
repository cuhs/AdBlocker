const adElements = document.querySelectorAll('[id*="ad-"], [id*="-ad"], [class*="ad-"], [class*="-ad"]');

adElements.forEach(element => {
    if (element instanceof HTMLVideoElement) {
        element.currentTime = element.duration || 0;
    } else {
        const videos = element.getElementsByTagName('video');
        for (let video of videos) {
            video.currentTime = video.duration || 0;
        }
    }
});