import mongoose , {Schema} from 'mongoose'

const adminSchema = new Schema({
    fullname: {
        type: String,
        trim: true,
        required: true
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
    uploads :{
        type: String,
        required: true
    }
  
    
    
},
{
    timestamps: true
}
    
    
);


module.exports = mongoose.model("admin",adminSchema);