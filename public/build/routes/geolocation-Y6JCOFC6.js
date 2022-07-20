import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-2FNHBBYB.js";

// browser-route-module:/Users/maximshirshin/src/github.com/maxshirshin/h2o-test/app/routes/geolocation.tsx?browser
init_react();

// app/routes/geolocation.tsx
init_react();
var meta = () => {
  return {
    title: "Geolocation | Remix Cloudflare Demo",
    description: "Demo utilizing geolocation data on Cloudflare."
  };
};
function Geolocation() {
  let { formattedLocation, country } = useLoaderData();
  return /* @__PURE__ */ React.createElement("main", {
    className: "container mx-auto prose px-4 py-8"
  }, /* @__PURE__ */ React.createElement("h1", null, "Geolocation"), /* @__PURE__ */ React.createElement("p", null, "Show localized content based on information avaliable in the", " ", /* @__PURE__ */ React.createElement("code", null, "Request.cf"), " object."), /* @__PURE__ */ React.createElement("p", null, "Location: ", formattedLocation, " ", country.flag), /* @__PURE__ */ React.createElement("p", null, "Currencies"), /* @__PURE__ */ React.createElement("ul", null, Object.entries(country.currencies).map(([abbr, currency]) => /* @__PURE__ */ React.createElement("li", {
    key: abbr,
    "data-testid": "currency"
  }, abbr, ": ", currency.name, " (", currency.symbol, ")"))), /* @__PURE__ */ React.createElement("p", null, "Languages"), /* @__PURE__ */ React.createElement("ul", null, Object.values(country.languages).map((name) => /* @__PURE__ */ React.createElement("li", {
    key: name,
    "data-testid": "language"
  }, name))));
}
export {
  Geolocation as default,
  meta
};
//# sourceMappingURL=/build/routes/geolocation-Y6JCOFC6.js.map
