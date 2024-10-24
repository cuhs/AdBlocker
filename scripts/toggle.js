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
                console.log("Unblocked Ads");
            }
        );
        //window.location.reload();
        button.textContent = "Enable"; 
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
        //window.location.reload();
        button.textContent = "Disable"; 
    }
    adsEnabled = !adsEnabled; 
}

