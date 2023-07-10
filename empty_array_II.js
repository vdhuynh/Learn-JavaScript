/**
 * @param {array} apps
 */
const resetApps = apps => {
    return apps.length = 0;
}

// Sample usage - do not modify
const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"]
console.log(resetApps(apps));
