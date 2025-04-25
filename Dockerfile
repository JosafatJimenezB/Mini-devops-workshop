# ----------------------------
# STAGE 1: Builder
# ----------------------------
FROM node:22-alpine AS builder

# Instala pnpm globalmente
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate

# Crea el directorio de trabajo
WORKDIR /app

# Copia archivos necesarios
COPY . .

# Instala dependencias
RUN pnpm install

# Compila el proyecto
RUN pnpm run build

# ----------------------------
# STAGE 2: Runtime
# ----------------------------
FROM node:22-alpine AS runner

RUN corepack enable && corepack prepare pnpm@10.4.1 --activate

WORKDIR /app

# Solo copia lo esencial para ejecutar la app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .
COPY --from=builder /app/pnpm-lock.yaml .
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 9000

CMD ["node", "dist/server.js"]
