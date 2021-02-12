# Base on offical Node.js Alpine image
FROM node:current-alpine AS base

# Set working directory
WORKDIR /base

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package*.json yarn.lock ./ 

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy all files
COPY . .

# Build app
FROM base AS builder
ENV NODE_ENV=production
WORKDIR /build
COPY . .
COPY --from=base /base/node_modules ./node_modules
RUN yarn build

# Production image, copy all the files and run next
FROM node:current-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app

# Copy from build image
COPY --from=builder /build/package*.json ./
COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/.next ./.next
COPY --from=builder /build/public ./public

# Expose the listening port
EXPOSE 3000
# Run yarn start script when container starts
CMD ["yarn", "start"]