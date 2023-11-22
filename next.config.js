/** @type {import('next').NextConfig} */

const nextConfig = {
   async rewrites() {
     return [
       {
         source: '/api/:path*', // Alterei de '/api/:', para '/api/:path*'
         destination: 'http://localhost:8080/api/:path*', // Alterei para 'http://localhost:8080/api/:path*'
       },
     ];
   },
 };
 
 module.exports = nextConfig;
 