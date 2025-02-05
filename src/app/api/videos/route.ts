// Purpose: Define the Video route.

// Import the required modules.
import { connectToDatabase } from "@/lib/db";
import { nextAuthOptions } from "@/lib/nextAuthOptions";
import Video, { IVideo } from "@/models/Video";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

// Define the GET request handler.
export async function GET() {
	try {
		// Connect to the database and fetch all videos sorted by creation date.
		await connectToDatabase();
		const videos = await Video.find({}).sort({ createdAt: -1 }).lean(); // Lean to convert to plain JS object.

		// If no videos are found, return a 404 response.
		if (!videos || videos.length === 0) {
			return NextResponse.json(
				{ message: "No videos found" },
				{ status: 404 }
			);
		}

		// Return the videos in the response.
		return NextResponse.json(videos);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch videos" },
			{ status: 500 }
		);
	}
}

// Define the POST request handler.
export async function POST(request: NextRequest) {
	try {
		// Get the user session.
		const session = await getServerSession(nextAuthOptions);
		if (!session) {
			return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
		}

		// Connect to the database.
		await connectToDatabase();

		// Get the video data from the request body.
		const body: IVideo = await request.json();

		if (
			!body.title ||
			!body.description ||
			!body.videoUrl ||
			!body.thumbnailUrl
		) {
			return NextResponse.json(
				{ message: "Missing required fields" },
				{ status: 400 }
			);
		}

		// Create a new video with the provided data.
		const videoData = {
			...body,
			controls: body.controls ?? true,
			transformation: {
				height: 1920,
				width: 1080,
				quality: body.transformation?.quality ?? 100,
			},
		};

		// Save the new video to the database and return it in the response.
		const newVideo = await Video.create(videoData);
		return NextResponse.json(newVideo, { status: 201 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to create video" },
			{ status: 500 }
		);
	}
}
