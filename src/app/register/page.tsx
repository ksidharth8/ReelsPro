// Purpose: Register user page.

"use client";

// Import the required modules.
import { useRouter } from "next/navigation";
import React, { useState } from "react";

// Define the Register component.
const Register = () => {
    // Define the state variables.
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState<string | null>(null);

    // Define the router for navigation.
	const router = useRouter();

    // Define the submit handler function.
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

        // Check if the passwords match.
		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

        // Try to register the user.
		try {
			const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});
			const data = await res.json();

            // Check if the registration was successful and redirect to the login page.
			if (res.ok) {
				router.push("/login");
			} else {
				setError(data.error);
			}
		} catch (error) {
			setError("An error occurred while registering");
		}
	};

	return <div>Register</div>;
};

export default Register;
