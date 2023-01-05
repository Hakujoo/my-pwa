const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.register("/my-pwa/service-worker.js", {
                scope: '/my-pwa/'
            });

            const text = document.getElementById("online-state");
            if (navigator.onLine) {
                text.text = "You are online";
            } else {
                text.text = "You are offline";
            }

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

registerServiceWorker();