FROM node:20-slim AS builder
WORKDIR /app

# Install Chromium for Puppeteer pre-rendering
RUN apt-get update && apt-get install -y --no-install-recommends \
    chromium \
    && rm -rf /var/lib/apt/lists/*

# Skip Puppeteer's bundled Chromium download, use system one
ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- Production stage ---
FROM node:20-slim
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY server.js ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "server.js"]
