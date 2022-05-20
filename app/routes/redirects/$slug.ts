import type { LoaderFunction, MetaFunction } from "remix";
import { redirect } from "remix";

export let meta: MetaFunction = ({ params }) => {
  return {
    title: `Post ${params.slug} | Remix Cloudflare Demo`,
    description: "Demo Cloudflare KV store to do redirects at the edge.",
  };
};

export let loader: LoaderFunction = async ({ request }) => {
  let start = Date.now();
  let redirectPath = `/redirects-stub`;

  return redirect(`${redirectPath}?l=${Date.now() - start}`);
};
