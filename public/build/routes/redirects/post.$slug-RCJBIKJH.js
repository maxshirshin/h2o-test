import {
  Link,
  React,
  __toESM,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-3YYE3S42.js";

// browser-route-module:/Users/maximshirshin/src/github.com/maxshirshin/h2o-test/app/routes/redirects/post.$slug.tsx?browser
init_react();

// app/routes/redirects/post.$slug.tsx
init_react();
var import_react = __toESM(require_react());
var meta = ({ params }) => {
  return {
    title: `Post ${params.slug} | Remix Cloudflare Demo`,
    description: "Demo Cloudflare KV store to do redirects at the edge."
  };
};
function Post() {
  let { extraRedirects, latency, slug } = useLoaderData();
  return /* @__PURE__ */ React.createElement("main", {
    className: "container mx-auto prose px-4 py-8"
  }, /* @__PURE__ */ React.createElement("h1", null, "Post ", slug), typeof latency === "string" ? /* @__PURE__ */ React.createElement("p", null, "latency: ", latency, "ms") : null, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: "/redirects"
  }, "Edge Redirects"), extraRedirects.map((to) => /* @__PURE__ */ React.createElement(import_react.Fragment, {
    key: to
  }, " ", "|", " ", /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: `/redirects/${to}`
  }, "/redirects/", to)))));
}
export {
  Post as default,
  meta
};
//# sourceMappingURL=/build/routes/redirects/post.$slug-RCJBIKJH.js.map
