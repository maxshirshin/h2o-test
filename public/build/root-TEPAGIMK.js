import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  React,
  Scripts,
  __commonJS,
  __toESM,
  init_react,
  init_react_router_dom,
  require_react,
  useCatch,
  useLoaderData,
  useLocation,
  useTransition
} from "/build/_shared/chunk-3YYE3S42.js";

// empty-module:./sessions.server
var require_sessions = __commonJS({
  "empty-module:./sessions.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:/Users/maximshirshin/src/github.com/maxshirshin/h2o-test/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/components/navbar.tsx
init_react();
init_react_router_dom();
function Navbar() {
  let { pathname } = useLocation();
  return /* @__PURE__ */ React.createElement("div", {
    className: "navbar shadow-lg bg-neutral text-neutral-content"
  }, pathname !== "/" ? /* @__PURE__ */ React.createElement("div", {
    className: "flex-none"
  }, /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    to: "/",
    className: "btn btn-square btn-ghost",
    title: "Go home"
  }, /* @__PURE__ */ React.createElement("svg", {
    fill: "none",
    viewBox: "0 0 24 24",
    className: "inline-block w-6 h-6 stroke-current text-success"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 19l-7-7m0 0l7-7m-7 7h18"
  })))) : null, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 px-2 mx-2"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-lg font-bold"
  }, "Remix + Cloudflare = \u2764\uFE0F")));
}

// app/utils/scroll.ts
init_react();
var React2 = __toESM(require_react());
init_react_router_dom();
var firstRender = true;
var useSSRLayoutEffect = typeof window === "undefined" ? () => {
} : React2.useLayoutEffect;
if (typeof window !== "undefined" && window.history.scrollRestoration !== "manual") {
  window.history.scrollRestoration = "manual";
}
function useScrollRestoration(enabled = true) {
  var _a, _b;
  const positions = React2.useRef(/* @__PURE__ */ new Map()).current;
  const location = useLocation();
  const isSubmission = (_b = (_a = location.state) == null ? void 0 : _a.isSubmission) != null ? _b : false;
  const transition = useTransition();
  React2.useEffect(() => {
    if (isSubmission)
      return;
    if (transition.state === "loading") {
      positions.set(location.key, window.scrollY);
    }
  }, [transition.state, location.key, positions, isSubmission]);
  useSSRLayoutEffect(() => {
    if (!enabled)
      return;
    if (transition.state !== "idle")
      return;
    if (isSubmission)
      return;
    if (firstRender) {
      firstRender = false;
      return;
    }
    const y = positions.get(location.key);
    window.scrollTo(0, y != null ? y : 0);
  }, [transition.state, location.key, positions, isSubmission]);
}

// app/root.tsx
var import_sessions = __toESM(require_sessions());

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-MVATAOIS.css";

// app/root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
var unstable_shouldReload = ({ submission }) => {
  return !!submission && submission.action === "/themes";
};
function Document({
  children,
  title,
  theme
}) {
  useScrollRestoration();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    "data-theme": theme || "dark"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Navbar, null), children, /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
function App() {
  let { theme } = useLoaderData();
  return /* @__PURE__ */ React.createElement(Document, {
    theme
  }, /* @__PURE__ */ React.createElement(Outlet, null));
}
function CatchBoundary() {
  let caught = useCatch();
  switch (caught.status) {
    case 401:
    case 404:
      return /* @__PURE__ */ React.createElement(Document, {
        title: `${caught.status} ${caught.statusText}`
      }, /* @__PURE__ */ React.createElement("h1", null, caught.status, " ", caught.statusText));
    default:
      throw new Error(`Unexpected caught response with status: ${caught.status}`);
  }
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Uh-oh!"
  }, /* @__PURE__ */ React.createElement("h1", null, "App Error"), /* @__PURE__ */ React.createElement("pre", null, error.message), /* @__PURE__ */ React.createElement("p", null, "Replace this UI with what you want users to see when your app throws uncaught errors."));
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  links,
  unstable_shouldReload
};
//# sourceMappingURL=/build/root-TEPAGIMK.js.map
