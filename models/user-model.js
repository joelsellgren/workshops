import mongoose from "mongoose";

const userSchema = {
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be atleast 8 characters'],
        select: false
    }
}

const User = mongoose.model('User', userSchema);
export default User;