const button = document.querySelector(".toggle");
let adsEnabled = true; 



function setState(value) {
    chrome.storage.local.set({ adsEnabled: value }).then(() => {
        console.log("Value is set");
    });
}

chrome.storage.local.get(["adsEnabled"]).then((result) => {
    adsEnabled = result.adsEnabled !== undefined ? result.adsEnabled : true;
    updateButtonText(adsEnabled); 
});

button.addEventListener("click", toggleAds);
function toggleAds() {
    if (adsEnabled) {
        chrome.declarativeNetRequest.updateEnabledRulesets(
            {
                enableRulesetIds: [],
                disableRulesetIds: ["ruleset_1"]
            },
            function() {
                console.log("Unblocked Ads");
            }
        );
        
    } else {
        chrome.declarativeNetRequest.updateEnabledRulesets(
            {
                enableRulesetIds: ["ruleset_1"],
                disableRulesetIds: []
            },
            function() {
                console.log("Blocked ads");
            }
        );
        
    }
    adsEnabled = !adsEnabled; 
    setState(adsEnabled);
    updateButtonText(adsEnabled);
}

function updateButtonText(adsEnabled) {
    button.textContent = adsEnabled ? "Disable" : "Enable";
}