const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.register("/sw.js", {
                scope: "/",
            });
            if (registration.installing) {
                console.log("Installation du service worker en cours");
            } else if (registration.waiting) {
                console.log("Service worker installé");
            } else if (registration.active) {
                console.log("Service worker actif");
            }
        } catch (error) {
            console.log(`Echec d'installation du worker : ${error}`);
        }
    }
}

const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "/",
            "/index.html",
            "/style.css",
            "/app.js",
            "/potato.png",
        ])
    );
});

registerServiceWorker();