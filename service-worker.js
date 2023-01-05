const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "/my-pwa/",
            "/my-pwa/index.html",
            "/my-pwa/style.css",
            "/my-pwa/app.js",
            "/my-pwa/potato.png",
        ])
    );
});