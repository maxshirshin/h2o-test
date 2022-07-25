(function() {
    const c = {
        add: function(url) {
            const that = this;
            fetch(url).then(function(response) {
                if (!response.ok) {
                    throw new TypeError('bad response status');
                }
                return that.put(url, response);
            })
        },
        addAll: function (urls) {
            for (const u of urls) {
                this.add(u);
            }
            return Promise.resolve(void 0)
        },
        put: () => Promise.resolve(void 0),
        match: () => Promise.resolve(void 0),
        matchAll: () => Promise.resolve([]),
        keys: () => Promise.resolve([]),
    };

    if (typeof caches === 'undefined') {
        globalThis.caches = {
            default: c,
            open: () => Promise.resolve(c),
            has: () => true,
            keys: () => Promise.resolve([]),
        };
    }

    if (typeof Deno !== 'undefined') {
        for (const [k, v] of Object.entries(Deno.env.toObject())) {
            globalThis[k] = v;
        }
    }
})();
