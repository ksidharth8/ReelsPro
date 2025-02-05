// Purpose: Component to upload images and videos to ImageKit.

"use client";

// Import the required modules
import React, { useState } from "react";
import { IKUpload } from "imagekitio-next";
import { Loader2 } from "lucide-react";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";

// Define the FileUploadProps interface with onSuccess, onProgress, and fileType as props.
interface FileUploadProps {
	onSuccess: (res: IKUploadResponse) => void;
	onProgress?: (progress: number) => void;
	fileType?: "image" | "video";
}

// Define and export the FileUpload component.
export default function FileUpload({
	onSuccess,
	onProgress,
	fileType = "image",
}: FileUploadProps) {
	// Define the state variables and functions.
	const [uploading, setUploading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	// Define the onError function to handle errors.
	const onError = (err: { message: string }) => {
		console.log("Error: ", err);
		setError(err.message);
		setUploading(false);
	};

	// Define the handleSuccess function to handle successful uploads.
	const handleSuccess = (response: IKUploadResponse) => {
		console.log("Success: ", response);
		setUploading(false);
		setError(null);
		// Call the onSuccess function with the response data.
		onSuccess(response);
	};

	// Define the handleProgress function to handle the upload progress and return the percentage.
	const handleProgress = (evt: ProgressEvent) => {
		if (evt.lengthComputable && onProgress) {
			const percentComplete = (evt.loaded / evt.total) * 100;
			onProgress(Math.round(percentComplete));
		}
	};

	// Define the handleStartUpload function.
	const handleStartUpload = () => {
		setUploading(true);
		setError(null);
	};

	// Define the validateFile function to validate the file type and size.
	const validateFile = (file: File) => {
		// Check if the file type is video and validate its size.
		if (fileType === "video") {
			if (!file.type.startsWith("video/")) {
				setError("Please upload a video file");
				return false;
			}
			if (file.size > 100 * 1024 * 1024) {
				setError("File size should be less than 100MB");
				return false;
			}
		} else {
			// Check if the file type is image and validate its type.
			const validTypes = ["image/jpeg", "image/png", "image/webp"];
			if (!validTypes.includes(file.type)) {
				setError("Please upload a valid image file [jpeg, png, webp]");
				return false;
			}
		}
		return false;
	};

	// Return the FileUpload component with the IKUpload component, loader and error message.
	return (
		<div className="space-y-2">
			<IKUpload
				fileName={fileType === "video" ? "video" : "image"}
				onError={onError}
				onSuccess={handleSuccess}
				onUploadStart={handleStartUpload}
				onUploadProgress={handleProgress}
				accept={fileType === "video" ? "video/*" : "image/*"}
				className="file-input file-input-bordered w-full"
				validateFile={validateFile}
				useUniqueFileName={true}
				folder={fileType === "video" ? "/videos" : "/images"}
			/>
			{uploading && (
				<div className="flex items-center gap-2 text-sm text-primary">
					<Loader2 className="animate-spin w-4 h-4" />
					<span>Uploading...</span>
				</div>
			)}
			{error && <div className="text_error text-sm">{error}</div>}
		</div>
	);
}
