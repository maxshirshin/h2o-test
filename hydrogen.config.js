import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  routes: import.meta.globEager('./src/routes/**/*.server.[jt](s|sx)'),
  shopify: {
    defaultLocale: 'en',
    storeDomain: 'botanical-art-by-maxim-shirshin.myshopify.com',
    storefrontToken: 'd1ea7eb158780fb9146f1a1789893e09',
    storefrontApiVersion: '2022-07',
  },
});
