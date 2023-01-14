FROM node:18 as base

RUN npm install -g pnpm

WORKDIR /app
COPY package.json .
RUN pnpm install
COPY . .

EXPOSE 3000
CMD ["pnpm", "dev"]
