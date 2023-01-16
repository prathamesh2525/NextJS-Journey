import NextAuth from "next-auth/next"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "ae1929445b21ab6e5aaa",
      clientSecret: "1818c94676f9b138e1613382cb68fe41b199bcd5",
    }),
  ],
}

export default NextAuth(authOptions)
