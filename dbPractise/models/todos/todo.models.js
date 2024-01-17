import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,

        },
        complete: {
            type: Boolean,
            default: false
        },
        createdBy: {
            //reference from a different model
            type: mongoose.Schema.Types.ObjectId,
            //Name given in the export of the model 
            ref: "User",
        },
        //array of subtodos
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            }
        ]
    },
    {
        timestamps: true
    }
)

export const Todo = mongoose.model("Todo", todoSchema);