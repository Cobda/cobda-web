# Installation stage
# Offical Node.js Alpine base image
FROM node:lts-alpine AS base

# Set working directory
WORKDIR /base

# Copy package.json and package-lock.json for utilising Docker cache 
# to save re-installing dependencies if unchanged
COPY package*.json yarn.lock ./ 

# Install dependencies only needed
RUN yarn install --frozen-lockfile

# Copy installed dependencies to current working directory
COPY . .

# Build stage
FROM base AS builder

# TO DO in further development
# ENV NODE_ENV=production

WORKDIR /build
COPY --from=base /base .
RUN yarn build

# Production stage
FROM node:current-alpine AS runner

# TO DO in further development
# ENV NODE_ENV=production

WORKDIR /app

# Copy files from build stage to production stage
COPY --from=builder /build/package*.json /build/node_modules /build/.next /build/public ./

# Expose the listening port
EXPOSE 3000

# Run yarn start script when container starts
CMD ["yarn", "start"]
