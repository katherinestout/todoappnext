
import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const todoSchema = new Schema({
    todo:String,
    isComplete: Boolean

});

const Todo = models.Todo || model('Todo', todoSchema)

export default Todo;