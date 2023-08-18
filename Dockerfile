# ###################
# # BUILD FOR LOCAL DEVELOPMENT
# ###################

# FROM node:18-alpine As development

# # Create app directory
# WORKDIR /usr/src/app

# COPY package*.json ./
# COPY yarn.lock ./

# RUN yarn install --immutable --immutable-cache --check-cache

# COPY . .

# ###################
# # BUILD FOR PRODUCTION
# ###################

# FROM node:18-alpine As build

# WORKDIR /usr/src/app

# COPY package*.json ./
# COPY yarn.lock ./

# COPY --from=development /usr/src/app/node_modules ./node_modules

# COPY . .

# RUN yarn build

# ENV NODE_ENV production

# RUN yarn install --immutable --immutable-cache --check-cache --only=production && yarn cache clean

# ###################
# # PRODUCTION
# ###################

# FROM node:18-alpine As production

# # Copy the bundled code from the build stage to the production image
# COPY --from=build /usr/src/app/node_modules ./node_modules
# COPY --from=build /usr/src/app/dist ./dist

# # Start the server using the production build
# CMD ["node", "dist/main.js" ]

# FROM node:18

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# ENV PORT = 3000

# EXPOSE 3000

# CMD [ "npm", "run", "start:dev" ]