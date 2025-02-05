// Purpose: Define a class to interact with the API.

// Import the required modules.
import { IVideo } from "@/models/Video";

// Define the VideoFormData & FetchOptions type.
export type VideoFormData = Omit<IVideo, "_id">;
type FetchOptions = {
	method?: "GET" | "POST" | "PUT" | "DELETE";
	body?: any;
	headers?: Record<string, string>;
};

// Define the ApiClient class to interact with the API.
class ApiClient {
    // Define the fetch method to make API requests.
	private async fetch<T>(
		endpoint: string,
		options: FetchOptions = {}
	): Promise<T> {
        // Define the default options.
		const { method = "GET", body, headers = {} } = options;
		const defaultHeaders = { "Content-Type": "application/json", ...headers };

        // Make the API request.
		const response = await fetch(`/api/${endpoint}`, {
			method,
			headers: defaultHeaders,
			body: body ? JSON.stringify(body) : undefined,
		});

        // Check if the response is successful.
		if (!response.ok) {
			throw new Error(await response.text());
		}
		return response.json();
	}

    // Define the getVideos method to fetch all videos.
	async getVideos() {
		return this.fetch<IVideo[]>("videos");
	}

    // Define the getAVideo method to fetch a single video by ID.
	async getAVideo(id: string) {
		return this.fetch<IVideo>(`videos/${id}`);
	}

    // Define the createVideo method to create a new video.
	async createVideo(videoData: VideoFormData) {
		return this.fetch<IVideo>("videos", {
			method: "POST",
			body: videoData,
		});
	}
}

// Export an instance of the ApiClient class.
export const apiClient = new ApiClient();
