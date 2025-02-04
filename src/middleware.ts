// Purpose: Define the middleware for the Next.js app.

// Import the required modules
import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";

// Define the middleware and export it.
export default withAuth(
	function middleware() {
		// Return the NextResponse object to allow the request to continue.
		return NextResponse.next();
	},
	{
		// Define the callbacks object to handle the authorization logic.
		callbacks: {
			authorized: ({ token, req }) => {
				// Get the pathname from the nextUrl object
				const { pathname } = req.nextUrl;

				// Allow auth related routes
				if (
					pathname.startsWith("/api/auth") ||
					pathname === "/login" ||
					pathname === "/register"
				) {
					return true;
				}

				// Allow public routes
				if (pathname.startsWith("/api/videos") || pathname === "/") {
					return true;
				}

				// Block all other routes
				return !token;
			},
		},
	}
);

// Define the config object to specify the routes to apply the middleware to.
export const config = {
	// Exclude the static and public folders
	matcher: ["/((?!_next/static|_next/image|favicon.ico|public/).*)"],
};
