# Prisma Adapter Issue

## Get started
- `docker compose up -d`
- wait for a minute, until keycloak is ready
- go to `localhost:8095`
- login with username `user` and password `bitnami`
- Create a new realm (by clicking on `master`), call it `Test`
- Go to clients and create a client (call it `authjs`)
- Select authentication: yes
- set redirect uris to `*` and save 
- go to credentials, copy client secret and add the following to `.env`:
    ```
    KEYCLOAK_CLIENT_ID=authjs
    KEYCLOAK_CLIENT_SECRET=YOUR_CLIENT_SECRET
    ```
- run `yarn`
- run `yarn dev`
- go to `localhost:5137`, click on login, create a user and login. Then, you get the error.