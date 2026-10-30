import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Preserve the existing /path/ URLs of the static site.
  trailingSlash: true,
  // Stop `next dev` from re-inserting its managed block into AGENTS.md.
  agentRules: false,
};

export default nextConfig;
