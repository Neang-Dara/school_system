/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {hostname: "image.pexels.com"}
        ],
    }
}

module.exports = nextConfig;
