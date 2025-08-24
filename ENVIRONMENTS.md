# Environment

This document describes all environment variables used in the project.

## Server-side Environment Variables

- `SITE_URL`: The main URL of the website

## Client-side Environment Variables

These variables are exposed to the client-side code and are prefixed with `NEXT_PUBLIC_`:

- `NEXT_PUBLIC_SITE_URL`: Publicly accessible site URL

## Usage

The project uses [@t3-oss/env-nextjs](https://env.t3.gg/docs/nextjs) for type-safe environment variable handling. All environment variables are validated using Zod schemas to ensure type safety and proper formatting. Make sure to add proper documentation and schema validation in `env.ts` for all new variables.
