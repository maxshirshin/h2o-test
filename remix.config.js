/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
 module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: process.env.NODE_ENV === "production" ? process.env.HYDROGEN_ASSET_BASE_URL : "/build/",
  serverBuildDirectory: "build",
  devServerBroadcastDelay: 1000
};
