# Start from a slim Node.js base image
FROM node:20-slim

# Enable pnpm via corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Cache dependencies separately
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prefer-frozen-lockfile --ignore-scripts=false

# Copy rest of the source
COPY . .

# Build the SvelteKit app
RUN pnpm run build

# Use a smaller image for runtime if needed
# EXPOSE is optional if you're using `pnpm preview`
EXPOSE 3000

# Command to run your app
CMD ["pnpm", "preview", "--host"]
