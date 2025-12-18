import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true

    },
    Email: {
        type: String,
        required: true
    },
    Contact: {
        type: String,
        required: true,
        minLength: 10,
    },
    Address: {
        type: String,
        required: true,

    }

})
export const User = model('User', userSchema);