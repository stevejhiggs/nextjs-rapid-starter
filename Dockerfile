
FROM node:14-alpine AS build-env

# Deal with packages up front to allow us to use docker layers efficiently
WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn --pure-lockfile
# Bundle app source
COPY . .
RUN yarn build
# just use production packages
RUN rm -rf ./node_modules && yarn --pure-lockfile --production

# re-start from a blank alpine image
FROM node:14-alpine
WORKDIR /opt/app
# copy the build artifacts
COPY --from=build-env /opt/app .

# create a user to run as
RUN addgroup --gid 1001 -S app && adduser --uid 1001 -S -G app app
USER 1001

EXPOSE 3000
ENTRYPOINT ["npm", "run", "production"]
