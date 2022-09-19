import { request, response } from 'express';
import * as todoService from '../services/todo.js'; //importing all the exports

//checking errors
const errorhandler = (message, response) => {

    response.status(500);
    response.json({ error : message });
}

//checking the success response 
const setSuccessResponse = (data, response) => {
    response.status(200);
    response.json(data);
};

//async function to search
export const index = async (request, response ) => {
    try {
    const contacts = await todoService.search();
    setSuccessResponse(contacts, response);
    }catch(e) {
        errorhandler(e.message, response);  
    }
};

//async function to save
export const save = async(request, response) => {
    try{
        const contact = {...request.body}; //making a shallow copy of the body using '...' 
        const newContact = await todoService.create(contact)
        setSuccessResponse(newContact, response);
    }catch(e){
        errorhandler(e.message, response); 
    }
};
//async function to get
export const get = async(request, response) => {
    try{
        const id = request.params.id;
        const contact = await todoService.get(id)
        setSuccessResponse(contact, response);
    }catch(e){
        errorhandler(e.message, response); 
    }
};
//async function to update
export const update = async(request, response) => {
    try{
        const id = request.params.id;
        const c = {...request.body, id}; //making a shallow copy of the body using '...' 
        const contact = await todoService.update(c)
        setSuccessResponse(contact, response);
    }catch(e){
        errorhandler(e.message, response); 
    }
};
//async function to remove
export const remove = async(request, response) => {
    try{
        const id = request.params.id;
        const contact = await todoService.remove(id)
        setSuccessResponse({message: `Todo: ${id} removed successfully.`}, response);
    }catch(e){
        errorhandler(e.message, response); 
    }
};