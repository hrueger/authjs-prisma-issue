import { SvelteKitAuth } from "@auth/sveltekit"
import Keycloak from "@auth/core/providers/keycloak"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import d from "dotenv";
d.config();
const { KEYCLOAK_CLIENT_ID, KEYCLOAK_CLIENT_SECRET } = process.env;

const prisma = new PrismaClient()

export const handle = SvelteKitAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Keycloak({
        clientId: KEYCLOAK_CLIENT_ID,
        clientSecret: KEYCLOAK_CLIENT_SECRET,
        issuer: `http://localhost:8095/realms/Test`,
    }) as any],
    secret: "asdasdasdasd",
    trustHost: true
})