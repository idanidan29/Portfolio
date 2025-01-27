import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(nextConfig, {

silent: true,
org: "javascript-mastery",
project: "javascript-nextjs",
}, {

widenClientFileUpload: true,
transpileClientSDK: true,
hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,

// Enables automatic instrumentation of Vercel Cron Monitors.
// See the following for more information:
// https://docs.sentry.io/product/crons/
// https://vercel.com/docs/cron-jobs
automaticVercelMonitors: true,
});