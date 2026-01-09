import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Access",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        console.log("--- INTENTO DE LOGIN ---");
        console.log("Usuario ingresado:", credentials?.username);
        console.log("Contraseña ingresada:", credentials?.password);
        console.log(
          "Variables de entorno (Server):",
          process.env.ADMIN_USER,
          process.env.ADMIN_PASS
        );
        if (
          credentials?.username === process.env.ADMIN_USER &&
          credentials?.password === process.env.ADMIN_PASS
        ) {
          return {
            id: "1",
            name: "Author",
            email: "admin@silentbeauty.dev",
          };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
