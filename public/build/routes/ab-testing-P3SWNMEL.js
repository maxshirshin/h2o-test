import {
  require_sessions
} from "/build/_shared/chunk-IOFX5F7J.js";
import {
  Form,
  React,
  __commonJS,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-3YYE3S42.js";

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    init_react();
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString === Object.prototype.toString) {
              for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                  classes.push(key);
                }
              }
            } else {
              classes.push(arg.toString());
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// browser-route-module:/Users/maximshirshin/src/github.com/maxshirshin/h2o-test/app/routes/ab-testing.tsx?browser
init_react();

// app/routes/ab-testing.tsx
init_react();
var import_classnames = __toESM(require_classnames());
var import_sessions = __toESM(require_sessions());

// app/images/default.jpg
var default_default = "/build/_assets/default-4GK3HXJ6.jpg";

// app/images/a.jpg
var a_default = "/build/_assets/a-QSRXVKOP.jpg";

// app/images/b.jpg
var b_default = "/build/_assets/b-WDHL5TKB.jpg";

// app/routes/ab-testing.tsx
var meta = () => {
  return {
    title: "A/B Testing | Remix Cloudflare Demo",
    description: "Demo utilizing cookies to run A/B tests."
  };
};
function AbTesting() {
  let { bucket } = useLoaderData();
  return /* @__PURE__ */ React.createElement("main", {
    className: "container mx-auto prose px-4 py-8"
  }, /* @__PURE__ */ React.createElement("h1", null, "AB testing with buckets"), /* @__PURE__ */ React.createElement("p", null, "In this demo we use cookies to assign a bucket with the variant to show. When you first visited this page you were randomly assigned a bucket."), /* @__PURE__ */ React.createElement("p", null, "Click one of the buttons below to assign the bucket you are in. Even after re-loading the page you will remain in the assigned bucket."), /* @__PURE__ */ React.createElement("p", null, "Bucket: ", bucket ? bucket : "none"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "inline-block",
    replace: true
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "bucket",
    value: ""
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: (0, import_classnames.default)("btn", !bucket && "btn-active")
  }, "Remove Bucket")), " ", /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "inline-block",
    replace: true
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "bucket",
    value: "a"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: (0, import_classnames.default)("btn", bucket === "a" && "btn-active")
  }, "Bucket A")), " ", /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "inline-block",
    replace: true
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "bucket",
    value: "b"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: (0, import_classnames.default)("btn", bucket === "b" && "btn-active")
  }, "Bucket B"))), /* @__PURE__ */ React.createElement("img", {
    alt: `${bucket || "default"} bucket image`,
    height: 934,
    width: 700,
    src: (() => {
      switch (bucket) {
        case "a":
          return a_default;
        case "b":
          return b_default;
        default:
          return default_default;
      }
    })()
  }));
}
export {
  AbTesting as default,
  meta
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
//# sourceMappingURL=/build/routes/ab-testing-P3SWNMEL.js.map
