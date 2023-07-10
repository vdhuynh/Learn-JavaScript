/**
 * @param {array} apps
 */
const removeFirstApp = apps => {
    apps.shift();
    return apps;
}

// Sample usage - do not modify
const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"]
console.log(removeFirstApp(apps)); // ["Whatsapp", "Chrome", "Firefox"]
