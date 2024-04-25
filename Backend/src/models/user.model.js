import mongoose, {Schema} from 'mongoose';
const userSchema = new Schema(
    {
        fullname: {
            type: String,
            trim: true,
            required: true
        },
        username: {
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
            required: true,
            index: true
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
            required: true,
            index: true
        },
        password: {
            type: String,
            trim: true,
            required: true,
        },
        contact: {
            type: Number,
            trim: true,
            required: true,
            unique: true,
            max: 10,
            min: 10
        },
        address: {
            type: String,
            required: true,
            max: 60
        }
    }
);

export const User = mongoose.model("User", userSchema);