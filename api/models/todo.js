import Mongoose from "mongoose";
/**
 * Model the mongoose schema
 */
const TodoSchema = new Mongoose.Schema({

    "title": {
        type: String,
        required: "Title is required field."
    },
    "description": {
        type: String,
        required: "Description is required field."
    }
    , 
    "creatDate": {
        type: Date,
        default: Date.now
    },
    "lastModifiedDate": {
        type: Date,
        default: Date.now
    }
},
{
    //setting the versionkey to false
versionKey: false 
});

TodoSchema.virtual('id', () => this._id.toHexString());
TodoSchema.set('toJSON', {virtuals: true});
//Creating the model Todo and TodoSchema (mongoose schema)
const Todo = Mongoose.model('Todo' , TodoSchema);
//default export of Todo
export default Todo;