import { createRequestHandler as createRemixRequestHandler } from "@remix-run/server-runtime";

import * as build from "../build/index.js";

const handleRequest = createRemixRequestHandler(build);

export default {
  fetch(request: Request, env, { waitUntil }) {
    try {
      return handleRequest(request, {
        env: Object.assign({}, env),
        waitUntil,
        isOxygen: true
      });
    } catch (e: unknown) {
      if (env.NODE_ENV === "development") {
        return new Response(e instanceof Error ? e.message : String(e), {
          status: 500,
        })
      }

      return new Response("Internal Error", { status: 500 });
    }
  },
}
