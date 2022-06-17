/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require('next-compose-plugins')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(['react-extras'])

module.exports = withPlugins([withTM], {
  reactStrictMode: true,
})
