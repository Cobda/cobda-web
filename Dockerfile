# Installation stage
# Offical Node.js Alpine base image
FROM node:lts-alpine AS base

# Set working directory
WORKDIR /base

# Copy package.json and yarn-lock.json for utilising Docker cache 
# to save re-installing dependencies if unchanged
COPY package*.json yarn.lock ./ 

# Install dependencies
RUN yarn install

# TO DO in further development to lock down dependency versions
# RUN yarn install --frozen-lockfile

# Copy installed dependencies to the current working directory
COPY . .

# Build stage
FROM base AS builder

WORKDIR /build

# Copy files from base stage to build stage
COPY --from=base /base .
ARG Recaptcha_Sitekey
ARG Cloud_Vision_Key
ARG DB_URL
ENV Recaptcha_Sitekey=${Recaptcha_Sitekey}
ENV Cloud_Vision_Key=${Cloud_Vision_Key}
ENV DB_URL=${DB_URL}
RUN echo -e "NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY=${Recaptcha_Sitekey}\r\nNEXT_PUBLIC_GOOGLE_VISION_API_KEY=${Cloud_Vision_Key}\r\nDATABASE_URL=${DB_URL}" > .env.local
RUN npx prisma generate --schema ./src/prisma/schema.prisma
RUN yarn build

# Production stage
FROM node:current-alpine AS runner

WORKDIR /app

# Copy files from build stage to production stage
COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/package*.json ./
COPY --from=builder /build/.next ./.next
COPY --from=builder /build/public ./public

# Expose the listening port
EXPOSE 3000

# Run yarn start script when container starts
CMD ["yarn", "start"]
