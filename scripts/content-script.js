const adElements = document.querySelectorAll('[id*="ad-"], [id*="-ad"], [class*="ad-"], [class*="-ad"]');

adElements.forEach(element => {
    if (element instanceof HTMLVideoElement) {
        while(element.currentTime < element.duration)
            element.currentTime+=10;
    } else {
        const videos = element.getElementsByTagName('video');
        for (let video of videos) {
            while(video.currentTime < video.duration)
                video.currentTime+=10;
        }
    }
});