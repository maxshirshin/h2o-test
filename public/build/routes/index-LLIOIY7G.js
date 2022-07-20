import {
  Link,
  React,
  init_react
} from "/build/_shared/chunk-3YYE3S42.js";

// browser-route-module:/Users/maximshirshin/src/github.com/maxshirshin/h2o-test/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var meta = () => {
  return {
    title: "Remix Cloudflare Demo",
    description: "A demo of Remix running on Cloudflare workers."
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("section", {
    className: "hero py-24 bg-base-200"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "block hero-content lg:flex-row"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "mb-5 text-5xl font-bold"
  }, "Remix on Cloudflare"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-5"
  }, "Cloudflare + Remix gives you the ability to build fully dynamic sites that run on the edge without the drawbacks of static generation!"), /* @__PURE__ */ React.createElement("a", {
    className: "btn btn-primary",
    href: "https://github.com/jacob-ebey/remix-cloudflare-demo"
  }, "View Source")))), /* @__PURE__ */ React.createElement("section", {
    className: "container my-12 mx-auto px-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  }, /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: "themes",
    className: "card lg:card-side bordered hover:border-primary-focus"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Multiple Themes"), /* @__PURE__ */ React.createElement("p", null, "User selectable themes with zero flicker on page load."))), /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: "ab-testing",
    className: "card lg:card-side bordered hover:border-primary-focus"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Simple A/B Test"), /* @__PURE__ */ React.createElement("p", null, "Run simple A/B tests based on randomly assigned cookies."))), /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: "redirects",
    className: "card lg:card-side bordered hover:border-primary-focus"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Edge Redirects"), /* @__PURE__ */ React.createElement("p", null, "A resource route that performs redirects at the edge."))), /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: "geolocation",
    className: "card lg:card-side bordered hover:border-primary-focus"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Geolocation"), /* @__PURE__ */ React.createElement("p", null, "Access the users location through Cloudflare request properties."))))));
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/index-LLIOIY7G.js.map
