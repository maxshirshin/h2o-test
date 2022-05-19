import {
  createRequestHandler,
} from "@remix-run/cloudflare-workers";
import * as build from "../build/index.js";

declare global {
  const REDIRECTS: KVNamespace;
}

const handleRequest = createRequestHandler({ build });

const handleEvent = async (event: FetchEvent) => {
  const response = await handleRequest(event);

  return response;
};

addEventListener("fetch", async (event) => {
  try {
    event.respondWith(handleEvent(event));
  } catch (e: any) {
    event.respondWith(new Response("Internal Error: " + String(e), { status: 500 }));
  }
});
