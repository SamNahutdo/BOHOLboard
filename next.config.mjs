import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Cursor / Windows sometimes leaves lockfiles outside the project folder.
  // Setting this ensures Next traces files from this repo only.
  outputFileTracingRoot: __dirname,
}

export default nextConfig

