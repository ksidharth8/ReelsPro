// Purpose: The main page(home page) of the application.

// Import the required modules.
import { apiClient } from "@/lib/api-client";
import { IVideo } from "@/models/Video";
import { useEffect, useState } from "react";

// Define the Home component.
export default function Home() {
	// Define the state variable.
	const [videos, setVideos] = useState<IVideo[]>([]);

	// Fetch the videos from the API.
	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const data = await apiClient.getVideos();
				setVideos(data);
			} catch (error) {
				console.error("Failed to fetch videos", error as Error);
			}
		};
		fetchVideos();
	}, []); // Empty dependency array to run only for the first render.

	return (
		<div>
			<h1>Home</h1>
		</div>
	);
}
