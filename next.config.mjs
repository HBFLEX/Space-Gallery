import path from 'path';
import { fileURLToPath } from 'url';


// Get the directory name from the file URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['utfs.io'],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack: (config) => {
        config.resolve.alias['@'] = path.join(__dirname);
        return config;
    },
};

export default nextConfig;
