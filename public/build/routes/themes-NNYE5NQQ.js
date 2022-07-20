import {
  require_sessions
} from "/build/_shared/chunk-IOFX5F7J.js";
import {
  Form,
  React,
  __toESM,
  init_react,
  require_react,
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-3YYE3S42.js";

// browser-route-module:/Users/maximshirshin/src/github.com/maxshirshin/h2o-test/app/routes/themes.tsx?browser
init_react();

// app/routes/themes.tsx
init_react();
var import_react = __toESM(require_react());
var import_sessions = __toESM(require_sessions());
var VALID_THEMES = [
  "dark",
  "light",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine"
];
var meta = () => {
  return {
    title: "Themes | Remix Cloudflare Demo",
    description: "Demo utilizing cookies to change the theme."
  };
};
function Themes() {
  let selectedTheme = useLoaderData();
  let formRef = (0, import_react.useRef)(null);
  let submit = useSubmit();
  let onRadioChanged = () => {
    submit(formRef.current);
  };
  return /* @__PURE__ */ React.createElement("main", {
    className: "container mx-auto prose px-4 py-8"
  }, /* @__PURE__ */ React.createElement("h1", null, "Themes"), /* @__PURE__ */ React.createElement("p", null, "By storing the user selected theme in a cookie we can provide a zero flicker experience even on initial page load."), /* @__PURE__ */ React.createElement(Form, {
    ref: formRef,
    method: "post"
  }, VALID_THEMES.map((theme) => /* @__PURE__ */ React.createElement("div", {
    key: theme,
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "cursor-pointer label"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "label-text"
  }, theme), /* @__PURE__ */ React.createElement("input", {
    "data-testid": `theme-${theme}`,
    type: "radio",
    name: "theme",
    defaultChecked: selectedTheme === theme,
    className: "radio",
    value: theme,
    onChange: onRadioChanged
  })))), /* @__PURE__ */ React.createElement("noscript", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Save"))));
}
export {
  Themes as default,
  meta
};
//# sourceMappingURL=/build/routes/themes-NNYE5NQQ.js.map
