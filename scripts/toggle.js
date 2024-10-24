const button = document.querySelector(".toggle");
let adsEnabled = true; 

button.addEventListener("click", toggleAds);

function toggleAds() {
    if (adsEnabled) {
        chrome.declarativeNetRequest.updateEnabledRulesets(
            {
                enableRulesetIds: [],
                disableRulesetIds: ["ruleset_1"]
            },
            function() {
                console.log("Ads are not blocked");
            }
        );
        button.textContent = "Enable"; 
    } else {
        chrome.declarativeNetRequest.updateEnabledRulesets(
            {
                enableRulesetIds: ["ruleset_1"],
                disableRulesetIds: []
            },
            function() {
                console.log("Ads are blocked");
            }
        );
        button.textContent = "Disable"; 
    }
    adsEnabled = !adsEnabled; 
}

