import {
  Link,
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-2FNHBBYB.js";

// browser-route-module:/Users/maximshirshin/src/github.com/maxshirshin/h2o-test/app/routes/redirects/index.tsx?browser
init_react();

// app/routes/redirects/index.tsx
init_react();
var meta = () => {
  return {
    title: "Redirects | Remix Cloudflare Demo",
    description: "Demo Cloudflare KV store to do redirects at the edge."
  };
};
function RedirectsIndex() {
  let { err } = useLoaderData();
  return /* @__PURE__ */ React.createElement("main", {
    className: "container mx-auto prose px-4 py-8"
  }, /* @__PURE__ */ React.createElement("h1", null, "Redirects"), err ? /* @__PURE__ */ React.createElement("p", {
    className: "text-error"
  }, err) : null, /* @__PURE__ */ React.createElement("p", null, "This demo redirects any path from", " ", /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: "1"
  }, "/redirects/1"), " ", "-", " ", /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: "1000"
  }, "/redirects/1000"), " ", "to ", /* @__PURE__ */ React.createElement("code", null, "/redirects/post/1"), " - ", /* @__PURE__ */ React.createElement("code", null, "/redirects/post/1000"), " by looking up the pathname in a Cloudflare KV store."), /* @__PURE__ */ React.createElement("p", null, "Every route returns a latency (added as a query param) which should give you an idea of how the performance reading from a KV store is."));
}
export {
  RedirectsIndex as default,
  meta
};
//# sourceMappingURL=/build/routes/redirects/index-QHYVEPQG.js.map
