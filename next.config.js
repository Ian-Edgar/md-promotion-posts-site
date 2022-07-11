/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    firebasedb_url:
      'https://dept-ian-edgar-default-rtdb.europe-west1.firebasedatabase.app/',
  },
};

module.exports = nextConfig;
