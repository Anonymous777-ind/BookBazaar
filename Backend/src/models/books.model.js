import mongoose, {Schema} from 'mongoose';

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        author: {
            type: String,
            required: true,
            lowercase: true,
        },
        category: {
            type: String,
            required: true,
            lowercase: true,
        }
    }
);

export const Books = mongoose.model("Books", bookSchema);