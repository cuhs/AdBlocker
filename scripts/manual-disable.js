document.addEventListener('DOMContentLoaded', function() {
    const ads = document.querySelectorAll('.ad');
    const toggleButton = document.createElement('button');
    toggleButton.className = 'toggleManual';
    toggleButton.textContent = 'Enable Block Mode';
    document.body.appendChild(toggleButton);

    let blockMode = false;

    // Retrieve blockMode from chrome local storage
    chrome.storage.local.get(['blockMode'], function(result) {
        blockMode = result.blockMode || false;
        toggleButton.textContent = blockMode ? 'Disable Block Mode' : 'Enable Block Mode';
    });

    toggleButton.addEventListener('click', function() {
        blockMode = !blockMode;
        toggleButton.textContent = blockMode ? 'Disable Block Mode' : 'Enable Block Mode';
        // Save blockMode to chrome local storage
        chrome.storage.local.set({ blockMode: blockMode });
    });

    ads.forEach(ad => {
        if (blockMode) {
            ad.style.display = 'none';
        }
    });
});