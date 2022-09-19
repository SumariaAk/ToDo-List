import Todo from "../models/todo.js";

/**
 * Search method 
 * @param {*} params 
 * @returns promise
 */
export const search = (params = {}) => {
    
    const promise = Todo.find(params).exec();
    return promise;
};

/**
 * Create method 
 * @param {*} todo 
 * @returns newtodo
 */
export const create = (todo) => {
    const newtodo = new Todo(todo);
    return newtodo.save();
}
/**
 * Get method
 * @param {*} id 
 * @returns promise
 */
export const get = (id) => {
    const promise = Todo.findById(id).exec();
    return promise;
}
/**
 * Update method
 * @param {*} todo 
 * @returns promise
 */
export const update = (todo) => {
    todo._id = todo.id;
    const promise = Todo.findByIdAndUpdate(todo.id, todo, {new: true}).exec();
    return promise;
}
/**
 * Remove method
 * @param {*} id 
 * @returns promise
 */
export const remove = (id) => {
    const promise = Todo.findByIdAndRemove(id).exec();
    return promise;
}
