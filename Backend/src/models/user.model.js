import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const userSchema = new Schema({
    books :[{
        type: Schema.Types.ObjectId,
        ref: "Book",
    }],

})

module.exports = mongoose.model("user",userSchema);