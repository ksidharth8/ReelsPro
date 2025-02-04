// Purpose: Define the route for the NextAuth API.

// Import required modules
import { nextAuthOptions } from "@/lib/nextAuthOptions";
import NextAuth from "next-auth";

// Define the handler for the route
const handler = NextAuth(nextAuthOptions);

// Export the handler
export { handler as GET, handler as POST };
