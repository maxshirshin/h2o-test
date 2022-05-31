import {
  createRequestHandler,
} from "@remix-run/cloudflare-workers";
import * as build from "../build/index.js";

const handleRequest = createRequestHandler({ build });
const handleEvent = async (event: FetchEvent) => handleRequest(event);

addEventListener("fetch", async (event) => {
  try {
    event.respondWith(handleEvent(event));
  } catch (e: any) {
    event.respondWith(new Response("Internal Error: " + String(e), { status: 500 }));
  }
});
