import type { LoaderFunction, MetaFunction } from "remix";
import { json, useLoaderData } from "remix";

import countries from "../lib/countries.json";

export let meta: MetaFunction = () => {
  return {
    title: "Geolocation | Remix Cloudflare Demo",
    description: "Demo utilizing geolocation data on Cloudflare.",
  };
};

export let loader: LoaderFunction = ({ request, context }) => {
    let country = countries.find((c) => c.cca2 === "DE");

    return json({
      country,
      pipa: context?.env?.PIPA,
      isOxygen: context?.isOxygen
    });
};

export default function Geolocation() {
  let { country,pipa, isOxygen } = useLoaderData();

  return (
    <main className="container mx-auto prose px-4 py-8">
      <h1>Environment var PIPA: {pipa}, we run in {isOxygen ? "Oxygen" : "no idea"}</h1>

      <p>Currencies</p>
      <ul>
        {Object.entries(country.currencies).map(([abbr, currency]: any) => (
          <li key={abbr} data-testid="currency">
            {abbr}: {currency.name} ({currency.symbol})
          </li>
        ))}
      </ul>
      <p>Languages</p>
      <ul>
        {Object.values(country.languages).map((name: any) => (
          <li key={name} data-testid="language">
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
