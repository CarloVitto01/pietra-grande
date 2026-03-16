# Dockerfile
# Build stage (TypeScript + Vite/React)
FROM node:22-alpine AS builder

WORKDIR /app

# Install deps (better cache)
COPY package.json package-lock.json* ./
# Choose one package manager automatically
RUN npm install

# Copy sources and build
COPY . .
RUN npm run build

# Runtime stage (Nginx)
FROM nginx:1.27-alpine AS runtime

# Replace default nginx site config
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets
# Vite default output is /app/dist
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
