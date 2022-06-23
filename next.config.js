/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["gsap"]);
module.exports = withTM();

// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
