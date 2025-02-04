// Purpose: Define the Video model.

// Importing the required modules.
import mongoose, { Schema, model, models } from "mongoose";

// Defining the Video dimensions.
export const VIDEO_DIMENSIONS = {
	width: 1080,
	height: 1920,
} as const;

// Defining the Video interface.
interface IVideo {
	_id?: mongoose.Types.ObjectId;
	title: string;
	description: string;
	videoUrl: string;
	thumbnailUrl: string;
	controls?: boolean;
	transformation?: {
		width: number;
		height: number;
		quality?: number;
	};
	createdAt?: Date;
	updatedAt?: Date;
}

// Defining the Video schema.
const VideoSchema = new Schema<IVideo>(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		videoUrl: {
			type: String,
			required: true,
		},
		thumbnailUrl: {
			type: String,
			required: true,
		},
		controls: {
			type: Boolean,
			default: true,
		},
		transformation: {
			type: {
				width: {
					type: Number,
					default: VIDEO_DIMENSIONS.width,
				},
				height: {
					type: Number,
					default: VIDEO_DIMENSIONS.height,
				},
				quality: {
					type: Number,
					min: 1,
					max: 100,
				},
			},
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

// Defining the Video model if it doesn't exist.
const Video = models?.Video || model<IVideo>("Video", VideoSchema);

// Exporting the Video model.
export default Video;
