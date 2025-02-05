// Purpose: Contains the Header component which is responsible for rendering the header of the application.

"use client";

// Import the required modules
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

// Define the Header component
function Header() {
    // Fetch the session data
	const { data: session } = useSession();

    // Define the sign out function
	const handleSignOut = async () => {
		try {
			await signOut();
		} catch (error) {
			console.error("Failed to sign out", error as Error);
		}
	};
	return (
		<div>
			<button onClick={handleSignOut}>SignOut</button>
			{session ? (
				<div>Welcome</div>
			) : (
				<div>
					<Link href="/login">Login</Link>
					<Link href="/register">Register</Link>
				</div>
			)}
		</div>
	);
}

export default Header;
