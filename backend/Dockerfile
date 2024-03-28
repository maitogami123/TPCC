# ---- Base Node ----
FROM node:18 AS base
WORKDIR /app
COPY package.json .
COPY yarn.lock .

# ---- Test ----
FROM base AS test
COPY . .
RUN yarn install
CMD ["yarn", "test:watch"]

# ---- Development ----
FROM base AS dev
COPY . .
RUN yarn install
CMD ["yarn", "run","start:debug"]


# ---- Build ----
FROM base AS build
COPY . .
RUN yarn install
CMD ["yarn", "build"]


# ---- Production ----
FROM node:18 AS prod
WORKDIR /app
COPY --from=build /app/build ./build
RUN yarn install --production
CMD ["node", "build/index.js"]