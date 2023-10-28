import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import 'dotenv/config';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: '/',
    signOut: '/',
  }
});

export { handler as GET, handler as POST };
