//import mongoose
import mongoose from "mongoose";

//creating of Schema
//Schema is a function which takes objects
const userSchema = new mongoose.Schema(
    {
        /*
        username: String,
        email: String,
        isActive: Boolean
        */

        //by creation of object
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        emai: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, "password is required!"],

        }
    },
    {
        //it tells us about 1.createdAt 2.UpdatedAt
        timestamps: true
    }
)

//export the schema

//mongoose model takes (which model is to be made, based on what model is to be made)
export const User = mongoose.model("User", userSchema);
