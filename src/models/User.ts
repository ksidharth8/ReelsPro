// Purpose: Define the User model.

// Importing the required modules.
import mongoose, { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";

// Defining the User interface.
interface IUser {
	email: string;
	password: string;
	_id?: mongoose.Types.ObjectId;
	createdAt?: Date;
	updatedAt?: Date;
}

// Defining the User schema.
const UserSchema = new Schema<IUser>(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

// Hashing the password before saving the user.
UserSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 10);
	}
	// Calling the next middleware.
	next();
});

// Defining the User model if it doesn't exist.
const User = models?.User || model<IUser>("User", UserSchema);

// Exporting the User model.
export default User;
