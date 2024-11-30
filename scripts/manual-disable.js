document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggleManual');
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

    document.addEventListener('click', function(event) {
        if (blockMode && event.target.classList.contains('ad')) {
            event.target.style.display = 'none';
        }
    });

    // Allow users to click on ads to manually hide them
    document.addEventListener('click', function(event) {
        if (blockMode && event.target.closest('.ad')) {
            event.target.closest('.ad').style.display = 'none';
        }
    });
});