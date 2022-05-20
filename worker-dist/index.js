addEventListener("fetch", (e) => {
        const resp = new Response("Test response that works for sure", {
                status: 200
        });
        e.respondWith(resp);
})
