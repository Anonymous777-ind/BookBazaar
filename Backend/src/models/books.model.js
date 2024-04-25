import mongoose, {Schema} from 'mongoose';

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        description : {
            type: String,
            required: true,
        },
        image: {
            type: String
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
        },
        price: {
            type: Number,
            required : true
        },
        quantity: [{
            sold : {
                type: Number,
                required: true
            },
            available : {
                type: Number,
                required: true
            }
        }]
    }
);

export const Books = mongoose.model("Books", bookSchema);